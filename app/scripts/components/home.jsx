var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;

var DefaultButton = require('pui-react-buttons').DefaultButton;
var PrimaryButton = require('pui-react-buttons').PrimaryButton;
var MarketingH1 = require('pui-react-typography').MarketingH1;
var TileLayout = require('pui-react-tile-layout');
var ClickableAltPanel = require('pui-react-panels').ClickableAltPanel;
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;
var InverseDivider = require('pui-react-dividers').InverseDivider;
var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;
var Media = require('pui-react-media').Media;
var Flag = require('pui-react-media').Flag;

var FeaturedReleases = require('./featuredReleases.jsx');
var Principles = require('./principles.jsx');
var How = require('./how.jsx');
var Splash = require('./splash.jsx');
var Example = require('./example.jsx');
var Explore = require('./explore.jsx');

var Home = React.createClass({

  mixins: [Navigation],

  componentDidMount: function() {
    $('.active').removeClass('active');
    $('.learn').addClass('active');
  },

  render: function() {

    return (
      <div className="home">
        <Splash />
        <Example />
        <Principles />
        <Explore />
      </div>
    );
  }
});

module.exports = Home;
