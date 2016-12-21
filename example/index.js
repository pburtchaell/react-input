import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from 'react-input';

const INITIAL_STATE = {
  name: null,
  email: null
};

class ExampleForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <div>
        <div>Email: {this.state.email}</div>
        <div>Name: {this.state.name}</div>
        <hr />
        <Form
          fields={[
            {
              name: 'Email',
              key: 'email',
              type: 'email',
              placeholder: 'Enter an email'
            },
            {
              name: 'Name',
              key: 'name',
              type: 'text',
              placeholder: 'Enter a name'
            }
          ]}
          labels={false}
          onSubmit={({ name, email }) => this.setState({
            name,
            email
          })}
        />
      </div>
    );
  }
}

render(<ExampleForm />, document.querySelector('#mount'));
