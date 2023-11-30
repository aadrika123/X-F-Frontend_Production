import{a8 as I,X as D,a as F,r as d,e as ee,u as se,A as p,b as $,j as e,B as te,S as re,aD as le,x as c,V as l,a6 as o,ai as j,ct as ae,ad as xe,g as de}from"./index-3765b809.js";import{C as ce}from"./CustomErrorBoundary-9aaa74e5.js";import{P as oe}from"./PilotWorkflowDocumentRow-33ca4950.js";import{T}from"./TopTabs-d1390178.js";import{R as ie}from"./index.esm-c98c19c2.js";import"./index.esm-5b152ef9.js";import"./photo-f9d7c0b5.js";const ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};I.setAppElement("#root");function Ne(){var u,_,S,P;const{t:r}=D(),{api_getAppicationFullDetail:me,api_tcComparisionList:C}=xe();F(`${r("mainSearchapplicationPage.safdetails.label")}`);const{getDocumentList:M,api_getStaticSafDetails:E}=de(),[n,B]=d.useState(),[L,m]=d.useState(!1),[h,O]=d.useState(),f=ee(),{id:i}=se(),[s,R]=d.useState(),[q,b]=d.useState(!1),[Y,w]=d.useState(!1),[y,H]=d.useState(""),[he,U]=d.useState(!1);d.useEffect(()=>{U(!1)},[]),d.useEffect(()=>{V(),W()},[]);const V=()=>{m(!0),console.log("before document fetch ",i);let t={applicationId:i};p.post(M,t,$()).then(a=>{var x;console.log("document list at saf application details ",a),B((x=a==null?void 0:a.data)==null?void 0:x.data),m(!1)}).catch(a=>{console.log("error at saf application details ",a),m(!1)})},W=()=>{m(!0),console.log("before document fetch ",i);let t={applicationId:i};p.post(C,t,$()).then(a=>{var x;console.log("tc comparision list ",a),O((x=a==null?void 0:a.data)==null?void 0:x.data),m(!1)}).catch(a=>{console.log("tc comparison list error ",a),m(!1)})},[X,N]=d.useState(!1),[g,Z]=d.useState(""),G=()=>N(!0),v=()=>N(!1),J=()=>{},K=(t,a)=>{console.log("incoming doc url modal => ",t),Z(t),H(a),G()},Q=()=>{w(!1),b(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};p.post(E,{applicationId:i},a).then(function(x){var k,z,A;console.log("get saf data in saf view ...",(k=x==null?void 0:x.data)==null?void 0:k.data),(z=x==null?void 0:x.data)!=null&&z.status?R((A=x==null?void 0:x.data)==null?void 0:A.data):w(!0),b(!1)}).catch(function(x){console.log("saf data error...",x),w(!0),b(!1)})};return d.useEffect(()=>{Q()},[]),q?e.jsx(e.Fragment,{children:e.jsx(te,{})}):Y?e.jsx(re,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("doc url modal => ",g),e.jsxs(ce,{errorMsg:"Bug in TransactionHistoryFactory",children:[e.jsx("div",{children:e.jsxs(e.Fragment,{children:[location=="workflow"&&e.jsx("div",{className:"px-4",children:e.jsxs("button",{onClick:()=>f(`/saf-workflow/${tabIndex}/${i}`),type:"button",className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:[e.jsx(HiOutlineArrowSmLeft,{className:"inline text-lg"})," Back to Workflow"]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container sm:mx-auto w-full",children:e.jsxs("div",{className:"col-span-12 rounded-lg sm:p-4",children:[e.jsxs("div",{className:"hidden sm:block",children:[" ",e.jsx(T,{title:e.jsx("div",{className:"pl-4",children:(s==null?void 0:s.current_role_name2)!==""&&e.jsx("span",{className:"py-1 justify-center items-center font-semibold ",children:e.jsxs("span",{className:"bg-green-200 text-black px-4 py-1 flex justify-center items-center",children:[e.jsx(le,{className:"inline mr-2"}),r("mainSearchapplicationPage.currentlevel.label")," - ",s==null?void 0:s.current_role_name2]})})}),type:"application",id:i,safNo:"",active:"property"})]}),e.jsxs("div",{className:"block sm:hidden",children:[" ",e.jsx(T,{title:"",type:"application",id:i,safNo:"",active:"property"})]}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.basis.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.saf_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.applicationNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-lg",children:l(s==null?void 0:s.zone)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.zone.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-lg",children:l(s==null?void 0:s.old_ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.newwardno.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.ownershiptype.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.propertytype.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.holdingtype.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-md text-green-500 ",children:l(s==null?void 0:s.assessment_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.assessmentType.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.pt_no)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.pt_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.ptno.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.zone_mstr_id)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.zone.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_name)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.apartmentname.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_code)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.apartmentcode.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                      "]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(c,{className:"inline"}),r("mainSearchapplicationPage.propertyaddressdetails.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.khatano.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.plotno.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.villagemaujaname.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.areaofplot.label")})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.prop_address)," , ",l(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.propertyaddress.label")})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.corr_address)=="NA"&&l((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address)=="NA"&&l(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address),", ",l(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.correspondingaddress.label")})]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.ownerdetails.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white ",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.ownername.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainSearchapplicationPage.ownerNameinMarathi.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.gender.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.dob.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.guardianname.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainSearchapplicationPage.guardianNameinMarathi.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.relation.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.mobileno.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.aadhar.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainSearchapplicationPage.pan.label")," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainSearchapplicationPage.email.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.isarmedforce.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainSearchapplicationPage.isspeciallyabled.label")," "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(u=s==null?void 0:s.owners)==null?void 0:u.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.owner_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o(t==null?void 0:t.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.guardian_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.is_specially_abled)})]}))})})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.electricitydetails.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.electricitykno.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.accno.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.bindbookno.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.electricityconsumercategory.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.buildingdetails.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.building_plan_approval_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.buildingplanapprovaldate.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:o(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainSearchapplicationPage.buildingplanapprovaldate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.waterdetails.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.water_conn_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainSearchapplicationPage.waterconsumerno.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:o(s==null?void 0:s.water_conn_date)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainSearchapplicationPage.waterconnectiondate.label")]})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 ",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.floordetails.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left border text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainSearchapplicationPage.floor.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.usagetype.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.occupancytype.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.constructiontype.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.builtuparea.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.fromdate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainSearchapplicationPage.uptodate.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(_=s==null?void 0:s.floors)==null?void 0:_.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(t==null?void 0:t.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o(t==null?void 0:t.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o(t==null?void 0:t.date_upto)})]}))})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.additionaldetails.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_mobile_tower?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainSearchapplicationPage.propertyhasmobiletower.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[s!=null&&s.is_hoarding_board?"Yes":"No"," "]}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainSearchapplicationPage.propertyhashoardingboard.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:s!=null&&s.is_petrol_pump?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainSearchapplicationPage.ispropertypetrolpump.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_water_harvesting?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainSearchapplicationPage.rainwaterharvesting.label")]})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&j(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${r("mainSearchapplicationPage.mobileTowerArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&j(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${r("mainSearchapplicationPage.hoardingArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&j(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${r("mainSearchapplicationPage.petrolPumpArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&o(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&`${r("mainSearchapplicationPage.rainwaterharvestingdate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&o(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${r("mainSearchapplicationPage.mobileTowerInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&o(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${r("mainSearchapplicationPage.hoardingInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&o(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${r("mainSearchapplicationPage.petrolPumpConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsxs("div",{className:"container mx-auto mt-10  px-5  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(c,{className:"inline"})," ",r("mainSearchapplicationPage.documentlist.label")]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.documentname.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.view.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.status.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.remarks.label")})]})}),e.jsx("tbody",{children:n&&e.jsxs(e.Fragment,{children:[(n==null?void 0:n.length)==0&&!L&&e.jsx("tr",{className:" py-20",children:e.jsxs("td",{colSpan:5,className:"text-center py-4",children:[e.jsx("span",{className:"bg-red-200 text-sm text-red-500 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"}),e.jsx("button",{className:`${ae} py-2 mx-1`,onClick:()=>f(`/safdocumentupload/${i}`),children:"upload documents"})]})}),n==null?void 0:n.map((t,a)=>e.jsx(oe,{openModal:K,docList:t,index:a}))]})})]})})})})]}),(h==null?void 0:h.length)!=0&&e.jsxs("div",{className:"container mx-auto mt-10  px-5  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(c,{className:"inline"}),"  ",r("mainSearchapplicationPage.tccomparisionlist.label")]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.verifiedby.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.verificationon.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("mainSearchapplicationPage.view.label")})]})}),e.jsx("tbody",{children:h==null?void 0:h.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.veryfied_by)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(t==null?void 0:t.created_at)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("button",{onClick:()=>f(`/tc-comparision/${t==null?void 0:t.id}/${t!=null&&t.agency_verification?"agency":"ulb"}`),type:"button",className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:[" ",r("mainSearchapplicationPage.view.label")]})})]}))})]})})})})]}),((S=s==null?void 0:s.memoDtls)==null?void 0:S.length)!=0&&e.jsxs("div",{className:"container mx-auto mt-10  px-5  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(c,{className:"inline"}),r("mainSearchapplicationPage.memoDetails.label")]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.memono.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.generatedon.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.generatedby.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.arv.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.quarterlytax.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.effectfrom.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.memotype.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.holdingptno.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:r("mainSearchapplicationPage.action.label")})]})}),e.jsx("tbody",{children:(P=s==null?void 0:s.memoDtls)==null?void 0:P.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.memo_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(t==null?void 0:t.memo_date)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.generated_by)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.alv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.annual_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.from_fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.memo_type)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.pt_no)=="NA"?l(t==null?void 0:t.holding_no):l(t==null?void 0:t.pt_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("button",{onClick:()=>{(t==null?void 0:t.memo_type)=="SAM"?f(`/sam-reciept/${t==null?void 0:t.id}`):f(`/amc-fam-receipt/${i}`)},type:"button",className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:["  ",r("mainSearchapplicationPage.view.label")]})})]}))})]})})})})]})]})}),e.jsx("div",{className:"w-full h-40"}),e.jsx(I,{isOpen:X,onAfterOpen:J,onRequestClose:v,style:ne,contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-100 ml-32 p-4 animate__animated animate__zoomIn animate__faster",style:{width:"60vw",height:"80vh"},children:[e.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:v,children:e.jsx(ie,{})}),y=="pdf"&&e.jsx(e.Fragment,{children:e.jsx("iframe",{className:"w-full h-full",src:g,frameborder:"0"})}),y!="pdf"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx("img",{src:g,alt:"",srcset:""})})})]})})]}))}export{Ne as default};
