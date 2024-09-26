define(["require","exports","preact/jsx-runtime","preact/hooks","../../components/baseSectionContainer/BaseSectionContainer","../../hooks/useFetchSectionData","../../components/splitter/Splitter","ojs/ojarraytreedataprovider","ojs/ojkeyset","./DBMetricTreeViewRenderer","./DBMetricDetailsPanel","ojs/ojtreeview"],(function(require,e,t,n,o,a,r,s,l,i,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=()=>{const[e,c]=(0,n.useState)(new l.KeySetImpl([])),[u,p]=(0,n.useState)(new l.KeySetImpl(["hosts","databases"])),v=(0,n.useCallback)((e=>{var t,n,o;c(new l.KeySetImpl([null!==(o=null===(n=null===(t=e.context)||void 0===t?void 0:t.treeMenu[0])||void 0===n?void 0:n.id)&&void 0!==o?o:""]))}),[]),{data:j,isLoading:m,error:x}=(0,a.default)("../js/jsons/insights/dbMetricJson.js",v),f=(0,n.useMemo)((()=>{var e;return j?new s(null!==(e=null==j?void 0:j.context.treeMenu)&&void 0!==e?e:[],{keyAttributes:"id"}):new s([])}),[j]),[w,h]=(0,n.useState)({});(0,n.useEffect)((()=>{const e=e=>{const t=document.documentElement;t.scrollTop<108?h({}):h({top:t.scrollTop-100+"px",maxHeight:"calc(100vh - 44px - 38px)"})};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}));return(0,t.jsx)(o.default,{data:j,isLoading:m,error:x,children:j&&(0,t.jsx)(r.default,{leftPanel:(0,t.jsx)("oj-tree-view",{class:"dbMetric__tree-menu",style:w,data:f,expanded:u,selected:e,onexpandedChanged:e=>{p(e.detail.value)},onselectedChanged:e=>{c(e.detail.value)},selectionMode:"single","aria-label":"Tree View for CHA Navigation",children:(0,t.jsx)("template",{slot:"itemTemplate",render:i.default})}),rightPanel:(0,t.jsx)(d.default,{data:j,currentSelection:e,setKeysToExpand:p,setTreeMenuSelection:c})})})}}));