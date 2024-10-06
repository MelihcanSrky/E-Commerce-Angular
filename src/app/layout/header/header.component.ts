import { Component } from '@angular/core';
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

  items: MenuItem[] = [
    {
      label: 'Home'
    },
    {
      label: 'Contact'
    },
    {
      label: 'About'
    },
    {
      label: 'Sign Up'
    },
  ];

}
