import {Component, OnInit} from '@angular/core';
import {CrudNoteService} from "../../services/crud-note.service";
import {Notes} from "../../models/notes.models";

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent implements OnInit {
  notes: any;
  error: any;

  constructor(private noteService: CrudNoteService) {
    this.showNotes();
  }

  ngOnInit() {
  }

  showNotes() {
    this.noteService.getNotes().subscribe((data: Notes) => {
      this.notes = data;
      console.log(this.notes)
    }, (error: any) => {
      this.error = error;
      console.log('Error: ', error);
    });
  }

}
