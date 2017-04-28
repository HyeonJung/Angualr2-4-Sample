import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-part.component.html',
    styleUrls: ['app/car-part.component.css']
})
export class CarPartsComponent {
    carParts: CarPart[];

    ngOnInit() {
        this.carParts = CARPARTS;
        (function(carParts, func) {
            setTimeout(function() {func(carParts)}, 3000);
        })(this.carParts, this.changeImage);

    }

    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }

    changeImage(carParts) {
        carParts[0].image = "https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png";
    }
}