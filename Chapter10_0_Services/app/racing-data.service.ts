/**
 * Created by minchangjang on 2017. 4. 18..
 */
import { Injectable } from '@angular/core';
import { CARPARTS } from './mocks';

@Injectable()
export class RacingDataService {

    getCarParts() {
        return CARPARTS;
    }
}