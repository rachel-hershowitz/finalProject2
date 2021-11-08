import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../signin/user.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'show-list-customer',
  templateUrl: './show-list-customer.component.html',
  styleUrls: ['./show-list-customer.component.scss']
})
export class ShowListCustomerComponent implements OnInit {
  constructor(private _managerService: ManagerService, private _userService: UserService) { }

  personalInformationList: DetailsMashkanta[];
  listCustomer: User[];
  @Output()
  selectCustomer: User;
  @Output()
  selectedDetailsMashkanta: DetailsMashkanta;
  showEdit: Boolean;
  showDetails: Boolean;

  ngOnInit(): void {
  }

  showListCustomer() {
    this._userService.getAllCustomer().subscribe(p => {
      this.listCustomer = p;
    })
  }

  deleteCustomer(id) {
    this._managerService.deleteCustomer(id).subscribe(s => {
      this.selectCustomer = null
      this.selectedDetailsMashkanta = null
      this.showListCustomer()
      this.showDetails = false
      // this.getAllDetailsOfCustomers();
    })
  }

  editCustomer(c) {
    this._managerService.getAllPersonalInformation().subscribe(p => {
      this.personalInformationList = p;
      this.personalInformationList.find(x => {
        if (x.userId == c._id) {
          this.selectedDetailsMashkanta = x;
          this.showEdit = true;
        }
      })
    })
  }

  updateSelectUser(c) {
    this._userService.updateCurrentUser(this.selectCustomer.identity, this.selectCustomer.firstName,
      this.selectCustomer.lastName, this.selectCustomer.userName, this.selectCustomer.password,
      this.selectCustomer.isCustomer)
  }

  showDetailsCustomer(c) {
    this.selectCustomer = c
    this.updateSelectUser(c);
    this._managerService.getAllPersonalInformation().subscribe(p => {
      this.personalInformationList = p;
      this.personalInformationList.find(x => {
        if (x.userId == c._id) {
          this.selectedDetailsMashkanta = x;
          this.showDetails = true
        }
      })
    })
  }

}
