import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) {
    this.checkoutForm = this.formBuilder.group({
      textNote: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
  }

  sendNote() {
    // console.log(this.checkoutForm.get('textNote')?.errors);
    if (this.checkoutForm.valid) {
      this.noteService.postNote(this.checkoutForm.value.textNote).subscribe({
        next: (note) => {
          this.checkoutForm.reset()
          this.noteService.nofityNewNoteAdded(note);
        },
        error: (error) => alert("Algo errado na inserção!")
      });
    }
  }

  get textNote() {
    return this.checkoutForm.get('textNote');
  }

}
