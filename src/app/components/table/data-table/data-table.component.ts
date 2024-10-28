import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from '../../forms/input-form/input-form.component';
import { SelectFormComponent } from '../../forms/select-form/select-form.component';
import { DropdownButtonComponent } from '../../dropdowns/dropdown-button/dropdown-button.component';
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [InputFormComponent, SelectFormComponent, DropdownButtonComponent,CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'], // Cambié styleUrl a styleUrls
})
export class DataTableComponent implements OnInit {
  @Input() datos: any[] = [];

 // Datos por defecto
 defaultDatos = [
  {
    tramo: '1',
    descripcion: 'Descripción del tramo 1',
    costo: 100,
    tm: 'TM1',
    precioVenta: 150,
    descAbs: 10,
    totalVenta: 140,
    renta: '10%',
  },
  {
    tramo: '2',
    descripcion: 'Descripción del tramo 2',
    costo: 200,
    tm: 'TM2',
    precioVenta: 250,
    descAbs: 20,
    totalVenta: 230,
    renta: '12%',
  },
  {
    tramo: '3',
    descripcion: 'Descripción del tramo 3',
    costo: 150,
    tm: 'TM3',
    precioVenta: 180,
    descAbs: 15,
    totalVenta: 165,
    renta: '11%',
  },
  {
    tramo: '4',
    descripcion: 'Descripción del tramo 4',
    costo: 300,
    tm: 'TM4',
    precioVenta: 350,
    descAbs: 30,
    totalVenta: 320,
    renta: '14%',
  },
  {
    tramo: '5',
    descripcion: 'Descripción del tramo 5',
    costo: 400,
    tm: 'TM5',
    precioVenta: 450,
    descAbs: 40,
    totalVenta: 410,
    renta: '15%',
  },
  {
    tramo: '6',
    descripcion: 'Descripción del tramo 6',
    costo: 500,
    tm: 'TM6',
    precioVenta: 550,
    descAbs: 50,
    totalVenta: 500,
    renta: '16%',
  },
  {
    tramo: '7',
    descripcion: 'Descripción del tramo 7',
    costo: 600,
    tm: 'TM7',
    precioVenta: 650,
    descAbs: 60,
    totalVenta: 590,
    renta: '17%',
  },
  {
    tramo: '8',
    descripcion: 'Descripción del tramo 8',
    costo: 700,
    tm: 'TM8',
    precioVenta: 750,
    descAbs: 70,
    totalVenta: 680,
    renta: '18%',
  },
  {
    tramo: '9',
    descripcion: 'Descripción del tramo 9',
    costo: 800,
    tm: 'TM9',
    precioVenta: 850,
    descAbs: 80,
    totalVenta: 770,
    renta: '19%',
  },
  {
    tramo: '10',
    descripcion: 'Descripción del tramo 10',
    costo: 900,
    tm: 'TM10',
    precioVenta: 950,
    descAbs: 90,
    totalVenta: 860,
    renta: '20%',
  },
];


  // Al inicializar, se asignan los datos por defecto si no se reciben datos desde el padre.
  ngOnInit() {
    if (this.datos.length === 0) {
      this.datos = this.defaultDatos;
    }
  }
}
