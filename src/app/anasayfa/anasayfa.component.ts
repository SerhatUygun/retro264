import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Listing } from '../core/models/Listing.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AnasayfaComponent {
  listings: Listing[] = [
    { id: 1, title: 'Luxury Villa', price: 1200000, location: 'Istanbul', image: '/assets/images/listing1.jpg', bedrooms: 4, bathrooms: 3, area: 250, description: 'Spacious villa with sea view.' },
    { id: 2, title: 'Modern Apartment', price: 650000, location: 'Ankara', image: '/assets/images/listing2.jpg', bedrooms: 2, bathrooms: 2, area: 120, description: 'Central location, newly built.' }
  ];
}