import{M as Se,u as $a,t as Ea,r as l,a as _a,A as Ne,v as Ze,c as Oa,V as Aa,d as Ra,b as Ma,j as a,ad as Va,S as Ba,o as qa,p as za,aB as Ha,bq as Ga,a0 as C,br as k,D as ye,X as Je,Y as Ke,bs as Te,f as Qa,Z as Xa,$ as Ya,_ as ve}from"./index-adea03ed.js";import{T as Za}from"./TopTabs-3eef7c06.js";const Ja={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};Se.setAppElement("#root");function at(j){var Be,qe,ze,He,Ge;const{id:O,btc:we}=$a();let d=we=="true"||we==!0;const{api_uploadSafDocument:We,api_listSafDocument:Le,api_getAppicationFullDetail:ea}=Qa(),{t}=Ea(),[ne,F]=l.useState(!1),[U,re]=l.useState(null),[Ka,aa]=l.useState(""),[oe,Pe]=l.useState(0),[ta,A]=l.useState(!1),[Ue,sa]=l.useState(""),[Ie,la]=l.useState(""),[Ce,ke]=l.useState(1),[na,ra]=l.useState(0),[ia,ma]=l.useState(),[Fe,$e]=l.useState(""),[Ta,Ee]=l.useState(!0),[_e,oa]=l.useState(!1),[n,ca]=l.useState(),[ie,ua]=l.useState(),[ce,pa]=l.useState(),[ue,me]=l.useState(null),[Wa,pe]=l.useState(null),[da,xa]=l.useState(null),[de,ha]=l.useState(null),[xe,$]=l.useState([]),[fa,Oe]=l.useState(!1),[ga,Ae]=l.useState(!1),[ba,he]=l.useState(!1),[ja,Da]=l.useState(!1),[Na,ya]=l.useState(null),[va,Sa]=l.useState(null),fe=l.useRef([]),ge=l.useRef([]),I=l.useRef([]),E=l.useRef([]),wa=()=>Ae(!0),Pa=()=>{},Ua=_a(),Ia=(e,s)=>{ka(s),me(e),ra(na+1),A(!0),Oe(!0)},R=()=>{me(null),oa(!1),Oe(!1),A(!1),Ae(!1),ke(Ce+1),re(null),fe.current=[],I.current=[],ge.current=[],E.current=[],console.log("modal m end => ",ta,_e)};console.log(".............data in full details card in bo doc upload.........",j==null?void 0:j.applicationData2),console.log("id in upload........",j==null?void 0:j.id),l.useEffect(()=>{Re()},[oe]),l.useEffect(()=>{F(!0),Ne.post(ea,{applicationId:O},Ze()).then(function(e){var s,i,r,c;F(!1),console.log("view full details...",(s=e==null?void 0:e.data)==null?void 0:s.data),pa((r=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:r.fullDetailsData),ha((c=e==null?void 0:e.data)==null?void 0:c.data)}).catch(function(e){F(!1),console.log("==2 details by id error...",e)})},[]);const Re=()=>{De(!1),he(!0),console.log("before fetch upload doc"),Ne.post(`${Le}`,{applicationId:O},Ze()).then(e=>{var s,i;console.log("list of doc to upload at pilotworkflowdocumentupload => ",e==null?void 0:e.data),(s=e==null?void 0:e.data)!=null&&s.status?ca((i=e==null?void 0:e.data)==null?void 0:i.data):De(!0),he(!1)}).catch(e=>{console.log("data submission error bo doc upload => ",e),De(!0),A(!1),he(!1)})};console.log("temp doc => ",_e);const Ca=Oa({docId:Aa().required("Select document type"),docUpload:Ra().required("Select document")}),_=Ma({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{console.log("use effect 2"),console.log("values submission => ",e),be()},validationSchema:Ca}),Me=(e,s,i)=>{var c,u;let r=e.target.files[0];$e(e.target.name),ma(URL.createObjectURL(e.target.files[0])),re(e.target.files[0]),s=="owner"?I.current[i]=(c=e.target.files[0])==null?void 0:c.name:E.current[i]=(u=e.target.files[0])==null?void 0:u.name,_.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),console.log("use effect change ",_.values.docId,_.values.docUpload),console.log("file on change bo doc upload => ",r,"and doc upload => ",U,"and url => ",ia,"and name => ",r==null?void 0:r.name,"file name => ",Fe),(r==null?void 0:r.name).substring((r==null?void 0:r.name).lastIndexOf(".")+1)=="pdf"?Ee(!1):Ee(!0)};console.log("and doc name => ",Fe);const be=(e,s,i)=>{console.log("use effect 3 => ",I.current[s],`
 index => `,s,`
 module => `,i,e);let r;i==="property"?r=ge.current:r=fe.current;const c=r.map((p,f)=>f===s?p.value:"");if(console.log("current select document is....",c),c[s]===null||c[s]==="Select"||c[s]===""){D(!0,`Select document type for ${e}`),me(null),pe(null);return}if(i=="owner"&&(I.current[s]==null||I.current[s]==""||I.current[s]==null)){D(!0,`Select document to upload for ${e}`),I.current[s]=null;return}if(i=="property"&&(E.current[s]==null||E.current[s]==""||E.current[s]==null)){D(!0,`Select document to upload for ${e}`),E.current[s]=null;return}if(U==null){D(!0,`Select document to upload for ${e}`);return}if(!Xa(U)){D(!0,`File is too large for ${e}`),re(null);return}console.log("doc ref name...",e);let u=new FormData;console.log("document  => ",U);let b={applicationId:j==null?void 0:j.id,ownerId:ue,docCode:c[s],document:U};u.append("applicationId",O),ue!=null&&u.append("ownerId",ue),u.append("docCode",c[s]),u.append("document",U),u.append("docCategory",da),console.log("form data bo doc upload => ",b),U!=""?(R(),F(!0),console.log("before fetch doc to upload...",u),Ne.post(`${We}`,u,Ya()).then(p=>{var f;console.log("data submitted bo doc upload => ",p==null?void 0:p.data),(f=p==null?void 0:p.data)!=null&&f.status?(ve.success("Document Uploaded Successfully !!"),A(!1),aa(""),re(null),Pe(oe+1),$e(""),_.setFieldValue("docUpload",""),Pe(oe+1),me(null),pe(null),Re()):(console.log("something went"),D(!0,"Error occurred in uploading document. Please try again later.")),F(!1)}).catch(p=>{D(!0,"Error occurred in uploading document. Please try again later."),console.log("data submission error bo doc upload => ",p),A(!1),F(!1)})):ve.error("Select file")},je=(e,s,i)=>{console.log("getting doc name => ",e),e==""&&ve.error("File not uploaded !!!"),e!=""&&(sa(e),la(s),wa(),ke(Ce+1),Sa(i))},Ve=(e,s)=>{pe(e.target.value),xa(s)},ka=e=>{let s=n==null?void 0:n.ownerDocs[e];console.log("select row....",s),ua(s)};console.log("filterred modal data......",ie),console.log("owner doc list ===>......",n==null?void 0:n.ownersDocList);const[Fa,De]=l.useState(!1),D=(e,s)=>{ya(s),Da(e)};if(ba)return a.jsxs(a.Fragment,{children:[a.jsx(Va,{}),a.jsx("div",{className:"min-h-screen"})]});if(Fa)return a.jsx(Ba,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const N=e=>xe==null?void 0:xe.some(s=>s==e);return a.jsxs(a.Fragment,{children:[ne&&a.jsx(qa,{}),ja&&a.jsx(za,{activateBottomErrorCard:D,errorTitle:Na}),a.jsx("div",{className:"",children:a.jsx(Za,{title:`${t("mainSafDocumentUploadPage.uploadDocumentsForProperty.label")}`,type:"application",id:O,safNo:"",active:"document"})}),a.jsxs("div",{className:"mx-auto w-full",children:[(n==null?void 0:n.docUploadStatus)==1&&d!=!0&&a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"flex-1 items-center text-yellow-600",children:[a.jsx(Ha,{className:"inline mr-2"}),t("mainSafDocumentUploadPage.allDocumentsUploaded.label")]}),(de==null?void 0:de.payment_status)!=1&&a.jsx("div",{className:"flex-1",children:a.jsxs("button",{className:`${Ga}`,onClick:()=>Ua(`/viewDemand/${O}`),children:[" ",t("mainSafDocumentUploadPage.payTax.label")]})})]}),d==!0&&a.jsxs("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:[" ",t("mainSafDocumentUploadPage.redirectedBackToCitizen.label"),"."]}),a.jsx("div",{className:"text-gray-700 py-6 ",children:a.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4",children:(qe=(Be=ce==null?void 0:ce.cardArray)==null?void 0:Be.data)==null?void 0:qe.map(e=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{className:"px-4 py-2 font-semibold",children:[C(e==null?void 0:e.displayString)," : "]}),a.jsx("div",{className:"px-4 py-2",children:C(e==null?void 0:e.value)})]}))})}),a.jsxs("p",{className:"text-sm",children:[t("mainSafDocumentUploadPage.note.label"),"."]}),a.jsxs("div",{className:"bg-white",children:[(n==null?void 0:n.ownerDocs)&&a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto mt-4 py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",t("mainSafDocumentUploadPage.ownerDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:t("mainSafDocumentUploadPage.applicantImage.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:t("mainSafDocumentUploadPage.applicantName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:t("mainSafDocumentUploadPage.guardianName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:t("mainSafDocumentUploadPage.mobile.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",t("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",t("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(ze=n==null?void 0:n.ownerDocs)==null?void 0:ze.map((e,s)=>{var i,r,c,u,b,p,f,y,v,S,w;return a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center justify-center",children:[((i=e==null?void 0:e.ownerDetails)==null?void 0:i.uploadedDoc)!=""&&a.jsx("div",{className:"text-center cursor-pointer",onClick:()=>{var g,P;return je(`${(g=e==null?void 0:e.ownerDetails)==null?void 0:g.uploadedDoc}`,"jpg",(P=e==null?void 0:e.ownerDetails)==null?void 0:P.docId)},children:a.jsx("img",{src:N((r=e==null?void 0:e.ownerDetails)==null?void 0:r.docId)?k:`${(c=e==null?void 0:e.ownerDetails)==null?void 0:c.uploadedDoc}`,alt:"",className:"md:w-[3vw] w-[5vw]",srcset:""})}),((u=e==null?void 0:e.ownerDetails)==null?void 0:u.uploadedDoc)==""&&a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",t("mainSafDocumentUploadPage.notUploaded.label")]})]})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((b=e==null?void 0:e.ownerDetails)==null?void 0:b.name)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((p=e==null?void 0:e.ownerDetails)==null?void 0:p.guardian)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:C((f=e==null?void 0:e.ownerDetails)==null?void 0:f.mobile)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsxs("span",{className:`font-medium ${((y=e==null?void 0:e.ownerDetails)==null?void 0:y.reqDocCount)===((v=e==null?void 0:e.ownerDetails)==null?void 0:v.uploadedDocCount)&&!d?"text-green-400":"text-red-500"}`,children:[" ",t("mainSafDocumentUploadPage.uploaded.label")," ",C((S=e==null?void 0:e.ownerDetails)==null?void 0:S.uploadedDocCount)," of ",C((w=e==null?void 0:e.ownerDetails)==null?void 0:w.reqDocCount)]})})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:!ne&&a.jsx("button",{onClick:()=>{var g;return Ia((g=e==null?void 0:e.ownerDetails)==null?void 0:g.ownerId,s)},type:"button",className:ye,children:t("mainSafDocumentUploadPage.view.label")})})})})]})})})]})})]})}),a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",t("mainSafDocumentUploadPage.propertyDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:t("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",t("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.upload.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(He=n==null?void 0:n.listDocs)==null?void 0:He.map((e,s)=>{var i,r,c,u,b,p,f,y,v,S,w,g,P,M,V,B,q,z,H,G,Q,X,Y,Z,J,K,T,W,L,ee,ae,m,x,te;return a.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:_.handleSubmit,onChange:_.handleChange,children:[a.jsx("td",{className:"py-3 px-6 font-semibold",children:s+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Je,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",value:e==null?void 0:e.docName,children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:o=>ge.current[s]=o,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:o=>Ve(o,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",selected:!0,children:t("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((o,h)=>a.jsx("option",{value:o==null?void 0:o.documentCode,children:o==null?void 0:o.docVal}))]})})})}),a.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",t("mainSafDocumentUploadPage.na.label")]}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var o,h,se,le,Qe,Xe,Ye;return je(`${(o=e==null?void 0:e.uploadedDoc)==null?void 0:o.docPath}`,(Xe=(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.docPath)==null?void 0:Xe.split(".")[((Qe=(le=(se=e==null?void 0:e.uploadedDoc)==null?void 0:se.docPath)==null?void 0:le.split("."))==null?void 0:Qe.length)-1],(Ye=e==null?void 0:e.uploadedDoc)==null?void 0:Ye.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:p.split(".")[((b=(u=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:u.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(Ke,{})}),((w=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:w.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((g=e==null?void 0:e.uploadedDoc)==null?void 0:g.uploadedDocId)?k:`${(P=e==null?void 0:e.uploadedDoc)==null?void 0:P.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((z=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:z.split(".")[((q=(B=(V=e==null?void 0:e.uploadedDoc)==null?void 0:V.docPath)==null?void 0:B.split("."))==null?void 0:q.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((H=e==null?void 0:e.uploadedDoc)==null?void 0:H.uploadedDocId)?k:`${(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((J=(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath)==null?void 0:J.split(".")[((Z=(Y=(X=e==null?void 0:e.uploadedDoc)==null?void 0:X.docPath)==null?void 0:Y.split("."))==null?void 0:Z.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(o=>{var h;return[...o,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:N((K=e==null?void 0:e.uploadedDoc)==null?void 0:K.uploadedDocId)?k:`${(T=e==null?void 0:e.uploadedDoc)==null?void 0:T.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsxs("td",{className:"py-3 px-6 text-center font-semibold",children:[((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.documentCode)=="PHOTOGRAPH"&&a.jsx("p",{className:"whitespace-no-wrap"}),(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",t("mainSafDocumentUploadPage.na.label")]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==0&&a.jsxs(a.Fragment,{children:[" ",t("mainSafDocumentUploadPage.pending.label")]})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.verifyStatus)==1&&a.jsxs(a.Fragment,{children:[" ",t("mainSafDocumentUploadPage.verified.label")]})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsxs(a.Fragment,{children:[" ",t("mainSafDocumentUploadPage.rejected.label")]})})]})]}),a.jsx("td",{className:"py-3 px-6 text-center",children:((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.remarks)==""||((m=e==null?void 0:e.uploadedDoc)==null?void 0:m.remarks)==null?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",t("mainSafDocumentUploadPage.na.label")]}):(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.remarks}),a.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsx("div",{className:"font-semibold text-sm",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:o=>Me(o,"property",s),className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((te=e==null?void 0:e.uploadedDoc)==null?void 0:te.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>be(e==null?void 0:e.docName,s,"property"),type:"submit",className:ye,children:t("mainSafDocumentUploadPage.upload.label")})})]})}):a.jsxs("div",{className:"font-semibold text-sm text-green-500 text-center",children:[" ",t("mainSafDocumentUploadPage.uploaded.label")]})})]})})})]})})]})}),a.jsxs("div",{className:"col-span-5 grid grid-cols-3 px-4",children:[a.jsx("div",{className:"md:pl-0"}),a.jsx("div",{className:"md:px-4 text-center"}),a.jsx("div",{className:"md:pl-10 text-right"})]})]})]}),a.jsx(Se,{isOpen:fa,onRequestClose:R,style:Ja,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50 animate__animated animate__zoomIn animate__faster",children:[a.jsx("div",{className:"absolute top-5 right-5 bg-red-200 hover:bg-red-300 rounded-full p-2 cursor-pointer text-xs sm:text-base",onClick:R,children:a.jsx(Te,{})}),a.jsx("div",{className:"flex md:pl-4 bg-white font-sans overflow-x-auto mt-6 sm:w-full w-[100vw] sm:text-base text-sm",children:a.jsxs("div",{className:"w-full lg:w-4/6",children:[a.jsxs("div",{className:"font-semibold w-full flex",children:[a.jsx("div",{className:"flex-1"}),a.jsx("div",{className:"flex-1 text-center",children:a.jsxs("span",{className:"float-none",children:[" ",t("mainSafDocumentUploadPage.uploadOwnerDocuments.label")]})})]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:t("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",t("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",t("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 font-light bg-white text-xs sm:text-sm",children:(Ge=ie==null?void 0:ie.documents)==null?void 0:Ge.map((e,s)=>{var i,r,c,u,b,p,f,y,v,S,w,g,P,M,V,B,q,z,H,G,Q,X,Y,Z,J,K,T,W,L,ee,ae;return a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:s+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Je,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:m=>fe.current[s]=m,className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1),onChange:m=>Ve(m,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",children:t("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((m,x)=>a.jsx("option",{value:m==null?void 0:m.documentCode,children:m==null?void 0:m.docVal}))]})})})})}),a.jsx("td",{className:"py-3 px-6 text-center",children:(e==null?void 0:e.uploadedDoc)==""?a.jsx("i",{className:"font-semibold not-italic",children:t("mainSafDocumentUploadPage.na.label")}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var m,x,te,o,h,se,le;return je(`${(m=e==null?void 0:e.uploadedDoc)==null?void 0:m.docPath}`,(se=(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.docPath)==null?void 0:se.split(".")[((h=(o=(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.docPath)==null?void 0:o.split("."))==null?void 0:h.length)-1],(le=e==null?void 0:e.uploadedDoc)==null?void 0:le.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((p=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:p.split(".")[((b=(u=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:u.split("."))==null?void 0:b.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(Ke,{})}),((w=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:w.split(".")[((S=(v=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:v.split("."))==null?void 0:S.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:N((g=e==null?void 0:e.uploadedDoc)==null?void 0:g.uploadedDocId)?k:`${(P=e==null?void 0:e.uploadedDoc)==null?void 0:P.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((z=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:z.split(".")[((q=(B=(V=e==null?void 0:e.uploadedDoc)==null?void 0:V.docPath)==null?void 0:B.split("."))==null?void 0:q.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:N((H=e==null?void 0:e.uploadedDoc)==null?void 0:H.uploadedDocId)?k:`${(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((J=(Q=e==null?void 0:e.uploadedDoc)==null?void 0:Q.docPath)==null?void 0:J.split(".")[((Z=(Y=(X=e==null?void 0:e.uploadedDoc)==null?void 0:X.docPath)==null?void 0:Y.split("."))==null?void 0:Z.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>$(m=>{var x;return[...m,(x=e==null?void 0:e.uploadedDoc)==null?void 0:x.uploadedDocId]}),src:N((K=e==null?void 0:e.uploadedDoc)==null?void 0:K.uploadedDocId)?k:`${(T=e==null?void 0:e.uploadedDoc)==null?void 0:T.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",t("mainSafDocumentUploadPage.notUploaded.label")]}):a.jsx(a.Fragment,{children:(e==null?void 0:e.docName)=="Photograph"?"":a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.verifyStatus)==0&&a.jsx(a.Fragment,{children:t("mainSafDocumentUploadPage.pending.label")})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==1&&a.jsx(a.Fragment,{children:t("mainSafDocumentUploadPage.verified.label")})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsx(a.Fragment,{children:t("mainSafDocumentUploadPage.rejected.label")})})]})})}),a.jsxs("td",{className:"py-3 px-6",children:[((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks)==""?a.jsx("i",{className:"font-semibold not-italic",children:t("mainSafDocumentUploadPage.na.label")}):(ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.remarks,(e==null?void 0:e.uploadedDoc)==""&&a.jsx("i",{className:"font-semibold not-italic",children:t("mainSafDocumentUploadPage.na.label")})]}),a.jsx("td",{className:"py-3 px-6",children:e!=null&&e.btcStatus&&d||!(e!=null&&e.btcStatus)&&!d&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!d&&(n==null?void 0:n.paymentStatus)!=1?a.jsxs("div",{className:"font-semibold text-sm",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:s==0?".png,.jpg,.jpeg":".pdf,.png,.jpg,.jpeg",type:"file",onChange:m=>Me(m,"owner",s),className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36"})}),a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>be(e==null?void 0:e.docName,s,"owner"),type:"button",className:ye,children:t("mainSafDocumentUploadPage.upload.label")})})]}):a.jsx("div",{className:"font-semibold text-sm text-green-500 text-center",children:t("mainSafDocumentUploadPage.uploaded.label")})})]})})})})]})})]})})]})}),a.jsx(Se,{isOpen:ga,onAfterOpen:Pa,onRequestClose:R,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:a.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[a.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:R,children:a.jsx(Te,{})}),N(va)?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[a.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:["Error",t("mainSafDocumentUploadPage.error.label")]}),a.jsx("div",{className:"pl-4",children:t("mainSafDocumentUploadPage.documentNotVisible.label")})]})}):a.jsxs(a.Fragment,{children:[Ie=="pdf"&&a.jsx(a.Fragment,{children:a.jsx("iframe",{className:"w-full h-full",src:Ue,frameborder:"0"})}),Ie!="pdf"&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:a.jsx("img",{src:Ue,alt:"",srcset:"",className:""})})})]})]})})]})}export{at as default};
