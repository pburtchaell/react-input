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
            error: false,
            placeholder: 'Enter an email'
          },
          {
            name: 'Phone',
            error: false,
            placholder: 'Enter a phone'
          }
        ]}
        onSubmit={(state) => console.log(state)}
      />
    );
  }
}

render(<ExampleForm />, document.querySelector('#mount'));
