import{x as ee,l as c,v as k,y as ae,W as le,A as C,m as te,q as I,z as re,B as F,D as oe,k as l,o as ne,j as e,E as se,G as ce,H as ie}from"./index-afe6fccc.js";function ue(){var A;const{t}=ee(),[_,d]=c.useState(),[de,h]=c.useState(!1),{type:u}=k(),[z,i]=c.useState(!1),[o,V]=c.useState(),[pe,b]=c.useState(!1),{notify:y}=c.useContext(ae),[q,m]=c.useState(),[g,j]=c.useState(),[N,E]=c.useState(1);c.useState("");const[w,Z]=c.useState(5),[v,O]=c.useState(""),[T,S]=c.useState(0),{api_waterSearchConsumer:$,api_newWardByZoneId:M}=le(),{filterBy:p,parameter:f,pages:R}=k(),U=()=>{p!=null&&p!=""&&(console.log("This is What i need ",p,f),x({filterBy:p,parameter:f}))};c.useEffect(()=>{U()},[p,f,R]);const G=C(),H=te();c.useEffect(()=>{T>0&&x()},[N,w]);const D=()=>{window.history.pushState(null,"",`/water/waterViewApplication/${r.values.filterBy}/${r.values.parameter} `)},x=a=>{console.log("data",a),m(),b(!1),i(!0);const s={filterBy:a?a.filterBy:r.values.filterBy,parameter:a?a.parameter:r.values.parameter,wardId:r.values.wardId,zoneId:r.values.zoneId,pages:w,page:N,search:v};console.log("th paypayload",s),console.log("before fetch holding details....",s),I.post($,s,G).then(n=>{var W,P,B,L;console.log("search property list",(P=(W=n==null?void 0:n.data)==null?void 0:W.data)==null?void 0:P.data),(B=n==null?void 0:n.data)!=null&&B.status?(V((L=n==null?void 0:n.data)==null?void 0:L.data),b(!0)):(m("Could not search data"),y("No data found","error")),i(!1)}).catch(n=>{console.log("Error while fetching Filter Data",n),y("Something went wrong!!","error"),i(!1),m("Something Went Wrong"),b(!1)})};console.log("readymadeListData.data",o==null?void 0:o.data);const J=a=>a=="&laquo; Previous"?"<< Prev":a=="Next &raquo;"?">> Next":a,K=re({filterBy:F().required("This is a required field !"),parameter:F().required("This is a required field !")}),r=oe({initialValues:{filterBy:"",parameter:"",wardId:"",zoneId:""},onSubmit:a=>{x(a)},validationSchema:K}),Q=a=>{r.values.filterBy=a.target.value,a.target.value=="propertyNo"&&(d("Property No"),h(!0)),a.target.value=="ownerDetails"&&(d("Owner Details"),h(!1)),a.target.value=="address"&&(d("Address"),h(!1)),a.target.value=="applicationNo"&&(d("Application No"),h(!1))};console.log("readymadeListData.data",o==null?void 0:o.data);const X=a=>{i(!0),r.setFieldValue("wardId","");let s={zoneId:a};console.log("before fetch wardby old ward...",s),I.post(M,s,C()).then(function(n){console.log("wardlist by zone id list ....",n.data.data),j(n.data.data),i(!1),r.setFieldValue("wardId","")}).catch(function(n){console.log("errorrr.... ",n),i(!1)})},Y=a=>{let s=a.target.name,n=a.target.value;r.values&&d(r.values.filterBy),s==="zoneId"&&X(n)};return l(ne,{children:[z&&e(se,{}),(u=="re"||u=="mu")&&l("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e(ce,{className:"inline mr-2 text-3xl"})," ",t("tranWaterApplicationSearchPage.searchForAndApplyLabel.label"),e("span",{className:"font-semibold",children:u=="re"?"Re-Assessment":"Mutation"})," ",t("tranWaterApplicationSearchPage.propertySearchInstruction1Label.label")," ",u=="re"?"Re-Assessment":"Mutation"]}),l("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex ml-5 mt-2 ",children:e("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:t("tranWaterApplicationSearchPage.searchWaterConsumerLabel.label")})}),e("form",{onChange:Y,onSubmit:r.handleSubmit,children:l("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("tranWaterApplicationSearchPage.filterByLabel.label"),e("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"filterBy",onChange:Q,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:t("tranWaterApplicationSearchPage.selectApplicationTypeLabel.label")}),l("option",{value:"consumerNo",children:[t("tranWaterApplicationSearchPage.consumerNoLabel.label")," "]}),e("option",{value:"propertyNo",children:t("tranWaterApplicationSearchPage.propertyNo.label")}),e("option",{value:"applicantName",children:t("tranWaterApplicationSearchPage.applicantNameLabel.label")}),e("option",{value:"mobileNo",children:t("tranWaterApplicationSearchPage.mobileNoLabel.label")}),e("option",{value:"applicationNo",children:t("tranWaterApplicationSearchPage.applicationNoLabel.label")})]}),e("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"zoneId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e("option",{value:"",children:"All Zones"}),e("option",{value:"1",children:"Zone A-East"}),e("option",{value:"2",children:"Zone B-West"}),e("option",{value:"3",children:"Zone C-North"}),e("option",{value:"4",children:"Zone D-South"}),e("option",{value:"gov",children:"GOV"}),e("option",{value:"SUS",children:"SUS"})]}),e("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"wardId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e("option",{value:"",children:"All Ward"}),g==null?void 0:g.map((a,s)=>e("option",{value:a.id,children:a.ward_name},s))]}),e("p",{className:"text-red-500 text-xs",children:r.touched.wardNo&&r.errors.wardNo?r.errors.wardNo:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("tranWaterApplicationSearchPage.searchByLabel.label")," ",_," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"parameter",onChange:r.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"w-full border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:l("p",{className:"flex",children:[l("span",{className:"mt-1 mr-2",children:[" ",e(ie,{})," "]})," ",t("tranWaterApplicationSearchPage.searchRecordLabel.label")," "]})})})]})}),e("div",{className:"flex justify-center text-red-600 mb-2 font-semibold",children:q}),o!=null&&o.data?l("div",{className:"relative overflow-x-auto sm:rounded-lg border shadow-md",children:[l("div",{className:"flex justify-between my-3 mx-5",children:[l("div",{className:"flex gap-3",children:[e("p",{children:t("tranWaterApplicationSearchPage.showLabel.label")}),l("select",{onChange:a=>(S(s=>s+1),Z(a.target.value)),name:"",id:"",className:"border rounded shadow w-24",children:[e("option",{value:"5",children:t("tranWaterApplicationSearchPage.records5Label.label")}),e("option",{value:"10",children:t("tranWaterApplicationSearchPage.records10Label.label")}),e("option",{value:"20",children:t("tranWaterApplicationSearchPage.records20Label.label")}),e("option",{value:"30",children:t("tranWaterApplicationSearchPage.records30Label.label")})]})]}),l("div",{className:"flex gap-3",children:[e("p",{children:t("tranWaterApplicationSearchPage.searchLabel.label")}),e("input",{type:"text",name:"search",value:v,onChange:a=>O(a.target.value),className:"border rounded shadow w-40"})]})]}),l("table",{className:"w-full text-sm text-left text-gray-500 ",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:l("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:l("div",{className:"flex items-center",children:[" ",t("tranWaterApplicationSearchPage.wardNoLabel.label")," "]})}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.ownersNameLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.consumerNoLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:"Property No"}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.mobileNoLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.addressLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:"Bill Amount"}),e("th",{scope:"col",className:"px-6 py-3",children:"Status"}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.actionLabel.label")})]})}),e("tbody",{children:o&&o.data?o.data.map((a,s)=>l("tr",{className:"bg-white border-b  dark:border-gray-700 hover:bg-gray-50 ",children:[e("td",{className:"w-4 p-4",children:l("div",{className:"flex items-center",children:[" ",a.ward_mstr_id]})}),e("td",{className:"px-6 py-4",children:a.owner_name}),e("td",{className:"px-6 py-4",children:a.consumer_no}),e("td",{className:"px-6 py-4",children:a.folio_no}),e("td",{className:"px-6 py-4",children:a.mobile_no}),e("td",{className:"px-6 py-4",children:a.address}),e("td",{className:"px-6 py-4",children:a.balance_amount||"N/A"}),e("td",{className:"px-6 py-4",children:a.payment_status||"N/A"}),e("td",{className:"px-6 py-4",children:e("button",{onClick:()=>{D(),H(`/waterViewConsumer/${a==null?void 0:a.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:t("tranWaterApplicationSearchPage.viewLabel.label")})})]},s)):e("tr",{children:e("td",{colSpan:"8",children:t("tranWaterApplicationSearchPage.noDataFoundLabel.label")})})})]}),l("nav",{className:"block md:flex items-center md:justify-between text-center md:pt-4 m-5","aria-label":"Table navigation",children:[l("span",{className:"text-sm font-normal text-gray-500",children:[t("tranWaterApplicationSearchPage.showingLabel.label"),l("span",{className:"font-semibold text-gray-900 dark:text-white",children:[o==null?void 0:o.from,"-",o==null?void 0:o.to]})," ",t("tranWaterApplicationSearchPage.ofLabel.label")," ",e("span",{className:"font-semibold text-gray-900 dark:text-white",children:o==null?void 0:o.total})]}),e("ul",{className:"inline-flex items-center -space-x-px",children:(A=o==null?void 0:o.links)==null?void 0:A.map(a=>e("li",{children:e("p",{onClick:()=>{E(a==null?void 0:a.url.slice(-1)),S(s=>s+1)},className:`${(a==null?void 0:a.active)==!0?"bg-indigo-500 text-white":"bg-white text-gray-500"} px-3 py-2 leading-tight  border border-gray-300 hover:bg-indigo-100  cursor-pointer whitespace-nowrap`,children:J(a.label)})}))})]})]}):""]})]})}export{ue as default};
