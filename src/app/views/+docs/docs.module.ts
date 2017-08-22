import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { DocsBrowserViewComponent } from './docs-browser-view/docs-browser-view.component';
import { DocsTreeComponent, DocsTreeNodeComponent } from './docs-tree/docs-tree.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';

@NgModule({
    declarations: [
        DocsBrowserViewComponent,
        DocsTreeComponent,
        DocsTreeNodeComponent,
        DocViewerComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: DocsBrowserViewComponent },
        ]),
    ],
})
export default class DocsModule {

}
