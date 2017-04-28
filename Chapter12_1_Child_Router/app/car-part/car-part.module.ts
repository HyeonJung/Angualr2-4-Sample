/**
 * Created by minchangjang on 2017. 4. 19..
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarPartRoutingModule } from './car-part.routes';
import { CarPartDetailComponent } from './car-part-detail.component';

@NgModule({
    imports: [BrowserModule, CarPartRoutingModule],
    declarations: [ CarPartDetailComponent ]
})
export class CarPartModule { }