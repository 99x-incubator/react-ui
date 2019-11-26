import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../src/Components/input';

export default {
  title: 'Input',
};

export const text = () => <Input onClick={action('clicked')} type = "text" placeholder = "Enter text"/>;

export const password = () => <Input onClick={action('clicked')} type = "password" placeholder = "Password field"/>;
