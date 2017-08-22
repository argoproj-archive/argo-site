import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import { DocsService, DocsVersion, DocsTree, DocSearchItem } from '../../../services';
import { DocsTreeInfo } from '../view-models';

@Component({
    selector: 'argo-docs-browser-view',
    templateUrl: './docs-browser-view.html',
    styles: [ require('./docs-browser-view.scss').toString() ],
})
export class DocsBrowserViewComponent implements OnInit {

    public tree: DocsTreeInfo;
    public docsVersion: DocsVersion;

    public selectedDocPath: string;
    public selectedVersion: string;
    public selectedDocContent: string;
    public searchText: string;
    public searchItems: { DocSearchItem, summary: SafeHtml }[] = null;

    private versions: DocsVersion[] = [];
    private loadedDocPath: string;

    constructor(private docsService: DocsService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    }

    public async ngOnInit() {
        this.versions = await this.docsService.getVersions();
        this.route.params.subscribe(async params => {
            let version = params['version'] || this.versions[0].version;
            if (this.selectedVersion !== version) {
                this.selectedVersion = version;
                this.docsVersion = this.versions.find(info => info.version === this.selectedVersion);
                this.tree = new DocsTreeInfo(await this.docsService.loadDocsTree(this.docsVersion));
                this.loadedDocPath = null;
            }

            this.selectedDocPath = params['doc'] || this.tree.children[0].path;
            if (this.loadedDocPath !== this.selectedDocPath) {
                this.selectedDocContent = await this.docsService.loadDocMarkdown(this.docsVersion, this.selectedDocPath);
                this.loadedDocPath = this.selectedDocPath;
            }
            this.searchText = params['search'];
            if (this.searchText) {
                this.searchItems = (await this.docsService.search(this.searchText, this.docsVersion)).map(
                    item => Object.assign({}, item, {summary: this.getSearchSummary(this.searchText, item.body)}));
            } else {
                this.searchItems = null;
            }
        });
    }

    public async search() {
        this.router.navigate([{search: this.searchText || ''}]);
    }

    private getSearchSummary(searchText: string, docText: string): SafeHtml {
        let regexp = new RegExp(`(${searchText})`, 'gi');
        let firstIndex = docText.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase());
        docText = docText.substring(Math.max(firstIndex - 50, 0));
        let summary = docText.replace(regexp, (match, text) => `<span class="docs-browser-view__highlight">${text}</span>`);
        return this.sanitizer.bypassSecurityTrustHtml(summary);
    }
}
