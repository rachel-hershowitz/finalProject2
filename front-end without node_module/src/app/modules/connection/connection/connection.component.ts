// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { User } from 'src/app/models/user.model';
// import { AuthenticationService } from '.././../signin/authentication.service';
// import { UserService } from '.././../signin/user.service';
// import { ConnectionService } from '../connection.service';
// import { first } from 'rxjs/operators';
// import { AlertService } from '../../alert/alert.service';

// @Component({
//   selector: 'app-connection',
//   templateUrl: './connection.component.html',
//   styleUrls: ['./connection.component.scss']
// })
// export class ConnectionComponent implements OnInit {
//   connectionForm: FormGroup;
//   loading = false;
//   submitted = false;
//   userRegisterCurrent = new User();

//   constructor(private router: Router, private connectionService: ConnectionService,
//     private alertService: AlertService, private authenticationService: AuthenticationService) {
//     if (this.authenticationService.currentUserValue) {
//       this.router.navigate(['/']);
//     }
//   }

//   ngOnInit(): void {
//     this.connectionForm = new FormGroup({
//       "firstName": new FormControl(this.userRegisterCurrent.firstName),
//       "lastName": new FormControl(this.userRegisterCurrent.lastName),
//       "pel": new FormControl(this.userRegisterCurrent.password),
//       "email": new FormControl(this.userRegisterCurrent.password),
//       "userName": new FormControl(this.userRegisterCurrent.userName),
//       "password": new FormControl(this.userRegisterCurrent.password)
//     })
//   }

//   get f() {
//     return this.connectionForm.controls;
//   }

//   onSubmit() {

//     this.submitted = true;
//     this.loading = true;
//     this.alertService.clear();

//     if (this.connectionForm.invalid) {
//       return;
//     }

//     this.connectionService.createConnectionUser(this.connectionForm.value)
//       .pipe(first())
//       .subscribe(
//         data => {
//           this.alertService.success('Registration successful', true);
//           this.router.navigate(['/']);
//         },
//         error => {
//           this.alertService.error(error);
//           this.loading = false;
//         });

//   }
// }