import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: ThemeButton.CLEAR,
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const LightTheme = Template.bind({});
LightTheme.args = {};
