import { Routes } from '@angular/router';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos').then(m => m.ProdutosComponent)
  },
  {path: '**', component: NaoEncontrado}
];