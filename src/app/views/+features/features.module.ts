import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { FeaturesComponent } from './features.component';

@NgModule({
    declarations: [
        FeaturesComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: FeaturesComponent },
        ]),
    ],
})
export default class FeaturesModule {

}
