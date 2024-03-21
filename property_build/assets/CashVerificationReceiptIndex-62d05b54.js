import{R as G,j as e,n as r,i as w,u as J,a as K,r as i,A as X,b as Z,B as $,c as ee,P as se}from"./index-c6aa66f9.js";import{Q as re}from"./QrCode-f15dfe54.js";import{P as le}from"./PrintButton-2f8c1fd0.js";const te="/assets/logo1-3e169162.png";class ae extends G.Component{render(){var h,j,D,c,N,x,b,y,g,u,l,d,m,p,R,C,S,A,P,T,_,V,M,I,L,k,q,E,B,U,F,Q,z,H,O,W,Y;(h=this.props)==null||h.paymentData;const t=(D=(j=this==null?void 0:this.props)==null?void 0:j.paymentData)==null?void 0:D.ulbDetails;return e.jsxs(e.Fragment,{children:[e.jsx(le,{}),e.jsx("div",{className:"flex items-center w-full justify-center text-black  print:border-2 print:border-dashed  print:border-black",id:"printableArea",children:e.jsxs("div",{className:"container w-full print:border-none border-2 bg-white border-dashed border-black overflow-x-hidden py-4 px-3 text-sm",children:[e.jsx("img",{src:te,alt:"",srcset:"",className:"absolute top-[20%] left-[36%] h-[28vh] backImage opacity-10"}),e.jsx("div",{className:"w-full text-center flex flex-col items-center mb-2",children:e.jsx("div",{className:"w-full flex justify-center mt-2",children:e.jsx("div",{className:"uppercase border-2 font-bold border-black px-10 py-2 text-xl w-max",children:"Cash Verification Reciept"})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-1 text-md font-semibold",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Receipt No. :"}),e.jsxs("h1",{className:"flex font-sans font-normal  pl-2",children:[" ",r((N=(c=this.props)==null?void 0:c.paymentData)==null?void 0:N.receiptNo)]})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"TC Name :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:r((b=(x=this.props)==null?void 0:x.paymentData)==null?void 0:b.collectorName)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"TC Mobile :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:r((g=(y=this.props)==null?void 0:y.paymentData)==null?void 0:g.collectorMobile)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"ULB :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:r((l=(u=this.props)==null?void 0:u.paymentData)==null?void 0:l.ulb)})]}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row "})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Verification Date :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:r((m=(d=this.props)==null?void 0:d.paymentData)==null?void 0:m.verificationDate)})]}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans mr-1",children:["Verifier Name :"," ",e.jsx("span",{className:"font-sans font-normal pl-2",children:r((R=(p=this.props)==null?void 0:p.paymentData)==null?void 0:R.verifierName)})," "]})}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans mr-1",children:["Verifier Mobile :"," ",e.jsx("span",{className:"font-sans font-normal pl-2",children:r((S=(C=this.props)==null?void 0:C.paymentData)==null?void 0:S.verifierMobile)})," "]})}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:" "}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row "}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:" "}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row "})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-0 -mt-0",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-base text-left ",children:"PAYMENT DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:"Module"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:"Transaction No."}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:"Mode"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:"Cheque/DD No."}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:"Amount Collected"})]}),((T=(P=(A=this==null?void 0:this.props)==null?void 0:A.paymentData)==null?void 0:P.property)==null?void 0:T.length)>0&&((M=(V=(_=this==null?void 0:this.props)==null?void 0:_.paymentData)==null?void 0:V.property)==null?void 0:M.map((s,f)=>{var a,n,o;return e.jsxs("tr",{children:[f==0&&e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",rowSpan:(o=(n=(a=this==null?void 0:this.props)==null?void 0:a.paymentData)==null?void 0:n.property)==null?void 0:o.length,children:"Property"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:w(s==null?void 0:s.amount)})]})})),((k=(L=(I=this==null?void 0:this.props)==null?void 0:I.paymentData)==null?void 0:L.water)==null?void 0:k.length)>0&&((B=(E=(q=this==null?void 0:this.props)==null?void 0:q.paymentData)==null?void 0:E.water)==null?void 0:B.map((s,f)=>{var a,n,o;return e.jsxs("tr",{children:[f==0&&e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",rowSpan:(o=(n=(a=this==null?void 0:this.props)==null?void 0:a.paymentData)==null?void 0:n.water)==null?void 0:o.length,children:"Water"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:w(s==null?void 0:s.amount)})]})})),((Q=(F=(U=this==null?void 0:this.props)==null?void 0:U.paymentData)==null?void 0:F.trade)==null?void 0:Q.length)>0&&((O=(H=(z=this==null?void 0:this.props)==null?void 0:z.paymentData)==null?void 0:H.trade)==null?void 0:O.map((s,f)=>{var a,n,o;return e.jsxs("tr",{children:[f==0&&e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",rowSpan:(o=(n=(a=this==null?void 0:this.props)==null?void 0:a.paymentData)==null?void 0:n.trade)==null?void 0:o.length,children:"Trade"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:r(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 text-sm",children:w(s==null?void 0:s.amount)})]})})),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pr-1 text-end",colSpan:4,children:"Total"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:w((Y=(W=this==null?void 0:this.props)==null?void 0:W.paymentData)==null?void 0:Y.totalAmount)})]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-10 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(re,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["For Details Please Visit : ",t==null?void 0:t.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["Or Call us at ",t==null?void 0:t.mobile_no," or ",t==null?void 0:t.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"Ms/swati industry Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-md text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})]})}}function ce(){const{tranNo:v}=J();console.log("param transaction no ..",decodeURIComponent(v)),K("Cash Verification Reciept");const t=i.useRef(),[h,j]=i.useState();i.useState(!1);const[D,c]=i.useState(!1),[N,x]=i.useState(!1),[b,y]=i.useState(null),{api_cashVerificationReciept:g}=se();i.useEffect(()=>{u()},[]);const u=()=>{c(!1),x(!0),X.post(g,{receiptNo:decodeURIComponent(v)},Z()).then(l=>{var d,m,p;console.log("payment data at receipt.....",l),l.data.status?(j((d=l==null?void 0:l.data)==null?void 0:d.data),y((p=(m=l==null?void 0:l.data)==null?void 0:m.data)==null?void 0:p.ulbDetails)):c(!0),x(!1)}).catch(l=>{c(!0),x(!1),console.log(l)})};return N?e.jsx(e.Fragment,{children:e.jsx($,{})}):e.jsxs("div",{children:[e.jsx(ee,{trigger:()=>e.jsx("button",{}),content:()=>t.current}),e.jsx(ae,{ref:t,paymentData:h,ulbDetails:b})]})}export{ce as default};
