import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentDesignation, DetailsMashkanta, WhichApartment } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment1',
  templateUrl: './details-apartment1.component.html',
  styleUrls: ['./details-apartment1.component.scss']
})
export class DetailsApartment1Component implements OnInit {

  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  formApartment: FormGroup;
  which = WhichApartment;
  designation = ApartmentDesignation;

  constructor(private _stepsService: StepsService, private _router: Router) { }

  ngOnInit(): void {
    this.formApartment = new FormGroup({
      "whichApartment": new FormControl(this.detailsMashkanta.whichApartment, [Validators.required]),
      "apartmentDesignation": new FormControl(this.detailsMashkanta.apartmentDesignation, [Validators.required])
    })
  }

  get getForm() {
    return this.formApartment.controls;
  }

  saveDetailsWhichApartment1() {
    if (this.formApartment.invalid) {
      return;
    }
    this._stepsService.saveAllDetails(this.formApartment.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
    this._router.navigate(['/StepsComponent/step1/detailsApartment2']);
  }

}
