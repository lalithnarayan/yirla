import{e as w,j as e}from"./index-sFzf4xgK.js";import{I as b}from"./Input-54qFW4_N.js";import{B as N}from"./Button-7VCVZJfX.js";import{C as F}from"./index-mB9DlPfx.js";import{F as I,a as v,b as y,c as t,d as n}from"./formik.esm-uH6H_cO4.js";import{A as M}from"./Alert-il9ij-vz.js";import{P}from"./PasswordInput-2GP0ZJeC.js";import{A as i}from"./ActionLink-wXsrwC9R.js";import{u as S}from"./useTimeOutMessage-LpqWv8gR.js";import{c as A,a as l,d as C}from"./index.esm-ng5xLdUg.js";const U=A().shape({userName:l().required("Please enter your user name"),password:l().required("Please enter your password"),rememberMe:C()}),T=d=>{const{disableSubmit:c=!1,className:p,forgotPasswordUrl:u="/forgot-password",signUpUrl:f="/sign-up"}=d,[m,x]=S(),{signIn:h}=w(),j=async(a,s)=>{const{userName:r,password:g}=a;s(!0);const o=await h({userName:r,password:g});(o==null?void 0:o.status)==="failed"&&x(o.message),s(!1)};return e.jsxs("div",{className:p,children:[m&&e.jsx(M,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:m})}),e.jsx(I,{initialValues:{userName:"admin",password:"123Qwe",rememberMe:!0},validationSchema:U,onSubmit:(a,{setSubmitting:s})=>{c?s(!1):j(a,s)},children:({touched:a,errors:s,isSubmitting:r})=>e.jsx(v,{children:e.jsxs(y,{children:[e.jsx(t,{label:"User Name",invalid:s.userName&&a.userName,errorMessage:s.userName,children:e.jsx(n,{type:"text",autoComplete:"off",name:"userName",placeholder:"User Name",component:b})}),e.jsx(t,{label:"Password",invalid:s.password&&a.password,errorMessage:s.password,children:e.jsx(n,{autoComplete:"off",name:"password",placeholder:"Password",component:P})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(n,{className:"mb-0",name:"rememberMe",component:F,children:"Remember Me"}),e.jsx(i,{to:u,children:"Forgot Password?"})]}),e.jsx(N,{block:!0,loading:r,variant:"solid",type:"submit",children:r?"Signing in...":"Sign In"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Don't have an account yet?"," "]}),e.jsx(i,{to:f,children:"Sign up"})]})]})})})]})};export{T as S};
