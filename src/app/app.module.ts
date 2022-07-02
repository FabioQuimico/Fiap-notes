import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNoteComponent } from './views/pages/form-note/form-note.component';
import { ListNotesComponent } from './views/pages/list-notes/list-notes.component';
import { NoteComponent } from './views/pages/note/note.component';
import { HomeComponent } from './views/pages/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormNoteComponent,
    ListNotesComponent,
    NoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
