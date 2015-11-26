import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from 'form';

class ExampleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPending: false,
      isRejected: false,
      isFulfilled: false,
      fields: [
        {
          name: 'Email',
          type: 'email',
          error: false,
          required: false,
          placeholder: 'Enter an email'
        },
        {
          name: 'Phone',
          type: 'tel',
          error: false,
          label: false,
          placeholder: 'Enter a phone',
          defaultValue: '504-123-4567',
          onChange: (value) => {}
        }
      ]
    };
  }

  render() {
    return (
      <Form
        isPending={this.state.isPending}
        isFulfilled={this.state.isFulfilled}
        isRejected={this.state.isRejected}
        fields={this.state.fields}
        ref={node => this.form = node}
        onChange={(state) => {}}
        onSubmit={(state) => {}}
      />
    );
  }
}

render(<ExampleForm />, document.querySelector('#mount'));
