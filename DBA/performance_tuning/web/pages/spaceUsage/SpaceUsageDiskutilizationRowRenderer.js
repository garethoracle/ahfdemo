define(["require","exports","preact/jsx-runtime","../../components/usedPercentageBar/UsedPercentageBar"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.node})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.diagnosticLocation})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.tags})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.used})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.available})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.total})}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{class:"oj-flex oj-sm-flex-wrap-nowrap flex-gap oj-sm-align-items-center",children:[(0,t.jsx)(a.default,{value:e.item.data.usedPercentage}),e.item.data.usedPercentage,"%"]})})]})}));