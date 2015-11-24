var React = require('react');

var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;
var SimpleTabs = require('pui-react-tabs').SimpleTabs;
var Tab = require('pui-react-tabs').Tab;

var Resource = React.createClass({

  render: function() {

    return (
      <div className="docs">
        <div className="release-header bg-neutral-11">
          <div className="container">
            <Row>
              <Col md={12}>
                <p className="em-alt type-sm type-dark-6 mvn lh-1">Release</p>
                <h3 className="h1 type-dark-1 mvn lh-1">
                  cf-release <span className="type-dark-7">/</span> <span className="type-dark-1 em-default">'225'</span>
                </h3>
                <p className="type-sm mtl mbn"><a href="https://github.com/cloudfoundry/cf-release/tree/24c131a5/"><code>24c131a5</code></a> <span className="type-dark-5">or</span> <a href="https://github.com/cloudfoundry/cf-release/tree/master/">master</a> <span className="type-dark-5">branch</span></p>
              </Col>
              <Col md={12} className="txt-r">
                <p className="type-sm mvn"><a href="#/resources/release/all-versions">View All Release Versions</a></p>
              </Col>
            </Row>
          </div>

          <SimpleTabs defaultActiveKey={1} className="mtxxl">
            <Tab eventKey={1} title="Release Details" className="bg-neutral-11">
              <div className="container">
              <div className="row">
                <div className="col-md-16">
                  <h3 className="page-header h1">Notes</h3>
                  <div className="release-notes prxxxl">
                    <p>The cf-release v225 was released on November 16, 2015.</p>
                    <p><strong>Contents:</strong> * <a href="#cc-and-service-broker-apis" rel="nofollow">CC and Service Broker APIs</a> * <a href="#runtime" rel="nofollow">Runtime</a> * <a href="#buildpacks-and-stacks" rel="nofollow">Buildpacks and Stacks</a> * <a href="#identity" rel="nofollow">Identity</a> * <a href="#routing" rel="nofollow">Routing</a> * <a href="#loggregator" rel="nofollow">Loggregator</a> * <a href="#internal-components" rel="nofollow">Internal Components</a> * <a href="#job-spec-changes" rel="nofollow">Job Spec Changes</a> * <a href="#recommended-bosh-release-and-stemcell-versions" rel="nofollow">Recommended BOSH Release and Stemcell Versions</a> * <a href="#recommended-diego-version" rel="nofollow">Recommended Diego Version</a> * <a href="#recommended-garden-linux-version" rel="nofollow">Recommended Garden Linux Version</a></p>
                    <h2>CC and Service Broker APIs</h2>
                    <p><strong>CC API Version: <a href="http://apidocs.cloudfoundry.org/225" rel="nofollow">2.43.0</a></strong></p>
                    <p><strong>Service Broker API Version: <a href="http://docs.cloudfoundry.org/services/api.html" rel="nofollow">2.7</a></strong></p>
                    <h4><a href="https://github.com/cloudfoundry/cloud_controller_ng/tree/268803d80175b133481fcab368197c9deb11a422" rel="nofollow">Cloud Controller</a></h4>
                    <ul>
                      <li>[Experimental] Work continues on /v3 and Application Process Types <a href="https://www.pivotaltracker.com/epic/show/1334418" rel="nofollow">details</a>
                      </li>
                      <li>[Experimental] Work continues on Private Brokers <a href="https://www.pivotaltracker.com/epic/show/1958398" rel="nofollow">details</a>
                      </li>
                      <li>[Experimental] Work continues on TCP Routing <a href="https://www.pivotaltracker.com/epic/show/2025856" rel="nofollow">details</a>
                      </li>
                      <li>HM9000 HTTP client now uses default SSL cert store <a href="https://www.pivotaltracker.com/story/show/104351954" rel="nofollow">details</a>
                      </li>
                      <li>Fixed bug introduced in cf-release v223 where CC did not immediately stop Diego apps <a href="https://www.pivotaltracker.com/story/show/107962562" rel="nofollow">details</a>
                      </li>
                    </ul>
                    <h2>Runtime</h2>
                    <h4><a href="https://github.com/cloudfoundry/dea_ng/commit/d710ce11a539293e5cd78231f5722514288530e8" rel="nofollow">DEA</a></h4>
                    <ul>
                      <li>Enable staging and running bandwidth configuration. <a href="https://www.pivotaltracker.com/story/show/107156188" rel="nofollow">details</a>
                      </li>
                    </ul>
                    <h4><a href="https://github.com/cloudfoundry/warden/commit/d964e87d8545d9c127c0b7c26590e8ccf09123a8" rel="nofollow">Warden</a></h4>
                    <ul>
                      <li>Add IFB interface to limit container egress (host ingress) bandwidth. <a href="https://www.pivotaltracker.com/story/show/107067112" rel="nofollow">details</a>
                      </li>
                    </ul>
                    <h4>HM9000</h4>
                    <p>No changes.</p>
                    <h2>Buildpacks and Stacks</h2>
                    <h3>stacks</h3>
                    <p>updated to 1.17.0 (from 1.15.0)</p>
                    <h4><a href="https://github.com/cloudfoundry/stacks/releases/tag/1.17.0" rel="nofollow">1.17.0</a></h4>
                    <p>Notably, this release addresses <a href="http://www.ubuntu.com/usn/usn-2788-2" rel="nofollow">USN-2788-2</a>, “unzip vulnerabilities”, which is related to:</p>
                    <ul>
                      <li>
                        <a href="http://people.canonical.com/~ubuntu-security/cve/2015/CVE-2015-7696.html" rel="nofollow">CVE-2015-7696</a> “Heap buffer overflow when extracting password-protected archive”
                      </li>
                      <li>
                        <a href="http://people.canonical.com/~ubuntu-security/cve/2015/CVE-2015-7697.html" rel="nofollow">CVE-2015-7697</a> “Infinite loop when extracting password-protected archive”
                      </li>
                    </ul>
                    <h4><a href="https://github.com/cloudfoundry/stacks/releases/tag/1.16.0" rel="nofollow">1.16.0</a></h4>
                    <p>This release contains only non-critical updates to the rootfs. See the receipt changes at this <a href="https://github.com/cloudfoundry/stacks/commit/b52e27b75e3596b4f76b26331c19ed720dad2ea0" rel="nofollow">commit</a> for more information.</p>
                    <p>This release notably adds a set of commonly-used locales. See <a href="https://github.com/cloudfoundry/stacks/blob/master/cflinuxfs2/build/generate-all-locales.sh" rel="nofollow">https://github.com/cloudfoundry/stacks/blob/master/cflinuxfs2/build/generate-all-locales.sh</a> for details of what’s supported.</p>
                    <h3>nodejs-buildpack</h3>
                    <p>updated to v1.5.2 (from v1.5.1)</p>
                    <h4><a href="https://github.com/cloudfoundry/nodejs-buildpack/releases/tag/v1.5.2" rel="nofollow">v1.5.2</a></h4>
                    <ul>
                      <li>Gracefully handle unsupported or unreleased node builds and avoid using heroku binaries. (<a href="https://www.pivotaltracker.com/story/show/107939290" rel="nofollow">https://www.pivotaltracker.com/story/show/107939290</a>)
                      </li>
                    </ul>
                    <p>Packaged binaries:</p>
                    <table>
                      <thead>
                        <tr>
                          <th>name</th>
                          <th>version</th>
                          <th>cf_stacks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>node</td>
                          <td>0.10.38</td>
                          <td>cflinuxfs2</td>
                        </tr>
                        <tr>
                          <td>node</td>
                          <td>0.10.40</td>
                          <td>cflinuxfs2</td>
                        </tr>
                        <tr>
                          <td>node</td>
                          <td>0.11.15</td>
                          <td>cflinuxfs2</td>
                        </tr>
                        <tr>
                          <td>node</td>
                          <td>0.11.16</td>
                          <td>cflinuxfs2</td>
                        </tr>
                        <tr>
                          <td>node</td>
                          <td>0.12.6</td>
                          <td>cflinuxfs2</td>
                        </tr>
                        <tr>
                          <td>node</td>
                          <td>0.12.7</td>
                          <td>cflinuxfs2</td>
                        </tr>
                        <tr>
                          <td>node</td>
                          <td>4.2.2</td>
                          <td>cflinuxfs2</td>
                        </tr>
                      </tbody>
                    </table>
                    <ul>
                      <li>SHA256: 2a8ac3edddd59d03ebb1664f20a8bad9aecab839ab88d7800a82c364dd47f7e6</li>
                    </ul>
                    <h2>Identity</h2>
                    <h2>Routing</h2>
                    <p>Work continues on support for TCP Routing - CC API client can now request a random port when creating a TCP route using query parameter <code>?generate_port=true</code> <a href="https://www.pivotaltracker.com/story/show/101460700" rel="nofollow">details</a> - CC API client can now retrieve TCP routes for a specified port using query parameter <code>?q=port:1024</code> <a href="https://www.pivotaltracker.com/story/show/107536490" rel="nofollow">details</a></p>
                    <h2>Loggregator</h2>
                    <ul>
                      <li>No changes since 224</li>
                    </ul>
                    <h2>Internal Components</h2>
                    <p>No changes to any internal components.</p>
                    <h2>Job Spec Changes</h2>
                    <ul>
                      <li>Added <code>dea_next.staging_bandwidth_limit.rate</code>, <code>dea_next.staging_bandwidth_limit.burst</code>, <code>dea_next.instance_bandwidth_limit.rate</code>, and <code>dea_next.instance_bandwidth_limit.burst</code> properties to <code>dea_next</code> job. <a href="https://www.pivotaltracker.com/story/show/107191676" rel="nofollow">details</a>
                      </li>
                    </ul>
                    <h2>Recommended BOSH Release and Stemcell Versions</h2>
                    <ul>
                      <li>BOSH Release Version:</li>
                      <li>BOSH Stemcell Version(s):</li>
                    </ul>
                    <p>These are soft recommendations; several different versions of the BOSH release and stemcell are likely to work fine with this version of cf-release.</p>
                    <h2>Recommended Diego Version</h2>
                    <ul>
                      <li>Diego final release <a href="https://github.com/cloudfoundry-incubator/diego-release/tree/v0.1441.0" rel="nofollow">v0.1441.0</a> · <a href="https://github.com/cloudfoundry-incubator/diego-release/releases/tag/v0.1441.0" rel="nofollow">release notes</a>
                      </li>
                    </ul>
                    <p>This is a soft recommendation; several different versions of the diego-release may work fine with this version of cf-release.</p>
                    <h2>Recommended Garden Linux Version</h2>
                    <ul>
                      <li>Garden-linux final release <a href="https://github.com/cloudfoundry-incubator/garden-linux-release/tree/v0.327.0" rel="nofollow">v0.327.0</a> · <a href="https://github.com/cloudfoundry-incubator/garden-linux-release/releases/tag/v0.327.0" rel="nofollow">release notes</a>
                      </li>
                    </ul>
                    <p>This is a soft recommendation; several different versions of the garden-linux release may work fine with this version of cf-release and the aforementioned version of diego-release.</p>
                    <h2>Recommended ETCD Version for Diego Deployment</h2>
                    <ul>
                      <li>Etcd final release <a href="https://github.com/cloudfoundry-incubator/etcd-release/releases/tag/18" rel="nofollow">18</a>
                      </li>
                    </ul>
                    <p>This is a soft recommendation; several different versions of the etcd release may work fine with this version of cf-release and the aforementioned version of diego-release.</p>
                  </div>
                </div>
                <div className="col-md-8">
                <h3 className="page-header h1">Usage</h3>
                <pre className="terminal-alt">
                  $ bosh upload release https://bosh.io/d/github.com/cloudfoundry/cf-release?v=225
                </pre>
                <hr />
                <pre className="manifest-pre">
                  releases: <br />
                  - name: cf, version: "225"
                  </pre>
                  <h3 className="page-header h1">Download</h3>
                  <p>Optionally <a href="/d/github.com/cloudfoundry/cf-release?v=225">download</a>  release tarball locally:</p>
                  <pre className="terminal-alt">
                    $ curl -L -J -O https://bosh.io/d/github.com/cloudfoundry/cf-release?v=225 <br />
                  </pre>
                  <p className="mvn">sha1: <code className="sha1">d4668747f7ae7a4c02cd43536a3dcc625def8c7f</code></p>
                  <hr />
                  <h3 className="page-header h1">Jobs</h3>
                  <ul className="list-inline list-inline-tags">
                    <li >
                      <a href="#/resources/resource/job">acceptance-tests</a>
                    </li>
                    <li >
                      <a>cloud_controller_clock</a>
                    </li>
                    <li >
                      <a href="/jobs/cloud_controller_ng?source=github.com/cloudfoundry/cf-release&amp;version=225">cloud_controller_ng</a>
                    </li>
                    <li >
                      <a href="/jobs/cloud_controller_worker?source=github.com/cloudfoundry/cf-release&amp;version=225">cloud_controller_worker</a>
                    </li>
                    <li >
                      <a href="/jobs/collector?source=github.com/cloudfoundry/cf-release&amp;version=225">collector</a>
                    </li>
                    <li >
                      <a href="/jobs/consul_agent?source=github.com/cloudfoundry/cf-release&amp;version=225">consul_agent</a>
                    </li>
                    <li >
                      <a href="/jobs/dea_logging_agent?source=github.com/cloudfoundry/cf-release&amp;version=225">dea_logging_agent</a>
                    </li>
                    <li >
                      <a href="/jobs/dea_next?source=github.com/cloudfoundry/cf-release&amp;version=225">dea_next</a>
                    </li>
                    <li >
                      <a href="/jobs/debian_nfs_server?source=github.com/cloudfoundry/cf-release&amp;version=225">debian_nfs_server</a>
                    </li>
                    <li >
                      <a href="/jobs/doppler?source=github.com/cloudfoundry/cf-release&amp;version=225">doppler</a>
                    </li>
                    <li >
                      <a href="/jobs/etcd?source=github.com/cloudfoundry/cf-release&amp;version=225">etcd</a>
                    </li>
                    <li >
                      <a href="/jobs/etcd_metrics_server?source=github.com/cloudfoundry/cf-release&amp;version=225">etcd_metrics_server</a>
                    </li>
                    <li >
                      <a href="/jobs/gorouter?source=github.com/cloudfoundry/cf-release&amp;version=225">gorouter</a>
                    </li>
                    <li >
                      <a href="/jobs/haproxy?source=github.com/cloudfoundry/cf-release&amp;version=225">haproxy</a>
                    </li>
                    <li >
                      <a href="/jobs/hm9000?source=github.com/cloudfoundry/cf-release&amp;version=225">hm9000</a>
                    </li>
                    <li >
                      <a href="/jobs/loggregator_trafficcontroller?source=github.com/cloudfoundry/cf-release&amp;version=225">loggregator_trafficcontroller</a>
                    </li>
                    <li >
                      <a href="/jobs/metron_agent?source=github.com/cloudfoundry/cf-release&amp;version=225">metron_agent</a>
                    </li>
                    <li >
                      <a href="/jobs/nats?source=github.com/cloudfoundry/cf-release&amp;version=225">nats</a>
                    </li>
                    <li >
                      <a href="/jobs/nats_stream_forwarder?source=github.com/cloudfoundry/cf-release&amp;version=225">nats_stream_forwarder</a>
                    </li>
                    <li >
                      <a href="/jobs/nfs_mounter?source=github.com/cloudfoundry/cf-release&amp;version=225">nfs_mounter</a>
                    </li>
                    <li >
                      <a href="/jobs/postgres?source=github.com/cloudfoundry/cf-release&amp;version=225">postgres</a>
                    </li>
                    <li >
                      <a href="/jobs/route_registrar?source=github.com/cloudfoundry/cf-release&amp;version=225">route_registrar</a>
                    </li>
                    <li >
                      <a href="/jobs/routing-api?source=github.com/cloudfoundry/cf-release&amp;version=225">routing-api</a>
                    </li>
                    <li >
                      <a href="/jobs/smoke-tests?source=github.com/cloudfoundry/cf-release&amp;version=225">smoke-tests</a>
                    </li>
                    <li >
                      <a href="/jobs/statsd-injector?source=github.com/cloudfoundry/cf-release&amp;version=225">statsd-injector</a>
                    </li>
                    <li >
                      <a href="/jobs/syslog_drain_binder?source=github.com/cloudfoundry/cf-release&amp;version=225">syslog_drain_binder</a>
                    </li>
                    <li >
                      <a href="/jobs/uaa?source=github.com/cloudfoundry/cf-release&amp;version=225">uaa</a>
                    </li>
                  </ul>
                  <h3 className="page-header h1">Packages</h3>
                  <ul className="list-inline list-inline-tags">
                    <li>
                      <a href="#/resources/resource/package">acceptance-tests</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_binary?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_binary</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_go?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_go</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_java?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_java</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_java_offline?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_java_offline</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_nodejs?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_nodejs</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_php?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_php</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_python?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_python</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_ruby?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_ruby</a>
                    </li>
                    <li>
                      <a href="/packages/buildpack_staticfile?source=github.com/cloudfoundry/cf-release&amp;version=225">buildpack_staticfile</a>
                    </li>
                    <li>
                      <a href="/packages/cli?source=github.com/cloudfoundry/cf-release&amp;version=225">cli</a>
                    </li>
                    <li>
                      <a href="/packages/cloud_controller_ng?source=github.com/cloudfoundry/cf-release&amp;version=225">cloud_controller_ng</a>
                    </li>
                    <li>
                      <a href="/packages/collector?source=github.com/cloudfoundry/cf-release&amp;version=225">collector</a>
                    </li>
                    <li>
                      <a href="/packages/common?source=github.com/cloudfoundry/cf-release&amp;version=225">common</a>
                    </li>
                    <li>
                      <a href="/packages/consul?source=github.com/cloudfoundry/cf-release&amp;version=225">consul</a>
                    </li>
                    <li>
                      <a href="/packages/consul-common?source=github.com/cloudfoundry/cf-release&amp;version=225">consul-common</a>
                    </li>
                    <li>
                      <a href="/packages/dea_logging_agent?source=github.com/cloudfoundry/cf-release&amp;version=225">dea_logging_agent</a>
                    </li>
                    <li>
                      <a href="/packages/dea_next?source=github.com/cloudfoundry/cf-release&amp;version=225">dea_next</a>
                    </li>
                    <li>
                      <a href="/packages/debian_nfs_server?source=github.com/cloudfoundry/cf-release&amp;version=225">debian_nfs_server</a>
                    </li>
                    <li>
                      <a href="/packages/doppler?source=github.com/cloudfoundry/cf-release&amp;version=225">doppler</a>
                    </li>
                    <li>
                      <a href="/packages/etcd?source=github.com/cloudfoundry/cf-release&amp;version=225">etcd</a>
                    </li>
                    <li>
                      <a href="/packages/etcd-common?source=github.com/cloudfoundry/cf-release&amp;version=225">etcd-common</a>
                    </li>
                    <li>
                      <a href="/packages/etcd_metrics_server?source=github.com/cloudfoundry/cf-release&amp;version=225">etcd_metrics_server</a>
                    </li>
                    <li>
                      <a href="/packages/gnatsd?source=github.com/cloudfoundry/cf-release&amp;version=225">gnatsd</a>
                    </li>
                    <li>
                      <a href="/packages/golang1.4?source=github.com/cloudfoundry/cf-release&amp;version=225">golang1.4</a>
                    </li>
                    <li>
                      <a href="/packages/gorouter?source=github.com/cloudfoundry/cf-release&amp;version=225">gorouter</a>
                    </li>
                    <li>
                      <a href="/packages/haproxy?source=github.com/cloudfoundry/cf-release&amp;version=225">haproxy</a>
                    </li>
                    <li>
                      <a href="/packages/hm9000?source=github.com/cloudfoundry/cf-release&amp;version=225">hm9000</a>
                    </li>
                    <li>
                      <a href="/packages/libpq?source=github.com/cloudfoundry/cf-release&amp;version=225">libpq</a>
                    </li>
                    <li>
                      <a href="/packages/loggregator_trafficcontroller?source=github.com/cloudfoundry/cf-release&amp;version=225">loggregator_trafficcontroller</a>
                    </li>
                    <li>
                      <a href="/packages/metron_agent?source=github.com/cloudfoundry/cf-release&amp;version=225">metron_agent</a>
                    </li>
                    <li>
                      <a href="/packages/mysqlclient-5.5?source=github.com/cloudfoundry/cf-release&amp;version=225">mysqlclient-5.5</a>
                    </li>
                    <li>
                      <a href="/packages/nats?source=github.com/cloudfoundry/cf-release&amp;version=225">nats</a>
                    </li>
                    <li>
                      <a href="/packages/nginx?source=github.com/cloudfoundry/cf-release&amp;version=225">nginx</a>
                    </li>
                    <li>
                      <a href="/packages/nginx_newrelic_plugin?source=github.com/cloudfoundry/cf-release&amp;version=225">nginx_newrelic_plugin</a>
                    </li>
                    <li>
                      <a href="/packages/postgres?source=github.com/cloudfoundry/cf-release&amp;version=225">postgres</a>
                    </li>
                    <li>
                      <a href="/packages/postgres-9.4.2?source=github.com/cloudfoundry/cf-release&amp;version=225">postgres-9.4.2</a>
                    </li>
                    <li>
                      <a href="/packages/rootfs_cflinuxfs2?source=github.com/cloudfoundry/cf-release&amp;version=225">rootfs_cflinuxfs2</a>
                    </li>
                    <li>
                      <a href="/packages/route_registrar?source=github.com/cloudfoundry/cf-release&amp;version=225">route_registrar</a>
                    </li>
                    <li>
                      <a href="/packages/routing-api?source=github.com/cloudfoundry/cf-release&amp;version=225">routing-api</a>
                    </li>
                    <li>
                      <a href="/packages/rtr?source=github.com/cloudfoundry/cf-release&amp;version=225">rtr</a>
                    </li>
                    <li>
                      <a href="/packages/ruby-2.1.7?source=github.com/cloudfoundry/cf-release&amp;version=225">ruby-2.1.7</a>
                    </li>
                    <li>
                      <a href="/packages/ruby-2.2.3?source=github.com/cloudfoundry/cf-release&amp;version=225">ruby-2.2.3</a>
                    </li>
                    <li>
                      <a href="/packages/smoke-tests?source=github.com/cloudfoundry/cf-release&amp;version=225">smoke-tests</a>
                    </li>
                    <li>
                      <a href="/packages/statsd-injector?source=github.com/cloudfoundry/cf-release&amp;version=225">statsd-injector</a>
                    </li>
                    <li>
                      <a href="/packages/syslog_drain_binder?source=github.com/cloudfoundry/cf-release&amp;version=225">syslog_drain_binder</a>
                    </li>
                    <li>
                      <a href="/packages/uaa?source=github.com/cloudfoundry/cf-release&amp;version=225">uaa</a>
                    </li>
                    <li>
                      <a href="/packages/warden?source=github.com/cloudfoundry/cf-release&amp;version=225">warden</a>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </Tab>
            <Tab eventKey={3} title="Dependencies" className="bg-neutral-11">
              <div className="container">
                <p>Dependencies</p>
              </div>
            </Tab>
          </SimpleTabs>
        </div>
      </div>
    );
  }
});

module.exports = Resource;
