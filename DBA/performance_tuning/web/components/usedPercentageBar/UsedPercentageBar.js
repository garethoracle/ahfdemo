var __rest=this&&this.__rest||function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]])}return t};define(["require","exports","preact/jsx-runtime","oj-c/progress-bar"],(function(require,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=e=>{var{class:t,value:s}=e,a=__rest(e,["class","value"]);let n="";return n=s>=90?"danger":s<90&&s>=50?"warning":"success",(0,r.jsx)("oj-c-progress-bar",Object.assign({},a,{value:s,class:`${t||""} ${n} usedPercentageBar`}))}}));