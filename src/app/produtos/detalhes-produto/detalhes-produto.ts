import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduto } from '../../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhes-produto.html',
  styleUrl: './detalhes-produto.css',
})

export class DetalhesProduto implements OnInit {
  produto: Iproduto | undefined;
  quantidade = 1;

  private produtosService = inject(ProdutosService)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'))

    this.produto = this.produtosService.getOne(produtoId)
  }
}
