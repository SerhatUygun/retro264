import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Listing } from '../core/models/Listing.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AnasayfaComponent implements OnInit {
  listings: Listing[] = [
    { id: 1, title: 'Luxury Villa', price: 1200000, location: 'Istanbul', image: '/assets/images/listing1.jpg', bedrooms: 4, bathrooms: 3, area: 250, description: 'Spacious villa with sea view.' },
    { id: 2, title: 'Modern Apartment', price: 650000, location: 'Ankara', image: '/assets/images/listing2.jpg', bedrooms: 2, bathrooms: 2, area: 120, description: 'Central location, newly built.' }
  ];

  featuredListings: Listing[] = [...this.listings];
  currentSlide = 0;
  searchTerm = '';

  filteredListings = [...this.listings];

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.featuredListings.length;
    }, 5000);
  }

  filterListings() {
    this.filteredListings = this.listings.filter(listing =>
      listing.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}