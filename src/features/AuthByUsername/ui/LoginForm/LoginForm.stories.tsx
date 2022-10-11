import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {};
TextInput.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
  },
})];

export const TextInputWithError = Template.bind({});
TextInputWithError.args = {};
TextInputWithError.decorators = [StoreDecorator({
  loginForm: {
    username: 'peers',
    password: '12',
    error: 'uncorrected password or username',
  },
})];

export const TextInputDark = Template.bind({});
TextInputDark.args = {};
TextInputDark.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
  },
})];

TextInputDark.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123',
      error: 'uncorrected password or username',
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const TextInputWithErrorDark = Template.bind({});
TextInputWithError.args = {};
TextInputWithErrorDark.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'peers',
      password: '12',
      error: 'uncorrected password or username',
    },
  }),
  ThemeDecorator(Theme.DARK),
];
