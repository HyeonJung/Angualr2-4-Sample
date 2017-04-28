import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a [routerLink]="['']">About</a>
                            <a [routerLink]="['/carpart']">CarPart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <router-outlet></router-outlet>
    `
})
export class AppComponent { }