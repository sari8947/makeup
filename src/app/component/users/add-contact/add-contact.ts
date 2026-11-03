import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface NewContact {
  name: string;
  email: string;
  phone: string;
  vip: boolean;
}

@Component({
  imports: [FormsModule],
  selector: 'app-add-contact',
  styleUrl: './add-contact.css',
  templateUrl: './add-contact.html',
})
export class AddContact {
  @Output() readonly saved = new EventEmitter<NewContact>();
  @Output() readonly cancelled = new EventEmitter<void>();

  contact: NewContact = {
    name: '',
    email: '',
    phone: '',
    vip: false,
  };

  save(): void {
    this.saved.emit({ ...this.contact });
  }
}
