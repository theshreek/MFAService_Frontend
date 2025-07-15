import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterResponse} from '../models/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) {
  }

  registerUser(user: any): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://localhost:9000/api/v1/auth/register', user);
  }
}
