export interface PageSettings {
    pageTitle?: string;
    pageDescription?: string;
}

export interface HasPageSettings {
    settings: PageSettings;
}
