import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

import { first } from 'rxjs/operators';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private router: Router, private userService: UserService,
    private alertService: AlertService, private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      // this.router.navigate(['/']);
    }
  }

  userRegisterCurrent = new User();

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(this.userRegisterCurrent.firstName),
      "lastName": new FormControl(this.userRegisterCurrent.lastName),
      "identity": new FormControl(this.userRegisterCurrent.identity),
      "userName": new FormControl(this.userRegisterCurrent.userName),
      "password": new FormControl(this.userRegisterCurrent.password)
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/LoginComponent']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
