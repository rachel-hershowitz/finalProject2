import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/modules/signin/user.service';

@Component({
  selector: 'connect',
  templateUrl: './connect.component.html',
  styleUrls: []
})
export class ConnectComponent implements OnInit {

  currentUser: User;
  showForm: boolean = false;

  showFormRequest() {
    this.showForm = true;
  }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this._userService.getCurrentUser();
  }

}
