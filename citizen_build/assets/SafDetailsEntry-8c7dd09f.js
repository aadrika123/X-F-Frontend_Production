import{r as i,j as e,a0 as d,Y as _e,bs as Q,M as ve,ac as ue,t as Se,bC as Pe,u as Ee,a as ke,A as X,v as D,ad as Le,S as Ae,bA as ze,bD as Te,aB as o,x as f,a9 as F,D as Ce,bE as Me,bt as Ie,f as He}from"./index-f990a1b4.js";import{T as Oe}from"./TopTabs-d2897cdb.js";function Be(l){var T,n,C,M,j,y,s,I,H,b,O,v,_,B,u,R,q,h,J,V,S,U,P,G,E,W,$,K,Y,Z,k,L,A,z,t,x,r,w,p,ee,se,te,le,ae,de,xe,re,ce,ie,ne,me,oe,fe,be,he;const[g,N]=i.useState([]),a=m=>g==null?void 0:g.some(c=>c==m);return e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(l==null?void 0:l.index)+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[d((T=l==null?void 0:l.docList)==null?void 0:T.doc_code)," ",((n=l==null?void 0:l.docList)==null?void 0:n.owner_name)!=""&&e.jsxs("span",{className:"font-semibold italic text-gray-700",children:["(",(C=l==null?void 0:l.docList)==null?void 0:C.owner_name,")"]})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm cursor-pointer",onClick:()=>{var m,c,ye,we,je,ge,Ne;return l.openModal((m=l==null?void 0:l.docList)==null?void 0:m.doc_path,(ge=(c=l==null?void 0:l.docList)==null?void 0:c.doc_path)==null?void 0:ge.split(".")[((je=(we=(ye=l==null?void 0:l.docList)==null?void 0:ye.doc_path)==null?void 0:we.split("."))==null?void 0:je.length)-1],a((Ne=l==null?void 0:l.docList)==null?void 0:Ne.id))},children:e.jsxs("div",{className:"flex items-center",children:[(((I=(M=l==null?void 0:l.docList)==null?void 0:M.doc_path)==null?void 0:I.split(".")[((s=(y=(j=l==null?void 0:l.docList)==null?void 0:j.doc_path)==null?void 0:y.split("."))==null?void 0:s.length)-1])=="pdf"||((_=(H=l==null?void 0:l.docList)==null?void 0:H.doc_path)==null?void 0:_.split(".")[((v=(O=(b=l==null?void 0:l.docList)==null?void 0:b.doc_path)==null?void 0:O.split("."))==null?void 0:v.length)-1])=="pdf/")&&e.jsx("div",{className:"flex-shrink-0 text-[28px]",children:e.jsx(_e,{})}),(((h=(B=l==null?void 0:l.docList)==null?void 0:B.doc_path)==null?void 0:h.split(".")[((q=(R=(u=l==null?void 0:l.docList)==null?void 0:u.doc_path)==null?void 0:R.split("."))==null?void 0:q.length)-1])=="jpg"||((P=(J=l==null?void 0:l.docList)==null?void 0:J.doc_path)==null?void 0:P.split(".")[((U=(S=(V=l==null?void 0:l.docList)==null?void 0:V.doc_path)==null?void 0:S.split("."))==null?void 0:U.length)-1])=="jpg/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:a((G=l==null?void 0:l.docList)==null?void 0:G.id)?Q:(E=l==null?void 0:l.docList)==null?void 0:E.doc_path,onError:()=>N(m=>{var c;return[...m,(c=l==null?void 0:l.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),(((Z=(W=l==null?void 0:l.docList)==null?void 0:W.doc_path)==null?void 0:Z.split(".")[((Y=(K=($=l==null?void 0:l.docList)==null?void 0:$.doc_path)==null?void 0:K.split("."))==null?void 0:Y.length)-1])=="jpeg"||((t=(k=l==null?void 0:l.docList)==null?void 0:k.doc_path)==null?void 0:t.split(".")[((z=(A=(L=l==null?void 0:l.docList)==null?void 0:L.doc_path)==null?void 0:A.split("."))==null?void 0:z.length)-1])=="jpeg/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:a((x=l==null?void 0:l.docList)==null?void 0:x.id)?Q:(r=l==null?void 0:l.docList)==null?void 0:r.doc_path,onError:()=>N(m=>{var c;return[...m,(c=l==null?void 0:l.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),(((te=(w=l==null?void 0:l.docList)==null?void 0:w.doc_path)==null?void 0:te.split(".")[((se=(ee=(p=l==null?void 0:l.docList)==null?void 0:p.doc_path)==null?void 0:ee.split("."))==null?void 0:se.length)-1])=="png"||((re=(le=l==null?void 0:l.docList)==null?void 0:le.doc_path)==null?void 0:re.split(".")[((xe=(de=(ae=l==null?void 0:l.docList)==null?void 0:ae.doc_path)==null?void 0:de.split("."))==null?void 0:xe.length)-1])=="png/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:a((ce=l==null?void 0:l.docList)==null?void 0:ce.id)?Q:(ie=l==null?void 0:l.docList)==null?void 0:ie.doc_path,onError:()=>N(m=>{var c;return[...m,(c=l==null?void 0:l.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})}),e.jsxs("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:[((ne=l==null?void 0:l.docList)==null?void 0:ne.doc_code)=="PHOTOGRAPH"&&e.jsx("p",{className:"whitespace-no-wrap"}),((me=l==null?void 0:l.docList)==null?void 0:me.doc_code)!="PHOTOGRAPH"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"whitespace-no-wrap",children:((oe=l==null?void 0:l.docList)==null?void 0:oe.verify_status)==0&&e.jsx(e.Fragment,{children:"Pending"})}),e.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((fe=l==null?void 0:l.docList)==null?void 0:fe.verify_status)==1&&e.jsx(e.Fragment,{children:"Verified"})}),e.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:((be=l==null?void 0:l.docList)==null?void 0:be.verify_status)==2&&e.jsx(e.Fragment,{children:"Rejected"})})]})]}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:d((he=l==null?void 0:l.docList)==null?void 0:he.remarks)})]})})}const Re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};ve.setAppElement("#root");function Ue(){var k,L,A,z;ue("SAF Application Details");const{api_getAppicationFullDetail:l,api_getStaticSafDetails:g,verificationList:N}=He(),{t:a}=Se(),{getDocumentList:T}=Pe(),[n,C]=i.useState(),[M,j]=i.useState(!1),{id:y}=Ee(),[s,I]=i.useState(),[H,b]=i.useState(!1),[O,v]=i.useState(!1),[_,B]=i.useState(""),[u,R]=i.useState(""),[q,h]=i.useState(!1),[J,V]=i.useState(null),[S,U]=i.useState(!1),P=ke(),G=()=>v(!0),E=()=>v(!1),W=()=>{};i.useEffect(()=>{Y(),Z(),$()},[]);const $=()=>{j(!0),console.log("before document fetch ",y);let t={applicationId:y};console.log("before fetching upload document...",t),X.post(T,t,D()).then(x=>{var r;console.log("document list at saf application details ",x),C((r=x==null?void 0:x.data)==null?void 0:r.data),j(!1)}).catch(x=>{console.log("error at saf application details ",x),j(!1)})},K=(t,x,r)=>{console.log("incoming doc url modal => ",t),B(t),R(x),G(),U(r)},Y=()=>{b(!1),h(!0),X.post(g,{applicationId:y},D()).then(function(t){var x,r,w;console.log("get saf data in saf view ...",(x=t==null?void 0:t.data)==null?void 0:x.data),(r=t==null?void 0:t.data)!=null&&r.status?I((w=t==null?void 0:t.data)==null?void 0:w.data):b(!0),h(!1)}).catch(function(t){console.log("saf data error...",t),b(!0),h(!1)})},Z=()=>{b(!1),h(!0),X.post(N,{applicationId:y},D()).then(function(t){var x,r,w;console.log("get saf data in saf view ...",(x=t==null?void 0:t.data)==null?void 0:x.data),(r=t==null?void 0:t.data)!=null&&r.status?V((w=t==null?void 0:t.data)==null?void 0:w.data):b(!0),h(!1)}).catch(function(t){console.log("saf data error...",t),b(!0),h(!1)})};return q?e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx("div",{className:"min-h-screen"})]}):H?e.jsx(Ae,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(ze,{errorMsg:"Bug in TransactionHistoryFactory",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"w-full mx-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg",children:[e.jsx("div",{className:"",children:e.jsx(Oe,{title:e.jsx("div",{className:"",children:(s==null?void 0:s.current_role_name2)!==""&&e.jsx("span",{className:"text-sm py-1 justify-center items-center font-semibold ",children:e.jsxs("span",{className:"bg-green-200 text-black px-4 py-1 flex justify-center items-center",children:[e.jsx(Te,{className:"inline mr-2"})," ",a("mainSafDetailsEntryPage.currentLevel.label")," - ",s==null?void 0:s.current_role_name2]})})}),type:"application",id:y,safNo:"",active:"property",btc:s==null?void 0:s.parked})}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(o,{className:"inline"}),a("mainSafDetailsEntryPage.basicDetails.label")," "]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.saf_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.applicationNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.old_ward_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.oldWardNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.ownershipType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[(s==null?void 0:s.pt_no)&&e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.pt_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.ptNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.holdingType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainNewAssessmentPage.category.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.zone_mstr_id)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.zone.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[d(s==null?void 0:s.apartment_name)," , ",d(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.apartmentName.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[d(s==null?void 0:s.apartment_code)," , ",d(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.apartmentCode.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                      "]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"}),a("mainSafDetailsEntryPage.propertyAddressAndDetails.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.khata_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.khataNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.plotNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.village_mauja_name)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",a("mainSafDetailsEntryPage.villageMaujaName.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.area_of_plot)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",a("mainSafDetailsEntryPage.areaOfPlot.label")]})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[d(s==null?void 0:s.prop_address)," , ",d(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.propertyAddress.label")})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.corr_address)=="NA"&&d((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[d(s==null?void 0:s.corr_address)=="NA"&&d(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[d(s==null?void 0:s.corr_address),", ",d(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.correspondingAddress.label")})]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(o,{className:"inline"}),a("mainSafDetailsEntryPage.ownerDetails.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white ",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.ownerName.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainNewAssessmentPage.ownerNameMarathi.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.gender.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.dob.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[" ",a("mainSafDetailsEntryPage.guardianName.label")]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[" ",a("mainNewAssessmentPage.guardianNameMarathi.label")]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.relation.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[a("mainSafDetailsEntryPage.mobileNo.label"),"."]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.aadhar.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[a("mainSafDetailsEntryPage.pan.label")," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[a("mainSafDetailsEntryPage.email.label")," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[a("mainSafDetailsEntryPage.isArmedForce.label")," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[a("mainSafDetailsEntryPage.isSpeciallyAbled.label"),"? "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(k=s==null?void 0:s.owners)==null?void 0:k.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.owner_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:f(t==null?void 0:t.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.guardian_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.is_specially_abled)})]}))})})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"})," ",a("mainSafDetailsEntryPage.electricityDetails.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.electricityKNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.elect_acc_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.accNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.elect_bind_book_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.bindBookNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.electricityConsumerCategory.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"})," ",a("mainSafDetailsEntryPage.buildingDetails.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.building_plan_approval_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.buildingPlanApprovalNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:f(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.buildingPlanApprovalDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"}),a("mainSafDetailsEntryPage.waterDetails.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.water_conn_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.waterConsumerNo.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:f(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:a("mainSafDetailsEntryPage.waterConnectionDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 ",children:[e.jsx(o,{className:"inline"})," ",a("mainSafDetailsEntryPage.floorDetails.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left border text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[a("mainSafDetailsEntryPage.floor.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.usageType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.occupancyType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.constructionType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.builtUpArea.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.fromDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:a("mainSafDetailsEntryPage.uptoDate.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(L=s==null?void 0:s.floors)==null?void 0:L.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d(t==null?void 0:t.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:f(t==null?void 0:t.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:f(t==null?void 0:t.date_upto)})]}))})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(o,{className:"inline"}),a("mainSafDetailsEntryPage.additionalDetails.label")," "]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.is_mobile_tower)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.propertyHasMobileTowers.label")," ?"]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[d(s==null?void 0:s.is_hoarding_board)," "]}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.propertyHasHoardingBoards.label"),"  ?"]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:d(s==null?void 0:s.is_petrol_pump)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.isPropertyAPetrolPump.label"),"  ?"]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:d(s==null?void 0:s.is_water_harvesting)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[a("mainSafDetailsEntryPage.rainwaterHarvestingProvision.label"),"  ?"]})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&F(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&"Mobile Tower Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&F(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&"Hoarding Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&F(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&"Petrol Pump Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&f(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&"Rainwater harvesting Construction Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&f(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&"Mobile Tower Installation Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&f(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&"Hoarding Installation Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&f(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&"Petrol Pump Construction Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsxs("div",{className:"container mx-auto mt-10  px-4  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(o,{className:"inline"}),a("mainSafDetailsEntryPage.documentList.label")," "]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:a("mainSafDetailsEntryPage.documentName.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:a("mainSafDetailsEntryPage.view.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:a("mainSafDetailsEntryPage.status.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:a("mainSafDetailsEntryPage.remarks.label")})]})}),e.jsx("tbody",{children:n&&e.jsxs(e.Fragment,{children:[(n==null?void 0:n.length)==0&&!M&&e.jsx("tr",{className:"mt-10 py-20",children:e.jsx("td",{colSpan:5,className:"text-center",children:e.jsxs("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:[" ",a("mainSafDetailsEntryPage.noDocumentFound.label")," !!"]})})}),n==null?void 0:n.map((t,x)=>e.jsx(Be,{openModal:K,docList:t,index:x}))]})})]})})})})]})]}),((A=s==null?void 0:s.memoDtls)==null?void 0:A.length)!=0&&e.jsxs("div",{className:"container mx-auto mt-10  px-5  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(o,{className:"inline"})," ",a("mainSafDetailsEntryPage.memoDetails.label")," "]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsxs("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:[a("mainSafDetailsEntryPage.memoNo.label"),"."]}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.generatedOn.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.generatedBy.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.arv.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.quarterlyTax.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.effectFrom.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.memoType.label")}),e.jsxs("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:[a("mainSafDetailsEntryPage.holdingPTNo.label"),"."]}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:a("mainSafDetailsEntryPage.action.label")})]})}),e.jsx("tbody",{children:(z=s==null?void 0:s.memoDtls)==null?void 0:z.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.memo_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:f(t==null?void 0:t.memo_date)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.generated_by)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.quarterly_tax)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[d(t==null?void 0:t.from_qtr),"/",d(t==null?void 0:t.from_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.memo_type)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.pt_no)=="NA"?d(t==null?void 0:t.holding_no):d(t==null?void 0:t.pt_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("button",{onClick:()=>{(t==null?void 0:t.memo_type)=="SAM"?P(`/sam-reciept/${t==null?void 0:t.id}`):P(`/fam-reciept/${t==null?void 0:t.id}`)},type:"button",className:Ce,children:["View",a("mainSafDetailsEntryPage.view.label")]})})]}))})]})})})})]}),e.jsx("div",{className:Me}),e.jsx(ve,{isOpen:O,onAfterOpen:W,onRequestClose:E,style:Re,contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[e.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:E,children:e.jsx(Ie,{})}),S==!0||S=="true"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[e.jsxs("div",{className:"border-r-2 border-gray-200 pr-4",children:[a("mainSafDetailsEntryPage.error.label")," "]}),e.jsxs("div",{className:"pl-4",children:[" ",a("mainSafDetailsEntryPage.documentNotVisible.label")]})]})}):e.jsxs(e.Fragment,{children:[u=="pdf"&&e.jsx(e.Fragment,{children:e.jsx("iframe",{className:"w-full h-full",src:_,frameborder:"0"})}),u!="pdf"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:e.jsx("img",{src:_,alt:"",srcset:"",className:" "})})})]})]})})]})}export{Ue as default};
