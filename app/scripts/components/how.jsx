var React = require('react');

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
var image2 = <svg x="0px" y="0px" className="lifecycle-mgmt" x="0px" y="0px" width="100%" style={{maxWidth: "450px", margin: "0 auto"}} viewBox="0 0 305.9 251.7">

<defs>
</defs>
<polygon id="XMLID_296_" fill="#F7F8F9" stroke="#B3CEE0" strokeWidth="0.25" strokeLineJoin="round" points="153,195.5 153,176 
  305.4,88.1 305.4,107.7 "/>
<polygon id="XMLID_295_" fill="#F7F8F9" stroke="#B3CEE0" strokeWidth="0.25" strokeLineJoin="round" points="153,195.5 153,176 
  0.5,88.1 0.5,107.7 "/>
<polygon id="XMLID_294_" fill="#1299E9" points="153,195.5 153,193.2 305.4,105.3 305.4,107.7 "/>
<polygon id="XMLID_293_" fill="#1299E9" points="153,195.5 153,193.2 0.5,105.3 0.5,107.7 "/>
<polygon id="XMLID_292_" fill="#DAE6F2" stroke="#D3E2EA" points="153,251.2 153,195.5 305.4,107.7 
  305.4,251.2 "/>
<polygon id="XMLID_291_" fill="#EFF4F8" stroke="#D3E2EA" points="153,251.2 153,195.5 0.5,107.7 0.5,251.2 
  "/>

<g id="LineSet_1_">
    <g id="strokes_1_">
    <path id="XMLID_290_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M0.5,88.1l16.9,9.8
      l16.9,9.8l16.9,9.8l16.9,9.8l16.9,9.8l16.9,9.8l16.9,9.8l16.9,9.8L153,176l16.9-9.8l16.9-9.8l16.9-9.8l16.9-9.8l16.9-9.8l16.9-9.8
      l16.9-9.8l16.9-9.8l16.9-9.8l-16.9-9.8l-16.9-9.8l-16.9-9.8l-16.9-9.8l-16.9-9.8l-16.9-9.8l-16.9-9.8L169.9,10L153,0.2L136,10
      l-16.9,9.8l-16.9,9.8l-16.9,9.8l-16.9,9.8l-16.9,9.8l-16.9,9.8l-16.9,9.8L0.5,88.1"/>
    <path id="XMLID_289_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M17.4,97.9l16.9-9.8"/>
    <path id="XMLID_288_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M34.4,88.1l-16.9-9.8"/>
    <path id="XMLID_287_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M34.4,107.7l16.9-9.8"/>
    <path id="XMLID_286_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M51.3,97.9l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_285_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M51.3,117.4l16.9-9.8"/>
    <path id="XMLID_284_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M68.3,107.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_283_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M68.3,127.2l16.9-9.8"/>
    <path id="XMLID_282_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M85.2,117.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_281_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M85.2,137l16.9-9.8"/>
    <path id="XMLID_280_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M102.1,127.2l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_279_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M102.1,146.7l16.9-9.8"/>
    <path id="XMLID_263_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,137l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_258_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,156.5l16.9-9.8"/>
    <path id="XMLID_257_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,146.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_256_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,166.2l16.9-9.8"/>
    <path id="XMLID_255_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,156.5l-16.9-9.8
      L153,137"/>
    <path id="XMLID_225_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,166.2l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_224_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M51.3,78.4l-16.9-9.8"/>
    <path id="XMLID_223_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M68.3,88.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_222_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M85.2,97.9l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_221_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M102.1,107.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_220_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,117.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_219_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,127.2l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_218_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,137l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_217_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,146.7L153,137
      l16.9-9.8"/>
    <path id="XMLID_216_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,156.5l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_215_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M68.3,68.6l-16.9-9.8"/>
    <path id="XMLID_214_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M85.2,78.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_213_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M102.1,88.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_212_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,97.9l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_211_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,107.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_210_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,117.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_209_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,127.2l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_208_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,137l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_207_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M203.8,146.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_206_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M85.2,58.8l-16.9-9.8"/>
    <path id="XMLID_205_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M102.1,68.6l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_204_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,78.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_203_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,88.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_202_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,97.9L136,88.1
      l16.9-9.8"/>
    <path id="XMLID_201_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,107.7L153,97.9
      l16.9-9.8"/>
    <path id="XMLID_200_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,117.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_199_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M203.8,127.2l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_198_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M220.7,137l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_197_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M102.1,49.1l-16.9-9.8"/>
    <path id="XMLID_196_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,58.8l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_195_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,68.6l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_194_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,78.4L136,68.6
      l16.9-9.8"/>
    <path id="XMLID_193_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,88.1L153,78.4
      l16.9-9.8"/>
    <path id="XMLID_192_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,97.9l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_191_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M203.8,107.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_190_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M220.7,117.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_189_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M237.7,127.2l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_188_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M119.1,39.3l-16.9-9.8"/>
    <path id="XMLID_187_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,49.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_186_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,58.8L136,49.1
      l16.9-9.8"/>
    <path id="XMLID_185_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,68.6L153,58.8
      l16.9-9.8"/>
    <path id="XMLID_184_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,78.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_183_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M203.8,88.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_182_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M220.7,97.9l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_181_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M237.7,107.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_180_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M254.6,117.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_179_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M136,29.5l-16.9-9.8"/>
    <path id="XMLID_178_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,39.3L136,29.5
      l16.9-9.8"/>
    <path id="XMLID_177_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,49.1L153,39.3
      l16.9-9.8"/>
    <path id="XMLID_176_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,58.8l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_175_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M203.8,68.6l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_174_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M220.7,78.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_173_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M237.7,88.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_172_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M254.6,97.9l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_171_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M271.5,107.7l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_170_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M153,19.8L136,10"/>
    <path id="XMLID_169_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M169.9,29.5L153,19.8
      l16.9-9.8"/>
    <path id="XMLID_168_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M186.8,39.3l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_167_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M203.8,49.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_166_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M220.7,58.8l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_165_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M237.7,68.6l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_164_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M254.6,78.4l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_116_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M271.5,88.1l-16.9-9.8
      l16.9-9.8"/>
    <path id="XMLID_115_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" d="M288.5,97.9l-16.9-9.8
      l16.9-9.8"/>
  </g>
</g>
<g id="XMLID_36_">
  <g id="XMLID_98_">
    <polygon id="XMLID_114_" fill="#1299E9" points="153,109.7 153,117 119.9,98 119.9,90.6 126.3,94.3    "/>
    <polygon id="XMLID_113_" fill="#1299E9" points="186,90.6 186,98 153,117 153,109.7 179.6,94.3    "/>
    <polygon id="XMLID_112_" opacity="0.15" fill="#1299E9" points="186,42.2 169.6,51.6 160.3,57 160,57.2 156.3,59.3 153,61.2 
      150,59.5 146.5,57.5 146.2,57.3 136.9,51.9 119.9,42.2 153,23.1     "/>
    <polygon id="XMLID_111_" opacity="8.000000e-02" fill="#1299E9" points="153,109.6 153,109.7 126.3,94.3 119.9,90.6 119.9,90.6 
      119.9,42.2 136.9,51.9 146.2,57.3 146.5,57.5 150,59.5 153,61.2 153,63.8 153,64.1 153,68.4 153,68.5 153,71.5 153,74.9 153,79.5 
      153,79.5 153,90.6     "/>
    <polygon id="XMLID_100_" opacity="0.15" fill="#1299E9" points="186,90.6 186,90.6 179.6,94.3 153,109.7 153,109.6 153,90.6 
      153,79.5 153,79.5 153,74.9 153,71.5 153,68.5 153,68.4 153,64.1 153,63.8 153,61.2 156.3,59.3 160,57.2 160.3,57 169.6,51.6 
      186,42.2    "/>
  </g>
  <polygon id="XMLID_97_" opacity="0.5" fill="#1299E9" points="119.9,90.6 153,71.5 186,90.6 153,109.7   "/>
  <g id="XMLID_37_" opacity="0.35">
    <polygon id="XMLID_96_" fill="#EA505C" points="146,75.1 143.3,76.7 136.4,72.7 139.2,71.1 143.3,73.5 145.8,72.1 145.8,74.9     
      "/>
    <polygon id="XMLID_95_" fill="#C64655" points="148.5,76.5 145.8,78.1 145.8,78.1 145.8,83.2 143.3,84.6 143.3,76.7 146,75.1     
      "/>
    <polygon id="XMLID_94_" fill="#EA505C" points="143.3,76.7 143.3,84.6 136.4,80.6 136.4,72.7    "/>
    <polygon id="XMLID_93_" fill="#EA505C" points="159.5,78.1 155.4,80.5 152.7,82 150.2,80.6 145.8,78.1 148.5,76.5 150.2,77.5 
      152.7,78.9 152.7,78.9 153,78.7 155.4,77.3 156.8,76.5 157.1,76.7     "/>
    <polygon id="XMLID_92_" fill="#EA505C" points="145.8,78.1 150.2,80.6 152.7,82 152.7,90 145.8,86 145.8,83.2 145.8,78.1     "/>
    <polygon id="XMLID_91_" fill="#C64655" points="159.5,82.8 159.5,86 152.7,90 152.7,82 155.4,80.5 159.5,78.1 159.5,78.1     "/>
    <polygon id="XMLID_90_" fill="#EA505C" points="159.5,74.9 159.8,75.1 162.3,76.5 162.3,84.4 159.5,82.8 159.5,78.1 159.5,78.1 
      157.1,76.7 156.8,76.5 159.5,74.9 159.5,74.9     "/>
    <polygon id="XMLID_89_" fill="#C64655" points="169.2,72.5 169.2,80.5 162.3,84.4 162.3,76.5    "/>
    <polygon id="XMLID_88_" fill="#EA505C" points="169.2,72.5 162.3,76.5 159.8,75.1 159.5,74.9 159.5,71.8 159.8,71.9 162.3,73.4 
      166.5,71    "/>
    <polygon id="XMLID_57_" fill="#EA505C" points="169.2,61.4 162.3,65.4 159.8,64 159.5,63.8 159.5,60.7 159.8,60.9 162.3,62.3 
      166.5,59.9    "/>
    <polygon id="XMLID_56_" fill="#EA505C" points="159.5,63.8 159.8,64 162.3,65.4 162.3,68.5 162.3,73.4 159.8,71.9 159.5,71.8 
      159.5,70.1 159.5,67.3 159.5,67 159.5,67 157.1,65.6 156.8,65.4 156.9,65.4 159.5,63.9 159.5,63.8    "/>
    <polygon id="XMLID_55_" fill="#C64655" points="169.2,61.4 169.2,69.4 166.5,71 162.3,73.4 162.3,68.5 162.3,65.4    "/>
    <polygon id="XMLID_54_" fill="#C64655" points="169.2,50.4 169.2,58.3 166.5,59.9 162.3,62.3 162.3,57.5 162.3,54.3    "/>
    <polygon id="XMLID_53_" fill="#EA505C" points="155.4,50.4 159.8,52.9 162.3,54.3 162.3,57.5 162.3,62.3 159.8,60.9 159.5,60.7 
      159.5,59.1 159.5,56.2 159.5,55.9 159.5,55.9 157.1,54.5 155.4,53.5 155.4,53.5 155.4,50.4     "/>
    <polygon id="XMLID_52_" fill="#EA505C" points="169.2,50.4 162.3,54.3 159.8,52.9 155.4,50.4 159.8,47.8 162.3,46.4    "/>
    <polygon id="XMLID_51_" fill="#C64655" points="159.8,45 159.8,47.8 155.4,50.4 155.4,50.4 155.4,53.5 155.4,53.5 153,52.1 
      152.9,52.1 152.7,51.9 150.2,53.4 150.2,50.5 150.2,50.5 146.1,48.1 146.1,45 153,48.9     "/>
    <polygon id="XMLID_50_" fill="#EA505C" points="159.8,45 153,48.9 146.1,45 153,41    "/>
    <polygon id="XMLID_49_" fill="#EA505C" points="150.2,50.5 146.1,52.9 143.3,54.5 136.4,50.5 143.3,46.6 146.1,48.1    "/>
    <polygon id="XMLID_48_" fill="#C64655" points="150.2,50.5 150.2,53.4 148.5,54.3 145.8,55.9 145.8,55.9 145.8,59.1 145.8,61 
      143.3,62.5 143.3,57.6 143.3,54.5 146.1,52.9 150.2,50.5    "/>
    <polygon id="XMLID_47_" fill="#EA505C" points="143.3,57.6 143.3,62.5 139.2,60 136.4,58.5 136.4,50.5 143.3,54.5    "/>
    <polygon id="XMLID_46_" fill="#EA505C" points="146,64 143.3,65.6 136.4,61.6 139.2,60 143.3,62.5 145.8,61 145.8,63.9     "/>
    <polygon id="XMLID_45_" fill="#EA505C" points="143.3,68.7 143.3,73.5 139.2,71.1 136.4,69.6 136.4,61.6 143.3,65.6    "/>
    <polygon id="XMLID_44_" fill="#C64655" points="148.5,65.4 145.8,67 145.8,67 145.8,70.1 145.8,72.1 143.3,73.5 143.3,68.7 
      143.3,65.6 146,64     "/>
    <polygon id="XMLID_43_" fill="#EA505C" points="159.5,67 155.4,69.4 152.7,71 150.2,69.5 146.1,67.2 145.8,67 148.5,65.4 
      148.8,65.6 150.2,66.4 152.7,67.8 152.7,67.8 153,67.7 155.4,66.2 156.8,65.4 157.1,65.6     "/>
    <polygon id="XMLID_42_" fill="#EA505C" points="146.1,67.2 150.2,69.5 152.7,71 152.7,78.9 150.2,77.5 148.5,76.5 146,75.1 
      145.8,74.9 145.8,72.1 145.8,70.1 145.8,67 145.8,67    "/>
    <polygon id="XMLID_41_" fill="#C64655" points="159.5,67.3 159.5,70.1 159.5,71.8 159.5,74.9 159.5,74.9 159.5,74.9 156.8,76.5 
      155.4,77.3 153,78.7 152.7,78.9 152.7,78.9 152.7,71 155.4,69.4 159.5,67 159.5,67     "/>
    <polygon id="XMLID_40_" fill="#EA505C" points="145.8,55.9 148.5,54.3 150.2,53.4 152.7,51.9 152.9,52.1 153,52.1 155.4,53.5 
      157.1,54.5 159.5,55.9 155.4,58.3 152.7,59.9 150.2,58.5 146.1,56.1     "/>
    <polygon id="XMLID_39_" fill="#EA505C" points="152.7,59.9 152.7,67.8 150.2,66.4 148.8,65.6 148.5,65.4 146,64 145.8,63.9 
      145.8,61 145.8,59.1 145.8,55.9 145.8,55.9 146.1,56.1 150.2,58.5     "/>
    <polygon id="XMLID_38_" fill="#C64655" points="159.5,56.2 159.5,59.1 159.5,60.7 159.5,63.8 159.5,63.8 159.5,63.9 156.9,65.4 
      156.8,65.4 155.4,66.2 153,67.7 152.7,67.8 152.7,67.8 152.7,59.9 155.4,58.3 159.5,55.9 159.5,55.9    "/>
  </g>
</g>
<line id="XMLID_35_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="288.5" y1="97.9" x2="288.5" y2="115.1"/>
<line id="XMLID_34_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="271.5" y1="107.7" x2="271.5" y2="124.8"/>
<line id="XMLID_32_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="254.6" y1="117.4" x2="254.6" y2="134.6"/>
<line id="XMLID_31_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="237.7" y1="127.2" x2="237.7" y2="144.3"/>
<line id="XMLID_30_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="220.7" y1="137" x2="220.7" y2="154.1"/>
<line id="XMLID_29_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="203.8" y1="146.7" x2="203.8" y2="163.9"/>
<line id="XMLID_28_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="186.8" y1="156.5" x2="186.8" y2="173.6"/>
<line id="XMLID_27_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="169.9" y1="166.2" x2="169.9" y2="183.4"/>
<line id="XMLID_26_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="136" y1="166.2" x2="136" y2="183.4"/>
<line id="XMLID_25_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="119.1" y1="156.5" x2="119.1" y2="173.6"/>
<line id="XMLID_24_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="102.1" y1="146.7" x2="102.1" y2="163.9"/>
<line id="XMLID_23_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="85.2" y1="137" x2="85.2" y2="154.1"/>
<line id="XMLID_22_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="68.3" y1="127.2" x2="68.3" y2="144.3"/>
<line id="XMLID_19_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="51.3" y1="117.4" x2="51.3" y2="134.6"/>
<line id="XMLID_18_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="34.4" y1="107.7" x2="34.4" y2="124.8"/>
<line id="XMLID_17_" fill="#F7F8F9" stroke="#D3E2EA" strokeWidth="0.5" strokeLineJoin="round" x1="17.4" y1="97.9" x2="17.4" y2="115.1"/>
</svg>;

var How = React.createClass({

  render: function() {

    return (
      <div className="how-container">
        <div className="bg-neutral-11 how">
          <div className="illustration center grid">
            {image1}
          </div>
          <div className="copy center grid">
            <div>
              <h3 className="h1 type-dark-11 mvn">Deployment Lifecycle Management</h3>
              <p className="type-dark-11 h3 mvn">Bosh helps foster the necessary insights for deploying, managing, and optimizing IT systems safely and securely.</p>
              <ul className="type-dark-11 h3 lvl">
                <li>Rolling Updates</li>
                <li>Monitor / Health Checking</li>
                <li>Backup and Restore</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-neutral-11 how">
          <div className="illustration center grid">
            {image2}
          </div>
          <div className="copy center grid">
            <div>
              <h3 className="h1 type-dark-11 mvn">Orchestration</h3>
              <p className="type-dark-11 h3 mvn">Bosh can take you from an entirely empty environment with no VMs running to VMs with the services deployed on them, relations established between each, and a fully working service.</p>
              <ul className="type-dark-11 h3 lvl">
                <li>Networking</li>
                <li>Storage Management</li>
                <li>VM Provisioning</li>
                <li>Life-cycle Management</li>
                <li>Interdependence</li>
                <li>Service Discovery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-neutral-11 how">
          <div className="illustration grid center">
            {image1}
          </div>
          <div className="copy center grid">
            <div>
              <h3 className="h1 type-dark-11 mvn">Configuration</h3>
              <p className="type-dark-11 h3 mvn">Bosh takes a holistic view of the system at large. During deployments, instead of attempting to move a machine to a new state, it can simply throw away the entire VM and recreate it from scratch.</p>
              <ul className="type-dark-11 h3 lvl">
                <li>Packaging</li>
                <li>Templating</li>
                <li>Service Provisioning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = How;
