"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var car_part_component_1 = require("./car-part.component");
var car_part_detail_component_1 = require("./car-part-detail.component");
exports.CAR_PART_ROUTES = [
    {
        path: 'carpart',
        component: car_part_component_1.CarPartsComponent,
        children: [
            { path: 'car-part-detail/:id', component: car_part_detail_component_1.CarPartDetailComponent }
        ]
    }
];
exports.CarPartRoutingModule = router_1.RouterModule.forChild(exports.CAR_PART_ROUTES);
//# sourceMappingURL=car-part.routes.js.map