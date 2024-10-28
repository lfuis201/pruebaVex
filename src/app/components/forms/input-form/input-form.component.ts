import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule], // Añadir FormsModule aquí
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  @Input() inputType: string = 'text';  // Tipo de input, por defecto 'text'
  @Input() inputId: string = 'input';    // ID del input
  @Input() label: string = 'Label';       // Etiqueta del input
  inputValue: string = '';                // Valor del input
}
