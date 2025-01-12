import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private users: User[] = [];

  constructor(private http: HttpClient) {}

  addUser(userData: User): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
