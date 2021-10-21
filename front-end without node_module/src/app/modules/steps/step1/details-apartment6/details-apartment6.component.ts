import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment6',
  templateUrl: './details-apartment6.component.html',
  styleUrls: []
})
export class DetailsApartment6Component implements OnInit {

  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  formMoreDetails: FormGroup;

  constructor(private _stepsService: StepsService, private _router: Router) { }

  ngOnInit(): void {
    this.formMoreDetails = new FormGroup({
      firstName: new FormControl(this.detailsMashkanta.firstName),
      lastName: new FormControl(this.detailsMashkanta.lastName),
      identity: new FormControl(this.detailsMashkanta.identity),
      areaCode: new FormControl(this.detailsMashkanta.areaCode),
      pel: new FormControl(this.detailsMashkanta.pel),
      email: new FormControl(this.detailsMashkanta.email),
      birthDate: new FormControl(this.detailsMashkanta.birthDate),
      // year: new FormControl(this.detailsMashkanta.birthDate.setDate),
      // month: new FormControl(this.detailsMashkanta.birthDate.setMonth),
      // day: new FormControl(this.detailsMashkanta.birthDate.setTime),
      countryOfBirth: new FormControl(this.detailsMashkanta.countryOfBirth),
      citizenship: new FormControl(this.detailsMashkanta.citizenship),
      city: new FormControl(this.detailsMashkanta.city),
      street: new FormControl(this.detailsMashkanta.street),
      apartmentRegistration: new FormControl(this.detailsMashkanta.apartmentRegistration),
    })
  }

  saveDetailsWhichApartment6() {
    this._stepsService.saveAllDetails(this.formMoreDetails.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/detailsApartment5']);
  }
}

