import React, { Component, PropTypes } from 'react';

/**
 * @function Input
 * @description An input in a field.
 */
const Input = (props) => {
  const handleChange = (e) => props.onChange(e.target.value);

  return (
    <span className="form-field-input">
      {props.type === 'textarea' ? (
        <textarea
          {...props}
          role="textbox"
          className="input"
          onChange={handleChange}
        />
      ) : (
        <span>
          <input
            {...props}
            className="input"
            onChange={handleChange}
          />
          {props.renderInner ? props.renderInner() : null}
        </span>
      )}
      {props.type === 'textbox' ? (
        <span>{props.checkboxText}</span>
      ) : null}
      {props.error ? (
        <span className="input-error">
          {props.error}
        </span>
      ) : null}
    </span>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Input;
