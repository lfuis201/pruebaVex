import { Component } from '@angular/core';
import { FormTramoComponent } from '../../components/forms/form-tramo/form-tramo.component';
import { DataTableComponent } from '../../components/table/data-table/data-table.component';
@Component({
  selector: 'app-tramos-view',
  standalone: true,
  imports: [FormTramoComponent,DataTableComponent],
  templateUrl: './tramos-view.component.html',
  styleUrl: './tramos-view.component.css'
})
export class TramosViewComponent {

}
