import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Cont} from './cont'

  

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  REST_API: string = 'https://localhost:7087/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .append('content-type', 'application/x-www-form-urlencoded');


  constructor(private httpClient: HttpClient) { }

  RegClient(data: Cont): Observable<any> {
    let API_URL = `https://localhost:7087/api/contacts`;

    console.log(data);
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
       )


  }

  GetClients(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://localhost:7087/api/contacts`);
  }

  deleteClients(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/contacts/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
