import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';

@Component({
  selector: 'edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  @Input()
  selectedDetailsMashkanta: DetailsMashkanta;
  showEditForm: FormGroup;

  get getForm() {
    return this.showEditForm.controls;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.showEditForm = new FormGroup({
      "propertyCity": new FormControl(this.selectedDetailsMashkanta.propertyCity),
      "propertyPrice": new FormControl(this.selectedDetailsMashkanta.propertyPrice),
      "propertyMarketValue": new FormControl(this.selectedDetailsMashkanta.propertyMarketValue),
      "amount": new FormControl(this.selectedDetailsMashkanta.amount),
      "contractSign": new FormControl(this.selectedDetailsMashkanta.contractSign),
      "howMuchLonger": new FormControl(this.selectedDetailsMashkanta.howMuchLonger),
      "numberOfPartner": new FormControl(this.selectedDetailsMashkanta.numberOfPartner),
      "firstName": new FormControl(this.selectedDetailsMashkanta.firstName),
      "lastName": new FormControl(this.selectedDetailsMashkanta.lastName),
      "identity": new FormControl(this.selectedDetailsMashkanta.identity),
      "areaCode": new FormControl(this.selectedDetailsMashkanta.areaCode),
      "pel": new FormControl(this.selectedDetailsMashkanta.pel),
      "email": new FormControl(this.selectedDetailsMashkanta.email),
      "countryOfBirth": new FormControl(this.selectedDetailsMashkanta.countryOfBirth),
      "citizenship": new FormControl(this.selectedDetailsMashkanta.countryOfBirth),
      "city": new FormControl(this.selectedDetailsMashkanta.city),
      "street": new FormControl(this.selectedDetailsMashkanta.street)
    })
  }

}
