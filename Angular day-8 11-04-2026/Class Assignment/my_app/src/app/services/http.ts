import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GitUserType } from '../../types/githubUsers';
import { PlatzilUserType } from '../../types/platzilUserType';
import { LoginResponseType, LoginType } from '../../types/loginType';

@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient = inject(HttpClient)

  baseUrl : string = 'https://api.escuelajs.co/api/v1'

  getUsers(){
    return this.httpClient.get<GitUserType[]>(`${this.baseUrl}/users`);
  }
  adduser(user:PlatzilUserType){
    return this.httpClient.post(`${this.baseUrl}/users`,user)
  }
  loginUser(user: LoginType) {
  return this.httpClient.post<LoginResponseType>(`${this.baseUrl}/auth/login`,
    user
  );
}
}
