import{u as ce,e as ie,r,A as N,b as w,q as oe,a3 as f,a4 as u,w as pe,j as e,B as me,a5 as he,n as x,T as fe,a6 as H,ah as _,ad as ue,g as be,Q as je}from"./index-19ed171f.js";import{B as ge}from"./BasicScreen-5761dba0.js";import{F as ye}from"./index.esm-6cd15e97.js";import{p as v}from"./photo-f9d7c0b5.js";import{R as Ne}from"./index.esm-640ad1c4.js";import"./index-dc61971a.js";import"./index.esm-5348901f.js";const Ie=()=>{var C,E,W,R,B,M,$,q,O;const{post_waiverDetails:Q,post_waiverDocList:V,post_waiverFinalSubmit:G}=be(),{id:we,type:p,wId:b}=ce(),S=ie(),[m,A]=r.useState(!1),[Y,P]=r.useState(!1),[Z,J]=r.useState(""),[n,K]=r.useState([]),[t,X]=r.useState(null),[a,L]=r.useState([]),[j,D]=r.useState([]),[g,ee]=r.useState(!1),[h,y]=r.useState(!1),[se,F]=r.useState(!1),[te,k]=r.useState(!1),[I,ae]=r.useState(),[T,le]=r.useState(""),z=()=>{k(!1)},re=()=>k(!0),ne=(s,l)=>{re(),ae(s),le(l)},c=(s,l)=>{J(l),P(s),s==!1&&S("/approved-waiver-list")};r.useEffect(()=>{P(!1),A(!0),N.post(Q,{applicationId:b},w()).then(s=>{var l,i,o;(l=s==null?void 0:s.data)!=null&&l.status?K((i=s==null?void 0:s.data)==null?void 0:i.data):c(!0,(o=response==null?void 0:response.data)==null?void 0:o.message)}).catch(s=>{c(!0,"Please try again later !!!")}).finally(()=>{A(!1)}),N.post(V,{applicationId:b},w()).then(s=>{var l,i,o,U;(l=s==null?void 0:s.data)!=null&&l.status?X((o=(i=s==null?void 0:s.data)==null?void 0:i.data[0])==null?void 0:o.doc_path):c(!0,(U=response==null?void 0:response.data)==null?void 0:U.message)}).catch(s=>{c(!0,"Please try again later !!!")}).finally(()=>{})},[]);let de=oe({late_assessment:f().min(0,"can't be below zero").max(u((p=="saf",a==null?void 0:a.lateAssessmentPenalty)),"amount exceeded"),one_percent:f().min(0,"can't be below zero").max(u(p=="saf"?a==null?void 0:a.totalOnePercPenalty:a==null?void 0:a.onePercPenalty),"amount exceeded"),rwh:f().min(0,"can't be below zero").max(u((p=="saf",a==null?void 0:a.additionalTax)),"amount exceeded"),bill:f().min(0,"can't be below zero").max(u(a==null?void 0:a.payableAmount),"amount exceeded")});const d=pe({initialValues:{bill:0,one_percent:0,rwh:0,late_assessment:0},enableReinitialize:!0,onSubmit:s=>{xe(s)},validationSchema:de}),xe=s=>{F(!0),N.post(G,{applicationId:b,...s},w()).then(l=>{var i,o;(i=l==null?void 0:l.data)!=null&&i.status?(je.success("Waiver Demand Submiited Successfully !!!"),S("/approved-waiver-list")):c(!0,(o=response==null?void 0:response.data)==null?void 0:o.message)}).catch(l=>{c(!0,"Please try again later !!!")}).finally(()=>{F(!1)})};return se?e.jsx(me,{}):e.jsxs(e.Fragment,{children:[Y&&e.jsx(he,{activateBottomErrorCard:c,errorTitle:Z}),e.jsx(ge,{activateBottomErrorCard:c,demand:s=>D(s),dueList:s=>L(s)}),!m&&e.jsxs("div",{className:"bg-white px-6 py-2 w-max font-semibold rounded-sm border shadow-md flex gap-2 items-center -mt-2 mb-2 animate__animated animate__fadeIn animate__faster",children:[e.jsx("span",{className:"font-normal",children:"Application No.: "})," ",e.jsx("span",{children:x(n==null?void 0:n.applicationNo)})]}),m&&e.jsxs("div",{className:"my-4 w-screen flex-col items-center justify-center",children:[e.jsx(fe,{radius:"9",color:"#4338ca",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),e.jsx("span",{className:"italic",children:"Waiver Data Fetching..."})," "]}),!m&&((C=n==null?void 0:n.waiverData)==null?void 0:C.length)>0&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"animate__animated animate__fadeInUp animate__faster w-full bg-zinc-100 border shadow-lg mb-6 ",children:e.jsx("div",{className:"pb-6 mt-2 rounded-lg shadow-lg p-4 w-full",children:e.jsxs("div",{className:"flex flex-row flex-wrap w-full",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"px-1 font-bold text-xl text-left flex items-center gap-2",children:[e.jsx("img",{src:H,alt:"pin",className:"w-5 inline"})," Final Waiver Approval"]}),e.jsxs("div",{className:"flex items-center gap-2 border-2 border-zind-100 px-4 rounded-sm bg-indigo-50",children:[e.jsx("div",{className:"text-sm",children:"View Waiver Document :"}),e.jsxs("div",{className:"cursor-pointer",onClick:()=>{var s;return ne(`${t}`,t==null?void 0:t.split(".")[((s=t==null?void 0:t.split("."))==null?void 0:s.length)-1])},children:[((t==null?void 0:t.split(".")[((E=t==null?void 0:t.split("."))==null?void 0:E.length)-1])=="pdf"||(t==null?void 0:t.split(".")[((W=t==null?void 0:t.split("."))==null?void 0:W.length)-1])=="pdf/")&&e.jsx("div",{className:"flex-shrink-0 text-[28px]",children:e.jsx(ye,{})}),((t==null?void 0:t.split(".")[((R=t==null?void 0:t.split("."))==null?void 0:R.length)-1])=="jpg"||(t==null?void 0:t.split(".")[((B=t==null?void 0:t.split("."))==null?void 0:B.length)-1])=="jpg/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:h?v:`${t}`,onError:()=>y(!0),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((t==null?void 0:t.split(".")[((M=t==null?void 0:t.split("."))==null?void 0:M.length)-1])=="jpeg"||(t==null?void 0:t.split(".")[(($=t==null?void 0:t.split("."))==null?void 0:$.length)-1])=="jpeg/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:h?v:`${t}`,onError:()=>y(!0),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((t==null?void 0:t.split(".")[((q=t==null?void 0:t.split("."))==null?void 0:q.length)-1])=="png"||(t==null?void 0:t.split(".")[((O=t==null?void 0:t.split("."))==null?void 0:O.length)-1])=="png/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:h?v:`${t}`,onError:()=>y(!0),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})]})]}),e.jsxs("table",{className:"min-w-full leading-normal bg-zinc-50 border rounded-lg mt-2 w-full",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-zinc-50 border text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[10%]   ",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[20%]  ",children:"Waiver Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[20%]   ",children:"Current Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[20%]  ",children:"Requested Waiver Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[20%]",children:"Final Waiver Amount (₹) "})]})}),e.jsx("tbody",{className:"text-sm",children:n==null?void 0:n.map((s,l)=>e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[10%] ",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[20%] ",children:x(s==null?void 0:s.col_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[20%] ",children:_(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[20%] ",children:_(s==null?void 0:s.waiver_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[20%] md:pr-6",children:_(s==null?void 0:s.waiver_amount)==0?e.jsx("span",{className:"text-red-500 text-sm",children:"Not Requested"}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"number",name:s==null?void 0:s.key,onChange:d.handleChange,id:"",className:"w-full h-full border-2 shadow-sm border-zinc-200 focus:border-zinc-400 px-4 py-1",placeholder:"Enter amount"}),e.jsx("span",{className:"text-red-600 text-xs",children:d.touched[s==null?void 0:s.key]||d.errors[s==null?void 0:s.key]?d.errors[s==null?void 0:s.key]:null})]})})]}))})]}),e.jsx("div",{className:"w-full mt-2 flex justify-end ",children:(d.values.bill!=0||d.values.one_percent!=0||d.values.rwh!=0||d.values.late_assessment!=0)&&e.jsx("button",{type:"submit",onClick:d.handleSubmit,className:"bg-green-500 text-white hover:bg-green-600 text-sm px-8 py-1 rounded-sm shadow-md ",children:"Submit"})})]})})})}),!m&&e.jsxs("button",{onClick:()=>ee(!g),className:"border-indigo-600 px-4 py-1 border-2 text-indigo-600 shadow-lg shadow-indigo-200 hover:bg-indigo-600 hover:text-white text-sm transition-all duration-200 ease-in-out font-semibold",children:[g?"Hide":"View"," Demand Details "]}),g&&e.jsx("div",{className:"animate__animated animate__fadeInUp animate__faster w-full bg-white shadow-sm mb-6 ",children:e.jsx("div",{className:"pb-6 mt-2 rounded-lg shadow-lg p-4 w-full",children:e.jsxs("div",{className:"flex flex-row flex-wrap w-full",children:[e.jsx("div",{className:"flex items-center justify-between w-full",children:e.jsxs("h1",{className:"px-1 font-bold text-xl text-left flex items-center gap-2",children:[e.jsx("img",{src:H,alt:"pin",className:"w-5 inline"})," Demand List"]})}),p=="saf"&&e.jsx("div",{className:"w-full flex flex-wrap items-center gap-4 mt-2 ",children:e.jsxs("span",{className:"text-sm",children:["Late Assessment Penalty : ",e.jsx("span",{className:"font-semibold text-sm ",children:indianAmount(a==null?void 0:a.lateAssessmentPenalty)})]})}),e.jsxs("table",{className:"min-w-full leading-normal bg-white rounded-lg mt-2 w-full",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[5%]   ",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[10%]  ",children:"Arv"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[5%]   ",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[17%]  ",children:"Finanacial Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[17.3%]",children:"RWH Penalty (₹) "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[17.3%]",children:"1% Penalty (₹) "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[11%]  ",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  uppercase text-xs text-left w-[15%]  ",children:"Payable Amount (₹) "})]})}),e.jsx("tbody",{className:"text-sm",children:j==null?void 0:j.map((s,l)=>e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[5%]    ",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[10%]   ",children:x(s.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[5%]    ",children:x(s.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[17%]   ",children:x(s.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[17.3%] ",children:e.jsx("ul",{className:"w-full flex gap-2 justify-between items-center pr-20",children:e.jsx("li",{className:"w-full",children:x(s.additional_tax)})})}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left w-[17.3%] ",children:[e.jsx("ul",{className:"w-full flex gap-2 justify-between items-center pr-20",children:e.jsx("li",{className:"w-full",children:x(s.onePercPenaltyTax)})})," "]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left w-[11%]   ",children:x(s.amount)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left w-[15%]   ",children:[e.jsx("ul",{className:"w-full flex gap-2 justify-between items-center pr-14",children:e.jsx("li",{className:"w-full",children:x(s.balance)})}),"  "]})]}))})]})]})})}),e.jsx(ue,{isOpen:te,onRequestClose:z,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-100 md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[e.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:z,children:e.jsx(Ne,{})}),h?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[e.jsx("div",{className:"border-r-2 border-gray-200 pr-4",children:"Error"}),e.jsx("div",{className:"pl-4",children:"Document not visible"})]})}):e.jsxs(e.Fragment,{children:[T=="pdf"&&e.jsx(e.Fragment,{children:e.jsx("iframe",{className:"w-full h-full",src:I,frameborder:"0"})}),T!="pdf"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx("img",{src:I,alt:"",srcset:""})})})]})]})})]})};export{Ie as default};
