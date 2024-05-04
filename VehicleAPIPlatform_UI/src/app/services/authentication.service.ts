import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:5000'; // Your API gateway URL
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    // Make HTTP POST request to your authentication endpoint
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          // Save JWT token in local storage upon successful login
          localStorage.setItem('jwtToken', response.token);
        }),
        catchError(error => {
          // Handle login errors here
          console.error('Login error:', error);
          return throwError(error);
        })
      );  }

  logout(): void {
    // Remove JWT token from local storage upon logout
    localStorage.removeItem('jwtToken');
  }

  isAuthenticated(): boolean {
    // Check if JWT token exists in local storage
    return !!localStorage.getItem('jwtToken');
  }

  getJwtToken(): string | null {
    // Get JWT token from local storage
    return localStorage.getItem('jwtToken');
  }

  // Add other authentication-related methods as needed
}
