import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { PessoaFiltro } from './pessoas-pesquisa/pessoa-filtro.model';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    private pessoasUrl = 'http://localhost:8080/pessoas';

    constructor(private http: HttpClient) { }

    pesquisar(filtro: PessoaFiltro): Promise<any> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA3OTk2OTA1LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJ3dHZXTjVaQ1lXTHlMeUROSTdkeVhYZWpTT28iLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.lVgsGSzmWXsHrt49CVY3YEPkfZSuRHto036OFk80VXs');

        let params = new HttpParams()
            .set('page', filtro.pagina.toString())
            .set('size', filtro.itensPorPagina.toString());

        if (filtro.nome) {
            params = params.set('nome', filtro.nome);
        }

        return this.http.get(`${this.pessoasUrl}`, { headers, params })
            .toPromise()
            .then(response => {
                const pessoas = response['content'];

                const resultado = {
                    pessoas,
                    total: response['totalElements']
                };

                return resultado;
            });
    }

    listar(filtro: PessoaFiltro): Promise<any> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA3OTk2OTA1LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJ3dHZXTjVaQ1lXTHlMeUROSTdkeVhYZWpTT28iLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.lVgsGSzmWXsHrt49CVY3YEPkfZSuRHto036OFk80VXs');

        const params = new HttpParams()
            .set('page', filtro.pagina.toString())
            .set('size', filtro.itensPorPagina.toString());

        return this.http.get(`${this.pessoasUrl}/all`, { headers, params })
            .toPromise()
            .then(response => {
                const pessoas = response['content'];

                const resultado = {
                    pessoas,
                    total: response['totalElements']
                };

                return resultado;
            });
    }

}
