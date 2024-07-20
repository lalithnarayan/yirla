import{j as e}from"./index-sFzf4xgK.js";import{I as p}from"./Input-54qFW4_N.js";import{C as O}from"./index-mB9DlPfx.js";import{B as I}from"./Button-7VCVZJfX.js";import{S as u}from"./Select-aeRvqRmw.js";import{F as M,a as P,b as q,c as r,d as m,g as o}from"./formik.esm-uH6H_cO4.js";import{N as W}from"./react-number-format.es-2TFZlsyx.js";import{n as j,o as v,a as b,b as g}from"./constants-i2w3TEnv.js";import{c as f}from"./countries.constant-BuYxc7aV.js";import{c as N,a as s,d as S}from"./index.esm-ng5xLdUg.js";import"./context-_X_Ia2Rl.js";import"./isNil-jxFxtNPR.js";import"./slicedToArray-IZTdWzIB.js";import"./unsupportedIterableToArray-RbDDH4Bc.js";import"./toConsumableArray-TeBove6f.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index.esm-a15joBQq.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";const C=["unemployed","student","retired"],V=N().shape({taxResident:s().required("Please select your country of tax resident"),tin:s().when("noTin",{is:!1,then:i=>i.required("Please enter your Taxpayer Identification number (TIN)"),otherwise:i=>i}),noTinReason:s().when("noTin",{is:!0,then:i=>i.required("Please indicate your reason"),otherwise:i=>i}),noTin:S(),occupation:s().required("Please choose your occupation"),annualIncome:s().required("Please tell us your annual income range"),sourceOfWealth:s().required("Please tell us the source of funds use in this account"),companyInformation:N().when("occupation",{is:i=>i&&!C.includes(i),then:i=>i.shape({companyName:s().required("Please enter your company name"),contactNumber:s().required("Please enter your company contact number"),country:s().required("Please select country"),addressLine1:s().required("Please enter your address"),addressLine2:s(),city:s().required("Please enter your city"),state:s().required("Please enter your state"),zipCode:s().required("Please enter zip code")}),otherwise:i=>i})}),z=i=>e.jsx(p,{...i,value:i.field.value}),w=({onValueChange:i,...y})=>e.jsx(W,{customInput:p,type:"text",autoComplete:"off",onValueChange:i,...y}),oe=({data:i={taxResident:"",tin:"",noTin:!1,noTinReason:"",occupation:"",annualIncome:"",sourceOfWealth:"",companyInformation:{companyName:"",contactNumber:"",country:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:""}},onNextChange:y,onBackChange:x,currentStepStatus:T})=>{const F=(d,c)=>{y==null||y(d,"financialInformation",c)},R=()=>{x==null||x()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-2",children:"Financial Information"}),e.jsx("p",{children:"Fill in your financial information to help us speed up the verication process."})]}),e.jsx(M,{enableReinitialize:!0,initialValues:i,validationSchema:V,onSubmit:(d,{setSubmitting:c})=>{c(!0),setTimeout(()=>{F(d,c)},1e3)},children:({values:d,touched:c,errors:a,isSubmitting:L})=>{var h;return e.jsx(P,{children:e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsx("h5",{className:"mb-4",children:"Tax Information"}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(r,{label:"Tax resident of",invalid:a.taxResident&&c.taxResident,errorMessage:a.taxResident,children:e.jsx(m,{name:"taxResident",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Tax resident of",field:t,form:l,options:f,value:f.filter(n=>n.value===d.taxResident),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),d.noTin?e.jsx(r,{label:"Please provide an appropriate reason if no TIN",invalid:a.noTinReason&&c.noTinReason,errorMessage:a.noTinReason,children:e.jsx(m,{name:"noTinReason",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Select reason",field:t,form:l,options:j,value:j.filter(n=>n.value===d.noTinReason),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}):e.jsx(r,{label:"Taxpayer Identification number (TIN)",invalid:a.tin&&c.tin,errorMessage:a.tin,children:e.jsx(m,{type:"text",autoComplete:"off",name:"tin",placeholder:"TIN",component:p})})]})]}),e.jsx(r,{children:e.jsx(m,{name:"noTin",component:O,children:"Check this if no TIN number is available"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-4",children:"Employment Information"}),e.jsx(r,{label:"Occupation",invalid:a.occupation&&c.occupation,errorMessage:a.occupation,children:e.jsx(m,{name:"occupation",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Occupation",field:t,form:l,options:v,value:v.filter(n=>n.value===d.occupation),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),d.occupation&&!C.includes(d.occupation)&&e.jsxs("div",{children:[e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(r,{label:"Full company name",invalid:o(a,"companyInformation.companyName")&&o(c,"companyInformation.companyName"),errorMessage:o(a,"companyInformation.companyName"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.companyName",placeholder:"Full company name",component:p})}),e.jsx(r,{label:"Employer Contact Number",invalid:a.companyInformation&&a.companyInformation.contactNumber&&((h=c.companyInformation)==null?void 0:h.contactNumber),errorMessage:a.companyInformation&&a.companyInformation.contactNumber,children:e.jsx(m,{name:"companyInformation.contactNumber",children:({field:t,form:l})=>e.jsx(w,{form:l,field:t,customInput:z,placeholder:"Employer Contact Number",onValueChange:n=>{l.setFieldValue(t.name,n.value)}})})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(r,{label:"Country",invalid:o(a,"companyInformation.country")&&o(c,"companyInformation.country"),errorMessage:o(a,"companyInformation.country"),children:e.jsx(m,{name:"companyInformation.country",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Country",field:t,form:l,options:f,value:f.filter(n=>n.value===o(d,"companyInformation.country")),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),e.jsx(r,{label:"Address Line 1",invalid:o(a,"companyInformation.addressLine1")&&o(c,"companyInformation.addressLine1"),errorMessage:o(a,"companyInformation.addressLine1"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.addressLine1",placeholder:"Company address line 1",component:p})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(r,{label:"Address Line 2",invalid:o(a,"companyInformation.addressLine2")&&o(c,"companyInformation.addressLine2"),errorMessage:o(a,"companyInformation.addressLine2"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.addressLine2",placeholder:"Company address line 2",component:p})}),e.jsx(r,{label:"City",invalid:o(a,"companyInformation.city")&&o(c,"companyInformation.city"),errorMessage:o(a,"companyInformation.city"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.city",placeholder:"City",component:p})})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(r,{label:"State",invalid:o(a,"companyInformation.state")&&o(c,"companyInformation.state"),errorMessage:o(a,"companyInformation.state"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.state",placeholder:"State",component:p})}),e.jsx(r,{label:"Zip Code",invalid:o(a,"companyInformation.zipCode")&&o(c,"companyInformation.zipCode"),errorMessage:o(a,"companyInformation.zipCode"),children:e.jsx(m,{type:"text",autoComplete:"off",name:"companyInformation.zipCode",placeholder:"Zip Code",component:p})})]})]}),e.jsxs("div",{className:"md:grid grid-cols-2 gap-4",children:[e.jsx(r,{label:"Annual Income",invalid:a.annualIncome&&c.annualIncome,errorMessage:a.annualIncome,children:e.jsx(m,{name:"annualIncome",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Annual Income",field:t,form:l,options:b,value:b.filter(n=>n.value===d.annualIncome),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})}),e.jsx(r,{label:"Source of Wealth",invalid:a.sourceOfWealth&&c.sourceOfWealth,errorMessage:a.sourceOfWealth,children:e.jsx(m,{name:"sourceOfWealth",children:({field:t,form:l})=>e.jsx(u,{placeholder:"Source of Wealth",field:t,form:l,options:g,value:g.filter(n=>n.value===d.sourceOfWealth),onChange:n=>l.setFieldValue(t.name,n==null?void 0:n.value)})})})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(I,{type:"button",onClick:R,children:"Back"}),e.jsx(I,{loading:L,variant:"solid",type:"submit",children:T==="complete"?"Save":"Next"})]})]})})}})]})};export{oe as default};