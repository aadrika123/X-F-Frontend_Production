import{ae as ue,u as Ma,Y as Va,r as l,a as qa,e as za,A as ve,b as Je,q as Ba,a4 as Ha,s as Ga,w as Qa,j as a,B as Xa,S as Ya,L as Ja,a6 as Ka,c1 as Wa,bA as Za,n as E,aU as Ke,aj as Ta,a9 as La,a8 as et,Q as Se}from"./index-f317ffa6.js";import{p as I}from"./photo-f9d7c0b5.js";import{F as We}from"./index.esm-b550b056.js";import{R as Ze}from"./index.esm-71d5ed0e.js";import at from"./PaymentSuccessPage-965ad139.js";const Te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};ue.setAppElement("#root");function ct(j){var qe,ze,Be,He,Ge;const{id:O,btc:we}=Ma();let d=we=="true"||we==!0;const ce="mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white cursor-pointer",{api_uploadSafDocument:Le,api_listSafDocument2:ea,api_getAppicationFullDetail:aa}=Ta(),{t:s}=Va(),[ne,C]=l.useState(!1),[P,re]=l.useState(null),[tt,ta]=l.useState(""),[pe,Pe]=l.useState(0),[sa,_]=l.useState(!1),[Ue,la]=l.useState(""),[Ie,na]=l.useState(""),[Ce,ke]=l.useState(1),[ra,ia]=l.useState(0),[ma,oa]=l.useState(),[Fe,$e]=l.useState(""),[st,Ee]=l.useState(!0),[ua,ca]=l.useState(!1),[n,pa]=l.useState(),[ie,da]=l.useState(),[de,xa]=l.useState(),[xe,me]=l.useState(null),[lt,he]=l.useState(null),[ha,fa]=l.useState(null),[oe,ga]=l.useState(null),[fe,k]=l.useState([]),[ba,ja]=l.useState(!1),[Da,Oe]=l.useState(!1),[Na,_e]=l.useState(!1),[ya,ge]=l.useState(!1),[va,Sa]=l.useState(!1),[wa,Pa]=l.useState(!1),[Ua,Ia]=l.useState(null),[Ca,ka]=l.useState(null),[Fa,nt]=l.useState({});qa("Upload SAF Documents",!0);const be=l.useRef([]),je=l.useRef([]),U=l.useRef([]),F=l.useRef([]),$a=()=>_e(!0),Ea=()=>{},Ae=za(),Oa=(e,t)=>{Aa(t),me(e),ia(ra+1),_(!0),Oe(!0)},A=()=>{me(null),ca(!1),Oe(!1),_(!1),_e(!1),ke(Ce+1),re(null),be.current=[],U.current=[],je.current=[],F.current=[],console.log("modal m end => ",sa,ua)};console.log(".............data in full details card in bo doc upload.........",j==null?void 0:j.applicationData2),console.log("id in upload........",j==null?void 0:j.id),l.useEffect(()=>{Re()},[pe]),l.useEffect(()=>{C(!0),ve.post(aa,{applicationId:O},Je()).then(function(e){var t,i,r,u;C(!1),console.log("view full details...",(t=e==null?void 0:e.data)==null?void 0:t.data),xa((r=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:r.fullDetailsData),ga((u=e==null?void 0:e.data)==null?void 0:u.data)}).catch(function(e){C(!1),console.log("==2 details by id error...",e)})},[]);const Re=()=>{ye(!1),ge(!0),console.log("before fetch upload doc"),ve.post(`${ea}`,{applicationId:O},Je()).then(e=>{var t,i;console.log("list of doc to upload at pilotworkflowdocumentupload => ",e==null?void 0:e.data),(t=e==null?void 0:e.data)!=null&&t.status?pa((i=e==null?void 0:e.data)==null?void 0:i.data):ye(!0),ge(!1)}).catch(e=>{console.log("data submission error bo doc upload => ",e),ye(!0),_(!1),ge(!1)})};console.log("temp doc => ",oe);const _a=Ba({docId:Ha().required("Select document type"),docUpload:Ga().required("Select document")}),$=Qa({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{console.log("use effect 2"),console.log("values submission => ",e),De()},validationSchema:_a}),Me=(e,t,i)=>{var u,c;let r=e.target.files[0];$e(e.target.name),oa(URL.createObjectURL(e.target.files[0])),re(e.target.files[0]),t=="owner"?U.current[i]=(u=e.target.files[0])==null?void 0:u.name:F.current[i]=(c=e.target.files[0])==null?void 0:c.name,$.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),console.log("use effect change ",$.values.docId,$.values.docUpload),console.log("file on change bo doc upload => ",r,"and doc upload => ",P,"and url => ",ma,"and name => ",r==null?void 0:r.name,"file name => ",Fe),(r==null?void 0:r.name).substring((r==null?void 0:r.name).lastIndexOf(".")+1)=="pdf"?Ee(!1):Ee(!0)};console.log("and doc name => ",Fe);const De=(e,t,i)=>{console.log("use effect 3 => ",U.current[t],`
 index => `,t,`
 module => `,i,e);let r;i==="property"?r=je.current:r=be.current;const u=r.map((p,f)=>f===t?p.value:"");if(console.log("current select document is....",u),u[t]===null||u[t]==="Select"||u[t]===""){D(!0,`Select document type for ${e}`),me(null),he(null);return}if(i=="owner"&&(U.current[t]==null||U.current[t]==""||U.current[t]==null)){D(!0,`Select document to upload for ${e}`),U.current[t]=null;return}if(i=="property"&&(F.current[t]==null||F.current[t]==""||F.current[t]==null)){D(!0,`Select document to upload for ${e}`),F.current[t]=null;return}if(P==null){D(!0,`Select document to upload for ${e}`);return}if(!La(P)){D(!0,`File is too large for ${e}`),re(null);return}console.log("doc ref name...",e);let c=new FormData;console.log("document  => ",P);let b={applicationId:j==null?void 0:j.id,ownerId:xe,docCode:u[t],document:P};c.append("applicationId",O),xe!=null&&c.append("ownerId",xe),c.append("docCode",u[t]),c.append("document",P),c.append("docCategory",ha),console.log("form data bo doc upload => ",b),P!=""?(A(),C(!0),console.log("before fetch doc to upload...",c),ve.post(`${Le}`,c,et()).then(p=>{var f;console.log("data submitted bo doc upload => ",p==null?void 0:p.data),(f=p==null?void 0:p.data)!=null&&f.status?(Se.success("Document Uploaded Successfully !!"),_(!1),ta(""),re(null),Pe(pe+1),$e(""),$.setFieldValue("docUpload",""),Pe(pe+1),me(null),he(null),Re()):(console.log("something went"),D(!0,"Error occurred in uploading document. Please try again later.")),C(!1)}).catch(p=>{D(!0,"Error occurred in uploading document. Please try again later."),console.log("data submission error bo doc upload => ",p),_(!1),C(!1)})):Se.error("Select file")},Ne=(e,t,i)=>{console.log("getting doc name => ",e),e==""&&Se.error("File not uploaded !!!"),e!=""&&(la(e),na(t),$a(),ke(Ce+1),ka(i))},Ve=(e,t)=>{he(e.target.value),fa(t)},Aa=e=>{let t=n==null?void 0:n.ownerDocs[e];console.log("select row....",t),da(t)};console.log("filterred modal data......",ie),console.log("owner doc list ===>......",n==null?void 0:n.ownersDocList);const[Ra,ye]=l.useState(!1),D=(e,t)=>{Ia(t),Pa(e)};if(ya)return a.jsxs(a.Fragment,{children:[a.jsx(Xa,{}),a.jsx("div",{className:"min-h-screen"})]});if(Ra)return a.jsx(Ya,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const N=e=>fe==null?void 0:fe.some(t=>t==e);return a.jsxs(a.Fragment,{children:[ne&&a.jsx(Ja,{}),wa&&a.jsx(Ka,{activateBottomErrorCard:D,errorTitle:Ua}),a.jsx("div",{className:"text-right px-4 pt-2",children:a.jsx(ue,{isOpen:va,style:Te,children:a.jsxs("div",{style:{width:"60vw",height:"60vh"},children:[a.jsx("button",{type:"button",className:"text-white bg-red-500 float-right w-6 h-6 rounded-full",onClick:()=>Sa(!1),children:"X"}),ba?a.jsx(at,{}):a.jsx(a.Fragment,{children:a.jsx(Wa,{setpaymentStatus:ja,id:O,applicationDetails:Fa})})]})})}),a.jsxs("div",{className:"mx-auto w-full",children:[(n==null?void 0:n.docUploadStatus)==1&&d!=!0&&a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"flex-1 items-center text-yellow-600",children:[a.jsx(Za,{className:"inline mr-2"}),s("mainSafDocumentUploadPage.allDocumentsUploaded.label")]}),a.jsxs("div",{className:"absolute right-4  space-x-4",children:[a.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 shadow-md hover:bg-blue-800",onClick:()=>Ae("/home"),children:"Home"}),a.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 shadow-md hover:bg-blue-800",onClick:()=>Ae(`/viewDemand/${O}`),children:"View Demand"})]}),(oe==null?void 0:oe.payment_status)!=1&&a.jsx("div",{className:"flex-1"})]}),d==!0&&a.jsxs("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:[" ",s("mainSafDocumentUploadPage.redirectedBackToCitizen.label"),"."]}),a.jsx("div",{className:"text-gray-700 py-6 ",children:a.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4 mt-4",children:(ze=(qe=de==null?void 0:de.cardArray)==null?void 0:qe.data)==null?void 0:ze.map(e=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{className:"px-4 py-2 font-semibold",children:[E(e==null?void 0:e.displayString)," : "]}),a.jsx("div",{className:"px-4 py-2",children:E(e==null?void 0:e.value)})]}))})}),a.jsxs("p",{className:"text-sm",children:[s("mainSafDocumentUploadPage.note.label"),"."]}),a.jsxs("div",{className:"bg-white",children:[(n==null?void 0:n.ownerDocs)&&a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto mt-4 py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",s("mainSafDocumentUploadPage.ownerDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantImage.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.mobile.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Be=n==null?void 0:n.ownerDocs)==null?void 0:Be.map((e,t)=>{var i,r,u,c,b,p,f,y,v,S;return a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center justify-center",children:[((i=e==null?void 0:e.ownerDetails)==null?void 0:i.uploadedDoc)!=""&&a.jsx("div",{className:"text-center cursor-pointer",onClick:()=>{var g,w;return Ne(`${(g=e==null?void 0:e.ownerDetails)==null?void 0:g.uploadedDoc}`,"jpg",(w=e==null?void 0:e.ownerDetails)==null?void 0:w.docId)},children:a.jsx("img",{src:N((r=e==null?void 0:e.ownerDetails)==null?void 0:r.docId)?I:`${(u=e==null?void 0:e.ownerDetails)==null?void 0:u.uploadedDoc}`,alt:"",className:"md:w-[3vw] w-[5vw]",srcset:""})}),((c=e==null?void 0:e.ownerDetails)==null?void 0:c.uploadedDoc)==""&&a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]})]})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:E((b=e==null?void 0:e.ownerDetails)==null?void 0:b.name)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:E((p=e==null?void 0:e.ownerDetails)==null?void 0:p.mobile)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsxs("span",{className:`font-medium ${((f=e==null?void 0:e.ownerDetails)==null?void 0:f.reqDocCount)===((y=e==null?void 0:e.ownerDetails)==null?void 0:y.uploadedDocCount)&&!d?"text-green-400":"text-red-500"}`,children:[" ",s("mainSafDocumentUploadPage.uploaded.label")," ",E((v=e==null?void 0:e.ownerDetails)==null?void 0:v.uploadedDocCount)," of ",E((S=e==null?void 0:e.ownerDetails)==null?void 0:S.reqDocCount)]})})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:!ne&&a.jsx("button",{onClick:()=>{var g;return Oa((g=e==null?void 0:e.ownerDetails)==null?void 0:g.ownerId,t)},type:"button",className:ce,children:s("mainSafDocumentUploadPage.view.label")})})})})]})})})]})})]})}),a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:a.jsxs("div",{className:"w-full ",children:[a.jsxs("h1",{className:"text-xs text-gray-600",children:[" ",s("mainSafDocumentUploadPage.propertyDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.upload.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(He=n==null?void 0:n.listDocs)==null?void 0:He.map((e,t)=>{var i,r,u,c,b,p,f,y,v,S,g,w,R,M,V,q,z,B,H,G,Q,X,Y,J,K,W,Z,T,L,ee,ae,m,x,te;return a.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:$.handleSubmit,onChange:$.handleChange,children:[a.jsx("td",{className:"py-3 px-6 font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Ke,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",value:e==null?void 0:e.docName,children:[e==null?void 0:e.docName," ",(e==null?void 0:e.docType)=="R"&&a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:o=>je.current[t]=o,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:o=>Ve(o,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",selected:!0,children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((o,h)=>a.jsx("option",{value:o==null?void 0:o.documentCode,children:o==null?void 0:o.docVal}))]})})})}),a.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var o,h,se,le,Qe,Xe,Ye;return Ne(`${(o=e==null?void 0:e.uploadedDoc)==null?void 0:o.docPath}`,(Xe=(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.docPath)==null?void 0:Xe.split(".")[((Qe=(le=(se=e==null?void 0:e.uploadedDoc)==null?void 0:se.docPath)==null?void 0:le.split("."))==null?void 0:Qe.length)-1],(Ye=e==null?void 0:e.uploadedDoc)==null?void 0:Ye.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:p.split(".")[((b=(c=(u=e==null?void 0:e.uploadedDoc)==null?void 0:u.docPath)==null?void 0:c.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(We,{})}),((g=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:g.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>k(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((w=e==null?void 0:e.uploadedDoc)==null?void 0:w.uploadedDocId)?I:`${(R=e==null?void 0:e.uploadedDoc)==null?void 0:R.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((B=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:B.split(".")[((z=(q=(V=e==null?void 0:e.uploadedDoc)==null?void 0:V.docPath)==null?void 0:q.split("."))==null?void 0:z.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>k(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((H=e==null?void 0:e.uploadedDoc)==null?void 0:H.uploadedDocId)?I:`${(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((K=(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath)==null?void 0:K.split(".")[((J=(Y=(X=e==null?void 0:e.uploadedDoc)==null?void 0:X.docPath)==null?void 0:Y.split("."))==null?void 0:J.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>k(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.uploadedDocId)?I:`${(Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsxs("td",{className:"py-3 px-6 text-center font-semibold",children:[((T=e==null?void 0:e.uploadedDoc)==null?void 0:T.documentCode)=="PHOTOGRAPH"&&a.jsx("p",{className:"whitespace-no-wrap"}),(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.pending.label")]})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.verifyStatus)==1&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.verified.label")]})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.rejected.label")]})})]})]}),a.jsx("td",{className:"py-3 px-6 text-center",children:((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.remarks)==""||((m=e==null?void 0:e.uploadedDoc)==null?void 0:m.remarks)==null?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.remarks}),a.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsx("div",{className:"font-semibold text-sm",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:o=>Me(o,"property",t),className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((te=e==null?void 0:e.uploadedDoc)==null?void 0:te.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>De(e==null?void 0:e.docName,t,"property"),type:"submit",className:ce,children:s("mainSafDocumentUploadPage.upload.label")})})]})}):a.jsxs("div",{className:"font-semibold text-sm text-green-500 text-center",children:[" ",s("mainSafDocumentUploadPage.uploaded.label")]})})]})})})]})})]})}),a.jsxs("div",{className:"col-span-5 grid grid-cols-3 px-4",children:[a.jsx("div",{className:"md:pl-0"}),a.jsx("div",{className:"md:px-4 text-center"}),a.jsx("div",{className:"md:pl-10 text-right"})]})]})]}),a.jsx(ue,{isOpen:Da,onRequestClose:A,style:Te,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50 animate__animated animate__zoomIn animate__faster",children:[a.jsx("div",{className:"absolute top-5 right-5 bg-red-200 hover:bg-red-300 rounded-full p-2 cursor-pointer text-xs sm:text-base",onClick:A,children:a.jsx(Ze,{})}),a.jsx("div",{className:"flex md:pl-4 bg-white font-sans overflow-x-auto mt-6 sm:w-full w-[100vw] sm:text-base text-sm",children:a.jsxs("div",{className:"w-full lg:w-4/6",children:[a.jsxs("div",{className:"font-semibold w-full flex",children:[a.jsx("div",{className:"flex-1"}),a.jsx("div",{className:"flex-1 text-center",children:a.jsxs("span",{className:"float-none",children:[" ",s("mainSafDocumentUploadPage.uploadOwnerDocuments.label")]})})]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 font-light bg-white text-xs sm:text-sm",children:(Ge=ie==null?void 0:ie.documents)==null?void 0:Ge.map((e,t)=>{var i,r,u,c,b,p,f,y,v,S,g,w,R,M,V,q,z,B,H,G,Q,X,Y,J,K,W,Z,T,L,ee,ae;return a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Ke,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:m=>be.current[t]=m,className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:m=>Ve(m,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((m,x)=>a.jsx("option",{value:m==null?void 0:m.documentCode,children:m==null?void 0:m.docVal}))]})})})})}),a.jsx("td",{className:"py-3 px-6 text-center",children:(e==null?void 0:e.uploadedDoc)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var m,x,te,o,h,se,le;return Ne(`${(m=e==null?void 0:e.uploadedDoc)==null?void 0:m.docPath}`,(se=(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.docPath)==null?void 0:se.split(".")[((h=(o=(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.docPath)==null?void 0:o.split("."))==null?void 0:h.length)-1],(le=e==null?void 0:e.uploadedDoc)==null?void 0:le.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:p.split(".")[((b=(c=(u=e==null?void 0:e.uploadedDoc)==null?void 0:u.docPath)==null?void 0:c.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(We,{})}),((g=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:g.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>k(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:N((w=e==null?void 0:e.uploadedDoc)==null?void 0:w.uploadedDocId)?I:`${(R=e==null?void 0:e.uploadedDoc)==null?void 0:R.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((B=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:B.split(".")[((z=(q=(V=e==null?void 0:e.uploadedDoc)==null?void 0:V.docPath)==null?void 0:q.split("."))==null?void 0:z.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>k(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:N((H=e==null?void 0:e.uploadedDoc)==null?void 0:H.uploadedDocId)?I:`${(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((K=(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath)==null?void 0:K.split(".")[((J=(Y=(X=e==null?void 0:e.uploadedDoc)==null?void 0:X.docPath)==null?void 0:Y.split("."))==null?void 0:J.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>k(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:N((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.uploadedDocId)?I:`${(Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]}):a.jsx(a.Fragment,{children:(e==null?void 0:e.docName)=="Photograph"?"":a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((T=e==null?void 0:e.uploadedDoc)==null?void 0:T.verifyStatus)==0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.pending.label")})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==1&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.verified.label")})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.rejected.label")})})]})})}),a.jsxs("td",{className:"py-3 px-6",children:[((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):(ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.remarks,(e==null?void 0:e.uploadedDoc)==""&&a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")})]}),a.jsx("td",{className:"py-3 px-6",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsxs("div",{className:"font-semibold text-sm",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:t==0?".png,.jpg,.jpeg":".pdf,.png,.jpg,.jpeg",type:"file",onChange:m=>Me(m,"owner",t),className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36"})}),a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>De(e==null?void 0:e.docName,t,"owner"),type:"button",className:ce,children:s("mainSafDocumentUploadPage.upload.label")})})]}):a.jsx("div",{className:"font-semibold text-sm text-green-500 text-center",children:s("mainSafDocumentUploadPage.uploaded.label")})})]})})})})]})})]})})]})}),a.jsx(ue,{isOpen:Na,onAfterOpen:Ea,onRequestClose:A,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:a.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[a.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:A,children:a.jsx(Ze,{})}),N(Ca)?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[a.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:["Error",s("mainSafDocumentUploadPage.error.label")]}),a.jsx("div",{className:"pl-4",children:s("mainSafDocumentUploadPage.documentNotVisible.label")})]})}):a.jsxs(a.Fragment,{children:[Ie=="pdf"&&a.jsx(a.Fragment,{children:a.jsx("iframe",{className:"w-full h-full",src:Ue,frameborder:"0"})}),Ie!="pdf"&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:a.jsx("img",{src:Ue,alt:"",srcset:"",className:""})})})]})]})})]})}export{ct as default};
