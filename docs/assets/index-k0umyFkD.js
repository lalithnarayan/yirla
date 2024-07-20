import{r as a,a4 as $,j as h,d as u,a8 as g,a9 as b}from"./index-sFzf4xgK.js";import{a as w}from"./useControllableState-vYcyW9Gn.js";import{u as E,a as R}from"./context-_X_Ia2Rl.js";const S=a.createContext({}),V=S.Provider;S.Consumer;function A(){return a.useContext(S)}const k=a.forwardRef((l,y)=>{const{children:f,className:m,defaultValue:C,onChange:c=()=>{},selectionType:e="single",size:x,value:d,...n}=l,i=E(),o=R(),{controlSize:p}=$(),[t,r]=w({prop:d,defaultProp:C,onChange:c}),s=a.useCallback(v=>{r(v)},[r]),N=a.useCallback(v=>{e==="single"&&r(""),e==="multiple"&&r((j=[])=>j.filter(P=>P!==v))},[r,e]),I=a.useMemo(()=>{if(e==="single")return t&&typeof t=="string"?[t]:t&&Array.isArray(t)?t:[];if(e==="multiple")return t||[]},[e,t]);return h.jsx(V,{value:{value:I,onActive:s,onDeactivate:N,size:x||(o==null?void 0:o.size)||(i==null?void 0:i.size)||p,selectionType:e},children:h.jsx("div",{ref:y,className:u("segment",m),...n,children:f})})});k.displayName="Segment";const T=l=>Array.isArray(l)?l[0]:l,z=a.forwardRef((l,y)=>{const{size:f}=a.useContext(S),{children:m,className:C,disabled:c=!1,value:e,...x}=l,{value:d,onActive:n,onDeactivate:i,selectionType:o}=A(),p=d.includes(e),t=a.useCallback(()=>{let s="";switch(f){case b.LG:s=u(`h-${g.lg} md:px-8 py-2 px-4 text-base`);break;case b.SM:s=u(`h-${g.sm} px-3 py-2 text-sm`);break;case b.XS:s=u(`h-${g.xs} px-3 py-1 text-xs`);break;default:s=u(`h-${g.md} md:px-8 py-2 px-4`);break}return s},[f]),r=()=>{if(!c){if(p)o==="multiple"&&(i==null||i(e));else if(o==="single"&&(n==null||n([e])),o==="multiple"){const s=[...d,e];n==null||n(s)}}};return typeof m=="function"?T(m)({active:p,onSegmentItemClick:r,disabled:c,value:e,...x}):h.jsx("button",{ref:y,className:u("segment-item segment-item-default",p&&"segment-item-active",c&&"segment-item-disabled",t(),C),onClick:r,...x,children:m})});z.displayName="SegmentItem";const L=k;L.Item=z;export{L as S};