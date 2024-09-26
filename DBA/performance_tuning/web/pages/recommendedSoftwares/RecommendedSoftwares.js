define(["require","exports","preact/jsx-runtime","preact/hooks","../../components/baseSectionContainer/BaseSectionContainer","../../hooks/useFetchSectionData","../../components/copyButton/CopyButton","../../components/table/Table","../../components/badgeNotification/BadgeNotification","../../components/sectionBottomContext/SectionBottomContext","./RecommendedSoftwaresRowRenderer","../../contexts/MetadataContext"],(function(require,e,t,o,a,n,s,l,i,d,c,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=()=>{var e,u,x,m;const{data:p,error:b,isLoading:f}=(0,n.default)("../js/jsons/insights/recommendedSoftwaresJson.js"),j=(0,o.useContext)(r.MetaDataContext);return(0,t.jsx)(a.default,{data:p,error:b,isLoading:f,children:(0,t.jsx)("section",{children:(null==p?void 0:p.context.dataAvailability.available)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{class:"oj-flex oj-sm-justify-content-space-between oj-sm-margin-3x-bottom oj-sm-align-items-center",children:["exadata"===(null==j?void 0:j.systemType.toLowerCase())?(0,t.jsx)("a",{href:"https://support.oracle.com/epmos/faces/DocumentDisplay?parent=exachkReport&sourceId=%20ENG%20SYSTEMS&id=888828.1",target:"_blank",children:"Exadata Database Machine and Exadata Storage Server Supported Versions (Doc ID 888828.1)"}):(0,t.jsx)("span",{}),(0,t.jsx)(s.default,{textToCopy:null==p?void 0:p.context.clipboardString})]}),(0,t.jsx)(l.default,{dataArray:null==p?void 0:p.context.table.records,columns:p.context.table.columns,columnsDefault:{sortable:"disabled"},scrollPolicy:"loadMoreOnScroll",class:"oj-sm-width-full table__scroll",children:(0,t.jsx)("template",{slot:"rowTemplate",render:c.default})}),(0,t.jsx)(d.default,{label:p.sectionMessage,badgeText:null!==(e=p.sectionTimeContext)&&void 0!==e?e:"-"})]}):(0,t.jsx)(i.default,{text:null!==(m=null===(x=null===(u=null==p?void 0:p.context)||void 0===u?void 0:u.dataAvailability)||void 0===x?void 0:x.message)&&void 0!==m?m:"Recommended Softwares section Unavailable",status:null==p?void 0:p.context.dataAvailability.status})})})}}));