import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl = environment.apiUrl + 'tags';

  constructor(private http: HttpClient) { }

  getTag(id: number): Observable<any>{
    return this.http.get(this.baseUrl + '/' + id);
  }

  getTags(params?: HttpParams): Observable<any> {
    if (params != null) {
      return this.http.get(this.baseUrl, {params});
    }
    return this.http.get(this.baseUrl);
  }
}
