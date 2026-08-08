import { Injectable } from '@angular/core';
import { IcarrinhoProduto } from './produtos';

@Injectable({
  providedIn: 'root',
})

export class Carrinho {
  itens: IcarrinhoProduto[] = [];

  obterCarrinho() {
    return this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
  }

   salvar() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

  remover(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId)
    this.salvar();
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

}
