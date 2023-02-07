import { Component } from '@angular/core';
import { FamousPeopleServise } from './Famous-people.servise';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css'],
  providers: [FamousPeopleServise]
})
export class FamousPeopleComponent {
  data:string[]=[];
  text:string = "";
  constructor(private fpserv:FamousPeopleServise){}
  addFP(data:string){
    this.fpserv.add(data);
  }
  ngOnInit(){
    this.data = this.fpserv.get();
  }
}
