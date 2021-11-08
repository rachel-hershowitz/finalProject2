import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http: HttpClient) { }

  createMessageByUserId(message: Message, id: string): Observable<boolean> {
    return this._http.post<boolean>("http://localhost:5000/createMessageByUserId", { message, id });
  }

  getListMessagesOfCurrentUser(id): Observable<Message[]> {
    return this._http.get<Message[]>("http://localhost:5000/getListMessagesOfCurrentUser/" + id);
  }

}
