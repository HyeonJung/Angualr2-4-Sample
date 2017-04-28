"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var car_part_component_1 = require("./car-part/car-part.component");
var car_part_detail_component_1 = require("./car-part/car-part-detail.component");
var about_component_1 = require("./about.component");
var guest_book_component_1 = require("./guestbook/guest-book.component");
exports.ROUTES = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'carpart', component: car_part_component_1.CarPartsComponent },
    { path: 'carpart/car-part-detail/:id', component: car_part_detail_component_1.CarPartDetailComponent },
    { path: 'guestbook', component: guest_book_component_1.GuestBookComponent }
];
exports.AppRoutingModule = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=app.routes.js.map