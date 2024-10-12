import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  items: MenuItem[] = [
    {
      label: 'Home',
      command: () => {
        this.router.navigate([''])
      }
    },
    {
      label: 'Contact'
    },
    {
      label: 'About'
    },
    {
      label: 'Sign Up',
      command: () => {
        this.router.navigate(['/login'])
      }
    },
  ];

}
