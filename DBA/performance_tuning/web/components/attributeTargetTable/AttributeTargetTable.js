var __rest=this&&this.__rest||function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(l=Object.getOwnPropertySymbols(e);s<l.length;s++)t.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(e,l[s])&&(r[l[s]]=e[l[s]])}return r};define(["require","exports","preact/jsx-runtime","../table/Table","./AttributeTargetTableRowRenderer"],(function(require,e,t,r,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=e=>{var{records:s,columns:a,columnsDefault:n,class:o}=e,c=__rest(e,["records","columns","columnsDefault","class"]);return(0,t.jsx)(r.default,Object.assign({dataArray:s,class:o,columns:a,columnsDefault:n},c,{children:(0,t.jsx)("template",{slot:"rowTemplate",render:l.default})}))}}));