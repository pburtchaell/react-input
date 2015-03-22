import React from 'react';
import { Form, Input, Field, Label } from 'index';

var View = React.createClass({

  handleFormSubmission() {
    this.setState({
      emailError: 'Example email error message',
      nameError: 'Example name error message',
      passwordError: 'Annoying password strength error message'
    });
  },

  getFormStyles() {
    return {

    };
  },

  getInitialState: function () {
    return {
      nameError: '',
      emailError: '',
      passwordError: ''
    };
  },

  render() {
    return (
      <div>
        <Form style={this.getFormStyles()}>
          <Field ref="name" message="Enter your full name">
            <Label>Name</Label>
            <Input required={true} type="text" placeholder="John Smith" />
          </Field>
        </Form>
      </div>
    );
  }

});

React.render(
  <View />,
  document.querySelector('main')
);
