import{r as u,j as e}from"./index-D60ulZa2.js";import{a8 as S,ad as n,a2 as a,ae as x,af as o,ac as t,ab as i,ah as z}from"./react-toastify.esm-UvMY957B.js";import{C as v}from"./CCardBody-Bywn6V3L.js";import{G as d,F as I,a as r,C as A,R as y,h as p,T as N,b as L,c as T,d as m,e as l,f as M}from"./DefaultLayout-Chzbr5W5.js";const C=()=>{u.useState("Bill View");const[h,f]=u.useState("lab"),j=[{slNo:1,labNo:5749,name:"KRISHNA A S",age:22,gender:"F",date:"26-Jun-2024",collectedAt:"",reference:"N Mohanan BSc MBBS MS",tests:["COMPLETE HAEMOGRAM +","HBsAg","HIV-DUO (Ivth GENERATION T","Anti HCV","HAEMOGLOBIN (HB)"],specimen:"EDTA WHOLE ...",total:1860,pendingAmt:0},{slNo:2,labNo:5748,name:"RABESHNA",age:36,gender:"F",date:"26-Jun-2024",collectedAt:"",reference:"Vineetha S MBBS DGO FMAS",tests:["HAEMOGLOBIN (HB)","ANTI MULLARIAN HORMONE","THYROID STIMULATING HORM..."],specimen:"SERUM",total:1510,pendingAmt:0},{slNo:3,labNo:5747,name:"JAYAN N P",age:57,gender:"M",date:"26-Jun-2024",collectedAt:"",reference:"",tests:["CREATININE"],specimen:"SERUM",total:140,pendingAmt:0},{slNo:4,labNo:5746,name:"JOHN",age:30,gender:"M",date:"26-Jun-2024",collectedAt:"",reference:"",tests:["CREATININE","GLUCOSE PLASMA FASTING"],specimen:"PLASMA(fasti...",total:1500,pendingAmt:0}],b=["Result Issued","On Processing","Time Over","Cancelled Invoice","Half Verified","Time Over Reminder"],c=["#0073e6","#ff9900","#4caf50","#f44336","#9c27b0","#ffc107"];return e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsxs(S,{p:2,children:[e.jsx(d,{container:!0,spacing:1,alignItems:"center",children:e.jsxs(d,{item:!0,xs:12,children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(I,{row:!0,style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:b.map((s,g)=>e.jsx(r,{control:e.jsx(A,{sx:{color:c[g%c.length]},size:"small"}),label:s,style:{marginRight:"10px"}},s))})}),e.jsxs(d,{container:!0,spacing:1,alignItems:"center",style:{marginTop:"10px"},children:[e.jsx(d,{item:!0,children:e.jsx(n,{component:"fieldset",children:e.jsxs(y,{row:!0,value:h,onChange:s=>f(s.target.value),children:[e.jsx(r,{value:"lab",control:e.jsx(p,{size:"small"}),label:e.jsx(a,{variant:"body2",children:"Bill View"}),sx:{"& .MuiSvgIcon-root":{fontSize:12}}}),e.jsx(r,{value:"purchase",control:e.jsx(p,{size:"small"}),label:e.jsx(a,{variant:"body2",children:"Result view"}),sx:{"& .MuiSvgIcon-root":{fontSize:12}}}),e.jsx(r,{value:"pharmacy",control:e.jsx(p,{size:"small"}),label:e.jsx(a,{variant:"body2",children:"Track"}),sx:{"& .MuiSvgIcon-root":{fontSize:12}}})]})})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsxs(n,{variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(x,{id:"genderLabel"}),e.jsxs(o,{labelId:"genderLabel",id:"gender",label:"Gender",children:[e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsxs(n,{variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(x,{id:"genderLabel"}),e.jsxs(o,{labelId:"genderLabel",id:"gender",label:"Gender",children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsxs(n,{variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(x,{id:"genderLabel"}),e.jsxs(o,{labelId:"genderLabel",id:"gender",label:"Gender",children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(i,{id:"from",label:"FromDate",type:"date",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"14px"}}})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(i,{id:"to",label:"ToDate",type:"date",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"14px"}}})}),e.jsx(d,{item:!0,xs:12,sm:4}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"area",label:"Area",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"corporate",label:"Corporate",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"phoneno",label:"PhoneNo",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"referral",label:"Referral",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"sampleid",label:"Sample Id",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"department",label:"Department",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"ipop",label:"IPOP",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:3,children:e.jsx(i,{id:"specimen",label:"Specimen",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:3,children:e.jsx(i,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"labno",label:"LabNo",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"payment",label:"Payment",variant:"outlined",size:"small",fullWidth:!0,InputLbelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"tests",label:"Tests",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})})]})]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(N,{style:{maxHeight:"calc(100vh - 400px)",overflowY:"auto"},children:e.jsxs(L,{stickyHeader:!0,"aria-label":"sticky table",sx:{marginTop:"20px"},children:[e.jsx(T,{children:e.jsxs(m,{children:[e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"SlNo"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Lab No"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Name"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Date"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"collected At"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Reference"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Tests"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Specimen"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Total"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"PendAmt"})]})}),e.jsx(M,{children:j.map(s=>e.jsxs(m,{children:[e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"18px"},children:s.slNo}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.labNo}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.name}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.date}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.collectedAt}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.reference}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.tests}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.specimen}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.total}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.pendingAmt})]},s.id))})]})})}),e.jsx(z,{})]})})})};export{C as default};
