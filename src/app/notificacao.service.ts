import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})

export class NotificacaoService {
  private snackBar = inject(MatSnackBar)

  notificar(mensagem: string): void {
    this.snackBar.open(mensagem, 'ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }
}
