import{r as l,j as e}from"./index-sFzf4xgK.js";import{D as n}from"./DemoLayout-6YSyujB2.js";import{S as d}from"./SegmentItemOption-qzlXrLUx.js";import{S as t}from"./index-k0umyFkD.js";import{D as u,ba as h,_ as x}from"./index.esm-a15joBQq.js";import"./AdaptableCard-ZmpuYt9J.js";import"./Card-0NcWSoxi.js";import"./Views-cMR82yL4.js";import"./Affix-RKCuz81n.js";import"./Button-7VCVZJfX.js";import"./context-_X_Ia2Rl.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";import"./SyntaxHighlighter-TNfh7BjM.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";import"./index-mu0NPuvO.js";import"./index-lwixXq3m.js";import"./DemoComponentApi-G_FgO4cB.js";import"./index-U7R5GIaq.js";import"./index.esm-iiyI-toU.js";import"./useThemeClass-f5W2U2ER.js";import"./useControllableState-vYcyW9Gn.js";const a=[{value:"softwareEngineer",label:"Developer",icon:e.jsx(u,{})},{value:"productManager",label:"Manager",icon:e.jsx(h,{})},{value:"designer",label:"Designer",icon:e.jsx(x,{})}],f=()=>{const[r,i]=l.useState([a[0].value]),s=o=>{console.log("val",o),i(o)};return e.jsx(t,{value:r,onChange:o=>s(o),children:e.jsx("div",{className:"flex flex-col xl:flex-row items-center gap-4",children:a.map(o=>e.jsx(t.Item,{value:o.value,disabled:o.disabled,children:({active:m,onSegmentItemClick:p,disabled:c})=>e.jsx(d,{hoverable:!0,active:m,disabled:c,className:"bg-white dark:bg-gray-800 w-[250px]",onSegmentItemClick:p,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:o.icon}),e.jsx("h6",{children:o.label})]})})},o.value))})})},g="SegmentItemOptionDoc",b={title:"SegmentItemOption",desc:"A premade custom option use for Segment component."},v=[{mdName:"Example",mdPath:g,title:"Example",desc:"Example usage",component:e.jsx(f,{})}],j=[{component:"SegmentItemOption",api:[{propName:"active",type:"<code>boolean</code>",default:"-",desc:"Whether this option is active"},{propName:"customCheck",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Display a custom check when active is true"},{propName:"defaultGutter",type:"<code>boolean</code>",default:"<code>true</code>",desc:"Whether to use default spacer"},{propName:"disabled",type:"<code>boolean</code>",default:"-",desc:"Whether to disabled this option"},{propName:"hoverable",type:"<code>boolean</code>",default:"-",desc:"Whether to disabled hover effect"},{propName:"onSegmentItemClick",type:"<code>() => void</code>",default:"-",desc:"Callback when this option clicked"}]}],T=()=>e.jsx(n,{innerFrame:!1,header:b,demos:v,api:j,mdPrefixPath:"shared"});export{T as default};
