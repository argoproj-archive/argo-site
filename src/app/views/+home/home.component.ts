import { Component } from '@angular/core';

import { PageSettings, HasPageSettings } from '../../common';

@Component({
    selector: 'argo-home',
    templateUrl: './home.html',
    styles: [require('./home.scss').toString()],
})
export class HomeComponent implements PageSettings, HasPageSettings {

    public pageTitle = 'Open source container-native workflow engine for Kubernetes';
    public pageDescription = 'Argo is an open source container-native workflow engine for developers working with Kubernetes to orchestrate pipelines and jobs for continuous' +
        ' integration, deployment, and microservices.';
    public settings = this;
}
