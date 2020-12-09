import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pessoas-grid',
    templateUrl: './pessoas-grid.component.html'
})
export class PessoasGridComponent {

    @Input() pessoas: any[] = [];

}
