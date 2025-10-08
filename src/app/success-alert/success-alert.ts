import { Component } from "@angular/core";

@Component ({
  selector: 'app-success-alert',
  standalone: false,
  templateUrl: './success-alert.html',
  styles: [`
    h3 {
      font-weight: bold;
      text-shadow: 1px 1px white,
                   -3px 3px white,
                   3px -3px white,
                   -1px -1px white;
      color: mediumaquamarine;
      background-color: greenyellow;
      border: 10px solid lime;
      width: 65%;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class SuccessAlert {
  
}