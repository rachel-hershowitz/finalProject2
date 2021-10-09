import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable()
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // login(userName, password): Observable<boolean> {
  //   return this.http.post<boolean>("http://localhost:5000/getByPassword", { userName, password })
  // return this.http.get<User[]>("http://localhost:5000/getAll");
  // .pipe(map(user => {
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  //   this.currentUserSubject.next(user);
  //   return user;
  // }));
  // }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
