import{r as a,j as e,a0 as x,Y as _e,br as Y,M as ve,ac as ue,bB as ke,u as Le,a as Ae,A as J,t as X,ad as ze,S as Se,bz as Pe,bC as Te,aA as o,w as n,a9 as D,z as Ce,bD as Me,bs as Oe,f as Ie}from"./index-808f7dc2.js";import{T as Be}from"./TopTabs-96b14a8f.js";function Ee(d){var m,C,M,y,w,s,O,I,f,B,v,_,E,u,R,H,h,Q,V,k,W,L,G,A,U,q,K,Z,$,z,S,P,T,t,r,l,j,F,p,ee,se,te,de,xe,re,le,ce,ae,me,ie,oe,ne,fe,he,we;const[N,g]=a.useState([]),b=i=>N==null?void 0:N.some(c=>c==i);return e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(d==null?void 0:d.index)+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[x((m=d==null?void 0:d.docList)==null?void 0:m.doc_code)," ",((C=d==null?void 0:d.docList)==null?void 0:C.owner_name)!=""&&e.jsxs("span",{className:"font-semibold italic text-gray-700",children:["(",(M=d==null?void 0:d.docList)==null?void 0:M.owner_name,")"]})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm cursor-pointer",onClick:()=>{var i,c,je,be,ye,Ne,ge;return d.openModal((i=d==null?void 0:d.docList)==null?void 0:i.doc_path,(Ne=(c=d==null?void 0:d.docList)==null?void 0:c.doc_path)==null?void 0:Ne.split(".")[((ye=(be=(je=d==null?void 0:d.docList)==null?void 0:je.doc_path)==null?void 0:be.split("."))==null?void 0:ye.length)-1],b((ge=d==null?void 0:d.docList)==null?void 0:ge.id))},children:e.jsxs("div",{className:"flex items-center",children:[(((I=(y=d==null?void 0:d.docList)==null?void 0:y.doc_path)==null?void 0:I.split(".")[((O=(s=(w=d==null?void 0:d.docList)==null?void 0:w.doc_path)==null?void 0:s.split("."))==null?void 0:O.length)-1])=="pdf"||((E=(f=d==null?void 0:d.docList)==null?void 0:f.doc_path)==null?void 0:E.split(".")[((_=(v=(B=d==null?void 0:d.docList)==null?void 0:B.doc_path)==null?void 0:v.split("."))==null?void 0:_.length)-1])=="pdf/")&&e.jsx("div",{className:"flex-shrink-0 text-[28px]",children:e.jsx(_e,{})}),(((Q=(u=d==null?void 0:d.docList)==null?void 0:u.doc_path)==null?void 0:Q.split(".")[((h=(H=(R=d==null?void 0:d.docList)==null?void 0:R.doc_path)==null?void 0:H.split("."))==null?void 0:h.length)-1])=="jpg"||((G=(V=d==null?void 0:d.docList)==null?void 0:V.doc_path)==null?void 0:G.split(".")[((L=(W=(k=d==null?void 0:d.docList)==null?void 0:k.doc_path)==null?void 0:W.split("."))==null?void 0:L.length)-1])=="jpg/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:b((A=d==null?void 0:d.docList)==null?void 0:A.id)?Y:(U=d==null?void 0:d.docList)==null?void 0:U.doc_path,onError:()=>g(i=>{var c;return[...i,(c=d==null?void 0:d.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),(((z=(q=d==null?void 0:d.docList)==null?void 0:q.doc_path)==null?void 0:z.split(".")[(($=(Z=(K=d==null?void 0:d.docList)==null?void 0:K.doc_path)==null?void 0:Z.split("."))==null?void 0:$.length)-1])=="jpeg"||((r=(S=d==null?void 0:d.docList)==null?void 0:S.doc_path)==null?void 0:r.split(".")[((t=(T=(P=d==null?void 0:d.docList)==null?void 0:P.doc_path)==null?void 0:T.split("."))==null?void 0:t.length)-1])=="jpeg/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:b((l=d==null?void 0:d.docList)==null?void 0:l.id)?Y:(j=d==null?void 0:d.docList)==null?void 0:j.doc_path,onError:()=>g(i=>{var c;return[...i,(c=d==null?void 0:d.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),(((te=(F=d==null?void 0:d.docList)==null?void 0:F.doc_path)==null?void 0:te.split(".")[((se=(ee=(p=d==null?void 0:d.docList)==null?void 0:p.doc_path)==null?void 0:ee.split("."))==null?void 0:se.length)-1])=="png"||((ce=(de=d==null?void 0:d.docList)==null?void 0:de.doc_path)==null?void 0:ce.split(".")[((le=(re=(xe=d==null?void 0:d.docList)==null?void 0:xe.doc_path)==null?void 0:re.split("."))==null?void 0:le.length)-1])=="png/")&&e.jsx("div",{className:"flex-shrink-0 px-1 py-2",children:e.jsx("img",{src:b((ae=d==null?void 0:d.docList)==null?void 0:ae.id)?Y:(me=d==null?void 0:d.docList)==null?void 0:me.doc_path,onError:()=>g(i=>{var c;return[...i,(c=d==null?void 0:d.docList)==null?void 0:c.id]}),className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]})}),e.jsxs("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:[((ie=d==null?void 0:d.docList)==null?void 0:ie.doc_code)=="PHOTOGRAPH"&&e.jsx("p",{className:"whitespace-no-wrap"}),((oe=d==null?void 0:d.docList)==null?void 0:oe.doc_code)!="PHOTOGRAPH"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"whitespace-no-wrap",children:((ne=d==null?void 0:d.docList)==null?void 0:ne.verify_status)==0&&e.jsx(e.Fragment,{children:"Pending"})}),e.jsx("p",{className:"text-green-500 whitespace-no-wrap",children:((fe=d==null?void 0:d.docList)==null?void 0:fe.verify_status)==1&&e.jsx(e.Fragment,{children:"Verified"})}),e.jsx("p",{className:"text-red-500 whitespace-no-wrap",children:((he=d==null?void 0:d.docList)==null?void 0:he.verify_status)==2&&e.jsx(e.Fragment,{children:"Rejected"})})]})]}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:x((we=d==null?void 0:d.docList)==null?void 0:we.remarks)})]})})}const Re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};ve.setAppElement("#root");function We(){var z,S,P,T;ue("SAF Application Details");const{api_getAppicationFullDetail:d,api_getStaticSafDetails:N,verificationList:g}=Ie(),{getDocumentList:b}=ke(),[m,C]=a.useState(),[M,y]=a.useState(!1),{id:w}=Le(),[s,O]=a.useState(),[I,f]=a.useState(!1),[B,v]=a.useState(!1),[_,E]=a.useState(""),[u,R]=a.useState(""),[H,h]=a.useState(!1),[Q,V]=a.useState(null),[k,W]=a.useState(!1),L=Ae(),G=()=>v(!0),A=()=>v(!1),U=()=>{};a.useEffect(()=>{Z(),$(),q()},[]);const q=()=>{y(!0),console.log("before document fetch ",w);let t={applicationId:w};console.log("before fetching upload document...",t),J.post(b,t,X()).then(r=>{var l;console.log("document list at saf application details ",r),C((l=r==null?void 0:r.data)==null?void 0:l.data),y(!1)}).catch(r=>{console.log("error at saf application details ",r),y(!1)})},K=(t,r,l)=>{console.log("incoming doc url modal => ",t),E(t),R(r),G(),W(l)},Z=()=>{f(!1),h(!0),J.post(N,{applicationId:w},X()).then(function(t){var r,l,j;console.log("get saf data in saf view ...",(r=t==null?void 0:t.data)==null?void 0:r.data),(l=t==null?void 0:t.data)!=null&&l.status?O((j=t==null?void 0:t.data)==null?void 0:j.data):f(!0),h(!1)}).catch(function(t){console.log("saf data error...",t),f(!0),h(!1)})},$=()=>{f(!1),h(!0),J.post(g,{applicationId:w},X()).then(function(t){var r,l,j;console.log("get saf data in saf view ...",(r=t==null?void 0:t.data)==null?void 0:r.data),(l=t==null?void 0:t.data)!=null&&l.status?V((j=t==null?void 0:t.data)==null?void 0:j.data):f(!0),h(!1)}).catch(function(t){console.log("saf data error...",t),f(!0),h(!1)})};return H?e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx("div",{className:"min-h-screen"})]}):I?e.jsx(Se,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(Pe,{errorMsg:"Bug in TransactionHistoryFactory",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"w-full mx-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg",children:[e.jsx("div",{className:"",children:e.jsx(Be,{title:e.jsx("div",{className:"",children:(s==null?void 0:s.current_role_name2)!==""&&e.jsx("span",{className:"text-sm py-1 justify-center items-center font-semibold ",children:e.jsxs("span",{className:"bg-green-200 text-black px-4 py-1 flex justify-center items-center",children:[e.jsx(Te,{className:"inline mr-2"}),"Current Level - ",s==null?void 0:s.current_role_name2]})})}),type:"application",id:w,safNo:"",active:"property",btc:s==null?void 0:s.parked})}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(o,{className:"inline"})," Basic Details"]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.saf_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Application No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.old_ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Old Ward No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-lg",children:x(s==null?void 0:s.old_ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[(s==null?void 0:s.pt_no)&&e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.pt_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"PT No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Holding Type"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.zone_mstr_id)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[x(s==null?void 0:s.apartment_name)," , ",x(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Apartment Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[x(s==null?void 0:s.apartment_code)," , ",x(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Apartment Code"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                          ",e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),"                      "]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"})," Property Address & Details"]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Khata No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Plot No"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Village/Mauja Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Area of Plot(decimal)"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.road_width)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Road Width(ft)"})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[x(s==null?void 0:s.prop_address)," , ",x(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property Address"})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.corr_address)=="NA"&&x((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[x(s==null?void 0:s.corr_address)=="NA"&&x(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[x(s==null?void 0:s.corr_address),", ",x(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Corresponding Address"})]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(o,{className:"inline"})," Owner Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white ",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Owner Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Gender"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"DOB"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Guardian Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Relation"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Mobile No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Aadhar"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"PAN "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"email "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Is-Armed-Force "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Is-Specially-Abled? "})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(z=s==null?void 0:s.owners)==null?void 0:z.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:n(t==null?void 0:t.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.is_specially_abled)})]}))})})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"})," Electricity Details"]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Electricity K. No"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"ACC No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"BIND/BOOK No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Electricity Consumer Category"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"})," Building Details"]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.building_plan_approval_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Building Plan Approval No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:n(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Building Plan Approval Date"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(o,{className:"inline"})," Water Details"]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.water_conn_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Water Consumer No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Water Connection Date"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 ",children:[e.jsx(o,{className:"inline"})," Floor Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left border text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Floor "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Usage Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Occupancy Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Construction Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Built Up Area(sqt)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"From Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Upto Date"})]})}),e.jsx("tbody",{className:"text-sm",children:(S=s==null?void 0:s.floors)==null?void 0:S.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x(t==null?void 0:t.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:n(t==null?void 0:t.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:n(t==null?void 0:t.date_upto)})]}))})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(o,{className:"inline"})," Additional Details"]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.is_mobile_tower)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[x(s==null?void 0:s.is_hoarding_board)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:x(s==null?void 0:s.is_petrol_pump)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:x(s==null?void 0:s.is_water_harvesting)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&D(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&"Mobile Tower Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&D(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&"Hoarding Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&D(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&"Petrol Pump Area"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&n(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&"Rainwater harvesting Construction Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&n(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&"Mobile Tower Installation Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&n(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&"Hoarding Installation Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&n(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&"Petrol Pump Construction Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsxs("div",{className:"container mx-auto mt-10  px-4  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(o,{className:"inline"})," Document List"]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"View"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"Status"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm capitalize",children:"Remarks"})]})}),e.jsx("tbody",{children:m&&e.jsxs(e.Fragment,{children:[(m==null?void 0:m.length)==0&&!M&&e.jsx("tr",{className:"mt-10 py-20",children:e.jsx("td",{colSpan:5,className:"text-center",children:e.jsx("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),m==null?void 0:m.map((t,r)=>e.jsx(Ee,{openModal:K,docList:t,index:r}))]})})]})})})})]})]}),((P=s==null?void 0:s.memoDtls)==null?void 0:P.length)!=0&&e.jsxs("div",{className:"container mx-auto mt-10  px-5  rounded-lg",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(o,{className:"inline"})," Memo Details"]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Memo No."}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Generated On"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Generated By"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"ARV"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Quarterly Tax"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Effect From"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Memo type"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Holding/PT No."}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"Action"})]})}),e.jsx("tbody",{children:(T=s==null?void 0:s.memoDtls)==null?void 0:T.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.memo_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:n(t==null?void 0:t.memo_date)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.generated_by)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.quarterly_tax)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[x(t==null?void 0:t.from_qtr),"/",x(t==null?void 0:t.from_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.memo_type)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.pt_no)=="NA"?x(t==null?void 0:t.holding_no):x(t==null?void 0:t.pt_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>{(t==null?void 0:t.memo_type)=="SAM"?L(`/sam-reciept/${t==null?void 0:t.id}`):L(`/fam-reciept/${t==null?void 0:t.id}`)},type:"button",className:Ce,children:"View"})})]}))})]})})})})]}),e.jsx("div",{className:Me}),e.jsx(ve,{isOpen:B,onAfterOpen:U,onRequestClose:A,style:Re,contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-xl border-2 border-gray-200 bg-white md:ml-32 p-4 animate__animated animate__zoomIn animate__faster w-full md:w-[60vw] h-[80vh]",children:[e.jsx("div",{className:"absolute top-2 font-normal bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:A,children:e.jsx(Oe,{})}),k==!0||k=="true"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-gray-700 flex items-center justify-center text-gray-200",children:[e.jsx("div",{className:"border-r-2 border-gray-200 pr-4",children:"Error"}),e.jsx("div",{className:"pl-4",children:"Document not visible"})]})}):e.jsxs(e.Fragment,{children:[u=="pdf"&&e.jsx(e.Fragment,{children:e.jsx("iframe",{className:"w-full h-full",src:_,frameborder:"0"})}),u!="pdf"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-[77vh] overflow-auto flex flex-wrap items-center justify-center",children:e.jsx("img",{src:_,alt:"",srcset:"",className:" "})})})]})]})})]})}export{We as default};
