import { Component, Input } from '@angular/core';

@Component({
    selector: 'argo-nav-button',
    templateUrl: './nav-button.html',
    styles: [ require('./nav-button.scss').toString() ],
})
export class NavButtonComponent {

    @Input()
    public title: string;
}
