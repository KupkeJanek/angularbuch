import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild
} from '@angular/core';

@Directive({
  selector: 'ch-panel-header'
})
export class PanelHeaderDirective {
}

@Component({
  selector: 'ch-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css']
})
export class PanelComponent {

  open = true;
  @Input() title = '';
  @Output() panelToggled = new EventEmitter<PanelComponent>();
  @ContentChild(PanelHeaderDirective) panelHeader?: PanelHeaderDirective;

  togglePanel() {
    this.open = !this.open;
    this.panelToggled.emit(this);
  }

  hasHeader() {
    return this.panelHeader !== undefined;
  }
}

