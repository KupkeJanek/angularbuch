import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  templateUrl: './button-chooser-bridge.component.html',
  styleUrls: ['./button-chooser-bridge.component.css']
})
export class ButtonChooserBridgeComponent implements OnChanges {

    @Input() choices;
    @Input() choicesString = '';
    @Input() value: string = null;

    @Output() valueChanged = new EventEmitter();

    ngOnChanges(changes: SimpleChanges) {
        if (changes.choicesString) {
            this.choices = changes.choicesString.currentValue.split(',');
        }
    }
}
