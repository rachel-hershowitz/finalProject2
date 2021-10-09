import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  currentUser: User = null;
  ifHaveCurrentUser: boolean = false;

  login(userName, password): Observable<User> {
    return this.http.post<User>("http://localhost:5000/checkLogin", { userName, password })
  }

  updateCurrentUser(identity: string, fn: string, ln: string, un: string, pas: string, isC: boolean): void {
    this.currentUser = new User();
    this.currentUser.isCustomer = isC;
    this.currentUser.firstName = fn;
    this.currentUser.lastName = ln;
    this.currentUser.identity = identity;
    this.currentUser.userName = un;
    this.currentUser.password = pas;
    this.ifHaveCurrentUser = true;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    return;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  haveCurrentUser(): boolean {
    return this.ifHaveCurrentUser;
  }

  getAllcustomer(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:5000/getAllcustomer");
  }

  register(user: User): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:5000/sign", user);
  }

  delete(id: number) {
    return this.http.delete("api/users/${id}");
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.ifHaveCurrentUser = false;
  }

  // save here current user (you can also save in local storage)
}
