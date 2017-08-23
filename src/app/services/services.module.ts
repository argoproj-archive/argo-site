import { NgModule } from '@angular/core';

import { DocsService } from './docs.service';
import { TrackingService } from './tracking.service';

@NgModule({
    providers: [
        DocsService,
        TrackingService,
    ],
})
export class ServicesModule {

}
