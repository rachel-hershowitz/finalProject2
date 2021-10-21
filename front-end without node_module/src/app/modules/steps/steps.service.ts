import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApartmentDesignation, DetailsMashkanta, WhichApartment } from 'src/app/models/DetailsMashkanta';
import { User } from 'src/app/models/user.model';

@Injectable()
export class StepsService {

  detailsMashkantaOfCurrentCustomer: DetailsMashkanta = new DetailsMashkanta();

  // createUserDetails(request: DetailsMashkanta): Observable<void> {
  //   return this._http.post<void>("http://localhost:5000/createUserDetails", request)
  // }

  saveDetailsWhichApartment1(detailsMashkanta: DetailsMashkanta) {
    this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  }

  saveDetailsWhichApartment2(detailsMashkanta: DetailsMashkanta) {
    this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  }

  saveDetailsWhichApartment3(detailsMashkanta: DetailsMashkanta) {
    this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  }

  saveDetailsWhichApartment4(detailsMashkanta: DetailsMashkanta) {
    this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  }

  saveDetailsWhichApartment5(detailsMashkanta: DetailsMashkanta) {
    this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  }

  saveAllDetails(details): Observable<User> {
    var x = JSON.parse(localStorage.getItem('currentUser'));
    return this._http.post<User>("http://localhost:5000/saveAllDetails/" + x.identity, details)
  }


  constructor(private _http: HttpClient) { }
}
