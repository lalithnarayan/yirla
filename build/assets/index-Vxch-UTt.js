import{j as t}from"./index-sFzf4xgK.js";import{D as o}from"./DemoComponentApi-G_FgO4cB.js";import{D as e}from"./DemoLayout-6YSyujB2.js";import{S as r}from"./SyntaxHighlighter-TNfh7BjM.js";import"./index-U7R5GIaq.js";import"./index.esm-iiyI-toU.js";import"./index-lwixXq3m.js";import"./AdaptableCard-ZmpuYt9J.js";import"./Card-0NcWSoxi.js";import"./Views-cMR82yL4.js";import"./Affix-RKCuz81n.js";import"./Button-7VCVZJfX.js";import"./context-_X_Ia2Rl.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";import"./index.esm-a15joBQq.js";import"./index-mu0NPuvO.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";const i=()=>t.jsx(r,{language:"js",children:`import useAuthority from '@/utils/hooks/useAuthority'

const Component = () => {

	const { userAuthority = [], authority = [], children } = props

	const userAuthority = ['USER']

	const authority = ['ADMIN', 'USER']

	const roleMatched = useAuthority(userAuthority, authority)

	return (...)
}
`}),s="UseAuthorityDoc",p={title:"useAuthority",desc:"useAuthority hook help to check whether the current user has permmision to access."},m=[{mdName:"Example",mdPath:s,title:"Example",desc:"",component:t.jsx(i,{})}],a=[{component:"useAuthority",api:[{propName:"userAuthority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"List of the user roles"},{propName:"authority",type:"<code>Array</code>",default:"<code>[]</code>",desc:"List of roles that allow to access"}]}],u=t.jsx(o,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"roleMatched",type:"<code>boolean</code>",default:"-",desc:"Result of authority match"}]}]}),C=()=>t.jsx(e,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:p,demos:m,api:a,mdPrefixPath:"utils",extra:u,keyText:"param"});export{C as default};
