import{r as e}from"./index-sFzf4xgK.js";import{u as I,f as L,a as U,P as b,L as K}from"./motion-JMywUYCu.js";function P(){const n=e.useRef(!1);return I(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function O(){const n=P(),[s,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(s+1)},[s]);return[e.useCallback(()=>L.postRender(r),[r]),s]}class B extends e.Component{getSnapshotBeforeUpdate(s){const t=this.props.childRef.current;if(t&&s.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function S({children:n,isPresent:s}){const t=e.useId(),r=e.useRef(null),p=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:d,height:l,top:f,left:h}=p.current;if(s||!r.current||!d||!l)return;r.current.dataset.motionPopId=t;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${l}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[s]),e.createElement(B,{isPresent:s,childRef:r,sizeRef:p},e.cloneElement(n,{ref:r}))}const M=({children:n,initial:s,isPresent:t,onExitComplete:r,custom:p,presenceAffectsLayout:d,mode:l})=>{const f=U(T),h=e.useId(),a=e.useMemo(()=>({id:h,initial:s,isPresent:t,custom:p,onExitComplete:o=>{f.set(o,!0);for(const u of f.values())if(!u)return;r&&r()},register:o=>(f.set(o,!1),()=>f.delete(o))}),d?void 0:[t]);return e.useMemo(()=>{f.forEach((o,u)=>f.set(u,!1))},[t]),e.useEffect(()=>{!t&&!f.size&&r&&r()},[t]),l==="popLayout"&&(n=e.createElement(S,{isPresent:t},n)),e.createElement(b.Provider,{value:a},n)};function T(){return new Map}function D(n){return e.useEffect(()=>()=>n(),[])}const m=n=>n.key||"";function G(n,s){n.forEach(t=>{const r=m(t);s.set(r,t)})}function H(n){const s=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&s.push(t)}),s}const _=({children:n,custom:s,initial:t=!0,onExitComplete:r,exitBeforeEnter:p,presenceAffectsLayout:d=!0,mode:l="sync"})=>{const f=e.useContext(K).forceRender||O()[0],h=P(),a=H(n);let o=a;const u=e.useRef(new Map).current,C=e.useRef(o),E=e.useRef(new Map).current,x=e.useRef(!0);if(I(()=>{x.current=!1,G(a,E),C.current=o}),D(()=>{x.current=!0,E.clear(),u.clear()}),x.current)return e.createElement(e.Fragment,null,o.map(i=>e.createElement(M,{key:m(i),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:d,mode:l},i)));o=[...o];const g=C.current.map(m),w=a.map(m),z=g.length;for(let i=0;i<z;i++){const c=g[i];w.indexOf(c)===-1&&!u.has(c)&&u.set(c,void 0)}return l==="wait"&&u.size&&(o=[]),u.forEach((i,c)=>{if(w.indexOf(c)!==-1)return;const y=E.get(c);if(!y)return;const v=g.indexOf(c);let R=i;if(!R){const k=()=>{E.delete(c),u.delete(c);const F=C.current.findIndex($=>$.key===c);if(C.current.splice(F,1),!u.size){if(C.current=a,h.current===!1)return;f(),r&&r()}};R=e.createElement(M,{key:m(y),isPresent:!1,onExitComplete:k,custom:s,presenceAffectsLayout:d,mode:l},y),u.set(c,R)}o.splice(v,0,R)}),o=o.map(i=>{const c=i.key;return u.has(c)?i:e.createElement(M,{key:m(i),isPresent:!0,presenceAffectsLayout:d,mode:l},i)}),e.createElement(e.Fragment,null,u.size?o:o.map(i=>e.cloneElement(i)))};export{_ as A};