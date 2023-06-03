import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  public sidebarItems = [
    {label: 'Listado', icon: 'label', url: './list' },
    {label: 'Añadir', icon: 'add', url: './new-hero' },
    {label: 'Buscar', icon: 'search', url: './search' },
  ]

  get user():User | undefined{
    return this.authService.currentUser;
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
