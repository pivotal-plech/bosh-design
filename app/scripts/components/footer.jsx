var React = require('react');
var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;
var UnorderedList = require('pui-react-lists').UnorderedList;
var ListItem = require('pui-react-lists').ListItem;

var Footer = React.createClass({

  render: function() {

    return (
      <div className="footer pvxxxl">
        <div className="container">
          <Row>
            <Col md={8}>
              <nav>
                <h3 className="h1">About</h3>
                <UnorderedList unstyled>
                  <ListItem><a href="#">About</a></ListItem>
                  <ListItem><a href="#">Blog</a></ListItem>
                  <ListItem><a href="#">Contact</a></ListItem>
                </UnorderedList>
              </nav>
            </Col>
            <Col md={8}>
              <nav>
                <h3 className="h1">Resources</h3>
                <UnorderedList unstyled>
                  <ListItem><a href="#">Releases</a></ListItem>
                  <ListItem><a href="#">Stemcells</a></ListItem>
                  <ListItem><a href="#">Documentation</a></ListItem>
                  <ListItem><a href="#">Getting Started</a></ListItem>
                </UnorderedList>
              </nav>
            </Col>
            <Col md={8}>
              <nav>
                <h3 className="h1">Connect</h3>
                <UnorderedList unstyled>
                  <ListItem><a href="#">bosh on freenode</a></ListItem>
                  <ListItem><a href="#">Pivotal Tracker Project</a></ListItem>
                  <ListItem><a href="#">cf-bosh mailing list</a></ListItem>
                </UnorderedList>
              </nav>
            </Col>
        </Row>
      </div>
    </div>
    );
  }
});

module.exports = Footer;
