import{u as Ae,bv as He,r as c,c as De,a as _e,k as Ee,j as e,B as Ce,S as Fe,Q as Be,T as We,n as i,bf as Re,A as Ge,N as Ie,bb as Le}from"./index-1c655db5.js";import"./RazorpayPaymentScreen-b4255dc9.js";import{T as Me}from"./TopTabs-1d9ed7c5.js";function qe(s){var o,j,N,g,T,y,p,u,w,k,P,v,S,f,A,H,D,_,E,C,F,B,W,R,G,I,L,M,O,V,Y,$,q,z,K,Q,U,J,X,Z,ee,ae,se,le,de,re,ce,te,ie,xe,ne,me,be,he,oe,je,Ne,ge,Te,ye;const{t:r}=Ae(),{id:x}=He();console.log("param demand screen holding...",x);const{roles:n}=c.useContext(De),{propertyGenerateHoldingOrderId:Oe,api_getHoldingDemandById:pe}=Le(),ue=_e();c.useState(!1);const[d,we]=c.useState(),[t,ke]=c.useState();c.useState("");const[b,m]=c.useState(!1);c.useState();const[Pe,h]=c.useState(!1);Ee("Holding Demand Details");const ve=["BACK OFFICE"],Se=c.useMemo(()=>Array.isArray(n)&&n.some(a=>ve.includes(a)),[n]),fe=()=>{m(!0),h(!1),Ge.post(`${pe}`,{propId:x},Ie()).then(function(a){var l;console.log("view deamnd details at property in egov...",a==null?void 0:a.data),we((l=a==null?void 0:a.data)==null?void 0:l.data),ke(a==null?void 0:a.data),m(!1)}).catch(function(a){console.log("at error part.",a),h(!0),m(!1)})};return c.useEffect(()=>{fe()},[]),b?e.jsx(e.Fragment,{children:e.jsx(Ce,{})}):Pe?e.jsx(Fe,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(Be,{position:"top-right",autoClose:2e3}),b&&e.jsx(We,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(Me,{title:`${r("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:x,safNo:"",active:"demand"})}),Se&&(d==null?void 0:d.can_pay)&&e.jsx("div",{className:"border-2 border-amber-500 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>ue(`/waiver-demand-screen/${x}/holding`),children:"Waive Off Demand"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((o=d==null?void 0:d.basicDetails)==null?void 0:o.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((j=d==null?void 0:d.basicDetails)==null?void 0:j.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((N=d==null?void 0:d.basicDetails)==null?void 0:N.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((g=d==null?void 0:d.basicDetails)==null?void 0:g.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((T=d==null?void 0:d.basicDetails)==null?void 0:T.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((y=d==null?void 0:d.basicDetails)==null?void 0:y.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[i((p=d==null?void 0:d.basicDetails)==null?void 0:p.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((u=d==null?void 0:d.basicDetails)==null?void 0:u.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((w=d==null?void 0:d.basicDetails)==null?void 0:w.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[!(t!=null&&t.status)&&e.jsx("div",{class:"rounded-lg pt-4 w-full",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex flex-row flex-wrap",children:e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-left",children:[e.jsx("img",{src:Re,alt:"pin",className:"w-5 inline"})," ",r("mainHoldingPage.demandTaxDetailHeadingText.label")]})}),e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1",children:e.jsxs("h1",{className:"p-2",children:["Total Pending years - ",e.jsxs("span",{className:"font-bold",children:[" ",(P=(k=s==null?void 0:s.rulesetData)==null?void 0:k.data)==null?void 0:P.pendingYrs]})]})}),e.jsxs("div",{className:" border-gray-200 p-2",children:[e.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Floor Wise Tax Bifurcation "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:"Built-up Area (in Sqmt.) "}),e.jsx("th",{className:"border border-collapse  p-2",children:"Alv "}),e.jsx("th",{className:"border border-collapse  p-2",children:"Maintainance "}),e.jsx("th",{className:"border border-collapse  p-2",children:"Value After Maintenance "}),e.jsx("th",{className:"border border-collapse  p-2",children:"Aging Amount "}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tax Value "}),e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" (30%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" (3%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block",children:" (1%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",e.jsx("small",{className:"block"})]})]})}),e.jsx("tbody",{children:(f=(S=(v=s==null?void 0:s.rulesetData)==null?void 0:v.data)==null?void 0:S.floorsTaxes)==null?void 0:f.map(a=>e.jsxs("tr",{className:"text-xs font-semibold text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.buildupAreaInSqmt}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.alv}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.maintantance10Perc,"(",a==null?void 0:a.maintancePerc,"%)"]}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.valueAfterMaintance}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.agingAmt,"(",a==null?void 0:a.agingPerc,"%) "]}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.taxValue}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.treeTax}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.professionalTax,"(",a==null?void 0:a.professionalTaxPerc,"%)"]}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.stateEducationTax,"(",a==null?void 0:a.stateEducationTaxPerc,"%)"]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Financial Year Wise Tax Bifurcation "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",e.jsx("small",{className:"block"})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:((H=(A=s==null?void 0:s.rulesetData)==null?void 0:A.data)==null?void 0:H.fyearWiseTaxes)!="undefined"&&((_=(D=s==null?void 0:s.rulesetData)==null?void 0:D.data)==null?void 0:_.fyearWiseTaxes)!=null&&((F=Object.entries((C=(E=s==null?void 0:s.rulesetData)==null?void 0:E.data)==null?void 0:C.fyearWiseTaxes))==null?void 0:F.map(([a,l])=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",a]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[l==null?void 0:l.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.treeTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.professionalTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.stateEducationTax}),e.jsx("td",{className:"border border-collapse p-2",children:l==null?void 0:l.totalTax})]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(R=(W=(B=s==null?void 0:s.rulesetData)==null?void 0:B.data)==null?void 0:W.grandTaxes)==null?void 0:R.generalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(L=(I=(G=s==null?void 0:s.rulesetData)==null?void 0:G.data)==null?void 0:I.grandTaxes)==null?void 0:L.roadTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(O=(M=s==null?void 0:s.rulesetData)==null?void 0:M.data)==null?void 0:O.grandTaxes.firefightingTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[($=(Y=(V=s==null?void 0:s.rulesetData)==null?void 0:V.data)==null?void 0:Y.grandTaxes)==null?void 0:$.educationTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(K=(z=(q=s==null?void 0:s.rulesetData)==null?void 0:q.data)==null?void 0:z.grandTaxes)==null?void 0:K.waterTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(J=(U=(Q=s==null?void 0:s.rulesetData)==null?void 0:Q.data)==null?void 0:U.grandTaxes)==null?void 0:J.cleanlinessTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ee=(Z=(X=s==null?void 0:s.rulesetData)==null?void 0:X.data)==null?void 0:Z.grandTaxes)==null?void 0:ee.sewerageTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(le=(se=(ae=s==null?void 0:s.rulesetData)==null?void 0:ae.data)==null?void 0:se.grandTaxes)==null?void 0:le.treeTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ce=(re=(de=s==null?void 0:s.rulesetData)==null?void 0:de.data)==null?void 0:re.grandTaxes)==null?void 0:ce.professionalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(xe=(ie=(te=s==null?void 0:s.rulesetData)==null?void 0:te.data)==null?void 0:ie.grandTaxes)==null?void 0:xe.stateEducationTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(be=(me=(ne=s==null?void 0:s.rulesetData)==null?void 0:ne.data)==null?void 0:me.grandTaxes)==null?void 0:be.totalTax," "]})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* Grand Total - ",(je=(oe=(he=s==null?void 0:s.rulesetData)==null?void 0:he.data)==null?void 0:oe.grandTaxes)==null?void 0:je.totalTax," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Reabte Amount - ",(ge=(Ne=s==null?void 0:s.rulesetData)==null?void 0:Ne.data)==null?void 0:ge.rebateAmt," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount - ",(ye=(Te=s==null?void 0:s.rulesetData)==null?void 0:Te.data)==null?void 0:ye.payableAmt," "]})]})]})]})]})]})}),(t==null?void 0:t.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[t==null?void 0:t.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]})}export{qe as default};
