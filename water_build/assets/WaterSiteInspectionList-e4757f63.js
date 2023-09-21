import{J as I,R as E,l as i,y as L,m as T,W as A,z as F,B as h,D as M,q as _,j as e,k as a,I as V,o as O,E as R,H as j,L as z,A as Y,h as $}from"./index-ab2d42ac.js";const P={overlay:{background:"#e6e6fc"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"transparent",border:"none",height:"600px"}};function U(r){I.setAppElement("#root");const[N,p]=E.useState(!1),[u,b]=i.useState(!1),{notify:c}=i.useContext(L),g=r.id,f=T(),{api_waterInspectionSaveDate:w,header:x}=A(),v=F({inspectionTime:h().required("Enter Time"),inspectionDate:h().required("Select Connection Date")}),s=M({enableReinitialize:!0,initialValues:{inspectionTime:"",inspectionDate:"",applicationId:g},onSubmit:(t,y)=>{console.log("The Final Data is...",t),S(t)},validationSchema:v}),D=t=>{t.target.name,t.target.value},S=t=>{b(!1);const y={applicationId:t==null?void 0:t.applicationId,inspectionDate:t==null?void 0:t.inspectionDate,inspectionTime:t==null?void 0:t.inspectionTime};_.post(w,y,x).then(l=>{l.data.status?(console.log("Data Saved",l),c("Date time saved!","success"),l.data.data.canView?(console.log("View Inspection Page if Same Date",l.data.data.canView),f(`/water-site-inspection-form/${g}`)):d()):(c("Failed to save data","error"),console.log("Data Not Saved..",l),b("Failed to Save"))}).catch(l=>{c("Exception : Something Went Wrong","error"),b("Exception While Saving.."),console.log("Exception While Time Save..",l)})};i.useEffect(()=>{r.openModal>0&&p(!0)},[r.openModal]);function k(){}function d(){p(!1),r.refetch()}return e("div",{className:"",children:e(I,{isOpen:N,onAfterOpen:k,onRequestClose:d,style:P,contentLabel:"Example Modal",children:e("div",{children:e("div",{className:"relative w-full h-full max-w-3xl md:h-auto border-indigo-600 shadow-indigo-200 shadow-sm rounded",children:a("div",{className:"relative bg-white rounded-lg shadow ",children:[a("div",{className:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600",children:[e("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Set Date and Time for Site Inspection"}),a("button",{onClick:d,className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"defaultModal",children:[e("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),e("span",{className:"sr-only",children:"Close modal"})]})]}),e("div",{className:"py-6 bg-white rounded-lg shadow-xl p-4",children:a("form",{onSubmit:s.handleSubmit,onChange:D,className:"p-4 relative",children:[a("div",{className:"flex pl-4 ",children:[e("div",{className:"flex-1",children:a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Date ",e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e("input",{...s.getFieldProps("inspectionDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.inspectionDate&&s.errors.inspectionDate?s.errors.inspectionDate:null})]})}),e("div",{className:"flex-1",children:a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Time ",e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e("input",{...s.getFieldProps("inspectionTime"),type:"time",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e("span",{className:"text-red-600 absolute text-xs",children:s.touched.inspectionTime&&s.errors.inspectionTime?s.errors.inspectionTime:null})]})})]}),u&&e("div",{children:e("div",{className:" absolute text-red-500",children:e("p",{className:"text-center",children:u})})}),a("div",{className:"flex flex-row-reverse items-center p-2 border-t border-gray-200 rounded-b",children:[e("button",{type:"submit",className:"mx-2 text-white disabled:bg-gray-500 disabled:scale-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"}),e("button",{type:"button",onClick:d,className:"mx-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 focus:z-10 ",children:"Cancel"})]})]})})]})})})})})}function K(){const[r,N]=i.useState(),[p,u]=i.useState(!1),[b,c]=i.useState(!1),[g,f]=i.useState(!1),[w,x]=i.useState(!1),[v,s]=i.useState(0),[D,S]=i.useState(),{api_waterSiteInspectionList:k}=A(),{notify:d}=i.useContext(L);V("Water Site Inspection List"),F({fromDate:h().when("searchBy",{is:"byDate",then:h().required("Field is required")}),toDate:h().when("searchBy",{is:"byDate",then:h().required("Field is required")}),searchBy:h().required("This is a required field !")});const t=M({initialValues:{fromDate:"",toDate:"",searchBy:""},onSubmit:o=>{l(o)}}),y=T(),l=o=>{c(!0),u(!1);const m={fromDate:o.fromDate,toDate:o.toDate,filterBy:o.searchBy,parameter:o.applicationNo};_.post(k,m,Y()).then(n=>{var C,B;(C=n==null?void 0:n.data)!=null&&C.status?(console.log("this ==== List of site inspection...",n==null?void 0:n.data),N((B=n==null?void 0:n.data)==null?void 0:B.data),u(!0),c(!1)):d("Failed to fetch data","error")}).catch(n=>{d("Something Went Wrong","error"),console.log("Error while fetching Filter Data",n),u(!1),c(!1)})},H=o=>{let m=o.target.name,n=o.target.value;m==="searchBy"&&(n=="byDate"?f(!0):f(!1)),m==="searchBy"&&(n=="byApplication"?x(!0):x(!1))},W=[{Header:"Ward No.",accessor:"ward_name"},{Header:"ULB Name",accessor:"ulb_name"},{Header:"Application No",accessor:"application_no"},{Header:"Holding No",accessor:"holding_no"},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:o})=>e("span",{children:$(o.row.original.apply_date).format("DD-MM-YYYY")})},{Header:"Address",accessor:"address"},{Header:"Inspection Status",accessor:"SiteInspectionDate.site_verify_status",Cell:({cell:o})=>e("span",{children:o.row.original.SiteInspectionDate.site_verify_status==!0?e("p",{className:"bg-green-200 text-black px-2 rounded text-center",children:"Done"}):e("p",{className:"bg-red-200 text-black px-2 rounded text-center",children:"Not Done"})})},{Header:"Schedule Date",accessor:"SiteInspectionDate.inspection_date"},{Header:"Action",accessor:"id",Cell:({cell:o})=>e("button",{onClick:()=>q(o.row.original.id,o.row.original.SiteInspectionDate.inspection_date),className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:"View"})}],q=(o,m)=>{console.log("Handle View Button Clicked..",m),m?y(`/water-site-inspection-form/${o}`):(S(o),s(n=>n+1))};return a(O,{children:[e(U,{refetch:()=>{console.log("Refetch Called.."),t.handleSubmit()},openModal:v,id:D}),b&&e(R,{}),a("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex justify-between mx-5 my-3",children:e("div",{className:"flex ",children:e("p",{className:"font-bold text-2xl text-gray-600",children:"List of Site Inspection"})})}),e("form",{onSubmit:t.handleSubmit,onChange:H,children:a("div",{className:"flex justify-center space-x-8 my-5 m-10",children:[a("div",{children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By",e("span",{className:"text-red-500",children:"*"})]}),a("select",{name:"searchBy",onChange:t.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"byDate",children:"Date"}),e("option",{value:"byApplication",children:"Application No"})]}),e("p",{className:"text-red-500 text-xs",children:t.touched.searchBy&&t.errors.searchBy?t.errors.searchBy:null})]}),g&&a("div",{className:"flex space-x-8",children:[a("div",{children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["From Data",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"date",name:"fromDate",onChange:t.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:t.touched.fromDate&&t.errors.fromDate?t.errors.fromDate:null})]}),a("div",{children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["To Data",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"date",name:"toDate",onChange:t.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:t.touched.toDate&&t.errors.toDate?t.errors.toDate:null})]})]}),w&&a("div",{children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Application No",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"applicationNo",onChange:t.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:t.touched.applicationNo&&t.errors.applicationNo?t.errors.applicationNo:null})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"w-full border border-indigo-600 bg-indigo-600 hover:bg-indigo-400 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:a("p",{className:"flex",children:[a("span",{className:"mt-1 mr-2",children:[e(j,{})," "]}),"Search record"]})})})]})}),a("div",{className:"m-10",children:[p&&(r==null?void 0:r.length)!=0&&e(z,{columns:W,dataList:r}),p&&(r==null?void 0:r.length)==0&&e("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]})]})]})}export{K as default};
