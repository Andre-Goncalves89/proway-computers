import { Injectable } from '@angular/core';
import { IcarrinhoProduto } from './produtos';

@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {
  itens: IcarrinhoProduto[] = [];

  obterCarrinho() {
     this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
     return this.itens; 
  }

   salvar() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

 remover(produtoId: number) {
  const produto = this.itens.find(item => item.id === produtoId);

  if (produto) {
    if (produto.quantidade > 1) {
      produto.quantidade -= 1;
    } else {
      this.itens = this.itens.filter(item => item.id !== produtoId);
    }
    this.salvar();
  }
}

  adicionarAoCarrinho(produto: IcarrinhoProduto) {
    const produtoExistente = this.itens.find(item => item.id === produto.id)

    if(produtoExistente) {
      produtoExistente.quantidade += produto.quantidade
    } else {
      this.itens.push(produto)
    }

    this.salvar();
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

}
