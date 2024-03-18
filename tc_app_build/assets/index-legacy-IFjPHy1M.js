!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var d,t,r,a,i=[],n=!0,o=!1;try{if(r=(l=l.call(e)).next,0===s){if(Object(l)!==l)return;n=!1}else for(;!(n=(d=r.call(l)).done)&&(i.push(d.value),i.length!==s);n=!0);}catch(e){o=!0,t=e}finally{try{if(!n&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(o)throw t}}return i}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return s(e,l);var d=Object.prototype.toString.call(e).slice(8,-1);"Object"===d&&e.constructor&&(d=e.constructor.name);if("Map"===d||"Set"===d)return Array.from(e);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return s(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,s){(null==s||s>e.length)&&(s=e.length);for(var l=0,d=new Array(s);l<s;l++)d[l]=e[l];return d}System.register(["./index-legacy-eswIL5Je.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./index-legacy-HUEfBhIC.js","./useCustomQuery-legacy-TKSCstG_.js","./index.esm-legacy-5u-Ffckd.js","./index-legacy-vtVAGFCF.js","./reactQuery-legacy-y1kqDybM.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js"],(function(s,l){"use strict";var d,t,r,a,i,n,o,c;return{setters:[function(e){d=e.j,t=e.d,r=e.p},function(e){a=e.d,i=e.h},function(e){n=e.r},function(e){o=e.P},function(e){c=e.u},null,null,null,null,null,null,null],execute:function(){function l(e){var s,l=e.open,t=e.setOpen,r=e.url,a=function(){return t(!l)};return d.jsxs(d.Fragment,{children:[l&&d.jsx("div",{onClick:a,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),d.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(l?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:d.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:d.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[d.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[d.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Document"}),d.jsxs("button",{onClick:a,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[d.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:d.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),d.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"==(s=r,s.split(".").pop())?d.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(r,"&embedded=true"),width:"100%",height:"100%"}):d.jsx("img",{src:r,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),d.jsx("div",{className:"p-4 md:p-5",children:d.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:d.jsx(n.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:a,className:"mr-1 bg-gray-300",children:d.jsx("span",{children:"Ok"})})})})]})})})]})}s("default",(function(){var s,m,x,h,u,j,b,v,N,f,p,g,y,w,_,C,D,k,A,S,B,O,I,P,F,M,T,Y,W,z,E,L,U=e(a.useState(!1),2),G=U[0],H=U[1],Q=e(a.useState(""),2),R=Q[0],V=Q[1],q=i().id,K=c({api:r.staticSafDetail,config:{applicationId:q},value:[q],options:{enabled:!!q}}),Z=c({api:r.safUploadedDoc,config:{applicationId:q},value:[q],options:{enabled:!!q}});return c({api:r.verificationList,config:{applicationId:q},value:[q],options:{enabled:!!q}}),null!=K&&K.isLoading?d.jsx(t,{}):d.jsxs(o,{title:"Saf Property Details",children:[d.jsx(l,{open:G,setOpen:H,url:R}),d.jsxs("div",{className:"p-4 ",children:[d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),d.jsx(n.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Application No: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!==(s=null==K||null===(m=K.data)||void 0===m||null===(m=m.data)||void 0===m?void 0:m.saf_no)&&void 0!==s?s:"-"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Holding No.: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!==(x=null==K||null===(h=K.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.holding_no)&&void 0!==x?x:"-"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Zone: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!==(u=null==K||null===(j=K.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.zone)&&void 0!==u?u:"-"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Ward No: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!==(b=null==K||null===(v=K.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.new_ward_no)&&void 0!==b?b:"-"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Date of Purchase: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(N=K.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.land_occupation_date)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(f=K.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.ownership_type)||"-"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Property Type: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(p=K.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.property_type)||"-"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Holding Type: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(g=K.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.holding_type)||"-"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Address & Details"})}),d.jsx(n.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Survey No: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(y=K.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.khata_no)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Plot No.: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(w=K.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.plot_no)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Mauja Name: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(_=K.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.village_mauja_name)||"--"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Area Of Plot (in Sq ft) :"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(C=K.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.area_of_plot)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Property Address: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(D=K.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.prop_address)||"--"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Corresponding Address:"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(k=K.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.corr_address)||"--"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),d.jsx(n.CardBody,{children:d.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name In Marathi"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Gender"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DOB"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name In Marathi"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Relation"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Mobile No."}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Aadhar"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Pan"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Email"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Armed-Force"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Specially-Abled?"})]})}),d.jsx("tbody",{children:null==K||null===(A=K.data)||void 0===A||null===(A=A.data)||void 0===A||null===(A=A.owners)||void 0===A?void 0:A.map((function(e,s){return d.jsxs("tr",{children:[d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s+1}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.owner_name}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.owner_name_marathi}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.gender)||"--"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.dob)||"--"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.guardian_name)||"--"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.guardian_name_marathi}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.relation_type}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.mobile_no}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.aadhar_no}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.pan_no}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.email}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null!=e&&e.is_armed_force?"Yes":"No"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null!=e&&e.is_specially_abled?"Yes":"No"})]},s)}))})]})})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Electricity Details"})}),d.jsx(n.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Electricity K. No: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(S=K.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.elect_consumer_no)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"ACC No.: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(B=K.data)||void 0===B||null===(B=B.data)||void 0===B?void 0:B.elect_acc_no)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"BIND/BOOK No : "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(O=K.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.elect_bind_book_no)||"--"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Electricity Consumer Category:"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(I=K.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.elect_cons_category)||"--"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Water Details"})}),d.jsx(n.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Water Consumer No.: "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(P=K.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.water_conn_no)||"--"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Water Connection Date :"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==K||null===(F=K.data)||void 0===F||null===(F=F.data)||void 0===F?void 0:F.water_conn_date)||"--"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Floor Details"})}),d.jsx(n.CardBody,{children:d.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Floor"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Usage Type"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Occupancy Type"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Construction Type"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Built Up Area(Sq Ft)"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"From Date"}),d.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Upto Date"})]})}),d.jsx("tbody",{children:null==K||null===(M=K.data)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.floors)||void 0===M?void 0:M.map((function(e,s){return d.jsxs("tr",{children:[d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s+1}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.floor_name}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.usage_type}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.occupancy_type)||"--"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.construction_type)||"--"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.builtup_area)||"--"}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.date_from}),d.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.date_upto)||"--"})]},s)}))})]})})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Additional Details"})}),d.jsx(n.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Property has Mobile Tower(s) ?:"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!=K&&null!==(T=K.data)&&void 0!==T&&null!==(T=T.data)&&void 0!==T&&T.is_mobile_tower?"Yes":"No"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Property has Hoarding Board(s) ? :"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!=K&&null!==(Y=K.data)&&void 0!==Y&&null!==(Y=Y.data)&&void 0!==Y&&Y.is_hoarding_board?"Yes":"No"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Is property a Petrol Pump ? :"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!=K&&null!==(W=K.data)&&void 0!==W&&null!==(W=W.data)&&void 0!==W&&W.is_petrol_pump?"Yes":"No"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Rainwater harvesting provision ? :"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null!=K&&null!==(z=K.data)&&void 0!==z&&null!==(z=z.data)&&void 0!==z&&z.is_water_harvesting?"Yes":"No"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(n.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Document List"})}),d.jsx(n.CardBody,{children:(null==Z||null===(E=Z.data)||void 0===E?void 0:E.data.length)>0?null==Z||null===(L=Z.data)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.map((function(e,s){return d.jsxs(a.Fragment,{children:[d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-semibold",children:["Document Name(s) ?:"," "]})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:null==e?void 0:e.doc_category})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Status : "})}),d.jsx("div",{children:d.jsx("h1",{className:"".concat(1==(null==e?void 0:e.current_status)?"text-green-600":"text-red-900"," text-sm font-semibold"),children:1==(null==e?void 0:e.current_status)?"Verified":"Pending"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Remarks : "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.remarks)||"--"})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm font-semibold",children:"Document : "})}),d.jsx("div",{children:d.jsx("h1",{className:"text-sm",children:d.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:function(){H(!0),V(null==e?void 0:e.doc_path)},children:"View"})})})]}),d.jsx("div",{className:"my-4 border-b-2"})]},s)})):d.jsx("div",{className:"text-center ",children:d.jsx("h1",{className:"text-sm font-semibold text-red-900",children:"No Document Found"})})})]})]})]})}))}}}))}();
