import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DocsVersion, DocsTree } from './dto';

let elasticlunr = require('elasticlunr');

export interface DocSearchItem {path: string; score: number; title: string; body: string; }

@Injectable()
export class DocsService {

    private indexPromiseByVersion = new Map<string, Promise<any>>();

    public constructor(private http: Http) {
    }

    public getVersions(): Promise<DocsVersion[]> {
        return this.http.get('docs/versions.json').toPromise().then(res => res.json());
    }

    public loadDocsTree(version: DocsVersion): Promise<DocsTree> {
        return this.http.get(`docs${version.path}/structure.json`).toPromise().then(res => res.json());
    }

    public loadDocMarkdown(version: DocsVersion, path: string) {
        return this.http.get(`docs${version.path}/${path}`).toPromise().then(res => res.text());
    }

    public async search(text: string, version: DocsVersion): Promise<DocSearchItem[]> {
        let index = await this.getIndexForVersion(version);
        return index.search(text).map(item => {
            let doc = index.documentStore.getDoc(item.ref);
            return {
                path: item.ref,
                score: item.score,
                body: doc.body,
                title: doc.title,
            };
        });
    }

    private getIndexForVersion(version: DocsVersion) {
        let res = this.indexPromiseByVersion.get(version.version);
        if (!res) {
            res = this.loadIndex(version);
            this.indexPromiseByVersion.set(version.version, res);
        }
        return res;
    }

    private async loadIndex(version: DocsVersion): Promise<any> {
        let indexData = await this.http.get(`docs${version.path}index.json`).toPromise().then(res => res.json());
        return elasticlunr.Index.load(indexData);
    }
}
