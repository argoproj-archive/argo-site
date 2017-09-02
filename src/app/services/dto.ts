export interface DocsVersion { version: string; path: string; }

export interface DocsTree { title?: string; summary?: string; details?: string; path?: string; children?: DocsTree[]; parent?: DocsTree; };
