var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,l){function c(e){try{i(n.next(e))}catch(e){l(e)}}function u(e){try{i(n.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,u)}i((n=n.apply(e,t||[])).next())}))},__rest=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};define(["require","exports","preact/jsx-runtime","preact/hooks","preact","preact/compat","plotly.js-dist","../../utils/stateUtils"],(function(require,e,t,r,n,o,l,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=(0,o.memo)((e=>{var{plotData:o,height:u,onInitialized:i,onUpdate:a,onDoubleClick:s,onPurge:y,onError:p,onClick:d,onHover:f,onSelected:v,onRestyle:_,onRelayout:m,onLegendClick:h,filterFunction:g,autosize:b=!0}=e,k=__rest(e,["plotData","height","onInitialized","onUpdate","onDoubleClick","onPurge","onError","onClick","onHover","onSelected","onRestyle","onRelayout","onLegendClick","filterFunction","autosize"]);const w=(0,r.useRef)(null),O=(0,r.useRef)(null),j=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(!O.current||!o)return;const e=(0,c.clone)(o);let t=g?g(e):e;t.layout&&b&&(t.layout.autosize=b);const r=()=>{O.current&&(j.current&&clearTimeout(j.current),j.current=setTimeout((()=>{O.current&&l.react(O.current,t.data,t.layout,t.config)}),400))};return __awaiter(void 0,void 0,void 0,(function*(){var e;O.current&&o&&(w.current=yield l.react(O.current,t.data,t.layout),i&&i(t.data,null!==(e=t.layout)&&void 0!==e?e:{},w.current),d&&w.current.on("plotly_click",d),s&&w.current.on("plotly_doubleclick",s),f&&w.current.on("plotly_hover",f),v&&w.current.on("plotly_selected",v),m&&w.current.on("plotly_relayout",m),h&&w.current.on("plotly_legendclick",h),_&&w.current.on("plotly_restyle",(e=>_(e,t))),b&&window.addEventListener("resize",r))})),()=>{O.current&&w.current&&(y&&y(w.current),d&&w.current.removeAllListeners("plotly_click"),s&&w.current.removeAllListeners("plotly_doubleclick"),f&&w.current.removeAllListeners("plotly_hover"),v&&w.current.removeAllListeners("plotly_selected"),m&&w.current.removeAllListeners("plotly_relayout"),h&&w.current.removeAllListeners("plotly_legendclick"),b&&window.removeEventListener("resize",r),j.current&&clearTimeout(j.current))}}),[o,g]),(0,r.useEffect)((()=>()=>{O.current&&(l.purge(O.current),y&&y(w.current))}),[]),(0,t.jsx)(n.Fragment,{children:(0,t.jsx)("div",Object.assign({},k,{ref:O}))})}))}));