import { Component, Input } from '@angular/core';

import { DocsTree } from '../../../services';

@Component({
    selector: 'argo-docs-subnav',
    templateUrl: './docs-subnav.html',
    styles: [ require('./docs-subnav.scss').toString() ],
})
export class DocsSubnavComponent {

    @Input()
    public tree: DocsTree;
}
