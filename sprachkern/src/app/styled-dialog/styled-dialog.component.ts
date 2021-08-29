import {Component, Input, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'ch-styled-dialog',
  templateUrl: 'styled-dialog.component.html',
  styleUrls: ['styled-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StyledDialogComponent {
  @Input() title?: string;
}

