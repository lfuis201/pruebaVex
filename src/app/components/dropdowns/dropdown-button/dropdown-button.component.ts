import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-button.component.html',
  styleUrl: './dropdown-button.component.css'
})
export class DropdownButtonComponent {
  isOpen = false; // Estado del menú

  toggleMenu() {
    this.isOpen = !this.isOpen; // Alternar el estado del menú
  }

  closeMenu() {
    this.isOpen = false; // Cerrar el menú
  }

  optionSelected(option: string) {
    console.log(`Opción seleccionada: ${option}`);
    this.closeMenu();
  }
}
