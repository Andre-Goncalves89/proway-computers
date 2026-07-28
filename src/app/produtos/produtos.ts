import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Iproduto, produtos } from '../produtos'; // 👈 Importa do outro arquivo!

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class ProdutosComponent implements OnInit {
  produtos: Iproduto[] = produtos; // 👈 Atribui para a variável da classe

  constructor() { }

  ngOnInit(): void { }
}