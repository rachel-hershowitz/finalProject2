import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      propertyCity: new FormControl(this.detailsMashkanta.propertyCity),
      propertyPrice: new FormControl(this.detailsMashkanta.propertyPrice),
      propertyMarketValue: new FormControl(this.detailsMashkanta.propertyMarketValue)
    })
  }

  saveDetailsWhichApartment2() {
    this._stepsService.saveAllDetails(this.formDetailsMashkanta2.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
    // this._stepsService.saveDetailsWhichApartment2(this.formDetailsMashkanta2.value)
    this._router.navigate(['/StepsComponent/step1/detailsApartment3']);
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/']);
  }
}
