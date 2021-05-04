import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { ESTUDANTE } from '../mock-estudantes';



@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
  
})
export class EstudanteComponent implements OnInit {
  

  estudantes = ESTUDANTE;
  selectedEstudante?: Estudante;
  estudante: Estudante = {
    ra: 1,
    name: 'Pedro',
    age: 20,
    class: 'ADS',
    telephone: 123456789,
  };

  constructor() { }

  ngOnInit(): void {
  }

  
  onSelect(estudante: Estudante): void {
  this.selectedEstudante = estudante;
}

}
