import { PessoaService } from './../../pessoas/pessoa.service';
import { Component, OnInit } from '@angular/core';

import { CategoriaService } from './../../categorias/categoria.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
    selector: 'app-lancamento-cadastro',
    templateUrl: './lancamento-cadastro.component.html',
    styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

    tipos = [
        { label: 'Receita', value: 'RECEITA' },
        { label: 'Despesa', value: 'DESPESA' }
    ];

    categorias = [];

    pessoas = [];

    constructor(
        private categoriaService: CategoriaService,
        private pessoaService: PessoaService,
        private errorHandler: ErrorHandlerService
    ) { }

    ngOnInit(): void {
        this.carregarCategorias();
        this.carregarPessoas();
    }

    carregarCategorias(): void {
        this.categoriaService.listarTodas()
            .then(categorias => {
                this.categorias = categorias.map(categoria => ({ label: categoria.nome, value: categoria.codigo }));
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    carregarPessoas(): void {
        this.pessoaService.listar()
            .then(resultado => {
                this.pessoas = resultado.pessoas.map(pessoa => ({ label: pessoa.nome, value: pessoa.codigo }));
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

}
