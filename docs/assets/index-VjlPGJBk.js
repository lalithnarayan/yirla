import{j as e}from"./index-sFzf4xgK.js";import{D as t}from"./DemoComponentApi-G_FgO4cB.js";import{D as i}from"./DemoLayout-6YSyujB2.js";import{S as o}from"./SyntaxHighlighter-TNfh7BjM.js";import"./index-U7R5GIaq.js";import"./index.esm-iiyI-toU.js";import"./index-lwixXq3m.js";import"./AdaptableCard-ZmpuYt9J.js";import"./Card-0NcWSoxi.js";import"./Views-cMR82yL4.js";import"./Affix-RKCuz81n.js";import"./Button-7VCVZJfX.js";import"./context-_X_Ia2Rl.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";import"./index.esm-a15joBQq.js";import"./index-mu0NPuvO.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";const a=()=>e.jsx(o,{language:"js",children:`import { useState } from 'react'       
import requiredFieldValidation from '@/utils/requiredFieldValidation'

const Component = () => {

    const [ inputValue, setInputValue ] = useState('')
    const [ displayMessage, setDisplayMessage ] = useState(false)

    return (
        <>
            <input value={inputValue} onChange={e => {
                setInputValue(e.target.value)
                setDisplayMessage(true)
            }} />
            {displayMessage && requiredFieldValidation(inputValue, 'Required field!')}
        </>
    )
}
`}),r="RequiredFieldValidationDoc/",s={title:"requiredFieldValidation",desc:"This function can be use to displaying some message if the input value is falsy."},p=[{mdName:"Example",mdPath:r,title:"Example",desc:"",component:e.jsx(a,{})}],d=[{component:"requiredFieldValidation",api:[{propName:"value",type:"<code>string</code>",default:"-",desc:"Field value"},{propName:"message",type:"<code>string</code>",default:"-",desc:"Feedback message"}]}],m=e.jsx(t,{hideApiTitle:!0,keyText:"return",api:[{api:[{propName:"validationMessage",type:"<code>string</code>",default:"<code>'Required'</code>",desc:"Feedback message"}]}]}),N=()=>e.jsx(i,{hideApiTitle:!0,hideFooter:!0,innerFrame:!1,header:s,demos:p,api:d,mdPrefixPath:"docs/SharedComponentsDoc/components",extra:m,keyText:"param"});export{N as default};
