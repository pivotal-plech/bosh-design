var React = require('react');
var InlineList = require('pui-react-lists').InlineList;
var ListItem = require('pui-react-lists').ListItem;

var logo = <svg x="0px" y="0px" width="70px" viewBox="0 0 53 53" className="logoMark"><rect width="53" height="53" /><polygon points="26.5,33.3 26.5,33.4 26.5,33.4 26.5,33.4 26.5,33.3 21.6,30.5 14.2,34.9 26.5,42.1 38.8,34.9 31.4,30.5   "/><polygon points="26.5,25.3 26.5,25.3 26.5,25.3 38.8,18.1 26.5,10.9 14.2,18.1 26.3,25.2  "/><polygon points="26.5,26.7 26.5,26.7 26.5,26.7 26.5,26.8 26.5,26.7 18.6,22.1 14.2,24.7 24,30.4 26.5,31.9 26.5,31.9 26.5,31.9 38.8,24.7 34.4,22.2   "/></svg>;

var Header = React.createClass({


  render: function() {
    return (
      <div className="header">
        <div className="logo">
          <a href="/">
            {logo}
            <p className="logo-type">
              Bosh
            </p>
          </a>
        </div>
        <InlineList className="nav" spacing="xl">
          <ListItem><a href="/" className="learn">Learn</a></ListItem>
          <ListItem><a href="#/resources" className="resources">Resources</a></ListItem>
          <ListItem><a href="#/documentation" className="documentation">Documentation</a></ListItem>
          <ListItem><a href="#/community" className="community">Community</a></ListItem>
        </InlineList>
      </div>
    );
  }
});

module.exports = Header;
