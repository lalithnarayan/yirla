import{r as k,a4 as w,d as s,j as r}from"./index-sFzf4xgK.js";const F=k.forwardRef((c,t)=>{const{cardBordered:n}=w(),{children:l,className:i,clickable:h=!1,bodyClass:f,bordered:x=n||!1,header:e,headerClass:C,headerBorder:m=!0,headerExtra:a,footer:o,footerClass:j,footerBorder:p=!0,onClick:d,...u}=c,b=s("card",i,x?"card-border":"card-shadow",h&&"cursor-pointer user-select-none"),N=s("card-body",f),y=s("card-header",m&&"card-header-border",a&&"card-header-extra",C),v=s("card-footer",p&&"card-footer-border",j),B=()=>typeof e=="string"?r.jsx("h4",{children:e}):r.jsx(r.Fragment,{children:e}),g=E=>{d==null||d(E)};return r.jsxs("div",{ref:t,className:b,role:"presentation",onClick:g,...u,children:[e&&r.jsxs("div",{className:y,children:[B(),a&&r.jsx("span",{children:a})]}),r.jsx("div",{className:N,children:l}),o&&r.jsx("div",{className:v,children:o})]})});F.displayName="Card";export{F as C};