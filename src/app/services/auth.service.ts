import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'


const URL = environment.url;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {

    return this.http.post( URL + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(userName: string, age: number, role: string, email: string, password: string): Observable<any> {

    return this.http.post( URL + 'signup', {
      userName,
      age,
      role,
      email,
      password
    }, httpOptions);
  }

}
