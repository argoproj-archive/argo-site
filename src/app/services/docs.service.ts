import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Http } from '@angular/http';
import * as fs from 'fs';

import { DocsVersion, DocsTree } from './dto';

let elasticlunr = require('elasticlunr');

export interface DocSearchItem {path: string; score: number; title: string; body: string; }

@Injectable()
export class DocsService {

    private indexPromiseByVersion = new Map<string, Promise<any>>();

    public constructor(private http: Http, @Inject(PLATFORM_ID) private platformId) {
    }

    public getVersions(): Promise<DocsVersion[]> {
        return this.load('docs/versions.json').then(res => res.json());
    }

    public loadDocsTree(version: DocsVersion): Promise<DocsTree> {
        return this.load(`docs${version.path}/structure.json`).then(res => res.json());
    }

    public loadDocMarkdown(version: DocsVersion, path: string) {
        return this.load(`docs${version.path}/${path}`).then(res => res.text());
    }

    public async search(text: string, version: DocsVersion): Promise<DocSearchItem[]> {
        let index = await this.getIndexForVersion(version);
        return index.search(text).map(item => {
            let doc = index.documentStore.getDoc(item.ref);
            return {
                path: item.ref,
                score: item.score,
                body: doc.body,
                title: doc.title,
            };
        });
    }

    private getIndexForVersion(version: DocsVersion) {
        let res = this.indexPromiseByVersion.get(version.version);
        if (!res) {
            res = this.loadIndex(version);
            this.indexPromiseByVersion.set(version.version, res);
        }
        return res;
    }

    private async loadIndex(version: DocsVersion): Promise<any> {
        let indexData = await this.load(`docs${version.path}index.json`).then(res => res.json());
        return elasticlunr.Index.load(indexData);
    }

    private load(url): Promise<{ text: () => string, json: () => any }> {
        if (isPlatformBrowser(this.platformId)) {
            return this.http.get(url).toPromise();
        } else {
            let content = fs.readFileSync(`./dist/${url}`, 'utf-8');
            return Promise.resolve({
                text() {
                    return content;
                },
                json() {
                    return JSON.parse(content);
                },
            });
        }
    }
}
