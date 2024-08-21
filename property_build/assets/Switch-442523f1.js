import{aN as $,aG as k,aH as x,aI as d,aK as o,aM as b,d8 as m,d9 as f,r as y,aO as C,aL as l,j as n,aP as z,aQ as R}from"./index-48b3dac3.js";import{S as B}from"./SwitchBase-eb92d13e.js";function j(t){return $}function M(t){return x("MuiSwitch",t)}const T=k("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),s=T,N=["className","color","edge","size","sx"],O=j(),P=t=>{const{classes:a,edge:e,size:r,color:p,checked:u,disabled:h}=t,w={root:["root",e&&`edge${o(e)}`,`size${o(r)}`],switchBase:["switchBase",`color${o(p)}`,u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},g=R(w,M,a);return l({},a,g)},_=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,e.edge&&a[`edge${o(e.edge)}`],a[`size${o(e.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}}}]}),I=d(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.switchBase,{[`& .${s.input}`]:a.input},e.color!=="default"&&a[`color${o(e.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:b(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{[`&.${s.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:b(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?m(t.palette[a].main,.62):f(t.palette[a].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]})),U=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),D=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),E=y.forwardRef(function(a,e){const r=O({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:w="medium",sx:g}=r,S=C(r,N),i=l({},r,{color:u,edge:h,size:w}),c=P(i),v=n.jsx(D,{className:c.thumb,ownerState:i});return n.jsxs(_,{className:z(c.root,p),sx:g,ownerState:i,children:[n.jsx(I,l({type:"checkbox",icon:v,checkedIcon:v,ref:e,ownerState:i},S,{classes:l({},c,{root:c.switchBase})})),n.jsx(U,{className:c.track,ownerState:i})]})}),X=E;export{X as S};
