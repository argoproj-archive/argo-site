import { Component } from '@angular/core';

@Component({
    selector: 'argo-get-started-installation',
    templateUrl: './installation.html',
    styles: [require('./installation.scss').toString()],
})
export class InstallationComponent {

    public showPlayer: boolean;

    public play() {
        this.showPlayer = true;
    }
}