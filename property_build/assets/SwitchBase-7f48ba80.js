import{aJ as J,aI as K,aK as F,aN as c,aL as M,r as Q,aQ as W,j as x,aR as A,aM as D,aS as G}from"./index-161aea56.js";import{u as H,a as T}from"./useFormControl-1e3ee782.js";import{B as V}from"./Typography-87e360c7.js";function X(e){return J("PrivateSwitchBase",e)}K("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:a,checked:i,disabled:r,edge:o}=e,l={root:["root",i&&"checked",r&&"disabled",o&&`edge${D(o)}`],input:["input"]};return G(l,X,a)},ee=F(V)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:M})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=Q.forwardRef(function(a,i){const{autoFocus:r,checked:o,checkedIcon:l,className:w,defaultChecked:h,disabled:S,disableFocusRipple:p=!1,edge:y=!1,icon:R,id:I,inputProps:P,inputRef:j,name:N,onBlur:f,onChange:m,onFocus:g,readOnly:z,required:E=!1,tabIndex:L,type:d,value:b}=a,U=W(a,Y),[k,q]=H({controlled:o,default:!!h,name:"SwitchBase",state:"checked"}),t=T(),v=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},O=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},_=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;q(C),m&&m(s,C)};let n=S;t&&typeof n>"u"&&(n=t.disabled);const $=d==="checkbox"||d==="radio",u=c({},a,{checked:k,disabled:n,disableFocusRipple:p,edge:y}),B=Z(u);return x.jsxs(ee,c({component:"span",className:A(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:O,ownerState:u,ref:i},U,{children:[x.jsx(se,c({autoFocus:r,checked:o,defaultChecked:h,className:B.input,disabled:n,id:$?I:void 0,name:N,onChange:_,readOnly:z,ref:j,required:E,ownerState:u,tabIndex:L,type:d},d==="checkbox"&&b===void 0?{}:{value:b},P)),k?l:R]}))}),de=te;export{de as S};
