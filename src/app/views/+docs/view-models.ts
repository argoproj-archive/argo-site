import { DocsTree } from '../../services';

export class DocsTreeInfo implements DocsTree {
    public children: DocsTree[];

    private nodeByPath = new Map<string, DocsTree>();

    constructor(docsTree: DocsTree) {
        this.children = docsTree.children || [];
        let items = this.children.slice();
        while (items.length > 0) {
            let item = items.pop();
            this.nodeByPath.set(item.path, item);
            (item.children || []).forEach(child => items.push(child));
        }
    }
}
