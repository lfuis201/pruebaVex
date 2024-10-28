import { Component } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { SelectFormComponent } from '../select-form/select-form.component';
@Component({
  selector: 'app-form-tramo',
  standalone: true,
  imports: [InputFormComponent, SelectFormComponent],
  templateUrl: './form-tramo.component.html',
  styleUrl: './form-tramo.component.css'
})
export class FormTramoComponent {

}
