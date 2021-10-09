import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';

@Injectable({
  providedIn: 'root'
})
export class StepstService {

  createUserDetails(request: DetailsMashkanta): Observable<void> {
    return this._http.post<void>("http://localhost:5000/createUserDetails", request)
  }
  constructor(private _http: HttpClient) { }
}
