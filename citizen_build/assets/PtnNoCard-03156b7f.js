import{M as U,t as W,r as s,g as $,a as G,c as I,d as P,b as J,j as e,o as K,p as Q,aN as X,a0 as f,l as L,v as S,f as Y}from"./index-5738b2d0.js";U.setAppElement("#root");function ot(o){const{t:g}=W();s.useState(!0);const[m,u]=s.useState(!1),[w,x]=s.useState(!1),[C,Z]=s.useState(""),{api_sendMobileOtpAttachment:_,api_verifyHolding:tt,api_filterPropertyDetails:H}=Y(),{notify:M}=s.useContext($);G();const[E,N]=s.useState(!1),[A,D]=s.useState(null),[F,p]=s.useState(""),[et,B]=s.useState(""),[b,T]=s.useState([]),V=I({ptnNo:P(),holdingNo:P()}),n=J({initialValues:{ptnNo:"",holdingNo:""},onSubmit:a=>{console.log("at submit form.....",a)},validationSchema:V}),k=a=>{let l=a.target.name,t=a.target.value;l=="ptnNo"?(n.setFieldValue("holdingNo",""),o==null||o.setholdingNo("")):(n.setFieldValue("ptnNo",""),o==null||o.setptnNo("")),l=="ptnNo"&&n.setFieldValue("ptnNo",t),l=="holdingNo"&&n.setFieldValue("holdingNo",t),l=="ptnNo"&&t.length>=14||l=="holdingNo"&&t.length>=14?x(!0):x(!1)},O=a=>{N(!1),u(!0),x(!1);let l;a.ptnNo.length==0?l={holdingNo:a.holdingNo}:l={ptNo:a.ptnNo},console.log("before send otp for attachment...",l),L.post(_,l,S()).then(t=>{var i,d,r,c;console.log("otp send for attachment response",t==null?void 0:t.data),(i=t==null?void 0:t.data)!=null&&i.status?(o==null||o.setpropertyAttachedMobileNo((r=(d=t==null?void 0:t.data)==null?void 0:d.data)==null?void 0:r.mobileNo),o==null||o.setptnCardStatus(!1),o==null||o.setotpCardStatus(!0)):h(!0,(c=t==null?void 0:t.data)==null?void 0:c.message),u(!1)}).catch(t=>{console.log("error otp send",t),M("Something went wrong in attachment...","error"),u(!1),h(!0,"Error occured. Please try again later."),x(!0)})},h=(a,l)=>{D(l),N(a)},z=(a,l,t)=>{if(n.values.holdingNo==""&&n.values.ptn==""){h(!0,"Enter holding or pt no.");return}console.log("attach holding => ",a,l,t),p(""),console.log("otp send..."),u(!0),x(!1),l?o==null||o.setholdingNo(l):o==null||o.setptnNo(a),O(n.values)},q=[{Header:"Ward No.",accessor:"ward_name"},{Header:"Owner's Name",accessor:"owner_name"},{Header:"PT No.",accessor:"pt_no",Cell:({cell:a})=>e.jsx("span",{children:f(a.row.original.pt_no)})},{Header:"Holding No",accessor:"new_holding_no",Cell:({cell:a})=>e.jsx("span",{children:f(a.row.original.new_holding_no)})},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:a})=>e.jsx("span",{children:f(a.row.original.mobile_no)})},{Header:"Action",accessor:"id",Cell:({cell:a})=>e.jsxs("button",{onClick:()=>{var l,t,i,d,r,c;return z((t=(l=a==null?void 0:a.row)==null?void 0:l.original)==null?void 0:t.pt_no,(d=(i=a==null?void 0:a.row)==null?void 0:i.original)==null?void 0:d.new_holding_no,(c=(r=a==null?void 0:a.row)==null?void 0:r.original)==null?void 0:c.ulb_id)},className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:["Attach",g("tranPropertyDashboardPage.applyNewAssessmentLabel.label")]})}],R=()=>{var l;let a;(l=Object.entries(n==null?void 0:n.values))==null||l.map(([t,i],d)=>{i!=""&&(a={filteredBy:t,parameter:i,isLegacy:!1,page:1,perPage:100},B(t))}),u(!0),console.log("gettting body => ",a),L.post(H,a,S()).then(t=>{var i,d,r,c,y,j,v;console.log("holding list => ",t),(i=t==null?void 0:t.data)!=null&&i.status?(T((r=(d=t==null?void 0:t.data)==null?void 0:d.data)==null?void 0:r.data),((j=(y=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:y.data)==null?void 0:j.length)==0&&h(!0,"No Data Found !!!")):h(!0,(v=t==null?void 0:t.data)==null?void 0:v.message)}).catch(t=>{console.log("error getting holding list => ",t)}).finally(()=>u(!1))};return e.jsxs(e.Fragment,{children:[m&&e.jsx(K,{}),E&&e.jsx(Q,{activateBottomErrorCard:h,errorTitle:A}),e.jsx("div",{class:"w-full sm:w-full  mx-auto",children:e.jsx("div",{class:"container mx-auto",children:e.jsxs("div",{class:"mx-auto flex flex-wrap gap-4 justify-center items-center",children:[e.jsx("div",{class:"w-max bg-white rounded text-center shadow-xl relative py-10 px-8",children:e.jsxs("div",{class:"",children:[e.jsx("button",{onClick:()=>o==null?void 0:o.closeModal(!1),type:"button",class:"absolute top-6 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsx("div",{class:"text-2xl font-bold px-10",children:g("tranPropertyDashboardPage.enterHoldingOrPtNoLabel.label")}),e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center",children:g("tranPropertyDashboardPage.enter14DigitPtnNoLabel.label")})}),e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center text-red-400",children:F})}),e.jsx("div",{class:"flex flex-row justify-center text-center mt-5",children:e.jsxs("form",{onSubmit:n.handleSubmit,onChange:k,children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold w-full text-left",children:g("tranPropertyDashboardPage.ptnLabel.label")}),e.jsx("input",{type:"text",...n.getFieldProps("ptnNo"),className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),e.jsx("div",{className:"font-semibold text-indigo-500 mt-2",children:g("tranPropertyDashboardPage.orLabel2.label")}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold w-full text-left",children:g("tranPropertyDashboardPage.holdingNoLabel.label")}),e.jsx("input",{type:"text",...n.getFieldProps("holdingNo"),className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),e.jsx("div",{className:"text-red-500 mt-10",children:C}),e.jsxs("div",{class:"w-full text-center",children:[w&&e.jsx("button",{type:"button",onClick:R,className:"w-full  py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:m?"Fetching...":"Submit"}),!w&&e.jsx("button",{type:"button",className:"w-full  py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:g("tranPropertyDashboardPage.submitLabel.label")})]})]})})]})}),(b==null?void 0:b.length)>0&&e.jsx("div",{class:"bg-white py-10 px-8 rounded text-center shadow-xl relative md:w-auto w-[97vw]",children:e.jsx(X,{dataList:b,columns:q})})]})})})]})}export{ot as default};
