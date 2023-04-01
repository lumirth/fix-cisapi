(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function q(){}function ye(e){return e()}function fe(){return Object.create(null)}function S(e){e.forEach(ye)}function we(e){return typeof e=="function"}function Ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ce(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function b(){return T(" ")}function I(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=t??""}function Ee(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let ie;function F(e){ie=e}const j=[],pe=[];let N=[];const de=[],Le=Promise.resolve();let te=!1;function Te(){te||(te=!0,Le.then(ke))}function ne(e){N.push(e)}const ee=new Set;let M=0;function ke(){if(M!==0)return;const e=ie;do{try{for(;M<j.length;){const t=j[M];M++,F(t),Re(t.$$)}}catch(t){throw j.length=0,M=0,t}for(F(null),j.length=0,M=0;pe.length;)pe.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];ee.has(n)||(ee.add(n),n())}N.length=0}while(j.length);for(;de.length;)de.pop()();te=!1,ee.clear(),F(e)}function Re(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function Ie(e){const t=[],n=[];N.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),N=t}const Pe=new Set;function Oe(e,t){e&&e.i&&(Pe.delete(e),e.i(t))}function Ae(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||ne(()=>{const u=e.$$.on_mount.map(ye).filter(we);e.$$.on_destroy?e.$$.on_destroy.push(...u):S(u),e.$$.on_mount=[]}),o.forEach(ne)}function De(e,t){const n=e.$$;n.fragment!==null&&(Ie(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(j.push(e),Te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,r,o,u,d=[-1]){const _=ie;F(e);const p=e.$$={fragment:null,ctx:[],props:o,update:q,not_equal:r,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:fe(),dirty:d,skip_bound:!1,root:t.target||_.$$.root};u&&u(p.root);let w=!1;if(p.ctx=n?n(e,t.props||{},(a,c,...l)=>{const h=l.length?l[0]:c;return p.ctx&&r(p.ctx[a],p.ctx[a]=h)&&(!p.skip_bound&&p.bound[a]&&p.bound[a](h),w&&Se(e,a)),c}):[],p.update(),w=!0,S(p.before_update),p.fragment=i?i(p.ctx):!1,t.target){if(t.hydrate){const a=ve(t.target);p.fragment&&p.fragment.l(a),a.forEach(y)}else p.fragment&&p.fragment.c();t.intro&&Oe(e.$$.fragment),Ae(e,t.target,t.anchor,t.customElement),ke()}F(_)}class Me{$destroy(){De(this,1),this.$destroy=q}$on(t,n){if(!we(n))return q;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function je(e,t=!1){if(typeof e!="string")throw new Error('The "url" parameter must be a string.');if(e.length===0)throw new Error('The "url" parameter must not be an empty string.');try{new URL(e)}catch{throw new Error('The "url" parameter must be a valid URL.')}if(e=e.replace(/^http:\/\//,"https://"),!/^https?:\/\/courses\.illinois\.edu\/cisapi\//.test(e))throw new Error('The "url" parameter must be a UIUC CIS API URL (like http(s)://courses.illinois.edu/cisapi/)."');if(/^https:\/\/courses\.illinois\.edu\/cisapi\/schedule\/courses\?.*$/.test(e)&&(e=e.replace(/§/g,"&sect")),e=e.replace("/cisapi","/cisapp/explorer"),!e.includes(".xml")){const[r,o]=e.split("?");e=o?`${r}.xml?${o}`:`${r}.xml`}return t&&(e.includes("mode=")?e=e.replace(/mode=[^&]*/,"mode=cascade"):e+=e.includes("?")?"&mode=cascade":"?mode=cascade"),e}function Ne(e){if(typeof e!="string")throw new Error('The "url" parameter must be a string.');if(e.length===0)throw new Error('The "url" parameter must not be an empty string.');try{new URL(e)}catch{throw new Error('The "url" parameter must be a valid URL.')}if(e=e.replace(/^http:\/\//,"https://"),e=e.toLowerCase(),!/^https?:\/\/courses\.illinois\.edu\/cisapp\/explorer\/schedule/.test(e))throw new Error('The "url" parameter must be a UIUC CIS API Explorer course URL (like https://courses.illinois.edu/cisapp/explorer/schedule/2012/spring/AAS/120.xml).');if(e=e.split("?")[0],!/^https:\/\/courses\.illinois\.edu\/cisapp\/explorer\/schedule\/\d{4}\/(spring|summer|fall|winter)\/[a-z]{2,5}\/\d{3}\.xml$/.test(e))throw new Error('The "url" parameter must be a UIUC CIS API Explorer course URL (like /:year/:term/:department/:course.xml).');const i=e.split("/")[8];return e=e.replace(i,i.toUpperCase()),e=e.replace("/cisapp/explorer","/search"),e=e.replace(".xml",""),e}var he={fixDocumentationURL:je,convertCourseURL:Ne};function me(e){let t,n;return{c(){t=m("p"),n=T(e[0])},m(i,r){k(i,t,r),s(t,n)},p(i,r){r&1&&K(n,i[0])},d(i){i&&y(t)}}}function be(e){let t,n,i,r,o,u,d,_,p;function w(l,h){return l[4]?Ve:$e}let a=w(e),c=a(e);return{c(){t=m("p"),n=T("The modified URL is: "),i=T(e[3]),r=b(),o=m("button"),c.c(),u=b(),d=m("button"),d.textContent="VISIT",f(o,"class","button"),f(d,"class","button"),f(d,"type","button")},m(l,h){k(l,t,h),s(t,n),s(t,i),k(l,r,h),k(l,o,h),c.m(o,null),k(l,u,h),k(l,d,h),_||(p=[I(o,"click",e[9]),I(d,"click",e[11])],_=!0)},p(l,h){h&8&&K(i,l[3]),a!==(a=w(l))&&(c.d(1),c=a(l),c&&(c.c(),c.m(o,null)))},d(l){l&&y(t),l&&y(r),l&&y(o),c.d(),l&&y(u),l&&y(d),_=!1,S(p)}}}function $e(e){let t;return{c(){t=T("COPY")},m(n,i){k(n,t,i)},d(n){n&&y(t)}}}function Ve(e){let t;return{c(){t=T("COPIED")},m(n,i){k(n,t,i)},d(n){n&&y(t)}}}function _e(e){let t,n;return{c(){t=m("p"),n=T(e[1])},m(i,r){k(i,t,r),s(t,n)},p(i,r){r&2&&K(n,i[1])},d(i){i&&y(t)}}}function ge(e){let t,n,i,r,o,u,d,_,p;function w(l,h){return l[7]?He:Ye}let a=w(e),c=a(e);return{c(){t=m("p"),n=T("The converted URL is: "),i=T(e[6]),r=b(),o=m("button"),c.c(),u=b(),d=m("button"),d.textContent="VISIT",f(o,"class","button"),f(d,"class","button"),f(d,"type","button")},m(l,h){k(l,t,h),s(t,n),s(t,i),k(l,r,h),k(l,o,h),c.m(o,null),k(l,u,h),k(l,d,h),_||(p=[I(o,"click",e[13]),I(d,"click",e[14])],_=!0)},p(l,h){h&64&&K(i,l[6]),a!==(a=w(l))&&(c.d(1),c=a(l),c&&(c.c(),c.m(o,null)))},d(l){l&&y(t),l&&y(r),l&&y(o),c.d(),l&&y(u),l&&y(d),_=!1,S(p)}}}function Ye(e){let t;return{c(){t=T("COPY")},m(n,i){k(n,t,i)},d(n){n&&y(t)}}}function He(e){let t;return{c(){t=T("COPIED")},m(n,i){k(n,t,i)},d(n){n&&y(t)}}}function Fe(e){let t,n,i,r,o,u,d,_,p,w,a,c,l,h,B,P,W,$,V,Y,O,L,D,re,le,se,x,R,oe,H,ce,X,J,Q,ue,z,Z,ae,U=e[0]&&me(e),C=e[3]&&be(e),v=e[1]&&_e(e),E=e[6]&&ge(e);return{c(){t=m("main"),n=m("ul"),n.innerHTML=`<li class="svelte-1aj5hfe">More information can be found in the Github repo for this app at
      <a class="link link--gasping" href="https://github.com/lumirth/cisurls-web/">lumirth/cisurls-web</a>.</li> 
    <li class="svelte-1aj5hfe">The UIUC CIS API documentation can be found on
      <a class="link link--gasping" href="https://courses.illinois.edu/cisdocs/api">courses.illinois.edu/cisdocs/api.</a></li> 
    <li class="svelte-1aj5hfe">You can find a link to the an archive of what the documentation looked
      like when this app was created at
      <a class="link link--gasping" href="https://web.archive.org/web/20160517202637/courses.illinois.edu/cisdocs/api">web.archive.org</a>.</li> 
    <li class="svelte-1aj5hfe">The XML schema for the UIUC CIS API can be found at
      <a class="link link--gasping" href="https://mirth.cc/cisurls-web/cisapi.xsd">/cisapi.xsd.</a> This schema cannot be found elsewhere, as the link in the documentation is
      broken.</li>`,i=b(),r=m("hr"),o=b(),u=m("form"),d=m("label"),d.innerHTML=`This tool converts documentation <code class="code--inline">cisapi</code> URLs to functional
      <code class="code--inline">cisapp/explorer</code> URLs:`,_=b(),p=m("br"),w=b(),a=m("div"),c=m("input"),l=b(),h=m("button"),h.textContent="MODIFY URL",B=b(),P=m("button"),P.textContent="MODIFY W/ CASCADE",W=b(),U&&U.c(),$=b(),C&&C.c(),V=b(),Y=m("hr"),O=b(),L=m("form"),D=m("label"),D.innerHTML=`This tool converts <code class="code--inline">cisapp/explorer/schedule</code> course URLs to
      <code class="code--inline">search</code> URLs:`,re=b(),le=m("br"),se=b(),x=m("div"),R=m("input"),oe=b(),H=m("button"),H.textContent="CONVERT COURSE URL",ce=b(),v&&v.c(),X=b(),E&&E.c(),J=b(),Q=m("hr"),ue=b(),z=m("p"),z.innerHTML='A <a class="link link--gasping" href="https://mirth.cc">lumirth</a> tool.',f(n,"class","svelte-1aj5hfe"),f(r,"class","hori-line--with-margin"),f(d,"for","originalUrl"),f(d,"class","svelte-1aj5hfe"),f(c,"class","input-text-line"),f(c,"type","text"),f(c,"id","originalUrl"),f(c,"placeholder","ENTER DOCUMENTATION URL"),f(h,"class","button"),f(h,"type","submit"),f(P,"class","button"),f(P,"type","button"),f(a,"class","input-and-buttons-container svelte-1aj5hfe"),f(Y,"class","hori-line--with-margin"),f(D,"for","originalUrl"),f(D,"class","svelte-1aj5hfe"),f(R,"class","input-text-line"),f(R,"type","text"),f(R,"id","originalUrlConv"),f(R,"placeholder","ENTER COURSE URL"),f(H,"class","button"),f(H,"type","submit"),f(x,"class","input-and-buttons-container svelte-1aj5hfe"),f(Q,"class","hori-line--with-margin"),Ee(z,"text-align","center"),f(t,"class","page__content")},m(g,A){k(g,t,A),s(t,n),s(t,i),s(t,r),s(t,o),s(t,u),s(u,d),s(u,_),s(u,p),s(u,w),s(u,a),s(a,c),G(c,e[2]),s(a,l),s(a,h),s(a,B),s(a,P),s(t,W),U&&U.m(t,null),s(t,$),C&&C.m(t,null),s(t,V),s(t,Y),s(t,O),s(t,L),s(L,D),s(L,re),s(L,le),s(L,se),s(L,x),s(x,R),G(R,e[5]),s(x,oe),s(x,H),s(t,ce),v&&v.m(t,null),s(t,X),E&&E.m(t,null),s(t,J),s(t,Q),s(t,ue),s(t,z),Z||(ae=[I(c,"input",e[15]),I(P,"click",e[10]),I(u,"submit",e[8]),I(R,"input",e[16]),I(L,"submit",e[12])],Z=!0)},p(g,[A]){A&4&&c.value!==g[2]&&G(c,g[2]),g[0]?U?U.p(g,A):(U=me(g),U.c(),U.m(t,$)):U&&(U.d(1),U=null),g[3]?C?C.p(g,A):(C=be(g),C.c(),C.m(t,V)):C&&(C.d(1),C=null),A&32&&R.value!==g[5]&&G(R,g[5]),g[1]?v?v.p(g,A):(v=_e(g),v.c(),v.m(t,X)):v&&(v.d(1),v=null),g[6]?E?E.p(g,A):(E=ge(g),E.c(),E.m(t,J)):E&&(E.d(1),E=null)},i:q,o:q,d(g){g&&y(t),U&&U.d(),C&&C.d(),v&&v.d(),E&&E.d(),Z=!1,S(ae)}}}function qe(e,t,n){let i,r;function o(O,L=!1){try{return n(0,i=""),he.fixDocumentationURL(O,L)}catch(D){return n(0,i=D.message),""}}let u="",d="",_=!1,p="",w="",a=!1;function c(O){O.preventDefault(),n(3,d=o(u)),n(4,_=!1)}function l(){navigator.clipboard.writeText(d),n(4,_=!0)}function h(){n(3,d=o(u,!0)),n(4,_=!1)}function B(){window.open(d,"_blank")}async function P(O){O.preventDefault();try{n(1,r=""),n(6,w=await he.convertCourseURL(p))}catch(L){n(1,r=L.message),n(6,w="")}n(7,a=!1)}function W(){navigator.clipboard.writeText(w),n(7,a=!0)}function $(){window.open(w,"_blank")}function V(){u=this.value,n(2,u)}function Y(){p=this.value,n(5,p)}return[i,r,u,d,_,p,w,a,c,l,h,B,P,W,$,V,Y]}class Be extends Me{constructor(t){super(),xe(this,t,qe,Fe,Ue,{})}}new Be({target:document.getElementById("app")});
