import{j as e,r as d}from"./index-B78iILjS.js";import{r as A,G as s,g as p,B as c,h as b}from"./DefaultLayout-BRABOCBn.js";import{ae as N,af as u,am as z,ak as B,al as g}from"./ReactToastify-B1r_bK_u.js";var v={},L=N;Object.defineProperty(v,"__esModule",{value:!0});var C=v.default=void 0,W=L(A()),M=e;C=v.default=(0,W.default)((0,M.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const U=()=>{const S={vchrid:"",transno:"",transtype:"",atchmntimage:"",date:"",narration:"",timestamp:"",amount:"",acname:"",Acid:""};d.useState(""),d.useState("OFFICE");const E={LabNo:"",YrId:2223,CmpyId:2,brnid:2},[o,x]=d.useState(S),[y,I]=d.useState(E),[j,h]=d.useState("");d.useState(null);const k=t=>{const{id:n,value:a}=t.target;I(r=>({...r,[n]:a}))},m=t=>{const{id:n,value:a}=t.target;let r=a;x({...o,[n]:r})},D=t=>{t.key==="Enter"&&V()},T=t=>{if(!t)return"";const n=new Date(t),a=n.getFullYear(),r=(n.getMonth()+1).toString().padStart(2,"0"),i=n.getDate().toString().padStart(2,"0");return`${a}-${r}-${i}`},V=()=>{const{LabNo:t,YrId:n,CmpyId:a,brnid:r}=y;b.get("http://172.16.16.10:8060/api/cashpayfill",{params:{LabNo:t,YrId:n,CmpyId:a,brnid:r}}).then(i=>{console.log("API response:",i);const l=i.data.pay_exist[0];l.date=T(l.date),x(l),g.success("Data fetched successfully"),w(l.atchmntimage)}).catch(i=>{console.error("Error fetching the data",i),g.error("Error in fetching data")})},w=t=>{if(t){const n=/^data:(image\/[a-zA-Z]*);base64,/,a=t.match(n);if(a){const r=a[1];console.log("MIME type found:",r),h(t)}else h(`data:image/png;base64,${t}`),console.warn("MIME type not found in base64 string, using fallback")}else h("path/to/placeholder/image.png"),console.warn("No image data provided")},P=t=>new Promise((n,a)=>{const r=new FileReader;r.onloadend=()=>{n(r.result)},r.onerror=i=>{a(i)},r.readAsDataURL(t)}),R=async t=>{const n=t.target.files[0];if(n)try{const a=await P(n);x(r=>({...r,atchmntimage:a})),h(a)}catch(a){console.error("Error converting file to base64:",a)}},F=()=>{const i=`KRISHNA ${new Date().toLocaleString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(",","")} Work Station:OFFICE`,l={VchrDate:o.date,VchrBookId:678.9,VchrId:o.vchrid,VchrTransType:o.transtype,VchrTransNo:o.transno,VchrNarration:o.narration,VchrPayment:o.amount,VchrReceipt:0,VchrTimeStamp:i,VchrUsrId:6,VchrYrId:2223,VchrCpyId:2,VchrUpdtd:0,VchrChq:0,VchrChqNo:"34567",VchrChqDate:"2024-08-05",VchrChqPassed:0,VchrBrId:2,VchrTdsAmt:500,VchrAttachment:o.atchmntimage,Editflag:!0};console.log("data send to backend",l),b.post("http://172.16.16.10:8060/api/cashpaysave/msgpay",l,{headers:{"Content-Type":"application/json"}}).then(f=>{console.log("Data saved successfully",f.data),g.success("Data saved successfully")}).catch(f=>{console.error("Error saving data",f),g.error("Error in saving data")})};return e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(u,{id:"LabNo",label:"Trans No",variant:"outlined",size:"small",fullWidth:!0,value:y.LabNo,onChange:k,onKeyPress:D,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(u,{id:"date",label:"Date",type:"date",variant:"outlined",value:o.date,size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"1rem"}},onChange:m})}),e.jsx(s,{item:!0,xs:12,children:e.jsxs(p,{display:"flex",alignItems:"center",children:[e.jsx(u,{id:"acname",label:"Account",variant:"outlined",size:"small",fullWidth:!0,value:o.acname,onChange:m,InputLabelProps:{style:{fontSize:"1rem"}}}),e.jsxs(c,{variant:"contained",component:"label",sx:{ml:1,backgroundColor:"#3095E5"},children:[e.jsx(C,{}),e.jsx("input",{type:"file",hidden:!0})]})]})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(u,{id:"amount",label:"Amount",variant:"outlined",size:"small",fullWidth:!0,value:o.amount,onChange:m})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(z,{minRows:4,maxRows:6,value:o.narration,style:{width:"100%",padding:"8px",borderRadius:"4px",borderColor:"#ccc",borderWidth:"1px",borderStyle:"solid"},placeholder:"Narration",onChange:t=>m({target:{id:"narration",value:t.target.value}})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(u,{id:"timestamp",label:"User Info",variant:"outlined",size:"small",fullWidth:!0,value:o.timestamp,onChange:m})}),e.jsx(s,{item:!0,xs:12,children:e.jsxs(p,{display:"flex",alignItems:"center",gap:1,flexWrap:"wrap",children:[e.jsx(s,{item:!0,xs:3,children:e.jsx(p,{mt:2,children:j?e.jsx("img",{src:j,alt:"Attached",style:{width:"100px",height:"100px",objectFit:"cover"}}):e.jsx("p",{children:"No attachments"})})}),e.jsxs(p,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:1,children:[e.jsxs(c,{variant:"contained",component:"label",sx:{backgroundColor:"#3095E5"},children:["Browse",e.jsx("input",{type:"file",hidden:!0,onChange:R})]}),e.jsx(c,{variant:"contained",component:"label",sx:{backgroundColor:"#3095E5"},children:"Scan"}),e.jsx(c,{variant:"contained",onClick:()=>h(""),sx:{backgroundColor:"#3095E5"},children:"Remove File"}),e.jsx(c,{variant:"contained",sx:{backgroundColor:"#3095E5"},children:"Print Preview"})]})]})}),e.jsx(s,{container:!0,spacing:2,justifyContent:"flex-end",sx:{marginTop:0},children:e.jsxs(s,{item:!0,children:[e.jsx(c,{variant:"contained",color:"primary",sx:{marginTop:2,marginRight:1,backgroundColor:"#3095E5"},children:"Print"}),e.jsx(c,{variant:"contained",color:"primary",sx:{marginTop:2,marginRight:1,backgroundColor:"#3095E5"},children:"New"}),e.jsx(c,{variant:"contained",color:"primary",sx:{marginTop:2,marginRight:1,backgroundColor:"#3095E5"},onClick:F,children:"Save"}),e.jsx(c,{variant:"contained",color:"primary",sx:{marginTop:2,marginRight:1,backgroundColor:"#3095E5"},children:"Delete"}),e.jsx(c,{variant:"contained",color:"primary",sx:{marginTop:2,marginRight:1,backgroundColor:"#3095E5"},children:"Exit"})]})}),e.jsx(B,{position:"top-center",autoClose:3e3,hideProgressBar:!0})]})};export{U as default};
