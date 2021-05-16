import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:8080/v1/';

  constructor(private http: HttpClient) { }

  getPosts(params?: HttpParams): Observable<any> {
    if (params != null) {
      return this.http.get(this.baseUrl + 'posts', {params});
    }
    return this.http.get(this.baseUrl + 'posts');
  }
}
