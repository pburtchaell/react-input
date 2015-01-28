var React = require('react/addons');

var Input = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  _onChange: function (event) {
    this.getValueLink(this.props).requestChange(event.target.value);
  },

  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    valueLink: React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      requestChange: React.PropTypes.func.isRequired
    })
  },

  getDefaultProps: function () {
    return {
      label: '',
      type: 'text',
      value: '',
      onChange: function () {
        return;
      },
      valueLink: null
    }
  },

  getValueLink: function(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  },

  render: function () {

    var Label; // the form label

    if (this.props.label) {
      Label = (
        <label className="input-group-label" for={this.props.name}>{this.props.label}</label>
      );
    }

    return (
      <div className="input-group">
        <Label />
        <input
          type={this.props.type}
          className="input-group-field"
          name={this.props.name}
          label={this.props.label}
          placeholder={this.props.placeholder}
          value={this.getValueLink(this.props).value}
          onChange={this._onChange}/>
      </div>
    )

  }
});

module.exports = Input;
