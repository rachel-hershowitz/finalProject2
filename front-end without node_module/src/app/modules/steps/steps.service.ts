import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { User } from 'src/app/models/user.model';

@Injectable()
export class StepsService {

  detailsMashkantaOfCurrentCustomer: DetailsMashkanta = new DetailsMashkanta();

  // saveDetailsWhichApartment1(detailsMashkanta: DetailsMashkanta) {
  //   this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  // }

  // saveDetailsWhichApartment2(detailsMashkanta: DetailsMashkanta) {
  //   this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  // }

  // saveDetailsWhichApartment3(detailsMashkanta: DetailsMashkanta) {
  //   this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  // }

  // saveDetailsWhichApartment4(detailsMashkanta: DetailsMashkanta) {
  //   this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  // }

  // saveDetailsWhichApartment5(detailsMashkanta: DetailsMashkanta) {
  //   this.detailsMashkantaOfCurrentCustomer = detailsMashkanta;
  // }

  saveAllDetails(details): Observable<User> {
    var x = JSON.parse(localStorage.getItem('currentUser'));
    return this._http.post<User>("http://localhost:5000/saveAllDetails/" + x.identity, details)
  }

  getAllDetailsOfCurrentCustomer(id): Observable<DetailsMashkanta> {
    return this._http.get<DetailsMashkanta>("http://localhost:5000/getAllDetailsOfCurrentCustomer/" + id)
  }

  // getBaseListFiles() {
  //   let baseFiles: string[] = ["צילום תז", "צילום ספח תז", "אישור1", "אישור2"];
  //   return baseFiles;
  // }

  constructor(private _http: HttpClient) { }
}
