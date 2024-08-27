import{J as D,o as E,K as R,q as k,b as d,L as S,_ as U,a8 as A,al as w,c as L,n as W}from"./TextField-C2sCDKYg.js";import{r as v,j as p}from"./index-WrV3SgJe.js";import{T as F,j as z}from"./DefaultLayout-Bt_hO4Vh.js";function B(e){return E("MuiFormControlLabel",e)}const t=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],I=e=>{const{classes:o,disabled:l,labelPlacement:n,error:s,required:r}=e,m={root:["root",l&&"disabled",`labelPlacement${k(n)}`,s&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",s&&"error"]};return W(m,B,o)},J=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${k(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),V=v.forwardRef(function(o,l){var n,s;const r=S({props:o,name:"MuiFormControlLabel"}),{className:m,componentsProps:q={},control:i,disabled:C,disableTypography:j,label:$,labelPlacement:N="end",required:h,slotProps:T={}}=r,_=U(r,H),b=A(),y=(n=C??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const M=w({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:M.error}),g=I(f),P=(s=T.typography)!=null?s:q.typography;let a=$;return a!=null&&a.type!==F&&!j&&(a=p.jsx(F,d({component:"span"},P,{className:L(g.label,P==null?void 0:P.className),children:a}))),p.jsxs(J,d({className:L(g.root,m),ownerState:f,ref:l},_,{children:[v.cloneElement(i,x),u?p.jsxs(z,{display:"block",children:[a,p.jsxs(K,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):a]}))});export{V as F};
