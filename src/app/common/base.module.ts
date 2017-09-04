import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GuiComponentsModule } from 'argo-ui-lib/src/components';
import { CommunityLogosComponent } from './community-logos/community-logos.component';
import { NavButtonComponent } from './nav-button/nav-button.component';

@NgModule({
    declarations: [
        CommunityLogosComponent,
        NavButtonComponent,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        CommonModule,
        GuiComponentsModule,
        CommunityLogosComponent,
        NavButtonComponent,
    ],
})
export class BaseModule {

}
