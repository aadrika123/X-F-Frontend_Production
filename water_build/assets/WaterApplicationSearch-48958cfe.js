import{x as O,l as o,W as _,I as H,z as M,B as w,D as R,m as I,q as U,A as G,k as r,o as J,j as e,E as K,H as Q}from"./index-d314c09c.js";function D(){var x;const{t:l}=O(),[t,A]=o.useState(),[X,d]=o.useState(!1),[P,h]=o.useState(),[W,s]=o.useState(),[L,p]=o.useState(!1),[b,B]=o.useState(1);o.useState("");const[g,k]=o.useState(5),[u,C]=o.useState(""),[E,m]=o.useState(0),{api_waterSearchActiveApplication:F,header:Y}=_();H(`${l("tranWaterApplicationSearchPage.waterApplicationSearchLabel.label")}`);const q=M({filterBy:w().required("This is a required field !"),entry:w().required("This is a required field !")}),n=R({initialValues:{filterBy:"",entry:""},onSubmit:a=>{f(a)},validationSchema:q}),T=I();o.useEffect(()=>{E>0&&f()},[b,g]);const $=()=>{window.history.pushState(null,"",`/water/waterViewApplication/${n.values.filterBy}/${n.values.parameter} `)},f=a=>{p(!0),d(!1);const c={filterBy:a?a.filterBy:n.values.filterBy,parameter:a?a.entry:n.values.entry,pages:g,page:b,search:u};console.log("before fetch applied application..",c),U.post(F,c,G()).then(i=>{var N,y,v,S;console.log("applied application. in ...",(y=(N=i==null?void 0:i.data)==null?void 0:N.data)==null?void 0:y.data),(v=i==null?void 0:i.data)!=null&&v.status?(A((S=i==null?void 0:i.data)==null?void 0:S.data),d(!0)):(h(i.data.message),notify("No data found","error")),p(!1)}).catch(i=>{console.log("Error while fetching Filter Data",i),d(!1),p(!1)})};console.log("readymadeListData.data",t==null?void 0:t.data);const j=a=>a=="&laquo; Previous"?"<< Prev":a=="Next &raquo;"?">> Next":a,V=a=>{n.values.filterBy=a.target.value,a.target.value=="holdingNo"&&s("Enter Holding No."),a.target.value=="safNo"&&s("Enter SAF No."),a.target.value=="newConnection"&&s("Enter Application No."),a.target.value=="regularization"&&s("Enter Application No."),a.target.value=="name"&&s("Enter Owner Name"),a.target.value=="mobileNo"&&s("Enter Mobile No.")},z=()=>{h(),n.values&&s(n.values.filterBy)};return console.log("readymadeListData.data",t==null?void 0:t.data),r(J,{children:[L&&e(K,{}),r("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex ml-5 mt-2 ",children:e("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:l("tranWaterApplicationSearchPage.searchWaterAppliedApplicationsLabel.label")})}),e("form",{onChange:z,onSubmit:n.handleSubmit,children:r("div",{className:"flex justify-center space-x-8 my-5 m-10",children:[r("div",{children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("tranWaterApplicationSearchPage.applicationTypeLabel.label"),e("span",{className:"text-red-500",children:"*"})]}),r("select",{name:"filterBy",onChange:V,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:l("tranWaterApplicationSearchPage.selectApplicationTypeLabel.label")}),e("option",{value:"newConnection",children:l("tranWaterApplicationSearchPage.newConnectionLabel.label")}),e("option",{value:"regularization",children:l("tranWaterApplicationSearchPage.regularizationLabel.label")}),e("option",{value:"name",children:l("tranWaterApplicationSearchPage.nameLabel.label")}),e("option",{value:"safNo",children:l("tranWaterApplicationSearchPage.safNoLabel.label")}),e("option",{value:"holdingNo",children:l("tranWaterApplicationSearchPage.holdingNoLabel.label")})]}),e("p",{className:"text-red-500 text-xs",children:n.touched.filterBy&&n.errors.filterBy?n.errors.filterBy:null})]}),r("div",{children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[W||`${l("tranWaterApplicationSearchPage.selectApplicationTypeLabel.label")}`," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"entry",onChange:n.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:n.touched.entry&&n.errors.entry?n.errors.entry:null})]}),e("div",{className:"mt-4",children:r("button",{type:"submit",className:"w-full border border-indigo-600 bg-indigo-600 hover:bg-indigo-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:[" ",r("p",{className:"flex",children:[" ",r("span",{className:"mt-1 mr-2",children:[" ",e(Q,{})," "]})," ",l("tranWaterApplicationSearchPage.searchRecordLabel.label")]})]})})]})}),e("div",{className:"flex justify-center text-red-600 mb-2 font-semibold",children:P}),t!=null&&t.data?r("div",{className:"relative overflow-x-auto sm:rounded-lg border shadow-md",children:[r("div",{className:"flex justify-between my-3 mx-5",children:[r("div",{className:"flex gap-3",children:[e("p",{children:l("tranWaterApplicationSearchPage.showLabel.label")}),r("select",{onChange:a=>(m(c=>c+1),k(a.target.value)),name:"",id:"",className:"border rounded shadow w-24",children:[e("option",{value:"5",children:l("tranWaterApplicationSearchPage.records5Label.label")}),e("option",{value:"10",children:l("tranWaterApplicationSearchPage.records10Label.label")}),e("option",{value:"20",children:l("tranWaterApplicationSearchPage.records20Label.label")}),e("option",{value:"30",children:l("tranWaterApplicationSearchPage.records30Label.label")})]})]}),r("div",{className:"flex gap-3",children:[e("p",{children:l("tranWaterApplicationSearchPage.searchLabel.label")}),e("input",{type:"text",name:"search",value:u,onChange:a=>C(a.target.value),className:"border rounded shadow w-40"})]})]}),r("table",{className:"w-full text-sm text-left text-gray-500 ",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:r("div",{className:"flex items-center",children:[" ",l("tranWaterApplicationSearchPage.wardNoLabel.label")]})}),e("th",{scope:"col",className:"px-6 py-3",children:l("tranWaterApplicationSearchPage.applicationNoLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:l("tranWaterApplicationSearchPage.holdingNoSearchLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:l("tranWaterApplicationSearchPage.applicantNameLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:l("tranWaterApplicationSearchPage.addressLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:l("tranWaterApplicationSearchPage.mobileNoLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:l("tranWaterApplicationSearchPage.actionLabel.label")})]})}),e("tbody",{children:t&&t.data?t.data.map((a,c)=>r("tr",{className:"bg-white border-b dark:border-gray-700 hover:bg-gray-50 ",children:[e("td",{className:"w-4 p-4",children:r("div",{className:"flex items-center",children:[" ",a.ward_name]})}),e("td",{className:"px-6 py-4",children:a.application_no}),e("td",{className:"px-6 py-4",children:a.holding_no}),e("td",{className:"px-6 py-4",children:a.applicantname}),e("td",{className:"px-6 py-4",children:a.address}),e("td",{className:"px-6 py-4",children:a.mobileno}),e("td",{className:"px-6 py-4",children:e("button",{onClick:()=>{$(),T(`/waterViewApplication/${a==null?void 0:a.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:l("tranWaterApplicationSearchPage.viewLabel.label")})})]},c)):e("tr",{children:e("td",{colSpan:"8",children:l("tranWaterApplicationSearchPage.noDataFoundLabel.label")})})})]}),r("nav",{className:"block md:flex items-center md:justify-between text-center md:pt-4 m-5","aria-label":"Table navigation",children:[r("span",{className:"text-sm font-normal text-gray-500",children:[l("tranWaterApplicationSearchPage.showingLabel.label"),r("span",{className:"font-semibold text-gray-900 dark:text-white",children:[t==null?void 0:t.from,"-",t==null?void 0:t.to]})," ",l("tranWaterApplicationSearchPage.ofLabel.label")," ",e("span",{className:"font-semibold text-gray-900 dark:text-white",children:t==null?void 0:t.total})]}),e("ul",{className:"inline-flex items-center -space-x-px",children:(x=t==null?void 0:t.links)==null?void 0:x.map(a=>e("li",{children:e("p",{onClick:()=>{B(a==null?void 0:a.url.slice(-1)),m(c=>c+1)},className:`${(a==null?void 0:a.active)==!0?"bg-indigo-500 text-white":"bg-white text-gray-500"} px-3 py-2 leading-tight  border border-gray-300 hover:bg-indigo-100 hover:text-gray-700 cursor-pointer whitespace-nowrap`,children:j(a.label)})}))})]})]}):""]})]})}export{D as default};
