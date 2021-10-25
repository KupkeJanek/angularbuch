import {Meta, Story} from '@storybook/angular/types-6-0';
import {ColoredCircleComponent} from './colored-circle.component';

export default {
  title: 'Components/Colored Circle',
  component: ColoredCircleComponent,
  args: {
    radius: 60
  },
  parameters: {
    docs: {
      description: {
        component: 'Die `ColoredCircleComponent` zeichnet sehr schöne Kreise.'
      },
    }
  },
  argTypes: {
    fill: {
      name: 'Fill Color (fill)',
      description: 'The color that the circle is filled with ',
      control: 'color'
    },
    imageUrl: {
      options: [
        'http://lorempixel.com/200/200/cats',
        'http://lorempixel.com/200/200/food',
        'http://lorempixel.com/200/200/abstract',
      ],
      control: 'select'
    }
  }
} as Meta;

const Template: Story<ColoredCircleComponent> = (args: ColoredCircleComponent) => ({
  props: args
});

export const Simple = Template.bind({});
// Simple.storyName = 'With default values';

export const Filled = Template.bind({});
Filled.args = {
  fill: 'red'
};

export const WithImage = Template.bind({});
WithImage.args = {
  imageUrl: 'http://lorempixel.com/200/200/cats',
};

WithImage.parameters = {
  docs: {
    description: {
      story: 'Möchten Sie Ihrem Kreis in Hintergrund-Bild geben, so können Sie dies über das Input-Binding `imageUrl` erreichen.'
    },
  },
};
