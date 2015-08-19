import 'array.from';
import React, { Children, PropTypes } from 'react';
import assign from 'object-assign';

export default class Field extends React.Component {
  static defaultProps = {
    className: 'input-group',
    style: null
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string,
  }

  /**
   * @function cloneChild
   * @description Creates a clone of the child/children
   * component(s) of the field with the correct props.
   */
  cloneChild = (child) => {
    return React.cloneElement(
      child,
      assign({
        ...child.props
      },{
        name: this.props.name
      })
    );
  }

  /**
   * @private
   * @function render
   * @description Render the wrapper and clones of the child/children
   * component(s).
   * @fires React#Children.map
   * @fires context#cloneChild
   */
  render() {
    if (!Array.isArray(this.props.children)) {
      const child = this.props.children;
      return (
        <div
          ref="field"
          className={this.props.className}
          style={this.props.style}>
          {this.cloneChild(child)}
        </div>
      );
    } else {
      return (
        <div
          ref="field"
          className={this.props.className}
          style={this.props.style}>
          {Children.map(this.props.children, this.cloneChild)}
        </div>
      );
    }
  }
}
