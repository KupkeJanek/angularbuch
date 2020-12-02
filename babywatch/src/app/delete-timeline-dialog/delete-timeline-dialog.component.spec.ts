import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {DeleteTimelineDialogComponent} from './delete-timeline-dialog.component';

describe('DeleteTimelineDialogComponent', () => {
  let component: DeleteTimelineDialogComponent;
  let fixture: ComponentFixture<DeleteTimelineDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTimelineDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTimelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
