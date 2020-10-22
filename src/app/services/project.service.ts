import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private SERVER_URL = 'http://localhost:8085/';

  constructor(private client: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    console.log('handle error');
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  get() {
    console.log('gett');
    
  }
}
