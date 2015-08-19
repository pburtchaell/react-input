import React, { Component, PropTypes } from 'react';

export default class Submit extends Component {
  static defaultProps = {
    className: 'form-submit-button',
    style: null
  }

  static propTypes = {
    children: PropTypes.string
  }

  render() {
    return (
      <button
        type="submit"
        className={this.props.className}
        style={this.props.style}
      >
        {this.props.children}
      </button>
    );
  }
}
