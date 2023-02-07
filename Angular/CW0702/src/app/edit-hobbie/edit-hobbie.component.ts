import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-hobbie',
  templateUrl: './edit-hobbie.component.html',
  styleUrls: ['./edit-hobbie.component.css']
})
export class EditHobbieComponent {
  hobbieName:string = "Some hobbie name";
  isEdit = false;
  submitData(){
    alert("done!");
    this.isEdit = false;
  }
  editData(){
    this.isEdit = true;
  }
}
