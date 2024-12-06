import{j as e,b,p as m,I as Ie}from"./index-JPdk8MYx.js";import{d as h,u as Oe}from"./router-vSHQYlWC.js";import{r}from"./tailwind-nPCoKmcy.js";import{P as Fe}from"./index-ZOEHJXjh.js";import"./index.esm-YegZWto1.js";import"./TranslateField-ZxvkbHLJ.js";import{M as Me}from"./MyPDFViewer-9SsQuocH.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";/* empty css              */import"./reactPdfViewerCore-YaXm6yh6.js";import"./reactPdfViewerDefaultLayout-8EeuxrVy.js";function Le({open:n,setOpen:o,url:c,ext:i,title:j}){const t=()=>o(!n);return e.jsxs(e.Fragment,{children:[n&&e.jsx("div",{onClick:t,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(n?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:j}),e.jsxs("button",{onClick:t,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),i==="pdf"?e.jsx(Me,{fileUrl:c}):e.jsx("img",{src:c,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(r.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:t,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Close"})})})})]})})})]})}function Je(){var N,p,u,g,v,y,f,_,w,C,k,P,B,A,I,O,F,M,L,T,E,Y,z,R,V,W,G,U,H,q,K,$,Z,J,Q,X,D,S,ee,se,de,re,le,ae,xe,ne,te,oe,ce,he,ie,je,be,me,Ne,pe,ue,ge,ve,ye,fe,_e,we,Ce,ke,Pe,Be;const[n,o]=h.useState(!1),[c,i]=h.useState(""),[j,t]=h.useState(""),{id:l}=Oe(),s=b({api:m.staticSafDetail,config:{applicationId:l},value:[l],options:{enabled:!!l}}),x=b({api:m.safUploadedDoc,config:{applicationId:l},value:[l],options:{enabled:!!l}});return b({api:m.verificationList,config:{applicationId:l},value:[l],options:{enabled:!!l}}),s!=null&&s.isLoading?e.jsx(Ie,{}):e.jsxs(Fe,{title:"Saf Property Details",children:[e.jsx(Le,{ext:c,url:j,open:n,setOpen:o,title:"View Document"}),e.jsxs("div",{className:"p-4 ",children:[e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Application No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(p=(N=s==null?void 0:s.data)==null?void 0:N.data)==null?void 0:p.saf_no)!=null?u:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Holding No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(y=(v=(g=s==null?void 0:s.data)==null?void 0:g.data)==null?void 0:v.holding_no)!=null?y:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Zone: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(w=(_=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:_.zone)!=null?w:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Ward No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(k=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:k.new_ward_no)!=null?P:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Date of Purchase: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((A=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:A.land_occupation_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Ownership Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((O=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:O.ownership_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Property Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((M=(F=s==null?void 0:s.data)==null?void 0:F.data)==null?void 0:M.property_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Holding Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((T=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:T.holding_type)||"-"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Property Address & Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Survey No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((Y=(E=s==null?void 0:s.data)==null?void 0:E.data)==null?void 0:Y.khata_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Plot No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((R=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:R.plot_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mauja Name: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((W=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:W.village_mauja_name)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Area Of Plot (in Sq ft) :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((U=(G=s==null?void 0:s.data)==null?void 0:G.data)==null?void 0:U.area_of_plot)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Property Address: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((q=(H=s==null?void 0:s.data)==null?void 0:H.data)==null?void 0:q.prop_address)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Corresponding Address:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(($=(K=s==null?void 0:s.data)==null?void 0:K.data)==null?void 0:$.corr_address)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Owner Name"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Owner Name In Marathi"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Gender"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"DOB"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Guardian Name"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Guardian Name In Marathi"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Relation"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Mobile No."}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Aadhar"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Pan"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Email"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Is-Armed-Force"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Is-Specially-Abled?"})]})}),e.jsx("tbody",{children:(Q=(J=(Z=s==null?void 0:s.data)==null?void 0:Z.data)==null?void 0:J.owners)==null?void 0:Q.map((d,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:a+1}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.owner_name}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.owner_name_marathi}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.gender)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.dob)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.guardian_name)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.guardian_name_marathi}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.relation_type}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.mobile_no}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.aadhar_no}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.pan_no}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.email}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d!=null&&d.is_armed_force?"Yes":"No"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d!=null&&d.is_specially_abled?"Yes":"No"})]},a))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Electricity Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Electricity K. No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((D=(X=s==null?void 0:s.data)==null?void 0:X.data)==null?void 0:D.elect_consumer_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"ACC No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((ee=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:ee.elect_acc_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"BIND/BOOK No : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((de=(se=s==null?void 0:s.data)==null?void 0:se.data)==null?void 0:de.elect_bind_book_no)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Electricity Consumer Category:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((le=(re=s==null?void 0:s.data)==null?void 0:re.data)==null?void 0:le.elect_cons_category)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Water Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Water Consumer No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((xe=(ae=s==null?void 0:s.data)==null?void 0:ae.data)==null?void 0:xe.water_conn_no)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Water Connection Date :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((te=(ne=s==null?void 0:s.data)==null?void 0:ne.data)==null?void 0:te.water_conn_date)||"--"})})]})})]}),((ce=(oe=s==null?void 0:s.data)==null?void 0:oe.data)==null?void 0:ce.trade_license_no)!=""||((ie=(he=s==null?void 0:s.data)==null?void 0:he.data)==null?void 0:ie.trade_license_no)!=null?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Trade License Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"License No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:((be=(je=s==null?void 0:s.data)==null?void 0:je.data)==null?void 0:be.trade_license_no)||"--"})})]})})]})]}):null,e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Floor Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Floor"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Usage Type"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Occupancy Type"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Construction Type"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Built Up Area(Sq Ft)"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"From Date"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Upto Date"})]})}),e.jsx("tbody",{children:(pe=(Ne=(me=s==null?void 0:s.data)==null?void 0:me.data)==null?void 0:Ne.floors)==null?void 0:pe.map((d,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:a+1}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.floor_name}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.usage_type}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.occupancy_type)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.construction_type)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.builtup_area)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:d==null?void 0:d.date_from}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(d==null?void 0:d.date_upto)||"--"})]},a))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Additional Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Property has Mobile Tower(s) ?:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(ge=(ue=s==null?void 0:s.data)==null?void 0:ue.data)!=null&&ge.is_mobile_tower?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Property has Hoarding Board(s) ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(ye=(ve=s==null?void 0:s.data)==null?void 0:ve.data)!=null&&ye.is_hoarding_board?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Is property a Petrol Pump ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(_e=(fe=s==null?void 0:s.data)==null?void 0:fe.data)!=null&&_e.is_petrol_pump?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Rainwater harvesting provision ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(Ce=(we=s==null?void 0:s.data)==null?void 0:we.data)!=null&&Ce.is_water_harvesting?"Yes":"No"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Document List"})}),e.jsx(r.CardBody,{children:((ke=x==null?void 0:x.data)==null?void 0:ke.data.length)>0?(Be=(Pe=x==null?void 0:x.data)==null?void 0:Pe.data)==null?void 0:Be.map((d,a)=>{const Ae=d.doc_path.split(".").pop();return e.jsxs(h.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold",children:["Document Name(s) ?:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:d==null?void 0:d.doc_category})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Status : "})}),e.jsx("div",{children:e.jsx("h1",{className:"".concat((d==null?void 0:d.verify_status)==1?"text-green-600":"text-red-900"," text-xs font-semibold"),children:(d==null?void 0:d.verify_status)==1?"Verified":"Pending"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Remarks : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(d==null?void 0:d.remarks)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Document : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:e.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{i(Ae),t(d==null?void 0:d.doc_path),o(!0)},children:"View"})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]},a+1)}):e.jsx("div",{className:"text-center ",children:e.jsx("h1",{className:"text-xs font-semibold text-red-900",children:"No Document Found"})})})]})]})]})}export{Je as default};
