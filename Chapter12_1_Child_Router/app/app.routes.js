"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var car_part_component_1 = require("./car-part/car-part.component");
var about_component_1 = require("./about.component");
exports.ROUTES = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'carpart', component: car_part_component_1.CarPartsComponent }
];
exports.AppRoutingModule = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=app.routes.js.map