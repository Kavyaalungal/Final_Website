import{u as p,l as m,r,j as e}from"./index-BuY_08lR.js";import{ad as n,aj as u,ak as h}from"./ReactToastify-C6ELBCVA.js";import{C as x,a as g}from"./CCard-D14SBmOQ.js";const f=""+new URL("icon-logo-B4shHpSM.png",import.meta.url).href,j=()=>({type:"login"}),y=()=>{const o=p(),i=m(),[t,l]=r.useState(""),[s,d]=r.useState(""),c=a=>{if(a.preventDefault(),!t||!s){h.warn("Please enter username and password");return}o(j()),i("/")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        body, html {
          // margin: 0;
          // padding: 0;
          // height: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
          background-color: #f8f9fa;
        }
        .card-container {
          display: flex;
          justify-content: center;
           align-items: center;
          height: 100%;
          width: 100%;
        }
        .content-wrapper {
          padding: 40px; /* Increase padding to make the card larger */
          background-color: #fff;
          width: 100%;
          max-width: 500px; /* Optional: limit the max-width */
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Optional: add a subtle shadow for depth */
        }
      `}),e.jsx("div",{className:"card-container",children:e.jsx(x,{className:"content-wrapper",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"index.html",className:"authentication-logo",children:e.jsx("img",{src:f,alt:"Logo",height:50,className:"auth-logo logo-dark mx-auto"})})}),e.jsx("div",{className:"p-2 mt-5",children:e.jsxs("form",{onSubmit:c,children:[e.jsx("div",{className:"mb-3 auth-form-group-custom",children:e.jsx(n,{id:"username",label:"Username",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}},value:t,onChange:a=>l(a.target.value),style:{marginTop:"10px"}})}),e.jsx("div",{className:"mb-3 auth-form-group-custom",children:e.jsx(n,{id:"password",label:"Password",variant:"outlined",size:"small",type:"password",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}},value:s,onChange:a=>d(a.target.value),style:{marginTop:"10px"}})}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx(g,{type:"submit",color:"primary",children:"Login"})})]})})]})})}),e.jsx(u,{position:"top-center",autoClose:3e3,hideProgressBar:!0})]})};export{y as default};
