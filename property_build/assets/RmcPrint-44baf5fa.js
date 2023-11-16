import{R as v,j as s,J as t,i as m,K as g,r as i,F as y,u as w,A as S,b as R,B as P,S as A,H as T,Y as k,c as C,P as _}from"./index-2e37e53a.js";import{P as D}from"./PrintButton-226486ea.js";import{Q as F}from"./QrCode-f33cd796.js";import"./index-e505d565.js";class H extends v.Component{render(){var c,a,h,d,x,p;const e=(c=this.props)==null?void 0:c.rmcDetails;let r=(h=(a=this==null?void 0:this.props)==null?void 0:a.rmcDetails)==null?void 0:h.ulbDetails;const l=(d=this.props)==null?void 0:d.t;return s.jsxs(s.Fragment,{children:[s.jsx(D,{}),s.jsx("div",{className:"flex items-center justify-center text-black print:border-2 print:border-dashed print:border-black",id:"printableArea",children:s.jsxs("div",{className:"container w-[70%] overflow-x-hidden print:border-none border-2 border-dashed border-black py-1.5 px-3 text-sm",children:[s.jsx("img",{src:r==null?void 0:r.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[27%] h-[40vh] backImage opacity-10"}),s.jsxs("div",{className:"w-full text-center flex flex-col mb-2",children:[s.jsx("div",{className:"w-full flex justify-center",children:s.jsx("img",{src:r==null?void 0:r.ulb_logo,alt:"",srcset:"",className:"w-14"})}),s.jsx("div",{className:"uppercase font-bold text-2xl mb-1.5",children:r==null?void 0:r.ulb_name}),s.jsx("div",{className:"w-full flex justify-center",children:s.jsx("div",{className:"w-full flex justify-center",children:s.jsx("div",{className:"",children:s.jsxs("div",{className:"flex flex-col items-center uppercase border-2 font-bold border-black px-10 py-0.5 text-lg",children:[s.jsx("span",{className:"",children:l("mainHoldingPage.holdingTaxReceiptSubHeadingText.label")}),s.jsx("span",{className:"text-base",children:"Holding Tax"})]})})})})]}),s.jsxs("div",{className:"flex justify-between font-bold",children:[s.jsxs("div",{children:[s.jsxs("div",{children:["Reciept No. : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.transactionNo)})]}),s.jsxs("div",{className:"",children:["Department / Section : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.departmentSection)})]}),s.jsxs("div",{children:["Account Description : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.accountDescription)})]})]}),s.jsxs("div",{children:[s.jsxs("div",{children:["Date : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.transactionDate)})]}),s.jsxs("div",{children:["Ward No : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.oldWardNo)})]}),s.jsxs("div",{children:["New Ward No : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.newWardNo)})]}),(e==null?void 0:e.pt_no)==""||(e==null?void 0:e.pt_no)==null?s.jsxs("div",{children:["Holding No : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.applicationNo)})]}):s.jsxs("div",{children:["Property Tax No :",s.jsx("span",{className:"font-bold",children:t(e==null?void 0:e.ptNo)})]})]})]}),s.jsxs("div",{className:" font-bold",children:[s.jsxs("div",{children:["Received From Mr / Mrs / Miss . : ",s.jsx("span",{className:"font-normal uppercase",children:t(e==null?void 0:e.customerName)})]}),s.jsxs("div",{children:["Mobile No. : ",s.jsx("span",{className:"font-normal",children:t(e==null?void 0:e.mobileNo)})]}),s.jsxs("div",{children:["Address : ",s.jsx("span",{className:"font-normal uppercase",children:t(e==null?void 0:e.address)})]}),s.jsxs("div",{children:["A Sum of : ",s.jsx("span",{className:"font-normal",children:m(e==null?void 0:e.totalPaidAmount)})]}),s.jsxs("div",{className:" w-full mb-1",children:["(in words) : ",s.jsxs("span",{className:"w-[80%] inline-block font-normal border-black border-b-2 border-dotted",children:[" ",e==null?void 0:e.paidAmtInWords," Rupees Only"]})]}),s.jsxs("div",{children:["towards : ",s.jsx("span",{className:"font-normal",children:e==null?void 0:e.towards}),"   Vide : ",s.jsx("span",{className:"font-normal",children:e==null?void 0:e.paymentMode})]}),s.jsx("div",{className:"font-bold my-1",children:"N.B.Online Payment/Cheque/Draft/ Bankers Cheque are Subject to Realisation"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"uppercase font-bold text-md border-b-2 border-black my-1",children:"Holding Tax Details"}),s.jsxs("table",{className:"w-full",children:[s.jsxs("tr",{children:[s.jsx("th",{className:"py-1 w-1/3 text-start border border-gray-500 px-2",children:"Account Description"}),s.jsx("th",{className:"py-1 w-1/3 text-center border border-gray-500 px-2",children:"Period"}),s.jsx("th",{className:"py-1 w-1/3 text-end border border-gray-500 px-2",children:"Amount"})]}),(x=e==null?void 0:e.holdingTaxDetails)==null?void 0:x.map(n=>s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{className:"text-start py-1 border border-gray-500 px-2",children:n==null?void 0:n.description}),s.jsx("td",{className:"text-center py-1 border border-gray-500 px-2",children:n==null?void 0:n.period}),s.jsx("td",{className:"text-end py-1 border border-gray-500 px-2",children:m(n==null?void 0:n.amount)})]})})),s.jsxs("tr",{children:[s.jsx("td",{className:"py-1 font-bold text-end border border-gray-500 px-2",colSpan:2,children:"Total"}),s.jsx("td",{className:"py-1 font-bold text-end border border-gray-500 px-2",children:m(e==null?void 0:e.demandAmount)})]}),(p=e==null?void 0:e.taxDetails)==null?void 0:p.map(n=>s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{className:"py-1 font-bold text-end w-1/2 border border-gray-500 px-2",colSpan:2,children:t(n==null?void 0:n.keyString)}),s.jsx("td",{className:"py-1 font-bold text-end w-1/3 border border-gray-500 px-2",children:m(n==null?void 0:n.value)})]})}))]})]}),s.jsxs("div",{className:"flex flex-row justify-between my-2 gap-2 items-center",children:[s.jsx("div",{className:"w-[10%]",children:s.jsx(F,{size:"64",url:window.location.href})}),s.jsxs("div",{className:"w-[50%]",children:["For Details Please Visit : ",r==null?void 0:r.website," ",s.jsx("br",{}),"OR Call us at ",r==null?void 0:r.mobile_no," or ",r==null?void 0:r.mobile_no_2]}),s.jsxs("div",{className:"w-[40%]",children:["In Collaboration with ",s.jsx("br",{}),"Sri Publication & Stationers Pvt Ltd"]})]}),s.jsx("div",{className:"font-bold my-2 w-full text-center",children:"**This is a computer-generated receipt and it does not require a signature.**"})]})})]})}}const W=()=>{const{t:b}=g(),e=i.useRef(),{ulbId:r}=i.useContext(y),l=w(),{rmcReciept:c}=_(),[a,h]=i.useState(!1),[d,x]=i.useState(),[p,n]=i.useState(!1),[u,j]=i.useState(!1);return i.useEffect(()=>{n(!1),j(!0),S.post(c,{tranNo:l==null?void 0:l.id},R()).then(o=>{var f,N;console.log("getting rmc details => ",o),j(!1),(f=o==null?void 0:o.data)!=null&&f.status?x((N=o==null?void 0:o.data)==null?void 0:N.data):n(!0)}).catch(o=>{console.log("getting rmc error => ",o),j(!1),n(!0)})},[]),u?s.jsx(s.Fragment,{children:s.jsx(P,{})}):p?s.jsx(A,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):s.jsxs("div",{children:[a&&s.jsx(T,{}),s.jsx(k,{position:"top-right",autoClose:2e3}),s.jsx(C,{trigger:()=>s.jsx("button",{}),content:()=>e.current}),s.jsx(H,{ref:e,rmcDetails:d,ulbId:r,t:b})]})};export{W as default};
