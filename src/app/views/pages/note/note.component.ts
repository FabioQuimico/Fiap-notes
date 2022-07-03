import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  noteProp = {} as Note; //Quando não for inicializada tem que dizer o tipo;
  @Input()
  titleProp: any;

  @Output()
  notify = new EventEmitter(); // Método para emitir um evento para o pai

  constructor(private noteService: NoteService) { }

  ngOnInit(): void { }

  confirmRemove() {
    if (confirm("Deseja remover a nota?")) {
      this.notify.emit();
    }
  }

  editNote() {
    this.noteService.notifyEditNote(this.noteProp);
  }
}
