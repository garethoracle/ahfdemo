define(["require","exports","preact/jsx-runtime","preact","../BadgeNode","../commandNode/CommandNode","../TextNode"],(function(require,e,t,n,a,s,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=({node:e,tabIndex:r})=>(console.log(r),"badge"===e.type?(0,t.jsx)(a.default,{content:e.content,status:e.status}):"text"===e.type?(0,t.jsx)(d.default,{content:e.content}):"command"===e.type?(0,t.jsx)(s.default,{content:e.content}):"paragraph"===e.type?(0,t.jsx)("p",{class:"reset-paragraph-styles",tabIndex:r,children:e.content.map(((e,n)=>(0,t.jsx)(o,{node:e},n)))}):"paragraphs"===e.type?(0,t.jsx)(n.Fragment,{children:e.content.map(((e,n)=>(0,t.jsxs)("div",{class:"rendererNodes-paragraph__container",children:[(0,t.jsx)(o,{node:e,tabIndex:r},n)," "]})))}):"list"===e.type?(0,t.jsx)("ol",{children:e.content.map(((e,n)=>(0,t.jsx)("li",{class:"rendererNodeTypes-list__element",tabIndex:r,children:e.map(((e,n)=>(0,t.jsx)(o,{node:e},n)))},n)))}):null);e.default=o}));