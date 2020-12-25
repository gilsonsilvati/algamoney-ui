import { Component, ViewChild } from '@angular/core';

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { PessoaFiltro } from './pessoa-filtro.model';
import { PessoaService } from './../pessoa.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
    selector: 'app-pessoas-pesquisa',
    templateUrl: './pessoas-pesquisa.component.html'
})
export class PessoasPesquisaComponent {

    filtro: PessoaFiltro = new PessoaFiltro();
    pessoas: any[] = [];
    totalRegistros = 0;
    loading: boolean;

    @ViewChild('tabela') grid: Table;

    constructor(
        private pessoaService: PessoaService,
        private errorHandlerService: ErrorHandlerService,
        private messageService: MessageService,
        private confirmation: ConfirmationService
    ) { }

    listar(pagina: number = 0): void {
        this.filtro.pagina = pagina;

        this.pessoaService.listar(this.filtro)
            .then(resultado => {
                this.pessoas = resultado.pessoas;
                this.totalRegistros = resultado.total;
            })
            .catch(erro => this.errorHandlerService.handle(erro));
    }

    pesquisar(pagina: number = 0): void {
        this.filtro.pagina = pagina;

        if (!this.filtro.nome) {
            this.listar(this.filtro.pagina);
        }

        this.pessoaService.pesquisar(this.filtro)
            .then(resultado => {
                this.pessoas = resultado.pessoas;
                this.totalRegistros = resultado.total;
            })
            .catch(erro => this.errorHandlerService.handle(erro));
    }

    aoMudarPagina(event: LazyLoadEvent): void {
        this.loading = true;
        const pagina: number = event.first / event.rows;

        setTimeout(() => {
            console.log(this.filtro.nome);
            if (this.filtro.nome) {
                this.pesquisar(pagina);
            } else {
                this.listar(pagina);
            }

            this.loading = false;
        }, 1000);
    }

    alternarStatus(pessoa: any): void {
        const novoStatus = !pessoa.ativo;

        this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
            .then(() => {
                const acao = novoStatus ? 'ativada' : 'desativada';

                pessoa.ativo = novoStatus;
                this.messageService.add({ severity: 'success', detail: `Pessoa ${acao} com sucesso!` });
            })
            .catch(erro => this.errorHandlerService.handle(erro));
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
        this.pessoaService.excluir(codigo)
            .then(() => {
                if (this.grid.first === 0) {
                    this.pesquisar();
                } else {
                    this.grid.reset();
                }

                this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' });
            })
            .catch(erro => this.errorHandlerService.handle(erro));
    }

}
