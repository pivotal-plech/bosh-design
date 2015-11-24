var React = require('react');

var Community = React.createClass({

  componentDidMount: function() {
    $('.active').removeClass('active');
    $('.community').addClass('active');
  },

  render: function() {

    return (
      <div>
        <p>Your content</p>
      </div>
    );
  }
});

module.exports = Community;
