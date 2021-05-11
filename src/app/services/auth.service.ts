import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private notificationService:NotificationService, private router:Router) {}
  signIn(value: any) {
    this.http.post(environment.api_url + 'admins/signin', value).subscribe(
      ({accessToken,user}:any) => {

        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('token',JSON.stringify(accessToken))
        this.notificationService.successNotification("Welcome !!!")
        this.router.navigateByUrl('/layout')
      },
      ({error}) => {
        this.notificationService.errorNotification(error.message)
      }
    );
  }

  signOut(){
    localStorage.clear()
    this.router.navigateByUrl('')
  }

  get SessionUser(){
    return JSON.parse(localStorage.getItem('user'))
  }
  get Token(){
    return JSON.parse(localStorage.getItem('token'))
  }
}
