import{x as K,l as n,v as B,y as Q,W as X,A as Y,m as Z,q as D,z as ee,B as k,D as ae,k as l,o as te,j as e,E as le,G as re,H as se}from"./index-33a62e9c.js";function ie(){var S;const{t}=K(),[C,i]=n.useState(),[ne,p]=n.useState(!1),{type:h}=B(),[F,u]=n.useState(!1),[r,_]=n.useState(),[oe,m]=n.useState(!1),{notify:f}=n.useContext(Q),[j,b]=n.useState(),[N,q]=n.useState(1);n.useState("");const[y,E]=n.useState(5),[v,T]=n.useState(""),[V,w]=n.useState(0),{api_waterSearchConsumer:$}=X(),{filterBy:d,parameter:g,pages:O}=B(),M=()=>{d!=null&&d!=""&&(console.log("This is What i need ",d,g),x({filterBy:d,parameter:g}))};n.useEffect(()=>{M()},[d,g,O]);const R=Y(),H=Z();n.useEffect(()=>{V>0&&x()},[N,y]);const I=()=>{window.history.pushState(null,"",`/water/waterViewApplication/${s.values.filterBy}/${s.values.parameter} `)},x=a=>{console.log("data",a),b(),m(!1),u(!0);const c={filterBy:a?a.filterBy:s.values.filterBy,parameter:a?a.parameter:s.values.parameter,pages:y,page:N,search:v};console.log("th paypayload",c),console.log("before fetch holding details....",c),D.post($,c,R).then(o=>{var A,P,W,L;console.log("search property list",(P=(A=o==null?void 0:o.data)==null?void 0:A.data)==null?void 0:P.data),(W=o==null?void 0:o.data)!=null&&W.status?(_((L=o==null?void 0:o.data)==null?void 0:L.data),m(!0)):(b("Could not search data"),f("No data found","error")),u(!1)}).catch(o=>{console.log("Error while fetching Filter Data",o),f("Something went wrong!!","error"),u(!1),b("Something Went Wrong"),m(!1)})};console.log("readymadeListData.data",r==null?void 0:r.data);const z=a=>a=="&laquo; Previous"?"<< Prev":a=="Next &raquo;"?">> Next":a,G=ee({filterBy:k().required("This is a required field !"),parameter:k().required("This is a required field !")}),s=ae({initialValues:{filterBy:"",parameter:""},onSubmit:a=>{x(a)},validationSchema:G}),U=a=>{s.values.filterBy=a.target.value,a.target.value=="propertyNo"&&(i("Property No"),p(!0)),a.target.value=="ownerDetails"&&(i("Owner Details"),p(!1)),a.target.value=="address"&&(i("Address"),p(!1)),a.target.value=="applicationNo"&&(i("Application No"),p(!1))};console.log("readymadeListData.data",r==null?void 0:r.data);const J=()=>{b(),s.values&&i(s.values.filterBy)};return l(te,{children:[F&&e(le,{}),(h=="re"||h=="mu")&&l("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e(re,{className:"inline mr-2 text-3xl"})," ",t("tranWaterApplicationSearchPage.searchForAndApplyLabel.label"),e("span",{className:"font-semibold",children:h=="re"?"Re-Assessment":"Mutation"})," ",t("tranWaterApplicationSearchPage.propertySearchInstruction1Label.label")," ",h=="re"?"Re-Assessment":"Mutation"]}),l("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex ml-5 mt-2 ",children:e("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:t("tranWaterApplicationSearchPage.searchWaterConsumerLabel.label")})}),e("form",{onChange:J,onSubmit:s.handleSubmit,children:l("div",{className:"flex justify-center space-x-8 my-5 m-10",children:[l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("tranWaterApplicationSearchPage.filterByLabel.label"),e("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"filterBy",onChange:U,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:t("tranWaterApplicationSearchPage.selectApplicationTypeLabel.label")}),l("option",{value:"consumerNo",children:[t("tranWaterApplicationSearchPage.consumerNoLabel.label")," "]}),e("option",{value:"propertyNo",children:t("tranWaterApplicationSearchPage.propertyNo.label")}),e("option",{value:"applicantName",children:t("tranWaterApplicationSearchPage.applicantNameLabel.label")}),e("option",{value:"mobileNo",children:t("tranWaterApplicationSearchPage.mobileNoLabel.label")}),e("option",{value:"applicationNo",children:t("tranWaterApplicationSearchPage.applicationNoLabel.label")})]}),e("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("tranWaterApplicationSearchPage.searchByLabel.label")," ",C," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"parameter",onChange:s.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:s.touched.parameter&&s.errors.parameter?s.errors.parameter:null})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"w-full border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:l("p",{className:"flex",children:[l("span",{className:"mt-1 mr-2",children:[" ",e(se,{})," "]})," ",t("tranWaterApplicationSearchPage.searchRecordLabel.label")," "]})})})]})}),e("div",{className:"flex justify-center text-red-600 mb-2 font-semibold",children:j}),r!=null&&r.data?l("div",{className:"relative overflow-x-auto sm:rounded-lg border shadow-md",children:[l("div",{className:"flex justify-between my-3 mx-5",children:[l("div",{className:"flex gap-3",children:[e("p",{children:t("tranWaterApplicationSearchPage.showLabel.label")}),l("select",{onChange:a=>(w(c=>c+1),E(a.target.value)),name:"",id:"",className:"border rounded shadow w-24",children:[e("option",{value:"5",children:t("tranWaterApplicationSearchPage.records5Label.label")}),e("option",{value:"10",children:t("tranWaterApplicationSearchPage.records10Label.label")}),e("option",{value:"20",children:t("tranWaterApplicationSearchPage.records20Label.label")}),e("option",{value:"30",children:t("tranWaterApplicationSearchPage.records30Label.label")})]})]}),l("div",{className:"flex gap-3",children:[e("p",{children:t("tranWaterApplicationSearchPage.searchLabel.label")}),e("input",{type:"text",name:"search",value:v,onChange:a=>T(a.target.value),className:"border rounded shadow w-40"})]})]}),l("table",{className:"w-full text-sm text-left text-gray-500 ",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:l("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:l("div",{className:"flex items-center",children:[" ",t("tranWaterApplicationSearchPage.wardNoLabel.label")," "]})}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.ownersNameLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.consumerNoLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:"Property No"}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.mobileNoLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.addressLabel.label")}),e("th",{scope:"col",className:"px-6 py-3",children:"Bill Amount"}),e("th",{scope:"col",className:"px-6 py-3",children:"Status"}),e("th",{scope:"col",className:"px-6 py-3",children:t("tranWaterApplicationSearchPage.actionLabel.label")})]})}),e("tbody",{children:r&&r.data?r.data.map((a,c)=>l("tr",{className:"bg-white border-b  dark:border-gray-700 hover:bg-gray-50 ",children:[e("td",{className:"w-4 p-4",children:l("div",{className:"flex items-center",children:[" ",a.ward_mstr_id]})}),e("td",{className:"px-6 py-4",children:a.owner_name}),e("td",{className:"px-6 py-4",children:a.consumer_no}),e("td",{className:"px-6 py-4",children:a.property_no}),e("td",{className:"px-6 py-4",children:a.mobile_no}),e("td",{className:"px-6 py-4",children:a.address}),e("td",{className:"px-6 py-4",children:a.balance_amount||"N/A"}),e("td",{className:"px-6 py-4",children:a.payment_status||"N/A"}),e("td",{className:"px-6 py-4",children:e("button",{onClick:()=>{I(),H(`/waterViewConsumer/${a==null?void 0:a.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:t("tranWaterApplicationSearchPage.viewLabel.label")})})]},c)):e("tr",{children:e("td",{colSpan:"8",children:t("tranWaterApplicationSearchPage.noDataFoundLabel.label")})})})]}),l("nav",{className:"block md:flex items-center md:justify-between text-center md:pt-4 m-5","aria-label":"Table navigation",children:[l("span",{className:"text-sm font-normal text-gray-500",children:[t("tranWaterApplicationSearchPage.showingLabel.label"),l("span",{className:"font-semibold text-gray-900 dark:text-white",children:[r==null?void 0:r.from,"-",r==null?void 0:r.to]})," ",t("tranWaterApplicationSearchPage.ofLabel.label")," ",e("span",{className:"font-semibold text-gray-900 dark:text-white",children:r==null?void 0:r.total})]}),e("ul",{className:"inline-flex items-center -space-x-px",children:(S=r==null?void 0:r.links)==null?void 0:S.map(a=>e("li",{children:e("p",{onClick:()=>{q(a==null?void 0:a.url.slice(-1)),w(c=>c+1)},className:`${(a==null?void 0:a.active)==!0?"bg-indigo-500 text-white":"bg-white text-gray-500"} px-3 py-2 leading-tight  border border-gray-300 hover:bg-indigo-100  cursor-pointer whitespace-nowrap`,children:z(a.label)})}))})]})]}):""]})]})}export{ie as default};
