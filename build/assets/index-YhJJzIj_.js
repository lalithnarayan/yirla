import{r as p,j as e}from"./index-sFzf4xgK.js";import{D as d}from"./DemoLayout-6YSyujB2.js";import{F as m}from"./FormPatternInput-k0HCM3pW.js";import{B as l}from"./Button-7VCVZJfX.js";import{F as u,a as f,b as h,c as i,d as g}from"./formik.esm-uH6H_cO4.js";import"./AdaptableCard-ZmpuYt9J.js";import"./Card-0NcWSoxi.js";import"./Views-cMR82yL4.js";import"./Affix-RKCuz81n.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";import"./index.esm-a15joBQq.js";import"./SyntaxHighlighter-TNfh7BjM.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";import"./index-mu0NPuvO.js";import"./index-lwixXq3m.js";import"./DemoComponentApi-G_FgO4cB.js";import"./index-U7R5GIaq.js";import"./index.esm-iiyI-toU.js";import"./react-number-format.es-2TFZlsyx.js";import"./Input-54qFW4_N.js";import"./context-_X_Ia2Rl.js";import"./isNil-jxFxtNPR.js";const b=()=>{const[o,t]=p.useState(0),r=a=>{console.log(a),t(a.floatValue)};return e.jsx(m,{value:o,format:"### ###",onValueChange:r})},x=()=>e.jsx(u,{initialValues:{cardNumber:0},onSubmit:(o,{resetForm:t,setSubmitting:r})=>{r(!0),setTimeout(()=>{alert(JSON.stringify(o,null,2)),r(!1),t()},400)},children:({touched:o,errors:t,isSubmitting:r})=>e.jsx(f,{children:e.jsxs(h,{layout:"inline",children:[e.jsx(i,{label:"Card Number",invalid:t.cardNumber&&o.cardNumber,errorMessage:t.cardNumber,children:e.jsx(g,{name:"cardNumber",children:({field:a,form:n})=>e.jsx(m,{form:n,field:a,format:"#### #### #### ####",mask:"_",placeholder:"Card Number",value:a.value,onValueChange:c=>{n.setFieldValue(a.name,c.floatValue)}})})}),e.jsx(i,{children:e.jsx(l,{variant:"solid",loading:r,type:"submit",children:"Submit"})})]})})}),s="FormPatternInputDoc",y={title:"FormPatternInput",desc:'FormPatternInput wrapped Input component with <a class="text-indigo-600 underline" href="https://github.com/s-yadav/react-number-format" target="_blank">react-number-format</a>, refer to the <a class="text-indigo-600 underline" href="https://s-yadav.github.io/react-number-format/docs/pattern_format" target="_blank">official doc</a> for more usage example .'},F=[{mdName:"Basic",mdPath:s,title:"Basic",desc:'Basic usage of FormPatternInputDoc, all <a class="text-indigo-600 underline" href="https://s-yadav.github.io/react-number-format/docs/customization" target="_blank">react-number-format props</a> can be apply to this component as well.',component:e.jsx(b,{})},{mdName:"WithForm",mdPath:s,title:"WithForm",desc:'Example usage with <a class="text-indigo-600 underline" href="https://formik.org/" target="_blank">Formik</a>',component:e.jsx(x,{})}],N=[{component:"FormPatternInputDoc",api:[{propName:"field",type:"<code>{string: any, value: any, onBlur:() => void, onChange:() => void}</code>",default:"-",desc:"Formik field props"},{propName:"form",type:'<a class="text-indigo-600 underline" href="https://formik.org/docs/api/formik#props-1" target="_blank"><code>FormikProp</code></a>',default:"-",desc:"Formik field props"},{propName:"inputPrefix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a prefix content inside Input"},{propName:"inputSuffix",type:"<code>string</code> | <code>ReactNode</code>",default:"-",desc:"Render a suffix content inside Input"},{propName:"format",type:"<code>string</code>",default:"-",desc:"It defines the format pattern using the # (or a patternChar ) character. # is the placeholder character for numbers"},{propName:"allowEmptyFormatting",type:"<code>boolean</code>",default:"-",desc:"By default PatternFormat component does not apply formatting when value is empty (null, undefined or ''). If you want to apply formatting on empty values set allowEmptyFormatting to true."},{propName:"mask",type:"<code>string</code> | <code>Array<string></code>",default:"-",desc:"Used as mask character for numeric places, until any numeric character is provided for that position. You can provide different mask characters for every numeric positions by passing array of mask characters. Note: The length of mask characters should match the numbers of # patternChar"},{propName:"patternChar",type:"<code>string</code>",default:"-",desc:"This helps define the format pattern character"}]}],k=e.jsxs("div",{className:"demo-api-table mb-12",children:[e.jsx("h4",{className:"mb-5",children:"Dependencies"}),e.jsx("h6",{id:"react-number-format-api",className:"mb-3",children:"React number format"}),e.jsxs("p",{children:["All common React number format props can be applied on this component, refer"," ",e.jsx("a",{className:"underline text-indigo-600",href:"https://s-yadav.github.io/react-number-format/docs/props",target:"_blank",rel:"noreferrer",children:"official docs"})," ","for the complete this.props.first list."," "]})]}),X=()=>e.jsx(d,{innerFrame:!1,header:y,demos:F,api:N,mdPrefixPath:"shared",extra:k});export{X as default};