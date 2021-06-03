import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { ESTUDANTE } from '../mock-estudantes';
import { EstudanteService } from '../estudante.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']

})
export class EstudanteComponent implements OnInit {

  estudantes: Estudante[] = [];



  constructor(private estudanteService: EstudanteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }

  add(name: string, age: number, sala: string, telephone: number): void {
    name = name.trim();
    sala = sala.trim();

    if (!name) { return; }
    if (!sala) { return; }
    this.estudanteService.addEstudante({ name, age, sala, telephone } as Estudante)
      .subscribe(estudante => {
        this.estudantes.push(estudante);
      });
  }
  delete(estudante: Estudante): void {
    this.estudantes = this.estudantes.filter(est => est !== estudante);
    this.estudanteService.deleteEstudante(estudante.id).subscribe();
  }
}
