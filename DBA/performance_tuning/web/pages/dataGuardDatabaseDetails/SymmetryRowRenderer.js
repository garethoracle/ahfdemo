define(["require","exports","preact/jsx-runtime","../../components/openDetailsButton/OpenDetailsButton"],(function(require,e,s,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=(e,d)=>(console.log("rendering table"),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{children:e.item.data.member})}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{children:e.item.data.role})}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{children:e.item.data.instances})}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{children:e.item.data.threads})}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{children:e.item.data.files})}),(0,s.jsx)("td",{children:e.item.data.orls?(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-success",children:"TRUE"}):(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-danger",children:"FALSE"})}),(0,s.jsx)("td",{children:e.item.data.flashback?(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-success",children:"TRUE"}):(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-danger",children:"FALSE"})}),(0,s.jsx)("td",{children:e.item.data.datafile?(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-success",children:"TRUE"}):(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-danger",children:"FALSE"})}),(0,s.jsx)("td",{children:e.item.data.clusterware?(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-success",children:"TRUE"}):(0,s.jsx)("span",{class:"oj-badge oj-badge-subtle oj-badge-danger",children:"FALSE"})}),(0,s.jsx)("td",{children:(0,s.jsx)(a.default,{onojAction:()=>d(e.item.data.id)})})]}))}));