import{Y as aa,r as n,u as ta,j as t,aA as la,a9 as ea,b as na}from"./index-f8fb2358.js";import{P as h}from"./PilotWorkflowListBox-476b0188.js";function ca(a){var j,C,H,L,$,N,v,y,O,V,s,E,F,M,U,A,W,_,q,R;const{t:l}=aa(),[S,ia]=n.useState(!1),[J,wa]=n.useState(!1),[w,K]=n.useState();n.useState(0);const[P,da]=n.useState(),[D,d]=n.useState(!1),{passedTabIndex:Q,passedApplicationId:X}=ta();console.log("direc....passed..",Q,"  ",X);const[e,Z]=n.useState(0),[r,B]=n.useState([{title:"Inbox",tabIndex:0},{title:"Outbox",tabIndex:1},{title:"Special",tabIndex:2}]);n.useEffect(()=>{var i,f,c,b,x,k,m,g,u,I;console.log("has btc...",(i=a==null?void 0:a.workflowData)==null?void 0:i.hasBTC," ....",(f=a==null?void 0:a.workflowData)==null?void 0:f.hasFieldVerification),(c=a==null?void 0:a.workflowData)!=null&&c.hasBTC&&((b=a==null?void 0:a.workflowData)!=null&&b.hasFieldVerification)&&B([{title:`${l("mainHoldingPage.propIndexBtnInbx.label")}`,tabIndex:0},{title:`${l("mainHoldingPage.propIndexBtnOtbx.label")}`,tabIndex:1},{title:`${l("mainHoldingPage.propIndexBtnSpcl.label")}`,tabIndex:2},{title:`${l("mainHoldingPage.propIndexBtnBtcLst.label")}`,tabIndex:3},{title:`${l("mainHoldingPage.propIndexBtnVerfLst.label")}`,tabIndex:4}]),!((x=a==null?void 0:a.workflowData)!=null&&x.hasBTC&&((k=a==null?void 0:a.workflowData)!=null&&k.hasFieldVerification))&&((m=a==null?void 0:a.workflowData)!=null&&m.hasBTC)&&B([{title:`${l("mainHoldingPage.propIndexBtnInbx.label")}`,tabIndex:0},{title:`${l("mainHoldingPage.propIndexBtnOtbx.label")}`,tabIndex:1},{title:`${l("mainHoldingPage.propIndexBtnSpcl.label")}`,tabIndex:2},{title:`${l("mainHoldingPage.propIndexBtnBtcLst.label")}`,tabIndex:3}]),!((g=a==null?void 0:a.workflowData)!=null&&g.hasBTC&&((u=a==null?void 0:a.workflowData)!=null&&u.hasFieldVerification))&&((I=a==null?void 0:a.workflowData)!=null&&I.hasFieldVerification)&&B([{title:`${l("mainHoldingPage.propIndexBtnInbx.label")}`,tabIndex:0},{title:`${l("mainHoldingPage.propIndexBtnOtbx.label")}`,tabIndex:1},{title:`${l("mainHoldingPage.propIndexBtnSpcl.label")}`,tabIndex:2},{title:`${l("mainHoldingPage.propIndexBtnVerfLst.label")}`,tabIndex:4}])},[a==null?void 0:a.workflowData]),n.useEffect(()=>{},[]);const o=i=>{var c,b,x,k,m,g,u,I,Y;console.log("data at info...",i);let f={workflowId:i};console.log("before fetch workflow info... ",f),console.log("passed data app url... ",(x=(b=(c=a==null?void 0:a.workflowData)==null?void 0:c.api)==null?void 0:b.api_workflowInfo)==null?void 0:x.url),ea[(g=(m=(k=a==null?void 0:a.workflowData)==null?void 0:k.api)==null?void 0:m.api_workflowInfo)==null?void 0:g.method]((Y=(I=(u=a==null?void 0:a.workflowData)==null?void 0:u.api)==null?void 0:I.api_workflowInfo)==null?void 0:Y.url,f,na()).then(function(T){var z,G;console.log("workflow data in workflow...",(z=T.data)==null?void 0:z.data),K((G=T.data)==null?void 0:G.data)}).catch(function(T){console.log("workflow data error",T)})},p=i=>{Z(i)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"grid grid-cols-12 rounded-lg mt-0 -ml-10 shadow-xl broder-2 border-sky-200 bg-white",children:[t.jsxs("div",{className:"col-span-12 sm:col-span-12 ",children:[S&&t.jsx("h1",{children:"Looading ..."}),!S&&!J&&t.jsx(la,{settabButtonClickState:d,autoTabIndex:P,candidateListStatus:!0,workflowInfo:w,tabs:r,fun:p})]})," ",e==0&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg ",children:t.jsx(h,{tabIndex:e,autoTabIndex:P,tabButtonClickState:D,settabButtonClickState:d,api:(j=a==null?void 0:a.workflowData)==null?void 0:j.api,workflow:(C=a==null?void 0:a.workflowData)==null?void 0:C.workflow,COLUMNS:(H=a==null?void 0:a.workflowData)==null?void 0:H.tableColumns,customTabs:(L=a==null?void 0:a.workflowData)==null?void 0:L.customTabs,workflowInfo:w,boxType:"inbox",fetchWorkflowPermission:o})}),e==1&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(h,{tabButtonClickState:D,settabButtonClickState:d,tabIndex:e,api:($=a==null?void 0:a.workflowData)==null?void 0:$.api,workflow:(N=a==null?void 0:a.workflowData)==null?void 0:N.workflow,COLUMNS:(v=a==null?void 0:a.workflowData)==null?void 0:v.tableColumns,customTabs:(y=a==null?void 0:a.workflowData)==null?void 0:y.customTabs,workflowInfo:w,boxType:"outbox",fetchWorkflowPermission:o})}),e==2&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(h,{tabButtonClickState:D,settabButtonClickState:d,tabIndex:e,api:(O=a==null?void 0:a.workflowData)==null?void 0:O.api,workflow:(V=a==null?void 0:a.workflowData)==null?void 0:V.workflow,COLUMNS:(s=a==null?void 0:a.workflowData)==null?void 0:s.tableColumns,customTabs:(E=a==null?void 0:a.workflowData)==null?void 0:E.customTabs,workflowInfo:w,boxType:"specialbox",fetchWorkflowPermission:o})}),e==3&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(h,{tabButtonClickState:D,settabButtonClickState:d,tabIndex:e,api:(F=a==null?void 0:a.workflowData)==null?void 0:F.api,workflow:(M=a==null?void 0:a.workflowData)==null?void 0:M.workflow,COLUMNS:(U=a==null?void 0:a.workflowData)==null?void 0:U.tableColumns,customTabs:(A=a==null?void 0:a.workflowData)==null?void 0:A.customTabs,workflowInfo:w,boxType:"btcbox",fetchWorkflowPermission:o})}),e==4&&t.jsx("div",{className:"col-span-12 sm:col-span-12 shadow-lg bg-white overflow-y-scroll",children:t.jsx(h,{tabIndex:e,api:(W=a==null?void 0:a.workflowData)==null?void 0:W.api,workflow:(_=a==null?void 0:a.workflowData)==null?void 0:_.workflow,COLUMNS:(q=a==null?void 0:a.workflowData)==null?void 0:q.tableColumns,customTabs:(R=a==null?void 0:a.workflowData)==null?void 0:R.customTabs,workflowInfo:w,boxType:"fieldbox",fetchWorkflowPermission:o})})]})})}export{ca as P};
