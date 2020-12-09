import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-lancamentos-grid',
    templateUrl: './lancamentos-grid.component.html'
})
export class LancamentosGridComponent {

    @Input() lancamentos: any[] = [];

}
