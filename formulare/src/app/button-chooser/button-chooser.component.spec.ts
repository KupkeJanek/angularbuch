import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ButtonChooserComponent } from './button-chooser.component';

describe('ButtonChooserComponent', () => {
  let component: ButtonChooserComponent;
  let fixture: ComponentFixture<ButtonChooserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
