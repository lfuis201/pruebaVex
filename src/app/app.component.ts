import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SimpleDialogComponent } from './components/dialogs/simple-dialog/simple-dialog.component';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,UserNavbarComponent,SidebarComponent,CommonModule,MainLayoutComponent,NavBarComponent,SimpleDialogComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
