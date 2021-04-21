import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {
  
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

}
