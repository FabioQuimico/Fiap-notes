import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note = {
    id: 1,
    data: new Date(),
    text: 'Um texto qualquer',
    urgent: true,
  }
  
  constructor() { }


  ngOnInit(): void {
  }

  removeNote() {
    alert("Remover nota");
  }

}
