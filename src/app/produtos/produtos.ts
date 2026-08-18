import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Iproduto } from '../produtos'; // 👈 Importa do outro arquivo!
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class ProdutosComponent implements OnInit {
  produtos: Iproduto[] | undefined; // 👈 Atribui para a variável da classe

  private produtosService = inject(ProdutosService)
  private route = inject(ActivatedRoute)

  constructor() { }

  ngOnInit(): void {
    const produtosAll = this.produtosService.getAll(); 

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();

      if(descricao) {
        this.produtos = produtosAll.filter(produto =>
          produto.descricao.toLocaleLowerCase().includes(descricao)
        )
        return;
      }
      this.produtos = produtosAll;
    })
   }
}