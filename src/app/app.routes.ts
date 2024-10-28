import { Routes } from '@angular/router';
import { FormClienteComponent } from './components/forms/form-cliente/form-cliente.component';
import { TramosViewComponent } from './views/tramos-view/tramos-view.component';
export const routes: Routes = [
    { path: 'clientes', component: FormClienteComponent },
    { path: 'tramos', component: TramosViewComponent },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },

];
