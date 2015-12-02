var React = require('react');
var BasicPanelAlt = require('pui-react-panels').BasicPanelAlt;
var PanelItem = require('./panelItem.jsx');

var OrderedList = require('pui-react-lists').OrderedList;
var ListItem = require('pui-react-lists').ListItem;
var UnorderedList = require('pui-react-lists').UnorderedList;
var ListItem = require('pui-react-lists').ListItem;
var InlineList = require('pui-react-lists').InlineList;
var ListItem = require('pui-react-lists').ListItem;

var Stemcells = React.createClass({

  render: function() {

    return (
      <div className="stemcells">
        <div className="container">
          <BasicPanelAlt title='Ubuntu Trusty' className="stemcells-panel mbxxl">
            <PanelItem title="AWS Xen-HVM Light" info="Version 227" />
            <PanelItem title="AWS Xen-HVM Light China" info="Version 229" />
            <PanelItem title="AWS Xen" info="Version 229" />
            <PanelItem title="AWS Xen Light" info="Version 229" />
            <PanelItem title="OpenStack KVM" info="Version 229" />
            <PanelItem title="OpenStack KVM (raw)" info="Version 229" />
            <PanelItem title="vCloud ESXi" info="Version 229" />
            <PanelItem title="vSphere ESXi" info="Version 229" />
            <PanelItem title="Bosh Lite Warden" info="Version 229" />
          </BasicPanelAlt>
          <BasicPanelAlt title='CentOS 7.x' className="stemcells-panel">
            <PanelItem title="AWS Xen" info="Version 227" />
            <PanelItem title="AWS Xen Light" info="Version 229" />
            <PanelItem title="AWS Xen-HVM Light" info="Version 229" />
            <PanelItem title="OpenStack KVM" info="Version 229" />
            <PanelItem title="OpenStack KVM (raw)" info="Version 229" />
            <PanelItem title="vSphere ESXi" info="Version 229" />
          </BasicPanelAlt>
        </div>
      </div>
    );
  }
});

module.exports = Stemcells;
