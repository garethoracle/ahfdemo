var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(a,r){function u(t){try{s(o.next(t))}catch(t){r(t)}}function i(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,i)}s((o=o.apply(t,e||[])).next())}))};define(["require","exports","preact/hooks","../utils/common"],(function(require,t,e,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,o){const[a,r]=(0,e.useState)(!0),[u,i]=(0,e.useState)(null),[s,c]=(0,e.useState)(null);return(0,e.useEffect)((()=>{(()=>{__awaiter(this,void 0,void 0,(function*(){try{r(!0);const e=yield(0,n.loadModule)(t);if(!(null==e?void 0:e.default))throw Error("It should be a default export.");o&&o(e.default),i(e.default),r(!1)}catch(t){r(!1),c(t.message)}}))})()}),[t,i,c,r]),{isLoading:a,setIsLoading:r,data:u,setData:i,error:s,setError:c}}}));