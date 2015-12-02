var React = require('react');

var Example = React.createClass({

  render: function() {

    return (
      <div className="bg-dark-1 center grid panel-3 example">
        <div className="console">
          <pre className="terminal">
          </pre>
        </div>
      </div>
    );
  }
});

module.exports = Example;
