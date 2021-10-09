import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';

@Component({
  selector: 'apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  detailsMashkanta: DetailsMashkanta;
  formApartment: FormGroup;
  formApartmentDesignation: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.formApartment = new FormGroup({
      "whichApartment": new FormControl(this.detailsMashkanta.whichApartment)
    })
  }

  // apartmentDesignation

}
