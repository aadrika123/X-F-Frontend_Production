import{M as I,v as R,r as d,g as U,a as W,c as $,d as j,b as G,j as o,p as J,q as K,aQ as X,a3 as S,m as C,w as L,f as Y,a1 as Z}from"./index-f9255818.js";I.setAppElement("#root");function ot(a){const{t:m}=R();d.useState(!0);const[b,g]=d.useState(!1),[N,h]=d.useState(!1),[M,p]=d.useState(""),{api_sendMobileOtpAttachment:P,api_verifyHolding:tt,api_filterPropertyDetails:E}=Y();d.useContext(U),W();const[_,w]=d.useState(!1),[H,A]=d.useState(null),[F,B]=d.useState(""),[et,V]=d.useState(""),[f,D]=d.useState([]),O=$({ptnNo:j(),holdingNo:j()}),n=G({initialValues:{ptnNo:"",holdingNo:""},onSubmit:e=>{console.log("at submit form.....",e)},validationSchema:O}),T=e=>{let l=e.target.name,t=e.target.value;l=="ptnNo"?(n.setFieldValue("holdingNo",""),a==null||a.setholdingNo("")):(n.setFieldValue("ptnNo",""),a==null||a.setptnNo("")),l=="ptnNo"&&n.setFieldValue("ptnNo",t),l=="holdingNo"&&n.setFieldValue("holdingNo",t),l=="ptnNo"&&t.length>=10||l=="holdingNo"&&t.length>=10?h(!0):h(!1)},k=e=>{w(!1),g(!0),h(!1);let l;e.ptnNo.length==0?l={holdingNo:e.holdingNo}:l={ptNo:e.ptnNo},console.log("before send otp for attachment...",l),C.post(P,l,L()).then(t=>{var i,s,r,c,x;console.log("otp send for attachment response",t==null?void 0:t.data),(i=t==null?void 0:t.data)!=null&&i.status?(a==null||a.setpropertyAttachedMobileNo((r=(s=t==null?void 0:t.data)==null?void 0:s.data)==null?void 0:r.mobileNo),a==null||a.setptnCardStatus(!1),a==null||a.setotpCardStatus(!0),a==null||a.attachProperty(!0)):(Z("Mobile No. Does Not Exist or Invalid"),u(!0,(c=t==null?void 0:t.data)==null?void 0:c.message),a==null||a.setptnCardStatus(!1)),g(!1),u(!0,(x=t==null?void 0:t.data)==null?void 0:x.message)}).catch(t=>{console.log("error otp send",t),g(!1),u(!0,"Error occured. Please try again later."),h(!0)})},u=(e,l)=>{A(l),w(e)},q=(e,l,t)=>{if(n.values.holdingNo==""&&n.values.ptn==""){u(!0,"Enter holding no.");return}console.log("attach holding => ",e,l,t),B(""),console.log("otp send..."),g(!0),h(!1),l?a==null||a.setholdingNo(l):a==null||a.setptnNo(e),k(n.values)},z=[{Header:"Ward No.",accessor:"ward_name"},{Header:"Owner's Name",accessor:"owner_name"},{Header:"Holding No",accessor:"holding_no",Cell:({cell:e})=>o.jsx("span",{children:S(e.row.original.holding_no)})},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:e})=>o.jsx("span",{children:S(e.row.original.mobile_no)})},{Header:"Action",accessor:"id",Cell:({cell:e})=>o.jsx("button",{onClick:()=>{var l,t,i,s,r,c;return q((t=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:t.pt_no,(s=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:s.holding_no,(c=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:c.ulb_id)},className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:"Attach"})}],Q=()=>{var l;let e;(l=Object.entries(n==null?void 0:n.values))==null||l.map(([t,i],s)=>{i!=""&&(e={filteredBy:t,parameter:i,isLegacy:!1,page:1,perPage:100},V(t))}),g(!0),console.log("gettting body => ",e),C.post(E,e,L()).then(t=>{var i,s,r,c,x,y,v;console.log("holding list => ",t),(i=t==null?void 0:t.data)!=null&&i.status?(D((r=(s=t==null?void 0:t.data)==null?void 0:s.data)==null?void 0:r.data),((y=(x=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:x.data)==null?void 0:y.length)==0&&u(!0,"No Data Found !!!")):u(!0,(v=t==null?void 0:t.data)==null?void 0:v.message)}).catch(t=>{console.log("error getting holding list => ",t)}).finally(()=>g(!1))};return o.jsxs(o.Fragment,{children:[b&&o.jsx(J,{}),_&&o.jsx(K,{activateBottomErrorCard:u,errorTitle:H}),o.jsx("div",{class:"w-full sm:w-full  mx-auto",children:o.jsx("div",{class:"container mx-auto",children:o.jsxs("div",{class:"mx-auto flex flex-wrap gap-4 justify-center items-center",children:[o.jsx("div",{class:"w-max bg-white rounded text-center shadow-xl relative py-10 px-8",children:o.jsxs("div",{class:"",children:[o.jsx("button",{onClick:()=>a==null?void 0:a.closeModal(!1),type:"button",class:"absolute top-6 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:o.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:o.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),o.jsx("div",{class:"text-2xl font-bold px-10",children:m("tranPropertyDashboardPage.enterHoldingOrPtNoLabel.label")}),o.jsx("div",{class:"flex flex-col mt-4 text-center"}),o.jsx("div",{class:"flex flex-col mt-4 text-center",children:o.jsx("span",{className:"text-center text-red-400",children:F})}),o.jsx("div",{class:"flex flex-row justify-center text-center mt-5",children:o.jsxs("form",{onSubmit:n.handleSubmit,onChange:T,children:[o.jsxs("div",{children:[o.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold w-full text-left",children:m("tranPropertyDashboardPage.holdingNoLabel.label")}),o.jsx("input",{type:"text",...n.getFieldProps("holdingNo"),className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),o.jsx("div",{className:"text-red-500 mt-10",children:M}),o.jsxs("div",{class:"w-full text-center",children:[N&&o.jsx("button",{type:"button",onClick:Q,className:"w-full  py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:b?"Fetching...":"Submit"}),!N&&o.jsx("button",{type:"button",className:"w-full  py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:m("tranPropertyDashboardPage.submitLabel.label")})]})]})})]})}),(f==null?void 0:f.length)>0&&o.jsx("div",{class:"bg-white py-10 px-8 rounded text-center shadow-xl relative md:w-auto w-[97vw]",children:o.jsx(X,{dataList:f,columns:z})})]})})})]})}export{ot as default};
