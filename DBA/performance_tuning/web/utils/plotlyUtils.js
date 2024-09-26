define(["require","exports","./common"],(function(require,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLegendsCurrentlySelectedFromPlot=e.selectPlotLegends=e.changePlotTimeLayout=e.onPlotTimeRangeSelectionHandler=void 0;e.onPlotTimeRangeSelectionHandler=e=>{var t,r;if(e["xaxis.range[0]"]&&e["xaxis.range[1]"]){return[null!==(t=n.dateTimeConverter.parse(String(e["xaxis.range[0]"])))&&void 0!==t?t:"",null!==(r=n.dateTimeConverter.parse(String(e["xaxis.range[1]"])))&&void 0!==r?r:""]}return[null,null]};e.changePlotTimeLayout=(e,n,t)=>{if(!n||!t)return e;let r=e.layout;for(const e in r)e.includes("xaxis")&&(r[e].range=[n,t],r[e].autorange=!1,r[e].type="timestamp");return e};e.selectPlotLegends=(e,n)=>{function t(e,n){if(0===e.length)return!1;for(const t of e)if(n.includes(t))return!0;return!1}return n?(e.data.forEach((function(e){void 0!==e.name&&(t(n,e.name)||t(n,e.legendgroup))?e.visible=!0:e.visible="legendonly"})),e):e};e.getLegendsCurrentlySelectedFromPlot=(e,n)=>{const t=new Set;return n.data.forEach((e=>{!0!==e.visible&&"legendonly"===e.visible||t.add(e.name)})),Array.from(t)}}));