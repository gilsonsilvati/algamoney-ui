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
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA4OTE5MjAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJlem9JR3VxUzNwOFdTMEhXNzVqLWVCWnRjZUkiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.2TJNoauO094GOJCkSASOWEXcyzllthHLwGlqzckMeio');

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
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA4OTE5MjAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJlem9JR3VxUzNwOFdTMEhXNzVqLWVCWnRjZUkiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.2TJNoauO094GOJCkSASOWEXcyzllthHLwGlqzckMeio');

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

    excluir(codigo: number): Promise<void> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA4OTE5MjAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJlem9JR3VxUzNwOFdTMEhXNzVqLWVCWnRjZUkiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.2TJNoauO094GOJCkSASOWEXcyzllthHLwGlqzckMeio');

        return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers })
            .toPromise()
            .then();
    }

    mudarStatus(codigo: number, ativo: boolean): Promise<void> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA4OTE5MjAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJlem9JR3VxUzNwOFdTMEhXNzVqLWVCWnRjZUkiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.2TJNoauO094GOJCkSASOWEXcyzllthHLwGlqzckMeio')
            .append('Content-Type', 'application/json');

        return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
            .toPromise()
            .then();
    }

}
