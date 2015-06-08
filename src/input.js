import React from 'react';

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
export default class Input extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.clear = this.clear.bind(this);
    this.focus = this.focus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    onChange: React.PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
  }

  /**
   * @function value
   * @returns {string|int} value The value of the input.
   */
  get value() {
    const input = this.refs.input;
    return input.getDOMNode().value;
  }

  /**
   * @function value
   * @description Change the value of the input directly.
   * @param {string|int} newValue The new value of the input.
   */
  set value(newValue) {
    const input = this.refs.input;
    input.getDOMNode().value = newValue;
  }

  /**
   * @function focus
   * @description Focus on the element.
   */
  focus() {
    const input = this.refs.input;
    input.getDOMNode().focus();
  }

  /**
   * @function clear
   * @description Clear the value of the element.
   */
  clear() {
    const input = this.refs.input;
    input.getDOMNode().value = '';
  }

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
   * @function
   * @description If the prop exists, then get the style for the component.
   * @returns {object} The style.
   */
  get style() {
    if (this.props.style) {
      return this.props.style;
    }
  }

  /**
   * @private
   * @function
   * @description Get the class name for the component.
   * @returns {string} The class name.
   */
  get className() {
    if (this.props.className) {
      return this.props.className;
    } else {
      return 'input-group-input';
    }
  }

  /**
   * @private
   * @function
   * @returns {string} The input ref.
   */
  get refName() {
    return this.context.name + '-input'
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
          className={this.className}
          onChange={this.handleChange}
        />
      )
    } else {
      return (
        <input
          {...this.props}
          ref="input"
          id={this.context.name}
          name={this.context.name}
          className={this.className}
          style={this.style}
          onChange={this.handleChange}
        />
      );
    }
  }
}
