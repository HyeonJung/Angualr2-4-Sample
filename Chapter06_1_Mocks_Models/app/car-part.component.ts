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
    }

    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }
}