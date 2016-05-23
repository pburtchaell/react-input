import React, { PropTypes } from 'react';
import Label from './label';
import Input from './input';

/**
 * @class Field
 * @description A field in the form.
 */
const Field = props => (
  <div className="form-field" style={props.style} id={props.id}>
    {props.renderBefore ? props.renderBefore() : null}
    {props.label ? (
      <Label
        name={props.name}
      />
    ) : null}
    {props.input ? (
      <Input
        {...props}
      />
    ) : null}
    {props.renderAfter ? props.renderAfter() : null}
  </div>
);


Field.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
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
