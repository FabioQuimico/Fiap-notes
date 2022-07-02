import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  title = 'Titulo de Notas'; // Inutil, criado só para exemplo
  notes = [] as Note[];

  // Injetando a dependencia do service
  constructor(private noteService: NoteService) { }

  // Metodo do ciclo de vida do componente
  ngOnInit(): void {
    this.getApiNotes();
  }

  getApiNotes() {
    this.noteService.getNotes().subscribe({
      next: (apiNotes) => this.notes = apiNotes,
      error: (error) => alert(error),
      // complete: () => alert('Deu tudo certo!') // Acontece sempre, mas não é necessário
    });
  }

  removeNote(noteId: number) {
    this.notes = this.notes.filter(note => note.id !== noteId);
    this.noteService.removeNote(noteId).subscribe(
      () => {},
    );
  }
}


