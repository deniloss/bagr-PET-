import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: true,
  },
})];

export const LightTheme = Template.bind({});
LightTheme.args = {};
LightTheme.decorators = [StoreDecorator({
  profile: {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: true,
  },
})];
