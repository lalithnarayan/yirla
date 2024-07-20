import{r as o,j as l,d as y,a6 as I,as as A}from"./index-sFzf4xgK.js";import{c as W}from"./chainedFunction-ltcSYACe.js";import{m as D}from"./motion-JMywUYCu.js";import{u as B,S as _}from"./StatusIcon-L39cXky5.js";import{C as O}from"./CloseButton-Lwp70ThL.js";const z=({offsetX:e,offsetY:t,placement:a,transitionType:n})=>n==="fade"?H(e,t)[a]:F(e,t)[a],b={initial:{opacity:0,transform:"scale(0.75)"},animate:{transform:"scale(1)",opacity:1},exit:{opacity:0,transform:"scale(0.75)"}},h={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},F=(e,t)=>({"top-end":{default:{top:t,right:e},variants:{...b}},"top-start":{default:{top:t,left:e},variants:{...b}},"top-center":{default:{top:t,left:"50%",transform:"translateX(-50%)"},variants:{...b}},"bottom-end":{default:{bottom:t,right:e},variants:{...b}},"bottom-start":{default:{bottom:t,left:e},variants:{...b}},"bottom-center":{default:{bottom:t,left:"50%",transform:"translateX(-50%)"},variants:{...b}}}),H=(e,t)=>({"top-end":{default:{top:t,right:e},variants:{...h}},"top-start":{default:{top:t,left:e},variants:{...h}},"top-center":{default:{top:t,left:"50%",transform:"translateX(-50%)"},variants:{...h}},"bottom-end":{default:{bottom:t,right:e},variants:{...h}},"bottom-start":{default:{bottom:t,left:e},variants:{...h}},"bottom-center":{default:{bottom:t,left:"50%",transform:"translateX(-50%)"},variants:{...h}}}),K=e=>{const[t,a]=o.useState([]),n=o.useCallback(s=>(typeof s>"u"&&t.length&&(s=t[t.length-1].key),s),[t]),u=o.useCallback(s=>{const r=e||"_"+Math.random().toString(36).substr(2,12);return a([...t,{key:r,visible:!0,node:s}]),r},[t,e]),i=o.useCallback(()=>{a(t.map(s=>({...s,visible:!1}))),setTimeout(()=>{a([])},50)},[t]),m=o.useCallback(s=>{a(t.map(r=>(r.key===n(s)&&(r.visible=!1),r))),setTimeout(()=>{a(t.filter(r=>r.visible))},50)},[t,n]);return{messages:t,push:u,removeAll:i,remove:m}},j=o.forwardRef((e,t)=>{const a=o.useRef(null),{transitionType:n="scale",placement:u=I.TOP_END,offsetX:i=30,offsetY:m=30,messageKey:s,block:r=!1,callback:p,...d}=e,{push:f,removeAll:C,remove:N,messages:E}=K(s);o.useImperativeHandle(t,()=>({root:a.current,push:f,removeAll:C,remove:N}));const v=z({offsetX:i,offsetY:m,placement:u,transitionType:n}),x={triggerByToast:!0,...d},k=E.map(c=>{var T,P,M,R;return l.jsx(D.div,{className:"toast-wrapper",initial:v.variants.initial,variants:v.variants,animate:c.visible?"animate":"exit",transition:{duration:.15,type:"tween"},children:o.cloneElement(c.node,{...x,ref:t,onClose:W((P=(T=c.node)==null?void 0:T.props)==null?void 0:P.onClose,()=>N(c.key)),className:y((R=(M=c.node)==null?void 0:M.props)==null?void 0:R.className)})},c.key)});return l.jsx("div",{style:v.default,...d,ref:c=>{a.current=c,p==null||p(c)},className:y("toast",r&&"w-full"),children:k})});j.getInstance=e=>{const{wrapper:t,...a}=e,n=o.createRef(),u=(typeof t=="function"?t():t)||document.body;return new Promise(i=>{const m=()=>{i([n,r])};function s(p){const d=document.createElement("div");u.appendChild(d);const f=A(d);return f.render(p),f}const{unmount:r}=s(l.jsx(j,{...a,ref:n,callback:m}))})};j.displayName="ToastWrapper";const L={placement:I.TOP_END,offsetX:30,offsetY:30,transitionType:"scale",block:!1},S="default",g=new Map;function q(e){if(/\top\b/.test(e))return"top-full";if(/\bottom\b/.test(e))return"bottom-full"}async function G(e,t){const[a]=await j.getInstance(t);return g.set(e||S,a),a}function J(e){return g.size===0?null:g.get(e||S)}const w=e=>w.push(e);w.push=(e,t=L)=>{let a=t.placement;t.block&&(a=q(t.placement));const n=J(a);return n!=null&&n.current?n.current.push(e):G(a??"",t).then(u=>{var i;return(i=u.current)==null?void 0:i.push(e)})};w.remove=e=>{g.forEach(t=>t.current.remove(e))};w.removeAll=()=>{g.forEach(e=>e.current.removeAll())};const Q=o.forwardRef((e,t)=>{const{className:a,children:n,closable:u=!1,customIcon:i,duration:m=3e3,onClose:s,style:r,title:p,triggerByToast:d,type:f,width:C=350,...N}=e,[E,v]=o.useState("show"),{clear:x}=B(s,m,m>0),k=o.useCallback(T=>{v("hiding"),s==null||s(T),x(),d||setTimeout(()=>{v("hide")},400)},[s,x,d]),c=y("notification",a);return E==="hide"?null:l.jsxs("div",{ref:t,...N,className:c,style:{width:C,...r},children:[l.jsxs("div",{className:y("notification-content",!n&&"no-child"),children:[f&&!i?l.jsx("div",{className:"mr-3",children:l.jsx(_,{type:f})}):null,i&&l.jsx("div",{className:"mr-3",children:i}),l.jsxs("div",{className:"mr-4",children:[p&&l.jsx("div",{className:y("notification-title",n&&"mb-1"),children:p}),l.jsx("div",{className:"notification-description",children:n})]})]}),u&&l.jsx(O,{className:"notification-close",defaultStyle:!1,absolute:!0,onClick:k})]})});Q.displayName="Notification";export{Q as N,w as t};