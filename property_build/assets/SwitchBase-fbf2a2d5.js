import{aH as G,aG as H,aI as F,aL as c,aJ as J,r as K,aO as Q,j as x,aP as W,aK as A,aQ as D}from"./index-7885ada7.js";import{u as M,a as T}from"./useFormControl-29cacc7e.js";import{B as V}from"./Typography-fc1873bf.js";function X(e){return G("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:a,checked:i,disabled:r,edge:o}=e,l={root:["root",i&&"checked",r&&"disabled",o&&`edge${A(o)}`],input:["input"]};return D(l,X,a)},ee=F(V)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:J})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=K.forwardRef(function(a,i){const{autoFocus:r,checked:o,checkedIcon:l,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:S=!1,icon:P,id:R,inputProps:I,inputRef:j,name:z,onBlur:f,onChange:m,onFocus:g,readOnly:E,required:L=!1,tabIndex:N,type:d,value:b}=a,O=Q(a,Y),[k,U]=M({controlled:o,default:!!h,name:"SwitchBase",state:"checked"}),t=T(),q=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},v=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},_=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;U(C),m&&m(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const $=d==="checkbox"||d==="radio",u=c({},a,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Z(u);return x.jsxs(ee,c({component:"span",className:W(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:q,onBlur:v,ownerState:u,ref:i},O,{children:[x.jsx(se,c({autoFocus:r,checked:o,defaultChecked:h,className:B.input,disabled:n,id:$?R:void 0,name:z,onChange:_,readOnly:E,ref:j,required:L,ownerState:u,tabIndex:N,type:d},d==="checkbox"&&b===void 0?{}:{value:b},I)),k?l:P]}))}),de=te;export{de as S};
