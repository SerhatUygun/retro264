import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.scss']
})
export class IletisimComponent {
  contact = { name: '', email: '', message: '' };

  submitForm() {
    console.log('Form submitted:', this.contact);
  }
}