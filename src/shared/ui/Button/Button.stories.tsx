import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: ButtonSize.M,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: ButtonSize.L,
  square: true,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
  square: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Text Text',
  theme: ThemeButton.OUTLINE,
  rounded: true,
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  children: 'Text Text',
  theme: ThemeButton.OUTLINE_RED,
};
