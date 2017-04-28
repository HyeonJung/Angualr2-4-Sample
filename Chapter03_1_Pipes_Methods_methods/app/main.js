"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra Racing';
        this.carParts = [{
                "id": 1,
                "name": "Super Tires",
                "description": "These tires are the very best",
                "price": 4.99,
                "inStock": 5
            }, {
                "id": 2,
                "name": "Reinforced Shocks",
                "description": "Shocks made from kryptonite",
                "price": 9.99,
                "inStock": 4
            }, {
                "id": 3,
                "name": "Padded Seats",
                "description": "Super soft seats for a smooth ride",
                "price": 24.99,
                "inStock": 0
            }];
    }
    AppComponent.prototype.totalCarParts = function () {
        // Case 1
        // return 10;
        // Case 2
        // let sum = 0;
        // for (let carPart of this.carParts) {
        //     sum += carPart.inStock;
        // }
        // return sum;
        // Case 3
        // return this.carParts.reduce(function (prev, current) {return prev + current.inStock;}, 0);
        // Case 4
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{title}}</h1>\n    <p>There are {{totalCarParts()}} total parts in stock.</p>\n    <ul>\n            <li *ngFor=\"let carPart of carParts\">\n                <h2>{{carPart.name | uppercase}}</h2>\n                <p>{{carPart.description}}</p>\n                <p>{{carPart.price | currency:'EUR':true}}</p>\n                <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n                <p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>\n            </li>\n    </ul>"
    })
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [AppComponent],
        imports: [platform_browser_1.BrowserModule],
        bootstrap: [AppComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map