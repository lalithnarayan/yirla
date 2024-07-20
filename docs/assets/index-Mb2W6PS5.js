import{Q as g,T as N,U as v,V as b,j as s,w as y,X as C,f as D,r as A,G as S}from"./index-sFzf4xgK.js";import{b as P}from"./CryptoService-au8rg8Nf.js";import{C as d}from"./Card-0NcWSoxi.js";import{B as V}from"./Badge-N86Ykf_U.js";import{C as u}from"./Chart-tjp24t0T.js";import{C as R}from"./chart.constant-jM3De4-L.js";import{R as k}from"./RecentAcivity-Vag5f0rp.js";import{A as h}from"./index-l28G_51M.js";import{l as w,al as E}from"./index.esm-a15joBQq.js";import"./chart.config-na3HyKAJ.js";import"./index-mu0NPuvO.js";import"./useMergeRef-Rt_Crb27.js";import"./Tooltip-2HBl8IKw.js";import"./index.esm-PEPNg8t8.js";import"./floating-ui.react-xe1dPT16.js";import"./floating-ui.dom-KU0eYpRY.js";import"./index-F1ElV9AB.js";import"./motion-JMywUYCu.js";const f="cryptoPortfolio",n=g(f+"/getPortfolioData",async()=>(await P()).data),O={loading:!0,portfolioData:{}},$=N({name:`${f}/state`,initialState:O,reducers:{},extraReducers:e=>{e.addCase(n.fulfilled,(a,t)=>{a.loading=!1,a.portfolioData=t.payload}).addCase(n.pending,a=>{a.loading=!0})}}),B=$.reducer,T=v({data:B}),j=b,U=({data:e={},className:a})=>{var t,c,i,o;return s.jsxs(d,{className:a,children:[s.jsx("h4",{children:"Assets"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4",children:!y(e)&&s.jsxs(s.Fragment,{children:[s.jsx(u,{donutTitle:`$${(t=e.values)==null?void 0:t.reduce((r,l)=>r+l,0)}`,donutText:"Assets",series:e.values,customOptions:{labels:e.labels},type:"donut",height:230}),s.jsx("div",{children:((c=e.values)==null?void 0:c.length)===((i=e.coinValues)==null?void 0:i.length)&&s.jsx("div",{className:"mt-6",children:(o=e.values)==null?void 0:o.map((r,l)=>{var x,m,p;return s.jsxs("div",{className:"flex justify-between mb-6",children:[s.jsxs("div",{className:"flex gap-1",children:[s.jsx(V,{className:"mt-1.5",badgeStyle:{backgroundColor:R[l]}}),s.jsxs("div",{children:[s.jsx("h6",{className:"font-bold text-sm",children:(x=e.labels)==null?void 0:x[l]}),s.jsxs("p",{children:[(m=e.coinValues)==null?void 0:m[l]," ",(p=e.coinSymbol)==null?void 0:p[l]]})]})]},r),s.jsxs("span",{className:"font-semibold self-end",children:["$",r]})]},l)})})})]})})]})},L=({data:e={},className:a})=>s.jsxs(d,{className:a,children:[s.jsx("h4",{children:"Statistic"}),s.jsx("div",{className:"mt-4",children:s.jsx(u,{series:e.series,xAxis:e.date,height:"350px"})})]}),z=({data:e={},className:a})=>s.jsxs(d,{className:a,bodyClass:"h-full flex flex-col justify-between",children:[s.jsx("h4",{children:"Account Values"}),s.jsxs("div",{children:[s.jsx("p",{className:"mb-1",children:"Net Value"}),s.jsxs("h3",{className:"font-bold flex items-end gap-1",children:[s.jsx("span",{children:e.netValue}),s.jsx("span",{className:"text-sm",children:"USD"})]})]}),s.jsxs("div",{className:"mt-4 flex flex-col gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{children:s.jsx(h,{size:45,className:"bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100",icon:s.jsx(w,{className:"text-2xl"})})}),s.jsxs("div",{children:[s.jsx("p",{children:"Coins value"}),s.jsxs("h5",{className:"flex items-end gap-1",children:[s.jsx("span",{children:e.coinValue}),s.jsx("span",{className:"text-sm",children:"USD"})]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{children:s.jsx(h,{size:45,className:"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100",icon:s.jsx(E,{className:"text-2xl"})})}),s.jsxs("div",{children:[s.jsx("p",{children:"Cash Balance"}),s.jsxs("h5",{className:"flex items-end gap-1",children:[s.jsx("span",{children:e.cashBalance}),s.jsx("span",{className:"text-sm",children:"USD"})]})]})]})]})]});C("cryptoPortfolio",T);const G=()=>{const e=D(),{assetsData:a,overviewData:t,accountValueData:c,recentAcivity:i}=j(l=>l.cryptoPortfolio.data.portfolioData),o=j(l=>l.cryptoPortfolio.data.loading);A.useEffect(()=>{r()},[]);const r=()=>{e(n())};return s.jsxs(S,{loading:o,children:[s.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-11 gap-4",children:[s.jsx(U,{className:"2xl:col-span-8 xl:col-span-7",data:a}),s.jsx(z,{className:"2xl:col-span-3 xl:col-span-4",data:c})]}),s.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-11 gap-4 mt-4",children:[s.jsx(L,{className:"2xl:col-span-8 xl:col-span-7",data:t}),s.jsx(k,{className:"2xl:col-span-3 xl:col-span-4",data:i})]})]})},rs=G;export{rs as default};