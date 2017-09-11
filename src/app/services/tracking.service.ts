import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

let initializationPromise: Promise<any> = null;

@Injectable()
export class TrackingService {

    private installEvent = new EventEmitter();

    constructor(private router: Router) {
    }

    public initialize(gaId: string): Promise<any> {
        if (!initializationPromise) {
            initializationPromise = this.doInitialize(gaId);
        }
        return initializationPromise;
    }

    public trackInstallCopied() {
        this.installEvent.emit({});
    }

    private loadGa(): Promise<any> {
        return new Promise(resolve => {
            let script = require('scriptjs');
            script('https://www.google-analytics.com/analytics.js', () => {
                resolve(window['ga']);
            });
        });
    }

    private doInitialize(gaId: string): Promise<any> {
        return this.loadGa().then(ga => {
            ga('create', gaId, 'auto');
            ga('send', 'pageview', this.router.routerState.snapshot.url);
            this.installEvent.subscribe(() => { ga('send', 'event', 'goal', 'install-copied'); });
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    ga('send', 'pageview', event.url);
                }
            });
        });
    }
}
