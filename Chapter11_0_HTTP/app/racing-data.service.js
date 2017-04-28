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
 * Created by minchangjang on 2017. 4. 18..
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var RacingDataService = (function () {
    function RacingDataService(http) {
        this.http = http;
    }
    RacingDataService.prototype.getCarParts = function () {
        return this.http.get('app/car-parts.json')
            .map(function (response) { return response.json().data; });
    };
    RacingDataService.prototype.getTranslate = function (kor) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('X-Naver-Client-Id', 'LYTZd0yGVgeDT1Bxu7WN');
        headers.append('X-Naver-Client-Secret', 'e3gt4aQnX7');
        var url = "https://openapi.naver.com/v1/language/translate";
        var data = this.http.get(url, "source=ko&target=en&text=" + kor, { headers: headers }).map(function (response) { return response.json(); });
        data.subscribe(function (value) { return console.log(value.translatedText); });
    };
    return RacingDataService;
}());
RacingDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], RacingDataService);
exports.RacingDataService = RacingDataService;
var _a;
//# sourceMappingURL=racing-data.service.js.map