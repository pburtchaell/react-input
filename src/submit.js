import React from 'react';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: React.PropTypes.string
  }

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
      return 'form-submit-button';
    }
  }

  render() {
    return (
      <button
        ref="submit"
        type="submit"
        className={this.className}
        style={this.style}>{this.props.children}</button>
    );
  }
}
