import{j as e}from"./index-sFzf4xgK.js";import{T as A}from"./index-3yIQZUm3.js";import{A as N}from"./index-l28G_51M.js";import{B as x}from"./Button-7VCVZJfX.js";import{S as C,c as D}from"./Select-aeRvqRmw.js";import{I as k}from"./index-yu8qkL3g.js";import{F as P,a as E,b as O,c as p,d}from"./formik.esm-uH6H_cO4.js";import"./Card-0NcWSoxi.js";import"./Badge-N86Ykf_U.js";import"./chart.constant-jM3De4-L.js";import"./chart.config-na3HyKAJ.js";import{ao as y,ap as M,aq as U}from"./index.esm-a15joBQq.js";import"./Dialog-4z8jxMEB.js";import"./Views-cMR82yL4.js";import"./DataTable-ZYz8MWbl.js";import"./Input-54qFW4_N.js";import{F as j}from"./FormNumericInput-h8-z46rV.js";import"./GrowShrinkTag-1PBQ2zAj.js";import"./Skeleton-yp1ZlUZw.js";import"./react-tooltip.min-fpjBnV96.js";import"./RichTextEditor-eYzbCh4G.js";import"./SegmentItemOption-qzlXrLUx.js";import"./SvgIcon-7qk7H0mf.js";import"./index-U7R5GIaq.js";import"./Tooltip-2HBl8IKw.js";import{c as I,b as v}from"./index.esm-ng5xLdUg.js";import{N as h}from"./react-number-format.es-2TFZlsyx.js";const S=[{label:"BTC",img:"/img/thumbs/bitcoin.png",value:"BTC",rate:29877.3},{label:"ETH",img:"/img/thumbs/ethereum.png",value:"ETH",rate:1785.91},{label:"USDT",img:"/img/thumbs/tether-us.png",value:"USDT",rate:1},{label:"SOL",img:"/img/thumbs/solana.png",value:"SOL",rate:40.25},{label:"DOGE",img:"/img/thumbs/doge.png",value:"DOGE",rate:.07979},{label:"DOT",img:"/img/thumbs/polkadot.png",value:"DOT",rate:.07979},{label:"TRX",img:"/img/thumbs/tron.png",value:"TRX",rate:.31},{label:"AVAX",img:"/img/thumbs/avalanche.png",value:"AVAX",rate:24.65},{label:"SHIB",img:"/img/thumbs/shiba-inu.png",value:"SHIB",rate:24.65},{label:"MATIC",img:"/img/thumbs/polygon.png",value:"MATIC",rate:.633},{label:"XLM",img:"/img/thumbs/stellar-lumens.png",value:"XLM",rate:.1404},{label:"EOS",img:"/img/thumbs/eos.png",value:"EOS",rate:1.25},{label:"XRP",img:"/img/thumbs/ripple.png",value:"XRP",rate:.34},{label:"LINK",img:"/img/thumbs/chainlink.png",value:"LINK",rate:6.62},{label:"BCH",img:"/img/thumbs/bitcoin-cash.png",value:"BCH",rate:149},{label:"LTC",img:"/img/thumbs/litecoin.png",value:"LTC",rate:49.5},{label:"BSV",img:"/img/thumbs/bitcoin-sv.png",value:"BSV",rate:50.54},{label:"ADA",img:"/img/thumbs/cardano.png",value:"ADA",rate:.508},{label:"XMR",img:"/img/thumbs/monero.png",value:"XMR",rate:160.2},{label:"IOTA",img:"/img/thumbs/miota.png",value:"IOTA",rate:.28}],f=[{name:"VISA",label:"VISA •••• 6165",value:"VISA",img:"/img/others/img-8.png"},{name:"MASTER",label:"MASTER •••• 6165",value:"MASTER",img:"/img/others/img-9.png"},{name:"Paypal",label:"Paypal cookie_lukie@gmail.com",value:"PAYPAL",img:"/img/others/img-10.png"},{name:"Wallet",label:"Wallet Ballance $26,322,574.87",value:"WALLET",img:"/img/others/img-17.png"}],{Control:w}=D,T=1e8,R=I().shape({amount:v().min(1,"Min amount 1").required("Please enter an amount"),price:v().required("Price cannot be 0")}),X=({innerProps:l,label:t,data:n,isSelected:r})=>e.jsxs("div",{className:`cursor-pointer flex items-center justify-between p-2 ${r?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...l,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(N,{shape:"circle",size:20,src:n.img}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:t})]}),r&&e.jsx(y,{className:"text-emerald-500 text-xl"})]}),W=({children:l,...t})=>{const n=t.getValue()[0];return e.jsxs(w,{...t,children:[n&&e.jsx(N,{className:"ltr:ml-4 rtl:mr-4",shape:"circle",size:18,src:n.img}),l]})},$=({innerProps:l,label:t,data:n,isSelected:r})=>e.jsxs("div",{className:`cursor-pointer flex items-center justify-between p-2 ${r?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...l,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"max-w-[35px]",src:n.img,alt:""}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:t})]}),r&&e.jsx(y,{className:"text-emerald-500 text-xl"})]}),Y=({children:l,...t})=>{const n=t.getValue()[0];return e.jsxs(w,{...t,children:[n&&e.jsx("img",{className:"max-w-[35px] ml-2",src:n.img,alt:""}),l]})},H=l=>{const{onBuy:t,amount:n,symbol:r}=l;return e.jsx("div",{children:e.jsx(P,{initialValues:{amount:n,price:1,cryptoSymbol:r,rate:n,payWith:"MASTER"},enableReinitialize:!0,validationSchema:R,onSubmit:(m,{setSubmitting:o})=>{t(m,o)},children:({values:m,touched:o,errors:c,isSubmitting:g})=>e.jsx(E,{children:e.jsxs(O,{children:[e.jsx(p,{label:"Amount",invalid:c.amount&&o.amount,errorMessage:c.amount,children:e.jsx(d,{name:"amount",children:({field:s,form:i})=>e.jsx(j,{thousandSeparator:!0,form:i,field:s,placeholder:"YOU PAY",decimalScale:2,value:s.value,inputSuffix:e.jsx("span",{className:"font-semibold",children:"USD"}),onValueChange:a=>{let b=a.floatValue?a.floatValue:1;b>T&&(b=T),i.setFieldValue(s.name,b),i.setFieldValue("price",b/i.values.rate)}})})}),e.jsx(p,{label:"Price",invalid:c.price&&o.price,errorMessage:c.price,children:e.jsxs(k,{children:[e.jsx(d,{name:"price",children:({field:s,form:i})=>e.jsx(j,{readOnly:!0,form:i,field:s,placeholder:"YOU RECEIVE",decimalScale:5,value:s.value,onValueChange:a=>{i.setFieldValue(s.name,a.floatValue)}})}),e.jsx(d,{name:"cryptoSymbol",children:({field:s,form:i})=>e.jsx(C,{className:"min-w-[120px]",components:{Option:X,Control:W},field:s,form:i,options:S,value:S.filter(a=>a.value===m.cryptoSymbol),onChange:a=>{i.setFieldValue(s.name,a==null?void 0:a.value),i.setFieldValue("rate",a==null?void 0:a.rate),i.setFieldValue("amount",(a==null?void 0:a.rate)<1?1:a==null?void 0:a.rate)}})})]})}),e.jsx(p,{label:"Pay With",invalid:c.payWith&&o.payWith,errorMessage:c.payWith,children:e.jsx(d,{name:"payWith",children:({field:s,form:i})=>e.jsx(C,{components:{Option:$,Control:Y},field:s,form:i,options:f,value:f.filter(a=>a.value===m.payWith),onChange:a=>{i.setFieldValue(s.name,a==null?void 0:a.value)}})})}),e.jsx(x,{block:!0,variant:"solid",loading:g,type:"submit",children:"Buy"})]})})})})},{Control:z}=D,q=I().shape({amount:v().min(1,"Min amount 1").required("Please enter an amount"),price:v().required("Price cannot be 0")}),G=({innerProps:l,label:t,data:n,isSelected:r})=>e.jsxs("div",{className:`cursor-pointer flex items-center justify-between p-2 ${r?"bg-gray-100 dark:bg-gray-500":"hover:bg-gray-50 dark:hover:bg-gray-600"}`,...l,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(N,{shape:"circle",size:20,src:n.img}),e.jsx("span",{className:"ml-2 rtl:mr-2",children:t})]}),r&&e.jsx(y,{className:"text-emerald-500 text-xl"})]}),K=({children:l,...t})=>{const n=t.getValue()[0];return e.jsxs(z,{...t,children:[n&&e.jsx(N,{className:"ltr:ml-4 rtl:mr-4",shape:"circle",size:18,src:n.img}),l]})},_=l=>{const{onSell:t,amount:n,symbol:r}=l;return e.jsx("div",{children:e.jsx(P,{initialValues:{amount:n,price:1,cryptoSymbol:r,rate:n},enableReinitialize:!0,validationSchema:q,onSubmit:(m,{setSubmitting:o})=>{t(m,o)},children:({values:m,touched:o,errors:c,isSubmitting:g})=>e.jsx(E,{children:e.jsxs(O,{children:[e.jsx(p,{label:"Price",invalid:c.price&&o.price,errorMessage:c.price,children:e.jsxs(k,{children:[e.jsx(d,{name:"price",children:({field:s,form:i})=>e.jsx(j,{form:i,field:s,placeholder:"YOU SELL",value:s.value,onValueChange:a=>{i.setFieldValue(s.name,a.floatValue),i.setFieldValue("amount",parseFloat(((a==null?void 0:a.floatValue)*i.values.rate).toString()).toFixed(2))}})}),e.jsx(d,{name:"cryptoSymbol",children:({field:s,form:i})=>e.jsx(C,{className:"min-w-[120px]",components:{Option:G,Control:K},field:s,form:i,options:S,value:S.filter(a=>a.value===m.cryptoSymbol),onChange:a=>{i.setFieldValue(s.name,a==null?void 0:a.value),i.setFieldValue("rate",a==null?void 0:a.rate),i.setFieldValue("amount",(a==null?void 0:a.rate)<1?1:a==null?void 0:a.rate)}})})]})}),e.jsx(p,{label:"Amount",invalid:c.amount&&o.amount,errorMessage:c.amount,children:e.jsx(d,{name:"amount",children:({field:s,form:i})=>e.jsx(j,{readOnly:!0,thousandSeparator:!0,form:i,field:s,placeholder:"YOU RECEIVE",value:s.value,inputSuffix:e.jsx("span",{className:"font-semibold",children:"USD"}),onValueChange:a=>{i.setFieldValue(s.name,a.floatValue)}})})}),e.jsx(x,{block:!0,variant:"solid",loading:g,type:"submit",children:"Sell"})]})})})})},{TabNav:V,TabList:J,TabContent:F}=A,Fe=l=>e.jsxs(A,{defaultValue:"buy",children:[e.jsxs(J,{children:[e.jsx(V,{value:"buy",children:"Buy"}),e.jsx(V,{value:"sell",children:"Sell"})]}),e.jsxs("div",{className:"py-6",children:[e.jsx(F,{value:"buy",children:e.jsx(H,{...l})}),e.jsx(F,{value:"sell",children:e.jsx(_,{...l})})]})]}),L=l=>{const{onDone:t}=l;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-center my-10",children:[e.jsx(M,{className:"text-[70px] text-emerald-500 mx-auto"}),e.jsx("h4",{className:"mt-4 font-bold mb-2",children:"Order placed"}),e.jsx("p",{children:"Please wait up to 5 minute for fund clearence."})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx(x,{block:!0,className:"mb-2",variant:"solid",onClick:()=>t(!1),children:"Done"}),e.jsx(x,{block:!0,onClick:()=>t(!0),children:"View Detail"})]})]})},B=l=>{const{onDone:t}=l;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-center my-10",children:[e.jsx(U,{className:"text-[70px] text-red-500 mx-auto"}),e.jsx("h4",{className:"mt-4 font-bold mb-2",children:"Transaction failed!"}),e.jsx("p",{children:"Please try again later"})]}),e.jsx("div",{className:"mt-8",children:e.jsx(x,{block:!0,className:"mb-2",variant:"solid",onClick:t,children:"Close"})})]})},u=({label:l,value:t})=>e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{children:l}),e.jsx("span",{className:"font-semibold heading-text",children:t})]}),Q=l=>{const{price:t,cryptoSymbol:n,payWith:r="",amount:m=0,status:o,loading:c,onConfirm:g}=l;return e.jsxs("div",{className:"mt-4",children:[o==="SUCCESS"&&e.jsx(L,{...l}),o==="FAILED"&&e.jsx(B,{...l}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-center my-8",children:[e.jsx("p",{className:"mb-2",children:"You will get"}),e.jsxs("h3",{className:"font-bold",children:[t," ",n]})]}),e.jsx(u,{label:"Pay with",value:(()=>{const s=f.find(i=>i.value===r);return e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{className:"max-w-[35px]",src:s==null?void 0:s.img,alt:""}),e.jsx("span",{children:s==null?void 0:s.label})]})})()}),e.jsx(u,{label:"Price",value:t}),e.jsx(u,{label:"Amount",value:e.jsx(h,{value:m,displayType:"text",suffix:" USD",thousandSeparator:!0,allowNegative:!0,decimalScale:2,fixedDecimalScale:!0})}),e.jsx(u,{label:"Transaction Fees (0.05%)",value:e.jsx(h,{value:m*.05,displayType:"text",suffix:" USD",thousandSeparator:!0,allowNegative:!0,decimalScale:2,fixedDecimalScale:!0})}),e.jsx(u,{label:"Total",value:e.jsx(h,{value:m*.05+m,displayType:"text",suffix:" USD",thousandSeparator:!0,allowNegative:!0,decimalScale:2,fixedDecimalScale:!0})}),e.jsx(x,{block:!0,className:"mt-6",variant:"solid",loading:c,onClick:g,children:"Confirm"})]})]})},Z=l=>{const{price:t,cryptoSymbol:n,amount:r=0,status:m,loading:o,onConfirm:c}=l;return e.jsxs("div",{className:"mt-4",children:[m==="SUCCESS"&&e.jsx(L,{...l}),m==="FAILED"&&e.jsx(B,{...l}),!m&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-center my-8",children:[e.jsx("p",{className:"mb-2",children:"You will get"}),e.jsx("h3",{className:"font-bold",children:e.jsx(h,{value:r-r*.05,displayType:"text",suffix:" USD",thousandSeparator:!0,allowNegative:!0,decimalScale:2,fixedDecimalScale:!0})})]}),e.jsx(u,{label:"Price",value:e.jsx(h,{value:t,displayType:"text",suffix:` ${n}`,thousandSeparator:!0,allowNegative:!0,decimalScale:2,fixedDecimalScale:!0})}),e.jsx(u,{label:"Transaction Fees (0.05%)",value:e.jsx(h,{value:r*.05,displayType:"text",suffix:" USD",thousandSeparator:!0,allowNegative:!0,decimalScale:2,fixedDecimalScale:!0})}),e.jsx(x,{block:!0,className:"mt-6",variant:"solid",loading:o,onClick:c,children:"Confirm"})]})]})},Ae=l=>{const{type:t}=l;return e.jsxs(e.Fragment,{children:[t==="BUY"&&e.jsx(Q,{...l}),t==="SELL"&&e.jsx(Z,{...l})]})};export{Ae as P,Fe as T};