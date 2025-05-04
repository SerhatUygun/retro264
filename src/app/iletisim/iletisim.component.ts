import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.scss']
})
export class IletisimComponent {
  contact = { name: '', email: '', message: '' };
  isSubmitted = false;
  formErrors: { name?: string; email?: string; message?: string } = {};

  validateForm(): boolean {
    this.formErrors = {};
    let isValid = true;

    if (!this.contact.name.trim()) {
      this.formErrors.name = 'Ad alanı zorunludur.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.contact.email.trim()) {
      this.formErrors.email = 'E-posta alanı zorunludur.';
      isValid = false;
    } else if (!emailPattern.test(this.contact.email.trim())) {
      this.formErrors.email = 'Geçerli bir e-posta adresi giriniz.';
      isValid = false;
    }

    if (!this.contact.message.trim()) {
      this.formErrors.message = 'Mesaj alanı zorunludur.';
      isValid = false;
    }

    return isValid;
  }

  submitForm() {
    if (this.validateForm()) {
      console.log('Form submitted:', this.contact);
      this.isSubmitted = true;
      this.contact = { name: '', email: '', message: '' };
      setTimeout(() => {
        this.isSubmitted = false;
      }, 3000);
    }
  }
}