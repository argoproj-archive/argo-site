import { DocsTree } from '../../services';

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
