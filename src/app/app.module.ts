import { PessoaService } from './pessoas/pessoa.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { LancamentoService } from './lancamentos/lancamento.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        ToastModule,

        CoreModule,
        LancamentosModule,
        PessoasModule
    ],
    providers: [
        MessageService,

        LancamentoService,
        PessoaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
