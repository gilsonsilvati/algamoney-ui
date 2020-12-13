import { Component, OnInit } from '@angular/core';

import { LancamentoService } from '../lancamento.service';
import { LancamentoFiltro } from './../LancamentoFiltro';

@Component({
    selector: 'app-lancamentos-pesquisa',
    templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent implements OnInit {

    filtro: LancamentoFiltro = new LancamentoFiltro();

    lancamentos: any[] = [];

    constructor(private lancamentoService: LancamentoService) { }

    ngOnInit(): void {
        this.pesquisar();
    }

    pesquisar(): void {
        this.lancamentoService.pesquisar(this.filtro)
            .then(resultado => this.lancamentos = resultado.lancamentos);
    }

}
