import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseModule } from '../../common';

import { CommunityComponent } from './community.component';
import { CommunityOverviewComponent } from './community-overview/community-overview.component';
import { ReleasesComponent } from './releases/releases.component';

@NgModule({
    declarations: [
        CommunityComponent,
        CommunityOverviewComponent,
        ReleasesComponent,
    ],
    imports: [
        BaseModule,
        RouterModule.forChild([
            { path: '', component: CommunityComponent, children: [
                { path: '', redirectTo: 'overview', pathMatch: 'full' },
                { path: 'overview', component: CommunityOverviewComponent },
                { path: 'releases', component: ReleasesComponent },
            ]},
        ]),
    ],
})
export default class CommunityModule {

}
