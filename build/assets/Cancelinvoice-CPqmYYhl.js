import{r as N,j as e}from"./index-CDnPdH3a.js";import{g as c,G as t,M as o,T as $,C as m,Q as K,B as b,i as W,h as d}from"./DefaultLayout-49-5eIFu.js";import{C as _}from"./CCardBody-CMlqQNee.js";import{a8 as l,a9 as A,aa as Q,ab as H}from"./TextField-BMWG_paC.js";import{F as J}from"./FormGroup-BD7zRHJa.js";import{F as x}from"./FormControlLabel-DZJRM3CM.js";const ne=()=>{const v={PatTitle:"",BillDate:"",PatName:"",PatAgedd:"",PatAgemm:"",PatAgeyy:"",PatGender:"",PatPhone:"",PatEmail:"",RefBy:"",OutDr:"",BranchName:"",PatOpNo:"",CollMode:"",collBy:"",SampleOn:"",ReportTime:"",ReportRequest:"",Reportreqpersonal:!1,ReportReqphn:!1,ReportReqcourier:!1,ReportReqemail:!1,ReportReqsms:!1,NetAmount:"",CancelDate:"",Reason:""},y={LabNo:"",YrId:2324,CmId:2},[a,h]=N.useState(v),[P,R]=N.useState(y),z=()=>{h(v),R(y)},E=r=>{const{id:n,value:i}=r.target;R(s=>({...s,[n]:i}))},C=r=>{const{id:n,value:i}=r.target;h(s=>({...s,[n]:i})),console.log("FormData after change:",{...a,[n]:i})},F=r=>{(["Enter","NumpadEnter"].includes(r.code)||r.key==="Enter"||r.key==="Go"||r.key==="Done"||r.key==="Search"||r.key==="Next")&&O()},q=r=>({"Mr.":"Mr","Mrs.":"Mrs","Ms.":"Ms","Miss.":"Miss"})[r]||"",O=()=>{const{LabNo:r,YrId:n,CmId:i}=P;W.get("http://172.16.16.10:8060/api/Cancelinvget",{params:{LabNo:r,YrId:n,CmId:i}}).then(s=>{console.log(s);const g=s.data.exist_dlts[0];h(g),d.success("data fetched successfully")}).catch(s=>{console.error("Error fetching the data",s),d.error("error in fetching data")})},G=()=>{console.log("Form Data before save:",a);const{PatName:r,CancelDate:n,LabNo:i,Reason:s,cmpyid:g,yrid:w,PatPhone:D,PatEmail:S,PatAgedd:I,PatAgemm:L,PatAgeyy:M}=a,p=n||new Date().toISOString().split("T")[0];if(console.log("Final CancelDate:",p),console.log("Data being sent :",{PatName:r,finalCancelDate:p,LabNo:i,Reason:s}),!r||!i||!s||!p){console.error("Validation failed: Missing required fields"),d.error("Please fill in all required fields.");return}if(!s||s.trim()===""){console.error("Validation failed: Reason field is empty"),d.error("Please provide a reason.");return}if(S&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(S)){console.error("Validation failed: Invalid email format"),d.error("Please provide a valid email address.");return}if(D&&!/^[0-9]{10,15}$/.test(D)){console.error("Validation failed: Invalid phone number"),d.error("Please provide a valid phone number.");return}if(I&&L&&M&&((u,V,Y)=>{const f=new Date,j=new Date(`${Y}-${V}-${u}`);let T=f.getFullYear()-j.getFullYear();const k=f.getMonth()-j.getMonth();return(k<0||k===0&&f.getDate()<j.getDate())&&T--,T})(I,L-1,M)>100){console.error("Validation failed: Age is greater than 100"),d.error("Age cannot be greater than 100.");return}const B={cmpyid:g,yrid:w,PatName:r,CancelDate:p,LabNo:i,Reason:s||null};console.log("Data being sent to the backend:",B),W.post("http://172.16.16.10:8060/api/cancelpatdetails/dltscancel",B).then(u=>{console.log("Data saved successfully",u.data),d.success("Data saved successfully!")}).catch(u=>{console.error("Error saving the data",u),d.error("Error saving the data.")})};return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(c,{sx:{border:"1px solid #ddd",padding:"16px",marginBottom:"10px"},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"LabNo",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,value:P.LabNo,onChange:E,onKeyPress:F,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"invDateTime",label:"Date",variant:"outlined",size:"small",fullWidth:!0,value:a.BillDate,type:"datetime-local",InputLabelProps:{shrink:!0}})})]})}),e.jsx(c,{sx:{border:"1px solid #ddd",padding:"16px",marginBottom:"10px",marginTop:"10px"},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:2,children:e.jsxs(l,{select:!0,label:"Prefix",value:q(a.PatTitle),variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}},children:[e.jsx(o,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(o,{value:"Mr",children:"Mr"}),e.jsx(o,{value:"Mrs",children:"Mrs"}),e.jsx(o,{value:"Ms",children:"Ms"}),e.jsx(o,{value:"Miss",children:"Miss"})]})}),e.jsx(t,{item:!0,xs:12,sm:10,children:e.jsx(l,{id:"name",label:"Name",variant:"outlined",size:"small",value:a.PatName,onChange:C,fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsxs(t,{item:!0,container:!0,xs:12,sm:7,spacing:1,children:[e.jsx(t,{item:!0,xs:3,children:e.jsx(l,{id:"yyyy",label:"Age YY",variant:"outlined",value:a.PatAgeyy,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:3,children:e.jsx(l,{id:"mm",label:"Age MM",variant:"outlined",value:a.PatAgemm,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:3,children:e.jsx(l,{id:"dd",label:"Age DD",variant:"outlined",value:a.PatAgedd,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:3,children:e.jsxs(A,{variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(Q,{id:"genderLabel",sx:{fontSize:"1rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-1px"},children:"Gender"}),e.jsxs(H,{labelId:"genderLabel",id:"gender",label:"Gender",value:a.PatGender,children:[e.jsx(o,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(o,{value:"M",children:"Male"}),e.jsx(o,{value:"F",children:"Female"}),e.jsx(o,{value:"O",children:"Other"})]})]})})]}),e.jsx(t,{item:!0,xs:12,sm:5,children:e.jsx(l,{id:"phone1",label:"Phone1",variant:"outlined",size:"small",value:a.PatPhone,fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:12,children:e.jsx(l,{id:"email",label:"Email",variant:"outlined",value:a.PatEmail,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})})]})}),e.jsx(c,{sx:{border:"1px solid #ddd",padding:"16px",marginBottom:"10px",marginTop:"10px"},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:12,children:e.jsx(l,{id:"refby",label:"RefBy",value:a.RefBy,variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:12,children:e.jsx(l,{id:"outDr",label:"Out Dr",variant:"outlined",value:a.OutDr,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"branch",label:"Branch",variant:"outlined",value:a.BranchName,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"ipop",label:"IP/OP",variant:"outlined",value:a.PatOpNo,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"collmode",label:"Coll. Mode",variant:"outlined",value:a.CollMode,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"collby",label:"Coll. By",variant:"outlined",value:a.collBy,size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})})]})}),e.jsx(c,{sx:{border:"1px solid #ddd",padding:"16px",marginBottom:"10px",marginTop:"10px"},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"sampleOn",label:"Sample On",type:"datetime-local",variant:"outlined",value:a.SampleOn,size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"reportTime",label:"Report Time",type:"datetime-local",variant:"outlined",value:a.ReportTime,size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(A,{component:"fieldset",children:[e.jsx($,{variant:"body1",gutterBottom:!0,children:"Report Requested Through"}),e.jsxs(J,{row:!0,children:[e.jsx(x,{control:e.jsx(m,{checked:a.Reportreqpersonal,name:"personally"}),label:"Personally"}),e.jsx(x,{control:e.jsx(m,{checked:a.ReportReqcourier,name:"courier"}),label:"Courier"}),e.jsx(x,{control:e.jsx(m,{checked:a.ReportReqphn,name:"phone"}),label:"phone"}),e.jsx(x,{control:e.jsx(m,{checked:a.ReportReqemail,name:"email"}),label:"Email"}),e.jsx(x,{control:e.jsx(m,{checked:a.ReportReqsms,name:"sms"}),label:"SMS"})]})]})})]})}),e.jsx(c,{sx:{border:"1px solid #ddd",padding:"16px",marginBottom:"10px",marginTop:"10px"},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(l,{id:"invamount",label:"Inv_Amount",variant:"outlined",size:"small",value:a.NetAmount,fullWidth:!0,InputLabelProps:{style:{fontSize:"1rem"}}})}),e.jsx(t,{item:!0,xs:12,sm:12,children:e.jsx(l,{id:"Reason",label:"Reason",variant:"outlined",required:!0,size:"small",value:a.Reason||"",onChange:C,fullWidth:!0,multiline:!0,rows:5,InputLabelProps:{style:{fontSize:"1rem"}}})})]})}),e.jsx(K,{position:"top-center",autoClose:3e3,hideProgressBar:!0})]}),e.jsx(t,{container:!0,spacing:2,justifyContent:"flex-end",sx:{marginTop:0},children:e.jsxs(t,{item:!0,children:[e.jsx(b,{variant:"contained",onClick:G,sx:{marginTop:2,marginRight:1,backgroundColor:"#3095E5"},children:" Save "}),e.jsx(b,{variant:"contained",onClick:z,sx:{marginTop:2,marginLeft:2,backgroundColor:"#3095E5"},children:" New"}),e.jsx(b,{variant:"contained",onClick:z,sx:{marginTop:2,marginLeft:2,backgroundColor:"#3095E5"},children:"Exit"})]})})]})};export{ne as default};
