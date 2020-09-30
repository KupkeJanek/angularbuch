import {Component, OnInit} from '@angular/core';
import {
  BabywatchService,
  timelineEventTypes,
  TimelineEventType
} from '../babywatch.service';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'bw-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  constructor(
    private babyService: BabywatchService,
    private bottomSheetRef: MatBottomSheetRef<AddEventComponent>
  ) {
  }

  get babyName() {
    return this.babyService.babyName || 'Das Baby';
  }

  get eventTypes() {
    return timelineEventTypes;
  }

  ngOnInit() {
  }

  addEvent(data: { eventType: TimelineEventType; comment: string }) {
    this.babyService.addTimelineEvent({
      date: new Date(),
      eventType: data.eventType,
      comment: data.comment
    });
    this.bottomSheetRef.dismiss();
  }
}
