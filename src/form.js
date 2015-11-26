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

    // Initialize with an empty state to prevent errors
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * If a field as a default value, then immediately update
   * the state with the value of that field.
   */
  componentWillMount() {
    this.props.fields
      .filter(field => field.defaultValue)
      .forEach(field => {
        return this.setState({
          [field.name.toLowerCase()]: field.defaultValue
        })
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  handleChange(name, value) {
    return this.setState({
      [name]: value
    }, () => {
      if (this.props.onChange) this.props.onChange(this.state);
    });
  }

  getClassName(props) {
    let className = props.className || 'form-container';

    if (props.isPending) {
      className += ' is-pending';
    } else if (props.isFulfilled) {
      className += ' is-fulfilled';
    } else if (props.isRejected) {
      className += ' is-rejected';
    } else if (props.error) {
      className += ' is-rejected';
    }

    return className;
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={this.getClassName(this.props)}
      >
        {this.props.fields.map(field => {
          const caseSafeFieldName = field.name.toLowerCase();

          return (
            <Field
              key={`${Math.random()}-${caseSafeFieldName}`}
              {...field}
              value={this.state[caseSafeFieldName]}
              onChange={value => {
                this.handleChange(caseSafeFieldName, value);

                if (field.onChange) field.onChange(value);
              }}
            />
          );
        })}
        <Submit />
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  fields: null,
  isPending: null,
  isRejected: null,
  isFulfilled: null
}

export default Form;
