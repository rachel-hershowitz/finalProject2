import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../signin/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  currentUser: User;
  nameCurrentUser: string = null;
  ifHaveCurrentUser: boolean = false;
  xxx: string = "abc";

  logOut() {
    this.ifHaveCurrentUser = false;
    this._userService.logOut();
  }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    this.currentUser = this._userService.getCurrentUser();
    this.ifHaveCurrentUser = this._userService.haveCurrentUser();

  }

}
