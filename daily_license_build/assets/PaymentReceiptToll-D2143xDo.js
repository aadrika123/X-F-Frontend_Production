import{d as h,r as o,A as N,a as j,j as e}from"./index-LVoQ7CEH.js";import{n as i}from"./PowerupFunctions-y4WO6uRc.js";import{R as v}from"./RentalApiList-0EKospQ2.js";import{L as f}from"./Loader-Q0gecdCQ.js";function R(){const{id:c}=h();console.log("id...",c);const{api_tollPaymentReceipt:r}=v(),[s,t]=o.useState(),[n,d]=o.useState(!1);o.useEffect(()=>{x()},[c]);const x=()=>{const m={tollId:c};N.post("".concat(r),m,j()).then(l=>{console.log("payment data 2",l.data.data),l.data.status&&t(l.data.data),d(!1)}).catch(l=>{console.log(l),d(!1)})};function a(){console.log("rn hit",s),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({keyData:s,Key:"tollPayReceipt"}))}return console.log("payment data",s),e.jsxs(e.Fragment,{children:[n&&e.jsx(f,{}),e.jsx("button",{className:"bg-sky-500 px-3 py-1 text-xs  text-white ",onClick:()=>a(),children:"Print Receipt"}),e.jsx("div",{className:"border-dashed text-[14px] bg-white text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:e.jsx("div",{className:"text-justify font-poppins",children:e.jsxs("div",{className:"text-gray-700",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{src:s==null?void 0:s.ulbLogo,className:"w-12 mx-auto"})}),e.jsx("div",{className:"text-center font-semibold",children:i(s==null?void 0:s.ulbName)}),e.jsx("div",{className:"text-center",children:i(s==null?void 0:s.session)}),e.jsxs("div",{className:"mt-4",children:["Date : ",i(s==null?void 0:s.last_payment_date)]}),e.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),e.jsxs("div",{className:"",children:["Description : ",i(s==null?void 0:s.description)]}),e.jsxs("div",{className:"",children:["Transcation no. : ",i(s==null?void 0:s.transaction_no)]}),e.jsxs("div",{className:"",children:["Toll no. : ",i(s==null?void 0:s.toll_no)]}),e.jsxs("div",{className:"",children:["Vendor name : ",i(s==null?void 0:s.vendor_name)]}),e.jsxs("div",{className:"",children:["Mobile no. : ",i(s==null?void 0:s.mobile)]}),e.jsxs("div",{className:"",children:["Market : ",i(s==null?void 0:s.market_name)]}),e.jsxs("div",{className:"",children:["Circle : ",i(s==null?void 0:s.circle_name)]}),e.jsxs("div",{className:"",children:["Payment date from : ",i(s==null?void 0:s.datefrom)]}),e.jsxs("div",{className:"",children:["Payment date to : ",i(s==null?void 0:s.dateto)]}),e.jsxs("div",{className:"",children:["Amount : ",i(s==null?void 0:s.last_amount)]}),e.jsxs("div",{className:"",children:["(in words) : ",i(s==null?void 0:s.inWords)]}),e.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),e.jsxs("div",{className:"",children:["Tc name : ",i(s==null?void 0:s.tcName)]}),e.jsxs("div",{className:"",children:["Tc mobile no. : ",i(s==null?void 0:s.tcMobile)]}),e.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"For details please visit"}),e.jsx("div",{className:"text-center font-semibold",children:i(s==null?void 0:s.website)}),e.jsx("div",{className:"text-center font-semibold",children:i(s==null?void 0:s.toll_free_no)})]})})})]})}export{R as default};
