import{aJ as te,j as e,B as le,bx as re,H as x,u as de,r as o,ac as ie,A as ne,t as ce,by as xe,c1 as oe}from"./index-f2cfd069.js";class pe extends te.Component{render(){var a,d,t,l,i,n,r,s,p,m,h,j,f,N,g,y,b,u,v,D,w,_,A,k,R,P,C,I,M,T,E,$,F,H,L,S,q,B,J,V,z,U,W,O,Q,Y,G,K,X,Z,ee,se,ae;return console.log("paymentData...1",(a=this.props)==null?void 0:a.paymentData),e.jsx(e.Fragment,{children:e.jsxs("div",{id:"printableArea",children:[e.jsx("div",{}),e.jsx("div",{className:"",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[190mm] h-auto ml-12 md:mx-auto lg:mx-auto  container  mt-12 pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:`${le}/getImageLink?path=${(t=(d=this.props)==null?void 0:d.paymentData)==null?void 0:t.ulbLogo}`,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",alt:"",className:"w-[15rem] h-[15rem]  absolute z-10 bg-transparent opacity-20 mt-[8rem] ml-[14rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"",children:e.jsxs("h1",{className:"font-bold text-2xl text-center uppercase",children:[" ",(i=(l=this.props)==null?void 0:l.paymentData)==null?void 0:i.ulbName]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsxs("h1",{className:"font-semibold  text-center text-gray-800 border border-gray-700 w-[20rem] ",children:[" PAYMENT RECEIPT",e.jsx("br",{}),e.jsxs("span",{className:"uppercase",children:[" ",(r=(n=this.props)==null?void 0:n.paymentData)==null?void 0:r.towards]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-6",children:e.jsxs("tr",{className:"",children:[e.jsx("td",{className:" ",children:e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Transaction No. :"}),e.jsxs("h1",{className:"flex  pl-2 text-[12px]",children:[" ",(m=(p=(s=this.props)==null?void 0:s.paymentData)==null?void 0:p.payment_details)==null?void 0:m.transactionNo]})]})}),e.jsx("td",{className:"float-right mr-[4.5rem] ",children:e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px] mr-12 ",children:"Date :"}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(j=(h=this.props)==null?void 0:h.paymentData)==null?void 0:j.payment_date})]})})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-1",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex  pl-2 text-[12px]",children:(N=(f=this.props)==null?void 0:f.paymentData)==null?void 0:N.applicant})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Address :"}),e.jsx("h1",{className:"flex  pl-2 text-[12px]",children:(y=(g=this.props)==null?void 0:g.paymentData)==null?void 0:y.address})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"A Sum of Rs.  :"}),e.jsx("h1",{className:"flex  pl-2 text-[12px] border-b border-dashed border-gray-600",children:(u=(b=this.props)==null?void 0:b.paymentData)==null?void 0:u.payment_amount})]}),e.jsxs("div",{className:" p-1 ",children:[e.jsx("h1",{className:" text-gray-900 font-bold text-[14px] -ml-1 ",children:"(in words ) :"}),e.jsx("br",{}),e.jsx("h1",{className:"-mt-5  text-[12px] border-b border-dashed border-gray-600 lowercase",children:(D=(v=this.props)==null?void 0:v.paymentData)==null?void 0:D.inWords})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Vide :"}),e.jsx("h1",{className:"flex  pl-2 text-[12px] border-b border-dashed border-gray-600",children:(A=(_=(w=this.props)==null?void 0:w.paymentData)==null?void 0:_.payment_details)==null?void 0:A.paymentMode})]})]}),e.jsxs("td",{className:"float-right ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Application No. :"}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(R=(k=this.props)==null?void 0:k.paymentData)==null?void 0:R.application_no})]}),((C=(P=this.props)==null?void 0:P.paymentData)==null?void 0:C.towards)!="Movable Vehicle"&&((M=(I=this.props)==null?void 0:I.paymentData)==null?void 0:M.towards)!="Hoarding"&&((E=(T=this.props)==null?void 0:T.paymentData)==null?void 0:E.towards)!="Agency"&&e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Holding No. :"}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(F=($=this.props)==null?void 0:$.paymentData)==null?void 0:F.holding_no})]}),((L=(H=this.props)==null?void 0:H.paymentData)==null?void 0:L.towards)!="Hoarding"&&((q=(S=this.props)==null?void 0:S.paymentData)==null?void 0:q.towards)!="Agency"&&e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Ward No. :"}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(J=(B=this.props)==null?void 0:B.paymentData)==null?void 0:J.wardNo})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Date From :"}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(z=(V=this.props)==null?void 0:V.paymentData)==null?void 0:z.valid_from})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Date Upto :"}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(W=(U=this.props)==null?void 0:U.paymentData)==null?void 0:W.valid_upto})]}),((Q=(O=this.props)==null?void 0:O.paymentData)==null?void 0:Q.module)=="Market"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:["Name of ",(G=(Y=this.props)==null?void 0:Y.paymentData)==null?void 0:G.towards,":"]}),e.jsx("h1",{className:"flex pl-2 text-[12px]",children:(X=(K=this.props)==null?void 0:K.paymentData)==null?void 0:X.entity_name})]}),((ee=(Z=this.props)==null?void 0:Z.paymentData)==null?void 0:ee.towards)!="Lodge"&&e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-bold text-[14px]",children:"Area :"}),e.jsxs("h1",{className:"flex pl-2 text-[12px]",children:[(ae=(se=this.props)==null?void 0:se.paymentData)==null?void 0:ae.floor_area," Sq.ft"]})]})]})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-10 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(re,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans  text-[14px]",children:["For Details Please Visit : ",`${x().email}`]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans  text-[14px]",children:["Or Call us at ",`${x().mobile_no}`," or ",`${x().mobile_no_2}`]})})]}),e.jsx("td",{className:"float-right mt-16"})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-[14px] text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})})]})})}}function he(){const{paymentId:c,wrkflowId:a}=de();console.log("param transcation id ..",c),console.log("param wrkflow id ..",a);const{getPaymentsuccessDetails:d}=oe(),t=o.useRef(),[l,i]=o.useState();ie("Payment Receipt"),o.useEffect(()=>{n()},[]);const n=()=>{const r={paymentId:c,workflowId:a};console.log("before fetch payment receipt....",r),ne.post(`${d}`,r,ce()).then(s=>{console.log("payment data 2",s),s.data.status&&i(s.data.data)}).catch(s=>{console.log(s)})};return console.log("payment data",l),e.jsxs("div",{children:[e.jsx(xe,{trigger:()=>e.jsx("button",{className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded   hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:"Print"}),content:()=>t.current}),e.jsx(pe,{ref:t,paymentData:l})]})}export{he as default};
