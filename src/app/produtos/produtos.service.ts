import { Injectable } from '@angular/core';
import { Iproduto, produtos } from '../produtos';

@Injectable ({
    providedIn: 'root'
})

export class ProdutosService {
    produtos: Iproduto[] = produtos

    getAll(): Iproduto[] {
        return this.produtos
    }

    getOne(produtoId: number): Iproduto | undefined {
  return this.produtos.find(produto => Number(produto.id) === produtoId);
}
}