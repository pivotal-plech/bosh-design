var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('react-router').Navigation;

var TileLayout = require('pui-react-tile-layout');
var ClickableAltPanel = require('pui-react-panels').ClickableAltPanel;
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;
var Flag = require('pui-react-media').Flag;
var SimpleTabs = require('pui-react-tabs').SimpleTabs;
var Tab = require('pui-react-tabs').Tab;

var icon1 = <svg className="section-title-image" x="0px" y="0px" width="90px" viewBox="0 0 356.3 410.6"><g className="back"><path stroke-linejoin="round" d="M354.3,306.9L178.1,205.3"/><path stroke-linejoin="round" d="M2,306.9l176.1-101.5V1.8"/></g><g className="front"><path stroke-linejoin="round" d="M178.1,205.1l176.1-101.5"/><path stroke-linejoin="round" d="M354.3,103.5L178.1,2L2,103.5 v203.6l176.1,101.5l176.1-101.5V103.5"/><path stroke-linejoin="round" d="M2,103.5l176.1,101.5v203.6"/></g></svg>;
var releaseImage = <svg x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44"><path fill="#FFFFFF" d="M22,43C10.4,43,1,33.6,1,22S10.4,1,22,1c11.6,0,21,9.4,21,21S33.6,43,22,43z"/><path fill="#EAEDEF" d="M22,2c11,0,20,9,20,20c0,11-9,20-20,20S2,33,2,22C2,11,11,2,22,2 M22,0C9.9,0,0,9.9,0,22 s9.9,22,22,22s22-9.9,22-22S34.1,0,22,0L22,0z"/><polygon fill="#3484F7" points="12,32 20,32 22,18 24,32 32,32 22,12  "/><polygon fill="#60A4F4" points="21,32 23,32 22,25  "/></svg>;

var Resources = React.createClass({

  mixins: [Navigation],

  componentDidMount: function() {
    $('.active').removeClass('active');
    $('.resources').addClass('active');
  },

  render: function() {

    return (
      <div className="bg-neutral-11 pvxxxl">
        <div className="releases">
          <div className="section-title" style={{maxWidth: "800px", margin: "0 auto"}}>
            {icon1}
            <h3 className="section-title-heading h1 type-dark-1 mvxl">Releases</h3>
            <p className="section-title-copy type-dark-5 h3 mvxxl">A release is a versioned collection of configuration properties, configuration templates, start up scripts, source code, binary artifacts, and anything else required to build and deploy software in a reproducible way.</p>
            <hr className="hr-bosh mvxxl" />
          </div>
          <div className="container">
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

         <hr />

         <div className="stemcells pvxxxl">
           <div className="txt-c" style={{maxWidth: "800px", margin: "0 auto"}}>

            <div className="section-title" style={{maxWidth: "800px", margin: "0 auto"}}>
              {icon1}
              <h3 className="section-title-heading h1 type-dark-1 mvxl">Stemcells</h3>
              <p className="section-title-copy type-dark-5 h3 mvxxl">Typical stemcell contains bare minimum OS skeleton with few common utilities pre-installed, a BOSH Agent and few configuration files to make OS be securely configured by default.</p>
              <hr className="hr-bosh mvxxl" />
            </div>
           </div>

           <div className="container">
             <h3 className="h1">Ubuntu Trusty</h3>
             <hr />
             <TileLayout columns={{xs: 1, sm: 2, md: 3}}>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen-HVM Light</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen-HVM Light China</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen Light</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">OpenStack KVM</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">OpenStack KVM (raw)</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">vCloud ESXi</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">vSphere ESXi</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">BOSH Lite Warden</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
             </TileLayout>
             <h3 className="h1">CentOS 7.x</h3>
             <hr />
             <TileLayout columns={{xs: 1, sm: 2, md: 3}}>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen Light</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">AWS Xen-HVM Light</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">OpenStack KVM</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">OpenStack KVM (raw)</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
               <TileLayout.Item>
                 <BasicPanelAlt>
                   <Flag leftImage={releaseImage} leftMediaSpacing='large'>
                     <p className="mvn type-dark-1">vSphere ESXi</p>
                     <p className="mvn type-sm type-dark-5">Version 227</p>
                   </Flag>
                 </BasicPanelAlt>
               </TileLayout.Item>
             </TileLayout>
             <p className="txt-c h1">
               <a href="#/resources">View all Stemcells <i className="fa fa-angle-right mll" /></a>
             </p>
           </div>
         </div>

      </div>
    );
  }
});

module.exports = Resources;
