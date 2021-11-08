import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  // upload(file: File, id: string): Observable<void> {
  upload(file: File): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    // const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    // return this.http.request(req);
    // return this.http.post<void>("http://localhost:5000/upload", { id, formData });
    let identityC = "999888";
    return this.http.post<void>("http://localhost:5000/upload", formData);
    // return this.http.post<void>("http://localhost:5000/upload", { formData, identityC });

  }

  getFiles(): Observable<any> {
    return this.http.get("http://localhost:5000/files");
  }

  downloadFile(name): Observable<any> {
    return this.http.get("http://localhost:5000/files/" + name);
  }

  deleteFile(name): Observable<any> {
    console.log(name);
    return this.http.delete("http://localhost:5000/files/delete/" + name)
  }

}
