import { Component, OnInit } from '@angular/core';
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
  selectCustomer: User;
  selectedDetailsMashkanta: DetailsMashkanta;

  ngOnInit(): void {
    this.getAllDetailsOfCustomers();
  }

  showListCustomer() {
    this.userService.getAllCustomer().subscribe(p => {
      this.listCustomer = p;
    })
  }

  selectedCustomer(c) {
    this.selectCustomer = c;
    this.personalInformationList.find(x => {
      if (x.userId == c._id) {
        this.selectedDetailsMashkanta = x;
      }
    })
  }

  getAllDetailsOfCustomers() {
    this.managerService.getAllPersonalInformation().subscribe(p => {
      this.personalInformationList = p;
    })
  }

}
