import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    private categoriasUrl = 'http://localhost:8080/categorias';

    constructor(private http: HttpClient) { }

    listarTodas(): Promise<any> {
        const headers = new HttpHeaders()
            .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndoaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjA5MjgzMDU3LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiJ3M2V6anpMMThYWFNaWDBrN1dTQktJNzRYSzAiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.sx2i4DuQAviJZl7kk5YrB2xWHGm9ejNYnMSMgZaQS9c');

        return this.http.get(this.categoriasUrl, { headers })
            .toPromise();
    }

}
