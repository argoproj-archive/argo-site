import { Component } from '@angular/core';

import { PageSettings, HasPageSettings } from '../../common';

@Component({
    selector: 'argo-get-started',
    templateUrl: './get-started.html',
    styles: [require('./get-started.scss').toString()],
})
export class GetStartedComponent implements PageSettings, HasPageSettings {

    public pageTitle = 'Get started with tutorials, training on workflows for Kubernetes';
    public pageDescription = 'Get started with an overvirew of Argo, an open source workflow engine for Kubernetes.'
        + ' Step through  Installation, Architecture, Features and Tutorials.';
    public settings = this;
}
