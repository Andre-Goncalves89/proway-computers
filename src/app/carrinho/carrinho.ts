import { OnInit, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarrinhoService } from "../carrinho.service"; 
import { IcarrinhoProduto } from "../produtos";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.html',
  styleUrls: ['./carrinho.css']
})

export class CarrinhoComponent implements OnInit {
    itens: IcarrinhoProduto[] = [];
    total = 0;
    constructor(
        public carrinhoService: CarrinhoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.itens = this.carrinhoService.obterCarrinho();
        this.calcularTotal()
    }

    removerProdutoCarrinho(produtoId: number) {
        this.carrinhoService.remover(produtoId);
        this.itens = this.carrinhoService.obterCarrinho();
        this.calcularTotal();
    }

    calcularTotal() {
        this.total = this.itens.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
    }

    reativaTotal() {
        this.carrinhoService.salvar(); 
        this.calcularTotal();          
    }

    comprar() {
        alert("Parabéns, compra realizada com sucesso!")
        this.carrinhoService.limparCarrinho()
        this.router.navigate(["produtos"])
    }
}