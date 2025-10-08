import { Component, OnInit } from '@angular/core';

@Component({
  // selecting by an html element
  selector: 'app-servers',
  // selecting by an attribute instead of by an html element
  // selector: '[app-servers]',
  // selecting by a class instead of by an html element 
  // *id or pseudo selectors like hover won't work -not supported by Angular
  // selector: '.app-servers',
  standalone: false,
  templateUrl: './servers.html',
  // Single line in file template code
  // template: '<app-server></app-server><app-server></app-server>',
  // multiple lines in file template code using JavaScript template expressions
  // template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  styleUrl: './servers.css'
})
export class Servers implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
