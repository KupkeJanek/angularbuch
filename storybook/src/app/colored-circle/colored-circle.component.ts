import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


export interface Position {
  x: number;
  y: number;
}
@Component({
  selector: 'ch-colored-circle',
  templateUrl: './colored-circle.component.html',
  styleUrls: ['./colored-circle.component.css']
})
export class ColoredCircleComponent implements OnInit {
  @Input() radius = 50;
  @Input() color = 'black';
  @Input() fill = '';
  @Input() imageUrl = '';
  @Output() clicked = new EventEmitter<Position>();

  ngOnInit(): void {
  }

  getBackgroundStyles() {
    const result: any = {}
    if (this.imageUrl) {
      result['background-image'] = 'url(' + this.imageUrl + ')';
    }
    if (this.fill) {
      result['background-color'] = this.fill;
    }
    return result;
  }

  onClick(event: Event) {
    this.clicked.emit({
      x: (event as any).x,
      y: (event as any).y
    });
  }

}
