import { Component } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

import { LancamentoService } from '../lancamento.service';
import { LancamentoFiltro } from './LancamentoFiltro';

@Component({
    selector: 'app-lancamentos-pesquisa',
    templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent {

    filtro: LancamentoFiltro = new LancamentoFiltro();
    lancamentos: any[] = [];
    totalRegistros = 0;
    loading: boolean;

    constructor(private lancamentoService: LancamentoService) { }

    pesquisar(pagina: number = 0): void {
        this.filtro.pagina = pagina;

        this.lancamentoService.pesquisar(this.filtro)
            .then(resultado => {
                this.lancamentos = resultado.lancamentos;
                this.totalRegistros = resultado.total;
            });
    }

    aoMudarPagina(event: LazyLoadEvent): void {
        this.loading = true;
        const pagina: number = event.first / event.rows;

        setTimeout(() => {
            this.pesquisar(pagina);
            this.loading = false;
        }, 1000);
    }

}
