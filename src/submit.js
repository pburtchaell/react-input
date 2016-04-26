import React from 'react';

/**
 * @function Submit
 * @description A submit button for the form component. This component
 * is never really used by the consumer, but rather it is added
 * automatically.
 */
const Submit = (props) => (
  <button
    {...props}
    type="submit"
    children={props.text}
  />
);

Submit.defaultProps = {
  className: 'form-submit-button',
  text: 'Submit'
};

export default Submit;
