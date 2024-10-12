import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { MegaMenuModule } from 'primeng/megamenu';
import { CarousalModel } from '../../model/mock.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MegaMenuModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: MegaMenuItem[] = [
    {
      label: 'Woman\'s Fashion',
      items: [
        [
          {
            label: 'Clothes',
            items: [
              {
                label: 'Coats'
              },
              {
                label: 'T-Shirts'
              },
              {
                label: 'Shirts'
              },
              {
                label: 'Pants'
              },
            ]
          },
        ],
        [
          {
            label: 'Accesories',
            items: [
              {
                label: 'Glasses'
              },
              {
                label: 'Hats'
              },
              {
                label: 'Necklaces'
              },
              {
                label: 'Piercings'
              },
            ]
          }
        ]
      ],
    },
    {
      label: 'Men\'s Fashion',
      items: [
        [
          {
            label: 'Clothes',
            items: [
              {
                label: 'Coats'
              },
              {
                label: 'T-Shirts'
              },
              {
                label: 'Shirts'
              },
              {
                label: 'Pants'
              },
            ]
          },
        ],
        [
          {
            label: 'Accesories',
            items: [
              {
                label: 'Glasses'
              },
              {
                label: 'Hats'
              },
              {
                label: 'Necklaces'
              },
              {
                label: 'Piercings'
              },
            ]
          }
        ]
      ],
    },
    {
      label: 'Electronics',
    },
    {
      label: 'Home & Lifestyle',
    },
    {
      label: 'Medicine',
    },
    {
      label: 'Sports & Outdoor',
    },
    {
      label: 'Baby\'s & Toys',
    },
    {
      label: 'Groceries & Pets',
    },
    {
      label: 'Health & Beauty',
    },
  ];

  products: CarousalModel[] = [
    {
      id: 0,
      image: 'assets/Frame-560.png'
    }
  ]
}
