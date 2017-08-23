import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BaseModule } from '../common';
import { ServicesModule, TrackingService } from '../services';
import { AppComponent } from './main.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy,
    }],
    bootstrap: [ AppComponent ],
    imports: [
        ServicesModule,
        BaseModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: '', loadChildren: () => System.import('../views/+home').then((comp: any) => comp.default) },
            { path: 'get-started', loadChildren: () => System.import('../views/+get-started').then((comp: any) => comp.default) },
            { path: 'docs', loadChildren: () => System.import('../views/+docs').then((comp: any) => comp.default) },
            { path: 'features', loadChildren: () => System.import('../views/+features').then((comp: any) => comp.default) },
            { path: 'community', loadChildren: () => System.import('../views/+community').then((comp: any) => comp.default) },
            { path: '**', redirectTo: '' },
        ]),
    ],
})
export class MainModule {
    constructor(trackingService: TrackingService) {
        if (TRACKING_ID) {
            trackingService.initialize(TRACKING_ID);
        }
    }
}
