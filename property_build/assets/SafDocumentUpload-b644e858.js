import{a8 as Se,u as $a,X as Ea,r as l,a as Oa,e as _a,A as ye,b as We,q as Aa,a1 as Ra,s as Ma,w as Va,j as a,B as Ba,S as qa,K as za,be as Ha,n as C,ad as Ga,a3 as Ka,Q as ve}from"./index-39eb2b0e.js";import{f as Ye}from"./folders-c40af08a.js";import{p as k}from"./photo-f9d7c0b5.js";import{A as Qa}from"./ApiHeader2-b363f7b8.js";import{F as Ze}from"./index.esm-e5c6b47b.js";import{B as Xa}from"./BottomErrorCard-e59a9112.js";import{R as Te}from"./index.esm-3117dda4.js";const Ja={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};Se.setAppElement("#root");function nt(j){var qe,ze,He,Ge,Ke;const{id:le,btc:we}=$a();let d=we=="true"||we==!0;const oe="mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white cursor-pointer",{api_uploadSafDocument:Le,api_listSafDocument2:ea,api_getAppicationFullDetail:aa}=Ga(),{t:s}=Ea(),[ne,F]=l.useState(!1),[U,re]=l.useState(null),[Wa,ta]=l.useState(""),[ce,Pe]=l.useState(0),[sa,_]=l.useState(!1),[Ue,la]=l.useState(""),[Ie,na]=l.useState(""),[Ce,ke]=l.useState(1),[ra,ia]=l.useState(0),[ma,oa]=l.useState(),[Fe,$e]=l.useState(""),[Ya,Ee]=l.useState(!0),[Oe,ca]=l.useState(!1),[n,ua]=l.useState(),[ie,pa]=l.useState(),[ue,da]=l.useState(),[pe,me]=l.useState(null),[Za,de]=l.useState(null),[xa,ha]=l.useState(null),[xe,fa]=l.useState(null),[he,$]=l.useState([]),[ga,_e]=l.useState(!1),[ba,Ae]=l.useState(!1),[ja,fe]=l.useState(!1),[Na,Da]=l.useState(!1),[ya,va]=l.useState(null),[Sa,wa]=l.useState(null);Oa("Upload SAF Documents",!0);const ge=l.useRef([]),be=l.useRef([]),I=l.useRef([]),E=l.useRef([]),Pa=()=>Ae(!0),Ua=()=>{},Re=_a(),Ia=(e,t)=>{ka(t),me(e),ia(ra+1),_(!0),_e(!0)},A=()=>{me(null),ca(!1),_e(!1),_(!1),Ae(!1),ke(Ce+1),re(null),ge.current=[],I.current=[],be.current=[],E.current=[],console.log("modal m end => ",sa,Oe)};console.log(".............data in full details card in bo doc upload.........",j==null?void 0:j.applicationData2),console.log("id in upload........",j==null?void 0:j.id),l.useEffect(()=>{Me()},[ce]),l.useEffect(()=>{F(!0),ye.post(aa,{applicationId:le},We()).then(function(e){var t,i,r,c;F(!1),console.log("view full details...",(t=e==null?void 0:e.data)==null?void 0:t.data),da((r=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:r.fullDetailsData),fa((c=e==null?void 0:e.data)==null?void 0:c.data)}).catch(function(e){F(!1),console.log("==2 details by id error...",e)})},[]);const Me=()=>{De(!1),fe(!0),console.log("before fetch upload doc"),ye.post(`${ea}`,{applicationId:le},We()).then(e=>{var t,i;console.log("list of doc to upload at pilotworkflowdocumentupload => ",e==null?void 0:e.data),(t=e==null?void 0:e.data)!=null&&t.status?ua((i=e==null?void 0:e.data)==null?void 0:i.data):De(!0),fe(!1)}).catch(e=>{console.log("data submission error bo doc upload => ",e),De(!0),_(!1),fe(!1)})};console.log("temp doc => ",Oe);const Ca=Aa({docId:Ra().required("Select document type"),docUpload:Ma().required("Select document")}),O=Va({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{console.log("use effect 2"),console.log("values submission => ",e),je()},validationSchema:Ca}),Ve=(e,t,i)=>{var c,u;let r=e.target.files[0];$e(e.target.name),oa(URL.createObjectURL(e.target.files[0])),re(e.target.files[0]),t=="owner"?I.current[i]=(c=e.target.files[0])==null?void 0:c.name:E.current[i]=(u=e.target.files[0])==null?void 0:u.name,O.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),console.log("use effect change ",O.values.docId,O.values.docUpload),console.log("file on change bo doc upload => ",r,"and doc upload => ",U,"and url => ",ma,"and name => ",r==null?void 0:r.name,"file name => ",Fe),(r==null?void 0:r.name).substring((r==null?void 0:r.name).lastIndexOf(".")+1)=="pdf"?Ee(!1):Ee(!0)};console.log("and doc name => ",Fe);const je=(e,t,i)=>{console.log("use effect 3 => ",I.current[t],`
 index => `,t,`
 module => `,i,e);let r;i==="property"?r=be.current:r=ge.current;const c=r.map((p,f)=>f===t?p.value:"");if(console.log("current select document is....",c),c[t]===null||c[t]==="Select"||c[t]===""){N(!0,`Select document type for ${e}`),me(null),de(null);return}if(i=="owner"&&(I.current[t]==null||I.current[t]==""||I.current[t]==null)){N(!0,`Select document to upload for ${e}`),I.current[t]=null;return}if(i=="property"&&(E.current[t]==null||E.current[t]==""||E.current[t]==null)){N(!0,`Select document to upload for ${e}`),E.current[t]=null;return}if(U==null){N(!0,`Select document to upload for ${e}`);return}if(!Ka(U)){N(!0,`File is too large for ${e}`),re(null);return}console.log("doc ref name...",e);let u=new FormData;console.log("document  => ",U);let b={applicationId:j==null?void 0:j.id,ownerId:pe,docCode:c[t],document:U};u.append("applicationId",le),pe!=null&&u.append("ownerId",pe),u.append("docCode",c[t]),u.append("document",U),u.append("docCategory",xa),console.log("form data bo doc upload => ",b),U!=""?(A(),F(!0),console.log("before fetch doc to upload...",u),ye.post(`${Le}`,u,Qa()).then(p=>{var f;console.log("data submitted bo doc upload => ",p==null?void 0:p.data),(f=p==null?void 0:p.data)!=null&&f.status?(ve.success("Document Uploaded Successfully !!"),_(!1),ta(""),re(null),Pe(ce+1),$e(""),O.setFieldValue("docUpload",""),Pe(ce+1),me(null),de(null),Me()):(console.log("something went"),N(!0,"Error occurred in uploading document. Please try again later.")),F(!1)}).catch(p=>{N(!0,"Error occurred in uploading document. Please try again later."),console.log("data submission error bo doc upload => ",p),_(!1),F(!1)})):ve.error("Select file")},Ne=(e,t,i)=>{console.log("getting doc name => ",e),e==""&&ve.error("File not uploaded !!!"),e!=""&&(la(e),na(t),Pa(),ke(Ce+1),wa(i))},Be=(e,t)=>{de(e.target.value),ha(t)},ka=e=>{let t=n==null?void 0:n.ownerDocs[e];console.log("select row....",t),pa(t)};console.log("filterred modal data......",ie),console.log("owner doc list ===>......",n==null?void 0:n.ownersDocList);const[Fa,De]=l.useState(!1),N=(e,t)=>{va(t),Da(e)};if(ja)return a.jsxs(a.Fragment,{children:[a.jsx(Ba,{}),a.jsx("div",{className:"min-h-screen"})]});if(Fa)return a.jsx(qa,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const D=e=>he==null?void 0:he.some(t=>t==e);return a.jsxs(a.Fragment,{children:[ne&&a.jsx(za,{}),Na&&a.jsx(Xa,{activateBottomErrorCard:N,errorTitle:ya}),a.jsx("div",{className:""}),a.jsxs("div",{className:"mx-auto w-full",children:[(n==null?void 0:n.docUploadStatus)==1&&d!=!0&&a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"flex-1 items-center text-yellow-600",children:[a.jsx(Ha,{className:"inline mr-2"}),s("mainSafDocumentUploadPage.allDocumentsUploaded.label")]}),a.jsxs("div",{className:"absolute right-4  space-x-4",children:[a.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 shadow-md hover:bg-blue-800",onClick:()=>Re("/home"),children:"Home"}),a.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 shadow-md hover:bg-blue-800",onClick:()=>Re(`/viewDemand/${le}`),children:"View Demand"})]}),(xe==null?void 0:xe.payment_status)!=1&&a.jsx("div",{className:"flex-1"})]}),d==!0&&a.jsxs("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:[" ",s("mainSafDocumentUploadPage.redirectedBackToCitizen.label"),"."]}),a.jsx("div",{className:"text-gray-700 py-6 ",children:a.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4 mt-4",children:(ze=(qe=ue==null?void 0:ue.cardArray)==null?void 0:qe.data)==null?void 0:ze.map(e=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{className:"px-4 py-2 font-semibold",children:[C(e==null?void 0:e.displayString)," : "]}),a.jsx("div",{className:"px-4 py-2",children:C(e==null?void 0:e.value)})]}))})}),a.jsxs("p",{className:"text-sm",children:[s("mainSafDocumentUploadPage.note.label"),"."]}),a.jsxs("div",{className:"bg-white",children:[(n==null?void 0:n.ownerDocs)&&a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto mt-4 py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",s("mainSafDocumentUploadPage.ownerDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantImage.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.guardianName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.mobile.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(He=n==null?void 0:n.ownerDocs)==null?void 0:He.map((e,t)=>{var i,r,c,u,b,p,f,y,v,S,w;return a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center justify-center",children:[((i=e==null?void 0:e.ownerDetails)==null?void 0:i.uploadedDoc)!=""&&a.jsx("div",{className:"text-center cursor-pointer",onClick:()=>{var g,P;return Ne(`${(g=e==null?void 0:e.ownerDetails)==null?void 0:g.uploadedDoc}`,"jpg",(P=e==null?void 0:e.ownerDetails)==null?void 0:P.docId)},children:a.jsx("img",{src:D((r=e==null?void 0:e.ownerDetails)==null?void 0:r.docId)?k:`${(c=e==null?void 0:e.ownerDetails)==null?void 0:c.uploadedDoc}`,alt:"",className:"md:w-[3vw] w-[5vw]",srcset:""})}),((u=e==null?void 0:e.ownerDetails)==null?void 0:u.uploadedDoc)==""&&a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]})]})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((b=e==null?void 0:e.ownerDetails)==null?void 0:b.name)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((p=e==null?void 0:e.ownerDetails)==null?void 0:p.guardian)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((f=e==null?void 0:e.ownerDetails)==null?void 0:f.mobile)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsxs("span",{className:`font-medium ${((y=e==null?void 0:e.ownerDetails)==null?void 0:y.reqDocCount)===((v=e==null?void 0:e.ownerDetails)==null?void 0:v.uploadedDocCount)&&!d?"text-green-400":"text-red-500"}`,children:[" ",s("mainSafDocumentUploadPage.uploaded.label")," ",C((S=e==null?void 0:e.ownerDetails)==null?void 0:S.uploadedDocCount)," of ",C((w=e==null?void 0:e.ownerDetails)==null?void 0:w.reqDocCount)]})})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:!ne&&a.jsx("button",{onClick:()=>{var g;return Ia((g=e==null?void 0:e.ownerDetails)==null?void 0:g.ownerId,t)},type:"button",className:oe,children:s("mainSafDocumentUploadPage.view.label")})})})})]})})})]})})]})}),a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:a.jsxs("div",{className:"w-full ",children:[a.jsxs("h1",{className:"text-xs text-gray-600",children:[" ",s("mainSafDocumentUploadPage.propertyDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.upload.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Ge=n==null?void 0:n.listDocs)==null?void 0:Ge.map((e,t)=>{var i,r,c,u,b,p,f,y,v,S,w,g,P,R,M,V,B,q,z,H,G,K,Q,X,J,W,Y,Z,T,L,ee,m,x,ae;return a.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:O.handleSubmit,onChange:O.handleChange,children:[a.jsx("td",{className:"py-3 px-6 font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Ye,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",value:e==null?void 0:e.docName,children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:o=>be.current[t]=o,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:o=>Be(o,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",selected:!0,children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((o,h)=>a.jsx("option",{value:o==null?void 0:o.documentCode,children:o==null?void 0:o.docVal}))]})})})}),a.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var o,h,te,se,Qe,Xe,Je;return Ne(`${(o=e==null?void 0:e.uploadedDoc)==null?void 0:o.docPath}`,(Xe=(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.docPath)==null?void 0:Xe.split(".")[((Qe=(se=(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.docPath)==null?void 0:se.split("."))==null?void 0:Qe.length)-1],(Je=e==null?void 0:e.uploadedDoc)==null?void 0:Je.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:p.split(".")[((b=(u=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:u.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(Ze,{})}),((w=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:w.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((g=e==null?void 0:e.uploadedDoc)==null?void 0:g.uploadedDocId)?k:`${(P=e==null?void 0:e.uploadedDoc)==null?void 0:P.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((q=(R=e==null?void 0:e.uploadedDoc)==null?void 0:R.docPath)==null?void 0:q.split(".")[((B=(V=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:V.split("."))==null?void 0:B.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((z=e==null?void 0:e.uploadedDoc)==null?void 0:z.uploadedDocId)?k:`${(H=e==null?void 0:e.uploadedDoc)==null?void 0:H.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((J=(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath)==null?void 0:J.split(".")[((X=(Q=(K=e==null?void 0:e.uploadedDoc)==null?void 0:K.docPath)==null?void 0:Q.split("."))==null?void 0:X.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.uploadedDocId)?k:`${(Y=e==null?void 0:e.uploadedDoc)==null?void 0:Y.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsxs("td",{className:"py-3 px-6 text-center font-semibold",children:[((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.documentCode)=="PHOTOGRAPH"&&a.jsx("p",{className:"whitespace-no-wrap"}),(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((T=e==null?void 0:e.uploadedDoc)==null?void 0:T.verifyStatus)==0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.pending.label")]})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==1&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.verified.label")]})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.rejected.label")]})})]})]}),a.jsx("td",{className:"py-3 px-6 text-center",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks)==""||((m=e==null?void 0:e.uploadedDoc)==null?void 0:m.remarks)==null?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.remarks}),a.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsx("div",{className:"font-semibold text-sm",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:o=>Ve(o,"property",t),className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>je(e==null?void 0:e.docName,t,"property"),type:"submit",className:oe,children:s("mainSafDocumentUploadPage.upload.label")})})]})}):a.jsxs("div",{className:"font-semibold text-sm text-green-500 text-center",children:[" ",s("mainSafDocumentUploadPage.uploaded.label")]})})]})})})]})})]})}),a.jsxs("div",{className:"col-span-5 grid grid-cols-3 px-4",children:[a.jsx("div",{className:"md:pl-0"}),a.jsx("div",{className:"md:px-4 text-center"}),a.jsx("div",{className:"md:pl-10 text-right"})]})]})]}),a.jsx(Se,{isOpen:ga,onRequestClose:A,style:Ja,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50 animate__animated animate__zoomIn animate__faster",children:[a.jsx("div",{className:"absolute top-5 right-5 bg-red-200 hover:bg-red-300 rounded-full p-2 cursor-pointer text-xs sm:text-base",onClick:A,children:a.jsx(Te,{})}),a.jsx("div",{className:"flex md:pl-4 bg-white font-sans overflow-x-auto mt-6 sm:w-full w-[100vw] sm:text-base text-sm",children:a.jsxs("div",{className:"w-full lg:w-4/6",children:[a.jsxs("div",{className:"font-semibold w-full flex",children:[a.jsx("div",{className:"flex-1"}),a.jsx("div",{className:"flex-1 text-center",children:a.jsxs("span",{className:"float-none",children:[" ",s("mainSafDocumentUploadPage.uploadOwnerDocuments.label")]})})]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 font-light bg-white text-xs sm:text-sm",children:(Ke=ie==null?void 0:ie.documents)==null?void 0:Ke.map((e,t)=>{var i,r,c,u,b,p,f,y,v,S,w,g,P,R,M,V,B,q,z,H,G,K,Q,X,J,W,Y,Z,T,L,ee;return a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Ye,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:m=>ge.current[t]=m,className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:m=>Be(m,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((m,x)=>a.jsx("option",{value:m==null?void 0:m.documentCode,children:m==null?void 0:m.docVal}))]})})})})}),a.jsx("td",{className:"py-3 px-6 text-center",children:(e==null?void 0:e.uploadedDoc)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var m,x,ae,o,h,te,se;return Ne(`${(m=e==null?void 0:e.uploadedDoc)==null?void 0:m.docPath}`,(te=(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.docPath)==null?void 0:te.split(".")[((h=(o=(ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.docPath)==null?void 0:o.split("."))==null?void 0:h.length)-1],(se=e==null?void 0:e.uploadedDoc)==null?void 0:se.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:p.split(".")[((b=(u=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:u.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(Ze,{})}),((w=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:w.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:D((g=e==null?void 0:e.uploadedDoc)==null?void 0:g.uploadedDocId)?k:`${(P=e==null?void 0:e.uploadedDoc)==null?void 0:P.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((q=(R=e==null?void 0:e.uploadedDoc)==null?void 0:R.docPath)==null?void 0:q.split(".")[((B=(V=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:V.split("."))==null?void 0:B.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:D((z=e==null?void 0:e.uploadedDoc)==null?void 0:z.uploadedDocId)?k:`${(H=e==null?void 0:e.uploadedDoc)==null?void 0:H.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((J=(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath)==null?void 0:J.split(".")[((X=(Q=(K=e==null?void 0:e.uploadedDoc)==null?void 0:K.docPath)==null?void 0:Q.split("."))==null?void 0:X.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:D((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.uploadedDocId)?k:`${(Y=e==null?void 0:e.uploadedDoc)==null?void 0:Y.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]}):a.jsx(a.Fragment,{children:(e==null?void 0:e.docName)=="Photograph"?"":a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.verifyStatus)==0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.pending.label")})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((T=e==null?void 0:e.uploadedDoc)==null?void 0:T.verifyStatus)==1&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.verified.label")})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.rejected.label")})})]})})}),a.jsxs("td",{className:"py-3 px-6",children:[((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.remarks)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):(ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks,(e==null?void 0:e.uploadedDoc)==""&&a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")})]}),a.jsx("td",{className:"py-3 px-6",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsxs("div",{className:"font-semibold text-sm",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:t==0?".png,.jpg,.jpeg":".pdf,.png,.jpg,.jpeg",type:"file",onChange:m=>Ve(m,"owner",t),className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36"})}),a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>je(e==null?void 0:e.docName,t,"owner"),type:"button",className:oe,children:s("mainSafDocumentUploadPage.upload.label")})})]}):a.jsx("div",{className:"font-semibold text-sm text-green-500 text-center",children:s("mainSafDocumentUploadPage.uploaded.label")})})]})})})})]})})]})})]})}),a.jsx(Se,{isOpen:ba,onAfterOpen:Ua,onRequestClose:A,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:a.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[a.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:A,children:a.jsx(Te,{})}),D(Sa)?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[a.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:["Error",s("mainSafDocumentUploadPage.error.label")]}),a.jsx("div",{className:"pl-4",children:s("mainSafDocumentUploadPage.documentNotVisible.label")})]})}):a.jsxs(a.Fragment,{children:[Ie=="pdf"&&a.jsx(a.Fragment,{children:a.jsx("iframe",{className:"w-full h-full",src:Ue,frameborder:"0"})}),Ie!="pdf"&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:a.jsx("img",{src:Ue,alt:"",srcset:"",className:""})})})]})]})})]})}export{nt as default};
