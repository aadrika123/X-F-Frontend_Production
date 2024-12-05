!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,n,i,a,d=[],r=!0,c=!1;try{if(i=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;r=!1}else for(;!(r=(s=i.call(t)).done)&&(d.push(s.value),d.length!==l);r=!0);}catch(e){c=!0,n=e}finally{try{if(!r&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw n}}return d}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,s=new Array(l);t<l;t++)s[t]=e[t];return s}System.register(["./index-legacy-NZJbOf30.js","./index-legacy-I5h53JIb.js","./router-legacy-_t8Mc_yw.js","./tailwind-legacy-Afc9ICbc.js","./index-legacy-a1BxB_Or.js","./reactPdfViewerCore-legacy-2_nwZhw6.js","./reactPdfViewerDefaultLayout-legacy-8cR2wjni.js","./index.esm-legacy-sahDnNe5.js","./TranslateField-legacy-xsHeShSG.js","./MyPDFViewer-legacy-qEAmihzV.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js"],(function(l,t){"use strict";var s,n,i,a,d,r,c,o,x;return{setters:[function(e){s=e.j,n=e.c,i=e.p,a=e.I},function(e){d=e.P},function(e){r=e.d,c=e.e},function(e){o=e.r},null,null,null,null,null,function(e){x=e.M},null,null,null,null],execute:function(){function t(e){var l=e.open,t=e.setOpen,n=e.url,i=e.ext,a=e.title,d=function(){return t(!l)};return s.jsxs(s.Fragment,{children:[l&&s.jsx("div",{onClick:d,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),s.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(l?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:s.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:s.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[s.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:a}),s.jsxs("button",{onClick:d,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[s.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:s.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),s.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"===i?s.jsx(x,{fileUrl:n}):s.jsx("img",{src:n,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),s.jsx("div",{className:"p-4 md:p-5",children:s.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:s.jsx(o.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:d,className:"mr-1 bg-gray-300",children:s.jsx("span",{children:"Close"})})})})]})})})]})}l("default",(function(){var l,x,u,h,m,j,v,f,y,g,p,b,N,w,k=e(r.useState(!1),2),S=k[0],_=k[1],C=e(r.useState(""),2),D=C[0],I=C[1],A=e(r.useState(""),2),O=A[0],P=A[1],V=c().id,z=n({api:i.staticSafDetailForVerification,config:{applicationId:V},value:[V],options:{enabled:!!V}});if(z.isLoading)return s.jsx(a,{});return s.jsxs(d,{title:"Saf Site Verification",children:[s.jsx(t,{open:S,setOpen:_,url:D,ext:O,title:"Saf Document"}),s.jsxs("div",{className:"p-4",children:[s.jsxs(o.Card,{className:"w-full",children:[s.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:s.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"})}),s.jsx(o.CardBody,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Application No: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:null!==(l=null==z||null===(x=z.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.saf_no)&&void 0!==l?l:"-"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Holding No.: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:null!==(u=null==z||null===(h=z.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.holding_no)&&void 0!==u?u:"-"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Zone: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:null!==(m=null==z||null===(j=z.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.zone)&&void 0!==m?m:"-"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Ward No: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:null!==(v=null==z||null===(f=z.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.new_ward_no)&&void 0!==v?v:"-"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Date of Purchase: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(null==z||null===(y=z.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.land_occupation_date)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Ownership Type: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(null==z||null===(g=z.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.ownership_type)||"-"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Property Type: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(null==z||null===(p=z.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.property_type)||"-"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Holding Type: "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(null==z||null===(b=z.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.holding_type)||"-"})})]})})]}),s.jsx("div",{className:"my-4 border-b-2"}),s.jsxs(o.Card,{className:"w-full",children:[s.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:s.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Document List"})}),s.jsx(o.CardBody,{children:(null==z||null===(N=z.data)||void 0===N||null===(N=N.data)||void 0===N||null===(N=N.documents)||void 0===N?void 0:N.length)>0?null==z||null===(w=z.data)||void 0===w||null===(w=w.data)||void 0===w||null===(w=w.documents)||void 0===w?void 0:w.map((function(e,l){var t=e.doc_path.split(".").pop();return s.jsxs(r.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsx("div",{children:s.jsxs("h1",{className:"text-xs font-semibold",children:["Document Name(s) ?:"," "]})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:null==e?void 0:e.doc_category})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Status : "})}),s.jsx("div",{children:s.jsx("h1",{className:"".concat(1==(null==e?void 0:e.verify_status)?"text-green-600":"text-red-900"," text-xs font-semibold"),children:1==(null==e?void 0:e.verify_status)?"Verified":"Pending"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Remarks : "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(null==e?void 0:e.remarks)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Document : "})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:s.jsx(o.Button,{color:"blue",size:"sm",onClick:function(){return function(e,l){I(e),P(l),_(!0)}(e.doc_path,t)},children:s.jsx("small",{children:"View"})})})})]}),s.jsx("div",{className:"my-4 border-b-2"})]},l)})):s.jsx("div",{className:"text-center ",children:s.jsx("h1",{className:"text-xs font-semibold text-red-900",children:"No Document Found"})})})]})]})]})}))}}}))}();
