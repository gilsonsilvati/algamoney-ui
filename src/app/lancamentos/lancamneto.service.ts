import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LancamnetoService {

    private lancamentoUrl = 'http://localhost:8080/lancamentos';

    constructor(private http: HttpClient) { }

    pesquisar(): Promise<any> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA3ODA2ODg0LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJZNWFqZ0FxOE1NQ2l0VmJoNFRJbFRFOHk3NlUiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.oDr9Qv1ikmM4cd94Z1rLAzsZ8wVs5V1rawhTjjKaRDg');

        return this.http.get(`${this.lancamentoUrl}?resumo`, { headers })
            .toPromise()
            // tslint:disable-next-line: no-string-literal
            .then(response => response['content']);
    }

}
