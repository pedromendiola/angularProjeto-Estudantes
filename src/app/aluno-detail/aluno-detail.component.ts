import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  @Input() estudante?: Estudante;
  constructor() { }

  ngOnInit(): void {
  }

}
