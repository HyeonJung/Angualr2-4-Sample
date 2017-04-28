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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var ordinal_pipe_1 = require("./custom/pipes/ordinal.pipe");
var mydate_pipe_1 = require("./custom/pipes/mydate.pipe");
var hidden_directive_1 = require("./custom/directives/hidden.directive");
var underline_directive_1 = require("./custom/directives/underline.directive");
var color_directive_1 = require("./custom/directives/color.directive");
var AppComponent = (function () {
    function AppComponent() {
        this.val = true;
        this.dateStr = "20161020";
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15
        ];
        var dt = new Date();
        var month = dt.getMonth() + 1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        this.dateStr = year + '' + month + '' + day;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <h1>Custom Directive \uC608\uC81C</h1>\n                <h1 myHidden>Hidden Welcome</h1>\n                <h2> <span myUnderline>Hover to underline</span> </h2>\n                <h1 mycolor> Let's 'Hover' me!</h1>\n\n                <h2>\uB0A0\uC9DC\uBCC0\uD658 : {{dateStr|mydate:'/'}} <br>\n                    \uB0A0\uC9DC\uBCC0\uD658 : {{dateStr|mydate:'-'}} <br></h2>\n                <div>\n                    <ul>\n                        <li *ngFor=\"let num of numbers\">\n                            {{ num | ordinal }}\n                        </li>\n                    </ul>\n                </div>\n                "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [AppComponent, ordinal_pipe_1.OrdinalPipe, mydate_pipe_1.MyDatePipe, hidden_directive_1.HiddenDirective, underline_directive_1.UnderlineDirective, color_directive_1.ColorDirective],
        imports: [platform_browser_1.BrowserModule],
        bootstrap: [AppComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map