import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  private carrinho = inject(CarrinhoService)

  get quantidadeCarrinho(): number {
    return this.carrinho.obterCarrinho().reduce((total: number, item: any) => total + item.quantidade, 0);
  }
}
