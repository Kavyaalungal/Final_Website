import{r as h,_ as b,R as g,b as v,c as N,P as r,n as d}from"./index-B78iILjS.js";import{C as B}from"./ReactToastify-B1r_bK_u.js";var x=h.forwardRef(function(e,n){var t,l=e.children,a=e.as,s=a===void 0?"button":a,c=e.className,o=e.color,i=e.shape,C=e.size,f=e.type,u=f===void 0?"button":f,p=e.variant,m=b(e,["children","as","className","color","shape","size","type","variant"]);return g.createElement(B,v({as:m.href?"a":s},!m.href&&{type:u},{className:N("btn",(t={},t["btn-".concat(o)]=o&&!p,t["btn-".concat(p,"-").concat(o)]=o&&p,t["btn-".concat(C)]=C,t),i,c)},m,{ref:n}),l)});x.propTypes={as:r.elementType,children:r.node,className:r.string,color:d,shape:r.string,size:r.oneOf(["sm","lg"]),type:r.oneOf(["button","submit","reset"]),variant:r.oneOf(["outline","ghost"])};x.displayName="CButton";var y=h.forwardRef(function(e,n){var t,l=e.children,a=e.className,s=e.color,c=e.textBgColor,o=e.textColor,i=b(e,["children","className","color","textBgColor","textColor"]);return g.createElement("div",v({className:N("card",(t={},t["bg-".concat(s)]=s,t["text-".concat(o)]=o,t["text-bg-".concat(c)]=c,t),a)},i,{ref:n}),l)});y.propTypes={children:r.node,className:r.string,color:d,textBgColor:d,textColor:r.string};y.displayName="CCard";export{y as C,x as a};
