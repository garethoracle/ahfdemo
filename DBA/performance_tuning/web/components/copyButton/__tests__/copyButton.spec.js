var __awaiter=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{s(n.next(e))}catch(e){r(e)}}function c(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))};define(["require","exports","preact/jsx-runtime","@testing-library/preact","../CopyButton","@testing-library/jest-dom"],(function(require,e,t,o,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i="oj-ux-ico-check",r="oj-ux-ico-copy";describe("Copy Button Component",(()=>{let e,a,c;beforeAll((()=>{Object.assign(navigator,{clipboard:{writeText:jest.fn().mockImplementation((()=>Promise.resolve()))}})})),beforeEach((()=>{c="Text in the clipboard";const{container:i}=(0,o.render)((0,t.jsx)(n.default,{textToCopy:c}));if(e=i,a=e.querySelector("oj-button"),!a)throw Error("CopyButton Component wasn't found")})),test("Default icon",(()=>{const t=e.querySelector(`.${r}`);expect(t).toBeTruthy(),expect(t).toBeInTheDocument()})),test("Copy to clipboard",(()=>__awaiter(void 0,void 0,void 0,(function*(){if(!a)throw Error("CopyButton Component wasn't found");const e=new CustomEvent("ojAction");a.dispatchEvent(e),expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Text in the clipboard"),yield expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1)})))),test("Change icon after copy",(()=>__awaiter(void 0,void 0,void 0,(function*(){jest.useFakeTimers();const t=e.querySelector("[slot='startIcon']");expect(t).toHaveClass(r);const n=new CustomEvent("ojAction");null==a||a.dispatchEvent(n),yield(0,o.waitFor)((()=>{expect(navigator.clipboard.writeText).toHaveBeenCalledWith(c)})),expect(t).toHaveClass(i),yield jest.advanceTimersByTimeAsync(1e3),expect(t).toHaveClass(r),expect(t).not.toHaveClass(i),jest.useRealTimers()})))),afterAll((()=>{jest.resetAllMocks()}))}))}));