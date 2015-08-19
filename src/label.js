import React, { Component, PropTypes } from 'react';

/**
 * @function capitalize
 * @description Captializes the first word in a string.
 * @returns {string}
 */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default class Label extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    className: 'form-group-label'
  }

  render() {
    return (
      <label
        htmlFor={this.context.name}
        className={this.props.className}
        style={this.props.style}>
        {this.props.name.capitalize()}
      </label>
    );
  }
}
