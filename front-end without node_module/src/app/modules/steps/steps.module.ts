import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { DetailsApartment2Component } from './step1/details-apartment2/details-apartment2.component';
import { ApartmentComponent } from './step1/apartment/apartment.component';
import { StepsComponent } from './steps/steps.component';

const ROUTE_STEPS: Routes = [
  { path: '', component: StepsComponent },
  { path: 'step1', loadChildren: () => import('./step1/step1.module').then(x => x.Step1Module) },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'step4', component: Step4Component },
  // { path: 'detailsApartment2', component: DetailsApartment2Component },
  // { path: 'detailsApartment3', component: DetailsApartment3Component },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_STEPS)
  ],
  exports: [RouterModule]
})
export class StepsModule { }
