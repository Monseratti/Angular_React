import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowGoodsComponent } from './show-goods/show-goods.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SetLoginPassComponent } from './set-login-pass/set-login-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowGoodsComponent,
    SetLoginPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
