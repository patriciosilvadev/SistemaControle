import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import dos formularios*/
import { FormInfoOrcamentoComponent } from './pages/form-info-orcamento/form-info-orcamento.component';
import { FormDadosClienteComponent } from './pages/form-dados-cliente/form-dados-cliente.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro-cliente', pathMatch: 'full' },
  { 	path: 'orcamento',
   		component: FormInfoOrcamentoComponent },
  {
    	path: 'cadastro-cliente',
    	component: FormDadosClienteComponent
  },
  {
    	path: 'acompanhamento',
    	component: AcompanhamentoComponent
  },      
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }