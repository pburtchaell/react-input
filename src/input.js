import React, { Component, PropTypes } from 'react';

/**
 * @class Input
 * @description Orginally, this input component was "controlled" as suggested in
 * the React documentation. However, it is best to have "stateless"
 * components and to instead hold the state of your application in singleton
 * stores. The stores should then pass the state of the application to
 * components via props. It is a cleaner way to handle your state.
 * @link facebook.github.io/react/docs/forms.html#controlled-components
 * @link facebook.github.io/react/docs/forms.html#uncontrolled-components
 */
export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    className: 'input-group-input',
    style: null
  }

  /**
   * @function value
   * @returns {string|int} value The value of the input.
   */
  value = () => this.refs.input.getDOMNode().value;

  /**
   * @function value
   * @description Change the value of the input directly.
   * @param {string|int} newValue The new value of the input.
   */
  setValue = newValue => {
    const input = this.refs.input;
    input.getDOMNode().value = newValue;
  }

  /**
   * @function focus
   * @description Focus on the element.
   */
  focus = () => this.refs.input.getDOMNode().focus();

  /**
   * @function clear
   * @description Clear the value of the element.
   */
  clear = () => {
    this.refs.inpu.getDOMNode().value = ''
  };

  /**
   * @private
   * @function handleChange
   * @description Run the onChange function if it exists
   */
  handleChange(event) {
    event.preventDefault();
    const value = this.value;

    if (this.props.onChange) {
      this.props.onChange(event, value);
    }
  }

  /**
   * @private
   * @function render
   * @description Render the input.
   */
  render() {
    if (this.props.type === 'textarea') {
      return (
        <textarea
          {...this.props}
          ref="input"
          role="textbox"
          className={this.props.className}
          onChange={::this.handleChange}
        />
      )
    } else {
      return (
        <input
          {...this.props}
          ref="input"
          id={this.context.name}
          name={this.context.name}
          className={this.props.className}
          style={this.props.style}
          onChange={::this.handleChange}
        />
      );
    }
  }
}
