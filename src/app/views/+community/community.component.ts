import { Component } from '@angular/core';

import { PageSettings, HasPageSettings } from '../../common';

@Component({
    selector: 'argo-community',
    templateUrl: './community.html',
    styles: [require('./community.scss').toString()],
})
export class CommunityComponent implements PageSettings, HasPageSettings {
    public pageTitle = 'Community support, forums, release notes';
    public pageDescription = 'Discuss and contribute to Argo, an open source workflow engine for Kubernetes.  GitHub, Slack and Google groups.';
    public settings = this;
}
