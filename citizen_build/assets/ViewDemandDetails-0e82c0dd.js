import{M as G,r,u as ce,a as ie,j as e,ad as ne,S as oe,aB as de,a0 as l,a9 as a,x as pe,aE as he,z as be,aH as ye,aU as me,A as fe,v as je,f as Ne}from"./index-60abe2ed.js";import{r as ue}from"./rupee-ba1d5977.js";import{b as ge}from"./brief-77d733cf.js";import{T as ve}from"./TopTabs-4a541130.js";const we={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};G.setAppElement("#root");function Te(Ae){var p,h,b,y,m,f,j,N,u,g,v,w,A,_,z,S,P,T,R,C,L,E,H,O,k,B,F,V,I,M;const[s,J]=r.useState(),[X,D]=r.useState(""),[ee,c]=r.useState(!1),[te,o]=r.useState(!1),[se,d]=r.useState(!1),{id:i}=ce(),{api_getsafDemandById:le}=Ne(),ae=ie();function n(){d(!1)}const xe=()=>{o(!1),c(!0),fe.post(le,{id:i},je()).then(function(t){var x,U,W,Q,$,q,K,Y,Z;console.log("view demand for my saf..",(x=t==null?void 0:t.data)==null?void 0:x.data),(U=t==null?void 0:t.data)!=null&&U.status&&(D((W=t==null?void 0:t.data)==null?void 0:W.safNo),J((Q=t==null?void 0:t.data)==null?void 0:Q.data),re((q=($=t==null?void 0:t.data)==null?void 0:$.data)==null?void 0:q.paymentStatus,(Z=(Y=(K=t==null?void 0:t.data)==null?void 0:K.data)==null?void 0:Y.basicDetails)==null?void 0:Z.doc_upload_status)),c(!1)}).catch(function(t){console.log("==at saf separate error...",t),o(!0),c(!1)})},re=(t,x)=>{t==0&&x==0&&(console.log("inside useffect"),d(!0))};return r.useEffect(()=>{xe()},[]),ee?e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx("div",{className:"min-h-screen"})]}):te?e.jsx(oe,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full mx-auto",children:[e.jsxs("div",{className:"",children:[e.jsx(ve,{payButton:(s==null?void 0:s.paymentStatus)==0&&((p=s==null?void 0:s.basicDetails)==null?void 0:p.doc_upload_status)==1,payableAmount:(h=s==null?void 0:s.amounts)==null?void 0:h.payableAmount,title:"Demand Details",type:"application",id:i,safNo:X,active:"demand"}),(s==null?void 0:s.paymentStatus)===1&&e.jsx("div",{className:"",children:e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:"All Demand Paid"})})]}),(s==null?void 0:s.paymentStatus)==0&&((b=s==null?void 0:s.basicDetails)==null?void 0:b.doc_upload_status)==0&&e.jsx("div",{className:"",children:e.jsxs("div",{className:"items-center text-yellow-600",children:[e.jsx(de,{className:"inline mr-2"}),"Upload all your property related documents first then pay your property tax to send your application for verification"]})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((y=s==null?void 0:s.basicDetails)==null?void 0:y.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((m=s==null?void 0:s.basicDetails)==null?void 0:m.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:l((f=s==null?void 0:s.basicDetails)==null?void 0:f.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:l((j=s==null?void 0:s.basicDetails)==null?void 0:j.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((N=s==null?void 0:s.basicDetails)==null?void 0:N.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((u=s==null?void 0:s.basicDetails)==null?void 0:u.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((g=s==null?void 0:s.basicDetails)==null?void 0:g.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[l((v=s==null?void 0:s.basicDetails)==null?void 0:v.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:l((w=s==null?void 0:s.basicDetails)==null?void 0:w.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((A=s==null?void 0:s.basicDetails)==null?void 0:A.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsx("div",{className:"",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:ue,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Total Payable Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"= "}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Tax Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Late Assessment Penalty"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"1% Penalty )"}),e.jsx("div",{className:"flex-initial px-2",children:"-"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Rebate"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Special Rebate )"})]}),(s==null?void 0:s.paymentStatus)!=1&&e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tax Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate( ",(_=s==null?void 0:s.amounts)==null?void 0:_.rebatePerc,"% in ₹)"]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Special Rebate( ",(z=s==null?void 0:s.amounts)==null?void 0:z.specialRebatePerc,"% in ₹)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((S=s==null?void 0:s.amounts)==null?void 0:S.totalTax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((P=s==null?void 0:s.amounts)==null?void 0:P.lateAssessmentPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((T=s==null?void 0:s.amounts)==null?void 0:T.totalOnePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((R=s==null?void 0:s.amounts)==null?void 0:R.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((C=s==null?void 0:s.amounts)==null?void 0:C.specialRebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((L=s==null?void 0:s.amounts)==null?void 0:L.payableAmount)})]})})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Effect From"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Conservancy/Latrine Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"RWH Penalty"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Ruleset"})]})}),e.jsx("tbody",{className:"text-sm",children:(E=s==null?void 0:s.taxDetails)==null?void 0:E.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.holding_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.amount)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left  ",children:[" ",e.jsx("span",{className:`${(t==null?void 0:t.ruleSet)==="RuleSet3"?"bg-green-100":"bg-red-100"} px-2 py-1 rounded-lg`,children:(t==null?void 0:t.ruleSet)==="RuleSet3"?"Current":"Old"})," "]})]}))})]})]}),((O=(H=s==null?void 0:s.amounts)==null?void 0:H.rebates)==null?void 0:O.length)>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:(B=(k=s==null?void 0:s.amounts)==null?void 0:k.rebates)==null?void 0:B.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[(s==null?void 0:s.details)&&e.jsxs("div",{children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:ge,alt:"pin",className:"w-5 inline"})," Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto 31-03-2016)"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Annual Rental Value (ARV)"}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Builtup Area"}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Rental Rate"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:`font-bold text-left text-sm ${(s==null?void 0:s.paymentStatus)===1?"bg-red-100":"bg-white"} text-gray-600`,children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Latrine/Conservancy Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Additional Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Adjuted Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Balance"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Due Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% penalty (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(F=s.details)==null?void 0:F.map((t,x)=>e.jsxs("tr",{className:`${(s==null?void 0:s.paymentStatus)===1?"bg-red-100":"bg-white"} shadow-lg border-b border-gray-200`,children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.holding_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:pe(t==null?void 0:t.due_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.onePercPenaltyTax),"(",l(t==null?void 0:t.onePercPenalty),"%)"]})]}))})})]})]}),(s==null?void 0:s.paymentStatus)!==1&&e.jsx("div",{className:"mt-10 flex",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:he((V=s==null?void 0:s.amounts)==null?void 0:V.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:(s==null?void 0:s.paymentStatus)==0&&((I=s==null?void 0:s.basicDetails)==null?void 0:I.doc_upload_status)==1&&e.jsxs("button",{onClick:()=>ae(`/property-payment/${i}/saf`),type:"submit",className:be,children:[(M=s==null?void 0:s.amounts)!=null&&M.isPayable?"Pay Tax":"Submit",e.jsx("span",{children:e.jsx(ye,{className:"inline font-bold text-xl"})})]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})})]}),e.jsx(G,{isOpen:se,onRequestClose:n,style:we,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:n,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(me,{className:"",size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal  text-gray-500",children:"Upload document first then pay tax"}),e.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-10 py-2.5 text-center mr-2",onClick:n,children:"OK"})]})]})})]})}export{Te as default};
