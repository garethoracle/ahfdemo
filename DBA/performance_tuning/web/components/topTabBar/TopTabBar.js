define(["require","exports","preact/jsx-runtime","preact","preact/hooks","ojs/ojmutablearraydataprovider","ojs/ojconveyorbelt","ojs/ojnavigationlist"],(function(require,e,a,o,t,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=({topTabBarData:e,activeTab:n,onActiveTabChange:r,onCloseTab:i})=>{const c=(0,t.useMemo)((()=>new s([],{keyAttributes:"id"})),[]),l=(0,t.useMemo)((()=>e=>(0,a.jsxs)("li",{class:"oj-sm-padding-3x-horizontal topTabBar__list oj-sm-margin-2x-bottom",children:[(0,a.jsxs)("a",{href:"#",children:["home"===e.data.id&&(0,a.jsx)("span",{class:"oj-ux-ico-home topTabBar__tabIcon"}),e.data.name]}),"home"!==e.data.id&&(0,a.jsx)("button",{class:"oj-ux-ico-close oj-clickable-icon topTabBar__remove-btn oj-sm-align-self-center",onClick:()=>i(e.data.id)})]},e.data.id)),[i]);return(0,t.useEffect)((()=>{c.data=e}),[e]),(0,a.jsx)(o.Fragment,{children:(0,a.jsx)("oj-conveyor-belt",{children:e.length&&(0,a.jsx)("oj-tab-bar",{class:"oj-sm-condense oj-sm-margin-2x-horizontal topTabBar",id:"topTabBar",selection:n,edge:"top",onselectionChanged:r,truncation:"progressive",data:c,children:(0,a.jsx)("template",{slot:"itemTemplate",render:l})})})})}}));