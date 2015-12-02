var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;

var DefaultButton = require('pui-react-buttons').DefaultButton;
var PrimaryButton = require('pui-react-buttons').PrimaryButton;
var MarketingH1 = require('pui-react-typography').MarketingH1;
var TileLayout = require('pui-react-tile-layout');
var ClickableAltPanel = require('pui-react-panels').ClickableAltPanel;
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;
var InverseDivider = require('pui-react-dividers').InverseDivider;
var Row = require('pui-react-grids').Row;
var Col = require('pui-react-grids').Col;
var Media = require('pui-react-media').Media;
var Flag = require('pui-react-media').Flag;

var icon1 = <svg x="0px" y="0px" width="36px" viewBox="0 0 356.3 410.6"><g className="back"><path stroke-linejoin="round" d="M354.3,306.9L178.1,205.3"/><path stroke-linejoin="round" d="M2,306.9l176.1-101.5V1.8"/></g><g className="front"><path stroke-linejoin="round" d="M178.1,205.1l176.1-101.5"/><path stroke-linejoin="round" d="M354.3,103.5L178.1,2L2,103.5 v203.6l176.1,101.5l176.1-101.5V103.5"/><path stroke-linejoin="round" d="M2,103.5l176.1,101.5v203.6"/></g></svg>;
var icon2 = <svg x="0px" y="0px" width="100px" viewBox="0 0 397.9 410.6" className="icon"><g className='back'><path stroke-linejoin="round" d="M110.8,91.8l88.1,113.8"/><path stroke-linejoin="round" d="M341.4,186.1l-142.5,19.5l-54.4,133.1"/><path stroke-linejoin="round" d="M2,154.5l108.9-62.8L198.9,2"/><path stroke-linejoin="round" d="M253.4,401.4l-108.9-62.8L22.8,307.1"/><path stroke-linejoin="round" d="M341.4,60.3v125.8l33.6,121"/></g><g className='front'><path stroke-linejoin="round" d="M2,154.5l20.8,152.5l33.6,43.3 l142.5,58.3l54.4-7.3l121.7-94.3l20.8-51l-20.8-152.5l-33.6-43.3L198.9,2l-54.4,7.3L22.8,103.5L2,154.5"/><path stroke-linejoin="round" d="M144.5,9.3L253.4,72"/><path stroke-linejoin="round" d="M198.9,205.1L253.4,72 l121.7,31.5"/><path stroke-linejoin="round" d="M56.4,224.6l142.5-19.5 L287,318.8"/><path stroke-linejoin="round" d="M22.8,103.5l33.6,121v125.8"/><path stroke-linejoin="round" d="M198.9,408.6l88.1-89.8 l108.9-62.8"/></g></svg>;
var releaseImage = <svg x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44"><path fill="#FFFFFF" d="M22,43C10.4,43,1,33.6,1,22S10.4,1,22,1c11.6,0,21,9.4,21,21S33.6,43,22,43z"/><path fill="#EAEDEF" d="M22,2c11,0,20,9,20,20c0,11-9,20-20,20S2,33,2,22C2,11,11,2,22,2 M22,0C9.9,0,0,9.9,0,22 s9.9,22,22,22s22-9.9,22-22S34.1,0,22,0L22,0z"/><polygon fill="#3484F7" points="12,32 20,32 22,18 24,32 32,32 22,12  "/><polygon fill="#60A4F4" points="21,32 23,32 22,25  "/></svg>;
var image1 = <svg className="lifecycle-mgmt" x="0px" y="0px" width="100%" style={{maxWidth: "450px", margin: "0 auto"}} viewBox="0 0 533.1 437.4"><polygon fill="#DAE6F2" points="261.9,339.1 261.9,437.4 533.1,437.4 533.1,182.6 "/><polygon fill="#E9EFF2" points="0,152.4 0,179 261.9,332.7 533.1,175 533.1,157.2 263.6,0 "/><polygon fill="#1299E9" points="0,186.5 261.9,339.1 533.1,182.6 533.1,175 261.9,332.7 0,179 "/><polygon fill="#EFF4F8" points="0,186.5 0,437.4 261.9,437.4 261.9,339.1 "/><polygon fill="#F6F7F9" points="0,152.4 0,179 261.9,332.7 533.1,175 533.1,157.2 263.6,0 "/></svg>;


var FeaturedReleases = React.createClass({

  mixins: [Navigation],

  render: function() {

    return (
      <div className="bg-neutral-11 releases pvxxxl">
        <div className="container">
          <div>
            {icon1}
            <h3 className="title mvn type-dark-4">Featured Releases</h3>
            <p className="mvn h3 type-dark-6 mbxl" style={{maxWidth: "650px"}}>A release is a versioned collection of configuration properties, configuration templates, start up scripts, source code, binary artifacts, and anything else required to build and deploy software in a reproducible way.</p>
            <hr className="mvxxl" />
          </div>
          <TileLayout columns={{xs: 1, sm: 2, md: 3}}>
            <TileLayout.Item>
              <BasicPanelAlt onClick={this.transitionTo.bind(this, '/resources/resource', null, null)}>
                <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                  <p className="mvn type-dark-1">concourse</p>
                  <p className="mvn type-sm type-dark-5">Version 227</p>
                </Flag>
              </BasicPanelAlt>
            </TileLayout.Item>
            <TileLayout.Item>
              <BasicPanelAlt>
                <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                  <p className="mvn type-dark-1">concourse</p>
                  <p className="mvn type-sm type-dark-5">Version 227</p>
                </Flag>
              </BasicPanelAlt>
            </TileLayout.Item>
            <TileLayout.Item>
              <BasicPanelAlt>
                <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                  <p className="mvn type-dark-1">concourse</p>
                  <p className="mvn type-sm type-dark-5">Version 227</p>
                </Flag>
              </BasicPanelAlt>
            </TileLayout.Item>
            <TileLayout.Item>
              <BasicPanelAlt>
                <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                  <p className="mvn type-dark-1">concourse</p>
                  <p className="mvn type-sm type-dark-5">Version 227</p>
                </Flag>
              </BasicPanelAlt>
            </TileLayout.Item>
            <TileLayout.Item>
              <BasicPanelAlt>
                <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                  <p className="mvn type-dark-1">concourse</p>
                  <p className="mvn type-sm type-dark-5">Version 227</p>
                </Flag>
              </BasicPanelAlt>
            </TileLayout.Item>
            <TileLayout.Item>
              <BasicPanelAlt>
                <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                  <p className="mvn type-dark-1">concourse</p>
                  <p className="mvn type-sm type-dark-5">Version 227</p>
                </Flag>
              </BasicPanelAlt>
            </TileLayout.Item>
          </TileLayout>
          <p className="txt-c h1">
            <a href="#/resources">View all Releases <i className="fa fa-angle-right mll" /></a>
          </p>
       </div>
     </div>
    );
  }
});

module.exports = FeaturedReleases;
