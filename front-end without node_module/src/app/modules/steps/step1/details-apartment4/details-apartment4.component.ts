import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment4',
  templateUrl: './details-apartment4.component.html',
  styleUrls: ['./details-apartment4.component.scss']
})
export class DetailsApartment4Component implements OnInit {

  formDetailsMashkanta4: FormGroup;
  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  price: string = "aaaa";
  constructor(private _router: Router, private _stepService: StepsService) { }

  ngOnInit(): void {
    this.formDetailsMashkanta4 = new FormGroup({
      propertyCity: new FormControl(this.detailsMashkanta.propertyCity),
      propertyPrice: new FormControl(this.detailsMashkanta.propertyPrice),
      propertyMarketValue: new FormControl(this.detailsMashkanta.propertyMarketValue)
    })
  }

  saveDetailsWhichApartment4() {
    // this._stepService.saveDetailsWhichApartment4(this.)
    this._router.navigate(['/StepsComponent/step1/detailsApartment5']);
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/detailsApartment3']);
  }

}
