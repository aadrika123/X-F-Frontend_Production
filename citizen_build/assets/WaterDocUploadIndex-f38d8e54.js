import{t as ra,r as s,aK as oa,u as da,a as la,g as ca,A as na,j as e,bR as pa,bL as xa,bK as ia,bT as w}from"./index-adea03ed.js";/* empty css              */import{p as O}from"./pdf-37897ad1.js";import{W as ma,a as ba,n as V,i as x}from"./WaterDocumentModalForOwner-ca0a5be2.js";const fa=ha=>{var S,C,F;const{t}=ra(),[P,E]=s.useState(0),[A,R]=s.useState(0),[v,B]=s.useState(),[N,T]=s.useState(),[$,K]=s.useState(0),[W,_]=s.useState(),[q,z]=s.useState(),[k,I]=s.useState(!1),[G,H]=s.useState(!1),[l,J]=s.useState(!1),[Q,M]=s.useState(!1),{api_waterViewDocumetTobeuploaded:X,header:Y}=oa(),{id:D}=da();la(),s.useEffect(()=>{L()},[D]);const{setBreadCrumbData:Z}=s.useContext(ca);s.useEffect(()=>{Z(["Water Dashboard","Upload Document"])},[]);const L=()=>{I(!0),na.post(X,{applicationId:D},Y).then(a=>{var r,o,d;I(!1),console.log("LIst of document to be uploaded in water",a),B(a.data.data.documentsList),T(a.data.data.ownersDocList),H((o=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:o.doc_upload_status),J((d=a==null?void 0:a.data)==null?void 0:d.data)}).catch(a=>{I(!1),console.log("ERror while fetching list of water doc to be upladed",a)})},aa=(a,r,o)=>{_({docName:a,applicationId:D,docVal:r,refDocName:o}),E(c=>c+1)},ea=(a,r,o,d,c)=>{_({ownerName:a,docName:r,applicationId:D,ownerId:o,docVal:d,docCategory:c}),R(n=>n+1)},U=a=>{a&&(z(a),K(r=>r+1))},ta=()=>{M(!0)},sa=(S=l==null?void 0:l.connectionCharges)==null?void 0:S.charge_category;return console.log("connectionCharges"),e.jsxs(e.Fragment,{children:[e.jsx(pa,{active:"document",title:`${t("tranWaterDashboardIndex.waterApplicationDocumentUploadLabel.label")}`,applicationNo:(C=l==null?void 0:l.connectionCharges)==null?void 0:C.applicationNo}),Q&&e.jsx(xa,{openPaymentModal:M,category:sa,paymentData:l}),e.jsx(ma,{openDocumentModal:P,payloadData:W,refetch:L}),e.jsx(ba,{openDocumentModal:A,payloadData:W,refetch:L}),e.jsx(ia,{openDocviewModal:$,documentUrl:q}),e.jsx("div",{className:"grid grid-cols-12 bg-white poppins animate__animated animate__fadeIn animate__faster",children:e.jsx("div",{className:"col-span-12 pt-4 2xl:h-full md:h-screen overflow-y-auto pb-2",children:e.jsxs("div",{className:"md:px-2 col-span-12",children:[e.jsx("div",{className:"float-right m-3 space-x-3",children:G==!0?((F=l==null?void 0:l.connectionCharges)==null?void 0:F.paid_status)==!1&&e.jsx("button",{onClick:()=>ta(),class:"py-2 px-4 inline-block text-center mb-3 leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:t("tranWaterDashboardIndex.payNowLabel.label")}):e.jsx("div",{})}),e.jsx("div",{children:e.jsx("h1",{class:"text-base md:text-xl font-bold md:my-3 text-gray-600 text-center",children:t("tranWaterDashboardIndex.waterConnectionDocumentListLabel.label")})}),e.jsx("div",{className:"",children:e.jsx("div",{className:"md:inline-block min-w-full overflow-hidden",children:k?e.jsxs(e.Fragment,{children:[" ",e.jsx(w,{})," ",e.jsx(w,{})," "]}):e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:t("tranWaterDashboardIndex.documentNameLabel.label")}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:t("tranWaterDashboardIndex.viewLabel.label")}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:t("tranWaterDashboardIndex.statusLabel.label")}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:t("tranWaterDashboardIndex.uploadLabel.label")})]})}),e.jsx("tbody",{children:v==null?void 0:v.map((a,r=1)=>{var o,d,c,p,n,i,m,b,h,u,j,g,y;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:r+1})}),e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[a==null?void 0:a.refDocName,(a==null?void 0:a.isMadatory)==1&&e.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),e.jsx("td",{onClick:()=>{var f;return U((f=a==null?void 0:a.uploadDoc)==null?void 0:f.doc_path)},className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("a",{href:"#",className:"block relative",children:[(a==null?void 0:a.uploadDoc)==""&&e.jsx("img",{alt:"profil",src:V,className:"mx-auto object-cover rounded-none cursor-not-allowed md:h-10 h-8 md:w-10 w-8"}),((d=(o=a==null?void 0:a.uploadDoc)==null?void 0:o.doc_path)==null?void 0:d.split(".").pop())=="pdf"&&e.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((p=(c=a==null?void 0:a.uploadDoc)==null?void 0:c.doc_path)==null?void 0:p.split(".").pop())=="jpg"&&e.jsx("img",{alt:"profil",src:x,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((i=(n=a==null?void 0:a.uploadDoc)==null?void 0:n.doc_path)==null?void 0:i.split(".").pop())=="jpeg"&&e.jsx("img",{alt:"profil",src:x,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((b=(m=a==null?void 0:a.uploadDoc)==null?void 0:m.doc_path)==null?void 0:b.split(".").pop())=="png"&&e.jsx("img",{alt:"profil",src:x,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "})]})})})}),e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-center text-black md:font-medium text-xs md:text-sm",children:(a==null?void 0:a.uploadDoc)==""?e.jsx("p",{className:"text-red-500",children:t("tranWaterDashboardIndex.notUploadLabel.label")}):e.jsxs("div",{children:[((h=a==null?void 0:a.uploadDoc)==null?void 0:h.verify_status)==0&&e.jsx("p",{className:"text-yellow-700",children:t("tranWaterDashboardIndex.pendingLabel.label")}),((u=a==null?void 0:a.uploadDoc)==null?void 0:u.verify_status)==1&&e.jsx("p",{className:"text-green-700",children:t("tranWaterDashboardIndex.verifiedLabel.label")}),((j=a==null?void 0:a.uploadDoc)==null?void 0:j.verify_status)==2&&e.jsx("p",{className:"text-red-700",children:t("tranWaterDashboardIndex.rejectedLabel.label")})]})})}),e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm ",children:((g=a==null?void 0:a.uploadDoc)==null?void 0:g.verify_status)!=1&&e.jsx("button",{onClick:()=>aa(a.docName,a.docVal,a.refDocName),className:"border px-2 md:px-4 py-1 md:py-2 hover:text-white hover:bg-indigo-500",children:((y=a==null?void 0:a.uploadDoc)==null?void 0:y.verify_status)==2?"Re-Upload":`${t("tranWaterDashboardIndex.uploadLabel.label")}`})})]})})})]}),e.jsxs("p",{className:" font-semibold text-red-400",children:[" ",e.jsx("span",{className:"text-base",children:" *"})," ",e.jsxs("span",{className:"text-xs",children:[" ",t("tranWaterDashboardIndex.mandatoryLabel.label")]})]})]})})}),e.jsx("div",{children:e.jsx("h1",{class:"text-base md:text-xl font-bold my-3 text-gray-600 text-center",children:t("tranWaterDashboardIndex.ownerDocumentListLabel.label")})}),e.jsx("div",{className:"",children:e.jsx("div",{className:"md:inline-block min-w-full overflow-hidden",children:k?e.jsxs(e.Fragment,{children:[" ",e.jsx(w,{})," ",e.jsx(w,{})," "]}):e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:t("tranWaterDashboardIndex.documentNameLabel.label")}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:t("tranWaterDashboardIndex.viewLabel.label")}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:t("tranWaterDashboardIndex.statusLabel.label")}),e.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:t("tranWaterDashboardIndex.uploadLabel.label")})]})}),e.jsx("tbody",{children:N?N==null?void 0:N.map((a,r=1)=>{var o,d,c,p,n,i,m,b,h,u,j,g,y;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:r+1})}),e.jsxs("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:[e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[a==null?void 0:a.refDocName,(a==null?void 0:a.isMadatory)&&e.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]}),e.jsxs("p",{className:"text-xs md:w-full w-40",children:["(",a==null?void 0:a.ownerName,")"]})]}),e.jsx("td",{onClick:()=>{var f;return U((f=a==null?void 0:a.uploadDoc)==null?void 0:f.doc_path)},className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("a",{href:"#",className:"block relative",children:[(a==null?void 0:a.uploadDoc)==""&&e.jsx("img",{alt:"profil",src:V,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  cursor-not-allowed"}),((d=(o=a==null?void 0:a.uploadDoc)==null?void 0:o.doc_path)==null?void 0:d.split(".").pop())=="pdf"&&e.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((p=(c=a==null?void 0:a.uploadDoc)==null?void 0:c.doc_path)==null?void 0:p.split(".").pop())=="jpg"&&e.jsx("img",{alt:"profil",src:x,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((i=(n=a==null?void 0:a.uploadDoc)==null?void 0:n.doc_path)==null?void 0:i.split(".").pop())=="jpeg"&&e.jsx("img",{alt:"profil",src:x,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((b=(m=a==null?void 0:a.uploadDoc)==null?void 0:m.doc_path)==null?void 0:b.split(".").pop())=="png"&&e.jsx("img",{alt:"profil",src:x,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "})]})})})}),e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-center text-black md:font-medium text-xs md:text-sm",children:(a==null?void 0:a.uploadDoc)==""?e.jsx("p",{className:"text-red-500",children:t("tranWaterDashboardIndex.notUploadLabel.label")}):e.jsxs("div",{children:[((h=a==null?void 0:a.uploadDoc)==null?void 0:h.verify_status)==0&&e.jsx("p",{className:"text-yellow-700",children:t("tranWaterDashboardIndex.pendingLabel.label")}),((u=a==null?void 0:a.uploadDoc)==null?void 0:u.verify_status)==1&&e.jsx("p",{className:"text-green-700",children:t("tranWaterDashboardIndex.verifiedLabel.label")}),((j=a==null?void 0:a.uploadDoc)==null?void 0:j.verify_status)==2&&e.jsx("p",{className:"text-red-700",children:t("tranWaterDashboardIndex.rejectedLabel.label")})]})})}),e.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:((g=a==null?void 0:a.uploadDoc)==null?void 0:g.verify_status)!=1&&e.jsx("button",{onClick:()=>ea(a.ownerName,a.docName,a.ownerId,a.docVal,a.refDocName),className:"border px-2 md:px-4 py-1 md:py-2 hover:text-white hover:bg-indigo-500",children:((y=a==null?void 0:a.uploadDoc)==null?void 0:y.verify_status)==2?"Re-Upload":`${t("tranWaterDashboardIndex.uploadLabel.label")}`})})]})}):e.jsx("p",{children:t("tranWaterDashboardIndex.noDataFoundLabel.label")})})]}),e.jsxs("p",{className:" font-semibold text-red-400",children:[" ",e.jsx("span",{className:"text-base",children:" *"})," ",e.jsxs("span",{className:"text-xs",children:[" ",t("tranWaterDashboardIndex.mandatoryLabel.label")]})]})]})})})]})})})]})};export{fa as default};
