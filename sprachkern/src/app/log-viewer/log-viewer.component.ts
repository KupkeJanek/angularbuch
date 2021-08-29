import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'ch-log-viewer',
  templateUrl: 'log-viewer.component.html',
  styleUrls: ['log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {
  @Input('logs') logs: string[] = [];
  autoRefresh = false;
  constructor(private changeDetector: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.changeDetector.detach();
    setInterval(() => {
      if (this.autoRefresh === true) {
        this.render();
      }
    }, 2000);
  }
  render() {
    this.changeDetector.reattach();
    this.changeDetector.detectChanges();
    this.changeDetector.detach();
  }
  refresh() {
    this.render();
  }
  start() {
    this.autoRefresh = true;
  }
  pause() {
    this.autoRefresh = false;
  }
}
