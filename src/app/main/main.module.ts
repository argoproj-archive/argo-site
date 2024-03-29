import { NgModule } from '@angular/core';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MetaModule } from '@ngx-meta/core';

import { BaseModule } from '../common';
import { ServicesModule, TrackingService } from '../services';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [
        MainComponent,
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: ENV === 'production' ? PathLocationStrategy : HashLocationStrategy,
    }],
    bootstrap: [ MainComponent ],
    imports: [
        MetaModule.forRoot(),
        ServicesModule,
        BaseModule,
        BrowserModule.withServerTransition({appId: 'argo-main'}),
        RouterModule.forRoot([
            { path: '', loadChildren: () => System.import('../views/+home').then((comp: any) => comp.default) },
            { path: 'get-started', loadChildren: () => System.import('../views/+get-started').then((comp: any) => comp.default) },
            { path: 'docs', loadChildren: () => System.import('../views/+docs').then((comp: any) => comp.default) },
            { path: 'community', loadChildren: () => System.import('../views/+community').then((comp: any) => comp.default) },
            { path: 'features', loadChildren: () => System.import('../views/+features').then((comp: any) => comp.default) },
            { path: '**', redirectTo: '' },
        ], { initialNavigation: 'enabled' }),
    ],
})
export class MainModule {
    constructor(trackingService: TrackingService) {
        let [id, label] = (AD_CONVERSION_CONFIG || '').split('|');
        trackingService.initialize(TRACKING_ID, {id, label});
    }
}
