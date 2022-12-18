import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  CommentForm: {
    isLoading: false,
    error: '',
    text: 'comments',
  },
})];

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [
  StoreDecorator({
    CommentForm: {
      isLoading: false,
      error: '',
      text: 'comments',
    },
  }),
  ThemeDecorator(Theme.DARK)];
