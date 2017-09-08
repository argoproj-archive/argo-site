import { Component, AfterViewChecked, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { MetaService } from '@ngx-meta/core';

import { PageSettings } from '../common';

@Component({
    selector: 'argo-main',
    templateUrl: './main.html',
    styles: [
        require('./main.scss').toString(),
    ],
})
export class MainComponent implements AfterViewChecked {

    public showNav: boolean;
    @ViewChild(RouterOutlet)
    public routerOutlet: RouterOutlet;

    constructor(
        private router: Router,
        private metaService: MetaService,
        @Inject(PLATFORM_ID) private platformId) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showNav = false;
            }
        });
    }

    public onDeactivate() {
        if (isPlatformBrowser(this.platformId)) {
            document.body.scrollTop = 0;
        }
    }

    public toggleNav() {
        this.showNav = !this.showNav;
    }

    public get pageSettings(): PageSettings {
        let settings: PageSettings = null;
        if (this.routerOutlet && this.routerOutlet.isActivated) {
            let pageComponent = this.routerOutlet.component;
            settings = pageComponent as PageSettings;
        }
        return settings || {};
    }

    public ngAfterViewChecked() {
        this.metaService.setTitle(
            this.pageSettings.pageTitle ? `${this.pageSettings.pageTitle} | Argo` : 'Argo',
            true);
        this.metaService.setTag('description', this.pageSettings.pageDescription || '');
    }
}
