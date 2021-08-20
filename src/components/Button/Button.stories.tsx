import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: {
      description: 'Button title'
    },
    onClick: {
      description: 'Event for triggering when button is clicked',
      defaultValue: () => null
    },
    disabled: {
      description: 'Disable click event triggering',
      defaultValue: false
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled button',
  disabled: true
};