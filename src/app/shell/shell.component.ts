import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  command: string = ''
  result: string = ''

  constructor(private api: ApiCallerService) { }

  ngOnInit(): void { }

  runCommand() {
    this.result = ''
    if (this.command.length != 0) {
      let request = {
        "shell": this.command,
      }
  
      var response = this.api.sendPostRequest("/exec", request)
      response.subscribe(data => {
        const responseObj = JSON.parse(JSON.stringify(data))
        this.result = responseObj.stdout || responseObj.stderr
      })
    } else {
      this.result = "The command is required."
    }
  }

}
