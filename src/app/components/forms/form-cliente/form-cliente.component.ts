import { Component } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { SelectFormComponent } from '../select-form/select-form.component';
import { SimpleDialogComponent } from '../../dialogs/simple-dialog/simple-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [InputFormComponent, SimpleDialogComponent,SelectFormComponent,CommonModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css'
})
export class FormClienteComponent {
  selectOptions = [
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
    { value: '3', label: 'Opción 3' }
  ];


  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
