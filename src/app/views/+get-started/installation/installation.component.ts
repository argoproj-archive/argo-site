import { Component, HostListener } from '@angular/core';
import { TrackingService } from '../../../services';

@Component({
    selector: 'argo-get-started-installation',
    templateUrl: './installation.html',
    styles: [require('./installation.scss').toString()],
})
export class InstallationComponent {

    public macInstallCmd = 'curl -sSL -O https://s3-us-west-1.amazonaws.com/ax-public/argocli/stable/darwin_amd64/argo';
    public linuxInstallCmd = 'curl -sSL -O https://s3-us-west-1.amazonaws.com/ax-public/argocli/stable/linux_amd64/argo';

    constructor(private trackingService: TrackingService) {
    }

    @HostListener('document:copy', ['$event'])
    public onCopy(event) {
        let text = window.getSelection().toString().trim();
        if (text.indexOf(this.macInstallCmd) > -1 || text.indexOf(this.linuxInstallCmd) > -1) {
            this.trackingService.trackInstallCopied();
        }
    }
}
