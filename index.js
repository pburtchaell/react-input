var React = require('react/addons');
var classes = require('react-classes');

var Input = React.createClass({

  mixins: [classes],

  /**
   * @function focus
   * @description Focus on the element.
   */
  focus: function () {
    if (this.isMounted()) {
      this.refs.input.getDOMNode().focus();
    }
  },

  /**
   * @function value
   * @returns {string} The value of the input.
   */
  value: function () {
    return this.state.value;
  },

  /**
   * @function clear
   * @description Clear the value of the element.
   */
  clear: function () {
    this.setState({
      value: ''
    });
  },

  /**
   * @private
   * @function onChange
   * @descriptin When the value of the input changes, update the state.
   */
  _onChange: function (event) {

    // Get the value from the input
    var value = event.target.value;

    // Set the state
    this.setState({
      value: value
    });

    // Run the onChange function if it exists
    if (this.props.onChange) {
      this.props.onChange(event, value);
    }

  },

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    error: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      value: this.props.defaultValue || ''
    }
  },

  getDefaultProps: function () {
    return {
      type: 'text',
      onChange: this._onChange
    }
  },

  render: function () {

    var classes = this.getClass('input-group', {
      'input-group-error': this.props.error || false,
      'input-group-disabled': this.props.disabled || false
    });

    var label; // the form label

    if (this.props.label) {
      label = (
        <label className="input-group-label" for={this.props.name}>{this.props.label}</label>
      );
    }

    /**
     * Create the span element used for containing messages
     * related to the element.
     */
    var span;

    if (this.props.error) {
      span = (
        <span className="input-group-span">{this.props.error}</span>
      );
    } else if (this.props.message) {
      span = (
        <span className="input-group-span">{this.props.message}</span>
      );
    }

    return (
      <div className={classes} ref={this.props.ref}>
        {label}
        <input
          ref="input"
          className="input-group-field"
          type={this.props.type}
          name={this.props.ref}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this._onChange}/>
        {span}
      </div>
    )

  }
});

module.exports = Input;
