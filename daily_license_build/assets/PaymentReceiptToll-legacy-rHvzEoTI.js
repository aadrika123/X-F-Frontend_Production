!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,i,a,o,s=[],r=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;r=!1}else for(;!(r=(l=a.call(t)).done)&&(s.push(l.value),s.length!==n);r=!0);}catch(e){c=!0,i=e}finally{try{if(!r&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}System.register(["./index-legacy-NhbMehka.js","./PowerupFunctions-legacy-nd9pxpgS.js","./RentalApiList-legacy-_GPrbHWP.js","./Loader-legacy-usWXqXIl.js"],(function(n,t){"use strict";var l,i,a,o,s,r,c,d;return{setters:[function(e){l=e.d,i=e.r,a=e.A,o=e.a,s=e.j},function(e){r=e.n},function(e){c=e.R},function(e){d=e.L}],execute:function(){n("default",(function(){var n=l().id;console.log("id...",n);var t=c().api_tollPaymentReceipt,u=e(i.useState(),2),m=u[0],v=u[1],f=e(i.useState(!1),2),x=f[0],h=f[1];i.useEffect((function(){j()}),[n]);var j=function(){var e={tollId:n};a.post("".concat(t),e,o()).then((function(e){console.log("payment data 2",e.data.data),e.data.status&&v(e.data.data),h(!1)})).catch((function(e){console.log(e),h(!1)}))},N="  "+(null==m?void 0:m.ulbName)+"\n"+(null==m?void 0:m.session)+"\nDate: "+(null==m?void 0:m.datefrom)+"\n******************************* \nDescription: "+(null==m?void 0:m.description)+"\nTransaction no: "+(null==m?void 0:m.transaction_no)+"\nToll No: "+(null==m?void 0:m.toll_no)+"\nVendor Name: "+(null==m?void 0:m.vendor_name)+"\nMobile No: "+(null==m?void 0:m.mobile)+"\nMarket: "+(null==m?void 0:m.market_name)+"\nCircle: "+(null==m?void 0:m.circle_name)+"\nPayment Date From: "+(null==m?void 0:m.datefrom)+"\nPayment Date To: "+(null==m?void 0:m.dateto)+"\nAmount: "+(null==m?void 0:m.last_amount)+"\n(In Words): "+(null==m?void 0:m.inWords)+"\n \n*******************************\nTc Name: "+(null==m?void 0:m.tcName)+"\nTc Mobile: "+(null==m?void 0:m.tcMobile)+"\n \n******************************* \n[C]For Details Please Visit: \n[C]"+(null==m?void 0:m.website)+" \n[C]"+(null==m?void 0:m.toll_free_no)+"\n\n\n\n\n";return s.jsxs(s.Fragment,{children:[x&&s.jsx(d,{}),s.jsx("button",{className:"bg-sky-500 px-3 py-1 text-xs  text-white ",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:N}}))},children:"Print Receipt"}),s.jsx("div",{className:"border-dashed text-[14px] bg-white text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:s.jsx("div",{className:"text-justify font-poppins",children:s.jsxs("div",{className:"text-gray-700",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:null==m?void 0:m.ulbLogo,className:"w-12 mx-auto"})}),s.jsx("div",{className:"text-center font-semibold",children:r(null==m?void 0:m.ulbName)}),s.jsx("div",{className:"text-center",children:r(null==m?void 0:m.session)}),s.jsxs("div",{className:"mt-4",children:["Date : ",r(null==m?void 0:m.last_payment_date)]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Description : ",r(null==m?void 0:m.description)]}),s.jsxs("div",{className:"",children:["Transcation no. : ",r(null==m?void 0:m.transaction_no)]}),s.jsxs("div",{className:"",children:["Toll no. : ",r(null==m?void 0:m.toll_no)]}),s.jsxs("div",{className:"",children:["Vendor name : ",r(null==m?void 0:m.vendor_name)]}),s.jsxs("div",{className:"",children:["Mobile no. : ",r(null==m?void 0:m.mobile)]}),s.jsxs("div",{className:"",children:["Market : ",r(null==m?void 0:m.market_name)]}),s.jsxs("div",{className:"",children:["Circle : ",r(null==m?void 0:m.circle_name)]}),s.jsxs("div",{className:"",children:["Payment date from : ",r(null==m?void 0:m.datefrom)]}),s.jsxs("div",{className:"",children:["Payment date to : ",r(null==m?void 0:m.dateto)]}),s.jsxs("div",{className:"",children:["Amount : ",r(null==m?void 0:m.last_amount)]}),s.jsxs("div",{className:"",children:["(in words) : ",r(null==m?void 0:m.inWords)]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Tc name : ",r(null==m?void 0:m.tcName)]}),s.jsxs("div",{className:"",children:["Tc mobile no. : ",r(null==m?void 0:m.tcMobile)]}),s.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"For details please visit"}),s.jsx("div",{className:"text-center font-semibold",children:r(null==m?void 0:m.website)}),s.jsx("div",{className:"text-center font-semibold",children:r(null==m?void 0:m.toll_free_no)})]})})})]})}))}}}))}();
