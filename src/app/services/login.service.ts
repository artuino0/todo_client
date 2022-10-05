import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  authService(user: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios
        .post('http://localhost:3000/api/auth/', { user, password })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
