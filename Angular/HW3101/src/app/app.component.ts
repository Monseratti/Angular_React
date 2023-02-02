import { Component } from '@angular/core';
import { Hobbies } from './mock_unusual_hobbie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW3101';
  hobbies = Hobbies;
}
