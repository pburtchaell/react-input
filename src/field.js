import React, { Component, PropTypes } from 'react';
import Label from './label';
import Input from './input';

/**
 * @class Field
 * @description A field in the form.
 */
class Field extends Component {
  render() {
    const { name, style } = this.props;

    return (
      <div className="form-field" style={style}>
        {this.props.label ? (
          <Label
            name={name}
          />
        ) : null}
        {this.props.input ? (
          <Input
            {...this.props}
            name={name}
            onChange={this.props.onChange}
          />
        ) : null}
      </div>
    );
  }
}

Field.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object
}

Field.defaultProps = {
  className: 'form-field', // What is the field className?
  type: 'text', // What type of input field is it?
  placeholder: null, // What is the input field placholder?
  required: true, // Is the input field required?
  disabled: false, // Is the field disabled?
  label: true, // Is there a label for the field?
  input: true, // Is there an input?
  name: null, // What is the name of the field?
  style: null // What is the style of the field?
}

export default Field;
