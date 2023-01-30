import { Component } from '@angular/core';

@Component({
  selector: 'app-billy',
  templateUrl: './billy.component.html',
  styleUrls: ['./billy.component.css']
})
export class BillyComponent {
  quote = [
    "Patience is a key element of success",
    "If you think your teacher is tough, wait till you get a boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can`t lose",
    "Be nice to nerds. Chances are you`ll end up working for one"
  ];
}
