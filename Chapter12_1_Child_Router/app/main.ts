import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-part/car-part.component';
import { AboutComponent } from './about.component';

import { RacingDataService } from './racing-data.service';
import { AppRoutingModule } from './app.routes';
import {CarPartRoutingModule} from "./car-part/car-part.routes";
import {CarPartModule} from "./car-part/car-part.module";
import {CarPartDetailComponent} from "./car-part/car-part-detail.component";

@NgModule({
    declarations: [AppComponent, CarPartsComponent, AboutComponent],
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, CarPartModule],
    bootstrap: [AppComponent],
    providers: [RacingDataService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);