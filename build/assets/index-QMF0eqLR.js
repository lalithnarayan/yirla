import{j as e,r as d,G as l}from"./index-sFzf4xgK.js";import{D as m}from"./DemoLayout-6YSyujB2.js";import{S as r}from"./Skeleton-yp1ZlUZw.js";import{S as c}from"./Switcher-O88LI1YU.js";import{A as h}from"./index-l28G_51M.js";import"./AdaptableCard-ZmpuYt9J.js";import"./Card-0NcWSoxi.js";import"./Views-cMR82yL4.js";import"./Affix-RKCuz81n.js";import"./Button-7VCVZJfX.js";import"./context-_X_Ia2Rl.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";import"./index.esm-a15joBQq.js";import"./SyntaxHighlighter-TNfh7BjM.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";import"./index-mu0NPuvO.js";import"./index-lwixXq3m.js";import"./DemoComponentApi-G_FgO4cB.js";import"./index-U7R5GIaq.js";import"./index.esm-iiyI-toU.js";import"./useMergeRef-Rt_Crb27.js";const i=t=>{const{showAvatar:o=!0,avatarProps:a,titleProps:n,textProps:p}=t;return e.jsxs("div",{className:"flex flex-auto items-center gap-2",children:[o&&e.jsx("div",{children:e.jsx(r,{variant:"circle",...a})}),e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx(r,{width:"40%",...n}),e.jsx(r,{width:"20%",...p})]})]})},x=()=>e.jsx(i,{avatarProps:{width:45,height:45}}),f=()=>{const[t,o]=d.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-4 gap-2",children:[e.jsx("span",{children:"Loading State: "}),e.jsx(c,{checked:t,onChange:a=>o(!a)})]}),e.jsx(l,{loading:t,customLoader:e.jsx(i,{titleProps:{width:130},textProps:{width:150},avatarProps:{width:45,height:45}}),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{size:45,src:"/img/avatars/thumb-1.jpg",shape:"circle"}),e.jsxs("div",{children:[e.jsx("h6",{children:"Carolyn Perkins"}),e.jsx("p",{children:"carolyn.p@elstar.com"})]})]})})]})},s="MediaSkeletonDoc",g={title:"MediaSkeleton",desc:"MediaSkeleton is a combination of Skeleton component for display a loading state of a media like element."},u=[{mdName:"Simple",mdPath:s,title:"Simple",desc:"Basic usage.",component:e.jsx(x,{})},{mdName:"WithLoding",mdPath:s,title:"WithLoding",desc:"Usage with loading",component:e.jsx(f,{})}],j=[{component:"MediaSkeleton",api:[{propName:"avatarProps",type:'<a class="text-indigo-600 underline" href="/ui-components/skeleton#api" target="_blank"><code>SkeletonProps</code></a>',default:"-",desc:"Props for avatar skeleton"},{propName:"showAvatar",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to display avatar skeleton"},{propName:"textProps",type:'<a class="text-indigo-600 underline" href="/ui-components/skeleton#api" target="_blank"><code>SkeletonProps</code></a>',default:"-",desc:"Props for text skeleton"},{propName:"titleProps",type:'<a class="text-indigo-600 underline" href="/ui-components/skeleton#api" target="_blank"><code>SkeletonProps</code></a>',default:"-",desc:"Props for title skeleton"}]}],O=()=>e.jsx(m,{innerFrame:!1,header:g,demos:u,api:j,mdPrefixPath:"shared"});export{O as default};