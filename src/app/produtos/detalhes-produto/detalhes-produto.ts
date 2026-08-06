import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduto } from '../../produtos';
import { ProdutosService } from '../produtos.service';
import { NotificacaoService } from '../../notificacao.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhes-produto.html',
  styleUrl: './detalhes-produto.css',
})

export class DetalhesProduto implements OnInit {
  produto: Iproduto | undefined;
  quantidade = 1;

  private notificacaoService = inject(NotificacaoService)
  private produtosService = inject(ProdutosService)
  private route = inject(ActivatedRoute)
  private router = inject(Router);

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'))

    this.produto = this.produtosService.getOne(produtoId)

    if (!this.produto) {
      this.router.navigate(['/nao-encontrado']); 
    }
  }

  adicionarAoCarrinho(): void {
    this.notificacaoService.notificar('o produto foi adicionado ao carrinho')
  }
}
