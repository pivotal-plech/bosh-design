var React = require('react');

var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;
var Media = require('pui-react-media').Media;
var Flag = require('pui-react-media').Flag;

var icon1 = <svg x="0px" y="0px" width="36px" viewBox="0 0 356.3 410.6"><g className="back"><path stroke-linejoin="round" d="M354.3,306.9L178.1,205.3"/><path stroke-linejoin="round" d="M2,306.9l176.1-101.5V1.8"/></g><g className="front"><path stroke-linejoin="round" d="M178.1,205.1l176.1-101.5"/><path stroke-linejoin="round" d="M354.3,103.5L178.1,2L2,103.5 v203.6l176.1,101.5l176.1-101.5V103.5"/><path stroke-linejoin="round" d="M2,103.5l176.1,101.5v203.6"/></g></svg>;
var icon2 = <svg x="0px" y="0px" width="100px" viewBox="0 0 397.9 410.6" className="icon"><g className='back'><path stroke-linejoin="round" d="M110.8,91.8l88.1,113.8"/><path stroke-linejoin="round" d="M341.4,186.1l-142.5,19.5l-54.4,133.1"/><path stroke-linejoin="round" d="M2,154.5l108.9-62.8L198.9,2"/><path stroke-linejoin="round" d="M253.4,401.4l-108.9-62.8L22.8,307.1"/><path stroke-linejoin="round" d="M341.4,60.3v125.8l33.6,121"/></g><g className='front'><path stroke-linejoin="round" d="M2,154.5l20.8,152.5l33.6,43.3 l142.5,58.3l54.4-7.3l121.7-94.3l20.8-51l-20.8-152.5l-33.6-43.3L198.9,2l-54.4,7.3L22.8,103.5L2,154.5"/><path stroke-linejoin="round" d="M144.5,9.3L253.4,72"/><path stroke-linejoin="round" d="M198.9,205.1L253.4,72 l121.7,31.5"/><path stroke-linejoin="round" d="M56.4,224.6l142.5-19.5 L287,318.8"/><path stroke-linejoin="round" d="M22.8,103.5l33.6,121v125.8"/><path stroke-linejoin="round" d="M198.9,408.6l88.1-89.8 l108.9-62.8"/></g></svg>;
var releaseImage = <svg x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44"><path fill="#FFFFFF" d="M22,43C10.4,43,1,33.6,1,22S10.4,1,22,1c11.6,0,21,9.4,21,21S33.6,43,22,43z"/><path fill="#EAEDEF" d="M22,2c11,0,20,9,20,20c0,11-9,20-20,20S2,33,2,22C2,11,11,2,22,2 M22,0C9.9,0,0,9.9,0,22 s9.9,22,22,22s22-9.9,22-22S34.1,0,22,0L22,0z"/><polygon fill="#3484F7" points="12,32 20,32 22,18 24,32 32,32 22,12  "/><polygon fill="#60A4F4" points="21,32 23,32 22,25  "/></svg>;
var image1 = <svg className="lifecycle-mgmt" x="0px" y="0px" width="100%" style={{maxWidth: "450px", margin: "0 auto"}} viewBox="0 0 533.1 437.4"><polygon fill="#DAE6F2" points="261.9,339.1 261.9,437.4 533.1,437.4 533.1,182.6 "/><polygon fill="#E9EFF2" points="0,152.4 0,179 261.9,332.7 533.1,175 533.1,157.2 263.6,0 "/><polygon fill="#1299E9" points="0,186.5 261.9,339.1 533.1,182.6 533.1,175 261.9,332.7 0,179 "/><polygon fill="#EFF4F8" points="0,186.5 0,437.4 261.9,437.4 261.9,339.1 "/><polygon fill="#F6F7F9" points="0,152.4 0,179 261.9,332.7 533.1,175 533.1,157.2 263.6,0 "/></svg>;

var Principles = React.createClass({

  render: function() {

    return (
      <div className="bg-dark-11 pvxxxl principles">
        <div className="grid-item container pvxxl">
          <div>
            {icon1}
            <h3 className="title mvn type-dark-4">Manage Intelligently</h3>
            <p className="mvn h3 type-dark-6" style={{maxWidth: "650px"}}>BOSH was purposefully constructed to address the four principles of modern Release Engineering in the following ways:</p>
          </div>
          <hr className="mvxxl" />
          <Row className="mbxxl">
            <Col md={12}>
              <Flag leftImage={icon2} className="phxl" leftMediaSpacing='xlarge'>
                <h3 className="h1 mvn">Identifiability</h3>
                <p className="h4 type-dark-6 mvn">BOSH has a concept of software release which packages up all related source code, binary assets, configuration etc. This allows users to easily track contents a particular release. In addition to releases BOSH provides a way to capture all Operating System dependencies as one image.</p>
              </Flag>
            </Col>
            <Col md={12}>
              <Flag leftImage={icon2} className="phxl" leftMediaSpacing='xlarge'>
                <h3 className="h1 mvn">Reproducibility</h3>
                <p className="h4 type-dark-6 mvn">BOSH tool chain provides a centralized server that manages software releases, Operating System images, persistent data, and system configuration. It provides a clear and simple way of operating deployed system.</p>
              </Flag>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Flag leftImage={icon2} className="phxl" leftMediaSpacing='xlarge'>
                <h3 className="h1 mvn">Consistency</h3>
                <p className="h4 type-dark-6 mvn">BOSH software releases workflows are used throughout the development of the software and when the system needs to be deployed. BOSH centralized server allows users to see and track changes made the deployed system.</p>
              </Flag>
            </Col>
            <Col md={12}>
              <Flag leftImage={icon2} className="phxl" leftMediaSpacing='xlarge'>
                <h3 className="h1 mvn">Agility</h3>
                <p className="h4 type-dark-6 mvn">BOSH tool chain integrates well with current best practices of software engineering (including Continuous Delivery) by providing ways to easily create software releases in an automated ways and to update complex deployed systems with simple commands.</p>
              </Flag>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
});

module.exports = Principles;
