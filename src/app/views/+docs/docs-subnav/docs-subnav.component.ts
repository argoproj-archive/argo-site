import { Component, Input } from '@angular/core';

import { DocsTree } from '../../../services';
import { Utils } from '../view-models';

@Component({
    selector: 'argo-docs-subnav',
    templateUrl: './docs-subnav.html',
    styles: [ require('./docs-subnav.scss').toString() ],
})
export class DocsSubnavComponent {

    @Input()
    public tree: DocsTree;

    public docRoute(path: string) {
        return Utils.docRoute(path);
    }
}
