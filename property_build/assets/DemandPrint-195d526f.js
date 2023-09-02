import{R as w,j as e,cw as D,n as r,cA as R,f,r as a,bv as A,A as T,N as L,B as W,S as _,T as B,Q as E,cy as F,bP as H}from"./index-0ef8dcac.js";class I extends w.Component{render(){var d,t;const s=(d=this.props)==null?void 0:d.demandDetails;let n=(t=this==null?void 0:this.props)==null?void 0:t.ulbData;return e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx("div",{className:"flex items-center justify-center text-black",id:"printableArea",children:e.jsxs("div",{className:"container w-[70%] border-2 border-dashed m-2 overflow-x-hidden border-black py-4 px-3 text-sm",children:[e.jsx("img",{src:n==null?void 0:n.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[27%] h-[40vh] backImage opacity-10"}),e.jsxs("div",{className:"w-full text-center flex flex-col mb-2",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4 mb-2",children:[e.jsx("img",{src:n==null?void 0:n.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),e.jsx("span",{className:"text-3xl font-bold uppercase",children:n==null?void 0:n.ulb_name})]}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:" border-2 font-bold border-black px-10 py-2 text-xl w-max",children:"Property Tax Demand"})})]}),e.jsxs("div",{className:"flex justify-between font-bold",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["Holding No. : ",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.new_holding_no)})]}),e.jsxs("div",{children:["Department / Section : ",e.jsx("span",{className:"font-normal",children:"Revenue Section"})]}),e.jsxs("div",{children:["Account Description : ",e.jsx("span",{className:"font-normal",children:"Holding Tax & Others"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["Date : ",e.jsx("span",{className:"font-normal",children:R(s==null?void 0:s.date)})]}),e.jsxs("div",{children:["Ward No :",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.wardNo)})]}),e.jsxs("div",{children:["New Ward No :",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.newWardNo)})]})]})]}),e.jsxs("div",{className:"mt-4 font-bold",children:[e.jsxs("div",{children:["Owner Name : ",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.ownerName)})]}),e.jsxs("div",{children:["Address : ",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.address)})]})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Demand From"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Demand Upto"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Demand (₹)"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"RWH Penalty (₹)"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Already Paid (₹)"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Total (₹)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.duesFrom)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.duesTo)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.demand)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.rwhPenalty)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.alreadyPaid)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.total)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 font-bold border-[1px] border-black text-end",colSpan:2,children:"Total"}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.demand)}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.rwhPenalty)}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.alreadyPaid)}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.total)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:2,children:"1% Penalty"}),e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:4,children:f(s==null?void 0:s.onePercPenalty)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:2,children:"Total Payable"}),e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:4,children:f(s==null?void 0:s.totalPayable)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:2,children:"Total Demand (in words)"}),e.jsxs("td",{className:"border-[1px] border-black font-bold p-2",colSpan:4,children:[" ",r(s==null?void 0:s.totalPayableInWords)," Rupees Only"]})]})]})})]})})]})}}const O=()=>{const o=a.useRef(),s=A(),{demandReciept:n}=H(),[d,t]=a.useState(!1),[N,u]=a.useState(),[k,i]=a.useState(!1),[v,c]=a.useState(!1),[y,g]=a.useState(!0),[S,P]=a.useState(null);return a.useEffect(()=>{i(!1),c(!0),T.post(n,{propId:s==null?void 0:s.id},L()).then(l=>{var x,b,p,m,h,j;console.log("getting demand details => ",l),c(!1),g((x=l==null?void 0:l.data)==null?void 0:x.status),(b=l==null?void 0:l.data)!=null&&b.status&&(u((m=(p=l==null?void 0:l.data)==null?void 0:p.data)==null?void 0:m.dueReceipt),P((j=(h=l==null?void 0:l.data)==null?void 0:h.data)==null?void 0:j.ulbDetails))}).catch(l=>{console.log("getting demand error => ",l),c(!1),i(!0)})},[]),v?e.jsx(e.Fragment,{children:e.jsx(W,{})}):k?e.jsx(_,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):y?e.jsxs("div",{children:[d&&e.jsx(B,{}),e.jsx(E,{position:"top-right",autoClose:2e3}),e.jsx(F,{trigger:()=>e.jsx("button",{}),content:()=>o.current}),e.jsx(I,{ref:o,demandDetails:N,ulbData:S})]}):e.jsx("div",{className:"w-full mt-20 text-center",children:e.jsx("span",{className:"text-3xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:"No demand found for this property!"})})};export{O as default};
