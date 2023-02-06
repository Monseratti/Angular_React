import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CW0602';
  items:MyObject[] = [
    {title:"Title1", text:"Some text1"},
    {title:"Title2", text:"Some text2"},
    {title:"Title3", text:"Some text3"},
  ];
  selectedItem:MyObject=this.items[0];
  Change(item:MyObject){
    this.selectedItem=item;
  }
}

class MyObject{
  title: string|undefined;
  text: string|undefined;
}