"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by minchangjang on 2017. 4. 19..
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var car_part_routes_1 = require("./car-part.routes");
var car_part_detail_component_1 = require("./car-part-detail.component");
var CarPartModule = (function () {
    function CarPartModule() {
    }
    return CarPartModule;
}());
CarPartModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, car_part_routes_1.CarPartRoutingModule],
        declarations: [car_part_detail_component_1.CarPartDetailComponent]
    })
], CarPartModule);
exports.CarPartModule = CarPartModule;
//# sourceMappingURL=car-part.module.js.map