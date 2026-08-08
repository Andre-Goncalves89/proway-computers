import { Component, inject } from '@angular/core';
import { Carrinho } from '../carrinho';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  private carrinho = inject(Carrinho)

  get quantidadeCarrinho(): number {
    return this.carrinho.obterCarrinho().reduce((total: number, item: any) => total + item.quantidade, 0);
  }
}
