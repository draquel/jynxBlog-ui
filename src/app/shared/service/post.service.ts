import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = environment.apiUrl + 'posts';

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<any>{
    return this.http.get(this.baseUrl + '/' + id);
  }

  getPosts(params?: HttpParams): Observable<any> {
    if (params != null) {
      return this.http.get(this.baseUrl, {params});
    }
    return this.http.get(this.baseUrl);
  }
}
