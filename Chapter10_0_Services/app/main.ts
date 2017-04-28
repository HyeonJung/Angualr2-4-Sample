import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-part.component';

import { RacingDataService } from './racing-data.service';

@NgModule({
    declarations: [AppComponent, CarPartsComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
    providers: [RacingDataService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);