import { AppModule } from '../../app.module';
import { TimePickerComponent } from '../time-picker.component';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

export const TimePickerDecorators = moduleMetadata({
  imports: [
    AppModule
  ]
});

export const TimePickerArgs = {
  time: { control: 'text', defaultValue: '12:45:50' },
}
/*
export default {
  title: 'Time Picker',
  component: TimePickerComponent,
  decorators: [TimePickerDecorators],
  argTypes: TimePickerArgs,
} as Meta;
*/

const Template: Story<TimePickerComponent> = (args: TimePickerComponent) => ({
  props: args,
});

export const Simple = Template.bind({});
