(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function U(){}function et(t){return t()}function H(){return Object.create(null)}function A(t){t.forEach(et)}function nt(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function E(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function w(){return g(" ")}function P(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t){return Array.from(t.childNodes)}function ft(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function J(t,e){t.value=e??""}let R;function S(t){R=t}const v=[],Q=[];let L=[];const X=[],ut=Promise.resolve();let Y=!1;function ct(){Y||(Y=!0,ut.then(rt))}function F(t){L.push(t)}const j=new Set;let O=0;function rt(){if(O!==0)return;const t=R;do{try{for(;O<v.length;){const e=v[O];O++,S(e),st(e.$$)}}catch(e){throw v.length=0,O=0,e}for(S(null),v.length=0,O=0;Q.length;)Q.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];j.has(n)||(j.add(n),n())}L.length=0}while(v.length);for(;X.length;)X.pop()();Y=!1,j.clear(),S(t)}function st(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function at(t){const e=[],n=[];L.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),L=e}const dt=new Set;function pt(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function ht(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||F(()=>{const s=t.$$.on_mount.map(et).filter(nt);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),o.forEach(F)}function mt(t,e){const n=t.$$;n.fragment!==null&&(at(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(v.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,n,r,i,o,s,d=[-1]){const _=R;S(t);const f=t.$$={fragment:null,ctx:[],props:o,update:U,not_equal:i,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:H(),dirty:d,skip_bound:!1,root:e.target||_.$$.root};s&&s(f.root);let b=!1;if(f.ctx=n?n(t,e.props||{},(c,p,...u)=>{const h=u.length?u[0]:p;return f.ctx&&i(f.ctx[c],f.ctx[c]=h)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](h),b&&_t(t,c)),p}):[],f.update(),b=!0,A(f.before_update),f.fragment=r?r(f.ctx):!1,e.target){if(e.hydrate){const c=lt(e.target);f.fragment&&f.fragment.l(c),c.forEach(x)}else f.fragment&&f.fragment.c();e.intro&&pt(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),rt()}S(_)}class yt{$destroy(){mt(this,1),this.$destroy=U}$on(e,n){if(!nt(n))return U;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Z(t){let e,n,r,i,o,s,d,_,f;function b(u,h){return u[2]?$t:gt}let c=b(t),p=c(t);return{c(){e=a("p"),n=g("The modified URL is: "),r=g(t[1]),i=w(),o=a("button"),p.c(),s=w(),d=a("button"),d.textContent="VISIT",k(d,"type","button")},m(u,h){E(u,e,h),l(e,n),l(e,r),E(u,i,h),E(u,o,h),p.m(o,null),E(u,s,h),E(u,d,h),_||(f=[P(o,"click",t[4]),P(d,"click",t[6])],_=!0)},p(u,h){h&2&&ft(r,u[1]),c!==(c=b(u))&&(p.d(1),p=c(u),p&&(p.c(),p.m(o,null)))},d(u){u&&x(e),u&&x(i),u&&x(o),p.d(),u&&x(s),u&&x(d),_=!1,A(f)}}}function gt(t){let e;return{c(){e=g("COPY")},m(n,r){E(n,e,r)},d(n){n&&x(e)}}}function $t(t){let e;return{c(){e=g("COPIED")},m(n,r){E(n,e,r)},d(n){n&&x(e)}}}function kt(t){let e,n,r,i,o,s,d,_,f,b,c,p,u,h,B,V,y,N,W,C,q,M,G,I,K,D,z,m=t[1]&&Z(t);return{c(){e=a("main"),n=g("The CIS API documentation can be found on "),r=a("a"),r.textContent="this page.",i=w(),o=a("br"),s=g(`
	You can find a link to the an archive of what the documentation looked like when this app was created `),d=a("a"),d.textContent="here",_=g(`.
	`),f=a("br"),b=g(`
	More information can be found in the Github repo for this app `),c=a("a"),c.textContent="here",p=g(`.
	`),u=a("br"),h=w(),B=a("br"),V=w(),y=a("form"),N=a("label"),N.textContent="Enter URL:",W=w(),C=a("input"),q=w(),M=a("button"),M.textContent="MODIFY URL",G=w(),I=a("button"),I.textContent="MODIFY W/ CASCADE",K=w(),m&&m.c(),k(r,"href","https://courses.illinois.edu/cisdocs/api"),k(d,"href","https://web.archive.org/web/20160517202637/http://courses.illinois.edu/cisdocs/api"),k(c,"href","https://github.com/lumirth/fix-cisapi/"),k(N,"for","originalUrl"),k(C,"type","text"),k(C,"id","originalUrl"),k(M,"type","submit"),k(I,"type","button")},m($,T){E($,e,T),l(e,n),l(e,r),l(e,i),l(e,o),l(e,s),l(e,d),l(e,_),l(e,f),l(e,b),l(e,c),l(e,p),l(e,u),l(e,h),l(e,B),l(e,V),l(e,y),l(y,N),l(y,W),l(y,C),J(C,t[0]),l(y,q),l(y,M),l(y,G),l(y,I),l(e,K),m&&m.m(e,null),D||(z=[P(C,"input",t[7]),P(I,"click",t[5]),P(y,"submit",t[3])],D=!0)},p($,[T]){T&1&&C.value!==$[0]&&J(C,$[0]),$[1]?m?m.p($,T):(m=Z($),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i:U,o:U,d($){$&&x(e),m&&m.d(),D=!1,A(z)}}}function tt(t,e=!1){if(!t)return"";t=t.replace("/cisapi","/cisapp/explorer");const n=t.indexOf("?");return n!==-1?t=t.slice(0,n)+".xml"+t.slice(n):t+=".xml",e&&(t+=(n!==-1?"&":"?")+"mode=cascade"),t}function wt(t,e,n){let r="",i="",o=!1;function s(c){c.preventDefault(),n(1,i=tt(r)),n(2,o=!1)}function d(){navigator.clipboard.writeText(i),n(2,o=!0)}function _(){n(1,i=tt(r,!0)),n(2,o=!1)}function f(){window.open(i,"_blank")}function b(){r=this.value,n(0,r)}return[r,i,o,s,d,_,f,b]}class xt extends yt{constructor(e){super(),bt(this,e,wt,kt,it,{})}}new xt({target:document.getElementById("app")});
