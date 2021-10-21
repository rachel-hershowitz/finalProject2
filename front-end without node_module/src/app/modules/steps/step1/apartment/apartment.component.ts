import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentDesignation, DetailsMashkanta, WhichApartment } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'apartment',
  templateUrl: './apartment.component.html',
  // styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  formApartment: FormGroup;
  which = WhichApartment;
  designation = ApartmentDesignation;

  constructor(private _stepsService: StepsService, private _router: Router) { }

  ngOnInit(): void {
    this.formApartment = new FormGroup({
      "whichApartment": new FormControl(this.detailsMashkanta.whichApartment),
      "apartmentDesignation": new FormControl(this.detailsMashkanta.apartmentDesignation)
    })
  }

  saveDetailsWhichApartment1() {
    this._stepsService.saveAllDetails(this.formApartment.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
    // this._stepsService.saveDetailsWhichApartment1(this.formApartment.value);
    this._router.navigate(['/StepsComponent/step1/detailsApartment2']);
  }

}
