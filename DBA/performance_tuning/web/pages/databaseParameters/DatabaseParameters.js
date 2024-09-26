define(["require","exports","preact/jsx-runtime","preact/compat","preact/hooks","../../components/baseSectionContainer/BaseSectionContainer","../../hooks/useFetchSectionData","ojs/ojarraydataprovider","../../components/tabBarTemplateRenderer/TabBarTemplate","../../router/SubRoute","../../components/listParameters/ListParameters","../../components/badgeNotification/BadgeNotification","../../components/sectionBottomContext/SectionBottomContext","ojs/ojnavigationlist"],(function(require,t,e,a,n,o,i,l,s,d,r,u,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const m="databaseParametersHidden",b="databaseParametersNormal";t.default=(0,a.memo)((()=>{var t,a,v,x,p,h;const{data:j,error:f,isLoading:g}=(0,i.default)("../js/jsons/insights/dbParameterJson"),[C,P]=(0,n.useState)(b),y=(0,n.useMemo)((()=>new l([{id:b,name:"Normal"},{id:m,name:"Hidden"}],{keyAttributes:"id"})),[]);return(0,e.jsxs)(o.default,{data:j,isLoading:g,error:f,children:[(0,e.jsx)("oj-tab-bar",{data:y,onselectionChanged:t=>{P(t.detail.value)},selection:C,class:"oj-sm-margin-2x-bottom",edge:"top",children:(0,e.jsx)("template",{slot:"itemTemplate",render:s.default})}),(0,e.jsxs)("div",{children:[(0,e.jsx)(d.default,{currentPath:C,path:b,element:j&&j.context.normal.dataAvailability?(0,e.jsx)(r.default,{switchLabel:"Show different properites across databases",targetCount:null!==(t=null==j?void 0:j.context.normal.targetCount)&&void 0!==t?t:0,table:null==j?void 0:j.context.normal.table}):(0,e.jsx)(u.default,{text:null!==(a=null==j?void 0:j.context.normal.dataAvailability.message)&&void 0!==a?a:"Normal Parameters Unavailable",status:null==j?void 0:j.context.normal.dataAvailability.status}),unmountElement:!1}),(0,e.jsx)(d.default,{currentPath:C,path:m,element:j&&j.context.hidden.dataAvailability?(0,e.jsx)(r.default,{switchLabel:"Show different properites across databases",targetCount:null!==(v=null==j?void 0:j.context.hidden.targetCount)&&void 0!==v?v:0,table:null==j?void 0:j.context.hidden.table}):(0,e.jsx)(u.default,{text:null!==(x=null==j?void 0:j.context.hidden.dataAvailability.message)&&void 0!==x?x:"hidden Parameters Unavailable",status:null==j?void 0:j.context.hidden.dataAvailability.status}),unmountElement:!1})]}),(0,e.jsx)(c.default,{label:null!==(p=null==j?void 0:j.sectionMessage)&&void 0!==p?p:"",badgeText:null!==(h=null==j?void 0:j.sectionTimeContext)&&void 0!==h?h:"Unavailable"})]})}))}));