import { Component, Input, OnInit } from '@angular/core';

import { DocsTree } from '../../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'argo-docs-tree',
    templateUrl: './docs-tree.html',
    styles: [require('./docs-tree.scss').toString()],
})
export class DocsTreeComponent implements OnInit {
    @Input()
    public tree: DocsTree = {};

    public currentDoc: string;

    constructor(private route: ActivatedRoute) {
    }

    public get nodes(): DocsTree[] {
        return this.tree.children || [];
    }

    public async ngOnInit() {
        this.route.params.subscribe(async params => {
            this.currentDoc = params['doc'] || '';
        });
    }

    // public isExpanded(node: DocsTree) {
    //     for(node)
    // }
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

    public expanded: boolean;
    public currentDoc: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    public async ngOnInit() {
        this.route.params.subscribe(async params => {
            this.currentDoc = params['doc'] || '';
        });
    }

    public isActive(doc: string) {
        return doc === this.currentDoc;
    }

    public open(node: DocsTree) {
        this.expanded = true;

        if (node.path) {
            this.router.navigate([{ doc: node.path }]);
        }
    }
}