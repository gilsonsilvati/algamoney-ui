import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LancamentoFiltro } from './LancamentoFiltro';

@Injectable({
    providedIn: 'root'
})
export class LancamentoService {

    private lancamentoUrl = 'http://localhost:8080/lancamentos';

    constructor(private http: HttpClient) { }

    pesquisar(filtro: LancamentoFiltro): Promise<any> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA3ODIwNzY1LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJnQ2J2amdJZ3VtMDgydUg5WXZVRFVxa2ViUFkiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.B956-ffB65uoaeFDtd-by0HVKzq0nrJphVM1WxvIJbM');

        let params = new HttpParams();

        if (filtro.descricao) {
            params = params.set('descricao', filtro.descricao);
        }

        return this.http.get(`${this.lancamentoUrl}?resumo`, { headers, params })
            .toPromise()
            // tslint:disable-next-line: no-string-literal
            .then(response => response['content']);
    }

}
