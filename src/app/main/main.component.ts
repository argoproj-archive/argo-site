import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'argo-main',
    templateUrl: './main.html',
    styles: [
        require('./main.scss').toString(),
    ],
})
export class AppComponent {

    public showNav: boolean;

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
}
