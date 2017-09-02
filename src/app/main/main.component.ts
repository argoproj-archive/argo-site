import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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

    private description = '';

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showNav = false;
            }
        });
    }

    public onDeactivate() {
        document.body.scrollTop = 0;
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
        document.title = this.pageSettings.pageTitle ? `${this.pageSettings.pageTitle} | Argo` : 'Argo';
        let description = this.pageSettings.pageDescription || '';
        if (this.description !== description) {
            this.description = description;
            document.querySelector('meta[name=description]').setAttribute('content', description);
        }
    }
}
