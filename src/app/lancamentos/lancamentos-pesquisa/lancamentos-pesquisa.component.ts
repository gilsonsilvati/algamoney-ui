import { Component, ViewChild } from '@angular/core';

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { LancamentoService } from '../lancamento.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
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
        private errorHandlerService: ErrorHandlerService,
        private messageService: MessageService,
        private confirmation: ConfirmationService
    ) { }

    pesquisar(pagina: number = 0): void {
        this.filtro.pagina = pagina;

        this.lancamentoService.pesquisar(this.filtro)
            .then(resultado => {
                this.lancamentos = resultado.lancamentos;
                this.totalRegistros = resultado.total;
            })
            .catch(erro => this.errorHandlerService.handler(erro));
    }

    aoMudarPagina(event: LazyLoadEvent): void {
        this.loading = true;
        const pagina: number = event.first / event.rows;

        setTimeout(() => {
            this.pesquisar(pagina);
            this.loading = false;
        }, 1000);
    }

    confirmarExclusao(codigo: number): void {
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: () => {
                this.excluir(codigo);
            }
        });
    }

    private excluir(codigo: number): void {
        this.lancamentoService.excluir(codigo)
            .then(() => {
                if (this.grid.first === 0) {
                    this.pesquisar();
                } else {
                    this.grid.reset();
                }

                this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' });
            })
            .catch(erro => this.errorHandlerService.handler(erro));
    }

}
