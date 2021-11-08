import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment6',
  templateUrl: './details-apartment6.component.html',
  styleUrls: ['./details-apartment6.component.scss']
})
export class DetailsApartment6Component implements OnInit {

  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  formMoreDetails: FormGroup;

  constructor(private _stepsService: StepsService, private _router: Router) { }

  ngOnInit(): void {
    this.formMoreDetails = new FormGroup({
      firstName: new FormControl(this.detailsMashkanta.firstName, [Validators.required, Validators.minLength(2), Validators.pattern(/[a-zA-Z]+\s+[a-zA-Z]/)]),
      lastName: new FormControl(this.detailsMashkanta.lastName, [Validators.required, Validators.minLength(2), Validators.pattern(/[a-zA-Z]+\s+[a-zA-Z]/)]),
      identity: new FormControl(this.detailsMashkanta.identity, [Validators.required]),
      areaCode: new FormControl(this.detailsMashkanta.areaCode, [Validators.required]),
      pel: new FormControl(this.detailsMashkanta.pel, [Validators.required, Validators.pattern('/^0\d([\d]{0,1})([-]{0,1})\d{7}$/')]),
      email: new FormControl(this.detailsMashkanta.email, [Validators.required, Validators.email]),
      birthDate: new FormControl(this.detailsMashkanta.birthDate, [Validators.required]),
      // birthDate: new FormControl(this.detailsMashkanta.birthDate, [Validators.required, Validators.pattern("[0-1]?/d|2[0-4]:[0-5]/d:[0-5]/d")]),
      // year: new FormControl(this.detailsMashkanta.birthDate.setDate),
      // month: new FormControl(this.detailsMashkanta.birthDate.setMonth),
      // day: new FormControl(this.detailsMashkanta.birthDate.setTime),
      countryOfBirth: new FormControl(this.detailsMashkanta.countryOfBirth, [Validators.required]),
      citizenship: new FormControl(this.detailsMashkanta.citizenship, [Validators.required]),
      city: new FormControl(this.detailsMashkanta.city, [Validators.required]),
      street: new FormControl(this.detailsMashkanta.street, [Validators.required]),
      apartmentRegistration: new FormControl(this.detailsMashkanta.apartmentRegistration, [Validators.required]),
    })
  }

  get getForm() {
    return this.formMoreDetails.controls;
  }

  saveDetailsWhichApartment6() {
    if (this.formMoreDetails.invalid) {
      return;
    }
    this._stepsService.saveAllDetails(this.formMoreDetails.value).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
      });
    this._router.navigate(['/StepsComponent/step2']);
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/detailsApartment5']);
  }
}

