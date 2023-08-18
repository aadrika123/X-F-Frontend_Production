import{aJ as u,bV as A,r as o,u as S,aK as P,g as k,bU as R,A as C,j as e,bE as D,H as g,bS as E,bx as O}from"./index-be22bbd2.js";var F=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],M=F,y=Symbol("isTwElement?"),W=(l,r)=>l.reduce((a,c,t)=>a.concat(c||[],r[t]||[]),[]),_=(l,r="")=>{let a=l.join(" ").trim().replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ").filter(t=>t!==","),c=r?r.split(" "):[];return A(...a.concat(c).filter(t=>t!==" "))},I=([l])=>l.charAt(0)!=="$",b=l=>l[y]===!0,v=l=>(r,...a)=>{let c=(t=[])=>{let i=u.forwardRef((s,p)=>{let{$as:d=l,style:N={},...n}=s,m=b(l)?l:d,h=t?t.reduce((j,f)=>Object.assign(j,typeof f=="function"?f(s):f),{}):{},x=b(m)?n:Object.fromEntries(Object.entries(n).filter(I));return u.createElement(m,{...x,style:{...h,...N},ref:p,className:_(W(r,a.map(j=>j({...n,$as:d}))),n.className),...b(l)?{$as:d}:{}})});return i[y]=!0,typeof l!="string"?i.displayName=l.displayName||l.name||"tw.Component":i.displayName="tw."+l,i.withStyle=s=>c(t.concat(s)),i};return c()},T=M.reduce((l,r)=>({...l,[r]:v(r)}),{}),L=Object.assign(v,T),w=L;w.button`py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md`;w.div`p-4 rounded-md`;const B=()=>{var n,m,h;const[l,r]=o.useState(!1),{paymentId:a}=S(),{api_waterApplicationPaymentReceipt:c,header:t}=P(),{setBreadCrumbData:i}=o.useContext(k);o.useEffect(()=>{i(["Water Dashboard","Payment History","Payment Receipt"])},[]),o.useState(!1);const[s,p]=o.useState(),d=o.useRef(),N=R.useReactToPrint({content:()=>d.current});return o.useEffect(()=>{r(!0),C.post(c,{transactionNo:a},t).then(x=>{r(!1),console.log("Receipt Response",x.data.data),p(x.data.data)}).catch(x=>{console.log("Error while fetching receipt DATA",x),r(!1)})},[a]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-poppins",ref:d,children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:N,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(D,{className:"inline text-lg"}),"print"]})})}),e.jsx("div",{id:"printableArea",className:"",children:e.jsx("div",{children:e.jsx("div",{className:"font-tahoma",children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-4 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:(n=g())==null?void 0:n.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:(m=g())==null?void 0:m.state_logo,alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center ",children:(h=g())==null?void 0:h.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsx("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:"water connection charge payment receipt"})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-2",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Receipt No. :"}),e.jsx("h1",{className:"flex   pl-2",children:s==null?void 0:s.transactionNo})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Department/Section :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.accountDescription})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Account Description :"}),e.jsx("h1",{className:"flex  pl-2 ",children:"Water User Charge"})]}),(s==null?void 0:s.holdingNo)&&e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s!=null&&s.holdingNo?s==null?void 0:s.holdingNo:"N/A"})]}),(s==null?void 0:s.safNo)&&e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s!=null&&s.safNo?s==null?void 0:s.safNo:"N/A"})]})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),e.jsx("h1",{className:"flex  pl-2 ",children:E(s==null?void 0:s.transactionDate).format("DD/MM/yy")||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.WardNo})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Application No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.applicationNo})]}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl",children:" "})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 ",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold whitespace-nowrap",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex   pl-2",children:s==null?void 0:s.customerName})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Mobile No. :"}),e.jsx("h1",{className:"flex   pl-2",children:s==null?void 0:s.customerMobile})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Address :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.address})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"A Sum of Rs.  :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.totalPaidAmount})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"(in words) : "}),e.jsx("h1",{className:"flex  pl-2 ",children:s!=null&&s.paidAmtInWords?(s==null?void 0:s.paidAmtInWords)+" Only":"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Towards : ",e.jsx("span",{className:"  font-normal ml-1",children:s==null?void 0:s.towards})]}),e.jsxs("h1",{className:"flex text-gray-900   ml-8 font-semibold",children:["Vide  : ",e.jsx("span",{className:"  ml-1 font-normal",children:s==null?void 0:s.paymentMode})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsx("thead",{className:" w-full",children:e.jsxs("tr",{className:"border border-gray-500 text-xl  font-bold text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:" ",children:"Description "})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:"",children:"Amount "})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:" Connection Fee"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s!=null&&s.connectionFee?s==null?void 0:s.connectionFee:(s==null?void 0:s.connectionFee)==0?0:"N/A"]})}),e.jsx("td",{className:""})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Penalty"})}),e.jsx("td",{colSpan:1,className:"  border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s!=null&&s.penaltyAmount?s==null?void 0:s.penaltyAmount:(s==null?void 0:s.penaltyAmount)==0?0:"N/A"]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:" text-left ml-2",children:"Rebate"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s!=null&&s.rebate?s==null?void 0:s.rebate:(s==null?void 0:s.rebate)==0?0:"N/A"]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Payable Amount"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s!=null&&s.totalPaidAmount?s==null?void 0:s.totalPaidAmount:(s==null?void 0:s.totalPaidAmount)==0?0:"N/A"]})})]})]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-2 ",children:e.jsxs("tr",{className:"",children:[e.jsx("td",{className:"",children:e.jsxs("div",{className:"flex",children:[e.jsx(O,{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",size:"64"}),e.jsxs("div",{className:"flex flex-col ml-4",children:[e.jsx("h1",{className:"text-gray-900 text-sm",children:"For Details Please Visit: udhd.jharkhand.gov.in"}),e.jsx("h1",{className:"text-gray-900 text-sm",children:"Or Call us at 1800 8904115 or 0651-3500700"})]})]})}),e.jsxs("td",{className:"float-right",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:" ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-sm text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e.jsx("div",{className:"",children:e.jsx("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-12 mx-auto"})})})]})})})})]})})};export{B as default};
