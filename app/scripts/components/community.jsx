var React = require('react');

var UnorderedList = require('pui-react-lists').UnorderedList;
var ListItem = require('pui-react-lists').ListItem;

var Community = React.createClass({

  componentDidMount: function() {
    $('.active').removeClass('active');
    $('.community').addClass('active');
  },

  render: function() {

    return (
      <div className="community pbxxxl">
        <div className="container">
          <h1 className="title">Community</h1>
          <hr />
          <p className="h3">We would love to hear from you, how you are using Bosh, and what we can do to make it better.</p>
          <UnorderedList unstyled spacing="xl">
            <ListItem>
              <span className="em-high h3">IRC: </span>
              <span className="h3">#bosh on freenode</span>
            </ListItem>
            <ListItem>
              <span className="em-high h3">Mailing List: </span>
              <span className="h3">#bosh on freenode</span>
            </ListItem>
            <ListItem>
              <span className="em-high h3">Pivotal Tracker: </span>
              <span className="h3">#bosh on freenode</span>
            </ListItem>

          </UnorderedList>
          <hr />
        </div>
      </div>
    );
  }
});

module.exports = Community;
