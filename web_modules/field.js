var React = require('react');
var objectAssign = require('object-assign');

var Field = React.createClass({

  getStyles: function () {

    var styles = {};

    styles.default = {
      margin: '1rem'
    };

    styles.error = {};

    styles.disabled = {};

    if (this.props.error) {
      return objectAssign(styles.default, styles.error);
    } else if (this.props.disabled) {
      return objectAssign(styles.default, styles.disabled);
    }

    return styles.default;

  },

  propTypes: {
    error: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },

  componentWillMount: function () {
    console.log('field props', this.props);
  },

  render: function () {
    return (
      <div className="form-field" style={this.getStyles()}>
        <div className="form-field-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = Field;
