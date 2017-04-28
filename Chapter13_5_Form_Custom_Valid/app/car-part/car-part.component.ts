import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from '../racing-data.service';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-part/car-part.component.html',
    styleUrls: ['app/car-part/car-part.component.css']
})
export class CarPartsComponent {
    carParts: CarPart[];

    constructor ( private racingDataService:RacingDataService ) { }

    ngOnInit() {
        //let racingDataService:RacingDataService = new RacingDataService();
        // this.carParts = racingDataService.getCarParts();
        //this.carParts = this.racingDataService.getCarParts();
        this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);

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
        let sum: number = 0;

        if ( Array.isArray( this.carParts ) ) {
            for ( let carPart of this.carParts ) {
                sum += carPart.inStock;
            }
        }


        return sum;
    }
}