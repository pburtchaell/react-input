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
    this.updateDefaults = this.updateDefaults.bind(this);
  }

  /**
   * If a field as a default value, then immediately update
   * the state with the value of that field.
   */
  componentWillMount() {
    this.updateDefaults(this.props.fields);
  }

  componentWillReceiveProps(nextProps) {
    this.updateDefaults(nextProps.fields);
  }

  updateDefaults(fields) {
    fields
      .filter(field => field.defaultValue)
      .forEach(field => {
        return this.setState({
          [field.key]: field.defaultValue
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
        {this.props.error ? (
          <div className="form-container-error">
            {this.props.error}
          </div>
        ) : null}
        {this.props.fields.map(field => (
          <Field
            id={field.key}
            key={field.key}
            label={this.props.labels}
            {...field}
            value={this.state[field.key]}
            onChange={value => {
              this.handleChange(field.key, value);

              if (field.onChange) field.onChange(value);
            }}
          />
        ))}
        {typeof this.props.onSubmit === 'function' ? (
          <Submit
            text={this.props.submitButtonText}
            className={this.props.submitButtonClassName}
          />
        ) : null}
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  submitButtonText: PropTypes.string
};

Form.defaultProps = {
  fields: null,
  isFulfilled: null,
  isPending: null,
  isRejected: null,
  labels: true
};

export default Form;
