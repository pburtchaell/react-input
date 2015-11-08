import React from 'react';

/**
 * @function Input
 * @description An input in a field.
 */
class Input = (props) => {
  return props.type === 'textarea' ? (
    <textarea
      {...props}
      role="textbox"
      onChange={(e) => props.onChange(e.target.value)}
    />
  ) : (
    <input
      {...props}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default Input;
