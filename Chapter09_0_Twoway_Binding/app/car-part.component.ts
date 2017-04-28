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

    upQuantity(carPart) {
        //alert("You called upQuantity");
        if ( carPart.inStock > carPart.quantity ) {
            carPart.quantity++;
        }
    }

    downQuantity(carPart) {
        //alert("You called upQuantity");
        if ( carPart.quantity != 0 ) {
            carPart.quantity--;
        }
    }

    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }
}