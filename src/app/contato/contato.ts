import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contato',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})

export class ContatoComponent {
  formContato!: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formContato = this.fb.group({
      nome: ["",[
        Validators.minLength(4),
        Validators.required
      ]],
      assunto: ["", [
        Validators.minLength(10),
        Validators.required
      ]],
      telefone: ["", [
        Validators.minLength(11),
        Validators.required
      ]],
      email: ["", [
        Validators.email,
        Validators.required
      ]],
      mensagem: ["", [
        Validators.minLength(20),
        Validators.required
      ]]
    })
  }

  enviar() {
    if(this.formContato.invalid) {
      return;
    }
    alert("Mensagem enviada com sucesso!")
    this.formContato.reset();
  }

}
