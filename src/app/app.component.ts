import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    HideSidebar = false;

    constructor(private router: Router) {

        router.events.subscribe(event => {

            if (event instanceof NavigationEnd) {
                console.log("current url", event.url); // event.url has current url
                if (event.url.search('\\login') !== -1) {
                    this.HideSidebar = true;
                } else {
                    this.HideSidebar = false;
                }
                console.log(this.HideSidebar);

                // your code will goes here
            }
        });
    }
}
