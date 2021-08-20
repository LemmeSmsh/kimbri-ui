import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tree from '..';

export default {
  title: 'Tree/TreeView',
  component: Tree,
} as ComponentMeta<typeof Tree>;

const Template: ComponentStory<typeof Tree> = (args) => <Tree {...args} />;

export const TreeView = Template.bind({});
TreeView.args = {
  header: 'This is tree component with normalized input',
  meta: {},
  data: [],
}