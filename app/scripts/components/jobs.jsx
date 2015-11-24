var React = require('react');
var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;

var Jobs = React.createClass({

  render: function() {

    return (
      <div className="docs pbxxxl">
        <div className="release-header bg-neutral-11">
          <div className="container">
            <Row>
              <Col md={12}>
                <p className="em-alt type-sm type-dark-6 mvn lh-1">Release</p>
                <h3 className="h1 type-dark-1 mvn lh-1">
                  cf-release
                  <span className="type-dark-7"> / </span>
                  <span className="type-dark-1 em-default">'225'</span>
                  <span className="type-dark-7"> / </span>
                  <span className="type-dark-1 em-default">'blobstore</span>
                </h3>
                <p className="type-sm mtl mbn"><a href="https://github.com/cloudfoundry/cf-release/tree/24c131a5/"><code>24c131a5</code></a> <span className="type-dark-5">or</span> <a href="https://github.com/cloudfoundry/cf-release/tree/master/">master</a> <span className="type-dark-5">branch</span></p>
              </Col>
              <Col md={12} className="txt-r">
                <p className="type-sm mbn"><a href="/releases/github.com/cloudfoundry/cf-release?version=225&amp;graph=1">Explore dependencies diagram</a></p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container">
        <h3 className="page-header h1">Job <span>'blobstore'</span></h3>
        <p>Github source: <a href="https://github.com/cloudfoundry/bosh/tree/8002a933/jobs/blobstore"><code>8002a933</code></a> or <a href="https://github.com/cloudfoundry/bosh/tree/master/jobs/blobstore">master</a> branch</p>
        <h3 className="page-header h1">Configuration Properties</h3>
        <p>Replace <code>???</code>s with appropriate values. Following example does not account for release job collocation or for optional/conflicting properties.</p>
        <p>
          <a href="#" className="btn btn-default btn-sm mrxl"><span>Hide</span><span>Show</span> properties with defaults</a> 
          <a href="#" className="btn btn-default btn-sm"><span>Hide</span><span>Show</span> property descriptions</a>
        </p>
        <ul className="property-items">
          <li className="indent-0">
            <div className="key">
              <a href="#p=blobstore" id="p=blobstore">blobstore:</a><br />
            </div>
          </li>
          <li className=" indent-1">
            <div className="key">
              <a href="#p=blobstore.agent" id="p=blobstore.agent">agent:</a><br />
            </div>
          </li>
          <li className=" indent-2">
            <div className="key">
              <a href="#p=blobstore.agent.password" id="p=blobstore.agent.password">password: <span className="placeholder">???</span></a><br />
            </div>
            <div className="description">
              <p>Password agents must use to access blobstore via HTTP Basic</p>
            </div>
          </li>
          <li className=" indent-2">
            <div className="key">
              <a href="#p=blobstore.agent.user" id="p=blobstore.agent.user">user: <span className="placeholder">???</span></a><br />
            </div>
            <div className="description">
              <p>Username agents must use to access blobstore via HTTP Basic</p>
            </div>
          </li>
          <li className="all-values-present indent-1">
            <div className="key">
              <a href="#p=blobstore.backend_port" id="p=blobstore.backend_port">backend_port: 25251</a><br />
            </div>
            <div className="description">
              <p>TCP port backend blobstore server (simple blobstore) listens on</p>
            </div>
          </li>
          <li className=" indent-1">
            <div className="key">
              <a href="#p=blobstore.director" id="p=blobstore.director">director:</a><br />
            </div>
          </li>
          <li className=" indent-2">
            <div className="key">
              <a href="#p=blobstore.director.password" id="p=blobstore.director.password">password: <span className="placeholder">???</span></a><br />
            </div>
            <div className="description">
              <p>Password director must use to access blobstore via HTTP Basic</p>
            </div>
          </li>
          <li className=" indent-2">
            <div className="key">
              <a href="#p=blobstore.director.user" id="p=blobstore.director.user">user: <span className="placeholder">???</span></a><br />
            </div>
            <div className="description">
              <p>Username director must use to access blobstore via HTTP Basic</p>
            </div>
          </li>
          <li className="all-values-present indent-1">
            <div className="key">
              <a href="#p=blobstore.max_upload_size" id="p=blobstore.max_upload_size">max_upload_size: 5000m</a><br />
            </div>
            <div className="description">
              <p>Max allowed file size for upload</p>
            </div>
          </li>
          <li className="all-values-present indent-1">
            <div className="key">
              <a href="#p=blobstore.port" id="p=blobstore.port">port: 25250</a><br />
            </div>
            <div className="description">
              <p>TCP port blobstore server (ngnix) listens on</p>
            </div>
          </li>
          <li className="indent-0">
            <div className="key">
              <a href="#p=blobstore" id="p=blobstore">blobstore:</a><br />
            </div>
          </li>
          <li className="all-values-present indent-1">
            <div className="key">
              <a href="#p=blobstore.max_upload_size" id="p=blobstore.max_upload_size">max_upload_size: 5000m</a><br />
            </div>
            <div className="description">
              <p>Max allowed file size for upload</p>
            </div>
          </li>
          <li className="all-values-present indent-1">
            <div className="key">
              <a href="#p=blobstore.port" id="p=blobstore.port">port: 25250</a><br />
            </div>
            <div className="description">
              <p>TCP port blobstore server (ngnix) listens on</p>
            </div>
          </li>
        </ul>

        <Row>
          <Col md={12}>
            <h3 className="page-header h1">Templates</h3>
            <p>Templates are rendered and placed onto corresponding instances during the deployment process. This job's templates will be placed into <code>/var/vcap/jobs/blobstore/</code> directory.</p>
            <ul>
              <li>bin/nginx_ctl (nginx_ctl)</li>
            </ul>
            <ul>
              <li>config/mime.types (mime.types)</li>
              <li>config/nginx.conf (nginx.conf.erb)</li>
              <li>config/read_users (read_users.erb)</li>
              <li>config/sites/blobstore.conf (blobstore.conf.erb)</li>
              <li>config/write_users (write_users.erb)</li>
            </ul>
          </Col>
          <Col md={12}>
            <h3 className="page-header h1">Runtime package dependencies</h3>
            <p>Packages are compiled and placed onto corresponding instances during the deployment process. Packages will be placed into <code>/var/vcap/packages/</code> directory.</p>
            <ul>
              <li>
                <a href="/packages/nginx?source=github.com/cloudfoundry/bosh&amp;version=229">nginx</a>
              </li>
            </ul>
          </Col>
        </Row>

        </div>
      </div>
    );
  }
});

module.exports = Jobs;
