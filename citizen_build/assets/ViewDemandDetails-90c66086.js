import{M as ps,r as c,u as vs,a as As,j as s,ag as Ss,S as _s,aE as Ps,a3 as r,aX as Es,A as Cs,w as Fs,f as Ls}from"./index-41e6223c.js";import{r as Ms}from"./rupee-ba1d5977.js";import{T as Bs}from"./TopTabs-a47c8c34.js";const Rs={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};ps.setAppElement("#root");function Vs(Is){var n,h,b,m,p,j,N,g,T,y,u,w,f,k,v,A,S,_,P,E,C,F,L,M,B,R,I,O,W,G,V,q,z,H,U,Y,K,X,J,Q,Z,$,D,ss,es,as,ls,rs,cs,ts,ds,xs;const[e,js]=c.useState(),[Ns,gs]=c.useState(""),[Ts,t]=c.useState(!1),[ys,x]=c.useState(!1),[us,i]=c.useState(!1),{id:o}=vs(),{api_getsafDemandById:ws}=Ls();As();function d(){i(!1)}const fs=()=>{x(!1),t(!0),Cs.post(ws,{id:o},Fs()).then(function(a){var l,is,os,ns,hs,bs,ms;console.log("view demand for my saf..",a==null?void 0:a.data),console.log(" rohan ==>",e==null?void 0:e.data.floorsTaxes),(l=a==null?void 0:a.data)!=null&&l.status&&(gs((is=a==null?void 0:a.data)==null?void 0:is.safNo),js(a==null?void 0:a.data),ks((ns=(os=a==null?void 0:a.data)==null?void 0:os.data)==null?void 0:ns.paymentStatus,(ms=(bs=(hs=a==null?void 0:a.data)==null?void 0:hs.data)==null?void 0:bs.basicDetails)==null?void 0:ms.doc_upload_status)),t(!1)}).catch(function(a){console.log("==at saf separate error...",a),x(!0),t(!1)})},ks=(a,l)=>{a==0&&l==0&&(console.log("inside useffect"),i(!0))};return c.useEffect(()=>{fs()},[]),Ts?s.jsxs(s.Fragment,{children:[s.jsx(Ss,{}),s.jsx("div",{className:"min-h-screen"})]}):ys?s.jsx(_s,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"w-full mx-auto",children:[s.jsxs("div",{className:"",children:[s.jsx(Bs,{payButton:(e==null?void 0:e.paymentStatus)==0&&((n=e==null?void 0:e.basicDetails)==null?void 0:n.doc_upload_status)==1,payableAmount:(h=e==null?void 0:e.amounts)==null?void 0:h.payableAmount,title:"Demand Details",type:"application",id:o,safNo:Ns,active:"demand"}),(e==null?void 0:e.paymentStatus)===1&&s.jsx("div",{className:"",children:s.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:"All Demand Paid"})})]}),(e==null?void 0:e.paymentStatus)==0&&((b=e==null?void 0:e.basicDetails)==null?void 0:b.doc_upload_status)==0&&s.jsx("div",{className:"",children:s.jsxs("div",{className:"items-center text-yellow-600",children:[s.jsx(Ps,{className:"inline mr-2"}),"Upload all your property related documents first then pay your property tax to send your application for verification"]})}),s.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:s.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:r((p=(m=e==null?void 0:e.data)==null?void 0:m.basicDetails)==null?void 0:p.saf_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:r((N=(j=e==null?void 0:e.data)==null?void 0:j.basicDetails)==null?void 0:N.ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:r((T=(g=e==null?void 0:e.data)==null?void 0:g.basicDetails)==null?void 0:T.ownership_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:r((u=(y=e==null?void 0:e.data)==null?void 0:y.basicDetails)==null?void 0:u.property_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:r((f=(w=e==null?void 0:e.data)==null?void 0:w.basicDetails)==null?void 0:f.holding_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:r((v=(k=e==null?void 0:e.data)==null?void 0:k.basicDetails)==null?void 0:v.is_mobile_tower)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"font-semibold text-md",children:[r((S=(A=e==null?void 0:e.data)==null?void 0:A.basicDetails)==null?void 0:S.is_hoarding_board)," "]}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:r((P=(_=e==null?void 0:e.data)==null?void 0:_.basicDetails)==null?void 0:P.is_petrol_pump)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:r((C=(E=e==null?void 0:e.data)==null?void 0:E.basicDetails)==null?void 0:C.is_water_harvesting)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),s.jsx("div",{className:"",children:s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-10",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[s.jsx("img",{src:Ms,alt:"pin",className:"w-5 inline"})," Tax Details"]}),(e==null?void 0:e.status)&&s.jsxs("div",{className:"",children:[s.jsxs("h1",{className:"px-1 flex  font-serif underline mt-4 -ml-3",children:[s.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),s.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),s.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[s.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),s.jsxs("div",{className:" border-gray-200 p-2",children:[s.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:s.jsx("h1",{className:"p-2",children:"Floor Wise Tax Bifurcation "})}),s.jsx("div",{className:"w-full overflow-auto",children:s.jsxs("table",{className:"table-auto w-full ",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[s.jsx("th",{className:"border border-collapse  p-2",children:"Built-up Area (in Sqmt.) "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Alv "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Maintainance "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Value After Maintenance "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Aging Amount "}),s.jsx("th",{className:"border border-collapse  p-2",children:"Tax Value "}),s.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",s.jsx("small",{className:"block",children:" (30%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",s.jsx("small",{className:"block",children:" (3%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",s.jsx("small",{className:"block",children:" (2%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",s.jsx("small",{className:"block",children:" (1%)"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",s.jsx("small",{className:"block"})]})]})}),s.jsx("tbody",{children:(L=(F=e==null?void 0:e.data)==null?void 0:F.floorsTaxes)==null?void 0:L.map(a=>s.jsxs("tr",{className:"text-xs font-semibold text-center",children:[s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.buildupAreaInSqmt}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.alv}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.maintantance10Perc,"(",a==null?void 0:a.maintancePerc,"%)"]}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.valueAfterMaintance}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.agingAmt,"(",a==null?void 0:a.agingPerc,"%) "]}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.taxValue}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.generalTax,"  "]}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.roadTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.firefightingTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.educationTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.waterTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.cleanlinessTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.sewerageTax}),s.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.treeTax}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.professionalTax,"(",a==null?void 0:a.professionalTaxPerc,"%)"]}),s.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.stateEducationTax,"(",a==null?void 0:a.stateEducationTaxPerc,"%)"]})]}))})]})})]}),s.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[s.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:s.jsx("h1",{className:"p-2",children:"Financial Year Wise Tax Bifurcation "})}),s.jsx("div",{className:"w-full overflow-auto",children:s.jsxs("table",{className:"table-auto w-full ",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[s.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tax 1 ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",s.jsx("small",{className:"block"})]}),s.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),s.jsx("tbody",{children:(B=Object.entries((M=e==null?void 0:e.data)==null?void 0:M.fyearWiseTaxes))==null?void 0:B.map(([a,l])=>s.jsxs(s.Fragment,{children:[s.jsx("tr",{children:s.jsx("td",{colSpan:17,children:s.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",a]})})}),s.jsxs("tr",{className:"font-semibold text-xs text-center",children:[s.jsxs("td",{className:"border border-collapse p-2",children:[l==null?void 0:l.generalTax,"  "]}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.roadTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.firefightingTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.educationTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.waterTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.cleanlinessTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.sewerageTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.treeTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.tax1}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.professionalTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.stateEducationTax}),s.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.totalTax})]})]}))})]})})]}),s.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[s.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:s.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation "})}),s.jsx("div",{className:"w-full overflow-auto",children:s.jsxs("table",{className:"table-auto w-full ",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[s.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Tax 1 ",s.jsx("small",{className:"block"})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",s.jsx("small",{className:"block",children:" "})]}),s.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),s.jsx("tbody",{children:s.jsxs("tr",{className:"font-semibold text-xs",children:[s.jsxs("td",{className:"border border-collapse p-2",children:[(I=(R=e==null?void 0:e.data)==null?void 0:R.grandTaxes)==null?void 0:I.generalTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(W=(O=e==null?void 0:e.data)==null?void 0:O.grandTaxes)==null?void 0:W.roadTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(G=e==null?void 0:e.data)==null?void 0:G.grandTaxes.firefightingTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(q=(V=e==null?void 0:e.data)==null?void 0:V.grandTaxes)==null?void 0:q.educationTax,"  "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(H=(z=e==null?void 0:e.data)==null?void 0:z.grandTaxes)==null?void 0:H.waterTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(Y=(U=e==null?void 0:e.data)==null?void 0:U.grandTaxes)==null?void 0:Y.cleanlinessTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(X=(K=e==null?void 0:e.data)==null?void 0:K.grandTaxes)==null?void 0:X.sewerageTax,"  "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(Q=(J=e==null?void 0:e.data)==null?void 0:J.grandTaxes)==null?void 0:Q.treeTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[($=(Z=e==null?void 0:e.data)==null?void 0:Z.grandTaxes)==null?void 0:$.tax1," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(ss=(D=e==null?void 0:e.data)==null?void 0:D.grandTaxes)==null?void 0:ss.professionalTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(as=(es=e==null?void 0:e.data)==null?void 0:es.grandTaxes)==null?void 0:as.stateEducationTax," "]}),s.jsxs("td",{className:"border border-collapse p-2",children:[(rs=(ls=e==null?void 0:e.data)==null?void 0:ls.grandTaxes)==null?void 0:rs.totalTax," "]})]})})]})}),s.jsxs("div",{className:"bg-white py-4",children:[s.jsxs("h1",{className:"font-semibold p-1",children:["* Grand Total - ",(ts=(cs=e==null?void 0:e.data)==null?void 0:cs.grandTaxes)==null?void 0:ts.totalTax," "]}),s.jsxs("h1",{className:"font-semibold p-1",children:["* Reabte Amount - ",(ds=e==null?void 0:e.data)==null?void 0:ds.rebateAmt," "]}),s.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount - ",(xs=e==null?void 0:e.data)==null?void 0:xs.payableAmt," "]})]})]})]})]})]}),s.jsxs("div",{className:"mt-10",children:[(e==null?void 0:e.details)&&{},s.jsx("div",{className:"h-20 w-full"})]})]})})]}),s.jsx(ps,{isOpen:us,onRequestClose:d,style:Rs,contentLabel:"Example Modal",children:s.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[s.jsx("button",{onClick:d,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:s.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:s.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),s.jsxs("div",{class:"p-6 text-center",children:[s.jsxs("div",{className:"w-full flex h-10",children:[" ",s.jsx("span",{className:"mx-auto",children:s.jsx(Es,{className:"",size:30})})]}),s.jsx("h3",{class:"mb-5 text-lg font-normal  text-gray-500",children:"Upload document first then pay tax"}),s.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-10 py-2.5 text-center mr-2",onClick:d,children:"OK"})]})]})})]})}export{Vs as default};
