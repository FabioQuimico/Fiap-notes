import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './@types/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl: String;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'http://fiap-notes-api.herokuapp.com';
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

    removeNote(noteId: number) {
      return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
    }
}
