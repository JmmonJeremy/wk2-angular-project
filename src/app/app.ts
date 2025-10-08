import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  standalone: false,
  // styleUrl: './app.css',
  // Insert multiline styles in the file instead of in linked file
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class App {
}
