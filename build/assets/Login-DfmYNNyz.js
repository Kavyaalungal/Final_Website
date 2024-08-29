import{k as m,u,r,j as e}from"./index-B3RyQ9yT.js";import{ag as n,al as p,am as x}from"./ReactToastify-ZJDsgnqE.js";import{C as h,a as g}from"./CCard-DoGm4yM3.js";const f=()=>({type:"login"}),j=""+new URL("icon-logo-B4shHpSM.png",import.meta.url).href,b=()=>{const o=m(),i=u(),[t,l]=r.useState(""),[a,c]=r.useState(""),d=s=>{if(s.preventDefault(),!t||!a){x.warn("please enter username and password");return}o(f()),i("/")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
  body {
    overflow: hidden;
  }
  .content-wrapper {
    border: 2px solid #523885; 
    border-radius: 8px;
    padding: 20px;
    background-color: #fff;
  }
`}),e.jsxs(h,{className:"mb-4",children:[e.jsx("div",{className:"container-fluid d-flex justify-content-center align-items-center vh-100 p-0",children:e.jsx("div",{className:"row g-0 justify-content-center align-items-center w-100",children:e.jsx("div",{className:"col-lg-4 d-flex justify-content-center align-items-center",children:e.jsxs("div",{className:"content-wrapper w-100 p-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"index.html",className:"authentication-logo",children:e.jsx("img",{src:j,alt:"Logo",height:50,className:"auth-logo logo-dark mx-auto"})})}),e.jsx("div",{className:"p-2 mt-5",children:e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"mb-3 auth-form-group-custom",children:e.jsx(n,{id:"username",label:"Username",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}},value:t,onChange:s=>l(s.target.value),style:{marginTop:"10px"}})}),e.jsx("div",{className:"mb-3 auth-form-group-custom",children:e.jsx(n,{id:"password",label:"Password",variant:"outlined",size:"small",type:"password",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}},value:a,onChange:s=>c(s.target.value),style:{marginTop:"10px"}})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(g,{type:"submit",color:"primary",children:"Login"})}),e.jsx("div",{className:"mt-4 text-center"})]})})]})})})}),e.jsx(p,{position:"top-center",autoClose:3e3,hideProgressBar:!0})]})]})};export{b as default};
