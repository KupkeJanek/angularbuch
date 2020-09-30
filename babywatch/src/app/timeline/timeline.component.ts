import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {Component, OnInit} from '@angular/core';
import {BabywatchService} from '../babywatch.service';
import {AddEventComponent} from '../add-event/add-event.component';

@Component({
  selector: 'bw-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  constructor(
    private babyService: BabywatchService,
    private bottomSheet: MatBottomSheet
  ) {
  }

  get timeline() {
    return this.babyService.timeline;
  }

  get babyName() {
    return this.babyService.babyName || 'Das Baby';
  }

  ngOnInit() {
  }

  addEvent() {
    this.bottomSheet.open(AddEventComponent);
  }
}
