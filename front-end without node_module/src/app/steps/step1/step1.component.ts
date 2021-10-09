import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { User } from 'src/app/models/user.model';
import { ConnectService } from 'src/app/modules/connect/connect.service';
import { UserService } from 'src/app/modules/signin/user.service';
import { StepstService } from '../steps.service';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  currentCustomer: User;
  formRequest: FormGroup;
  detailsMashkanta: DetailsMashkanta = new DetailsMashkanta();
  sucsess: boolean;
  failed: boolean;

  createDetailsMashkanta() {
    this.detailsMashkanta = this.formRequest.value;

    this._connectService.createUserDetails(this.detailsMashkanta)
      .subscribe(data => {
        console.log("success createRequest!!")
        this.sucsess = true
      }, err => {
        console.log("fails createRequest!!")
        this.failed = true
      })

  }



  constructor(private _stepsService: StepstService, private _userService: UserService, private _connectService: ConnectService) { }

  ngOnInit(): void {
    this.currentCustomer = this._userService.getCurrentUser();
    this.formRequest = new FormGroup({
      "salaryYou": new FormControl(this.detailsMashkanta.salaryYou),
      "salaryZug": new FormControl(this.detailsMashkanta.salaryZug),
      "adressHouse": new FormControl(this.detailsMashkanta.adressHouse),
      "notes": new FormControl(this.detailsMashkanta.notes)
    })
  }

}
