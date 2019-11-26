import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Components/button';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')} text="Hello Button"></Button>;

export const emoji = () => (
  <Button onClick={action('clicked')} 
  text = {<span role="img" aria-label="so cool"> 😀 😎 👍 💯 </span>}>
  </Button>
);
