import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { ApiCallerService } from './api-caller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  // standard settings
  opened = false;

  //Authorization data
  apiResponse: string

  username: any
  temp: any

  auth: boolean = false

  constructor(private titleService: Title, public router: Router, public httpClient: HttpClient,
    private api: ApiCallerService) {    
      this.setTitle("File Updater UI")

      this.temp = localStorage.getItem('jwt-token') || ''
      if (this.temp.length != 0) {
        this.auth = true
      }
     
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle)
  }

  ngOnInit(): void { }

  logOut() {
    localStorage.clear()
    window.location.href = '/'
  }
}

