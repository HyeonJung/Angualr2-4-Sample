"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CarPartsComponent = (function () {
    function CarPartsComponent() {
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
    CarPartsComponent.prototype.totalCarParts = function () {
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        template: "<p>There are {{totalCarParts()}} total parts in stock.</p>\n    <ul>\n        <li *ngFor=\"let carPart of carParts\">\n            <h2>{{carPart.name | uppercase}}</h2>\n            <p class=\"description\">{{carPart.description}}</p>\n            <p class=\"price\">{{carPart.price | currency:'EUR':true}}</p>\n            <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n            <p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>\n        </li>\n    </ul>",
        styles: ["\n        .description {\n            color: #444;\n            font-size: small;\n        }\n        .price {\n            font-weight: bold;\n        }\n    "]
    })
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-part.component.js.map