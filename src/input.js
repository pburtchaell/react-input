import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function Input
 * @description An input in a field.
 */
const Input = (props) => {
  const handleChange = e => props.onChange(e.target.value);

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
            id={props.id}
            name={props.id}
            className="input"
            onChange={handleChange}
          />
          {props.type === 'checkbox' ? (
            <label
              htmlFor={props.id}
              className="input-checkbox-text"
            >
              {props.checkboxText}
            </label>
          ) : null}
          {props.renderInner ? props.renderInner() : null}
        </span>
      )}
      {props.error ? (
        <span className="input-error">
          {props.error}
        </span>
      ) : null}
    </span>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
