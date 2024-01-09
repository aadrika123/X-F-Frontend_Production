import{j as e,r,R as h,m as fe,l as i,p as m}from"./index-Zx9x37GE.js";import{P as we}from"./index-bDHS_Kvn.js";import"./index.esm-T940qXBK.js";import{l as _e,a as ye}from"./index-qi2W2dE_.js";import"./pdf-n7_l9hbz.js";function Ce({fileUrl:a,isPlugIn:o}){const c=_e.defaultLayoutPlugin();return e.jsx(ye.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js",children:e.jsx(ye.Viewer,{httpHeaders:{"Access-Control-Allow-Origin":"*"},fileUrl:a,plugins:o?[c]:[]})})}function ke({open:a,setOpen:o,url:c}){const x=()=>o(!a),l=d=>d.split(".").pop();return e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{onClick:x,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(a?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Naksha"}),e.jsxs("button",{onClick:x,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),l(c)==="pdf"?e.jsx(Ce,{fileUrl:"http:\\/\\/192.168.29.133:8087\\/Uploads\\/Property\\/Saf\\/1704284851-387-Layout sanction Map.pdf"}):e.jsx("img",{src:c,alt:"Naksha",className:"w-full h-full"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(r.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:x,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Ok"})})})})]})})})]})}function Ee(){var j,b,N,p,u,g,v,y,f,w,_,C,k,P,A,B,O,I,E,F,M,L,T,R,U,V,W,Y,z,G,H,$,q,K,Z,J,Q,X,D,S,ee,se,de,re,le,ae,ne,te,oe,ce,xe,he,ie,me,je,be,Ne,pe,ue,ge,ve;const[a,o]=h.useState(!1),[c,x]=h.useState(""),{id:l}=fe(),d=i({api:m.staticSafDetail,config:{applicationId:l},value:[l],options:{enabled:!!l}}),n=i({api:m.safUploadedDoc,config:{applicationId:l},value:[l],options:{enabled:!!l}});return i({api:m.verificationList,config:{applicationId:l},value:[l],options:{enabled:!!l}}),e.jsxs(we,{title:"Saf Property Details",children:[e.jsx(ke,{open:a,setOpen:o,url:c}),e.jsxs("div",{className:"p-4 ",children:[e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Application No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(N=(b=(j=d==null?void 0:d.data)==null?void 0:j.data)==null?void 0:b.saf_no)!=null?N:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Holding No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(g=(u=(p=d==null?void 0:d.data)==null?void 0:p.data)==null?void 0:u.holding_no)!=null?g:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Zone: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(f=(y=(v=d==null?void 0:d.data)==null?void 0:v.data)==null?void 0:y.zone)!=null?f:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ward No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(C=(_=(w=d==null?void 0:d.data)==null?void 0:w.data)==null?void 0:_.new_ward_no)!=null?C:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Date of Purchase: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((P=(k=d==null?void 0:d.data)==null?void 0:k.data)==null?void 0:P.land_occupation_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((B=(A=d==null?void 0:d.data)==null?void 0:A.data)==null?void 0:B.ownership_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((I=(O=d==null?void 0:d.data)==null?void 0:O.data)==null?void 0:I.property_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Holding Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((F=(E=d==null?void 0:d.data)==null?void 0:E.data)==null?void 0:F.holding_type)||"-"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Address & Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Survey No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((L=(M=d==null?void 0:d.data)==null?void 0:M.data)==null?void 0:L.khata_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Plot No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((R=(T=d==null?void 0:d.data)==null?void 0:T.data)==null?void 0:R.plot_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Mauja Name: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((V=(U=d==null?void 0:d.data)==null?void 0:U.data)==null?void 0:V.village_mauja_name)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Area Of Plot (in Sq ft) :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((Y=(W=d==null?void 0:d.data)==null?void 0:W.data)==null?void 0:Y.area_of_plot)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property Address: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((G=(z=d==null?void 0:d.data)==null?void 0:z.data)==null?void 0:G.prop_address)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Corresponding Address:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(($=(H=d==null?void 0:d.data)==null?void 0:H.data)==null?void 0:$.corr_address)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name In Marathi"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Gender"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DOB"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name In Marathi"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Relation"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Mobile No."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Aadhar"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Pan"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Email"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Armed-Force"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Specially-Abled?"}),e.jsx("td",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Action"})]})}),e.jsx("tbody",{children:(Z=(K=(q=d==null?void 0:d.data)==null?void 0:q.data)==null?void 0:K.owners)==null?void 0:Z.map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.owner_name}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.owner_name_marathi}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.gender)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.dob)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.guardian_name)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.guardian_name_marathi}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.relation_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.mobile_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.aadhar_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.pan_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.email}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s!=null&&s.is_armed_force?"Yes":"No"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s!=null&&s.is_specially_abled?"Yes":"No"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.jsx("button",{className:"text-sm text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{handleEdit(s)},children:"Edit"})})]},t))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Electricity Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Electricity K. No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((Q=(J=d==null?void 0:d.data)==null?void 0:J.data)==null?void 0:Q.elect_consumer_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"ACC No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((D=(X=d==null?void 0:d.data)==null?void 0:X.data)==null?void 0:D.elect_acc_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"BIND/BOOK No : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((ee=(S=d==null?void 0:d.data)==null?void 0:S.data)==null?void 0:ee.elect_bind_book_no)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Electricity Consumer Category:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((de=(se=d==null?void 0:d.data)==null?void 0:se.data)==null?void 0:de.elect_cons_category)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Water Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Water Consumer No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((le=(re=d==null?void 0:d.data)==null?void 0:re.data)==null?void 0:le.water_conn_no)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Water Connection Date :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((ne=(ae=d==null?void 0:d.data)==null?void 0:ae.data)==null?void 0:ne.water_conn_date)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Floor Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Floor"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Usage Type"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Occupancy Type"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Construction Type"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Built Up Area(Sq Ft)"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"From Date"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Upto Date"})]})}),e.jsx("tbody",{children:(ce=(oe=(te=d==null?void 0:d.data)==null?void 0:te.data)==null?void 0:oe.floors)==null?void 0:ce.map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.floor_name}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.usage_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.occupancy_type)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.construction_type)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.builtup_area)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.date_from}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.date_upto)||"--"})]},t))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Additional Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Property has Mobile Tower(s) ?:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(he=(xe=d==null?void 0:d.data)==null?void 0:xe.data)!=null&&he.is_mobile_tower?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Property has Hoarding Board(s) ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(me=(ie=d==null?void 0:d.data)==null?void 0:ie.data)!=null&&me.is_hoarding_board?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Is property a Petrol Pump ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(be=(je=d==null?void 0:d.data)==null?void 0:je.data)!=null&&be.is_petrol_pump?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Rainwater harvesting provision ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(pe=(Ne=d==null?void 0:d.data)==null?void 0:Ne.data)!=null&&pe.is_water_harvesting?"Yes":"No"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Document List"})}),e.jsx(r.CardBody,{children:((ue=n==null?void 0:n.data)==null?void 0:ue.data.length)>0?(ve=(ge=n==null?void 0:n.data)==null?void 0:ge.data)==null?void 0:ve.map((s,t)=>e.jsxs(h.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Document Name(s) ?:"," "]})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm",children:[s==null?void 0:s.doc_code,e.jsxs("small",{children:["(",s==null?void 0:s.doc_category,")"]})]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Status : "})}),e.jsx("div",{children:e.jsx("h1",{className:"".concat((s==null?void 0:s.current_status)==1?"text-green-600":"text-red-900"," text-sm font-semibold"),children:(s==null?void 0:s.current_status)==1?"Verified":"Pending"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Remarks : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(s==null?void 0:s.remarks)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Document : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:e.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{o(!0),x(s==null?void 0:s.doc_path)},children:"View"})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]},t)):e.jsx("div",{className:"text-center ",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900",children:"No Document Found"})})})]})]})]})}export{Ee as default};
