import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTE } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]> {
    const estudantes = of(ESTUDANTE);
    this.messageService.add('EstudanteService: fetched estudantes');
    return estudantes;
  }

  getEstudante(id: number): Observable<Estudante> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const estudante = ESTUDANTE.find(e => e.ra === id)!;
    this.messageService.add(`EstudanteService: fetched hero id=${id}`);
    return of(estudante);
  }
  
}
