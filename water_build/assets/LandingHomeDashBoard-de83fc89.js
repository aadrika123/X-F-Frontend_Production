import{R as le,y as K,x as J,l as o,m as X,k as t,o as _,j as e,G as Q,M as z,h as R,z as ie,W as ne,w as ae,q as G,a2 as V,a3 as re,a4 as oe,a5 as se,a6 as ce,a7 as de}from"./index-419e9b64.js";import me from"./WaterJskDashboard-32c17af5.js";function Z(){const{notify:n}=le.useContext(K);return n}const ge="/assets/role-9fef35d5.png";function xe(n){var g,H,h,b,A,v,w,E,x,L,M,u,W,j,C,P,f,k,s;const{t:i}=J(),[d,a]=o.useState(!1);o.useState();const[c,m]=o.useState("recent");Z();const N=X(),l=n==null?void 0:n.applicationDashboardData;return t(_,{children:[d&&t("div",{className:"inline",children:[" ",e(Q,{})," "]}),t("div",{className:" p-4 -mt-16 z-0 rounded-lg",children:[t("div",{className:"grid md:grid-cols-3 grid-cols-1 mt-10",children:[t("div",{className:"shadow-md bg-white border divide-y m-2",children:[t("div",{className:"flex justify-between m-5",children:[e("p",{className:"h-10 w-10 overflow-auto rounded-full border bg-indigo-100 border-indigo-300 shadow-md",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/281/281760.png",alt:"File Image"})}),e("p",{className:"font-bold text-gray-800 text-lg",children:i("tranWaterHomePage.todayAppliedApplicationsLabel.label")}),e("p",{className:"p-1 px-2 rounded-md border border-indigo-300 bg-indigo-100 text-indigo-800 font-semibold text-2xl",children:(g=l==null?void 0:l.applicationDetails)==null?void 0:g.applicationCount})]}),t("div",{className:"flex justify-around text-center mb-5",children:[t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(H=l==null?void 0:l.applicationDetails)==null?void 0:H.newConnectionList}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.newConnectionLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(h=l==null?void 0:l.applicationDetails)==null?void 0:h.RegulizationList}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.regularizationLabel.label")})]})]})]}),t("div",{className:"shadow-md bg-white border divide-y-2 m-2",children:[t("div",{className:"flex justify-between m-5",children:[e("p",{className:"h-10 w-10 overflow-auto rounded-full border bg-indigo-100 border-indigo-300 shadow-md",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/925/925014.png",alt:"File Image"})}),e("p",{className:"font-bold text-gray-800 text-lg",children:i("tranWaterHomePage.todaysTotalCollectionLabel.label")}),t("p",{className:"p-1 px-2 rounded-md border border-indigo-300 bg-indigo-100 text-indigo-800 font-semibold text-2xl",children:[e("span",{className:"text-xl",children:"₹"})," ",(b=l==null?void 0:l.amountData)==null?void 0:b.totalCollection]})]}),t("div",{className:"flex justify-around text-center",children:[t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(A=l==null?void 0:l.amountData)==null?void 0:A.cashAmount}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.cashLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(v=l==null?void 0:l.amountData)==null?void 0:v.onlineAmount}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.qrUpiLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(w=l==null?void 0:l.amountData)==null?void 0:w.ddAmount}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.ddLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(E=l==null?void 0:l.amountData)==null?void 0:E.chequeAmount}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.chequeLabel.label")})]})]})]}),t("div",{className:"shadow-md bg-white border divide-y-2 m-2",children:[t("div",{className:"flex justify-between m-5",children:[e("p",{className:"h-10 w-10 overflow-auto rounded-full border bg-indigo-100 border-indigo-300 shadow-md",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/925/925547.png",alt:"File Image"})}),e("p",{className:"font-bold text-gray-800 text-lg",children:i("tranWaterHomePage.todaysTotalTransactionsLabel.label")}),e("p",{className:"p-1 px-2 rounded-md border border-indigo-300 bg-indigo-100 text-indigo-800 font-semibold text-xl",children:(x=l==null?void 0:l.transactionCount)==null?void 0:x.totalCollectionCount})]}),t("div",{className:"flex justify-around text-center",children:[t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(L=l==null?void 0:l.transactionCount)==null?void 0:L.cashCollection}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.cashLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(M=l==null?void 0:l.transactionCount)==null?void 0:M.onlineCollection}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.qrUpiLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(u=l==null?void 0:l.transactionCount)==null?void 0:u.ddCollection}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.ddLabel.label")})]}),t("div",{children:[e("p",{className:"font-bold text-xl text-gray-800",children:(W=l==null?void 0:l.transactionCount)==null?void 0:W.chequeCollection}),e("p",{className:"text-gray-700 text-sm font-semibold",children:i("tranWaterHomePage.chequeLabel.label")})]})]})]})]}),e("p",{className:"mt-5"}),t("div",{className:"flex space-x-5",children:[e("button",{onClick:()=>m("recent"),className:`px-5 py-2 rounded border ${c=="recent"?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"}`,children:i("tranWaterHomePage.recentApplicationsLabel.label")}),e("button",{onClick:()=>m("search"),className:`px-5 py-2 rounded border ${c=="search"?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"}`,children:i("tranWaterHomePage.searchApplicationsLabel.label")})]}),c=="recent"&&t(_,{children:[e("div",{className:"px-1 font-semibold  text-gray-500 mt-5 google-roboto",children:t("div",{className:"flex-initial",children:[e(z,{className:"inline"})," ",i("tranWaterHomePage.recentApplicationsLabel.label")]})}),e("div",{className:"container mx-auto mt-2  rounded-lg bg-white",children:e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto w-full",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:t("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-indigo-200",children:t("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-indigo-300 text-gray-800  text-left text-sm",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-indigo-300 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.applicationNoLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-indigo-300 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.applicantNameLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-indigo-300 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.assessmentTypeLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-indigo-300 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.applyDateLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-indigo-300 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.actionLabel.label")})]})}),t("tbody",{children:[((j=l==null?void 0:l.applicationList)==null?void 0:j.length)!=0&&((C=l==null?void 0:l.applicationList)==null?void 0:C.map((r,p)=>t("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-sm",children:p+1}),e("td",{className:"px-2 py-2 text-sm",children:r==null?void 0:r.application_no}),e("td",{className:"px-2 py-2 text-sm",children:r==null?void 0:r.applicantname}),t("td",{className:"px-2 py-2 text-sm",children:[(r==null?void 0:r.connection_type_id)==1&&"New Connection",(r==null?void 0:r.connection_type_id)==2&&"Regularization"]}),t("td",{className:"px-2 py-2 text-sm text-left",children:[" ",R(r==null?void 0:r.apply_date,"YYYY-MM-DD").format("DD-MMM-yy")]}),e("td",{className:"px-2 py-2 text-sm text-left",children:e("button",{type:"button",onClick:()=>N(`/waterViewApplication/${r==null?void 0:r.id}`),className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:i("tranWaterHomePage.viewLabel.label")})})]}))),((P=l==null?void 0:l.applicationList)==null?void 0:P.length)==0&&e("tr",{children:e("td",{colSpan:5,className:"text-center text-red-500 font-semibold py-4",children:i("tranWaterHomePage.noApplicationFoundLabel.label")})})]})]})})})})}),t("div",{className:"container mx-auto mt-10 rounded-lg",children:[e("div",{className:"px-1 font-semibold  text-gray-500 mt-10 google-roboto",children:t("div",{className:"flex-initial",children:[e(z,{className:"inline"})," ",i("tranWaterHomePage.recentPaymentsLabel.label")]})}),e("div",{className:"py-0 shadow-xl mt-3 bg-white",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:t("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-indigo-200",children:t("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.transactionNoLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.amountLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.paymentModeLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.dateLabel.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("tranWaterHomePage.actionLabel.label")})]})}),t("tbody",{children:[((f=l==null?void 0:l.transactionDetails)==null?void 0:f.length)!=0&&((k=l==null?void 0:l.transactionDetails)==null?void 0:k.map((r,p)=>t("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-sm text-left",children:p+1}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.tran_no}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.amount}),e("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.payment_mode}),e("td",{className:"px-2 py-2 text-sm text-left",children:R(r==null?void 0:r.tran_date,"YYYY-MM-DD").format("DD-MMM-yy")}),e("td",{className:"px-2 py-2 text-sm text-left",children:e("button",{type:"button",onClick:()=>N(`/water-demand-payment-receipt/${r==null?void 0:r.id}`),className:"px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:i("tranWaterHomePage.viewLabel.label")})})]}))),((s=l==null?void 0:l.transactionDetails)==null?void 0:s.length)==0&&e("tr",{children:e("td",{colSpan:5,className:"text-center text-red-500 font-semibold py-4",children:i("tranWaterHomePage.noPaymentFoundLabel.label")})})]})]})})})})]})]}),c=="search"&&t(_,{children:[e("div",{className:"px-1 font-semibold  text-gray-500 mt-5 google-roboto",children:t("div",{className:"flex-initial",children:[e(z,{className:"inline"})," ",i("tranWaterHomePage.searchApplicationsByDateLabel.label")]})}),e(me,{})]})]})]})}const he="/assets/forward-40be1d8b.png",pe="/assets/pending-8d2a86b8.png",be="/assets/received-89599cf5.png";function ue(n){const[i,d]=o.useState(!1),a=n==null?void 0:n.worflowDashData;return t(_,{children:[i&&t("div",{className:"inline",children:[" ",e(Q,{})," "]}),e("div",{className:"bg-gray-50 p-5 -mt-16 z-0 rounded-lg",children:t("div",{className:"grid md:grid-cols-3 grid-cols-1 mt-10",children:[t("div",{className:"border border-indigo-100 bg-white shadow-md rounded-md p-3 m-2 ",children:[e("img",{src:he,className:"w-16 absolute opacity-70",alt:""}),t("div",{className:"col-span-6 space-y-4 mt-4",children:[e("p",{className:"text-3xl font-semibold text-black text-center",children:a==null?void 0:a.todayForwardCount}),e("p",{className:"text-lg font-bold text-gray-700 google-roboto text-center",children:"Application Forwarded Today"})]})]}),t("div",{className:"border border-indigo-100 bg-white shadow-md rounded-md p-3 m-2 ",children:[e("img",{src:be,className:"w-16 absolute opacity-70",alt:""}),t("div",{className:"col-span-6 space-y-4 mt-4",children:[e("p",{className:"text-3xl font-semibold text-black text-center",children:a==null?void 0:a.todayReceivedCount}),e("p",{className:"text-lg font-bold text-gray-700 google-roboto text-center",children:"Application Received Today"})]})]}),t("div",{className:"border border-indigo-100 bg-white shadow-md rounded-md p-3 m-2 ",children:[e("img",{src:pe,className:"w-16 absolute opacity-70",alt:""}),t("div",{className:"col-span-6 space-y-4 mt-4",children:[e("p",{className:"text-3xl font-semibold text-black text-center",children:a==null?void 0:a.pendingApplication}),e("p",{className:"text-lg font-bold text-gray-700 google-roboto text-center",children:"Total Pending Application"})]})]})]})})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var y=function(){return y=Object.assign||function(i){for(var d,a=1,c=arguments.length;a<c;a++){d=arguments[a];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(i[m]=d[m])}return i},y.apply(this,arguments)};function fe(n,i){var d={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&i.indexOf(a)<0&&(d[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(n);c<a.length;c++)i.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(n,a[c])&&(d[a[c]]=n[a[c]]);return d}var ye=function(){return Math.random().toString(36).substring(6)},Ne=function(n){var i=n.animate,d=i===void 0?!0:i,a=n.animateBegin,c=n.backgroundColor,m=c===void 0?"#f5f6f7":c,N=n.backgroundOpacity,l=N===void 0?1:N,g=n.baseUrl,H=g===void 0?"":g,h=n.children,b=n.foregroundColor,A=b===void 0?"#eee":b,v=n.foregroundOpacity,w=v===void 0?1:v,E=n.gradientRatio,x=E===void 0?2:E,L=n.gradientDirection,M=L===void 0?"left-right":L,u=n.uniqueKey,W=n.interval,j=W===void 0?.25:W,C=n.rtl,P=C===void 0?!1:C,f=n.speed,k=f===void 0?1.2:f,s=n.style,r=s===void 0?{}:s,p=n.title,S=p===void 0?"Loading...":p,T=n.beforeMask,O=T===void 0?null:T,F=fe(n,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),I=u||ye(),Y=I+"-diff",$=I+"-animated-diff",U=I+"-aria",ee=P?{transform:"scaleX(-1)"}:null,q="0; "+j+"; 1",B=k+"s",te=M==="top-bottom"?"rotate(90)":void 0;return o.createElement("svg",y({"aria-labelledby":U,role:"img",style:y(y({},r),ee)},F),S?o.createElement("title",{id:U},S):null,O&&o.isValidElement(O)?O:null,o.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+H+"#"+Y+")",style:{fill:"url("+H+"#"+$+")"}}),o.createElement("defs",null,o.createElement("clipPath",{id:Y},h),o.createElement("linearGradient",{id:$,gradientTransform:te},o.createElement("stop",{offset:"0%",stopColor:m,stopOpacity:l},d&&o.createElement("animate",{attributeName:"offset",values:-x+"; "+-x+"; 1",keyTimes:q,dur:B,repeatCount:"indefinite",begin:a})),o.createElement("stop",{offset:"50%",stopColor:A,stopOpacity:w},d&&o.createElement("animate",{attributeName:"offset",values:-x/2+"; "+-x/2+"; "+(1+x/2),keyTimes:q,dur:B,repeatCount:"indefinite",begin:a})),o.createElement("stop",{offset:"100%",stopColor:m,stopOpacity:l},d&&o.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+x),keyTimes:q,dur:B,repeatCount:"indefinite",begin:a})))))},D=function(n){return n.children?o.createElement(Ne,y({},n)):o.createElement(ve,y({},n))},ve=function(n){return o.createElement(D,y({viewBox:"0 0 476 124"},n),o.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),o.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),o.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),o.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),o.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),o.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const we=D;function Ce(){var P,f,k;const{t:n}=J(),[i,d]=o.useState(),[a,c]=o.useState(),[m,N]=o.useState(),[l,g]=o.useState(!1),[H,h]=o.useState(!1);Z();const b=X();ie(`${n("tranWaterHomePage.homeLabel.label")}`);const{api_waterWorkflowDashboardData:A,api_waterApplicationDashboardData:v,header:w}=ne(),{userName:E,roles:x,setuserName:L,setroles:M}=o.useContext(K),u={name:"Mr Developer",ulb:(P=ae())==null?void 0:P.ulb_name,mobileNo:"9123254999",email:"abc@gmail.com"};o.useEffect(()=>{W(),j()},[]);const W=()=>{h(!0),G.post(A,{},w).then(s=>{s.data.status?(d(s.data.data),h(!0)):(console.log("Failed to get Workflow dashboard data",s),h(!0))}).catch(s=>{console.log("Exception while getting Workflow dashboard data",s),h(!0)})},j=()=>{g(!0),G.post(v,{},w).then(s=>{var r,p,S,T,O,F;s.data.status?(console.log("==>> Application Dashboard data",(r=s==null?void 0:s.data)==null?void 0:r.data),M(((S=(p=s==null?void 0:s.data)==null?void 0:p.data)==null?void 0:S.roleName)||"N/A"),L(((F=(O=(T=s==null?void 0:s.data)==null?void 0:T.data)==null?void 0:O.userDetails)==null?void 0:F.user_name)||"N/A"),c(s.data.data),g(!1)):(console.log("Failed to get Dashboard data",s),g(!1))}).catch(s=>{console.log("Exception while getting dashboard data",s),g(!1)})},C=R(Date()).format("DD-MMM-yy");return o.useEffect(()=>{const s=setInterval(()=>{const r=R(Date().toLocaleString()).format("hh:mm:ss A");N(r)},1e3);return()=>clearInterval(s)},[]),e(_,{children:t("div",{className:"shadow-xl  mt-4 border bg-white rounded-md m-5 relative ",children:[e("div",{className:"shadow-xl p-10 mt-4 border bg-white border-indigo-300 rounded-md m-5 relative",children:t("div",{className:"flex flex-col sm:flex-row",children:[e("div",{className:"flex-initial sm:flex-row",children:e("div",{className:"flex flex-col w-20 h-20 justify-center items-center",children:t("div",{className:"relative",children:[e("img",{className:"w-20 rounded-full border bg-gray-700",src:ge,alt:""}),e(V,{anchorId:"button-0"}),e("span",{id:"button-0","data-tooltip-content":"Click to edit profile.",className:"absolute right-2 top-2",children:e(re,{className:"text-white cursor-pointer hover:scale-105 font-semibold text-lg"})})]})})}),t("div",{className:"flex-initial ml-4 sm:flex-row",children:[t("div",{className:"mt-2 space-x-5",children:[t("span",{className:"text-gray-600",children:[e(oe,{className:"inline text-green-500 text-xl"})," ",n("tranWaterHomePage.verifiedAccountLabel.label")]}),t("span",{className:"text-gray-600",children:[e(se,{className:"inline"})," ",(u==null?void 0:u.ulb)||"N/A"]})]}),t("div",{className:"mt-2 space-x-12",children:[t("span",{className:"text-gray-600",children:[e(ce,{className:"inline"})," ",((f=i==null?void 0:i.userDetails)==null?void 0:f.mobile)||"N/A"]}),t("span",{className:"text-gray-600",children:[e(de,{className:"inline text-xl"})," ",((k=i==null?void 0:i.userDetails)==null?void 0:k.email)||"N/A"]})]})]}),t("div",{className:"sm:flex-row ml-10 mt-2",children:[t("p",{children:[n("tranWaterHomePage.dateLabel.label")," ",C]}),t("p",{children:[n("tranWaterHomePage.timeLabel.label")," ",m]})]}),(a==null?void 0:a.canView)&&(a==null?void 0:a.canView)==!0&&t("div",{className:"flex-1 text-right justify-center items-center h-full",children:[e(V,{anchorId:"button-2"}),e("button",{id:"button-2","data-tooltip-content":"Click to apply new water connection.",onClick:()=>b("/water-jsk-apply"),className:"text-white px-8 py-3 bg-indigo-600 font-medium border text-sm leading-tight capitalize rounded shadow-md hover:bg-indigo-800 hover:shadow-lg  transition duration-150 ease-in-out",children:n("tranWaterHomePage.applyWaterConnectionHeadLabel.label")})]}),a&&(a==null?void 0:a.canView)==!1&&t("div",{className:"flex-1 text-right justify-center items-center h-full",children:[e(V,{anchorId:"button-3"}),e("button",{id:"button-3","data-tooltip-content":"Click and enter to workflow.",onClick:()=>b("/water-workflow-new"),className:"text-white px-8 py-3 bg-indigo-600 font-medium border text-sm leading-tight capitalize rounded shadow-md hover:bg-indigo-800 hover:shadow-lg  transition duration-150 ease-in-out",children:n("tranWaterHomePage.gotoWorkflowLabel.label")})]})]})}),l&&e(_,{children:e("div",{className:"flex justify-center",children:t(we,{speed:3,width:725,height:157,viewBox:"0 0 725 157",backgroundColor:"#f3f3f3",foregroundColor:"#adb6e6",children:[e("rect",{x:"84",y:"54",rx:"3",ry:"3",width:"725",height:"11"}),e("rect",{x:"10",y:"80",rx:"3",ry:"3",width:"725",height:"12"}),e("rect",{x:"7",y:"100",rx:"3",ry:"3",width:"725",height:"13"}),e("rect",{x:"9",y:"123",rx:"3",ry:"3",width:"725",height:"15"})]})})}),t("div",{className:"",children:[(a==null?void 0:a.canView)&&e(xe,{applicationDashboardData:a}),(i==null?void 0:i.canView)&&e(ue,{worflowDashData:i})]}),e("div",{className:"w-full h-40"})]})})}export{Ce as default};
