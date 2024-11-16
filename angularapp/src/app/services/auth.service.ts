import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl: string = "https://8080-bcaaffbbceceddccecfbdcadcaebdade.premiumproject.examly.io";
 
  constructor(private http: HttpClient) {}
 
  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, { email, password })
        .pipe(
          map(response => {
            // Assuming the token is in the response directly
            if (response.token) {
              this.storeToken(response.token);
            }
            return response;
          }),
          catchError(this.handleError)
        );
    }
 
  register(user: User): Observable<User> {
return this.http.post<User>(`${this.apiUrl}/api/register`, user)
      .pipe(
        catchError(this.handleError)
      );
  }
 
  logout(): Observable<void> {
    localStorage.clear();
    return;
  }
 
  isLoggedIn(): boolean {
    return localStorage.getItem('accessToken') != null;
  }
 
  // Error handling
  private handleError(error: any) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
 
  // Store token
  storeToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() : string | null
  {
    return localStorage.getItem('accessToken');
  }
  decodeToken() : any
  {
    const token = this.getToken();
    return token?jwtDecode(token):'';
  }
  // isLoggedIn() : boolean
  // {
  //   const token = this.getToken();
  //   return !!token;
  // }
  getUserRole(): string  {
    const decoded = this.decodeToken();
    const role: string = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ;
    return role;
  }
  isAuthorized(allowedRoles:string[]) : boolean
  {
    const userRole = this.getUserRole();
    return allowedRoles.includes(userRole);
  }
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  

}