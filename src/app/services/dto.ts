export interface DocsVersion { version: string; path: string; }

export interface DocsTree { title?: string; path?: string; children?: DocsTree[]; };
