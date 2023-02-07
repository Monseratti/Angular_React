import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { EditHobbieComponent } from './edit-hobbie/edit-hobbie.component';

@NgModule({
  declarations: [
    AppComponent,
    FamousPeopleComponent,
    EditHobbieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
