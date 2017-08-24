import { Component, Input, OnInit } from '@angular/core';

import { DocsTree } from '../../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'argo-docs-tree',
    templateUrl: './docs-tree.html',
    styles: [require('./docs-tree.scss').toString()],
})
export class DocsTreeComponent {
    @Input()
    public tree: DocsTree = {};

    public get nodes(): DocsTree[] {
        return this.tree.children || [];
    }
}

@Component({
    selector: 'argo-docs-tree-node',
    template: `
        <div class="docs-tree__node">
            <a [class.active]="isActive(node.path)" (click)="open(node)"> {{node.title}} </a>
            <div *ngIf="expanded">
              <argo-docs-tree-node [node]="child" *ngFor="let child of (node.children || [])"></argo-docs-tree-node>
            </div>
        </div>`,
})
export class DocsTreeNodeComponent implements OnInit {
    @Input()
    public node: DocsTree = {};

    public currentDoc: string;
    public expanded: boolean;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    public async ngOnInit() {
        this.route.params.subscribe(async params => {
            this.currentDoc = params['doc'] || '';
        });
        this.checkActiveChild();
    }

    public isActive(doc: string) {
        return doc === this.currentDoc;
    }

    public open(node: DocsTree) {
        this.expanded = this.node.path === this.currentDoc ? !this.expanded : true;

        if (node.path) {
            this.router.navigate([{ doc: node.path }]);
        }
    }

    private checkActiveChild() {
        this.expanded = false;

        if (this.node.path === this.currentDoc) {
            this.expanded = true;
        }

        this.hasActiveChild(this.node);
    }

    private hasActiveChild(node: DocsTree) {
        if (node.path === this.currentDoc || this.expanded) {
            this.expanded = true;
            return;
        }

        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                this.hasActiveChild(node.children[i]);
            }
        }

    }
}
