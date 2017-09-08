import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

import { DocsService, DocsTree, DocsVersion } from '../../../services';
import { DocsTreeInfo, Utils } from '../view-models';
import { PageSettings, HasPageSettings } from '../../../common';

const PAGE_TITLE = 'Documentation for open source workflow engine on Kubernetes';
const PAGE_DESCRIPTION = 'Documentation for Argo, open source workflow engine for Kubernetes. Tutorials, User guide, CLI reference, FAQs, release notes.';

@Component({
    selector: 'argo-docs-browser-view',
    templateUrl: './docs-browser-view.html',
    styles: [ require('./docs-browser-view.scss').toString() ],
})
export class DocsBrowserViewComponent implements OnInit, PageSettings, HasPageSettings {

    public get pageTitle(): string {
        return this.selectedTree && this.selectedTree.summary || PAGE_TITLE;
    }

    public get pageDescription(): string {
        return this.selectedTree && this.selectedTree.details || PAGE_DESCRIPTION;
    }

    public settings = this;

    public tree: DocsTreeInfo;
    public selectedTree: DocsTree;
    public docsVersion: DocsVersion;

    public selectedDocPath: string;
    public selectedVersion: string;
    public selectedDocContent: string;
    public searchText: string;
    public searchItems: { DocSearchItem, summary: SafeHtml }[] = null;
    public navOpen: boolean;

    private versions: DocsVersion[] = [];
    private loadedDocPath: string;

    constructor(
        private docsService: DocsService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId) {
    }

    public async ngOnInit() {
        this.versions = await this.docsService.getVersions();
        this.route.params.subscribe(async params => {
            this.searchText = params['search'];
            if (this.searchText) {
                this.searchItems = (await this.docsService.search(this.searchText, this.docsVersion)).map(
                    item => Object.assign({}, item, {summary: this.getSearchSummary(this.searchText, item.body)}));
            } else {
                this.searchItems = null;
            }

            if (isPlatformBrowser(this.platformId)) {
                document.body.scrollTop = 0;
            }
        });
        this.route.url.subscribe(async segements => {
            let version = this.versions[0].version;
            if (this.selectedVersion !== version) {
                this.selectedVersion = version;
                this.docsVersion = this.versions.find(info => info.version === this.selectedVersion);
                this.tree = new DocsTreeInfo(await this.docsService.loadDocsTree(this.docsVersion));
                this.loadedDocPath = null;
            }

            this.selectedDocPath = Utils.docPath(segements.map(item => item.path)) || this.tree.children[0].path;
            if (this.loadedDocPath !== this.selectedDocPath) {
                this.selectedDocContent = await this.docsService.loadDocMarkdown(this.docsVersion, this.selectedDocPath);
                this.loadedDocPath = this.selectedDocPath;
            }
            this.selectedTree = this.searchTree(this.tree, this.selectedDocPath);
        });
    }

    public get breadcrumbs() {
        let breadcrumbs = [];
        if (this.selectedTree) {
            for (let parent = this.selectedTree.parent; parent; parent = parent.parent) {
                breadcrumbs.unshift(parent);
            }
        }
        breadcrumbs.push(this.selectedTree);
        return breadcrumbs;
    }

    public async search() {
        this.router.navigate([{search: this.searchText || ''}]);
    }

    public toggleNav(value?: boolean) {
        this.navOpen = typeof value !== 'undefined' ? value : !this.navOpen;
    }

    public docRoute(path: string) {
        return Utils.docRoute(path);
    }

    private getSearchSummary(searchText: string, docText: string): SafeHtml {
        let regexp = new RegExp(`(${searchText})`, 'gi');
        let firstIndex = docText.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase());
        docText = docText.substring(Math.max(firstIndex - 50, 0));
        let summary = docText.replace(regexp, (match, text) => `<span class="docs-browser-view__highlight">${text}</span>`);
        return this.sanitizer.bypassSecurityTrustHtml(summary);
    }

    private searchTree(element: DocsTree, matchingPath: string) {
        if (element.path === matchingPath) {
            return element;
        } else if (element.children) {
            let result = null;
            for (let i = 0; result == null && i < element.children.length; i++) {
                result = this.searchTree(element.children[i], matchingPath);
                if (result) {
                    result = Object.assign({}, result, {
                        details: result.details || element.details,
                        summary: result.summary || element.summary,
                    });
                }
            }
            return result;
        }
        return null;
    }
}
