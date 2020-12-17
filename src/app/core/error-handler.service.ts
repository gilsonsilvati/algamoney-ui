import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(private messageService: MessageService) { }

    handler(httpErrorResponse: HttpErrorResponse): void {
        let msg: string;

        if (typeof httpErrorResponse === 'string') {
            msg = httpErrorResponse;
        } else {
            msg = 'Erro ao processar serviço remoto. Tente novamente.';
            console.error('Ocorreu um erro', httpErrorResponse);
        }

        this.messageService.add({ severity: 'error', detail: msg });
    }

}
