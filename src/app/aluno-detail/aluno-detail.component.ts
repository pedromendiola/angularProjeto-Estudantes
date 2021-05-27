import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudante';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  estudante?: Estudante;
  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEstudante();
  }

  getEstudante(): void {
    const id = Number(this.route.snapshot.paramMap.get('ra'));
    this.estudanteService.getEstudante(id)
      .subscribe(estudante => this.estudante = estudante);
  }

  goBack(): void {
    this.location.back();
  }

}
