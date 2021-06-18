import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PanelComponent } from './panel.component';
import { PanelModule } from './panel.module';

export default {
  title: 'PanelComponent',
  component: PanelComponent,
  decorators: [moduleMetadata({
    imports: [
      PanelModule
    ]
  })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PanelComponent> = (args: PanelComponent) => ({
  template: `<ch-panel title="Abschnitt 2">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </ch-panel>`,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello',
};


