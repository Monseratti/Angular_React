import { Component } from '@angular/core';
import { HttpServise } from './http.servise';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpServise]
})
export class AppComponent {
  title="Some"
  user:User = new User("","");
  done:boolean = false;
  result:boolean = false;
  constructor(private http:HttpServise){}

  post(user:User){
    console.log(user);
    this.http.postUser(user).subscribe({
      next: (data:any)=>{ this.result = data.isOk, this.done = true  },
      error: (error)=>console.log(error)
  })
  }
}
