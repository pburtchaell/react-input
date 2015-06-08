import React from 'react';

/**
 * @function capitalize
 * @description Captializes the first word in a string.
 * @returns {string}
 */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * @class Label
 * @description A label component.
 */
export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: React.PropTypes.string,
  }

  /**
   * @private
   * @function
   * @description Get the name for the label.
   * @returns {string} The label name.
   */
  get name() {
    return this.props.name.capitalize();
  }

  /**
   * @private
   * @function
   * @description Get the class name for the component.
   * @returns className {string} The class name.
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
   * @returns className {string} The class name.
   */
  get className() {
    if (this.props.className) {
      return this.props.className;
    } else {
      return 'form-group-label';
    }
  }

  render() {
    return (
      <label
        htmlFor={this.context.name}
        className={this.className}
        style={this.style}>
        {this.name}
      </label>
    );
  }
}
