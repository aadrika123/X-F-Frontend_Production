import{u as ze,r as a,A as k,v as ve,c as Me,V as Ye,d as Qe,b as Xe,a as Ze,j as s,W as Ge,o as Je,X as Ke,Y as we,B as es,Z as ss,_ as x,$ as ts,f as as}from"./index-e24d5f40.js";function ds(N){var E,W,q,z;const h=es,{id:g,type:l}=ze();console.log("id in upload........",g,"and type => ",l);const{get_ConcessionDocumentsToUpload:ye,post_ConcessionDocumentUpload:De,get_ObjectionDocumentsToUpload:Se,post_ObjectionDocumentUpload:Ue,get_HarvestingDocumentsToUpload:Ce,post_HarvestingDocumentUpload:ke,get_ConcessionDetailsById:Ie,get_HarvestingDetailsById:Oe,get_ObjectionDetailsById:Pe}=as(),[I,i]=a.useState(!1),[p,O]=a.useState(""),[ls,_e]=a.useState(""),[v,P]=a.useState(0),[Ae,f]=a.useState(!1),[ns,$e]=a.useState(""),[_,A]=a.useState(1);a.useState(0);const[$,Fe]=a.useState(),[j,F]=a.useState(""),[R,B]=a.useState(!0),[b,w]=a.useState(!1),[y,Re]=a.useState();a.useState();const[n,Be]=a.useState(),[D,T]=a.useState(null),[S,U]=a.useState(null),[os,Te]=a.useState(!1),[is,H]=a.useState(!1),He=()=>H(!0),Ve=()=>{w(!1),Te(!1),f(!1),H(!1),A(_+1),console.log("modal m end => ",Ae,b)};a.useEffect(()=>{V()},[v]),a.useEffect(()=>{let e="";l=="Concession"&&(e=Ie),l=="Rain Water Harvesting"&&(e=Oe),l=="Objection"&&(e=Pe),i(!0),k.post(e,{applicationId:g},ve()).then(function(t){var o;i(!1),console.log("view full details...",t.data.data),Be((o=t==null?void 0:t.data)==null?void 0:o.data)}).catch(function(t){i(!1),console.log("==2 details by id error...",t)})},[]);const V=()=>{let e="";l=="Concession"&&(e=ye),l=="Rain Water Harvesting"&&(e=Ce),l=="Objection"&&(e=Se),i(!0),console.log("before fetch upload doc"),k.post(`${e}`,{applicationId:g},ve()).then(t=>{var o;console.log("list of doc to upload at pilotworkflowdocumentupload => ",t==null?void 0:t.data),Re((o=t==null?void 0:t.data)==null?void 0:o.data),i(!1)}).catch(t=>{console.log("data submission error bo doc upload => ",t),f(!1),i(!1)})};console.log("temp doc => ",b);const Le=Me({docId:Ye().required("Select document type"),docUpload:Qe().required("Select document")}),m=Xe({initialValues:{docId:"",docUpload:"",docName:""},onSubmit:e=>{console.log("use effect 2"),console.log("values submission => ",e),L()},validationSchema:Le}),Ee=e=>{let t=e.target.files[0];ss(t)&&(F(e.target.name),Fe(URL.createObjectURL(e.target.files[0])),O(e.target.files[0]),m.setFieldValue("docUpload",URL.createObjectURL(e.target.files[0])),console.log("use effect change ",m.values.docId,m.values.docUpload),console.log("file on change bo doc upload => ",t,"and doc upload => ",p,"and url => ",$,"and name => ",t==null?void 0:t.name,"file name => ",j),(t==null?void 0:t.name).substring((t==null?void 0:t.name).lastIndexOf(".")+1)=="pdf"?B(!1):B(!0))};console.log("and doc name => ",j);const L=e=>{if(S==null){x.error("Select Document Type"),T(null),U(null);return}console.log("doc ref name...",e);let t=new FormData;console.log("document  => ",p);let o={applicationId:N==null?void 0:N.id,ownerId:D,docCode:S,document:p};if(t.append("applicationId",g),D!=null&&t.append("ownerId",D),t.append("docCode",S),t.append("document",p),console.log("form data bo doc upload => ",o),p!=""){Ve(),i(!0);let d="";l=="Concession"&&(d=De),l=="Rain Water Harvesting"&&(d=ke),l=="Objection"&&(d=Ue),console.log("before fetch doc to upload...",t),k.post(`${d}`,t,ts()).then(r=>{var u;console.log("data submitted bo doc upload => ",r.data),(u=r==null?void 0:r.data)!=null&&u.status?(x.success("Document Uploaded Successfully !!"),f(!1),_e(""),O(""),i(!1),P(v+1),F(""),m.setFieldValue("docUpload",""),P(v+1),T(null),U(null),V()):(console.log("something went"),x.error("Something went wrongg !!!"))}).catch(r=>{console.log("data submission error bo doc upload => ",r),f(!1),i(!1)})}else x.error("Select file")},C=e=>{console.log("getting doc name => ",e),e==""&&x.error("File not uploaded !!!"),e!=""&&($e(e),He(),A(_+1))},We=e=>{U(e.target.value)},qe=Ze();return s.jsxs(s.Fragment,{children:[s.jsx(Ge,{position:"top-right",autoClose:2e3}),I&&s.jsx(Je,{}),s.jsxs("div",{className:"overflow-x-auto mx-auto w-full px-36 relative",children:[s.jsx("button",{className:"absolute top-2 left-2 bg-indigo-500 px-4 py-1 shadow-lg rounded-sm text-white hover:bg-white poppins border-2 border-indigo-500 hover:text-indigo-600 transition-all duration-200 mt-1 hover:border-2 hover:border-indigo-600",onClick:()=>qe("/propertyDashboard"),children:"Back"}),l=="Objection"?s.jsxs("div",{className:"poppins text-xl 2xl:text-2xl font-semibold uppercase text-gray-700 2xl:mt-4 mt-2 w-full text-center",children:[(n==null?void 0:n.objection_for)=="Clerical Mistake"&&s.jsx(s.Fragment,{children:"Clerical Objection"})," ",(n==null?void 0:n.objection_for)=="Assessment Error"&&s.jsx(s.Fragment,{children:"Assessment Objection"})," ",(n==null?void 0:n.objection_for)=="Forgery"&&s.jsx(s.Fragment,{children:"Forgery Objection"}),"  Document Upload"]}):s.jsxs("div",{className:"poppins text-xl 2xl:text-2xl font-semibold uppercase text-gray-700 2xl:mt-4 mt-2 w-full text-center",children:[l," Document Upload"]}),s.jsx("div",{className:"text-gray-700 py-6 ",children:s.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4",children:(q=(W=(E=n==null?void 0:n.fullDetailsData)==null?void 0:E.cardArray)==null?void 0:W.data)==null?void 0:q.map(e=>s.jsxs("div",{className:"grid grid-cols-2",children:[s.jsxs("div",{className:"px-4 py-2 font-semibold",children:[e==null?void 0:e.displayString," : "]}),s.jsx("div",{className:"px-4 py-2",children:e==null?void 0:e.value})]}))})}),s.jsx("div",{className:"text-red-500 font-semibold poppins 2xl:text-sm text-xs",children:"You have been redirected as Back To Citizen to re-upload documents."}),s.jsx("div",{className:"w-full flex md:px-4 bg-white font-sans overflow-x-auto py-6",children:s.jsxs("div",{className:"w-full",children:[s.jsxs("h1",{className:"text-xs poppins",children:[l," Documents"]}),s.jsx("div",{className:"bg-white shadow-md rounded my-2",children:s.jsxs("table",{className:"min-w-max w-full table-auto",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"bg-indigo-100 text-gray-600 uppercase text-sm leading-normal",children:[s.jsx("th",{className:"py-3 px-6 text-center",children:"#"}),s.jsx("th",{className:"py-3 px-6 text-left cursor-pointer",children:"Document Name"}),s.jsx("th",{className:"py-3 px-6 text-left",children:"Type"}),s.jsx("th",{className:"py-3 px-6 text-center",children:"Document"}),s.jsx("th",{className:"py-3 px-6 text-center",children:"Status"}),s.jsx("th",{className:"py-3 px-6 text-center",children:"Remarks"}),s.jsx("th",{className:"py-3 px-6 text-center",children:"Preview"}),s.jsx("th",{className:"py-3 px-6 text-center",children:"Upload"})]})}),s.jsx("tbody",{className:"text-gray-600 text-sm font-light bg-white",children:(z=y==null?void 0:y.listDocs)==null?void 0:z.map((e,t)=>{var o,d,r,u,M,Y,Q,X,Z,G,J,K,ee,se,te,ae,le,ne,oe,ie,re,ce,de,me,pe,ue,xe,he,ge,fe,je,be,Ne;return s.jsxs("tr",{className:"border-b border-gray-200 ",onSubmit:m.handleSubmit,onChange:m.handleChange,children:[s.jsx("td",{className:"py-3 px-6 font-semibold",children:t+1}),s.jsx("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:s.jsxs("div",{className:"flex items-center",children:[s.jsx("div",{className:"mr-2 bg-white shadow-lg rounded-full p-2",children:s.jsx("img",{src:Ke,alt:"rain",className:"w-4"})}),s.jsxs("span",{className:"font-medium poppins",value:e==null?void 0:e.docName,children:[(e==null?void 0:e.docType)=="R"&&((o=e==null?void 0:e.masters[0])==null?void 0:o.docVal),(e==null?void 0:e.docType)=="O"&&"Additional"]})]})}),s.jsx("td",{className:"py-3 px-6",children:s.jsx("div",{className:"font-semibold text-sm",children:s.jsx("div",{className:"",children:s.jsxs("select",{className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",name:"docId",onChange:We,children:[s.jsx("option",{value:"",selected:!0,children:"--select--"}),(d=e==null?void 0:e.masters)==null?void 0:d.map((c,rs)=>s.jsx("option",{value:c==null?void 0:c.documentCode,children:c==null?void 0:c.docVal}))]})})})}),s.jsx("td",{className:"py-3 px-6 text-center relative",children:(e==null?void 0:e.uploadedDoc)==""?s.jsx("i",{className:"font-semibold",children:"N/A"}):s.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>{var c;return C(`${h}/${(c=e==null?void 0:e.uploadedDoc)==null?void 0:c.docPath}`)},children:s.jsxs("div",{className:"flex items-center",children:[((Q=(r=e==null?void 0:e.uploadedDoc)==null?void 0:r.docPath)==null?void 0:Q.split(".")[((Y=(M=(u=e==null?void 0:e.uploadedDoc)==null?void 0:u.docPath)==null?void 0:M.split("."))==null?void 0:Y.length)-1])=="pdf"&&s.jsx("div",{className:"flex-shrink-0 text-[28px]",children:s.jsx(we,{})}),((K=(X=e==null?void 0:e.uploadedDoc)==null?void 0:X.docPath)==null?void 0:K.split(".")[((J=(G=(Z=e==null?void 0:e.uploadedDoc)==null?void 0:Z.docPath)==null?void 0:G.split("."))==null?void 0:J.length)-1])=="jpg"&&s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{src:`${h}/${(ee=e==null?void 0:e.uploadedDoc)==null?void 0:ee.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((ne=(se=e==null?void 0:e.uploadedDoc)==null?void 0:se.docPath)==null?void 0:ne.split(".")[((le=(ae=(te=e==null?void 0:e.uploadedDoc)==null?void 0:te.docPath)==null?void 0:ae.split("."))==null?void 0:le.length)-1])=="jpeg"&&s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{src:`${h}/${(oe=e==null?void 0:e.uploadedDoc)==null?void 0:oe.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((me=(ie=e==null?void 0:e.uploadedDoc)==null?void 0:ie.docPath)==null?void 0:me.split(".")[((de=(ce=(re=e==null?void 0:e.uploadedDoc)==null?void 0:re.docPath)==null?void 0:ce.split("."))==null?void 0:de.length)-1])=="png"&&s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{src:`${h}/${(pe=e==null?void 0:e.uploadedDoc)==null?void 0:pe.docPath}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})})}),s.jsx("td",{className:"py-3 px-6 text-center font-semibold",children:(e==null?void 0:e.uploadedDoc)==""?s.jsx("i",{className:"font-semibold",children:"N/A"}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"whitespace-no-wrap",children:((ue=e==null?void 0:e.uploadedDoc)==null?void 0:ue.verifyStatus)==0&&s.jsx(s.Fragment,{children:"Pending"})}),s.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((xe=e==null?void 0:e.uploadedDoc)==null?void 0:xe.verifyStatus)==1&&s.jsx(s.Fragment,{children:"Verified"})}),s.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:((he=e==null?void 0:e.uploadedDoc)==null?void 0:he.verifyStatus)==2&&s.jsx(s.Fragment,{children:"Rejected"})})]})}),s.jsx("td",{className:"py-3 px-6 text-center",children:((ge=e==null?void 0:e.uploadedDoc)==null?void 0:ge.remarks)==""||((fe=e==null?void 0:e.uploadedDoc)==null?void 0:fe.remarks)==null?s.jsx("i",{className:"font-semibold",children:"N/A"}):(je=e==null?void 0:e.uploadedDoc)==null?void 0:je.remarks}),s.jsxs("td",{className:"py-3 px-6 text-center",children:[(e==null?void 0:e.docName)==j&&R==!0&&s.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>C(w(!b)),children:s.jsx("img",{src:$,alt:"",srcset:"",className:"md:w-[3vw] w-[5vw] text-center"})}),(e==null?void 0:e.docName)==j&&R==!1&&s.jsx("div",{className:"flex items-center justify-center font-semibold text-[26px] cursor-pointer",onClick:()=>C(w(!b)),children:s.jsx("div",{className:"text-[40px] text-center",children:s.jsx(we,{})})})]}),s.jsx("td",{className:"py-3 px-6 flex flex-wrap gap-2",children:s.jsx("div",{className:"font-semibold text-sm",children:((be=e==null?void 0:e.uploadedDoc)==null?void 0:be.verifyStatus)!=1&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"",children:s.jsx("input",{accept:".pdf,.jpg,.jpeg",type:"file",name:e==null?void 0:e.docName,onChange:Ee,className:"form-control block w-full px-3 py-1 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 foc}us:outline-none cursor-pointer shadow-md w-36"})}),(((Ne=e==null?void 0:e.uploadedDoc)==null?void 0:Ne.verify_status)!=1||(e==null?void 0:e.uploadedDoc)=="")&&s.jsx("div",{className:"mt-2",children:!I&&s.jsx("button",{onClick:()=>L(e==null?void 0:e.docName),type:"submit",className:" px-4 py-1.5 bg-indigo-500 text-white text-xs leading-tight rounded shadow-md hover:bg-indigo-700 poppins hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",children:"Upload"})})," "]})})})]})})})]})})]})})]})]})}export{ds as default};
