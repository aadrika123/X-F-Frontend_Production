import{Y as K,r as n,u as Q,j as t,aA as X,a9 as Z,b as r}from"./index-e53b351f.js";import{P as u}from"./PilotWorkflowListBox-eb95fe01.js";function na(a){var T,S,P,j,C,H,L,$,N,v,y,O,E,M,V,F,U,s,W,A;const{t:l}=K(),[D,p]=n.useState(!1),[R,aa]=n.useState(!1),[i,Y]=n.useState();n.useState(0);const[B,ta]=n.useState(),[g,d]=n.useState(!1);Q();const[e,z]=n.useState(0),[G,h]=n.useState([{title:"Inbox",tabIndex:0},{title:"Outbox",tabIndex:1},{title:"Special",tabIndex:2}]);n.useEffect(()=>{var w,I,f,c,o,x,m,k;(w=a==null?void 0:a.workflowData)!=null&&w.hasBTC&&((I=a==null?void 0:a.workflowData)!=null&&I.hasFieldVerification)&&h([{title:`${l("mainHoldingPage.propIndexBtnInbx.label")}`,tabIndex:0},{title:`${l("mainHoldingPage.propIndexBtnOtbx.label")}`,tabIndex:1},{title:`${l("mainHoldingPage.propIndexBtnSpcl.label")}`,tabIndex:2},{title:`${l("mainHoldingPage.propIndexBtnBtcLst.label")}`,tabIndex:3},{title:`${l("mainHoldingPage.propIndexBtnVerfLst.label")}`,tabIndex:4}]),!((f=a==null?void 0:a.workflowData)!=null&&f.hasBTC&&((c=a==null?void 0:a.workflowData)!=null&&c.hasFieldVerification))&&((o=a==null?void 0:a.workflowData)!=null&&o.hasBTC)&&h([{title:`${l("mainHoldingPage.propIndexBtnInbx.label")}`,tabIndex:0},{title:`${l("mainHoldingPage.propIndexBtnOtbx.label")}`,tabIndex:1},{title:`${l("mainHoldingPage.propIndexBtnSpcl.label")}`,tabIndex:2},{title:`${l("mainHoldingPage.propIndexBtnBtcLst.label")}`,tabIndex:3}]),!((x=a==null?void 0:a.workflowData)!=null&&x.hasBTC&&((m=a==null?void 0:a.workflowData)!=null&&m.hasFieldVerification))&&((k=a==null?void 0:a.workflowData)!=null&&k.hasFieldVerification)&&h([{title:`${l("mainHoldingPage.propIndexBtnInbx.label")}`,tabIndex:0},{title:`${l("mainHoldingPage.propIndexBtnOtbx.label")}`,tabIndex:1},{title:`${l("mainHoldingPage.propIndexBtnSpcl.label")}`,tabIndex:2},{title:`${l("mainHoldingPage.propIndexBtnVerfLst.label")}`,tabIndex:4}])},[a==null?void 0:a.workflowData]),n.useEffect(()=>{},[]);const b=w=>{var f,c,o,x,m,k;let I={workflowId:w};Z[(o=(c=(f=a==null?void 0:a.workflowData)==null?void 0:f.api)==null?void 0:c.api_workflowInfo)==null?void 0:o.method]((k=(m=(x=a==null?void 0:a.workflowData)==null?void 0:x.api)==null?void 0:m.api_workflowInfo)==null?void 0:k.url,I,r()).then(function(_){var q;Y((q=_.data)==null?void 0:q.data)}).catch(function(_){})},J=w=>{z(w)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"grid grid-cols-12 rounded-lg mt-0 -ml-10 shadow-xl broder-2 border-sky-200 bg-white",children:[t.jsxs("div",{className:"col-span-12 sm:col-span-12 ",children:[D&&t.jsx("h1",{children:"Looading ..."}),!D&&!R&&t.jsx(X,{settabButtonClickState:d,autoTabIndex:B,candidateListStatus:!0,workflowInfo:i,tabs:G,fun:J})]})," ",e==0&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg ",children:t.jsx(u,{tabIndex:e,autoTabIndex:B,tabButtonClickState:g,settabButtonClickState:d,api:(T=a==null?void 0:a.workflowData)==null?void 0:T.api,workflow:(S=a==null?void 0:a.workflowData)==null?void 0:S.workflow,COLUMNS:(P=a==null?void 0:a.workflowData)==null?void 0:P.tableColumns,customTabs:(j=a==null?void 0:a.workflowData)==null?void 0:j.customTabs,workflowInfo:i,boxType:"inbox",fetchWorkflowPermission:b})}),e==1&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(u,{tabButtonClickState:g,settabButtonClickState:d,tabIndex:e,api:(C=a==null?void 0:a.workflowData)==null?void 0:C.api,workflow:(H=a==null?void 0:a.workflowData)==null?void 0:H.workflow,COLUMNS:(L=a==null?void 0:a.workflowData)==null?void 0:L.tableColumns,customTabs:($=a==null?void 0:a.workflowData)==null?void 0:$.customTabs,workflowInfo:i,boxType:"outbox",fetchWorkflowPermission:b})}),e==2&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(u,{tabButtonClickState:g,settabButtonClickState:d,tabIndex:e,api:(N=a==null?void 0:a.workflowData)==null?void 0:N.api,workflow:(v=a==null?void 0:a.workflowData)==null?void 0:v.workflow,COLUMNS:(y=a==null?void 0:a.workflowData)==null?void 0:y.tableColumns,customTabs:(O=a==null?void 0:a.workflowData)==null?void 0:O.customTabs,workflowInfo:i,boxType:"specialbox",fetchWorkflowPermission:b})}),e==3&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(u,{tabButtonClickState:g,settabButtonClickState:d,tabIndex:e,api:(E=a==null?void 0:a.workflowData)==null?void 0:E.api,workflow:(M=a==null?void 0:a.workflowData)==null?void 0:M.workflow,COLUMNS:(V=a==null?void 0:a.workflowData)==null?void 0:V.tableColumns,customTabs:(F=a==null?void 0:a.workflowData)==null?void 0:F.customTabs,workflowInfo:i,boxType:"btcbox",fetchWorkflowPermission:b})}),e==4&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(u,{tabIndex:e,api:(U=a==null?void 0:a.workflowData)==null?void 0:U.api,workflow:(s=a==null?void 0:a.workflowData)==null?void 0:s.workflow,COLUMNS:(W=a==null?void 0:a.workflowData)==null?void 0:W.tableColumns,customTabs:(A=a==null?void 0:a.workflowData)==null?void 0:A.customTabs,workflowInfo:i,boxType:"fieldbox",fetchWorkflowPermission:b})})]})})}export{na as P};
