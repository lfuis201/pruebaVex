import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para *ngFor

@Component({
  selector: 'app-select-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent {
  @Input() selectId: string = 'mySelect'; // ID del select
  @Input() label: string = 'Selecciona una opción'; // Texto del label
  @Input() options: Array<{ value: string; label: string }> = []; // Opciones del select
  selectedValue: string = ''; // Valor seleccionado

  // Método para manejar el cambio en el select
  onChange() {
    const selectElement = document.getElementById(this.selectId) as HTMLSelectElement;
    if (selectElement) {
      selectElement.classList.toggle('has-value', selectElement.value !== '');
    }
  }
}
