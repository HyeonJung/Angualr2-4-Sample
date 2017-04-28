/**
 * Created by minchangjang on 2017. 4. 18..
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPartsComponent } from './car-part/car-part.component';
import { CarPartDetailComponent } from './car-part/car-part-detail.component';
import { AboutComponent } from './about.component';
import {GuestBookComponent} from "./guestbook/guest-book.component";


export const ROUTES: Routes = [
    { path: '', component: AboutComponent },
    { path: 'carpart', component: CarPartsComponent },
    { path: 'carpart/car-part-detail/:id', component: CarPartDetailComponent },
    { path: 'guestbook', component: GuestBookComponent }

];

export const AppRoutingModule:ModuleWithProviders = RouterModule.forRoot(ROUTES);