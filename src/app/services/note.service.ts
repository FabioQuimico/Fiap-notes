import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from './@types/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl: String;

  private newNoteSource = new Subject<Note>(); //Subject que implementa o observable
  newNoteProvider = this.newNoteSource.asObservable(); // Aqui que vão se inscrever no observable

  private editNoteSource = new Subject<Note>();
  editNoteProvider = this.editNoteSource.asObservable();

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://fiap-notes-api.herokuapp.com';
  }

  nofityNewNoteAdded(note: Note) {
    this.newNoteSource.next(note);
  }

  notifyEditNote(note: Note) {
    this.editNoteSource.next(note);
  }


  // Cria um grupo de notas diferentes para renderização com ngFor
  private notes = [
    {
      id: 1,
      date: new Date(),
      urgent: false,
      text: 'Um texto qualquer',
    },
    {
      id: 2,
      date: new Date(),
      urgent: true,
      text: 'Um texto qualquer 2',
    },
    {
      id: 3,
      date: new Date(),
      urgent: false,
      text: 'Um texto qualquer 3',
    },
    {
      id: 4,
      date: new Date(),
      urgent: true,
      text: 'Um texto qualquer 4',
    }
  ]

  getNotes() {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }
  // Metodo especial do Angular pra chamar o metodo como se fosse propriedade
  get Notes() {
    return this.notes;
  }

  postNote(textNote: string) {
    return this.http.post<Note>(`${this.apiUrl}/notes`, { text: textNote });
  }

  removeNote(noteId: number) {
    return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
  }

  putNote(note: Note) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${note.id}`, {text: note.text});
  }
}
