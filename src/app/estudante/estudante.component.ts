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

  estudante: Estudante = {
    ra: 1,
    name: 'Pedro',
    age: 20,
    class: 'ADS',
    telephone: 123456789,
  };

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }
}
