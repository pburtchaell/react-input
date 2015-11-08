import React from 'react';

/**
 * @function Label
 * @description A label for fields.
 */
const Label = (props) => {
  return (
    <label
      htmlFor={props.name}
      className={props.className}
      style={props.style}
    >
      {props.name}
    </label>
  );
};

Label.defaultProps = {
  className: 'form-group-label',
  style: null
};

export default Label;
