import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserSignUpBody } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  doLogin(body: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, body);
  }

  doRegister(body: Partial<UserSignUpBody>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, body);
  }
}
