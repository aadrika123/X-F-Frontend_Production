import{j as e,a as h,p as i,f as ye}from"./index-kY_1vXrj.js";import{d as m,h as fe}from"./router-g9NwwHut.js";import{r}from"./tailwind-xMhOhnt0.js";import{P as _e}from"./index-CK_pnLs4.js";import"./index.esm-lGQm42K_.js";import"./index-KJUlVKah.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";function we({open:t,setOpen:x,url:o}){const c=()=>x(!t),l=s=>s.split(".").pop();return e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{onClick:c,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Document"}),e.jsxs("button",{onClick:c,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),l(o)=="pdf"?e.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(o,"&embedded=true"),width:"100%",height:"100%"}):e.jsx("img",{src:o,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(r.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:c,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Ok"})})})})]})})})]})}function Le(){var j,b,N,p,u,g,v,y,f,_,w,C,k,P,B,A,O,I,F,M,T,E,L,Y,z,R,W,G,V,H,U,$,q,K,Z,J,Q,X,D,S,ee,se,de,re,le,ae,ne,te,oe,ce,xe,he,ie,me,je,be,Ne,pe,ue,ge,ve;const[t,x]=m.useState(!1),[o,c]=m.useState(""),{id:l}=fe(),s=h({api:i.staticSafDetail,config:{applicationId:l},value:[l],options:{enabled:!!l}}),a=h({api:i.safUploadedDoc,config:{applicationId:l},value:[l],options:{enabled:!!l}});return h({api:i.verificationList,config:{applicationId:l},value:[l],options:{enabled:!!l}}),s!=null&&s.isLoading?e.jsx(ye,{}):e.jsxs(_e,{title:"Saf Property Details",children:[e.jsx(we,{open:t,setOpen:x,url:o}),e.jsxs("div",{className:"p-4 ",children:[e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Application No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(N=(b=(j=s==null?void 0:s.data)==null?void 0:j.data)==null?void 0:b.saf_no)!=null?N:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Holding No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(g=(u=(p=s==null?void 0:s.data)==null?void 0:p.data)==null?void 0:u.holding_no)!=null?g:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Zone: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(f=(y=(v=s==null?void 0:s.data)==null?void 0:v.data)==null?void 0:y.zone)!=null?f:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ward No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(C=(w=(_=s==null?void 0:s.data)==null?void 0:_.data)==null?void 0:w.new_ward_no)!=null?C:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Date of Purchase: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((P=(k=s==null?void 0:s.data)==null?void 0:k.data)==null?void 0:P.land_occupation_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((A=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:A.ownership_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((I=(O=s==null?void 0:s.data)==null?void 0:O.data)==null?void 0:I.property_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Holding Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((M=(F=s==null?void 0:s.data)==null?void 0:F.data)==null?void 0:M.holding_type)||"-"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Address & Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Survey No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((E=(T=s==null?void 0:s.data)==null?void 0:T.data)==null?void 0:E.khata_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Plot No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((Y=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:Y.plot_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Mauja Name: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((R=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:R.village_mauja_name)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Area Of Plot (in Sq ft) :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((G=(W=s==null?void 0:s.data)==null?void 0:W.data)==null?void 0:G.area_of_plot)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property Address: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((H=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:H.prop_address)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Corresponding Address:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(($=(U=s==null?void 0:s.data)==null?void 0:U.data)==null?void 0:$.corr_address)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name In Marathi"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Gender"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DOB"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name In Marathi"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Relation"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Mobile No."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Aadhar"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Pan"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Email"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Armed-Force"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Specially-Abled?"})]})}),e.jsx("tbody",{children:(Z=(K=(q=s==null?void 0:s.data)==null?void 0:q.data)==null?void 0:K.owners)==null?void 0:Z.map((d,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:n+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.owner_name}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.owner_name_marathi}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.gender)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.dob)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.guardian_name)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.guardian_name_marathi}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.relation_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.mobile_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.aadhar_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.pan_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.email}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d!=null&&d.is_armed_force?"Yes":"No"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d!=null&&d.is_specially_abled?"Yes":"No"})]},n))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Electricity Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Electricity K. No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((Q=(J=s==null?void 0:s.data)==null?void 0:J.data)==null?void 0:Q.elect_consumer_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"ACC No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((D=(X=s==null?void 0:s.data)==null?void 0:X.data)==null?void 0:D.elect_acc_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"BIND/BOOK No : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((ee=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:ee.elect_bind_book_no)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Electricity Consumer Category:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((de=(se=s==null?void 0:s.data)==null?void 0:se.data)==null?void 0:de.elect_cons_category)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Water Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Water Consumer No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((le=(re=s==null?void 0:s.data)==null?void 0:re.data)==null?void 0:le.water_conn_no)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Water Connection Date :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((ne=(ae=s==null?void 0:s.data)==null?void 0:ae.data)==null?void 0:ne.water_conn_date)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Floor Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Floor"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Usage Type"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Occupancy Type"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Construction Type"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Built Up Area(Sq Ft)"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"From Date"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Upto Date"})]})}),e.jsx("tbody",{children:(ce=(oe=(te=s==null?void 0:s.data)==null?void 0:te.data)==null?void 0:oe.floors)==null?void 0:ce.map((d,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:n+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.floor_name}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.usage_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.occupancy_type)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.construction_type)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.builtup_area)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:d==null?void 0:d.date_from}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d==null?void 0:d.date_upto)||"--"})]},n))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Additional Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Property has Mobile Tower(s) ?:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(he=(xe=s==null?void 0:s.data)==null?void 0:xe.data)!=null&&he.is_mobile_tower?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Property has Hoarding Board(s) ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(me=(ie=s==null?void 0:s.data)==null?void 0:ie.data)!=null&&me.is_hoarding_board?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Is property a Petrol Pump ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(be=(je=s==null?void 0:s.data)==null?void 0:je.data)!=null&&be.is_petrol_pump?"Yes":"No"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Rainwater harvesting provision ? :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(pe=(Ne=s==null?void 0:s.data)==null?void 0:Ne.data)!=null&&pe.is_water_harvesting?"Yes":"No"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Document List"})}),e.jsx(r.CardBody,{children:((ue=a==null?void 0:a.data)==null?void 0:ue.data.length)>0?(ve=(ge=a==null?void 0:a.data)==null?void 0:ge.data)==null?void 0:ve.map((d,n)=>e.jsxs(m.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Document Name(s) ?:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:d==null?void 0:d.doc_category})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Status : "})}),e.jsx("div",{children:e.jsx("h1",{className:"".concat((d==null?void 0:d.current_status)==1?"text-green-600":"text-red-900"," text-sm font-semibold"),children:(d==null?void 0:d.current_status)==1?"Verified":"Pending"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Remarks : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(d==null?void 0:d.remarks)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Document : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:e.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{x(!0),c(d==null?void 0:d.doc_path)},children:"View"})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]},n)):e.jsx("div",{className:"text-center ",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900",children:"No Document Found"})})})]})]})]})}export{Le as default};
