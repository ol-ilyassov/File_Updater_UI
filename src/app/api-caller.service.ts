import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(public http: HttpClient) { }

  addr = "http://localhost:8090/api"

  sendGetRequest(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        })
      };

    return this.http.get(this.addr+url, httpOptions)
  }

  sendGetRequestWithAuth(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'token': localStorage.getItem('jwt-token') || ''
        })
      };
    return this.http.get(this.addr+url, httpOptions)
  }
  
  sendPostRequest(url: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        })
      };

    return this.http.post(this.addr+url, data, httpOptions)
  }

  sendPostRequestWithAuth(url: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'token': localStorage.getItem('jwt-token') || ''
        })
      };
    return this.http.post(this.addr+url, data, httpOptions)
  }

  // sendPatchRequestWithAuth(url: string) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Accept': 'application/json',
  //       'Token': localStorage.getItem('token') || ''
  //       })
  //     };
  //   return this.http.patch(this.addr+url, httpOptions)
  // }
}
