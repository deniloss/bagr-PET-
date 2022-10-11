import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'lorem lorem lorem lored',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'lorem lorem lorem lored',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  text: 'lorem lorem lorem lored',
};
export const WithoutTitleDark = Template.bind({});
WithoutTitleDark.args = {
  text: 'lorem lorem lorem lored',
};
WithoutTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutText = Template.bind({});
WithoutText.args = {
  title: 'Title',
};
export const WithoutTextDark = Template.bind({});
WithoutTextDark.args = {
  title: 'Title',
};
WithoutTextDark.decorators = [ThemeDecorator(Theme.DARK)];
