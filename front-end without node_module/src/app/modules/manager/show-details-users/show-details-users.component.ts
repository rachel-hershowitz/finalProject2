import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { ManagerService } from '../manager.service';
import { UserService } from '../../signin/user.service';

@Component({
  selector: 'show-details-users',
  templateUrl: './show-details-users.component.html',
  // styleUrls: ['./show-details-users.component.scss']
})
export class ShowDetailsUsersComponent implements OnInit {

  constructor(private router: Router, private managerService: ManagerService, private userService: UserService) { }

  personalInformationList: DetailsMashkanta[];
  listCustomer: User[];
  @Input()
  selectCustomer: User;
  @Input()
  selectedDetailsMashkanta: DetailsMashkanta;
  showEdit: Boolean;

  ngOnInit(): void {
    this.getAllDetailsOfCustomers();
  }

  showListCustomer() {
    this.userService.getAllCustomer().subscribe(p => {
      this.listCustomer = p;
    })
  }

  selectedCustomer(c) {
    this.showEdit = false
    this.selectCustomer = c;
    this.personalInformationList.find(x => {
      if (x.userId == c._id) {
        this.selectedDetailsMashkanta = x;
      }
    })
  }

  deleteCustomer(id) {
    this.managerService.deleteCustomer(id).subscribe(s => {
      alert(this.selectCustomer.firstName + " is deleted!!")
      this.selectCustomer = null
      this.selectedDetailsMashkanta = null
      this.showListCustomer()
      this.getAllDetailsOfCustomers();
    })
  }

  editCustomer(c) {
    this.personalInformationList.find(x => {
      if (x.userId == c._id) {
        this.selectedDetailsMashkanta = x;
      }
    })
    this.showEdit = true;
  }

  getAllDetailsOfCustomers() {
    this.managerService.getAllPersonalInformation().subscribe(p => {
      this.personalInformationList = p;
    })
  }

}
