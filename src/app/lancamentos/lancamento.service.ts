import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LancamentoFiltro } from './LancamentoFiltro';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class LancamentoService {

    private lancamentoUrl = 'http://localhost:8080/lancamentos';

    constructor(private http: HttpClient) { }

    pesquisar(filtro: LancamentoFiltro): Promise<any> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA3ODI1OTM2LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJKOEhQSVVKTmpJQnMtQkxwY1hoaWw3OFJJdG8iLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.2oiK_srn4qFLl_4IkrxYnb26_OEcOHk63PMxnZcC6HA');

        let params = new HttpParams();

        if (filtro.descricao) {
            params = params.set('descricao', filtro.descricao);
        }

        if (filtro.dataVencimentoInicio) {
            params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
        }

        if (filtro.dataVencimentoFim) {
            params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
        }

        return this.http.get(`${this.lancamentoUrl}?resumo`, { headers, params })
            .toPromise()
            // tslint:disable-next-line: no-string-literal
            .then(response => response['content']);
    }

}
