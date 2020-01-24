import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNoteComponent } from './components/card-note/card-note.component';
import {TopBarComponent} from "./components/layouts/top-bar/top-bar.component";
import { HomeMainComponent } from './views/home-main/home-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNoteComponent,
    TopBarComponent,
    HomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
