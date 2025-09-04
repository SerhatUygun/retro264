import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Listing } from '../core/models/Listing.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ilanlar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('400ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class IlanlarComponent {
  listings: Listing[] = [
    { id: 1, title: 'Luxury Villa', price: 1200000, location: 'Istanbul', image: '/assets/images/listing1.jpg', bedrooms: 4, bathrooms: 3, area: 250, description: 'Spacious villa with sea view.' },
    { id: 2, title: 'Modern Apartment', price: 650000, location: 'Ankara', image: '/assets/images/listing2.jpg', bedrooms: 2, bathrooms: 2, area: 120, description: 'Central location, newly built.' }
  ];

  filteredListings = [...this.listings];
  searchTerm = '';
  minPrice = 0;
  maxPrice = Infinity;
  minBedrooms = 0;
  currentPage = 1;
  itemsPerPage = 6;

  filterListings() {
    this.filteredListings = this.listings.filter(listing =>
      (listing.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
       listing.location.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      listing.price >= this.minPrice &&
      (this.maxPrice === Infinity || listing.price <= this.maxPrice) &&
      listing.bedrooms >= this.minBedrooms
    );
    this.currentPage = 1;
  }

  get paginatedListings() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredListings.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredListings.length / this.itemsPerPage);
  }
}