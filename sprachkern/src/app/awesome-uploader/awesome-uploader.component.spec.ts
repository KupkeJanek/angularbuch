import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AwesomeUploaderComponent } from './awesome-uploader.component';

describe('AwesomeUploaderComponent', () => {
  let component: AwesomeUploaderComponent;
  let fixture: ComponentFixture<AwesomeUploaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
