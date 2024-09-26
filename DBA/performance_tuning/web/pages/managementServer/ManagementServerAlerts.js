define(["require","exports","preact/jsx-runtime","preact/compat","preact/hooks","../../components/badgeNotification/BadgeNotification","../../components/tabBarTemplateRenderer/TabBarTemplate","ojs/ojarraydataprovider","../../router/SubRoute","./managementServerAlerts/ManagementServerAlertsTabularFormat","./managementServerAlerts/ManagementServerAlertsGraphs","ojs/ojnavigationlist"],(function(require,e,t,a,r,n,l,o,s,i,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=(0,a.memo)((({data:e})=>{var a,m;const c=(0,r.useMemo)((()=>e?(console.log(e),[{id:"managementServerAlertsTabularFormat",name:" Table",element:(0,t.jsx)(i.default,{data:e.records.openAlerts.records})},{id:"managementServerAlertsPlot",name:"Graph",element:(0,t.jsx)(d.default,{data:e.records})}]):[]),[e]),u=(0,r.useMemo)((()=>new o(c,{keyAttributes:"id"})),[c]),[p,v]=(0,r.useState)(c&&c.length>0?c[0].id:"");return(null===(a=null==e?void 0:e.dataAvailability)||void 0===a?void 0:a.available)?(0,t.jsxs)("section",{children:[(0,t.jsx)("p",{class:"oj-helper-text-align-center",children:"Alerts recorded in Management Server Across Hardware, Software and ADR."}),(0,t.jsx)("oj-tab-bar",{edge:"top",class:"oj-sm-margin-2x-bottom",data:u,selection:p,onselectionChanged:e=>{const t=e.detail.value;t&&v(t)},children:(0,t.jsx)("template",{slot:"itemTemplate",render:l.default})}),c.map((e=>(0,t.jsx)(s.default,{path:e.id,currentPath:p,element:e.element,unmountElement:!1})))]}):(0,t.jsx)("section",{children:(0,t.jsx)(n.default,{text:null!==(m=e.dataAvailability.message)&&void 0!==m?m:"Server Alerts Unavailable",status:"info"})})}))}));