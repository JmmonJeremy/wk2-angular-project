import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.html',
  standalone: false, 
  styles: [`
      .online {
      color: white;
      }
    `]
})
export class Server {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() >0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}