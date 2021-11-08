import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/modules/signin/user.service';

@Component({
  selector: 'step3',
  templateUrl: './step3.component.html',
  // styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  currentCustomer: User = new User()

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.currentCustomer = this._userService.getCurrentUser();
  }

}