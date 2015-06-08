import 'array.from';
import React from 'react';
import assign from 'object-assign';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.cloneChild = this.cloneChild.bind(this);
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    message: React.PropTypes.string,
  }

  /**
   * @function cloneChild
   * @description Creates a clone of the child/children
   * component(s) of the field with the correct props.
   */
  cloneChild = (child) => {
    const newProps = assign({
      ...child.props
    },{
      name: this.props.name
    })
    return React.cloneElement(
      child,
      newProps
    );
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
      return 'input-group';
    }
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
          className={this.className}
          style={this.style}>
          {this.cloneChild(child)}
        </div>
      );
    } else {
      return (
        <div
          ref="field"
          className={this.className}
          style={this.style}>
          {React.Children.map(this.props.children, this.cloneChild)}
        </div>
      );
    }
  }
}
