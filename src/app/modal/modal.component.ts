import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [],
    template: `
    <div class='modal-background'>
            <div class='modal-content'>
               <p>{{modalText}}</p>
               <button (click)="close.emit()">OK</button>
            </div>
        </div>
  `,
    styleUrl: './modal.component.css'
})
export class ModalComponent {

    @Input() modalText = '';
    @Output() close = new EventEmitter();
}
