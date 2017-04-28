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
 * Created by minchangjang on 2017. 4. 19..
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var GuestBookComponent = (function () {
    function GuestBookComponent(route, router) {
        this.route = route;
        this.router = router;
        this.guestForm = new forms_1.FormGroup({
            id: new forms_1.FormControl('guest', forms_1.Validators.compose([validNumber])),
            password: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(20), forms_1.Validators.minLength(3)])),
            desc: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    GuestBookComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
    };
    return GuestBookComponent;
}());
GuestBookComponent = __decorate([
    core_1.Component({
        selector: 'guest-book',
        templateUrl: 'app/guestbook/guest-book.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], GuestBookComponent);
exports.GuestBookComponent = GuestBookComponent;
function validNumber(c) {
    if (c.value == "") {
        return {
            valid: false,
            errorMsg: "필수값입니다."
        };
    }
    var NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(c.value) ? {
        valid: true,
        errorMsg: ''
    } : {
        valid: false,
        errorMsg: '숫자가 아닙니다.'
    };
}
var _a, _b;
//# sourceMappingURL=guest-book.component.js.map