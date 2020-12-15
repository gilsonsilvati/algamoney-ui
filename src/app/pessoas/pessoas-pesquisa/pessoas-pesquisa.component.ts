import { Component } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

import { PessoaFiltro } from './pessoa-filtro.model';
import { PessoaService } from './../pessoa.service';

@Component({
    selector: 'app-pessoas-pesquisa',
    templateUrl: './pessoas-pesquisa.component.html'
})
export class PessoasPesquisaComponent {

    filtro: PessoaFiltro = new PessoaFiltro();
    pessoas: any[] = [];
    totalRegistros = 0;
    loading: boolean;

    constructor(private pessoaService: PessoaService) { }

    listar(pagina: number = 0): void {
        this.filtro.pagina = pagina;

        this.pessoaService.listar(this.filtro)
            .then(resultado => {
                this.pessoas = resultado.pessoas;
                this.totalRegistros = resultado.total;
            });
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
            });
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

}
