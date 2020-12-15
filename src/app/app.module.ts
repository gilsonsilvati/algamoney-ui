import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        ToastModule,
        ConfirmDialogModule,

        CoreModule,
        LancamentosModule,
        PessoasModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },

        MessageService,
        ConfirmationService,

        LancamentoService,
        PessoaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
