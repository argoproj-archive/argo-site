import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import * as fs from 'fs';
import * as path from 'path';

import { NgModule, CompilerFactory, Compiler, enableProdMode, Injector } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServerModule, platformDynamicServer, INITIAL_CONFIG, renderModuleFactory } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule, MainComponent } from '../src/app/main';
import * as mkdirp from 'mkdirp';

enableProdMode();

let injector: Injector = null;

@NgModule({
    bootstrap: [MainComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'argo-main',
        }),
        ServerModule,
        MainModule,
    ],
})
export class AppServerModule {
    constructor(private appInjector: Injector) {
        injector = appInjector;
    }
}

const compilerFactory: CompilerFactory = platformDynamicServer().injector.get(CompilerFactory);
const compiler: Compiler = compilerFactory.createCompiler();
let indexHtml = fs.readFileSync('./dist_rendered/index.html').toString();

async function savePreRendered(filePath: string, content: string) {
    let isDir = !path.extname(filePath);
    if (isDir) {
        mkdirp.sync(`dist_rendered/${filePath}`);
        fs.writeFileSync(`dist_rendered/${filePath}/index.html`, content);
    } else {
        mkdirp.sync(`dist_rendered/${path.dirname(filePath)}`);
        fs.writeFileSync(`dist_rendered/${filePath}`, content);
    }
}

let renderedUrls = [];

compiler.compileModuleAsync(AppServerModule).then(async factory => {
    await platformDynamicServer([{ provide: INITIAL_CONFIG, useValue: { document: indexHtml, url: '/' } }]).bootstrapModuleFactory(factory);
    let router = injector.get(Router);

    async function renderRoute(parentPath: string, route: Route) {
        let url = path.join(parentPath, route.path);
        if (renderedUrls.indexOf(url) === -1 && route.path !== '**') {
            let content = await renderModuleFactory(factory, {
                document: indexHtml,
                url,
            });
            await savePreRendered(url, content);
            console.info(`Rendered '${url}'`);
            renderedUrls.push(url);
        }

        let children: Route[] = [];
        if (route.loadChildren) {
            router = injector.get(Router);
            let updatedRoute = router.config.find(item => item.path === route.path);
            children = updatedRoute['_loadedConfig'].routes;
        } else {
            children = route.children || [];
        }
        if (route['preRenderParams']) {
            let params = route['preRenderParams']();
            children = children.concat(params.map(param => ({
                path: param,
            })));
        }
        for (let child of children) {
            await renderRoute(url, child);
        }
    }

    for (let route of router.config) {
        await renderRoute('', route);
    }

    fs.writeFileSync(`./dist_rendered/sitemap.txt`,
        renderedUrls.filter(url => url !== '.').map(url => (process.env.BASE_URL || '') + path.join(process.env.HREF_BASE || '', url)).join('\n'));
});
