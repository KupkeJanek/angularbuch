import {Meta, Story} from '@storybook/angular/types-6-0';
import {PanelComponent} from './panel.component';
import {PanelModule} from './panel.module';
import {moduleMetadata} from '@storybook/angular';

export default {
  title: 'Components/Panel Component',
  component: PanelComponent,
  decorators: [moduleMetadata({
    imports: [
      PanelModule
    ]
  })],
} as Meta;

export const Simple: Story<PanelComponent> =  (args: PanelComponent) => ({
  template: `<ch-panel title="Abschnitt 2">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </ch-panel>`,
  props: {...args},
});

export const MobileView: Story<PanelComponent> =  (args: PanelComponent) => ({
  template: `<ch-panel title="Abschnitt 2">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </ch-panel>`,
  props: {...args},
});

MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
};


export const Accordion =  (args: PanelComponent) => ({
  template: `<div chAccoridon #firstAccordion="accordion" [onlyOneOpen]="true">
      <ch-panel title="Abschnitt 1">...</ch-panel>
      <ch-panel title="Abschnitt 2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ...</ch-panel>
      <ch-panel title="Abschnitt 3">...</ch-panel>
    </div>`,
  props: {...args},
});




