var React = require('react');

var Explore = React.createClass({

  render: function() {

    return (
      <div className="bg-accent-5 explore txt-c center grid">
        <div className="m-center">
          <h3 className="title type-dark-11 mvn">Ready?</h3>
          <p className="mbxxl type-dark-11 h2">If you never deployed with BOSH or never heard about it this step-by-step guide will bring you up to speed.</p>
          <a className="btn btn-marketing" href="http://mariash.github.io/learn-bosh/">Get Started</a>
        </div>
      </div>
    );
  }
});

module.exports = Explore;
