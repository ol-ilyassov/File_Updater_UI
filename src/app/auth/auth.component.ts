import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: string = ''
  password: string = ''
  result: string = ''

  constructor(private api: ApiCallerService) {
    let temp = localStorage.getItem("jwt-token") || ''
    if (temp.length != 0) {
      window.location.href = '/'
    }
  }

  ngOnInit(): void { }

  auth() {
    this.result = ''
    if (this.username.length != 0 && this.password.length != 0) {
      let request = {
        "username": this.username,
        "password": this.password
      }
  
      var response = this.api.sendPostRequest("/login", request)
      response.subscribe(data => {
        const responseObj = JSON.parse(JSON.stringify(data))

        if (responseObj.status != 200) {
          this.result = responseObj.statusText
        } else {
          localStorage.setItem('jwt-token', responseObj.response)
          window.location.href = '/'
        }

      })
    } else {
      this.result = "Username/Password are required."
    }
  }

}
