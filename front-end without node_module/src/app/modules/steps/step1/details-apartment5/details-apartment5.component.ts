import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment5',
  templateUrl: './details-apartment5.component.html',
  styleUrls: []
})
export class DetailsApartment5Component implements OnInit {

  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  formMoreDetails: FormGroup;

  constructor(private _stepsService: StepsService, private _router: Router) { }

  ngOnInit(): void {
    this.formMoreDetails = new FormGroup({
      "contractSign": new FormControl(this.detailsMashkanta.contractSign),
      "howMuchLonger": new FormControl(this.detailsMashkanta.howMuchLonger),
      "numberOfPartner": new FormControl(this.detailsMashkanta.numberOfPartner)

      // "apartmentDesignation": new FormControl(this.detailsMashkanta.apartmentDesignation)
    })
  }

  saveDetailsWhichApartment5() {
    this._stepsService.saveAllDetails(this.formMoreDetails.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
    // this._stepsService.saveDetailsWhichApartment5(this.formMoreDetails.value
    // );
    this._router.navigate(['/StepsComponent/step1/detailsApartment6']);
  }

  plus() {
    this.formMoreDetails.controls.numberOfPartner.setValue(this.formMoreDetails.controls.numberOfPartner.value + 1)
  }

  minus() {
    this.formMoreDetails.controls.numberOfPartner.setValue(this.formMoreDetails.controls.numberOfPartner.value - 1)
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/detailsApartment4']);
  }

}