import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from '../racing-data.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'car-part-detail',
    templateUrl: 'app/car-part/car-part-detail.component.html',
    styleUrls: ['app/car-part/car-part-detail.component.css']
})
export class CarPartDetailComponent {
    carPart: CarPart = {
        "id": 0,
        "name": "",
        "description": "",
        "price": 0,
        "inStock": 0,
        "image": "",
        "featured": false,
        "quantity": 0
    };

    constructor ( private route: ActivatedRoute, private router:Router, private racingDataService:RacingDataService ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if ( params['id'] != null ) {
                this.racingDataService.getCarParts().subscribe(carParts => {
                    carParts.forEach( (data) => {
                        //console.log(data);
                        if(data.id == params['id']) {
                            this.carPart = data;
                        }
                    });
                });
            }
        });
    }

}