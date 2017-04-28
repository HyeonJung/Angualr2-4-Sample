"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by minchangjang on 2017. 4. 17..
 */
var core_1 = require("@angular/core");
var ordinal_pipe_1 = require("./pipes/ordinal.pipe");
var mydate_pipe_1 = require("./pipes/mydate.pipe");
var hidden_directive_1 = require("./directives/hidden.directive");
var common_1 = require("@angular/common");
var CustomModule = (function () {
    function CustomModule() {
    }
    return CustomModule;
}());
CustomModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [ordinal_pipe_1.OrdinalPipe, mydate_pipe_1.MyDatePipe, hidden_directive_1.HiddenDirective],
        exports: [ordinal_pipe_1.OrdinalPipe, mydate_pipe_1.MyDatePipe, hidden_directive_1.HiddenDirective]
    })
], CustomModule);
exports.CustomModule = CustomModule;
//# sourceMappingURL=customs.js.map