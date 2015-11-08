import React from 'react';

/**
 * @function Submit
 * @description A submit button for the form component. This component
 * is never really used by the consumer, but rather it is added
 * automatically.
 */
const Submit = (props) => {
  return (
    <button
      {...props}
      type="submit"
      children="Submit"
    ></button>
  );
};

Submit.defaultProps = {
  className: 'form-submit-button'
};

export default Submit;
