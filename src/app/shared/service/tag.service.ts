import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl = 'http://localhost:8080/v1/';

  constructor(private http: HttpClient) { }

  getTag(id: number): Observable<any>{
    return this.http.get(this.baseUrl + 'tags/' + id);
  }

  getTags(params?: HttpParams): Observable<any> {
    if (params != null) {
      return this.http.get(this.baseUrl + 'tags', {params});
    }
    return this.http.get(this.baseUrl + 'tags');
  }
}
