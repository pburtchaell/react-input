import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function Submit
 * @description A submit button for the form component. This component
 * is never really used by the consumer, but rather it is added
 * automatically.
 */
const Submit = ({ text, ...props }) => (
  <button
    {...props}
    type="submit"
  >
    {text}
  </button>
);

Submit.defaultProps = {
  className: 'form-submit-button',
  text: 'Submit'
};

Submit.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Submit;
