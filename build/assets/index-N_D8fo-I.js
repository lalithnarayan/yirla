import{j as t}from"./index-sFzf4xgK.js";import{D as e}from"./DemoComponentApi-G_FgO4cB.js";import{D as a}from"./DemoLayout-6YSyujB2.js";import{S as o}from"./SyntaxHighlighter-TNfh7BjM.js";import"./index-U7R5GIaq.js";import"./index.esm-iiyI-toU.js";import"./index-lwixXq3m.js";import"./AdaptableCard-ZmpuYt9J.js";import"./Card-0NcWSoxi.js";import"./Views-cMR82yL4.js";import"./Affix-RKCuz81n.js";import"./Button-7VCVZJfX.js";import"./context-_X_Ia2Rl.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";import"./index.esm-a15joBQq.js";import"./index-mu0NPuvO.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";const r=()=>t.jsx(o,{language:"js",children:`import paginate from '@/utils/paginate'
        
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data = paginate(arr, 3, 2)

// output: [4, 5, 6]
`}),p="PaginateDoc/",i={title:"paginate",desc:"This function paginate an array according to page number & size."},m=[{mdName:"Example",mdPath:p,title:"Example",desc:"",component:t.jsx(r,{})}],n=[{component:"paginate",api:[{propName:"array",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"Array that need to paginate"},{propName:"pageSize",type:"<code>number</code>",default:"-",desc:"Maximun element of the output array"},{propName:"pageNumber",type:"<code>number</code>",default:"-",desc:"Index that start from the array"}]}],d=t.jsx(e,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"paginatedData",type:"<code>Array&lt;any&gt;</code>",default:"-",desc:"End result"}]}]}),I=()=>t.jsx(a,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:i,demos:m,api:n,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:d,keyText:"param"});export{I as default};
