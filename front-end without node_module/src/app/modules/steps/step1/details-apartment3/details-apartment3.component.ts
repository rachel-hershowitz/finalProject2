import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { StepsService } from '../../steps.service';

@Component({
  selector: 'details-apartment3',
  templateUrl: './details-apartment3.component.html',
  // styleUrls: ['./details-apartment3.component.scss']
})
export class DetailsApartment3Component implements OnInit {

  formDetailsMashkanta3: FormGroup;
  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  sum: Number = 400000

  constructor(private _router: Router, private _stepService: StepsService) { }

  ngOnInit(): void {
    this.formDetailsMashkanta3 = new FormGroup({
      amount: new FormControl(this.detailsMashkanta.amount)
    })
  }

  saveDetailsWhichApartment3() {
    this._stepService.saveAllDetails(this.formDetailsMashkanta3.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error);
        });
    // this._stepService.saveDetailsWhichApartment3(this.formDetailsMashkanta3.controls.amount.value)
    this._router.navigate(['/StepsComponent/step1/detailsApartment4']);
  }

  backBtn() {
    this._router.navigate(['/StepsComponent/step1/detailsApartment2']);
  }
}
