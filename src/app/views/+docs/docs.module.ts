import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { DocsBrowserViewComponent } from './docs-browser-view/docs-browser-view.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { DocsSubnavComponent } from './docs-subnav/docs-subnav.component';
import * as glob from 'glob';
import * as path from 'path';

@NgModule({
    declarations: [
        DocsBrowserViewComponent,
        DocViewerComponent,
        DocsSubnavComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            Object.assign({ path: '', component: DocsBrowserViewComponent }, { preRenderParams: () => {
                return glob.sync('./dist/docs/**/*.*md').map(docPath => {
                    let docUrl = path.relative('./dist/docs', docPath);
                    return docUrl.substring(0, docUrl.length - 'md'.length) + 'html';
                });
            } }),
            { path: '**', component: DocsBrowserViewComponent },
        ]),
    ],
})
export default class DocsModule {

}
