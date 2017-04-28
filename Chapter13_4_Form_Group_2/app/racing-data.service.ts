/**
 * Created by minchangjang on 2017. 4. 18..
 */
import { Injectable } from '@angular/core';
import { CarPart } from './car-part/car-part';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

    constructor(private http:Http) {}

    getCarParts() {
        return this.http.get('app/car-part/car-parts.json')
            .map(response => <CarPart[]> response.json().data);
    }
}