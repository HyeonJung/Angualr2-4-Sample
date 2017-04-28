"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by minchangjang on 2017. 4. 17..
 */
var core_1 = require("@angular/core");
//import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// Directive decorator
var HiddenDirective = (function () {
    function HiddenDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // Use renderer to render the element with styles
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    return HiddenDirective;
}());
HiddenDirective = __decorate([
    core_1.Directive({ selector: '[myHidden]' })
    // Directive class
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], HiddenDirective);
exports.HiddenDirective = HiddenDirective;
var _a, _b;
//# sourceMappingURL=hidden.directive.js.map