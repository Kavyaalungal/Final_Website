import{I as p,D as f,F as w,b as e,G as x,_ as F,Z as d,ad as G,c as C,J as y}from"./TextField-BMWG_paC.js";import{r as R,j}from"./index-CDnPdH3a.js";function D(o){return p("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const M=["className","row"],U=o=>{const{classes:r,row:t,error:s}=o;return y({root:["root",t&&"row",s&&"error"]},D,r)},_=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),N=R.forwardRef(function(r,t){const s=x({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=F(s,M),i=d(),u=G({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:u.error}),m=U(n);return j.jsx(_,e({className:C(m.root,a),ownerState:n,ref:t},c))});export{N as F};
