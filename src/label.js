import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function Label
 * @description A label for fields.
 */
const Label = props => (
  <label
    htmlFor={props.name}
    className="form-field-label"
  >
    {props.name}
  </label>
);

Label.propTypes = {
  name: PropTypes.string.isRequired
};

export default Label;
