define(["require","exports","preact/jsx-runtime"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{children:e.item.data.attribute})}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{class:"attributeTableRow__target",children:e.item.data.target.map((e=>(0,t.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-info",children:e},e)))})}),(0,t.jsx)("td",{children:e.item.data.preformattedText?(0,t.jsx)("pre",{class:"command-block",children:e.item.data.value}):(0,t.jsx)("span",{children:e.item.data.value})})]})}));