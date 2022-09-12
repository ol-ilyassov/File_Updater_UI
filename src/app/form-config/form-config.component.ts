import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.scss']
})
export class FormConfigComponent implements OnInit {

  result: string = ""

  server_host: string = ""
  server_port: string = ""
  disable_ui: boolean = false

  updaters: any

  constructor(private api: ApiCallerService) {
    let temp = localStorage.getItem("jwt-token") || ''
    if (temp.length == 0) {
      window.location.href = '/'
    }
  }

  ngOnInit(): void {
    //var response = this.api.sendGetRequestWithAuth("/form")
    var response = this.api.sendGetRequest("/form")
    response.subscribe(data => {
      const responseObj = JSON.parse(JSON.stringify(data))
      this.server_host = responseObj.response.server_host
      this.server_port = responseObj.response.server_port
      this.disable_ui = responseObj.response.disable_ui
      this.updaters = responseObj.response.updaters
    }, error => {
      //console.log("ERR", error)
      this.result = error
    })
  }

  save() {
    let request = {
      "server_host": this.server_host,
      "server_port": this.server_port,
      "disable_ui": this.disable_ui,
      "updaters": this.updaters
    }

    const indexOfObject = request.updaters.findIndex((object: { name: string; }) => {
      return object.name == 'selfConfig';
    });
    
    if (indexOfObject !== -1) {
      request.updaters.splice(indexOfObject, 1);
    }

    console.log(request)
    var response = this.api.sendPostRequest("/form", request)
    response.subscribe(data => {
      const responseObj = JSON.parse(JSON.stringify(data))
      this.result = responseObj.response
    }, error => {
      //console.log("ERR", error)
      this.result = error
    })
  }
}
