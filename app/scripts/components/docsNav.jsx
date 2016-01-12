var React = require('react');

var DocsNav = React.createClass({

  render: function() {

    return (
      <div className="toc">
        <h4><a id="intro"></a> Introduction</h4>
        <ul>
          <li>
            <a href="/docs/about.html">What is BOSH?</a>
            <ul>
              <li>
                <a href="/docs/problems.html">What problems does BOSH solve?</a>
                <ul>
                  <li>
                    <a href="/docs/stemcell.html">Stemcell</a>
                  </li>
                  <li>
                    <a href="/docs/release.html">Release</a>
                  </li>
                  <li>
                    <a href="/docs/deployment.html">Deployment</a>
                  </li>
                </ul>
              </li>
              <li>
                Comparison to other tools
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/terminology.html">Terminology</a>
          </li>
        </ul>
        <hr />
        <h4><a id="install"></a> Install BOSH</h4>
        <h5 className="hidden">Install BOSH with bosh-init</h5>
        <ul className="hidden">
          <li>
            <a href="/docs/bosh-components.html">BOSH components</a>
          </li>
          <li>
            <a href="/docs/install-bosh-init.html">Install bosh-init</a>
            <ul>
              <li>
                <a href="/docs/using-bosh-init.html">Using bosh-init</a>
                <ul>
                  <li>
                    <a href="/docs/migrate-to-bosh-init.html">Migrating to bosh-init from the micro CLI plugin</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/bosh-cli.html">Install BOSH CLI</a>
          </li>
          <li>
            <a href="/docs/init.html">Bootstrap an environment</a>
            <ul>
              <li>
                <a href="/docs/init-aws.html">On AWS</a>
              </li>
              <li>
                <a href="/docs/init-openstack.html">On OpenStack</a>
              </li>
              <li>
                <a href="/docs/init-vsphere.html">On vSphere</a>
              </li>
              <li>
                <a href="/docs/init-vcloud.html">On vCloud</a>
              </li>
              <li>
                <a href="/docs/bosh-lite.html">On Local machine using BOSH Lite</a>
              </li>
            </ul>
          </li>
        </ul>
        <h5 className="hidden"><a id="director-config"></a> Advanced Director configuration</h5>
        <ul className="hidden">
          <li>
            <a href="/docs/director-users.html">User management</a>
            <ul>
              <li>
                <a href="/docs/director-users-uaa.html">UAA Integration</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/director-certs.html">SSL certificate configuration</a>
          </li>
          <li>
            <a href="/docs/director-configure-db.html">Configuring external database</a>
          </li>
          <li>
            <a href="/docs/director-configure-blobstore.html">Configuring external blobstore</a>
          </li>
          <li>
            <a href="/docs/bootstrap.html">Micro CLI plugin <strong>[deprecated, but supported]</strong></a>
          </li>
        </ul>
        <hr />
        <h4><a id="basic-deploy"></a> Using BOSH to deploy software</h4>
        <ul className="hidden">
          <li>
            <a href="/docs/basic-workflow.html">Basic workflow</a>
            <ul>
              <li>
                <a href="/docs/deployment-basics.html">Deployment basics</a>
                <ul>
                  <li>
                    <a href="/docs/deployment-manifest.html">Deployment manifest schema</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/docs/uploading-stemcells.html">Uploading stemcells</a>
              </li>
              <li>
                <a href="/docs/uploading-releases.html">Uploading releases</a>
              </li>
              <li>
                <a href="/docs/deploying.html">Deploying</a>
              </li>
              <li>Running one off tasks</li>
              <li>Updating deployment to deal with security vulnerabilities</li>
            </ul>
          </li>
          <li>
            <a href="/docs/deploying-step-by-step.html">Deploying step-by-step</a>
          </li>
          <li>
            <a href="/docs/sysadmin-commands.html">CLI commands</a>
          </li>
          <li>
            <a href="/docs/director-tasks.html">Director tasks</a>
          </li>
          <li>
            <a href="/docs/tips.html">Troubleshooting</a>
          </li>
        </ul>
        <h5 className="hidden"><a id="deployment-config"></a> Detailed deployment configuration</h5>
        <ul className="hidden">
          <li>Deployment Jobs</li>
          <li>Resource Pools
            <ul>
              <li>
                <a href="/docs/vm-anti-affinity.html">VM anti-affinity</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/networks.html">Networks</a>
          </li>
          <li>
            <a href="/docs/persistent-disks.html">Persistent disks</a>
          </li>
          <li>
            <a href="/docs/trusted-certs.html">Trusted certificates</a>
          </li>
        </ul>
        <h5 className="hidden"><a id="cpi-config"></a> Detailed CPI configuration &amp; troubleshooting</h5>
        <ul className="hidden">
          <li>
            <a href="/docs/aws-cpi.html">AWS</a>
            <ul>
              <li>
                <a href="/docs/aws-iam-instance-profiles.html">Using IAM instance profiles</a>
              </li>
              <li>
                <a href="/docs/aws-instance-storage.html">Using instance storage</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/openstack-cpi.html">OpenStack</a>
            <ul>
              <li>
                <a href="/docs/openstack-keystonev3.html">Using Keystone v3 API</a>
              </li>
              <li>
                <a href="/docs/openstack-registry.html">Extended Registry configuration</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/vsphere-cpi.html">vSphere</a>
            <ul>
              <li>
                <a href="/docs/vsphere-migrate-datastores.html">Migrating from one datastore to another</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/vcloud-cpi.html">vCloud</a>
          </li>
          <li>
            <a href="/docs/azure-cpi.html">Azure</a> <strong>[beta]</strong>
          </li>
          <li>
            <a href="/docs/warden-cpi.html">Warden/Garden</a>
          </li>
        </ul>
        <h5 className="hidden"><a id="hm"></a> Health management of VMs and processes</h5>
        <ul className="hidden">
          <li>
            <a href="/docs/monitoring.html">Monitoring</a>
            <ul>
              <li>
                <a href="/docs/hm-config.html">Configuring Health Monitor</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/vm-monit.html">Process monitoring with Monit</a>
          </li>
          <li>
            <a href="/docs/cck.html">Manual repair with Cloud Check</a>
          </li>
          <li>
            <a href="/docs/resurrector.html">Automatic repair with Resurrector</a>
          </li>
          <li>
            <a href="/docs/snapshots.html">Persistent disk snapshotting</a>
          </li>
        </ul>
        <h5 className="hidden"><a id="vm-config"></a> VM configuration (looking inside a deployment)</h5>
        <ul className="hidden">
          <li>
            <a href="/docs/vm-struct.html">Structure of a managed VM</a>
            <ul>
              <li>
                <a href="/docs/vm-config.html">VM configuration locations</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/job-logs.html">Location and use of logs</a>
          </li>
          <li>Debugging issues with jobs</li>
        </ul>
        <hr />
        <h4><a id="release"></a> Using BOSH to package and distribute software</h4>
        <ul className="hidden">
          <li>What is a release?
            <ul>
              <li>
                <a href="/docs/create-release.html">Creating a release</a>
              </li>
              <li>Testing with dev releases</li>
              <li>Cutting final releases
                <ul>
                  <li>Versioning of releases</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>What is a job?
            <ul>
              <li>Creating a job</li>
              <li>Job properties</li>
              <li>
                <a href="/docs/job-lifecycle.html">Job lifecycle</a>
                <ul>
                  <li>
                    <a href="/docs/pre-start.html">Pre-start script</a>
                  </li>
                  <li>
                    <a href="/docs/drain.html">Drain script</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>What is a package?
            <ul>
              <li>
                <a href="/docs/packages.html">Creating a package</a>
              </li>
              <li>Relationship to release blobs</li>
            </ul>
          </li>
          <li>How do releases, jobs, and packages interact?</li>
          <li>Managing release repository
            <ul>
              <li>Release blobstore
                <ul>
                  <li>
                    <a href="/docs/s3-release-blobstore.html">Configuring S3 release blobstore</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h4><a id="extend"></a> Extending BOSH</h4>
        <ul className="hidden">
          <li>
            <a href="/docs/director-api-v1.html">Director API v1</a>
          </li>
          <li>What is a CPI?</li>
          <li>
            <a href="/docs/build-cpi.html">Building a CPI</a>
            <ul>
              <li>
                <a href="/docs/cpi-api-v1.html">CPI API v1</a>
              </li>
              <li>
                <a href="/docs/agent-cpi-interactions.html">Agent-CPI interactions</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/docs/build-stemcell.html">Building a stemcell</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = DocsNav;
