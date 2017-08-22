import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent },
        ]),
    ],
})
export default class HomeModule {

}
