import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsApartment2Component } from './details-apartment2/details-apartment2.component';
import { DetailsApartment3Component } from './details-apartment3/details-apartment3.component';
import { DetailsApartment4Component } from './details-apartment4/details-apartment4.component';
import { DetailsApartment5Component } from './details-apartment5/details-apartment5.component';
import { DetailsApartment6Component } from './details-apartment6/details-apartment6.component';
import { DetailsApartment1Component } from './details-apartment1/details-apartment1.component';
const ROUTE_STEP1: Routes = [
  {
    // path: '', component: ApartmentComponent,

    path: '', children: [
      { path: '', component: DetailsApartment1Component },
      { path: 'detailsApartment2', component: DetailsApartment2Component },
      { path: 'detailsApartment3', component: DetailsApartment3Component },
      { path: 'detailsApartment4', component: DetailsApartment4Component },
      { path: 'detailsApartment5', component: DetailsApartment5Component },
      { path: 'detailsApartment6', component: DetailsApartment6Component },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_STEP1)
  ]
})
export class Step1Module { }
