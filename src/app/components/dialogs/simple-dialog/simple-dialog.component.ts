import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-dialog',
  standalone: true,
  imports: [],
  templateUrl: './simple-dialog.component.html',
  styleUrl: './simple-dialog.component.css'
})
export class SimpleDialogComponent {
  @Output() closeModalEvent = new EventEmitter<void>(); // Emite un evento para cerrar el modal

  closeModal() {
    this.closeModalEvent.emit(); // Emite el evento al hacer clic en cerrar
  }
}