import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Notes} from "../models/notes.models";

@Injectable({
  providedIn: 'root'
})
export class CrudNoteService {

  constructor(private http: HttpClient) {
  }

  public getNotes(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000//api/note/show');
  }
}
