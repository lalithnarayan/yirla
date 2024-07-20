import{j as e,$ as N}from"./index-sFzf4xgK.js";import{I as u}from"./Input-54qFW4_N.js";import{I as f}from"./index-yu8qkL3g.js";import{B as y}from"./Button-7VCVZJfX.js";import{D as F}from"./index-svCEv1cS.js";import{S as c,c as C}from"./Select-aeRvqRmw.js";import{F as S,a as M,b as P,c as p,d as o}from"./formik.esm-uH6H_cO4.js";import{N as I}from"./react-number-format.es-2TFZlsyx.js";import{c as h}from"./countries.constant-BuYxc7aV.js";import{s as j}from"./constants-i2w3TEnv.js";import{c as q,a as m}from"./index.esm-ng5xLdUg.js";import"./context-_X_Ia2Rl.js";import"./isNil-jxFxtNPR.js";import"./useControllableState-vYcyW9Gn.js";import"./useMergeRef-Rt_Crb27.js";import"./RangeCalendar-VdZRgz_Z.js";import"./index.esm-a15joBQq.js";import"./CloseButton-Lwp70ThL.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./TimeInput-CVdDVJm6.js";import"./useUniqueId-PxbSI7-8.js";import"./useDidUpdate-a_uQBhDP.js";import"./slicedToArray-IZTdWzIB.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";const{SingleValue:V}=C,g=[{label:"Male",value:"M"},{label:"Female",value:"F"},{label:"Others",value:"O"}],D=n=>e.jsx(u,{...n,value:n.field.value}),O=({onValueChange:n,...s})=>e.jsx(I,{customInput:u,type:"text",autoComplete:"off",onValueChange:n,...s}),R=({innerProps:n,data:s,isSelected:x})=>e.jsx("div",{className:`cursor-pointer flex items-center justify-between p-2 ${x?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...n,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{children:["(",s.value,") ",s.dialCode]})})}),k=n=>{const s=n.getValue()[0];return e.jsx(V,{...n,children:s&&e.jsx("span",{children:s.dialCode})})},B=q().shape({firstName:m().required("First Name Required"),lastName:m().required("Last Name Required"),email:m().email("Invalid email").required("Email Required"),nationality:m().required("Please select your nationality"),phoneNumber:m().required("Please enter your phone number"),dob:m().required("Please enter your date of birth"),gender:m().required("Please enter your gender"),maritalStatus:m().required("Please enter your marital status"),dialCode:m().required("Please select dial code")}),de=({data:n={firstName:"",lastName:"",email:"",residentCountry:"",nationality:"",dialCode:"",phoneNumber:"",dob:"",gender:"",maritalStatus:""},onNextChange:s,currentStepStatus:x})=>{const v=(d,r)=>{s==null||s(d,"personalInformation",r)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Personal Information"}),e.jsx("p",{children:"Basic information for an account opening"})]}),e.jsx(S,{initialValues:n,enableReinitialize:!0,validationSchema:B,onSubmit:(d,{setSubmitting:r})=>{r(!0),setTimeout(()=>{v(d,r)},1e3)},children:({values:d,touched:r,errors:t,isSubmitting:b})=>e.jsx(M,{children:e.jsxs(P,{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"First Name",invalid:t.firstName&&r.firstName,errorMessage:t.firstName,children:e.jsx(o,{type:"text",autoComplete:"off",name:"firstName",placeholder:"First Name",component:u})}),e.jsx(p,{label:"Last Name",invalid:t.lastName&&r.lastName,errorMessage:t.lastName,children:e.jsx(o,{type:"text",autoComplete:"off",name:"lastName",placeholder:"Last Name",component:u})})]}),e.jsx(p,{label:"Email",invalid:t.email&&r.email,errorMessage:t.email,children:e.jsx(o,{type:"email",autoComplete:"off",name:"email",placeholder:"Email",component:u})}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Gender",invalid:t.gender&&r.gender,errorMessage:t.gender,children:e.jsx(o,{name:"gender",children:({field:i,form:l})=>e.jsx(c,{placeholder:"Gender",field:i,form:l,options:g,value:g.filter(a=>a.value===d.gender),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})})}),e.jsx(p,{label:"Marital Status",invalid:t.maritalStatus&&r.maritalStatus,errorMessage:t.maritalStatus,children:e.jsx(o,{name:"maritalStatus",children:({field:i,form:l})=>e.jsx(c,{placeholder:"Marital Status",field:i,form:l,options:j,value:j.filter(a=>a.value===d.maritalStatus),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})})})]}),e.jsx(p,{label:"Nationality",invalid:t.nationality&&r.nationality,errorMessage:t.nationality,children:e.jsx(o,{name:"nationality",children:({field:i,form:l})=>e.jsx(c,{placeholder:"Nationality",field:i,form:l,options:h,value:h.filter(a=>a.value===d.nationality),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})})}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(p,{label:"Phone Number",invalid:t.dialCode&&r.dialCode||t.phoneNumber&&r.phoneNumber,errorMessage:"Please enter your phone number",children:e.jsxs(f,{children:[e.jsx(o,{name:"dialCode",children:({field:i,form:l})=>e.jsx(c,{className:"min-w-[130px]",placeholder:"Dial Code",components:{Option:R,SingleValue:k},field:i,form:l,options:h,value:h.filter(a=>a.value===d.dialCode),onChange:a=>l.setFieldValue(i.name,a==null?void 0:a.value)})}),e.jsx(o,{name:"phoneNumber",children:({field:i,form:l})=>e.jsx(O,{form:l,field:i,customInput:D,placeholder:"Phone Number",onValueChange:a=>{l.setFieldValue(i.name,a.value)}})})]})}),e.jsx(p,{label:"Date of Birth",invalid:t.dob&&r.dob,errorMessage:t.dob,children:e.jsx(o,{name:"dob",placeholder:"Date",children:({field:i,form:l})=>e.jsx(F,{field:i,form:l,value:i.value,onChange:a=>{l.setFieldValue(i.name,N(a).format("YYYY-MM-DD"))}})})})]}),e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(y,{loading:b,variant:"solid",type:"submit",children:x==="complete"?"Save":"Next"})})]})})})]})};export{de as default};