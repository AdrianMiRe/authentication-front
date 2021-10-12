import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getMicrosoftAuthUrl() {
    console.log('previously');
    return this.http.get('http://localhost:3000/auth');
  }

  sendSomething() {
    return this.http.get('http://localhost:3000/auth/lookat');
  }
}
