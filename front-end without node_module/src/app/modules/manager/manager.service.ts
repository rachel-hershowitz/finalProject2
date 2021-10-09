import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getAllPersonalInformation(): Observable<DetailsMashkanta[]> {
    return this.http.get<DetailsMashkanta[]>("http://localhost:5000/getPersonalInformation");
  }
}
