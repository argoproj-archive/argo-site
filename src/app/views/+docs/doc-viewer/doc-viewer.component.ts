import { Component, Input, OnChanges, AfterViewChecked, SimpleChanges, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { LocationStrategy, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Converter, setFlavor } from 'showdown';
let path = require('path');

setFlavor('github');

interface MarkdownExtension {
    regex: RegExp;
    replace: (markdownConverter: Converter, ...args: any[]) => string;
    initClientSide(el: any);
}

@Component({
    selector: 'argo-doc-viewer',
    template: '<div class="doc-viewer" [innerHTML]="docHTML"></div>',
    styles: [require('./doc-viewer.scss').toString()],
})
export class DocViewerComponent implements OnChanges, AfterViewChecked {

    @Input()
    public set docInfo(info: { content?: string, docPath?: string }) {
        info = info || {};
        this.docDir = path.dirname(info.docPath || '');
        this.docHTML = this.sanitizer.bypassSecurityTrustHtml(this.markdownConverter.makeHtml(info.content || ''));
    }

    public docHTML: SafeHtml;

    private markdownConverter: Converter = null;
    private viewInitialized = false;
    private extensions: MarkdownExtension[] = [this.expandableSectionExtension()];
    private docDir = '';

    constructor(private sanitizer: DomSanitizer, private el: ElementRef, private locationStrategy: LocationStrategy, @Inject(PLATFORM_ID) private platformId) {
        let self = this;
        let extensions = [<any> this.extensions.map(item => ({
            type: 'lang',
            regex: item.regex,
            /* tslint:disable */
            replace: function() {
                return item.replace.apply(item, [<any>self.markdownConverter].concat(Array.from(arguments)));
            },
            /* tslint:enable */
        }))];
        extensions.push({
            type: 'output',
            regex: /<img([^>])*src="([^"]*)"/g,
            replace: (match, beforeSrc, src) => {
                src = src.replace(/.*\/images/, 'docs/images');
                return `<img${beforeSrc}src="${src}"`;
            },
        });
        extensions.push({
            type: 'output',
            regex: /<a([^>])*href="([^"]*\.md[^"]*)"/g,
            replace: (match, beforeSrc, url) => {
                [url] = url.split('#');
                url = path.join(this.docDir, url);
                url = url.substring(0, url.length - 'md'.length) + 'html';
                url = this.locationStrategy.prepareExternalUrl(`/docs/${url}`);
                return `<a href="${url}"`;
            },
        });
        this.markdownConverter = new Converter({
            tables: true,
            extensions,
        });
    }

    public ngAfterViewChecked() {
        if (!this.viewInitialized) {
            if (isPlatformBrowser(this.platformId)) {
                this.extensions.forEach(item => item.initClientSide(this.el.nativeElement));
            }
            this.viewInitialized = true;
        }
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (!changes['docInfo'].previousValue || changes['docInfo'].previousValue.content !== changes['docInfo'].currentValue.content) {
            this.viewInitialized = false;
        }
    }

    private expandableSectionExtension(): MarkdownExtension {
        return {
            regex: /^#section(.*)([\s\S]*?)^#section end/gm,
            replace: (markdownConverter: Converter, match, title, content) => {
                let contentHtml = markdownConverter.makeHtml(content);
                return `<div class="doc-viewer__section">
                    <div class="doc-viewer__section__header">
                        <button class="ax-button ax-button--radius-2">
                            <i class="fa fa-angle-down"></i>
                            <i class="fa fa-angle-up"></i>
                        </button>
                        <label>${title}</label>
                    </div>
                    <div class="doc-viewer__section__content">
                        ${contentHtml}
                    </div>
                </div>`;
            },
            initClientSide: (el: any) => {
                $('.doc-viewer__section .doc-viewer__section__header', el).on('click', (e) => {
                    $(e.currentTarget).parent().toggleClass('expanded');
                });
            },
        };
    }
}
