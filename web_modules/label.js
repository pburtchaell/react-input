var React = require('react');

var Label = React.createClass({

  componentDidMount: function () {
    console.log('label props', this.props);
  },

  propTypes: {
    children: React.PropTypes.string // should be a string, not an element
  },

  render: function () {
    if (!this.props.children) {
      return <label>{this.props.name}</label>;
    } else {
      return <label>{this.props.children}</label>;
    }
  }

});

module.exports = Label;
