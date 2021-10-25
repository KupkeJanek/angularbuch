import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges,
  AfterViewChecked, OnInit
} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

class Contact {
  constructor(public name: string,
              public address: string) {
  }
}

@Component({
  selector: 'ch-contact-entry-optimized',
  template: `
      <div class='contact-entry' (click)='selectEntry()'>
          <b>Name:</b> {{contact?.name}} <br>
          <b>Anschrift:</b> {{contact?.address}}<br>
      </div>
  `,
  styleUrls: ['change-detection-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEntryOptimizedComponent implements OnChanges, AfterViewChecked {
  @Input() contact?: Contact;
  @Output('onSelect') selectEmitter = new EventEmitter();
  checkCount = 0;

  selectEntry() {
    this.selectEmitter.emit(this.contact);
  }

  ngOnChanges(changes: any) {
    console.log('Contact changed', changes.contact.currentValue);
  }

  ngAfterViewChecked() {
    console.log(`Contact ${this.contact?.name} checked ${this.checkCount++} times`);
  }
}

@Component({
  selector: 'ch-contact-counter',
  template: '<div>Anzahl an Kontakten: {{count}}</div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCounterComponent implements OnInit {
  count = 0;
  @Input() contacts?: Observable<Contact[]>;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.contacts?.subscribe((contacts) => {
      this.count = contacts.length;
      this.changeDetector.markForCheck();
    });
  }
}

@Component({
  selector: 'ch-contact-list-optimized',
  template: `
      <ch-contact-entry-optimized *ngFor='let contact of contacts'
                                  [contact]='contact'
                                  (onSelect)='contactSelected(contact)'>
      </ch-contact-entry-optimized>
  `,
  styleUrls: ['change-detection-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListOptimizedComponent {

  @Input() contacts: Contact[] = [];
  @Output('onSelect') selectEmitter = new EventEmitter();

  contactSelected(selected: Contact) {
    this.selectEmitter.emit(selected);
  }
}

@Component({
  selector: 'ch-change-detection-demo-optimized',
  templateUrl: 'change-detection-demo-optimized.component.html',
  styleUrls: ['change-detection-demo.component.css'],
})
export class ChangeDetectionMainOptimizedComponent implements OnInit {

  contacts = [
    new Contact('John Doe', '123 Main Street, Anytown'),
    new Contact('Richard Roe', '456 Fifth Avenue, Otherville'),
  ];

  contactName = '';
  contactAddress = '';

  selectedContact?: Contact;
  contactsObservable = new ReplaySubject<Contact[]>();
  logs: string[] = [];

  ngOnInit() {
    let counter = 0;
    setInterval(() => {
      const newEntry = `${new Date()}: Ich bin ein Logeintrag ${counter++}`;
      this.logs = [newEntry, ...this.logs].slice(0, 5000);
    }, 50);
    this.contactsObservable.next(this.contacts);
  }

  contactSelected(selected: Contact) {
    console.log('Contact selected', selected);
    this.selectedContact = selected;
    this.contactName = selected.name;
    this.contactAddress = selected.address;
  }

  updateSelectedContact() {
    if (this.selectedContact) {
      this.contacts = this.contacts.map((entry) => {
        if (entry !== this.selectedContact) {
          return entry;
        }
        return new Contact(this.contactName, this.contactAddress);
      });
    }
    console.log('Contact sucessfully saved');
    this.contactsObservable.next(this.contacts);
  }

  createContact() {
    const newContact = new Contact(this.contactName, this.contactAddress);
    this.contacts = [...this.contacts, newContact];
    this.contactsObservable.next(this.contacts);
  }

  resetFormFields() {
    this.contactName = '';
    this.contactAddress = '';
  }
}
