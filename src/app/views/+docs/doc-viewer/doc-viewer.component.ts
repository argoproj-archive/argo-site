import { Component, Input, OnChanges, AfterViewChecked, SimpleChanges, ElementRef } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Converter } from 'showdown';

interface MarkdownExtension {
    regex: RegExp;
    replace: (markdownConverter: Converter, ...args: any[]) => string;
    initClientSide(el: any);
}

@Component({
    selector: 'argo-doc-viewer',
    template: '<div class="doc-viewer markdown-body" [innerHTML]="docHTML"></div>',
    styles: [require('./doc-viewer.scss').toString()],
})
export class DocViewerComponent implements OnChanges, AfterViewChecked {

    @Input()
    public set doc(val: string) {
        this.docHTML = this.sanitizer.bypassSecurityTrustHtml(this.markdownConverter.makeHtml(val || ''));
    }

    public docHTML: SafeHtml;

    private markdownConverter: Converter = null;
    private viewInitialized = false;
    private extensions: MarkdownExtension[] = [this.expandableSectionExtension()];

    constructor(private sanitizer: DomSanitizer, private el: ElementRef) {
        let self = this;
        this.markdownConverter = new Converter({
            tables: true,
            extensions: [<any> this.extensions.map(item => ({
                type: 'lang',
                regex: item.regex,
                /* tslint:disable */
                replace: function() {
                    return item.replace.apply(item, [<any>self.markdownConverter].concat(Array.from(arguments)));
                },
                /* tslint:enable */
            }))],
        });
    }

    public ngAfterViewChecked() {
        if (!this.viewInitialized) {
            this.extensions.forEach(item => item.initClientSide(this.el.nativeElement));
            this.viewInitialized = true;
        }
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['doc'].previousValue !== changes['doc'].currentValue) {
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
