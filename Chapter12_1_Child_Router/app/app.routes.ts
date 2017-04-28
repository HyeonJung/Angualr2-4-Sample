/**
 * Created by minchangjang on 2017. 4. 18..
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPartsComponent } from './car-part/car-part.component';
import { AboutComponent } from './about.component';


export const ROUTES: Routes = [
    { path: '', component: AboutComponent },
    { path: 'carpart', component: CarPartsComponent }
];

export const AppRoutingModule:ModuleWithProviders = RouterModule.forRoot(ROUTES);