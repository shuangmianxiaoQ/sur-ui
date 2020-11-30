import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Type = Template.bind({});
Type.args = {
  btnType: 'primary',
  size: undefined,
  href: undefined,
  disabled: false,
  children: 'Primary Button',
};

export const Size = Template.bind({});
Size.args = {
  btnType: undefined,
  size: 'lg',
  href: undefined,
  disabled: false,
  children: 'Large Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  btnType: undefined,
  size: undefined,
  href: undefined,
  disabled: true,
  children: 'Disabled Button',
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: 'danger',
  size: undefined,
  href: undefined,
  disabled: false,
  children: 'Danger Button',
};

export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
  size: undefined,
  href: 'https://baidu.com',
  disabled: false,
  children: 'Link Button',
  target: '_blank'
};
