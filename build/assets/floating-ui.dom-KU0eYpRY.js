function N(t){return ht(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(ht(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ht(t){return t instanceof Node||t instanceof R(t).Node}function k(t){return t instanceof Element||t instanceof R(t).Element}function S(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function ut(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function U(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Et(t){return["table","td","th"].includes(N(t))}function rt(t){const e=ct(),n=C(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Tt(t){let e=I(t);for(;S(e)&&!et(e);){if(rt(e))return e;e=I(e)}return null}function ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(N(t))}function C(t){return R(t).getComputedStyle(t)}function nt(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if(N(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ut(t)&&t.host||F(t);return ut(e)?e.host:e}function pt(t){const e=I(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&U(e)?e:pt(e)}function q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=pt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=R(i);return r?e.concat(s,s.visualViewport||[],U(i)?i:[],s.frameElement&&n?q(s.frameElement):[]):e.concat(i,q(i,[],n))}const $=Math.min,V=Math.max,Q=Math.round,J=Math.floor,B=t=>({x:t,y:t}),Lt={left:"right",right:"left",bottom:"top",top:"bottom"},Pt={start:"end",end:"start"};function it(t,e,n){return V(t,$(e,n))}function K(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function G(t){return t.split("-")[1]}function wt(t){return t==="x"?"y":"x"}function lt(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(W(t))?"y":"x"}function ft(t){return wt(ot(t))}function St(t,e,n){n===void 0&&(n=!1);const o=G(t),i=ft(t),r=lt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Z(s)),[s,Z(s)]}function Dt(t){const e=Z(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Pt[e])}function kt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Ft(t,e,n,o){const i=G(t);let r=kt(W(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(st)))),r}function Z(t){return t.replace(/left|right|bottom|top/g,e=>Lt[e])}function Nt(t){return{top:0,right:0,bottom:0,left:0,...t}}function xt(t){return typeof t!="number"?Nt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function dt(t,e,n){let{reference:o,floating:i}=t;const r=ot(e),s=ft(e),c=lt(s),l=W(e),f=r==="y",m=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,h=o[c]/2-i[c]/2;let a;switch(l){case"top":a={x:m,y:o.y-i.height};break;case"bottom":a={x:m,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:d};break;case"left":a={x:o.x-i.width,y:d};break;default:a={x:o.x,y:o.y}}switch(G(e)){case"start":a[s]-=h*(n&&f?-1:1);break;case"end":a[s]+=h*(n&&f?-1:1);break}return a}const Bt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:d}=dt(f,o,l),h=o,a={},u=0;for(let p=0;p<c.length;p++){const{name:w,fn:g}=c[p],{x,y,data:b,reset:v}=await g({x:m,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});if(m=x??m,d=y??d,a={...a,[w]:{...a[w],...b}},v&&u<=50){u++,typeof v=="object"&&(v.placement&&(h=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:m,y:d}=dt(f,h,l)),p=-1;continue}}return{x:m,y:d,placement:h,strategy:i,middlewareData:a}};async function yt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:h=!1,padding:a=0}=K(e,t),u=xt(a),w=c[h?d==="floating"?"reference":"floating":d],g=tt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:m,strategy:l})),x=d==="floating"?{...s.floating,x:o,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=tt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:y,strategy:l}):x);return{top:(g.top-v.top+u.top)/b.y,bottom:(v.bottom-g.bottom+u.bottom)/b.y,left:(g.left-v.left+u.left)/b.x,right:(v.right-g.right+u.right)/b.x}}const Qt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:f,padding:m=0}=K(t,e)||{};if(f==null)return{};const d=xt(m),h={x:n,y:o},a=ft(i),u=lt(a),p=await s.getDimensions(f),w=a==="y",g=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[u]+r.reference[a]-h[a]-r.floating[u],v=h[a]-r.reference[a],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let T=E?E[y]:0;(!T||!await(s.isElement==null?void 0:s.isElement(E)))&&(T=c.floating[y]||r.floating[u]);const M=b/2-v/2,_=T/2-p[u]/2-1,j=$(d[g],_),X=$(d[x],_),O=j,Y=T-p[u]-X,A=T/2-p[u]/2+M,L=it(O,A,Y),P=!l.arrow&&G(i)!=null&&A!=L&&r.reference[u]/2-(A<O?j:X)-p[u]/2<0,D=P?A<O?A-O:A-Y:0;return{[a]:h[a]+D,data:{[a]:L,centerOffset:A-L-D,...P&&{alignmentOffset:D}},reset:P}}}),Zt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:p=!0,...w}=K(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=W(i),x=W(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(f.floating)),b=h||(x||!p?[Z(c)]:Dt(c));!h&&u!=="none"&&b.push(...Ft(c,p,u,y));const v=[c,...b],E=await yt(e,w),T=[];let M=((o=r.flip)==null?void 0:o.overflows)||[];if(m&&T.push(E[g]),d){const O=St(i,s,y);T.push(E[O[0]],E[O[1]])}if(M=[...M,{placement:i,overflows:T}],!T.every(O=>O<=0)){var _,j;const O=(((_=r.flip)==null?void 0:_.index)||0)+1,Y=v[O];if(Y)return{data:{index:O,overflows:M},reset:{placement:Y}};let A=(j=M.filter(L=>L.overflows[0]<=0).sort((L,P)=>L.overflows[1]-P.overflows[1])[0])==null?void 0:j.placement;if(!A)switch(a){case"bestFit":{var X;const L=(X=M.map(P=>[P.placement,P.overflows.filter(D=>D>0).reduce((D,Ct)=>D+Ct,0)]).sort((P,D)=>P[1]-D[1])[0])==null?void 0:X[0];L&&(A=L);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function Mt(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=W(n),c=G(n),l=ot(n)==="y",f=["left","top"].includes(s)?-1:1,m=r&&l?-1:1,d=K(e,t);let{mainAxis:h,crossAxis:a,alignmentAxis:u}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof u=="number"&&(a=c==="end"?u*-1:u),l?{x:a*m,y:h*f}:{x:h*f,y:a*m}}const te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await Mt(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},ee=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...l}=K(t,e),f={x:n,y:o},m=await yt(e,l),d=ot(W(i)),h=wt(d);let a=f[h],u=f[d];if(r){const w=h==="y"?"top":"left",g=h==="y"?"bottom":"right",x=a+m[w],y=a-m[g];a=it(x,a,y)}if(s){const w=d==="y"?"top":"left",g=d==="y"?"bottom":"right",x=u+m[w],y=u-m[g];u=it(x,u,y)}const p=c.fn({...e,[h]:a,[d]:u});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function vt(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=S(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=Q(n)!==r||Q(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function at(t){return k(t)?t:t.contextElement}function z(t){const e=at(t);if(!S(e))return B(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=vt(e);let s=(r?Q(n.width):n.width)/o,c=(r?Q(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Vt=B(0);function bt(t){const e=R(t);return!ct()||!e.visualViewport?Vt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Wt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==R(t)?!1:e}function H(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=at(t);let s=B(1);e&&(o?k(o)&&(s=z(o)):s=z(t));const c=Wt(r,n,o)?bt(r):B(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,m=i.width/s.x,d=i.height/s.y;if(r){const h=R(r),a=o&&k(o)?R(o):o;let u=h.frameElement;for(;u&&o&&a!==h;){const p=z(u),w=u.getBoundingClientRect(),g=C(u),x=w.left+(u.clientLeft+parseFloat(g.paddingLeft))*p.x,y=w.top+(u.clientTop+parseFloat(g.paddingTop))*p.y;l*=p.x,f*=p.y,m*=p.x,d*=p.y,l+=x,f+=y,u=R(u).frameElement}}return tt({width:m,height:d,x:l,y:f})}function Ht(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=S(n),r=F(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},c=B(1);const l=B(0);if((i||!i&&o!=="fixed")&&((N(n)!=="body"||U(r))&&(s=nt(n)),S(n))){const f=H(n);c=z(n),l.x=f.x+n.clientLeft,l.y=f.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-s.scrollLeft*c.x+l.x,y:e.y*c.y-s.scrollTop*c.y+l.y}}function zt(t){return Array.from(t.getClientRects())}function At(t){return H(F(t)).left+nt(t).scrollLeft}function It(t){const e=F(t),n=nt(t),o=t.ownerDocument.body,i=V(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=V(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+At(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(s+=V(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function $t(t,e){const n=R(t),o=F(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=ct();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function _t(t,e){const n=H(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=S(t)?z(t):B(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=o*r.y;return{width:s,height:c,x:l,y:f}}function mt(t,e,n){let o;if(e==="viewport")o=$t(t,n);else if(e==="document")o=It(F(t));else if(k(e))o=_t(e,n);else{const i=bt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function Rt(t,e){const n=I(t);return n===e||!k(n)||et(n)?!1:C(n).position==="fixed"||Rt(n,e)}function jt(t,e){const n=e.get(t);if(n)return n;let o=q(t,[],!1).filter(c=>k(c)&&N(c)!=="body"),i=null;const r=C(t).position==="fixed";let s=r?I(t):t;for(;k(s)&&!et(s);){const c=C(s),l=rt(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||U(s)&&!l&&Rt(t,s))?o=o.filter(m=>m!==s):i=c,s=I(s)}return e.set(t,o),o}function Xt(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?jt(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((f,m)=>{const d=mt(e,m,i);return f.top=V(d.top,f.top),f.right=$(d.right,f.right),f.bottom=$(d.bottom,f.bottom),f.left=V(d.left,f.left),f},mt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Yt(t){return vt(t)}function qt(t,e,n){const o=S(e),i=F(e),r=n==="fixed",s=H(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=B(0);if(o||!o&&!r)if((N(e)!=="body"||U(i))&&(c=nt(e)),o){const f=H(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else i&&(l.x=At(i));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}function gt(t,e){return!S(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ot(t,e){const n=R(t);if(!S(t))return n;let o=gt(t,e);for(;o&&Et(o)&&C(o).position==="static";)o=gt(o,e);return o&&(N(o)==="html"||N(o)==="body"&&C(o).position==="static"&&!rt(o))?n:o||Tt(t)||n}const Ut=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Ot,r=this.getDimensions;return{reference:qt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Kt(t){return C(t).direction==="rtl"}const Gt={convertOffsetParentRelativeRectToViewportRelativeRect:Ht,getDocumentElement:F,getClippingRect:Xt,getOffsetParent:Ot,getElementRects:Ut,getClientRects:zt,getDimensions:Yt,getScale:z,isElement:k,isRTL:Kt};function Jt(t,e){let n=null,o;const i=F(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:m,width:d,height:h}=t.getBoundingClientRect();if(c||e(),!d||!h)return;const a=J(m),u=J(i.clientWidth-(f+d)),p=J(i.clientHeight-(m+h)),w=J(f),x={rootMargin:-a+"px "+-u+"px "+-p+"px "+-w+"px",threshold:V(0,$(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return s(!0),r}function ne(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=at(t),m=i||r?[...f?q(f):[],...q(e)]:[];m.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const d=f&&c?Jt(f,n):null;let h=-1,a=null;s&&(a=new ResizeObserver(g=>{let[x]=g;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{a&&a.observe(e)})),n()}),f&&!l&&a.observe(f),a.observe(e));let u,p=l?H(t):null;l&&w();function w(){const g=H(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&n(),p=g,u=requestAnimationFrame(w)}return n(),()=>{m.forEach(g=>{i&&g.removeEventListener("scroll",n),r&&g.removeEventListener("resize",n)}),d&&d(),a&&a.disconnect(),a=null,l&&cancelAnimationFrame(u)}}const oe=(t,e,n)=>{const o=new Map,i={platform:Gt,...n},r={...i.platform,_c:o};return Bt(t,e,{...i,platform:r})};export{ne as a,S as b,oe as c,k as d,R as e,Zt as f,q as g,et as h,ut as i,I as j,C as k,Qt as l,te as o,ee as s};
