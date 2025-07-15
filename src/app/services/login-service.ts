import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResponse, TotpResponse} from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) {
  }

  userLogin(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:9000/api/v1/auth/authenticate', {
      username: username,
      password: password
    });
  }

  verifyOtp(otp: string): Observable<TotpResponse> {
    let token = sessionStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<TotpResponse>('http://localhost:9000/api/v1/totp/verify', {otp: otp}, {headers: headers}
    );

  }
}
