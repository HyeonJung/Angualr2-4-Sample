/**
 * Created by minchangjang on 2017. 4. 18..
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPartsComponent } from './car-part.component';
import { CarPartDetailComponent } from './car-part-detail.component';


export const CAR_PART_ROUTES: Routes = [
    {
        path: 'carpart',
        component: CarPartsComponent,
        children: [
            { path: 'car-part-detail/:id', component: CarPartDetailComponent }
        ]
    }

];

export const CarPartRoutingModule:ModuleWithProviders = RouterModule.forChild(CAR_PART_ROUTES);