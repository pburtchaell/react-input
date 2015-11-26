import React, { Component, PropTypes } from 'react';

/**
 * @function Input
 * @description An input in a field.
 */
class Input extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    return this.props.onChange(e.target.value);
  }

  render() {
    return (
      <span className="form-field-input">
        {this.props.type === 'textarea' ? (
          <textarea
            {...this.props}
            role="textbox"
            className="input"
            onChange={this.handleChange}
          />
        ) : (
          <input
            {...this.props}
            className="input"
            onChange={this.handleChange}
          />
        )}
        {this.props.error ? (
          <span className="input-error">
            {this.props.error}
          </span>
        ) : null}
      </span>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Input;
