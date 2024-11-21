import{b0 as g,j as e,a2 as n,aK as p,c5 as N,r as a,u as y,A as v,w,ag as _,S,c6 as k,D as A,c7 as T,F,bF as R}from"./index-d8dc37f9.js";const M="/assets/swachhBharat-876b1398.png";class P extends g.Component{render(){var d,o,x,l;const r=(d=this.props)==null?void 0:d.samDetails,s=(x=(o=this==null?void 0:this.props)==null?void 0:o.samDetails)==null?void 0:x.ulbDetails,m=["The tax assessment list is displayed on the website of Ranchi Municipal Corporation : For Details Please Visit : udhd jharkhand.gov.in OR Call us at 1800 8904116 or 0651-2500700.","It is advised to inform the corporation by installing rainwater conservation structure and get relief from additional house tax.","As per the provisions of para 11.4 of the concerned regulation. If RWH has not been provided then the penalty @ 50% of property tax will be imposed.","Property tax be paid quartely in each financial year.","If the total holding tax of current year paid upto 30th June of the same year then 5% rebate will be given to the tax payer.","If the holding tax is not paid when the stipulated period then simple interest @ 1% will be charged.","This tax assessment is being done on the basis of your self-determination and declaration made, this self-assessment-cum-deciaration can be conducted by the local corporation in due course of time and if the facts are found to be incorrect, the penalty prescribed in accordance with manual Condica 13.2 (Fine) and difference amount will be payable.","The property so collected by Ranchi Municipal Corporation does not confer any legal status of those buildings and also not confer any legal rights to its owners or occupiers.","If the last digit of your new holding number is 5/6/7/8, then it will be considered under the category of super structures."].map((c,i)=>e.jsxs("li",{children:[e.jsxs("span",{children:[i+1,". "]}),e.jsx("span",{children:c})]}));return e.jsx(e.Fragment,{children:e.jsx("div",{id:"printableArea",children:e.jsx("div",{className:"mt-4 flex items-center justify-center text-black",children:e.jsxs("div",{className:"container w-[70%] border-2 border-dashed m-2 overflow-x-hidden border-black py-4 px-3 relative",children:[e.jsx("img",{src:s==null?void 0:s.state_logo,alt:"",srcset:"",className:"absolute top-[18%] left-[18%] h-[40vh] backImage opacity-10"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4",children:[e.jsx("img",{src:s==null?void 0:s.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),e.jsx("span",{className:"text-3xl font-bold uppercase",children:s==null?void 0:s.ulb_name})]}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"w-full flex justify-center mt-2",children:e.jsx("div",{className:"grid grid-cols-6 w-max",children:e.jsx("div",{className:"col-span-6 uppercase border-2 font-bold border-black px-8 py-1 text-md",children:"Self Assessment Memo"})})})})]}),e.jsxs("div",{children:[e.jsx("hr",{className:"border-black mt-4 mb-2"}),e.jsx("div",{className:"font-semibold text-xs text-center",children:"Information regarding property tax under section 152(3) of Jharkhand Municipal Act-2011"}),e.jsx("hr",{className:"border-black mb-4 mt-2"})]}),e.jsxs("div",{className:"flex justify-between font-semibold mb-2 gap-2",children:[e.jsxs("div",{className:"text-start text-xs font-semibold w-[65%]",children:["Mr/Mrs/Ms: ",e.jsxs("span",{className:"font-normal capitalize",children:[n(r==null?void 0:r.owner_name)," ",n(r==null?void 0:r.relation_type)," ",n(r==null?void 0:r.guardian_name)]})," ",e.jsx("br",{}),"Address: ",e.jsx("span",{className:"font-normal capitalize",children:n(r==null?void 0:r.prop_address)})]}),e.jsxs("div",{className:"text-left text-xs w-[35%]",children:["Memo No.: ",e.jsx("span",{className:"font-normal",children:n(r==null?void 0:r.memo_no)})," ",e.jsx("br",{}),"Date: ",e.jsx("span",{className:"font-normal",children:n(r==null?void 0:r.memo_date)})," ",e.jsx("br",{}),"Effective: ",e.jsxs("span",{className:"font-normal",children:[(r==null?void 0:r.from_qtr)==1&&e.jsx(e.Fragment,{children:"First"}),(r==null?void 0:r.from_qtr)==2&&e.jsx(e.Fragment,{children:"Second"}),(r==null?void 0:r.from_qtr)==3&&e.jsx(e.Fragment,{children:"Third"}),(r==null?void 0:r.from_qtr)==4&&e.jsx(e.Fragment,{children:"Fourth"})," Quarter ",n(r==null?void 0:r.from_fyear)]})," ",e.jsx("br",{})]})]}),e.jsx("div",{children:e.jsxs("p",{className:"text-xs mb-2",children:["  You are hereby informed that your new ",(r==null?void 0:r.pt_no)==""||(r==null?void 0:r.pt_no)==null?"Holding":"Property Tax"," Number - ",e.jsx("span",{className:"font-semibold",children:(r==null?void 0:r.pt_no)==""||(r==null?void 0:r.pt_no)==null?r==null?void 0:r.holding_no:r==null?void 0:r.pt_no})," in Ward No - ",e.jsx("span",{className:"font-semibold",children:n(r==null?void 0:r.ward_no)}),". The annual rental value has been fixed ",e.jsx("span",{className:"font-semibold",children:p(r==null?void 0:r.arv)}),"/- as per your self assessment declaration form are accordingly the quarterly is as follows."]})}),e.jsx("div",{children:e.jsxs("table",{className:"text-xs w-full border-2 border-black",children:[e.jsx("tr",{className:"font-semibold",children:e.jsx("td",{colSpan:3,className:"text-center",children:"Self assessment tax notice"})}),e.jsxs("tr",{className:"font-semibold",children:[e.jsx("td",{className:"border-2 border-black w-[25%] px-2",children:"Sl.No."}),e.jsx("td",{className:"border-2 border-black w-[50%] px-2",children:"Particulars"}),e.jsx("td",{className:"border-2 border-black w-[25%] px-2",children:"Amount"})]}),(r==null?void 0:r.taxTable)!=null&&((l=Object.entries(r==null?void 0:r.taxTable))==null?void 0:l.map(([c,i],t)=>e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 border-2 border-black",children:t+1}),e.jsx("td",{className:"px-2 border-2 border-black",children:n(c)}),e.jsx("td",{className:"px-2 border-2 border-black",children:p(i)})]})}))),e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 border-2 border-black font-semibold text-right",colSpan:2,children:"Total Amount (per quarter)"}),e.jsxs("td",{className:"px-2 border-2 border-black",children:[p(r==null?void 0:r.quarterly_tax)," "]})]})]})}),e.jsx("div",{className:"my-4 w-full flex flex-row justify-between items-start",children:e.jsx("div",{children:e.jsx(N,{size:"60",url:window.location.href})})}),e.jsxs("div",{className:"text-xs",children:[e.jsx("div",{className:"font-semibold my-2",children:"Note:-"}),e.jsx("ol",{className:"w-full flex flex-col gap-x-2 pl-10",children:m})]}),e.jsx("div",{className:"font-semibold mt-4 text-sm",children:"NOTE: This is a computer generated receipt. This receipt does not require physical signature."}),e.jsx("div",{className:"flex justify-center items-center mt-2",children:e.jsx("img",{src:M,alt:"",className:"h-10 opacity-70"})})]})})})})}}const I=()=>{const h=a.useRef(),r=y(),{api_samReciept:s}=R();a.useState(!1);const[b,m]=a.useState(),[d,o]=a.useState(!1),[x,l]=a.useState(!1),[c,i]=a.useState("");return a.useEffect(()=>{o(!0),v.post(s,{memoId:r==null?void 0:r.id},w()).then(t=>{var f,u,j;(f=t==null?void 0:t.data)!=null&&f.status?m((u=t==null?void 0:t.data)==null?void 0:u.data):(l(!0),i((j=t==null?void 0:t.data)==null?void 0:j.message)),console.log("getting sam memo details => ",t),o(!1)}).catch(t=>{console.log("getting sam memo error => ",t),o(!1),l(!0)})},[]),d?e.jsx(e.Fragment,{children:e.jsx(_,{})}):x?e.jsx(S,{title:"Server is busy",desc:c,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs("div",{children:[e.jsx(k,{trigger:()=>e.jsx("div",{className:"z-10 fixed bottom-10 text-center  justify-center items-center  w-screen",children:e.jsxs("button",{className:A,children:[e.jsx(T,{className:"inline text-lg"}),"print"]})}),content:()=>h.current}),e.jsx(P,{ref:h,samDetails:b,ulbData:F()})]})};export{I as default};
