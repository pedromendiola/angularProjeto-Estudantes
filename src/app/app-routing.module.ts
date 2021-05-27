import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante/estudante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';

const routes: Routes = [
  { path: 'estudantes', component: EstudanteComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'detail/:ra', component: AlunoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   }
