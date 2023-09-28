import{t as Pe,aN as ke,r,aO as Te,a as Ve,u as Ce,g as Oe,A as Re,j as e,bR as Se,bQ as Ee,bZ as Ue,b_ as pe,b$ as i}from"./index-a9962f11.js";import{p as fe}from"./pdf-37897ad1.js";/* empty css              */const Qe=N=>{var g,y,w,_,I,L,W,D,A,u,M,P,k,T,V,C,O,R,S,E,U,Y,$,q,B,Q,Z,z,G,H,J,K,X,F,ee,se,ae,te,de,re,xe,le,ne,ce,oe,he,be,ie,Ne,me;const{t}=Pe(),[Ye,ve]=ke.useState(!1),[s,ge]=r.useState(),[ye,we]=r.useState(0),[_e,Ie]=r.useState(),[x,m]=r.useState(!1),[Le,j]=r.useState(!1),{api_waterViewPendingApplication:We,header:De}=Te(),p=Ve(),{id:f}=Ce(),{setBreadCrumbData:Ae}=r.useContext(Oe);r.useEffect(()=>{Ae(["Water Dashboard","View Applications"])},[]),r.useEffect(()=>{N.openModal>0&&ve(!0)},[N.openModal]),r.useEffect(()=>{m(!0),Re.post(We,{applicationId:f},De).then(a=>{console.log("Application Full Data",a.data.data),ge(a.data.data),m(!1)}).catch(a=>{console.log("ERROR : Pending Application Data",a),m(!1)})},[N.openModal]);const v=a=>{we(d=>d+1),Ie(a)},ue=()=>{j(!0)},Me=(g=s==null?void 0:s.applicationDetails)==null?void 0:g.connection_type;return e.jsxs(e.Fragment,{children:[Le&&e.jsx(Se,{category:Me,openPaymentModal:j,paymentData:s==null?void 0:s.documentDetails}),e.jsx(Ee,{openDocviewModal:ye,documentUrl:_e}),e.jsx(Ue,{active:"application",title:`${t("tranWaterDashboardIndex.waterApplicationDetailsLabel.label")}`,applicationNo:(y=s==null?void 0:s.applicationDetails)==null?void 0:y.application_no}),e.jsx("div",{className:"grid grid-cols-12 mb-20",children:e.jsxs("div",{className:"rounded-md col-span-12",children:[((w=s==null?void 0:s.applicationDetails)==null?void 0:w.current_role_name)&&e.jsxs("p",{className:"text-center text-green-600 font-semibold",children:[" ",t("tranWaterDashboardIndex.applicationSubmittedLabel.label"),(_=s==null?void 0:s.applicationDetails)==null?void 0:_.current_role_name]}),((I=s==null?void 0:s.applicationDetails)==null?void 0:I.scheduledDate)&&((L=s==null?void 0:s.applicationDetails)==null?void 0:L.scheduledTime)&&e.jsxs("p",{className:"text-center",children:[" ",t("tranWaterDashboardIndex.scheduledInspectionDateLabel.label"),e.jsxs("span",{className:"font-semibold",children:["  ",pe((W=s==null?void 0:s.applicationDetails)==null?void 0:W.scheduledDate,"YYYY-MM-DD").format("DD-MMM-yy")]}),"  ",t("tranWaterDashboardIndex.timeLabel.label"),": ",e.jsx("span",{className:"font-semibold",children:pe((D=s==null?void 0:s.applicationDetails)==null?void 0:D.scheduledTime,"h:mm:ss A").format("hh:mm A")})]}),e.jsxs("div",{className:"overflow-y-auto",children:[e.jsx("div",{className:"bg-white shadow-xl p-4 border border-gray-200",children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs  text-[#37517e] ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/6592/6592963.png",alt:"pin",className:"w-5 inline"})," ",t("tranWaterDashboardIndex.basicDetailsLabel.label")]}),x?e.jsx(i,{}):e.jsxs("div",{className:"mt-2 bg-white",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.ulbNameLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(A=s==null?void 0:s.applicationDetails)!=null&&A.ulb_name?(u=s==null?void 0:s.applicationDetails)==null?void 0:u.ulb_name:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.wardNoLabel.label")}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(M=s==null?void 0:s.applicationDetails)!=null&&M.ward_name?(P=s==null?void 0:s.applicationDetails)==null?void 0:P.ward_name:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.connectionTypeLabel.label")}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(k=s==null?void 0:s.applicationDetails)!=null&&k.connection_type?(T=s==null?void 0:s.applicationDetails)==null?void 0:T.connection_type:"N/A"})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.connectionThroughLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(V=s==null?void 0:s.applicationDetails)!=null&&V.connection_through?(C=s==null?void 0:s.applicationDetails)==null?void 0:C.connection_through:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.ownerTypeLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(O=s==null?void 0:s.applicationDetails)!=null&&O.owner_char_type?(R=s==null?void 0:s.applicationDetails)==null?void 0:R.owner_char_type:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.propertyTypeLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(S=s==null?void 0:s.applicationDetails)!=null&&S.property_type?(E=s==null?void 0:s.applicationDetails)==null?void 0:E.property_type:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.categoryTypeLabel.label")}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(U=s==null?void 0:s.applicationDetails)!=null&&U.category?(Y=s==null?void 0:s.applicationDetails)==null?void 0:Y.category:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.pipelineTypeLabel.label")}),e.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[!(($=s==null?void 0:s.applicationDetails)!=null&&$.pipeline_type_id)&&"N/A",((q=s==null?void 0:s.applicationDetails)==null?void 0:q.pipeline_type_id)==1&&"New Pipeline",((B=s==null?void 0:s.applicationDetails)==null?void 0:B.pipeline_type_id)==2&&"Old Pipeline"]})]}),e.jsx("div",{className:"flex-1 text-xs"})]})]})]})}),e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-3",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ",t("tranWaterDashboardIndex.propertyAddressDetailsLabel.label")]}),x?e.jsx(i,{}):e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.wardNoLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(Q=s==null?void 0:s.applicationDetails)!=null&&Q.ward_name?(Z=s==null?void 0:s.applicationDetails)==null?void 0:Z.ward_name:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.totalAreaLabel.label")}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(z=s==null?void 0:s.applicationDetails)!=null&&z.area_sqft?(G=s==null?void 0:s.applicationDetails)==null?void 0:G.area_sqft:"N/A"})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.pincodeLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(H=s==null?void 0:s.applicationDetails)!=null&&H.pin?(J=s==null?void 0:s.applicationDetails)==null?void 0:J.pin:"N/A"})]}),((K=s==null?void 0:s.applicationDetails)==null?void 0:K.holding_no)&&e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.holdingNoLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(X=s==null?void 0:s.applicationDetails)!=null&&X.holding_no?(F=s==null?void 0:s.applicationDetails)==null?void 0:F.holding_no:"N/A"})]}),((ee=s==null?void 0:s.applicationDetails)==null?void 0:ee.saf_no)&&e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.safNoLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(se=s==null?void 0:s.applicationDetails)!=null&&se.saf_no?(ae=s==null?void 0:s.applicationDetails)==null?void 0:ae.saf_no:"N/A"})]})]}),e.jsx("div",{}),e.jsxs("div",{className:"col-span-4 grid grid-cols-5 justify-center items-center",children:[e.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("label",{className:"form-check-label text-gray-800",children:[" ",e.jsx("small",{className:"block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center",children:t("tranWaterDashboardIndex.completeAddressLabel.label")})]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"})]}),e.jsx("div",{className:"px-4",children:e.jsx("div",{className:"flex text-xs",children:e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.addressLabel.label")}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(te=s==null?void 0:s.applicationDetails)!=null&&te.address?(de=s==null?void 0:s.applicationDetails)==null?void 0:de.address:"N/A"})]})})})]})]}),e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8948/8948774.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ",t("tranWaterDashboardIndex.paymentDetailsLabel.label")]}),x?e.jsx(i,{}):((re=s==null?void 0:s.documentDetails)==null?void 0:re.doc_upload_status)==!1?e.jsx("div",{className:"text-center text-indigo-600",children:t("tranWaterDashboardIndex.paymentPendingLabel.label")}):(le=(xe=s==null?void 0:s.documentDetails)==null?void 0:xe.connectionCharges)!=null&&le.paid_status?e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[e.jsx("div",{className:"text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.slLabel.label")})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.transactionNoLabel.label")})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.amountLabel.label")})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.paymentModeLabel.label")})}),e.jsx("div",{className:" text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.statusLabel.label")})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.paymentDateTimeLabel.label")})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"text-[#37517e]",children:t("tranWaterDashboardIndex.actionLabel.label")})})]}),((ne=s==null?void 0:s.waterTransDetail)==null?void 0:ne.length)>0&&((ce=s==null?void 0:s.waterTransDetail)==null?void 0:ce.map((a,d)=>e.jsxs("div",{className:"flex space-x-10 pl-4 my-2 border-b border-y-gray-200",children:[e.jsx("div",{className:"text-xs",children:e.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[d+1,"."]})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(a==null?void 0:a.tran_no)||"N/A"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:(a==null?void 0:a.amount)||"N/A"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:(a==null?void 0:a.payment_mode)||"N/A"})}),e.jsx("div",{className:"text-xs",children:e.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[(a==null?void 0:a.verify_status)==1&&"Paid",(a==null?void 0:a.verify_status)==2&&"Processing"]})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-xs text-[#37517e]",children:(a==null?void 0:a.created_at)||"N/A"})}),e.jsx("div",{className:"flex-1 text-xs",children:e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e.jsx("button",{className:"hover:border-b-2 border-blue-500 hover:text-blue-500",onClick:()=>p(`/waterConnReceipt/${a==null?void 0:a.tran_no}`),children:t("tranWaterDashboardIndex.printReceiptLabel.label")})})})]},d)))]}):e.jsxs("div",{children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{children:t("tranWaterDashboardIndex.makePaymentLabel.label")})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:()=>ue(),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:t("tranWaterDashboardIndex.payNowLabel.label")})})]})]}),e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ",t("tranWaterDashboardIndex.documentDetailsLabel.label")]}),x?e.jsx(i,{}):(oe=s==null?void 0:s.documentDetails)!=null&&oe.doc_upload_status?e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:t("tranWaterDashboardIndex.documentNameLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:t("tranWaterDashboardIndex.statusLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:t("tranWaterDashboardIndex.previewLabel.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:[" ",t("tranWaterDashboardIndex.viewLabel.label")]})]})}),e.jsxs("tbody",{className:"text-sm",children:[e.jsx(e.Fragment,{children:(be=(he=s==null?void 0:s.documentDetails)==null?void 0:he.documentsList)==null?void 0:be.map((a,d)=>{var l,n,c,o,h;return e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:a!=null&&a.docName?a==null?void 0:a.docName:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(a==null?void 0:a.uploadDoc)==""?e.jsx("p",{className:"text-red-400 font-semibold",children:t("tranWaterDashboardIndex.notUploadLabel.label")}):e.jsx("p",{className:"text-green-400 font-semibold",children:t("tranWaterDashboardIndex.uploadedLabel.label")})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:((n=(l=a==null?void 0:a.uploadDoc)==null?void 0:l.doc_path)==null?void 0:n.split(".").pop())=="pdf"?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:fe}):(c=a==null?void 0:a.uploadDoc)!=null&&c.doc_path?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:(o=a==null?void 0:a.uploadDoc)==null?void 0:o.doc_path}):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(h=a==null?void 0:a.uploadDoc)!=null&&h.doc_path?e.jsx("button",{onClick:()=>{var b,je;return v((b=a==null?void 0:a.uploadDoc)==null?void 0:b.doc_path,(je=a==null?void 0:a.uploadDoc)==null?void 0:je.docName)},className:"bg-indigo-600 text-white px-2 py-1 rounded",children:t("tranWaterDashboardIndex.viewLabel.label")}):e.jsx("button",{disabled:!0,className:"bg-indigo-200 text-white px-2 py-1 rounded",children:t("tranWaterDashboardIndex.viewLabel.label")})})]})})}),e.jsx(e.Fragment,{children:(Ne=(ie=s==null?void 0:s.documentDetails)==null?void 0:ie.ownersDocList)==null?void 0:Ne.map((a,d)=>{var l,n,c,o,h;return e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:a!=null&&a.docName?(a==null?void 0:a.ownerName)+" ( "+(a==null?void 0:a.docName)+")":"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(a==null?void 0:a.uploadDoc)==""?e.jsx("p",{className:"text-red-400 font-semibold",children:t("tranWaterDashboardIndex.notUploadLabel.label")}):e.jsx("p",{className:"text-green-400 font-semibold",children:t("tranWaterDashboardIndex.uploadedLabel.label")})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:((n=(l=a==null?void 0:a.uploadDoc)==null?void 0:l.doc_path)==null?void 0:n.split(".").pop())=="pdf"?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:fe}):(c=a==null?void 0:a.uploadDoc)!=null&&c.doc_path?e.jsx("img",{className:"h-10 w-10 border rounded shadow-md",src:(o=a==null?void 0:a.uploadDoc)==null?void 0:o.doc_path}):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(h=a==null?void 0:a.uploadDoc)!=null&&h.doc_path?e.jsx("button",{onClick:()=>{var b;return v((b=a==null?void 0:a.uploadDoc)==null?void 0:b.doc_path)},className:"bg-indigo-600 text-white px-2 py-1 rounded",children:t("tranWaterDashboardIndex.viewLabel.label")}):e.jsx("button",{disabled:!0,className:"bg-indigo-200 text-white px-2 py-1 rounded",children:t("tranWaterDashboardIndex.viewLabel.label")})})]})})})]})]}):e.jsxs("div",{children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{children:t("tranWaterDashboardIndex.uploadDocumentLabel.label")})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:()=>p(`/water-doc-upload/${f}`),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:t("tranWaterDashboardIndex.uploadDocumentLabel.label")})})]})]}),e.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ",t("tranWaterDashboardIndex.ownerDetailsLabel.label")]}),x?e.jsx(i,{}):e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:t("tranWaterDashboardIndex.ownerNameLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:t("tranWaterDashboardIndex.fatherNameLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:t("tranWaterDashboardIndex.mobileNoLabel.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:[t("tranWaterDashboardIndex.emailLabel.label")," "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(me=s==null?void 0:s.ownerDetails)==null?void 0:me.map((a,d)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:a!=null&&a.applicant_name?a==null?void 0:a.applicant_name:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:a!=null&&a.guardian_name?a==null?void 0:a.guardian_name:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:a!=null&&a.mobile_no?a==null?void 0:a.mobile_no:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:a!=null&&a.email?a==null?void 0:a.email:"N/A"})]}))})})]})]})]})]})})]})};export{Qe as default};