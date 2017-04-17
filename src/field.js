import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';
import Input from './input';

/**
 * @class Field
 * @description A field in the form.
 */
const Field = props => (
  <div
    className={`${props.customClassName} field-${props.type}`}
    style={props.style}
    id={props.id}
  >
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
  customClassName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  input: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  placeholder: PropTypes.string,
  renderAfter: PropTypes.func,
  renderBefore: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string
};

Field.defaultProps = {
  customClassName: 'form-field', // What is the field className?
  input: true, // Is there an input?
  label: true, // Is there a label for the field?
  required: true, // Is the input field required?
  type: 'text' // What type of input field is it?
};

export default Field;
