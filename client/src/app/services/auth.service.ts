import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  login(user: IUser): Observable<IUser>  {
    return this.http.post<IUser>(`${this.baseUrl}/login`, {
      email: user.email,
      password: user.password,
    });
  }
}
