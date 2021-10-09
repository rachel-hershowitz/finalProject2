import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../signin/user.service';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'form-start-request',
  templateUrl: './form-start-request.component.html',
  styleUrls: []
})
export class FormStartRequestComponent implements OnInit {

  currentUser: User;
  showForm: boolean = false;
  formRequest: FormGroup;
  startRequest: DetailsMashkanta = new DetailsMashkanta();

  sendRequest() {
    this.startRequest = this.formRequest.value;
    // this.startRequest.customerRef=this.currentUser;

    this._connectService.createUserDetails(this.startRequest)
      .subscribe(data => {
        console.log("success createRequest!!")
      }, err => {
        console.log("fails createRequest!!")
      })
  }

  constructor(private _userService: UserService, private _connectService: ConnectService) { }

  ngOnInit(): void {
    this.currentUser = this._userService.getCurrentUser();

    this.formRequest = new FormGroup({
      "salaryYou": new FormControl(this.startRequest.salaryYou),
      "salaryZug": new FormControl(this.startRequest.salaryZug),
      "adressHouse": new FormControl(this.startRequest.adressHouse),
      "notes": new FormControl(this.startRequest.notes)
    })
  }

}
