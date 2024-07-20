import{j as e,r as n,a4 as _,d as O,W as q}from"./index-sFzf4xgK.js";import{V as G,a as H,b as Q}from"./index.esm-faGim_ZV.js";import{B as X}from"./Button-7VCVZJfX.js";import{C as ee}from"./CloseButton-Lwp70ThL.js";import{t as se,N as ae}from"./Notification-Osm0sSHx.js";const le=1e3,te=t=>Math.round(t/le),b=({children:t})=>e.jsx("span",{className:"text-4xl",children:t}),L=t=>{const{file:o,children:m}=t,{type:c,name:i,size:l}=o,d=()=>c.split("/")[0]==="image"?e.jsx("img",{className:"upload-file-image",src:URL.createObjectURL(o),alt:`file preview ${i}`}):c==="application/zip"?e.jsx(b,{children:e.jsx(G,{})}):c==="application/pdf"?e.jsx(b,{children:e.jsx(H,{})}):e.jsx(b,{children:e.jsx(Q,{})});return e.jsxs("div",{className:"upload-file",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"upload-file-thumbnail",children:d()}),e.jsxs("div",{className:"upload-file-info",children:[e.jsx("h6",{className:"upload-file-name",children:i}),e.jsxs("span",{className:"upload-file-size",children:[te(l)," kb"]})]})]}),m]})};L.displayName="UploadFileItem";const D=t=>Object.keys(t).map(o=>t[o]),ie=n.forwardRef((t,o)=>{const{accept:m,beforeUpload:c,disabled:i=!1,draggable:l=!1,fileList:d=[],multiple:v,onChange:g,onFileRemove:h,showList:I=!0,tip:B,uploadLimit:f,children:x,className:E,field:S,...F}=t,C=n.useRef(null),[p,j]=n.useState(d),[w,N]=n.useState(!1),{themeColor:R,primaryColorLevel:V}=_();n.useEffect(()=>{JSON.stringify(p)!==JSON.stringify(d)&&j(d)},[JSON.stringify(d)]);const y=(a="")=>{se.push(e.jsx(ae,{type:"danger",duration:2e3,children:a||"Upload Failed!"}),{placement:"top-center"})},k=(a,s)=>{if(a)for(const r of a)s.push(r);return s},$=a=>{let s=q(p);return typeof f=="number"&&f!==0&&Object.keys(s).length>=f?(f===1&&(s.shift(),s=k(a,s)),D({...s})):(s=k(a,s),D({...s}))},z=a=>{const{files:s}=a.target;let r=!0;if(c){if(r=c(s,p),r===!1){y();return}if(typeof r=="string"&&r.length>0){y(r);return}}if(r){const u=$(s);j(u),g==null||g(u,p)}},J=a=>{const s=p.filter((r,u)=>u!==a);j(s),h==null||h(s)},P=a=>{var s;i||(s=C.current)==null||s.click(),a.stopPropagation()},T=()=>!l&&!x?e.jsx(X,{disabled:i,onClick:a=>a.preventDefault(),children:"Upload"}):l&&!x?e.jsx("span",{children:"Choose a file or drag and drop here"}):x,M=n.useCallback(()=>{l&&N(!1)},[l]),A=n.useCallback(()=>{l&&!i&&N(!0)},[l,i]),K=n.useCallback(()=>{l&&N(!1)},[l]),W={onDragLeave:M,onDragOver:A,onDrop:K},U=`border-${R}-${V}`,Y=O("upload",l&&"upload-draggable",l&&!i&&`hover:${U}`,l&&i&&"disabled",w&&U,E),Z=O("upload-input",l&&"draggable");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:o,className:Y,...l?W:{onClick:P},...F,children:[e.jsx("input",{ref:C,className:Z,type:"file",disabled:i,multiple:v,accept:m,title:"",value:"",onChange:z,...S,...F}),T()]}),B,I&&e.jsx("div",{className:"upload-file-list",children:p.map((a,s)=>e.jsx(L,{file:a,children:e.jsx(ee,{className:"upload-file-remove",onClick:()=>J(s)})},a.name+s))})]})});ie.displayName="Upload";export{ie as U};