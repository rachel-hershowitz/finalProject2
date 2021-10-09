import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AlertService } from '../../alert/alert.service';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  currentUser: User;

  constructor(private route: ActivatedRoute, private _userService: UserService, private router: Router,
    private alertService: AlertService, private _formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {

    if (this.authenticationService.currentUserValue) {
      // this.router.navigate(['/']);
    }
  }

  userCurrent: User = new User();

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      "userName": new FormControl(this.userCurrent.userName),
      "password": new FormControl(this.userCurrent.password)
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this._userService.login(this.f.userName.value, this.f.password.value)
      .subscribe(data => {
        console.log(data)
        this._userService.updateCurrentUser(data.identity, data.firstName, data.lastName, data.userName, data.password, data.isCustomer);
        if (this._userService.getCurrentUser().isCustomer == false) {
          this.router.navigate(['/Manager']);
        }
        else {
          this.router.navigate(['/']);
        }
      },
        error => {
          console.log(error);
          // this.alertService.error(error);
          this.loading = false;
        });
  }

}
