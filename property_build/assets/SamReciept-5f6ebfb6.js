import{bw as j,k as g,r as n,A as N,O as y,j as e,B as v,S as w,U as k,cy as _,T as S,n as t,f as c,cz as T,bQ as A}from"./index-33b137df.js";import{s as F}from"./swachhBharat-9ce9fd2e.js";const M="/assets/rmclogo-fd7342bb.png",q="/assets/rmclogo2-9956f578.jpg",L=()=>{var x;const l=j(),{api_samReciept:h}=A();g("Self Assessment Memo");const[p,I]=n.useState(!1),[r,m]=n.useState(),[f,i]=n.useState(!1),[b,d]=n.useState(!1);n.useEffect(()=>{i(!1),d(!0),N.post(h,{memoId:l==null?void 0:l.id},y()).then(s=>{var o,a;console.log("getting sam memo details => ",s),d(!1),(o=s==null?void 0:s.data)!=null&&o.status?m((a=s==null?void 0:s.data)==null?void 0:a.data):i(!0)}).catch(s=>{console.log("getting sam memo error => ",s),d(!1),i(!0)})},[]);const u=["The tax assessment list is displayed on the website of Ranchi Municipal Corporation : For Details Please Visit : udhd jharkhand.gov.in OR Call us at 1800 8904116 or 0651-2500700.","It is advised to inform the corporation by installing rainwater conservation structure and get relief from additional house tax.","As per the provisions of para 11.4 of the concerned regulation. If RWH has not been provided then the penalty @ 50% of property tax will be imposed.","Property tax be paid quartely in each financial year.","If the total holding tax of current year paid upto 30th June of the same year then 5% rebate will be given to the tax payer.","If the holding tax is not paid when the stipulated period then simple interest @ 1% will be charged.","This tax assessment is being done on the basis of your self-determination and declaration made, this self-assessment-cum-deciaration can be conducted by the local corporation in due course of time and if the facts are found to be incorrect, the penalty prescribed in accordance with manual Condica 13.2 (Fine) and difference amount will be payable.","The property so collected by Ranchi Municipal Corporation does not confer any legal status of those buildings and also not confer any legal rights to its owners or occupiers.","If the last digit of your new holding number is 5/6/7/8, then it will be considered under the category of super structures."].map((s,o)=>e.jsxs("li",{children:[e.jsxs("span",{children:[o+1,". "]}),e.jsx("span",{children:s})]}));return b?e.jsx(e.Fragment,{children:e.jsx(v,{})}):f?e.jsx(w,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[p&&e.jsx(k,{}),e.jsx(_,{}),e.jsx(S,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:"flex items-center justify-center text-black print:border-2 print:border-dashed print:border-black",id:"printableArea",children:e.jsxs("div",{className:"container w-[70%]  overflow-x-hidden border-2 print:border-none border-dashed border-black py-4 px-3 relative",children:[e.jsx("img",{src:M,alt:"",srcset:"",className:"absolute top-[20%] left-[18%] backImage opacity-10"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4",children:[e.jsx("img",{src:q,alt:"Logo",srcset:"",className:"h-16 w-16"}),e.jsx("span",{className:"text-3xl font-bold uppercase",children:"Ranchi Municipal Corporation"})]}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"w-full flex justify-center mt-2",children:e.jsx("div",{className:"grid grid-cols-6 w-max",children:e.jsx("div",{className:"col-span-6 uppercase border-2 font-bold border-black px-8 py-1 text-md",children:"Self Assessment Memo"})})})})]}),e.jsxs("div",{children:[e.jsx("hr",{className:"border-black mt-4 mb-2"}),e.jsx("div",{className:"font-semibold text-xs text-center",children:"Information regarding property tax under section 152(3) of Jharkhand Municipal Act-2011"}),e.jsx("hr",{className:"border-black mb-4 mt-2"})]}),e.jsxs("div",{className:"flex justify-between font-semibold mb-2 gap-2",children:[e.jsxs("div",{className:"text-start text-xs font-semibold w-[65%]",children:["Mr/Mrs/Ms: ",e.jsxs("span",{className:"font-normal capitalize",children:[t(r==null?void 0:r.owner_name)," ",t(r==null?void 0:r.relation_type)," ",t(r==null?void 0:r.guardian_name)]})," ",e.jsx("br",{}),"Address: ",e.jsx("span",{className:"font-normal capitalize",children:t(r==null?void 0:r.prop_address)})]}),e.jsxs("div",{className:"text-left text-xs w-[35%]",children:["Memo No.: ",e.jsx("span",{className:"font-normal",children:t(r==null?void 0:r.memo_no)})," ",e.jsx("br",{}),"Date: ",e.jsx("span",{className:"font-normal",children:t(r==null?void 0:r.memo_date)})," ",e.jsx("br",{}),"Effective: ",e.jsxs("span",{className:"font-normal",children:[(r==null?void 0:r.from_qtr)==1&&e.jsx(e.Fragment,{children:"First"}),(r==null?void 0:r.from_qtr)==2&&e.jsx(e.Fragment,{children:"Second"}),(r==null?void 0:r.from_qtr)==3&&e.jsx(e.Fragment,{children:"Third"}),(r==null?void 0:r.from_qtr)==4&&e.jsx(e.Fragment,{children:"Fourth"})," Quarter ",t(r==null?void 0:r.from_fyear)]})," ",e.jsx("br",{})]})]}),e.jsx("div",{children:e.jsxs("p",{className:"text-xs mb-2",children:["  You are hereby informed that your new ",(r==null?void 0:r.pt_no)==""||(r==null?void 0:r.pt_no)==null?"Holding":"Property Tax"," Number - ",e.jsx("span",{className:"font-semibold",children:(r==null?void 0:r.pt_no)==""||(r==null?void 0:r.pt_no)==null?r==null?void 0:r.holding_no:r==null?void 0:r.pt_no})," in Ward No - ",e.jsx("span",{className:"font-semibold",children:t(r==null?void 0:r.ward_no)}),". The annual rental value has been fixed ",e.jsx("span",{className:"font-semibold",children:c(r==null?void 0:r.arv)}),"/- as per your self assessment declaration form are accordingly the quarterly is as follows."]})}),e.jsx("div",{children:e.jsxs("table",{className:"text-xs w-full border-2 border-black",children:[e.jsx("tr",{className:"font-semibold",children:e.jsx("td",{colSpan:3,className:"text-center",children:"Self assessment tax notice"})}),e.jsxs("tr",{className:"font-semibold",children:[e.jsx("td",{className:"border-2 border-black w-[25%] px-2",children:"Sl.No."}),e.jsx("td",{className:"border-2 border-black w-[50%] px-2",children:"Particulars"}),e.jsx("td",{className:"border-2 border-black w-[25%] px-2",children:"Amount"})]}),(r==null?void 0:r.taxTable)!=null&&((x=Object.entries(r==null?void 0:r.taxTable))==null?void 0:x.map(([s,o],a)=>e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 border-2 border-black",children:a+1}),e.jsx("td",{className:"px-2 border-2 border-black",children:t(s)}),e.jsx("td",{className:"px-2 border-2 border-black",children:c(o)})]})}))),e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 border-2 border-black font-semibold text-right",colSpan:2,children:"Total Amount (per quarter)"}),e.jsxs("td",{className:"px-2 border-2 border-black",children:[c(r==null?void 0:r.quarterly_tax)," "]})]})]})}),e.jsx("div",{className:"my-4 w-full flex flex-row justify-between items-start",children:e.jsx("div",{children:e.jsx(T,{size:"60",url:window.location.href})})}),e.jsxs("div",{className:"text-xs",children:[e.jsx("div",{className:"font-semibold my-2",children:"Note:-"}),e.jsx("ol",{className:"w-full flex flex-col gap-x-2 pl-10",children:u})]}),e.jsx("div",{className:"font-semibold mt-4 text-sm",children:"NOTE: This is a computer generated receipt. This receipt does not require physical signature."}),e.jsx("div",{className:"flex justify-center items-center mt-2",children:e.jsx("img",{src:F,alt:"",className:"h-10 opacity-70"})})]})})]})};export{L as default};
