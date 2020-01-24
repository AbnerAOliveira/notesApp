import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeMainComponent} from "./views/home-main/home-main.component";


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot([
      { path: '', component: HomeMainComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
