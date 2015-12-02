var React = require('react');

var Splash = React.createClass({

  render: function() {

    return (
      <div className="splash grid center txt-c">
        <div className="grid-item" style={{maxWidth: "1600px", margin: "0 auto"}}>
          <h3 className="type-dark-4 mvn value-prop">Manage your data center at scale.</h3>
          <p className="mbxxl type-dark-6 h2 mtn">Provision and deploy from day one. Monitor, scale, and update on day two.</p>
          <a className="btn btn-marketing get-started" href="http://mariash.github.io/learn-bosh/">Get Started</a>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
