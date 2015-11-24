var React = require('react');

var Packages = React.createClass({

  render: function() {

    return (
      <div className="container">
        <h3>Package <span>'director'</span></h3>
        <p>Github source: <a href="https://github.com/cloudfoundry/bosh/tree/8002a933/packages/director"><code>8002a933</code></a> or <a href="https://github.com/cloudfoundry/bosh/tree/master/packages/director">master</a> branch</p>
        <h3>Compilation dependencies</h3>
        <p>Packages are compiled and placed onto corresponding instances during the deployment process. Packages will be placed into <code>/var/vcap/packages/</code> directory.</p>
        <ul>
          <li>
            <a href="/packages/libpq?source=github.com/cloudfoundry/bosh&amp;version=229">libpq</a>
          </li>
          <li>
            <a href="/packages/mysql?source=github.com/cloudfoundry/bosh&amp;version=229">mysql</a>
          </li>
          <li>
            <a href="/packages/ruby?source=github.com/cloudfoundry/bosh&amp;version=229">ruby</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Packages;
