import React from 'react';
import { validateProps } from '../../Utils/validator';
import * as Constants from '../../Constants/propsWhiteList'; 

export default class Button extends React.Component {
    render(){
      const combinedAttributes = [...Constants.BUTTON_ATTRIBUTES, ...Constants.GLOBAL_ATTRIBUTES, ...Constants.FORM_EVENT_ATTRIBUTES, ...Constants.KEYBOARD_EVENT_ATTRIBUTES, ...Constants.MOUSE_EVENT_ATTRIBUTES, ...Constants.MISC_EVENT_ATTRIBUTES];
      var childProps = validateProps(this.props, combinedAttributes);

      return (
        <button
          {...childProps}>{childProps.text}</button>
      );
    }
}

