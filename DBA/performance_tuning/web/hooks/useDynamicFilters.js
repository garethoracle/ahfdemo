define(["require","exports","preact/hooks","../utils/common"],(function(require,e,t,r){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.filterReducer=e.FilterActions=void 0,function(e){e.SET_DYNAMIC_FILTER_FIELD="SET_DYNAMIC_FILTER_FIELD",e.SET_MULTIPLE_FILTER_FIELDS="SET_MULTIPLE_FILTER_FIELDS"}(a||(e.FilterActions=a={}));e.filterReducer=(e,{type:t,payload:r})=>{switch(t){case a.SET_DYNAMIC_FILTER_FIELD:return Object.assign(Object.assign({},e),{[r.fieldName]:r.value});case a.SET_MULTIPLE_FILTER_FIELDS:{const t={};for(const e of r)t[e.field]=e.value;return Object.assign(Object.assign({},e),t)}default:return e}};e.default=l=>{const[i,n]=(0,t.useReducer)(e.filterReducer,l),o=(0,t.useCallback)((e=>{var t,a;let l,n;return(null==i?void 0:i.startDate)&&(null==i?void 0:i.endDate)&&(l=null!==(t=r.dateTimeConverter.parse(i.startDate))&&void 0!==t?t:"",n=null!==(a=r.dateTimeConverter.parse(i.endDate))&&void 0!==a?a:""),e.filter((e=>{var t,a,o;let s;i.startDate&&i.endDate&&(s=null!==(t=r.dateTimeConverter.parse(e.timestamp))&&void 0!==t?t:"");const d=[];for(const t in i)t&&i[t]&&"endDate"!==t&&"startDate"!==t&&i[t]&&Array.isArray(i[t])&&(null===(a=i[t])||void 0===a?void 0:a.length)>0&&d.push((null===(o=i[t])||void 0===o?void 0:o.includes(null==e?void 0:e[t]))||!1);return d.every(Boolean)&&(!l||!n||!s||r.dateTimeConverter.compareISODates(s,l)>=0&&r.dateTimeConverter.compareISODates(n,s)>=0)}))}),[i]),s=(0,t.useCallback)(((e,t)=>{const r=e.detail.value;n({type:a.SET_DYNAMIC_FILTER_FIELD,payload:{fieldName:t,value:r}})}),[n]);return{filters:i,dispatchFilters:n,applyFilterToTable:o,onFilterChangeHandler:s}}}));