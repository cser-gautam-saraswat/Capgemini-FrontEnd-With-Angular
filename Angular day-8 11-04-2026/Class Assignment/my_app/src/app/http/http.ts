import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Http as HttpService } from '../services/http'
import { GitUserType } from '../../types/githubUsers';
import { JsonPipe } from '@angular/common';
import { PlatzilUserType } from '../../types/platzilUserType';
import { LoginType } from '../../types/loginType';

@Component({
  selector: 'app-http',
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http implements OnInit {
  httpData = inject(HttpService)

  userData = signal<GitUserType[]>([])
  ngOnInit(): void {
    this.httpData.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.userData.set(data)
      },
      error: (errmsg) => {
        console.log(errmsg);
      },
      complete: () => {
        console.log('data recieved successfully');
      }
    })
  }

  user: PlatzilUserType = {
    name: "Gautam",
    avatar: 'https://plus.unsplash.com/premium_photo-1775512727308-1078a5ead124?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: "gautam@gmail.com",
    password: "123456789"
  }

  addNewUser() {
    this.httpData.adduser(this.user).subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (errmsg) => {
        console.log(errmsg);
      },
      complete: () => {
        console.log('data Posted successfully');
      }
    })
  }

  loginData: LoginType = {
    email: 'admin@mail.com',
    password: 'admin123'
  };
  login() {
    this.httpData.loginUser(this.loginData).subscribe({
      next: (data) => {
        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Login successful');
      }
    });
  }
}
