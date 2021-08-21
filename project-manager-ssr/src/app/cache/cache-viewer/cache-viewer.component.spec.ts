import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheViewerComponent } from './cache-viewer.component';

describe('CacheViewerComponent', () => {
  let component: CacheViewerComponent;
  let fixture: ComponentFixture<CacheViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
