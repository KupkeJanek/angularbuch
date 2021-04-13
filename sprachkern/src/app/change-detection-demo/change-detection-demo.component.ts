import {Component, Input, Output, EventEmitter, OnChanges, AfterViewChecked, SimpleChanges} from '@angular/core';

class Contact {
  constructor(
    public name: string,
    public address: string) {
  }
}

@Component({
  selector: 'ch-contact-entry',
  template: `
  <div class='contact-entry' (click)='selectEntry()'>
    <b>Name:</b> {{contact.name}} <br>
    <b>Anschrift:</b> {{contact.address}}<br>
  </div>
  `,
  styleUrls: ['change-detection-demo.component.css'],
})
export class ContactEntryComponent implements OnChanges, AfterViewChecked {
  @Input() contact: Contact;
  @Output('onSelect') selectEmitter = new EventEmitter();
  selectEntry() {
    this.selectEmitter.emit(this.contact);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('Contact changed', changes['contact'].currentValue);
  }
  checkCount = 0;
  ngAfterViewChecked() {
    console.log(`Contact ${this.contact.name} checked ${this.checkCount++} times`);
  }
}


@Component({
  selector: 'ch-contact-list',
  template: `
     <ch-contact-entry *ngFor='let contact of contacts'
                   [contact]='contact'
                   (onSelect)='contactSelected(contact)'>
     </ch-contact-entry>
  `,
  styleUrls: ['change-detection-demo.component.css'],
})
export class ContactListComponent {

  @Input() contacts: Contact[];
  @Output('onSelect') selectEmitter = new EventEmitter();

  contactSelected(selected) {
    this.selectEmitter.emit(selected);
  }
}

@Component({
  selector: 'ch-change-detection-demo',
  templateUrl: 'change-detection-demo.component.html',
  styleUrls: ['change-detection-demo.component.css'],
})
export class ChangeDetectionMainComponent {

  contacts = [
    new Contact('John Doe', '123 Main Street, Anytown'),
    new Contact('Richard Roe', '456 Fifth Avenue, Otherville'),
  ];

  contactName: string;
  contactAddress: string;

  selectedContact: Contact;

  constructor() {}

  contactSelected(selected: Contact) {
    this.selectedContact = selected;
    this.contactName = selected.name;
    this.contactAddress = selected.address;
  }

  editContact(name: string, address: string) {
    if (this.selectedContact) {
      this.selectedContact.name = this.contactName;
      this.selectedContact.address = this.contactAddress;
    }
   // this.resetFormFields();
    this.selectedContact = null;
    console.log('Contact successfully saved');
  }
  createContact() {
    const contact = new Contact(this.contactName, this.contactAddress);
    this.contacts.push(contact);
    this.resetFormFields();
  }

  resetFormFields() {
    this.contactName = '';
    this.contactAddress = '';
  }
}
