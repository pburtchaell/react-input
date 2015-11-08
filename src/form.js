import React, { Component, PropTypes } from 'react';
import Submit from './submit';
import Field from './field';

/**
 * @class Form
 * @description The main public component that holds the
 * fields in a form.
 */
class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  handleChange(name, value) {
    console.log(name, value);

    return this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.fields.map(field => {
          return (
            <Field
              key={Math.random()}
              name={field.name}
              placholder={field.placholder}
              error={field.error}
              onChange={this.handleChange.bind(this, field.name)}
            />
          );
        })}
        <Submit />
      </form>
    );
  }
}

Form.defaultProps = {
  fields: null,
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  onSubmit: (state) => {
    throw new Error('React Input: there is no onSubmit function provided.')
  }
}

export default Form;
