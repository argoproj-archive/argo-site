import { DocsTree } from '../../services';
import * as path from 'path';

export class DocsTreeInfo implements DocsTree {
    public children: DocsTree[];

    public nodeByPath = new Map<string, DocsTree>();

    constructor(docsTree: DocsTree) {
        this.children = docsTree.children || [];
        for (let child of this.children) {
            this.addParent(child);
        }
        let items = this.children.slice();
        while (items.length > 0) {
            let item = items.pop();
            this.nodeByPath.set(item.path, item);
            (item.children || []).forEach(child => items.push(child));
        }
    }

    private addParent(node: DocsTree) {
        if (!node.children) {
            return;
        }

        for (let child of node.children) {
            child.parent = node;
            if (child.children) {
                this.addParent(child);
            }
        }
    }
}

export const Utils = {
    docRoute(docPath: string) {
        let fileName = path.basename(docPath, path.extname(docPath)) + '.html';
        return ['/docs'].concat(decodeURIComponent(path.join(path.dirname(docPath), fileName)).split('/'));
    },
    docPath(route: string[]) {
        if (route.length === 0) {
            return '';
        }
        let url = route.join('/');
        let fileName = path.basename(url, path.extname(url)) + '.md';
        return path.join(path.dirname(url), fileName);
    },
};
