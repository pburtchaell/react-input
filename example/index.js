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
          key: 'email',
          type: 'email',
          placeholder: 'Enter an email'
        },
        {
          name: 'Phone 2',
          key: 'phone2',
          type: 'tel',
          error: false,
          label: false,
          placeholder: 'Enter a phone',
          defaultValue: '504-123-4567',
          onChange: (value) => {}
        },
        {
          name: 'Phone',
          key: 'phone',
          type: 'checkbox',
          error: false,
          label: false,
          placeholder: '',
          defaultValue: '',
          checkboxText: 'Hi',
          onChange: () => {}
        }
      ]
    };
  }

  render() {
    return (
      <Form
        fields={this.state.fields}
        labels={false}
        isPending={this.state.isPending}
        isFulfilled={this.state.isFulfilled}
        isRejected={this.state.isRejected}
        ref={node => this.form = node}
        onChange={(state) => {}}
        onSubmit={(state) => console.log(state)}
      />
    );
  }
}

render(<ExampleForm />, document.querySelector('#mount'));
