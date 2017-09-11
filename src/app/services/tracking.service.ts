import { Injectable, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

let initializationPromise: Promise<any> = null;

@Injectable()
export class TrackingService {

    private installEvent = new EventEmitter();

    constructor(private router: Router) {
    }

    public initialize(gaId: string, adConversion: { label: string, id: string }): Promise<any> {
        if (!initializationPromise) {
            initializationPromise = this.doInitialize(gaId, adConversion);
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

    private doInitialize(gaId: string, adConversion: { label: string, id: string }): Promise<any> {
        let promises = [];
        if (gaId) {
            promises.push(this.loadGa().then(ga => {
                ga('create', gaId, 'auto');
                ga('send', 'pageview', this.router.routerState.snapshot.url);
                this.installEvent.subscribe(() => { ga('send', 'event', 'goal', 'install-copied'); });
                this.router.events.subscribe(event => {
                    if (event instanceof NavigationEnd) {
                        ga('send', 'pageview', event.url);
                    }
                });
            }));
        }
        if (adConversion.id && adConversion.label) {
            this.installEvent.subscribe(() => {
                let image = new Image(1, 1);
                image.onload = () => {
                    image.remove();
                };
                image.src = `//www.googleadservices.com/pagead/conversion/${adConversion.id}/?label=${adConversion.label}&script=0`;
                document.body.appendChild(image);
            });
        }
        return Promise.all(promises);
    }
}
