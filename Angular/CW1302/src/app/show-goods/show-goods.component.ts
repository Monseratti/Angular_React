import { Component } from '@angular/core';
import { Good } from './good';
import { HttpService } from './http.service';

@Component({
  selector: 'app-show-goods',
  templateUrl: './show-goods.component.html',
  styleUrls: ['./show-goods.component.css'],
  providers:[HttpService]
})
export class ShowGoodsComponent {
  public goods:Good[]=[];
  constructor(private httpService:HttpService){}

  ngOnInit(){
      this.httpService.getGoods().subscribe({next: (data:Good[])=>{this.goods=data}});
  }
  reGoods(){
    this.goods = this.goods;
  }
}
