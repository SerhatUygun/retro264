import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../core/models/Listing.model';

@Component({
  selector: 'app-ilandetay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ilandetay.component.html',
  styleUrls: ['./ilandetay.component.scss']
})
export class IlandetayComponent implements OnInit {
  listing: Listing | undefined;
  listings: Listing[] = [
    { id: 1, title: 'Luxury Villa', price: 1200000, location: 'Istanbul', image: '/assets/images/listing1.jpg', bedrooms: 4, bathrooms: 3, area: 250, description: 'Spacious villa with sea view.' },
    { id: 2, title: 'Modern Apartment', price: 650000, location: 'Ankara', image: '/assets/images/listing2.jpg', bedrooms: 2, bathrooms: 2, area: 120, description: 'Central location, newly built.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listing = this.listings.find(l => l.id === id);
  }
}