import { Component, OnInit } from '@angular/core';

import { LancamentoService } from '../lancamento.service';

@Component({
    selector: 'app-lancamentos-pesquisa',
    templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent implements OnInit {

    descricao: string;

    lancamentos: any[] = [];

    constructor(private lancamentoService: LancamentoService) { }

    ngOnInit(): void {
        this.pesquisar();
    }

    pesquisar(): void {
        this.lancamentoService.pesquisar({ descricao: this.descricao })
            .then(lancamentos => this.lancamentos = lancamentos);
    }

}
