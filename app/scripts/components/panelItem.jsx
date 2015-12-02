var React = require('react');

var PanelItem = React.createClass({

  render: function() {

    return (
      <div className="panel-item">
        <p className="panel-item-title">{this.props.title}</p>
        <p className="panel-item-info">{this.props.info}</p>
      </div>
    );
  }
});

module.exports = PanelItem;
