import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Iproduto, produtos } from '../produtos'; // 👈 Importa do outro arquivo!
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

  constructor() { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
   }
}