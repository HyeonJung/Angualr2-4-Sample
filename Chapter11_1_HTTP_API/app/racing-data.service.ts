/**
 * Created by minchangjang on 2017. 4. 18..
 */
import { Injectable } from '@angular/core';
import { CarPart } from './car-part';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

    constructor(private http:Http) {}

    getCarParts() {
        return this.http.get('http://localhost:52273/products')
            .map(response => <CarPart[]> response.json().data);
    }


}