import { Component, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { LancamentoService } from '../lancamento.service';
import { LancamentoFiltro } from './lancamento-filtro.model';

@Component({
    selector: 'app-lancamentos-pesquisa',
    templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent {

    filtro: LancamentoFiltro = new LancamentoFiltro();
    lancamentos: any[] = [];
    totalRegistros = 0;
    loading: boolean;

    @ViewChild('tabela') grid: Table;

    constructor(
        private lancamentoService: LancamentoService,
        private messageService: MessageService
    ) { }

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

    excluir(codigo: number): void {
        this.lancamentoService.excluir(codigo)
            .then(() => {
                if (this.grid.first === 0) {
                    this.pesquisar();
                } else {
                    this.grid.reset();
                }

                this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' });
            });
    }

}
