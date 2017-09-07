import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { DocsBrowserViewComponent } from './docs-browser-view/docs-browser-view.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { DocsSubnavComponent } from './docs-subnav/docs-subnav.component';

@NgModule({
    declarations: [
        DocsBrowserViewComponent,
        DocViewerComponent,
        DocsSubnavComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: DocsBrowserViewComponent },
            { path: '**', component: DocsBrowserViewComponent },
        ]),
    ],
})
export default class DocsModule {

}
