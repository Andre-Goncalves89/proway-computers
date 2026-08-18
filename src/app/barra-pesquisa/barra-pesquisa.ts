import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

 
@Component({
  selector: 'app-barra-pesquisa',
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-pesquisa.html',
  styleUrl: './barra-pesquisa.css',
})

export class BarraPesquisaComponent {
  descricao: string = '';

  constructor(private router: Router) {}

  pesquisar() {
    if(this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: {
          descricao: this.descricao
        }
      })
      return
    }
    this.router.navigate(['produtos'])
  }
}
