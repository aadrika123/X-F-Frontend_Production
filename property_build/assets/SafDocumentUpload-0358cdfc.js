import{ag as ue,u as Ma,Y as Ba,r as l,a as Va,e as qa,A as we,b as Pe,q as za,a6 as Ha,s as Ta,w as Ga,j as a,B as Qa,S as Xa,L as Ya,a8 as Ja,c7 as Ka,bH as Wa,n as _,b0 as Ke,ak as We,am as Ze,an as Za,ab as La,aa as et,Q as le,ac as at,g as tt}from"./index-a5f6541f.js";import{p as U}from"./photo-f9d7c0b5.js";import st from"./PaymentSuccessPage-1f8fc91d.js";const Le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};ue.setAppElement("#root");function ht(pe){var Ve,qe,ze,He,Te,Ge,Qe;const{id:I,btc:Ue}=Ma();let x=Ue=="true"||Ue==!0;const ce="mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white cursor-pointer",{api_uploadSafDocument:ea,api_listSafDocument2:aa,api_getAppicationFullDetail:ta}=Za(),{t:s}=Ba(),[ne,j]=l.useState(!1),[$,re]=l.useState(null),[lt,sa]=l.useState(""),[oe,Ie]=l.useState(0),[nt,E]=l.useState(!1),[Ce,la]=l.useState(""),[ke,na]=l.useState(""),[Fe,_e]=l.useState(1),[ra,ia]=l.useState(0),[rt,ma]=l.useState(),[it,$e]=l.useState(""),[mt,Ee]=l.useState(!0),[ut,ua]=l.useState(!1),[r,pa]=l.useState(),[xe,ca]=l.useState(),[de,oa]=l.useState(),[he,ie]=l.useState(null),[pt,fe]=l.useState(null),[xa,da]=l.useState(null),[d,ha]=l.useState(null),[ge,C]=l.useState([]),[fa,ga]=l.useState(!1),[ba,Oe]=l.useState(!1),[ja,Re]=l.useState(!1),[Na,be]=l.useState(!1),[Da,ya]=l.useState(!1),[va,Sa]=l.useState(!1),[wa,Pa]=l.useState(null),[Ua,Ia]=l.useState(null),[Ca,ct]=l.useState({});Va("Upload SAF Documents",!0);const je=l.useRef([]),Ne=l.useRef([]),k=l.useRef([]),F=l.useRef([]),ka=()=>Re(!0),Fa=()=>{},De=qa(),_a=(e,t)=>{Ea(t),ie(e),ia(ra+1),E(!0),Oe(!0)},O=()=>{ie(null),ua(!1),Oe(!1),E(!1),Re(!1),_e(Fe+1),re(null),je.current=[],k.current=[],Ne.current=[],F.current=[]};l.useEffect(()=>{Ae()},[oe]),l.useEffect(()=>{j(!0),we.post(ta,{applicationId:I},Pe()).then(function(e){var t,i,n;j(!1),oa((i=(t=e==null?void 0:e.data)==null?void 0:t.data)==null?void 0:i.fullDetailsData),ha((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(function(e){j(!1)})},[]);const Ae=()=>{Se(!1),be(!0),we.post(`${aa}`,{applicationId:I},Pe()).then(e=>{var t,i;(t=e==null?void 0:e.data)!=null&&t.status?pa((i=e==null?void 0:e.data)==null?void 0:i.data):Se(!0),be(!1)}).catch(e=>{Se(!0),E(!1),be(!1)})},$a=za({docId:Ha().required("Select document type"),docUpload:Ta().required("Select document")}),me=Ga({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{ye()},validationSchema:$a}),Me=(e,t,i)=>{var c,p;let n=e.target.files[0];$e(e.target.name),ma(URL.createObjectURL(e.target.files[0])),re(e.target.files[0]),t=="owner"?k.current[i]=(c=e.target.files[0])==null?void 0:c.name:F.current[i]=(p=e.target.files[0])==null?void 0:p.name,me.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),(n==null?void 0:n.name).substring((n==null?void 0:n.name).lastIndexOf(".")+1)=="pdf"?Ee(!1):Ee(!0)},ye=(e,t,i)=>{let n;i==="property"?n=Ne.current:n=je.current;const c=n.map((o,g)=>g===t?o.value:"");if(c[t]===null||c[t]==="Select"||c[t]===""){N(!0,`Select document type for ${e}`),ie(null),fe(null);return}if(i=="owner"&&(k.current[t]==null||k.current[t]==""||k.current[t]==null)){N(!0,`Select document to upload for ${e}`),k.current[t]=null;return}if(i=="property"&&(F.current[t]==null||F.current[t]==""||F.current[t]==null)){N(!0,`Select document to upload for ${e}`),F.current[t]=null;return}if($==null){N(!0,`Select document to upload for ${e}`);return}if(!La($)){N(!0,`File is too large for ${e}`),re(null);return}let p=new FormData;pe==null||pe.id,c[t],p.append("applicationId",I),he!=null&&p.append("ownerId",he),p.append("docCode",c[t]),p.append("document",$),p.append("docCategory",xa),$!=""?(O(),j(!0),we.post(`${ea}`,p,et()).then(o=>{var g;(g=o==null?void 0:o.data)!=null&&g.status?(le.success("Document Uploaded Successfully !!"),E(!1),sa(""),re(null),Ie(oe+1),$e(""),me.setFieldValue("docUpload",""),Ie(oe+1),ie(null),fe(null),Ae()):N(!0,"Error occurred in uploading document. Please try again later."),j(!1)}).catch(o=>{N(!0,"Error occurred in uploading document. Please try again later."),E(!1),j(!1)})):le.error("Select file")},ve=(e,t,i)=>{e==""&&le.error("File not uploaded !!!"),e!=""&&(la(e),na(t),ka(),_e(Fe+1),Ia(i))},Be=(e,t)=>{fe(e.target.value),da(t)},Ea=e=>{let t=r==null?void 0:r.ownerDocs[e];ca(t)},[Oa,Se]=l.useState(!1),N=(e,t)=>{Pa(t),Sa(e)};if(Na)return a.jsxs(a.Fragment,{children:[a.jsx(Qa,{}),a.jsx("div",{className:"min-h-screen"})]});if(Oa)return a.jsx(Xa,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const D=e=>ge==null?void 0:ge.some(t=>t==e),{api_postApplicationToLevel:Ra}=tt(),Aa=()=>{var t,i;j(!0);let e={applicationId:I,comment:"Applied By TC & Sending from Back Office",senderRoleId:(t=d==null?void 0:d.roleDetails)==null?void 0:t.wf_role_id,receiverRoleId:(i=d==null?void 0:d.roleDetails)==null?void 0:i.forward_role_id,action:"forward"};at.post(Ra,e,Pe()).then(n=>{var c,p,o;(c=n==null?void 0:n.data)!=null&&c.status?(le.success((p=n==null?void 0:n.data)==null?void 0:p.message),j(!1),De("/saf-workflow")):(le.error((o=n==null?void 0:n.data)==null?void 0:o.message),j(!1))}).catch(n=>{j(!1)})};return a.jsxs(a.Fragment,{children:[ne&&a.jsx(Ya,{}),va&&a.jsx(Ja,{activateBottomErrorCard:N,errorTitle:wa}),a.jsx("div",{className:"text-right px-4 pt-2",children:a.jsx(ue,{isOpen:Da,style:Le,children:a.jsxs("div",{style:{width:"60vw",height:"60vh"},children:[a.jsx("button",{type:"button",className:"text-white bg-red-500 float-right w-6 h-6 rounded-full",onClick:()=>ya(!1),children:"X"}),fa?a.jsx(st,{}):a.jsx(a.Fragment,{children:a.jsx(Ka,{setpaymentStatus:ga,id:I,applicationDetails:Ca})})]})})}),a.jsxs("div",{className:"mx-auto w-full",children:[(r==null?void 0:r.docUploadStatus)==1&&x!=!0&&((Ve=d==null?void 0:d.DocDetail)==null?void 0:Ve.applied_by)!="TC"&&a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"flex-1 items-center text-yellow-600",children:[a.jsx(Wa,{className:"inline mr-2"}),s("mainSafDocumentUploadPage.allDocumentsUploaded.label")]}),a.jsxs("div",{className:"absolute right-4  space-x-4",children:[a.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 shadow-md hover:bg-blue-800",onClick:()=>De("/home"),children:"Home"}),a.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 shadow-md hover:bg-blue-800",onClick:()=>De(`/viewDemand/${I}`),children:"View Demand"})]}),(d==null?void 0:d.payment_status)!=1&&a.jsx("div",{className:"flex-1"})]}),((qe=d==null?void 0:d.DocDetail)==null?void 0:qe.applied_by)=="TC"&&(r==null?void 0:r.docUploadStatus)!=0&&a.jsx("div",{className:"absolute   space-x-4 px-2 mt-2 pb-2",children:a.jsx("button",{className:"bg-green-600 rounded-md text-white px-2 py-1 shadow-md hover:bg-green-800",onClick:()=>Aa(),children:"Send To Next Level"})}),x==!0&&a.jsxs("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:[" ",s("mainSafDocumentUploadPage.redirectedBackToCitizen.label"),"."]}),a.jsx("div",{className:"text-gray-700 py-6 mt-2",children:a.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4 mt-4",children:(He=(ze=de==null?void 0:de.cardArray)==null?void 0:ze.data)==null?void 0:He.map(e=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{className:"px-4 py-2 font-semibold",children:[_(e==null?void 0:e.displayString)," : "]}),a.jsx("div",{className:"px-4 py-2",children:_(e==null?void 0:e.value)})]}))})}),a.jsxs("p",{className:"text-sm",children:[s("mainSafDocumentUploadPage.note.label"),"."]}),a.jsxs("div",{className:"bg-white",children:[(r==null?void 0:r.ownerDocs)&&a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto mt-4 py-6",children:a.jsxs("div",{className:"w-full",children:[a.jsxs("h1",{className:"text-xs",children:[" ",s("mainSafDocumentUploadPage.ownerDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantImage.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.applicantName.label")}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.mobile.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Te=r==null?void 0:r.ownerDocs)==null?void 0:Te.map((e,t)=>{var i,n,c,p,o,g,y,v,S,w;return a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center justify-center",children:[((i=e==null?void 0:e.ownerDetails)==null?void 0:i.uploadedDoc)!=""&&a.jsx("div",{className:"text-center cursor-pointer",onClick:()=>{var b,P;return ve(`${(b=e==null?void 0:e.ownerDetails)==null?void 0:b.uploadedDoc}`,"jpg",(P=e==null?void 0:e.ownerDetails)==null?void 0:P.docId)},children:a.jsx("img",{src:D((n=e==null?void 0:e.ownerDetails)==null?void 0:n.docId)?U:`${(c=e==null?void 0:e.ownerDetails)==null?void 0:c.uploadedDoc}`,alt:"",className:"md:w-[3vw] w-[5vw]",srcset:""})}),((p=e==null?void 0:e.ownerDetails)==null?void 0:p.uploadedDoc)==""&&a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]})]})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:_((o=e==null?void 0:e.ownerDetails)==null?void 0:o.name)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"font-medium",children:_((g=e==null?void 0:e.ownerDetails)==null?void 0:g.mobile)})})}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsx("div",{className:"flex items-center",children:a.jsxs("span",{className:`font-medium ${((y=e==null?void 0:e.ownerDetails)==null?void 0:y.reqDocCount)===((v=e==null?void 0:e.ownerDetails)==null?void 0:v.uploadedDocCount)&&!x?"text-green-400":"text-red-500"}`,children:[" ",s("mainSafDocumentUploadPage.uploaded.label")," ",_((S=e==null?void 0:e.ownerDetails)==null?void 0:S.uploadedDocCount)," of ",_((w=e==null?void 0:e.ownerDetails)==null?void 0:w.reqDocCount)]})})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:!ne&&a.jsx("button",{onClick:()=>{var b;return _a((b=e==null?void 0:e.ownerDetails)==null?void 0:b.ownerId,t)},type:"button",className:ce,children:s("mainSafDocumentUploadPage.view.label")})})})})]})})})]})})]})}),a.jsx("div",{className:" flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:a.jsxs("div",{className:"w-full ",children:[a.jsxs("h1",{className:"text-xs text-gray-600",children:[" ",s("mainSafDocumentUploadPage.propertyDocuments.label")]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.upload.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(Ge=r==null?void 0:r.listDocs)==null?void 0:Ge.map((e,t)=>{var i,n,c,p,o,g,y,v,S,w,b,P,R,A,M,B,V,q,z,H,T,G,Q,X,Y,J,K,W,Z,L,ee,m,h,ae;return a.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:me.handleSubmit,onChange:me.handleChange,children:[a.jsx("td",{className:"py-3 px-6 font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Ke,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",value:e==null?void 0:e.docName,children:[e==null?void 0:e.docName," ",(e==null?void 0:e.docType)=="R"&&a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{className:"py-3 px-6",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:u=>Ne.current[t]=u,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&x||!(e!=null&&e.btcStatus)&&!x&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!x&&(r==null?void 0:r.paymentStatus)!=1),onChange:u=>Be(u,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",selected:!0,children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((u,f)=>a.jsx("option",{value:u==null?void 0:u.documentCode,children:u==null?void 0:u.docVal}))]})})})}),a.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var u,f,te,se,Xe,Ye,Je;return ve(`${(u=e==null?void 0:e.uploadedDoc)==null?void 0:u.docPath}`,(Ye=(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.docPath)==null?void 0:Ye.split(".")[((Xe=(se=(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.docPath)==null?void 0:se.split("."))==null?void 0:Xe.length)-1],(Je=e==null?void 0:e.uploadedDoc)==null?void 0:Je.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((g=(n=e==null?void 0:e.uploadedDoc)==null?void 0:n.docPath)==null?void 0:g.split(".")[((o=(p=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:p.split("."))==null?void 0:o.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(We,{})}),((b=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:b.split(".")[((w=(S=(v=e==null?void 0:e.uploadedDoc)==null?void 0:v.docPath)==null?void 0:S.split("."))==null?void 0:w.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(u=>{var f;return[...u,(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.uploadedDocId]}),src:D((P=e==null?void 0:e.uploadedDoc)==null?void 0:P.uploadedDocId)?U:`${(R=e==null?void 0:e.uploadedDoc)==null?void 0:R.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((q=(A=e==null?void 0:e.uploadedDoc)==null?void 0:A.docPath)==null?void 0:q.split(".")[((V=(B=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:B.split("."))==null?void 0:V.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(u=>{var f;return[...u,(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.uploadedDocId]}),src:D((z=e==null?void 0:e.uploadedDoc)==null?void 0:z.uploadedDocId)?U:`${(H=e==null?void 0:e.uploadedDoc)==null?void 0:H.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((Y=(T=e==null?void 0:e.uploadedDoc)==null?void 0:T.docPath)==null?void 0:Y.split(".")[((X=(Q=(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath)==null?void 0:Q.split("."))==null?void 0:X.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(u=>{var f;return[...u,(f=e==null?void 0:e.uploadedDoc)==null?void 0:f.uploadedDocId]}),src:D((J=e==null?void 0:e.uploadedDoc)==null?void 0:J.uploadedDocId)?U:`${(K=e==null?void 0:e.uploadedDoc)==null?void 0:K.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsxs("td",{className:"py-3 px-6 text-center font-semibold",children:[((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.documentCode)=="PHOTOGRAPH"&&a.jsx("p",{className:"whitespace-no-wrap"}),(e==null?void 0:e.uploadedDoc)==""?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.verifyStatus)==0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.pending.label")]})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.verifyStatus)==1&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.verified.label")]})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsxs(a.Fragment,{children:[" ",s("mainSafDocumentUploadPage.rejected.label")]})})]})]}),a.jsx("td",{className:"py-3 px-6 text-center",children:((ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks)==""||((m=e==null?void 0:e.uploadedDoc)==null?void 0:m.remarks)==null?a.jsxs("i",{className:"font-semibold not-italic",children:[" ",s("mainSafDocumentUploadPage.na.label")]}):(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.remarks}),a.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:e!=null&&e.btcStatus&&x||!(e!=null&&e.btcStatus)&&!x&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!x&&(r==null?void 0:r.paymentStatus)!=1?a.jsx("div",{className:"font-semibold text-sm",children:a.jsxs("div",{className:"",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:u=>Me(u,"property",t),className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>ye(e==null?void 0:e.docName,t,"property"),type:"submit",className:ce,children:s("mainSafDocumentUploadPage.upload.label")})})]})}):a.jsxs("div",{className:"font-semibold text-sm text-green-500 text-center",children:[" ",s("mainSafDocumentUploadPage.uploaded.label")]})})]})})})]})})]})}),a.jsxs("div",{className:"col-span-5 grid grid-cols-3 px-4",children:[a.jsx("div",{className:"md:pl-0"}),a.jsx("div",{className:"md:px-4 text-center"}),a.jsx("div",{className:"md:pl-10 text-right"})]})]})]}),a.jsx(ue,{isOpen:ba,onRequestClose:O,style:Le,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50 animate__animated animate__zoomIn animate__faster",children:[a.jsx("div",{className:"absolute top-5 right-5 bg-red-200 hover:bg-red-300 rounded-full p-2 cursor-pointer text-xs sm:text-base",onClick:O,children:a.jsx(Ze,{})}),a.jsx("div",{className:"flex md:pl-4 bg-white font-sans overflow-x-auto mt-6 sm:w-full w-[100vw] sm:text-base text-sm",children:a.jsxs("div",{className:"w-full lg:w-4/6",children:[a.jsxs("div",{className:"font-semibold w-full flex",children:[a.jsx("div",{className:"flex-1"}),a.jsx("div",{className:"flex-1 text-center",children:a.jsxs("span",{className:"float-none",children:[" ",s("mainSafDocumentUploadPage.uploadOwnerDocuments.label")]})})]}),a.jsx("div",{className:"bg-white shadow-md rounded my-2",children:a.jsxs("table",{className:"min-w-max w-full table-auto",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"bg-indigo-100 text-gray-600 capitalize text-sm leading-normal",children:[a.jsx("th",{className:"py-3 px-6 text-left",children:"#"}),a.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:s("mainSafDocumentUploadPage.documentName.label")}),a.jsxs("th",{className:"py-3 px-6 text-left",children:[" ",s("mainSafDocumentUploadPage.type.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.document.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.status.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.remarks.label")]}),a.jsxs("th",{className:"py-3 px-6 text-center",children:[" ",s("mainSafDocumentUploadPage.action.label")]})]})}),a.jsx("tbody",{className:"text-gray-600 font-light bg-white text-xs sm:text-sm",children:(Qe=xe==null?void 0:xe.documents)==null?void 0:Qe.map((e,t)=>{var i,n,c,p,o,g,y,v,S,w,b,P,R,A,M,B,V,q,z,H,T,G,Q,X,Y,J,K,W,Z,L,ee;return a.jsx(a.Fragment,{children:a.jsxs("tr",{className:"border-b border-gray-200 ",children:[a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:t+1}),a.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:a.jsx("img",{src:Ke,alt:"rain",className:"w-4"})}),a.jsxs("span",{className:"font-medium",children:[e==null?void 0:e.docName," ",a.jsx("span",{className:"text-red-600 inline",children:"*"})]})]})}),a.jsx("td",{children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"font-semibold text-sm",children:a.jsx("div",{className:"",children:a.jsxs("select",{ref:m=>je.current[t]=m,className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",disabled:!(e!=null&&e.btcStatus&&x||!(e!=null&&e.btcStatus)&&!x||!(e!=null&&e.btcStatus)&&!x&&(r==null?void 0:r.paymentStatus)!=1),onChange:m=>Be(m,e==null?void 0:e.docName),children:[a.jsx("option",{value:"",children:s("mainSafDocumentUploadPage.select.label")}),(i=e==null?void 0:e.masters)==null?void 0:i.map((m,h)=>a.jsx("option",{value:m==null?void 0:m.documentCode,children:m==null?void 0:m.docVal}))]})})})})}),a.jsx("td",{className:"py-3 px-6 text-center",children:(e==null?void 0:e.uploadedDoc)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):a.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var m,h,ae,u,f,te,se;return ve(`${(m=e==null?void 0:e.uploadedDoc)==null?void 0:m.docPath}`,(te=(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.docPath)==null?void 0:te.split(".")[((f=(u=(ae=e==null?void 0:e.uploadedDoc)==null?void 0:ae.docPath)==null?void 0:u.split("."))==null?void 0:f.length)-1],(se=e==null?void 0:e.uploadedDoc)==null?void 0:se.uploadedDocId)},children:a.jsxs("div",{className:"flex items-center",children:[((g=(n=e==null?void 0:e.uploadedDoc)==null?void 0:n.docPath)==null?void 0:g.split(".")[((o=(p=(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath)==null?void 0:p.split("."))==null?void 0:o.length)-1])=="pdf"&&a.jsx("div",{className:"flex-shrink-0 text-[28px]",children:a.jsx(We,{})}),((b=(y=e==null?void 0:e.uploadedDoc)==null?void 0:y.docPath)==null?void 0:b.split(".")[((w=(S=(v=e==null?void 0:e.uploadedDoc)==null?void 0:v.docPath)==null?void 0:S.split("."))==null?void 0:w.length)-1])=="jpg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(m=>{var h;return[...m,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((P=e==null?void 0:e.uploadedDoc)==null?void 0:P.uploadedDocId)?U:`${(R=e==null?void 0:e.uploadedDoc)==null?void 0:R.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((q=(A=e==null?void 0:e.uploadedDoc)==null?void 0:A.docPath)==null?void 0:q.split(".")[((V=(B=(M=e==null?void 0:e.uploadedDoc)==null?void 0:M.docPath)==null?void 0:B.split("."))==null?void 0:V.length)-1])=="jpeg"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(m=>{var h;return[...m,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((z=e==null?void 0:e.uploadedDoc)==null?void 0:z.uploadedDocId)?U:`${(H=e==null?void 0:e.uploadedDoc)==null?void 0:H.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((Y=(T=e==null?void 0:e.uploadedDoc)==null?void 0:T.docPath)==null?void 0:Y.split(".")[((X=(Q=(G=e==null?void 0:e.uploadedDoc)==null?void 0:G.docPath)==null?void 0:Q.split("."))==null?void 0:X.length)-1])=="png"&&a.jsx("div",{className:"flex-shrink-0",children:a.jsx("img",{onError:()=>C(m=>{var h;return[...m,(h=e==null?void 0:e.uploadedDoc)==null?void 0:h.uploadedDocId]}),src:D((J=e==null?void 0:e.uploadedDoc)==null?void 0:J.uploadedDocId)?U:`${(K=e==null?void 0:e.uploadedDoc)==null?void 0:K.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),a.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?a.jsxs("span",{className:"text-red-500 font-semibold",children:[" ",s("mainSafDocumentUploadPage.notUploaded.label")]}):a.jsx(a.Fragment,{children:(e==null?void 0:e.docName)=="Photograph"?"":a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"whitespace-no-wrap",children:((W=e==null?void 0:e.uploadedDoc)==null?void 0:W.verifyStatus)==0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.pending.label")})}),a.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.verifyStatus)==1&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.verified.label")})}),a.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.btcStatus)===!0&&a.jsx(a.Fragment,{children:s("mainSafDocumentUploadPage.rejected.label")})})]})})}),a.jsxs("td",{className:"py-3 px-6",children:[((L=e==null?void 0:e.uploadedDoc)==null?void 0:L.remarks)==""?a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")}):(ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.remarks,(e==null?void 0:e.uploadedDoc)==""&&a.jsx("i",{className:"font-semibold not-italic",children:s("mainSafDocumentUploadPage.na.label")})]}),a.jsx("td",{className:"py-3 px-6",children:e!=null&&e.btcStatus&&x||!(e!=null&&e.btcStatus)&&!x&&(e==null?void 0:e.uploadedDoc)==""||!(e!=null&&e.btcStatus)&&!x&&(r==null?void 0:r.paymentStatus)!=1?a.jsxs("div",{className:"font-semibold text-sm",children:[a.jsx("div",{className:"",children:a.jsx("input",{accept:t==0?".png,.jpg,.jpeg":".pdf,.png,.jpg,.jpeg",type:"file",onChange:m=>Me(m,"owner",t),className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36"})}),a.jsx("div",{className:"mt-2",children:!ne&&a.jsx("button",{onClick:()=>ye(e==null?void 0:e.docName,t,"owner"),type:"button",className:ce,children:s("mainSafDocumentUploadPage.upload.label")})})]}):a.jsx("div",{className:"font-semibold text-sm text-green-500 text-center",children:s("mainSafDocumentUploadPage.uploaded.label")})})]})})})})]})})]})})]})}),a.jsx(ue,{isOpen:ja,onAfterOpen:Fa,onRequestClose:O,className:"w-screen h-screen flex justify-center items-center",contentLabel:"Example Modal",children:a.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[a.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:O,children:a.jsx(Ze,{})}),D(Ua)?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[a.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:["Error",s("mainSafDocumentUploadPage.error.label")]}),a.jsx("div",{className:"pl-4",children:s("mainSafDocumentUploadPage.documentNotVisible.label")})]})}):a.jsxs(a.Fragment,{children:[ke=="pdf"&&a.jsx(a.Fragment,{children:a.jsx("iframe",{className:"w-full h-full",src:Ce,frameborder:"0"})}),ke!="pdf"&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:a.jsx("img",{src:Ce,alt:"",srcset:"",className:""})})})]})]})})]})}export{ht as default};
