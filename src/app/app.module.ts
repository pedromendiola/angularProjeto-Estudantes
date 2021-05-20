import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { FormsModule } from '@angular/forms';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    EstudanteComponent,
    AlunoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
