import{l as t,v as u,W as v,q as y,j as e,k as s,w as a,h as w}from"./index-401c61a8.js";import{C as A}from"./ComponentToPrint-5f9a56f0.js";import{Q as P}from"./QrCode-ada3c9bd.js";function T(){var i,o,d,m,h,x,f;const[S,c]=t.useState(!1),{paymentId:n}=u(),{api_paymentReceipt:N,header:g}=v();t.useRef(),t.useState(!1);const[p,b]=t.useState();t.useEffect(()=>{c(!0),y.post(N,{transactionNo:n},g).then(r=>{c(!1),console.log("Receipt Response",r),b(r.data.data)}).catch(r=>{console.log("Error while fetcking receipt DATA",r),c(!1)})},[n]);const l=p;return e(A,{content:e("div",{className:"font-tahoma",children:s("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container pb-12",children:[s("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e("div",{className:"",children:e("img",{src:(i=a())==null?void 0:i.ulb_logo,className:"h-20 mx-auto"})}),e("div",{className:"",children:e("img",{src:(o=a())==null?void 0:o.state_logo,alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e("div",{className:"",children:e("h1",{className:"font-bold text-4xl text-center uppercase ",children:(d=a())==null?void 0:d.ulb_name})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e("div",{className:"mx-auto",children:e("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:"water connection charge payment receipt"})})}),e("div",{children:e("table",{className:"w-full  p-2 mt-2",children:s("tr",{className:"",children:[s("td",{className:" ",children:[s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Transaction No :"}),e("h1",{className:"flex font-sans  pl-2",children:l==null?void 0:l.transactionNo})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Consumer No :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.applicationNo})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Consumer Name :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.customerName})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Category :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.category})]})]}),s("td",{className:" ",children:[s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Date :"}),e("h1",{className:"flex font-sans pl-2 ",children:w(l==null?void 0:l.transactionDate).format("DD/MM/yy")||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Mobile No :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.customerMobile})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Tab Size :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.tabize})]}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl"})]})]})})}),e("div",{children:e("table",{className:"w-full  p-2 mt-4",children:e("tr",{className:"",children:s("td",{className:" ",children:[s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"Address :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.address})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"A Sum of Rs.  :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.totalPaidAmount})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-sans font-semibold",children:"(in words) : "}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.paidAmtInWords})]}),s("div",{className:"flex p-1 text-xl",children:[s("h1",{className:"flex text-gray-900 font-sans font-semibold",children:["Towards : ",e("span",{className:" font-sans font-normal ml-1",children:l==null?void 0:l.towards})]}),s("h1",{className:"flex text-gray-900 font-sans  ml-8 font-semibold",children:["Vide  : ",e("span",{className:" font-sans ml-1 font-normal",children:l==null?void 0:l.paymentMode})]})]})]})})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 mt-3",children:e("div",{className:"",children:e("h1",{className:"font-bold text-xl text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e("div",{className:"",children:e("h1",{className:"font-bold text-xl text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),e("div",{children:s("table",{className:"w-full border border-gray-500 ",children:[e("thead",{className:" w-full",children:s("tr",{className:"border border-gray-500 text-xl font-sans font-bold text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:" ",children:"Description "})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:"",children:"Total Amount "})})]})}),s("tbody",{children:[s("tr",{className:"border border-gray-500 text-sm font-sans  ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:" Connection Fee"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:l!=null&&l.totalPaidAmount?" ₹ "+(l==null?void 0:l.totalPaidAmount):(l==null?void 0:l.totalPaidAmount)==0?0:"N/A"})}),e("td",{className:""})]}),s("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Payable Amount"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:l!=null&&l.totalPaidAmount?" ₹ "+(l==null?void 0:l.totalPaidAmount):(l==null?void 0:l.totalPaidAmount)==0?0:"N/A"})})]})]})]})}),e("div",{children:e("table",{className:"w-full mt-2 ",children:s("tr",{className:"",children:[s("td",{className:" ",children:[e("div",{className:"",children:e(P,{url:(m=a())==null?void 0:m.state_logo,size:"64"})}),e("div",{className:"flex ",children:s("h1",{className:"flex text-gray-900 font-sans text-lg",children:["For Details Please Visit : ",(h=a())==null?void 0:h.website]})}),e("div",{className:"flex ",children:s("h1",{className:"flex text-gray-900 font-sans text-lg",children:["Or Call us at ",(x=a())==null?void 0:x.mobile_no," OR ",(f=a())==null?void 0:f.mobile_no_2]})})]}),s("td",{className:"float-right mt-14",children:[e("div",{className:"flex ",children:e("h1",{className:"flex text-gray-900 font-sans text-lg",children:"In Collaboration with"})}),e("div",{className:"flex",children:e("h1",{className:"flex text-gray-900 font-sans text-lg",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e("div",{className:"",children:e("h1",{className:"font-semibold text-lg text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e("div",{className:"",children:e("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})})})}export{T as default};
