import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [],
    template: `
    <div class='modal-background'>
            <div class='modal-content'>
                <p>Searching should be done in English letters only!</p>
               <button (click)="close.emit()">OK</button>
            </div>
        </div>
  `,
    styleUrl: './modal.component.css'
})
export class ModalComponent {

    @Output() close = new EventEmitter();
}
