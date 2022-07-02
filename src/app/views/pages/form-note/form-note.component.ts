import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-note', //Nome para referenciar o componente
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {
  titulo= "FIAP NOTES";
  imagemLogo = "assets/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
