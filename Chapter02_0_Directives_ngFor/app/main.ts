import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <ul>
            <li *ngFor="let carPart of carParts; let i = index">
                <h2>{{i}}번째, {{carPart.name}}</h2>
                <p>{{carPart.description}}</p>
                <p>{{carPart.inStock}} in Stock</p>
            </li>
    </ul>`
})
class AppComponent {
    title = 'Ultra Racing';
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 5
    },{
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4
    },{
        "id": 3,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0
    }];
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);