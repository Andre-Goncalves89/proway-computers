import { Routes } from '@angular/router';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos').then(m => m.ProdutosComponent)
  },
  {
    path: 'produtos/:id',
    loadComponent: ()=> import('./produtos/detalhes-produto/detalhes-produto').then(m => m.DetalhesProduto)
  },
  {
  path: 'carrinho',
  loadComponent: () => import('./carrinho/carrinho').then(m => m.CarrinhoComponent)
},
{
  path: 'contato',
  loadComponent: () => import('./contato/contato').then(m => m.ContatoComponent)
},
  {path: '**', component: NaoEncontrado}
];