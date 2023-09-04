import{u as us,bv as ws,r as c,c as ks,a as Ps,k as vs,j as s,B as fs,S as Ss,Q as As,T as _s,co as Hs,n as t,bf as Bs,A as Es,N as Cs,bb as Fs}from"./index-76241749.js";import"./RazorpayPaymentScreen-fb820a4e.js";import{T as os}from"./TopTabs-1bf82671.js";function Os(Rs){var h,p,j,N,g,T,y,u,w,k,P,v,f,S,A,_,H,B,E,C,F,R,W,I,G,L,O,V,M,$,Y,q,z,U,K,Q,J,X,Z,D,ss,es,as,ls,rs,cs,ts,ds,is,xs,ns;const{t:r}=us(),{id:d,location:bs,tabIndex:ms}=ws();console.log("param demand screen...",d);const{roles:i}=c.useContext(ks),{propertyGenerateOrderId:Ws,api_getsafDemandById:hs}=Fs(),x=Ps();vs("SAF Demand Details"),c.useState(!1);const[e,ps]=c.useState();c.useState("");const[o,js]=c.useState(""),[b,n]=c.useState(!1),[Ns,m]=c.useState(!1),gs=["BACK OFFICE"],Ts=c.useMemo(()=>Array.isArray(i)&&i.some(a=>gs.includes(a)),[i]),ys=()=>{n(!0),m(!1),Es.post(hs,{id:d},Cs()).then(function(a){console.log("view demand for my saf..",a==null?void 0:a.data),js(a==null?void 0:a.data),ps(a==null?void 0:a.data),n(!1)}).catch(function(a){console.log("==2 details by id error...",a),m(!0),n(!1)})};return c.useEffect(()=>{ys()},[]),b?s.jsx(s.Fragment,{children:s.jsx(fs,{})}):Ns?s.jsx(Ss,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("roles in pd => ",i),s.jsxs(s.Fragment,{children:[s.jsx(As,{position:"top-right",autoClose:2e3}),b&&s.jsx(_s,{}),s.jsxs("div",{className:"w-full mx-auto md:px-6",children:[bs=="workflow"&&s.jsx("div",{className:"px-4",children:s.jsxs("button",{onClick:()=>x(`/saf-workflow/${ms}/${d}`),type:"button",className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:[s.jsx(Hs,{className:"inline text-lg"})," Back to Workflow"]})}),s.jsx("div",{className:"pt-10 hidden sm:block",children:s.jsx(os,{payButton:(e==null?void 0:e.paymentStatus)!==1&&(e==null?void 0:e.can_pay)===!0,payableAmount:(h=e==null?void 0:e.amounts)==null?void 0:h.payableAmount,isPayable:(p=e==null?void 0:e.amounts)==null?void 0:p.isPayable,title:r("mainHoldingPage.demandDetailsButton.label"),type:"application",id:d,safNo:o,active:"demand"})}),s.jsx("div",{className:"pt-10 block sm:hidden",children:s.jsx(os,{payButton:(e==null?void 0:e.paymentStatus)!==1&&(e==null?void 0:e.can_pay)===!0,payableAmount:(j=e==null?void 0:e.amounts)==null?void 0:j.payableAmount,title:"",type:"application",id:d,safNo:o,active:"demand"})}),Ts&&(e==null?void 0:e.paymentStatus)!==1&&(e==null?void 0:e.can_pay)===!0&&s.jsx("div",{className:"border-2 border-amber-500 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>x(`/waiver-demand-screen/${d}/saf`),children:"Waive Off Demand"}),(e==null?void 0:e.paymentStatus)===1&&s.jsxs("div",{className:"flex gap-2",children:[s.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:r("mainHoldingPage.allDemandPaidButton.label")}),(e==null?void 0:e.tran_no)!=null&&s.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>x(`/paymentReceipt/${encodeURIComponent(e==null?void 0:e.tran_no)}/saf`),children:r("mainHoldingPage.viewRecieptButton.label")})]}),s.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:s.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((g=(N=e==null?void 0:e.data)==null?void 0:N.basicDetails)==null?void 0:g.saf_no)}),s.jsxs("div",{className:"text-gray-500 text-xs",children:[r("mainHoldingPage.applicationNum.label"),r("mainHoldingPage.applicationSafNum.label")]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((y=(T=e==null?void 0:e.data)==null?void 0:T.basicDetails)==null?void 0:y.ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.holdingWardNumber.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((w=(u=e==null?void 0:e.data)==null?void 0:u.basicDetails)==null?void 0:w.ownership_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.holdingOwnershipType.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((P=(k=e==null?void 0:e.data)==null?void 0:k.basicDetails)==null?void 0:P.property_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.holdingPropertyType.label")})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((f=(v=e==null?void 0:e.data)==null?void 0:v.basicDetails)==null?void 0:f.holding_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.holdingResidentialType.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((A=(S=e==null?void 0:e.data)==null?void 0:S.basicDetails)==null?void 0:A.is_mobile_tower)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyMobileTower.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"font-semibold text-md",children:[t((H=(_=e==null?void 0:e.data)==null?void 0:_.basicDetails)==null?void 0:H.is_hoarding_board)," "]}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((E=(B=e==null?void 0:e.data)==null?void 0:B.basicDetails)==null?void 0:E.is_petrol_pump)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((F=(C=e==null?void 0:e.data)==null?void 0:C.basicDetails)==null?void 0:F.is_water_harvesting)}),s.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),s.jsx("div",{className:"",children:s.jsx(s.Fragment,{children:s.jsxs("div",{className:"mt-10",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[s.jsx("img",{src:Bs,alt:"pin",className:"w-5 inline"})," ",r("mainHoldingPage.demandTaxDetailHeadingText.label")]}),(e==null?void 0:e.status)&&s.jsxs("div",{className:"",children:[s.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[s.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),s.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),s.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[s.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1",children:s.jsxs("h1",{className:"p-2",children:["Total Pending years - ",s.jsxs("span",{className:"font-bold",children:[" ",(R=e==null?void 0:e.data)==null?void 0:R.pendingYrs]})]})}),s.jsxs("div",{className:" border-gray-200 p-2",children:[s.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:s.jsx("h1",{className:"p-2",children:"Floor Wise Tax Bifurcation "})}),s.jsx("div",{className:"w-full overflow-auto",children:s.jsxs("table",{className:"table-auto w-full ",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[s.jsx("th",{className:"border border-collapse  p-2",children:"Built-up Area (in Sqmt.) "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Alv "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Maintainance "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Value After Maintenance "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Aging Amount "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Tax Value "}),s.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",s.jsx("small",{className:"block",children:" (30%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",s.jsx("small",{className:"block",children:" (3%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",s.jsx("small",{className:"block",children:" (1%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",s.jsx("small",{className:"block"})]})]})}),s.jsx("tbody",{children:(I=(W=e==null?void 0:e.data)==null?void 0:W.floorsTaxes)==null?void 0:I.map(a=>s.jsxs("tr",{className:"text-xs font-semibold text-center",children:[s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.buildupAreaInSqmt}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.alv}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.maintantance10Perc,"(",a==null?void 0:a.maintancePerc,"%)"]}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.valueAfterMaintance}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.agingAmt,"(",a==null?void 0:a.agingPerc,"%) "]}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.taxValue}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.generalTax,"  "]}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.roadTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.firefightingTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.educationTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.waterTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.cleanlinessTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.sewerageTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.treeTax}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.professionalTax,"(",a==null?void 0:a.professionalTaxPerc,"%)"]}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.stateEducationTax,"(",a==null?void 0:a.stateEducationTaxPerc,"%)"]})]}))})]})})]}),s.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[s.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:s.jsx("h1",{className:"p-2",children:"Financial Year Wise Tax Bifurcation "})}),s.jsx("div",{className:"w-full overflow-auto",children:s.jsxs("table",{className:"table-auto w-full ",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[s.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",s.jsx("small",{className:"block"})]}),s.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),s.jsx("tbody",{children:(L=Object.entries((G=e==null?void 0:e.data)==null?void 0:G.fyearWiseTaxes))==null?void 0:L.map(([a,l])=>s.jsxs(s.Fragment,{children:[s.jsx("tr",{children:s.jsx("td",{colSpan:17,children:s.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",a]})})}),s.jsxs("tr",{className:"font-semibold text-xs text-center",children:[s.jsxs("td",{className:"border border-collapse p-2",children:[l==null?void 0:l.generalTax,"  "]}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.roadTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.firefightingTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.educationTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.waterTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.cleanlinessTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.sewerageTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.treeTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.professionalTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.stateEducationTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.totalTax})]})]}))})]})})]}),s.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[s.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:s.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation "})}),s.jsx("div",{className:"w-full overflow-auto",children:s.jsxs("table",{className:"table-auto w-full ",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[s.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),s.jsx("tbody",{children:s.jsxs("tr",{className:"font-semibold text-xs",children:[s.jsxs("td",{className:"border border-collapse p-2",children:[(V=(O=e==null?void 0:e.data)==null?void 0:O.grandTaxes)==null?void 0:V.generalTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[($=(M=e==null?void 0:e.data)==null?void 0:M.grandTaxes)==null?void 0:$.roadTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(Y=e==null?void 0:e.data)==null?void 0:Y.grandTaxes.firefightingTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(z=(q=e==null?void 0:e.data)==null?void 0:q.grandTaxes)==null?void 0:z.educationTax,"  "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(K=(U=e==null?void 0:e.data)==null?void 0:U.grandTaxes)==null?void 0:K.waterTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(J=(Q=e==null?void 0:e.data)==null?void 0:Q.grandTaxes)==null?void 0:J.cleanlinessTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(Z=(X=e==null?void 0:e.data)==null?void 0:X.grandTaxes)==null?void 0:Z.sewerageTax,"  "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(ss=(D=e==null?void 0:e.data)==null?void 0:D.grandTaxes)==null?void 0:ss.treeTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(as=(es=e==null?void 0:e.data)==null?void 0:es.grandTaxes)==null?void 0:as.professionalTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(rs=(ls=e==null?void 0:e.data)==null?void 0:ls.grandTaxes)==null?void 0:rs.stateEducationTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(ts=(cs=e==null?void 0:e.data)==null?void 0:cs.grandTaxes)==null?void 0:ts.totalTax," "]})]})})]})}),s.jsxs("div",{className:"bg-white py-4",children:[s.jsxs("h1",{className:"font-semibold p-1",children:["* Grand Total - ",(is=(ds=e==null?void 0:e.data)==null?void 0:ds.grandTaxes)==null?void 0:is.totalTax," "]}),s.jsxs("h1",{className:"font-semibold p-1",children:["* Reabte Amount - ",(xs=e==null?void 0:e.data)==null?void 0:xs.rebateAmt," "]}),s.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount - ",(ns=e==null?void 0:e.data)==null?void 0:ns.payableAmt," "]})]})]})]})]})]})})})]}),s.jsx("div",{className:"w-full h-40"})]}))}export{Os as default};
