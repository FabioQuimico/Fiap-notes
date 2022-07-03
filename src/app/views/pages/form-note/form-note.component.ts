import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-form-note', //Nome para referenciar o componente
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  titulo = "FIAP NOTES";
  imagemLogo = "assets/logo.png";
  checkoutForm: FormGroup;
  subscription: Subscription;
  noteTemp!: Note;

  private isEditting: boolean = false;

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) {
    this.checkoutForm = this.formBuilder.group({
      textNote: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.subscription = this.noteService.editNoteProvider.subscribe((note) => {
      this.isEditting = true;
      this.noteTemp = note;
      this.checkoutForm = this.formBuilder.group({
        textNote: [note.text, [Validators.required, Validators.minLength(5)],],
      });
    });
  }

  ngOnInit(): void { }

  sendNote() {
    // console.log(this.checkoutForm.get('textNote')?.errors);
    if (this.checkoutForm.valid) {
      if (this.isEditting) {
        this.noteTemp.text = this.checkoutForm.value.textNote; //Guarda o valor do novo texto
        this.noteService.putNote(this.noteTemp).subscribe({
          next: (note) => {
            this.noteService.nofityNewNoteAdded(note);
            this.checkoutForm.reset();
            this.isEditting = false;
          },
          error: () => alert('Algo deu errado na edição!'),
        });
      } else {
        this.noteService.postNote(this.checkoutForm.value.textNote).subscribe({
          next: (note) => {
            this.checkoutForm.reset()
            this.noteService.nofityNewNoteAdded(note);
          },
          error: (error) => alert("Algo errado na inserção!")
        });
      }
    }
  }

  get textNote() {
    return this.checkoutForm.get('textNote');
  }
}
