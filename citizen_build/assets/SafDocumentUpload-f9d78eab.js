import{M as Ue,u as Aa,v as Ma,r as l,a as za,A as pe,w as we,c as qa,Y as Va,d as Ba,b as Ha,j as a,ag as Ga,S as Qa,p as Ya,q as Ja,a2 as $,b$ as U,E as Pe,_ as Te,$ as ea,c0 as aa,f as Ka,a0 as Wa,a1 as Xa,Q as ie}from"./index-12835ad9.js";const Za={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};Ue.setAppElement("#root");function st(j){var He,Ge,Qe,Ye,Je;const{id:oe,btc:Ie}=Aa();let E=Ie=="true"||Ie==!0;const{api_uploadSafDocument:ta,api_listSafDocument:sa,api_getAppicationFullDetail:la,api_sendToOfficer:na}=Ka(),{t:s}=Ma(),[ce,I]=l.useState(!1),[w,me]=l.useState(null),[La,ra]=l.useState(""),[xe,Ce]=l.useState(0),[ia,O]=l.useState(!1),[ke,oa]=l.useState(""),[Fe,ca]=l.useState(""),[$e,Ee]=l.useState(1),[ma,da]=l.useState(0),[ua,pa]=l.useState(),[Oe,_e]=l.useState(""),[Ta,Re]=l.useState(!0),[Ae,xa]=l.useState(!1),[n,ha]=l.useState(),[de,fa]=l.useState(),[he,ga]=l.useState(),[fe,ue]=l.useState(null),[et,ge]=l.useState(null),[ja,ba]=l.useState(null),[at,Na]=l.useState(null),[je,C]=l.useState([]),[Da,Me]=l.useState(!1),[ya,ze]=l.useState(!1),[va,_]=l.useState(!1),[Sa,wa]=l.useState(!1),[Pa,Ua]=l.useState(null),[Ia,Ca]=l.useState(null),be=l.useRef([]),Ne=l.useRef([]),P=l.useRef([]),k=l.useRef([]),ka=()=>ze(!0),Fa=()=>{},$a=za(),Ea=(e,t)=>{_a(t),ue(e),da(ma+1),O(!0),Me(!0)},R=()=>{ue(null),xa(!1),Me(!1),O(!1),ze(!1),Ee($e+1),me(null),be.current=[],P.current=[],Ne.current=[],k.current=[],console.log("modal m end => ",ia,Ae)};console.log(".............data in full details card in bo doc upload.........",j==null?void 0:j.applicationData2),console.log("id in upload........",j==null?void 0:j.id),l.useEffect(()=>{De()},[xe]),l.useEffect(()=>{I(!0),pe.post(la,{applicationId:oe},we()).then(function(e){var t,r,i,c;I(!1),console.log("view full details...",(t=e==null?void 0:e.data)==null?void 0:t.data),ga((i=(r=e==null?void 0:e.data)==null?void 0:r.data)==null?void 0:i.fullDetailsData),Na((c=e==null?void 0:e.data)==null?void 0:c.data)}).catch(function(e){I(!1),console.log("==2 details by id error...",e)})},[]);const De=()=>{Se(!1),_(!0),console.log("before fetch upload doc"),pe.post(`${sa}`,{applicationId:oe},we()).then(e=>{var t,r;console.log("list of doc to upload at pilotworkflowdocumentupload => ",e==null?void 0:e.data),(t=e==null?void 0:e.data)!=null&&t.status?ha((r=e==null?void 0:e.data)==null?void 0:r.data):Se(!0),_(!1)}).catch(e=>{console.log("data submission error bo doc upload => ",e),Se(!0),O(!1),_(!1)})};console.log("temp doc => ",Ae);const Oa=qa({docId:Va().required("Select document type"),docUpload:Ba().required("Select document")}),F=Ha({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{console.log("use effect 2"),console.log("values submission => ",e),ye()},validationSchema:Oa}),qe=(e,t,r)=>{var c,d;let i=e.target.files[0];_e(e.target.name),pa(URL.createObjectURL(e.target.files[0])),me(e.target.files[0]),t=="owner"?P.current[r]=(c=e.target.files[0])==null?void 0:c.name:k.current[r]=(d=e.target.files[0])==null?void 0:d.name,F.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),console.log("use effect change ",F.values.docId,F.values.docUpload),console.log("file on change bo doc upload => ",i,"and doc upload => ",w,"and url => ",ua,"and name => ",i==null?void 0:i.name,"file name => ",Oe),(i==null?void 0:i.name).substring((i==null?void 0:i.name).lastIndexOf(".")+1)=="pdf"?Re(!1):Re(!0)};console.log("and doc name => ",Oe);const ye=(e,t,r)=>{console.log("use effect 3 => ",P.current[t],`
 index => `,t,`
 module => `,r,e);let i;r==="property"?i=Ne.current:i=be.current;const c=i.map((u,x)=>x===t?u.value:"");if(console.log("current select document is....",c),c[t]===null||c[t]==="Select"||c[t]===""){b(!0,`Select document type for ${e}`),ue(null),ge(null);return}if(r=="owner"&&(P.current[t]==null||P.current[t]==""||P.current[t]==null)){b(!0,`Select document to upload for ${e}`),P.current[t]=null;return}if(r=="property"&&(k.current[t]==null||k.current[t]==""||k.current[t]==null)){b(!0,`Select document to upload for ${e}`),k.current[t]=null;return}if(w==null){b(!0,`Select document to upload for ${e}`);return}if(!Wa(w)){b(!0,`File is too large for ${e}`),me(null);return}console.log("doc ref name...",e);let d=new FormData;console.log("document  => ",w);let g={applicationId:j==null?void 0:j.id,ownerId:fe,docCode:c[t],document:w};d.append("applicationId",oe),fe!=null&&d.append("ownerId",fe),d.append("docCode",c[t]),d.append("document",w),d.append("docCategory",ja),console.log("form data bo doc upload => ",g),w!=""?(R(),I(!0),console.log("before fetch doc to upload...",d),pe.post(`${ta}`,d,Xa()).then(u=>{var x;console.log("data submitted bo doc upload => ",u==null?void 0:u.data),(x=u==null?void 0:u.data)!=null&&x.status?(ie.success("Document Uploaded Successfully !!"),O(!1),ra(""),me(null),Ce(xe+1),_e(""),F.setFieldValue("docUpload",""),Ce(xe+1),ue(null),ge(null),De()):(console.log("something went"),b(!0,"Error occurred in uploading document. Please try again later.")),I(!1)}).catch(u=>{b(!0,"Error occurred in uploading document. Please try again later."),console.log("data submission error bo doc upload => ",u),O(!1),I(!1)})):ie.error("Select file")},ve=(e,t,r)=>{console.log("getting doc name => ",e),e==""&&ie.error("File not uploaded !!!"),e!=""&&(oa(e),ca(t),ka(),Ee($e+1),Ca(r))},Ve=(e,t)=>{ge(e.target.value),ba(t)},_a=e=>{let t=n==null?void 0:n.ownerDocs[e];console.log("select row....",t),fa(t)};console.log("filterred modal data......",de),console.log("owner doc list ===>......",n==null?void 0:n.ownersDocList);const[Ra,Se]=l.useState(!1),b=(e,t)=>{Ua(t),wa(e)},Be=async()=>{_(!0);const e={applicationId:oe};console.log("before permission fetch...",e),pe.post(na,e,we()).then(function(t){var r;(r=t==null?void 0:t.data)!=null&&r.status?(ie.success("Application has been forwarded successfully "),De(),$a("/pending-application-propertyDashboard")):ie("Problem in forwarding the application","error"),setLoaderStatus(!1)}).catch(function(t){console.log("after permission error...",t),_(!1)})};if(va)return a.jsxs(a.Fragment,{children:[a.jsx(Ga,{}),a.jsx("div",{className:"min-h-screen"})]});if(Ra)return a.jsx(Qa,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const N=e=>je==null?void 0:je.some(t=>t==e);return a.jsxs(a.Fragment,{children:[ce&&a.jsx(Ya,{}),Sa&&a.jsx(Ja,{activateBottomErrorCard:b,errorTitle:Pa}),a.jsx("div",{className:"mt-8"}),a.jsxs("div",{className:"mx-auto w-full",children:[(n==null?void 0:n.citizenCanSendOfficer)==!0&&a.jsx("div",{className:"flex",children:a.jsx("button",{className:"bg-green-500 text-white hover:bg-green-700 px-1 py-1 rounded-md",onClick:Be,children:"Send to Next Level"})}),E==!0&&a.jsxs("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:[" ",s("mainSafDocumentUploadPage.redirectedBackToCitizen.label"),"."]}),a.jsx("div",{className:"text-gray-700 py-6 ",children:a.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4",children:(Ge=(He=he==null?void 0:he.cardArray)==null?void 0:He.data)==null?void 0:Ge.map(e=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{className:"px-4 py-2 font-semibold",children:[$(e==null?void 0:e.displayString)," : "]}),a.jsx("div",{className:"px-4 py-2",children:$(e==null?void 0:e.value)})]}))})}),a.jsxs("p",{className:"text-sm",children:[s("mainSafDocumentUploadPage.note.label"),"."]}),a.jsxs("div",{className:"bg-white",children:[(n==null?void 0:n.ownerDocs)&&a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto mt-4 py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",s("mainSafDocumentUploadPage.ownerDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantImage.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.mobile.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Qe=n==null?void 0:n.ownerDocs)==null?void 0:Qe.map((e,t)=>{var r,i,c,d,g,u,x,D,y,v;return a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center justify-center",children:[((r=e==null?void 0:e.ownerDetails)==null?void 0:r.uploadedDoc)!=""&&a.jsx("div",{className:"text-center cursor-pointer",onClick:()=>{var f,S;return ve(`${(f=e==null?void 0:e.ownerDetails)==null?void 0:f.uploadedDoc}`,"jpg",(S=e==null?void 0:e.ownerDetails)==null?void 0:S.docId)},children:a.jsx("img",{src:N((i=e==null?void 0:e.ownerDetails)==null?void 0:i.docId)?U:`${(c=e==null?void 0:e.ownerDetails)==null?void 0:c.uploadedDoc}`,alt:"",className:"md:w-[3vw] w-[5vw]",srcset:""})}),((d=e==null?void 0:e.ownerDetails)==null?void 0:d.uploadedDoc)==""&&a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]})]})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:$((g=e==null?void 0:e.ownerDetails)==null?void 0:g.name)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:$((u=e==null?void 0:e.ownerDetails)==null?void 0:u.mobile)})})}),console.log(E),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsxs("span",{className:`font-medium ${((x=e==null?void 0:e.ownerDetails)==null?void 0:x.reqDocCount)===((D=e==null?void 0:e.ownerDetails)==null?void 0:D.uploadedDocCount)&&!E?"text-green-400":"text-red-500"}`,children:[" ",s("mainSafDocumentUploadPage.uploaded.label")," ",$((y=e==null?void 0:e.ownerDetails)==null?void 0:y.uploadedDocCount)," of ",$((v=e==null?void 0:e.ownerDetails)==null?void 0:v.reqDocCount)]})})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:!ce&&a.jsx("button",{onClick:()=>{var f;return Ea((f=e==null?void 0:e.ownerDetails)==null?void 0:f.ownerId,t)},type:"button",className:Pe,children:s("mainSafDocumentUploadPage.view.label")})})})})]})})})]})})]})}),a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:a.jsxs("div",{className:"w-full ",children:[a.jsxs("h1",{className:"text-xs text-gray-600",children:[" ",s("mainSafDocumentUploadPage.propertyDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.upload.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Ye=n==null?void 0:n.listDocs)==null?void 0:Ye.map((e,t)=>{var r,i,c,d,g,u,x,D,y,v,f,S,A,M,z,q,V,B,H,G,Q,Y,J,K,W,X,Z,L,T,ee,ae,o,p,te,se,le,ne,re;return a.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:F.handleSubmit,onChange:F.handleChange,children:[a.jsx("td",{className:"py-3 px-6 font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Te,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",value:e==null?void 0:e.docName,children:[e==null?void 0:e.docName," ",(e==null?void 0:e.docType)=="R"&&a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:m=>Ne.current[t]=m,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!((n==null?void 0:n.paymentStatus)!=1||((r=e==null?void 0:e.uploadedDoc)==null?void 0:r.verifyStatus)==2),onChange:m=>Ve(m,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",selected:!0,children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((m,h)=>a.jsx("option",{value:m==null?void 0:m.documentCode,children:m==null?void 0:m.docVal}))]})})})}),a.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var m,h,Ke,We,Xe,Ze,Le;return ve(`${(m=e==null?void 0:e.uploadedDoc)==null?void 0:m.docPath}`,(Ze=(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.docPath)==null?void 0:Ze.split(".")[((Xe=(We=(Ke=e==null?void 0:e.uploadedDoc)==null?void 0:Ke.docPath)==null?void 0:We.split("."))==null?void 0:Xe.length)-1],(Le=e==null?void 0:e.uploadedDoc)==null?void 0:Le.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((x=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:x.split(".")[((u=(g=(d=e==null?void 0:e.uploadedDoc)==null?void 0:d.docPath)==null?void 0:g.split("."))==null?void 0:u.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(ea,{})}),((S=(D=e==null?void 0:e.uploadedDoc)==null?void 0:D.docPath)==null?void 0:S.split(".")[((f=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:f.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(m=>{var h;return[...m,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((A=e==null?void 0:e.uploadedDoc)==null?void 0:A.uploadedDocId)?U:`${(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((H=(z=e==null?void 0:e.uploadedDoc)==null?void 0:z.docPath)==null?void 0:H.split(".")[((B=(V=(q=e==null?void 0:e.uploadedDoc)==null?void 0:q.docPath)==null?void 0:V.split("."))==null?void 0:B.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(m=>{var h;return[...m,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((G=e==null?void 0:e.uploadedDoc)==null?void 0:G.uploadedDocId)?U:`${(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((X=(Y=e==null?void 0:e.uploadedDoc)==null?void 0:Y.docPath)==null?void 0:X.split(".")[((W=(K=(J=e==null?void 0:e.uploadedDoc)==null?void 0:J.docPath)==null?void 0:K.split("."))==null?void 0:W.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(m=>{var h;return[...m,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.uploadedDocId)?U:`${(L=e==null?void 0:e.uploadedDoc)==null?void 0:L.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsxs("td",{className:"py-3 px-6 text-center font-semibold",children:[((T=e==null?void 0:e.uploadedDoc)==null?void 0:T.documentCode)=="PHOTOGRAPH"&&a.jsx("p",{className:"whitespace-no-wrap"}),(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.verifyStatus)==0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.pending.label")]})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.verifyStatus)==1&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.verified.label")]})}),a.jsxs("p",{className:"text-red-500 whitespace-no-wrap",children:[((o=e==null?void 0:e.uploadedDoc)==null?void 0:o.verifyStatus)==2&&a.jsx(a.Fragment,{children:"Rejected"}),(e==null?void 0:e.btcStatus)===!0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.rejected.label")]})]})]})]}),a.jsx("td",{className:"py-3 px-6 text-center",children:((p=e==null?void 0:e.uploadedDoc)==null?void 0:p.remarks)==""||((te=e==null?void 0:e.uploadedDoc)==null?void 0:te.remarks)==null?a.jsx("i",{className:`font-semibold not-italic text-${((se=e==null?void 0:e.uploadedDoc)==null?void 0:se.verifyStatus)===2?"red-500":"gray-900"}`,children:s("mainSafDocumentUploadPage.na.label")}):a.jsx("span",{className:"font-semibold not-italic text-red-500",children:(le=e==null?void 0:e.uploadedDoc)==null?void 0:le.remarks})}),a.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:(n==null?void 0:n.paymentStatus)!=1||((ne=e==null?void 0:e.uploadedDoc)==null?void 0:ne.verifyStatus)==2?a.jsx("div",{className:"font-semibold text-sm",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:m=>qe(m,"property",t),className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((re=e==null?void 0:e.uploadedDoc)==null?void 0:re.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&a.jsx("div",{className:"mt-2",children:!ce&&a.jsx("button",{onClick:()=>ye(e==null?void 0:e.docName,t,"property"),type:"submit",className:Pe,children:s("mainSafDocumentUploadPage.upload.label")})})]})}):a.jsxs("div",{className:"font-semibold text-sm text-green-500 text-center",children:[" ",s("mainSafDocumentUploadPage.uploaded.label")]})})]})})})]})})]})}),a.jsxs("div",{className:"col-span-5 grid grid-cols-3 px-4",children:[a.jsx("div",{className:"md:pl-0"}),a.jsx("div",{className:"md:px-4 text-center"}),a.jsx("div",{className:"md:pl-10 text-right"})]})]})]}),(n==null?void 0:n.citizenCanSendOfficer)==!0&&E!=!0&&a.jsx("div",{className:"flex",children:a.jsx("button",{className:"bg-green-500 text-white hover:bg-green-700 px-1 py-1 rounded-md",onClick:Be,children:"Send to Next Level"})}),a.jsx(Ue,{isOpen:Da,onRequestClose:R,style:Za,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50 animate__animated animate__zoomIn animate__faster",children:[a.jsx("div",{className:"absolute top-5 right-5 bg-red-200 hover:bg-red-300 rounded-full p-2 cursor-pointer text-xs sm:text-base",onClick:R,children:a.jsx(aa,{})}),a.jsx("div",{className:"flex md:pl-4 bg-white font-sans overflow-x-auto mt-6 sm:w-full w-[100vw] sm:text-base text-sm",children:a.jsxs("div",{className:"w-full lg:w-4/6",children:[a.jsxs("div",{className:"font-semibold w-full flex",children:[a.jsx("div",{className:"flex-1"}),a.jsx("div",{className:"flex-1 text-center",children:a.jsxs("span",{className:"float-none",children:[" ",s("mainSafDocumentUploadPage.uploadOwnerDocuments.label")]})})]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 font-light bg-white text-xs sm:text-sm",children:(Je=de==null?void 0:de.documents)==null?void 0:Je.map((e,t)=>{var r,i,c,d,g,u,x,D,y,v,f,S,A,M,z,q,V,B,H,G,Q,Y,J,K,W,X,Z,L,T,ee,ae;return a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Te,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:o=>be.current[t]=o,className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",onChange:o=>Ve(o,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",children:s("mainSafDocumentUploadPage.select.label")}),(r=e==null?void 0:e.masters)==null?void 0:r.map((o,p)=>a.jsx("option",{value:o==null?void 0:o.documentCode,children:o==null?void 0:o.docVal}))]})})})})}),a.jsx("td",{className:"py-3 px-6 text-center",children:(e==null?void 0:e.uploadedDoc)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var o,p,te,se,le,ne,re;return ve(`${(o=e==null?void 0:e.uploadedDoc)==null?void 0:o.docPath}`,(ne=(p=e==null?void 0:e.uploadedDoc)==null?void 0:p.docPath)==null?void 0:ne.split(".")[((le=(se=(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.docPath)==null?void 0:se.split("."))==null?void 0:le.length)-1],(re=e==null?void 0:e.uploadedDoc)==null?void 0:re.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((u=(i=e==null?void 0:e.uploadedDoc)==null?void 0:i.docPath)==null?void 0:u.split(".")[((g=(d=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:d.split("."))==null?void 0:g.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(ea,{})}),((f=(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.docPath)==null?void 0:f.split(".")[((v=(y=(D=e==null?void 0:e.uploadedDoc)==null?void 0:D.docPath)==null?void 0:y.split("."))==null?void 0:v.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(o=>{var p;return[...o,(p=e==null?void 0:e.uploadedDoc)==null?void 0:p.uploadedDocId]}),src:N((S=e==null?void 0:e.uploadedDoc)==null?void 0:S.uploadedDocId)?U:`${(A=e==null?void 0:e.uploadedDoc)==null?void 0:A.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((B=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:B.split(".")[((V=(q=(z=e==null?void 0:e.uploadedDoc)==null?void 0:z.docPath)==null?void 0:q.split("."))==null?void 0:V.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(o=>{var p;return[...o,(p=e==null?void 0:e.uploadedDoc)==null?void 0:p.uploadedDocId]}),src:N((H=e==null?void 0:e.uploadedDoc)==null?void 0:H.uploadedDocId)?U:`${(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((W=(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath)==null?void 0:W.split(".")[((K=(J=(Y=e==null?void 0:e.uploadedDoc)==null?void 0:Y.docPath)==null?void 0:J.split("."))==null?void 0:K.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(o=>{var p;return[...o,(p=e==null?void 0:e.uploadedDoc)==null?void 0:p.uploadedDocId]}),src:N((X=e==null?void 0:e.uploadedDoc)==null?void 0:X.uploadedDocId)?U:`${(Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]}):a.jsx(a.Fragment,{children:(e==null?void 0:e.docName)=="Photograph"?"":a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.pending.label")})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((T=e==null?void 0:e.uploadedDoc)==null?void 0:T.verifyStatus)==1&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.verified.label")})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)==!0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.rejected.label")})})]})})}),a.jsxs("td",{className:"py-3 px-6",children:[((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):(ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.remarks,(e==null?void 0:e.uploadedDoc)==""&&a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")})]}),console.log(E,"aasdsabtcd"),console.log(e==null?void 0:e.btcStatus,"aasdsabtcd"),a.jsx("td",{className:"py-3 px-6",children:(n==null?void 0:n.paymentStatus)!=1?a.jsxs("div",{className:"font-semibold text-sm",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:t==0?".png,.jpg,.jpeg":".pdf,.png,.jpg,.jpeg",type:"file",onChange:o=>qe(o,"owner",t),className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36"})}),a.jsx("div",{className:"mt-2",children:!ce&&a.jsx("button",{onClick:()=>ye(e==null?void 0:e.docName,t,"owner"),type:"button",className:Pe,children:s("mainSafDocumentUploadPage.upload.label")})})]}):a.jsx("div",{className:"font-semibold text-sm text-green-500 text-center",children:s("mainSafDocumentUploadPage.uploaded.label")})})]})})})})]})})]})})]})}),a.jsx(Ue,{isOpen:ya,onAfterOpen:Fa,onRequestClose:R,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:a.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[a.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:R,children:a.jsx(aa,{})}),N(Ia)?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[a.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:["Error",s("mainSafDocumentUploadPage.error.label")]}),a.jsx("div",{className:"pl-4",children:s("mainSafDocumentUploadPage.documentNotVisible.label")})]})}):a.jsxs(a.Fragment,{children:[Fe=="pdf"&&a.jsx(a.Fragment,{children:a.jsx("iframe",{className:"w-full h-full",src:ke,frameborder:"0"})}),Fe!="pdf"&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:a.jsx("img",{src:ke,alt:"",srcset:"",className:""})})})]})]})})]})}export{st as default};
