import { Component } from '@angular/core';

@Component({
    selector: 'argo-main',
    templateUrl: './main.html',
    styles: [
        require('./main.scss').toString(),
    ],
})
export class AppComponent {
    public onDeactivate() {
        document.body.scrollTop = 0;
    }
}
