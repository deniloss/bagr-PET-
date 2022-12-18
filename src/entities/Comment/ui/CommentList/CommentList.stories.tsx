import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        id: '1',
        username: 'denilos',
      },
      id: '1',
      text: 'text text',
    },
    {
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        id: '2',
        username: 'Yan',
      },
      id: '1',
      text: 'like this',
    },
  ],
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {

  comments: [
    {
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        id: '1',
        username: 'denilos',
      },
      id: '1',
      text: 'text text',
    },
    {
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        id: '2',
        username: 'Yan',
      },
      id: '1',
      text: 'like this',
    },
  ],
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
  comments: [
    {
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        id: '1',
        username: 'denilos',
      },
      id: '1',
      text: 'text text',
    },
    {
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        id: '2',
        username: 'Yan',
      },
      id: '1',
      text: 'like this',
    },
  ],
};

export const emptyList = Template.bind({});
emptyList.args = {
  comments: [],
};
