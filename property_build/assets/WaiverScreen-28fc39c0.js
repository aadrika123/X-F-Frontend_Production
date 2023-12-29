import{u as oe,a as ie,e as ce,r,q as de,a2 as me,s as H,a3 as y,a4 as c,w as xe,j as e,B as pe,a5 as ue,i as w,a6 as Y,W as d,A as fe,a7 as he,Q as be,a8 as ye,g as we}from"./index-5b0f4ad0.js";import{B as ge}from"./BasicScreen-78ad290e.js";import{A as je}from"./ApplicationSubmitScreen-c372d293.js";import"./index-dbf0bded.js";import"./index.esm-e38c83c4.js";import"./check-f4ca1ac8.js";/* empty css             */const ke=()=>{var E,R,z;const{id:g,type:o}=oe();ie("Waiver Demand Screen");const{post_waiverDemand:M}=we(),$=ce(),[Q,I]=r.useState(!1),[U,G]=r.useState(!1),[J,K]=r.useState(""),[a,X]=r.useState([]),[j,Z]=r.useState([]),[v,N]=r.useState(!1),[P,_]=r.useState(!1),[A,S]=r.useState(!1),[m,C]=r.useState(!1),[L,ee]=r.useState(!1),[ae,te]=r.useState(""),[q,D]=r.useState(null),[p,F]=r.useState(0),[u,k]=r.useState(0),[f,B]=r.useState(0),[h,W]=r.useState(0);let se=de({waiveType:me().min(1,"Check atleast one to waive off").of(H().required("Array items must be non-empty strings")),lateAssessmentPenalty:y().min(1,"can't be equal or below zero").max(c((o=="saf",a==null?void 0:a.lateAssessmentPenalty)),"amount exceeded"),onepercentPenalty:y().min(1,"can't be equal or below zero").max(c(o=="saf"?a==null?void 0:a.totalOnePercPenalty:a==null?void 0:a.onePercPenalty),"amount exceeded"),rwhPenaltya:y().min(1,"can't be equal or below zero").max(c((o=="saf",a==null?void 0:a.additionalTax)),"amount exceeded"),bill:y().min(1,"can't be equal or below zero").max(c(a==null?void 0:a.payableAmount),"amount exceeded"),desc:H().required("Enter description")});const n=xe({initialValues:{waiveType:[],waiveProof:"",onepercentPenalty:"",rwhPenaltya:"",bill:"",lateAssessmentPenalty:"",desc:""},enableReinitialize:!0,onSubmit:s=>{if(console.log("submitting data => ",s),ne())console.log("validation ok "),le(s);else return},validationSchema:se}),le=s=>{I(!0);let t=new FormData;o=="saf"?t.append("safId",g):t.append("propertyId",g),t.append("waiverDocument",q),t.append("docCode","WAIVER_PROOF"),t.append("description",s==null?void 0:s.desc),t.append("isOnePercentPenalty",P),t.append("onePercentPenaltyAmount",c(o=="saf"?a==null?void 0:a.totalOnePercPenalty:a==null?void 0:a.onePercPenalty)),t.append("onePercentPenaltyWaiverAmount",u),t.append("isRwhPenalty",A),t.append("rwhAmount",c((o=="saf",a==null?void 0:a.additionalTax))),t.append("rwhWaiverAmount",p),t.append("isLateAssessmentPenalty",v),t.append("lateAssessmentPenaltyAmount",c((o=="saf",a==null?void 0:a.lateAssessmentPenalty))),t.append("lateAssessmentPenaltyWaiverAmount",h),t.append("isBillWaiver",m),t.append("billAmount",c(a==null?void 0:a.payableAmount)),t.append("billWaiverAmount",f),fe.post(M,t,he()).then(l=>{var x,V,O;(x=l==null?void 0:l.data)!=null&&x.status?(console.log("waiver data submitted => ",l),be.success("Waiver demand requested successfully !!!"),te((V=l==null?void 0:l.data)==null?void 0:V.data),ee(!0)):(console.log("waiver data false => ",l),i(!0,(O=l==null?void 0:l.data)==null?void 0:O.message))}).catch(l=>{console.log("Waiver data error => ",l),i(!0,l==null?void 0:l.message)}).finally(()=>{I(!1)})},ne=()=>v&&h==0||P&&u==0||A&&p==0||m&&f==0?(i(!0,"You haven't requested to waive off any amount."),!1):q==null?(n.setFieldValue("waiverProof",""),i(!0,"Select document"),!1):!0,re=s=>{const t=s.target.id,l=s.target.checked;if(t=="penalty"&&(l?_(!0):(_(!1),n.setFieldValue("onepercentPenalty",""),k(0))),t=="rwhPenalty"&&(l?S(!0):(S(!1),n.setFieldValue("rwhPenaltya",""),F(0))),t=="latePenalty"&&(l?N(!0):(n.setFieldValue("lateAssessmentPenalty",""),N(!1),W(0))),t=="demand"&&(l?(C(!0),_(!1),S(!1),N(!1),W(0),k(0),F(0)):(C(!1),n.setFieldValue("bill",""),B(0))),t=="waiveProof"){let x=s.target.files[0];ye(x)?D(x):(i(!0,"Check the file size of Document"),D(null))}},i=(s,t)=>{K(t),G(s)},b=s=>{const t=s.target.id;s.target.id,s.target.checked;let l=c(s.target.value);if(console.log("on change calc => ",t,l),t=="late")if(l>=0)W(l);else return;if(t=="rwh")if(l>=0)F(l);else return;if(t=="onePercent")if(l>=0)k(l);else return;if(t=="bill")if(l>=0)B(l);else return};if(Q)return e.jsx(pe,{});let T;return o=="saf"?T="/viewDemand/":T="/viewDemandHoldingProperty/",e.jsxs(e.Fragment,{children:[e.jsx(je,{heading:"Waiver Applicaton Form",appNo:ae,openSubmit:L,navigation:()=>$(T+g)}),e.jsxs("div",{className:"poppins transition-all duration-300 ease-in-out",children:[U&&e.jsx(ue,{activateBottomErrorCard:i,errorTitle:J}),e.jsx(ge,{activateBottomErrorCard:i,demand:s=>Z(s),dueList:s=>X(s)}),e.jsxs("form",{onChange:s=>(re(s),n.handleChange(s)),onSubmit:n.handleSubmit,className:"mt-10",children:[e.jsxs("div",{className:"w-full shadow-sm shadow-amber-200 mb-6 border border-amber-400 bg-amber-50 select-none animate__animated animate__fadeInUp",children:[e.jsx("div",{className:"px-4 pt-4 font-semibold text-lg",children:"Check below to waive off"}),e.jsxs("div",{className:"flex flex-wrap justify-between  md:pr-6 ",children:[e.jsxs("div",{className:" rounded-lg px-4 py-2 pb-4 flex flex-wrap gap-x-10 gap-y-2 items-center",children:[o=="saf"&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",name:"waiveType",id:"latePenalty",value:"latePenalty",className:""}),e.jsx("label",{htmlFor:"latePenalty",children:"Late Assessment Penalty"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",name:"waiveType",id:"penalty",value:"penalty",className:""}),e.jsx("label",{htmlFor:"penalty",children:"1% Penalty"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",name:"waiveType",id:"rwhPenalty",value:"rwhPenalty",className:""}),e.jsx("label",{htmlFor:"rwhPenalty",children:"RWH Penalty"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",name:"waiveType",id:"demand",value:"demand",className:""}),e.jsx("label",{htmlFor:"demand",children:"Demand"})]}),e.jsx("div",{className:"w-full block",children:e.jsx("span",{className:"text-red-600 text-xs",children:n.touched.waiveType||n.errors.waiveType?n.errors.waiveType:null})})]}),e.jsx("div",{className:"flex md:-mt-4 md:mb-2",children:e.jsxs("div",{className:"px-4 md:px-10 py-4 md:mb-0 mb-2 ml-2 bg-white text-lg font-semibold border-green-200 border-2 rounded-md",children:[e.jsx("span",{className:"text-sm font-normal",children:"Waive Amount : "}),w(a==null?void 0:a.payableAmount)," - ",e.jsx("span",{className:"text-red-600",children:w(p+u+f+h)})," = ",e.jsx("span",{className:"text-green-600",children:w(parseFloat(a==null?void 0:a.payableAmount)-(p+u+f+h))})]})})]})]}),e.jsxs("div",{className:"w-full bg-zinc-50 border shadow-lg mb-6 animate__animated animate__fadeInUp flex flex-col gap-4 p-4",children:[e.jsxs("h1",{className:"px-1 font-bold text-xl text-left flex items-center gap-2",children:[e.jsx("img",{src:Y,alt:"pin",className:"w-5 inline"})," Waive Amount"]}),e.jsxs("div",{className:" flex gap-x-4 gap-y-2 flex-wrap w-full",children:[v&&e.jsxs("div",{className:"w-full md:w-1/4",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Late Assessment: "}),e.jsx("input",{type:"number",placeholder:"Enter amount",onChange:b,name:"lateAssessmentPenalty",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:n.touched.lateAssessmentPenalty||n.errors.lateAssessmentPenalty?n.errors.lateAssessmentPenalty:null})]}),!m&&P&&e.jsxs("div",{className:"w-full md:w-1/4",children:[e.jsx("label",{htmlFor:"onePercent",className:"text-sm",children:"1% Penalty: "}),e.jsx("input",{type:"number",placeholder:"Enter amount",onChange:b,name:"onepercentPenalty",id:"onePercent",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:n.touched.onepercentPenalty||n.errors.onepercentPenalty?n.errors.onepercentPenalty:null})]}),!m&&A&&e.jsxs("div",{className:"w-full md:w-1/4",children:[e.jsx("label",{htmlFor:"rwh",className:"text-sm",children:"RWH Penalty: "}),e.jsx("input",{type:"number",placeholder:"Enter amount",onChange:b,name:"rwhPenaltya",id:"rwh",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:n.touched.rwhPenaltya||n.errors.rwhPenaltya?n.errors.rwhPenaltya:null})]}),m&&e.jsxs("div",{className:"w-full md:w-1/4",children:[e.jsx("label",{htmlFor:"bill",className:"text-sm",children:"Demand: "}),e.jsx("input",{type:"number",placeholder:"Enter amount",onChange:b,name:"bill",id:"bill",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:n.touched.bill||n.errors.bill?n.errors.bill:null})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"bill",className:"text-sm",children:"Description: "}),e.jsx("textarea",{cols:30,rows:2,placeholder:"Write description about application...",name:"desc",id:"desc",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:n.touched.desc||n.errors.desc?n.errors.desc:null})]}),e.jsxs("div",{className:"w-full flex flex-wrap justify-between gap-6 items-center animate__animated animate__fadeIn",children:[e.jsxs("div",{className:"flex gap-2 items-center flex-wrap md:w-auto w-full",children:[e.jsx("label",{htmlFor:"waiveProof",className:"text-sm font-semibold",children:"Waiver Proof :"}),e.jsx("input",{type:"file",accept:".jpg, .jpeg, .png, .pdf",name:"waiveProof",id:"waiveProof",className:"text-sm px-3 2xl:py-1 py-1 md:w-auto w-full bg-white border rounded-sm shadow-sm"}),e.jsx("span",{className:"text-xs italic text-red-600",children:"(Image must be less than 1MB and pdf must be less than 10MB)"}),((E=n.touched)==null?void 0:E.waiveProof)&&((R=n.errors)==null?void 0:R.waiveProof)&&e.jsx("div",{className:"w-full",children:(z=n.errors)==null?void 0:z.waiveProof})]}),e.jsx("button",{type:"submit",className:"bg-green-500 text-white hover:bg-green-600 text-sm px-8 py-1 rounded-sm shadow-md ",children:"Submit"})]})]}),e.jsx("div",{className:"w-full bg-white shadow-sm mb-6 animate__animated animate__fadeInUp",children:e.jsx("div",{className:"pb-6 mt-2 rounded-lg shadow-lg p-4 w-full",children:e.jsxs("div",{className:"flex flex-row flex-wrap w-full",children:[e.jsx("div",{className:"flex items-center justify-between w-full",children:e.jsxs("h1",{className:"px-1 font-bold text-xl text-left flex items-center gap-2",children:[e.jsx("img",{src:Y,alt:"pin",className:"w-5 inline"})," Demand List"]})}),o=="saf"&&e.jsx("div",{className:"w-full flex flex-wrap items-center gap-4 mt-2 ",children:e.jsxs("span",{className:"text-sm",children:["Late Assessment Penalty : ",e.jsx("span",{className:"font-semibold text-sm ",children:w(a==null?void 0:a.lateAssessmentPenalty)})]})}),e.jsxs("table",{className:"min-w-full leading-normal bg-white rounded-lg mt-2 w-full",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[5%]   ",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[10%]  ",children:"Arv"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[5%]   ",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[17%]  ",children:"Finanacial Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[17.3%]",children:"RWH Penalty (₹) "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[17.3%]",children:"1% Penalty (₹) "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[11%]  ",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[15%]  ",children:"Payable Amount (₹) "})]})}),e.jsx("tbody",{className:"text-sm",children:j==null?void 0:j.map((s,t)=>e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[5%]    ",children:t+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[10%]   ",children:d(s.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[5%]    ",children:d(s.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[17%]   ",children:d(s.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[17.3%] ",children:e.jsx("ul",{className:"w-full flex gap-2 justify-between items-center pr-20",children:e.jsx("li",{className:"w-full",children:d(s.additional_tax)})})}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left w-[17.3%] ",children:[e.jsx("ul",{className:"w-full flex gap-2 justify-between items-center pr-20",children:e.jsx("li",{className:"w-full",children:d(s.onePercPenaltyTax)})})," "]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[11%]   ",children:d(s.amount)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left w-[15%]   ",children:[e.jsx("ul",{className:"w-full flex gap-2 justify-between items-center pr-14",children:e.jsx("li",{className:"w-full",children:d(s.balance)})}),"  "]})]}))})]})]})})})]})]})]})};export{ke as default};
