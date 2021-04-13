import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StylingDemoComponent } from './styling-demo.component';

describe('StylingDemoComponent', () => {
  let component: StylingDemoComponent;
  let fixture: ComponentFixture<StylingDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
