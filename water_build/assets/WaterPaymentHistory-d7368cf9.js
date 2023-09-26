import{l as n,v as H,m as I,I as T,W as j,k as r,o as R,j as t,E as z,h as v,q as _}from"./index-4a1e28f7.js";import{W as B}from"./WaterTopButtons-bfc36713.js";const q=()=>{var h,d,a,g,u,y;const[l,A]=n.useState(),[s,P]=n.useState(""),[C,o]=n.useState(!1);n.useState();const[p,E]=n.useState(!1),{id:c}=H(),x=I();T("Water Payment History");const{api_waterConsumerPaymentHistory:S,api_waterApprovedApplicationDetails:W,header:m}=j(),k=()=>{o(!0),_.post(W,{applicationId:c},m).then(function(e){console.log("water Approved Application Details",e.data.data),A(e.data.data),o(!1)}).catch(function(e){console.log("Error : water Approved Application Details",e),o(!1)})},F=()=>{o(!0),_.post(S,{consumerId:c},m).then(function(e){e.data.status?(console.log("water payment history",e.data.data),P(e.data.data),o(!1)):(console.log("No Data Found..",e),E(e.data.message))}).catch(function(e){console.log("Error : water payment history",e),o(!1)})};return n.useEffect(()=>{k(),F()},[c]),console.log("readyMadeListData11",s),console.log("readyMadeListData?.connection",s==null?void 0:s.connection),r(R,{children:[t(B,{active:"payment",consumerNo:l==null?void 0:l.consumer_no}),t("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:r("div",{className:"col-span-12 rounded-lg p-4",children:[C&&t(z,{})," ",p&&t("div",{className:"text-center mt-10",children:r("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl capitalize",children:[" ",p]})}),((h=s==null?void 0:s.Consumer)==null?void 0:h.length)<=0&&((d=s==null?void 0:s.connection)==null?void 0:d.length)<=0?t("div",{className:"text-center mt-10",children:t("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl capitalize",children:" No Payments Found Yet"})}):(s==null?void 0:s.length)!=0&&t("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:r("table",{className:"min-w-full leading-normal mt-2",children:[t("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:r("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transaction No"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payment Mode"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Date"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Type"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Paid For"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),r("tbody",{className:"text-sm",children:[((a=s==null?void 0:s.Consumer)==null?void 0:a.length)>0&&((g=s==null?void 0:s.Consumer)==null?void 0:g.map((e,i)=>{var b,f,N,w;return r("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_no}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.payment_mode}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_date}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_type}),r("td",{className:"px-2 py-2 text-sm text-left",children:[(f=v((b=e==null?void 0:e.demand)==null?void 0:b.demand_from))==null?void 0:f.format("MMM/yy")," - ",(w=v((N=e==null?void 0:e.demand)==null?void 0:N.demand_upto))==null?void 0:w.format("MMM/yy")]}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.amount}),t("td",{className:"px-2 py-2 text-sm text-left",children:t("button",{onClick:()=>x(`/water-demand-payment-receipt/${e==null?void 0:e.tran_no}`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})})),((u=s==null?void 0:s.connection)==null?void 0:u.length)>0&&((y=s==null?void 0:s.connection)==null?void 0:y.map((e,i)=>r("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),r("td",{className:"px-2 py-2 text-sm text-left",children:[e==null?void 0:e.tran_no,t("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"Application"})]}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.payment_mode}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_date}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.tran_type}),t("td",{className:"px-2 py-2 text-sm text-left",children:"Application"}),t("td",{className:"px-2 py-2 text-sm text-left",children:e==null?void 0:e.amount}),t("td",{className:"px-2 py-2 text-sm text-left",children:t("button",{onClick:()=>x(`/water-payment-receipt/${e==null?void 0:e.tran_no}/application`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})))]})]})}),t("div",{className:"w-full h-40"})]})})]})};export{q as default};
