import { Good   } from "./good";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HttpService{
    constructor(private http:HttpClient){
    }
    getGoods():Observable<Good[]>{
        return this.http.get('assets/goods.json').pipe(map((data:any)=>{
            let goodsList = data.goodsList;
            return goodsList.map((good:any):Good=>{
                return new Good(good.name, good.price);
            })
        }))
    }
}