import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from 'form';

class ExampleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPending: false,
      isRejected: false,
      isFulfilled: false
    };
  }

  render() {
    return (
      <Form
        isPending={this.state.isPending}
        isFulfilled={this.state.isFulfilled}
        isRejected={this.state.isRejected}
        fields={[
          {
            name: 'Email',
            type: 'email',
            error: false,
            required: false,
            placeholder: 'Enter an email'
          },
          {
            name: 'Phone',
            error: false,
            placeholder: 'Enter a phone',
            defaultValue: '504-123-4567',
            onChange: (value) => {
              console.log(value);
            }
          }
        ]}
        ref={node => {

          // Use callback refs because ref='string' will get deprecated
          this.form = node;
        }}
        onChange={(state) => console.log(state)}
        onSubmit={(state) => console.log(state)}
      />
    );
  }
}

render(<ExampleForm />, document.querySelector('#mount'));
