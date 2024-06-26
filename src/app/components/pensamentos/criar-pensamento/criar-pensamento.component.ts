import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../../services/pensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router) { }
  ngOnInit(): void {

  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => this.router.navigate(['/listarPensamento']));
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
