import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-message',
    template: `
        <div class="p-message p-message-error" *ngIf="temError()">
            {{ text }}
        </div>
    `,
    styles: [`
        .p-message-error {
            padding: 3px;
        }
    `]
})
export class MessageComponent {

    @Input() control: FormControl;
    @Input() error: string;
    @Input() text: string;

    temError(): boolean {
        return this.control.hasError(this.error) && this.control.dirty;
    }

}
