import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';
import { FeaturesComponent } from './features.component';
import { FeatureTemplateComponent } from './feature-template/feature-template.component';
import { ContinuousIntegrationComponent } from './continuous-integration/continuous-integration.component';

@NgModule({
    declarations: [
        FeaturesComponent,
        FeatureTemplateComponent,
        ContinuousIntegrationComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: FeaturesComponent, children: [
                { path: 'continuous-integration', component: ContinuousIntegrationComponent },
            ]},
        ]),
    ],
})
export default class GetStartedModule {

}
