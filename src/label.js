import React from 'react';

/**
 * @function Label
 * @description A label for fields.
 */
const Label = (props) => {
  return (
    <label
      htmlFor={props.name}
      className="form-field-label"
    >
      {props.name}
    </label>
  );
};

export default Label;
