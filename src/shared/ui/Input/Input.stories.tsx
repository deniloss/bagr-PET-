import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  value: 'Text',
  type: 'text',
  placeholder: 'Введите текст',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  value: 'Text',
  type: 'password',
  placeholder: 'Введите пароль',
};
