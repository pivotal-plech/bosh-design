var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var Home = require('./components/home');
var Resources = require('./components/resources');
var Documentation = require('./components/documentation');
var Resource = require('./components/resource');
var Releases = require('./components/releases');
var Stemcell = require('./components/stemcell');
var Job = require('./components/jobs');
var Package = require('./components/packages');
var Community = require('./components/community');

var routes = (
  <Route name="layout" path="/" handler={Layout}>
    <DefaultRoute handler={Home} />
    <Route handler={Resources} name="/resources" />
    <Route handler={Resource} name="/resources/resource" />
    <Route handler={Job} name="/resources/resource/job" />
    <Route handler={Package} name="/resources/resource/package" />
    <Route handler={Stemcell} name="/stemcells/stemcell" />
    <Route handler={Documentation} name="/documentation" />
    <Route handler={Releases} name="/resources/release/all-versions" />
    <Route handler={Community} name="/community" />
  </Route>
);

exports.start = function() {

  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
}
