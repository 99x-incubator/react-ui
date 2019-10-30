import React, {Component} from 'react';
import Button from './Components/Button/button';

export default class extends Component {
  render() {
    return <div>
      <h2>Welcome to React UI components</h2>

      <h4>Basic components</h4>
      <label>Button: </label><Button text="Submit"></Button>
    </div>
  }
}
