import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardNoteComponent} from "./components/card-note/card-note.component";


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot([
      { path: '', component: CardNoteComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
