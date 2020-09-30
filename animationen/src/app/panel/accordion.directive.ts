import {PanelComponent} from "./panel.component";
import {ContentChildren, QueryList, Input, Directive} from "@angular/core";
@Directive({
  selector: 'ch-accordion, [chAccordion]',
  exportAs: 'accordion'
})
export class Accordion {
  @Input() onlyOneOpen;

  @ContentChildren(PanelComponent) panels:QueryList<PanelComponent>;

  ngAfterContentInit() {
    for (const panel of this.panels.toArray()) {
      panel.open = false;
      panel.panelToggled.subscribe(panel => {
        if (panel.open && this.onlyOneOpen) {
          this.closeOthers(panel);
        }
      });
    }
  }

  closeOthers(opened) {
    for (const panel of this.panels.toArray()) {
      if (opened != panel && panel.open) {
        panel.open = false;
      }
    }
  }


  closeAll() {
    console.log(this.panels.toArray())
    for (const panel of this.panels.toArray()) {
      panel.open = false;
    }
  }
}
