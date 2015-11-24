var React = require('react');
var DocsNav = require('./docsNav');

var Documentation = React.createClass({

  componentDidMount: function() {
    $('.active').removeClass('active');
    $('.documentation').addClass('active');
  },

  render: function() {

    return (
      <div className="documentation">
        <DocsNav />
        <div className="docs-content docs">
          <h1 className="title page-header">What is Bosh?</h1>
          <p>BOSH is a project that unifies release engineering, deployment, and lifecycle management of small and large-scale cloud software. BOSH can provision and deploy software over hundreds of VMs. It also performs monitoring, failure recovery, and software updates with zero-to-minimal downtime.</p>
          <p>While BOSH was developed to deploy Cloud Foundry PaaS, it can also be used to deploy almost any other software (Hadoop, for instance). BOSH is particularly well-suited for large distributed systems. In addition BOSH supports multiple Infrastructure as a Service (IaaS) providers like VMware vSphere, vCloud Director, Amazon Web Services EC2, and OpenStack. There is a Cloud Provider Interface (CPI) that enables users to extend BOSH to support additional IaaS providers such as Google Compute Engine and Apache CloudStack.</p>
        </div>
      </div>
    );
  }
});

module.exports = Documentation;
