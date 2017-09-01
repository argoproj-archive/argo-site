import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { DocsBrowserViewComponent } from './docs-browser-view/docs-browser-view.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { DocsSubnavComponent } from './docs-subnav/docs-subnav.component';
import { NavButtonComponent } from '../../common/nav-button/nav-button.component';

@NgModule({
    declarations: [
        DocsBrowserViewComponent,
        DocViewerComponent,
        DocsSubnavComponent,
        NavButtonComponent,
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
