import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { User } from "./user";

@Injectable()
export class HttpServise{
    constructor(private http:HttpClient){}

    postUser(user:User){
        return this.http.post("localhost:3000/postData",JSON.stringify(user));
    }
}