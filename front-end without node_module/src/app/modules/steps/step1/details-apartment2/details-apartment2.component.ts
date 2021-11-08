import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment2',
  templateUrl: './details-apartment2.component.html',
  // styleUrls: ['./details-apartment2.component.scss']
})
export class DetailsApartment2Component implements OnInit {

  formDetailsMashkanta2: FormGroup;
  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();

  constructor(private _router: Router, private _stepsService: StepsService) { }

  ngOnInit(): void {
    this.formDetailsMashkanta2 = new FormGroup({
      propertyCity: new FormControl(this.detailsMashkanta.propertyCity, [Validators.required]),
      propertyPrice: new FormControl(this.detailsMashkanta.propertyPrice, [Validators.required]),
      propertyMarketValue: new FormControl(this.detailsMashkanta.propertyMarketValue, [Validators.required])
    })
  }

  get getForm() {
    return this.formDetailsMashkanta2.controls;
  }

  saveDetailsWhichApartment2() {
    if (this.formDetailsMashkanta2.invalid) {
      return;
    }

    this._stepsService.saveAllDetails(this.formDetailsMashkanta2.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
    this._router.navigate(['/StepsComponent/step1/detailsApartment3']);
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/']);
  }
}
