var React = require('react');

var Form = React.createClass({

  getInitialState: function () {
    return {

    };
  },

  componentDidMount: function () {
    console.log('form props', this.props);
  },

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function () {
    return (
      <div className="form">
        <div className="form-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = Form;
