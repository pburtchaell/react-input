var React = require('react');

var Input = React.createClass({

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
   * @function handleChange
   * @descriptin When the value of the input changes, update the state.
   */
  handleChange: function (event) {

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
      onChange: this.handleChange
    }
  },

  componentDidMount: function () {
    console.log('input props', this.props);
  },

  render: function () {
    return (
      <input
        ref="input"
        type={this.props.type}
        name={this.props.ref}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange} />
    );
  }
});

module.exports = Input;
