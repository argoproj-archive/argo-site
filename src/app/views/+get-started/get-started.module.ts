import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { GetStartedComponent } from './get-started.component';
import { OverviewComponent } from './overview/overview.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { FeaturesComponent } from './features/features.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { InstallationComponent } from './installation/installation.component';

@NgModule({
    declarations: [
        GetStartedComponent,
        OverviewComponent,
        ArchitectureComponent,
        FeaturesComponent,
        TutorialsComponent,
        InstallationComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: GetStartedComponent, children: [
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
                { path: 'overview', component: OverviewComponent },
                { path: 'architecture', component: ArchitectureComponent },
                { path: 'features', component: FeaturesComponent },
                { path: 'tutorials', component: TutorialsComponent },
                { path: 'installation', component: InstallationComponent },
            ]},
        ]),
    ],
})
export default class GetStartedModule {

}
