import { Component, OnInit } from '@angular/core';

import { LancamnetoService } from './../lancamneto.service';

@Component({
    selector: 'app-lancamentos-pesquisa',
    templateUrl: './lancamentos-pesquisa.component.html'
})
export class LancamentosPesquisaComponent implements OnInit {

    lancamentos: any[] = [];

    constructor(private lancamnetoService: LancamnetoService) { }

    ngOnInit(): void {
        this.pesquisar();
    }

    pesquisar(): void {
        this.lancamnetoService.pesquisar()
            .then(lancamentos => this.lancamentos = lancamentos);
    }

}
