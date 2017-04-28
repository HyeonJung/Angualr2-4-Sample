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
        return this.http.get('app/car-parts.json')
            .map(response => <CarPart[]> response.json().data);
    }

    getTranslate(kor: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('X-Naver-Client-Id', 'LYTZd0yGVgeDT1Bxu7WN');
        headers.append('X-Naver-Client-Secret', 'e3gt4aQnX7');

        let url: string = "https://openapi.naver.com/v1/language/translate";
        let data = this.http.get(url, `source=ko&target=en&text=${kor}`, {headers: headers}).map(response => response.json());

        data.subscribe(value=> console.log(value.translatedText));
    }
}