import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  createUserDetails(request: DetailsMashkanta): Observable<void> {

    var x = JSON.parse(localStorage.getItem('currentUser'));

    return this._http.post<void>("http://localhost:5000/createUserDetails/" + x.identity, request)
  }
  constructor(private _http: HttpClient) { }
}
