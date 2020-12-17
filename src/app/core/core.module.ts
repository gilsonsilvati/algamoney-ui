import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';

registerLocaleData(localePt);

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,

        ToastModule,
        ConfirmDialogModule
    ],
    exports: [
        NavbarComponent,

        ToastModule,
        ConfirmDialogModule
    ],
    providers: [
        MessageService,
        ConfirmationService,

        LancamentoService,
        PessoaService,
        ErrorHandlerService,

        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
})
export class CoreModule { }
