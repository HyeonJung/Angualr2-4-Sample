import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-part.component.html',
    styleUrls: ['app/car-part.component.css']
})
export class CarPartsComponent {
    carParts: CarPart[];

    constructor ( private racingDataService:RacingDataService ) { }

    ngOnInit() {
        //let racingDataService:RacingDataService = new RacingDataService();
        // this.carParts = racingDataService.getCarParts();
        //this.carParts = this.racingDataService.getCarParts();
        //this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
        let str = "안녕하세요.";
        let data = this.racingDataService.getTranslate(str);
        console.log(data.subscribe(value => console.log(value.translatedText)));
        console.log(data.subscribe(value => console.log(value.translatedText)));
        console.log(data.subscribe(value => console.log(value.translatedText)));
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