import{ag as ve,j as e,ah as Ze,X as Ge,r as i,u as Xe,e as Je,A as Ke,b as j,n as c,ai as Qe,ad as ea,a4 as ue}from"./index-8203ecd2.js";import"./AmcFamReceipt-0670116b.js";import"./QrCode-75edeef7.js";import"./index-348db069.js";const De=ve(e.jsx("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),Ee=ve(e.jsx("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");function aa(l){return e.jsx(e.Fragment,{children:(l==null?void 0:l.isLoading)&&e.jsx(Ze,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}function sa(){var T,S,w,L,k,A,f,_,W,u,D,E,v,C,M,B,F,O,I,H,q,R,U,Y,z,V,$,Z,G,X,J,K,Q,ee,ae,se,le,re,de,ce,te,ie,ne,me,xe,be,oe,he,pe,je,Ne,ge,Pe,ye,Te,Se,we,Le,ke,Ae,fe,_e;const{t:l}=Ge(),[la,N]=i.useState(!1),[Ce,n]=i.useState(!1),{propId:x}=Xe(),{propertyGenerateHoldingOrderId:ra,api_postSafPaymentOffline:da,api_getHoldingDues:ca,api_getsafDemandById:Me,api_paysafoffline_Mode:Be,api_Online_Payment:Fe}=ea();console.log("param Fam payment screen holding...",x);const Oe=Je(),[ta,o]=i.useState(!1),[a,g]=i.useState(null),[ia,h]=i.useState(!1);i.useState(!0);const[m,P]=i.useState(null),[p,Ie]=i.useState(""),[He,qe]=i.useState(!1),[b,na]=i.useState({id:x,paymentMode:"",payment_status:1});console.log("Fam payment Details.....",b);const Re=()=>{Oe(`/amc-fam-receipt/${x}`)};i.useEffect(()=>{Ue()},[]);const Ue=()=>{o(!0),h(!1),n(!0);let s=Me,r={id:x,paymentMode:"CASH"};Ke.post(s,r,j()).then(function(t){var d;console.log("response after pushing saf data",t.data.data),(d=t==null?void 0:t.data)!=null&&d.status?(g(t.data.data),n(!1)):(N(!1),activateBottomErrorCard(!0,"Error occured in submitting form. Please try again later."))}).catch(function(t){console.log("error in submitting saf form ","error"),n(!1)})},Ye=s=>{h(!1),o(!0);let r,t;r=Fe,t={id:90,paymentMode:"Online"},ue.post(r,t,j()).then(d=>{console.log("payment status for online api",d.data),d.data.status&&window.open(`${d.data.data}`)}).catch(d=>{console.log(d)})},ze=s=>{h(!1),o(!0);let r,t;r=Be,t={id:90,paymentMode:"CASH"},ue.post(r,t,j()).then(function(d){var We;console.log("payment status for offline api",d.data.data),(We=d==null?void 0:d.data)!=null&&We.status?(g(d.data.data),n(!1)):(N(!1),activateBottomErrorCard(!0,"Error occured in submitting form. Please try again later."),n(!1))}).catch(function(d){console.log("error in submitting saf form ","error"),n(!1)})},Ve=s=>{Ie(s.target.value),qe(!0)},$e=()=>{p=="1"?Ye():p=="2"?ze():alert("Please select a payment mode.")},y=s=>{s==m?P(null):P(s)};return console.log("ruleset data ",b==null?void 0:b.status),e.jsxs("div",{children:[Ce&&e.jsx(aa,{}),e.jsxs("div",{className:"font-bold md:text-xl pt-8 py-4",children:["Amc Fam Payment Details",((T=a==null?void 0:a.basicDetails)==null?void 0:T.payment_status)==1?e.jsx(e.Fragment,{children:e.jsx("h3",{class:"md:text-2xl text-base font-bold text-green-600   text-right flex-1",children:"You have already Paid!"})}):""]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((S=a==null?void 0:a.basicDetails)==null?void 0:S.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Saf No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((w=a==null?void 0:a.basicDetails)==null?void 0:w.prop_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Address"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:c((L=a==null?void 0:a.basicDetails)==null?void 0:L.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower's ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((k=a==null?void 0:a.basicDetails)==null?void 0:k.is_hoarding_board)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board's ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((A=a==null?void 0:a.basicDetails)==null?void 0:A.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property has a Petrol Pump?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((f=a==null?void 0:a.basicDetails)==null?void 0:f.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((_=a==null?void 0:a.basicDetails)==null?void 0:_.zone)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[c((W=a==null?void 0:a.basicDetails)==null?void 0:W.holding_no)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((u=a==null?void 0:a.basicDetails)==null?void 0:u.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((D=a==null?void 0:a.basicDetails)==null?void 0:D.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((E=a==null?void 0:a.basicDetails)==null?void 0:E.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((v=a==null?void 0:a.basicDetails)==null?void 0:v.doc_upload_status)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Document Upload Status"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((C=a==null?void 0:a.basicDetails)==null?void 0:C.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((M=a==null?void 0:a.basicDetails)==null?void 0:M.payment_status)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Payment Status"})]})]})]})}),a!=null&&e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between px-1 flex  font-serif underline mt-4 bg-blue-300 py-3",children:[e.jsxs("h1",{className:"flex gap-2",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Initial Tax Description"]}),e.jsxs("button",{onClick:()=>y(1),children:[m==1?e.jsx(De,{}):e.jsx(Ee,{}),"  "]})]}),e.jsxs("div",{className:`${m==1?"":"hidden"} w-full h-auto bg-white  rounded shadow-lg text-sm p-4`,children:[e.jsx("div",{className:"hover:outline hover:out-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2",children:[e.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.floorWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.builtUpAreaLabel.label")," (in Sqmt.) "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.alvLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.maintenanceLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.valueAfterMaintenanceLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.agingAmountLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.taxValueLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (30%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" (3%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label"),e.jsx("small",{className:"block",children:" (1%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]})]})}),e.jsx("tbody",{children:(B=a==null?void 0:a.floorsTaxes)==null?void 0:B.map(s=>e.jsxs("tr",{className:"text-xs font-semibold text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:Qe(s==null?void 0:s.buildupAreaInSqmt)}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.alv}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.maintantance10Perc,"(",s==null?void 0:s.maintancePerc,"%)"]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.valueAfterMaintance}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.agingAmt,"(",s==null?void 0:s.agingPerc,"%) "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.taxValue}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.treeTax}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.professionalTax,"(",s==null?void 0:s.professionalTaxPerc,"%)"]}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.stateEducationTax,"(",s==null?void 0:s.stateEducationTaxPerc,"%)"]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.financialYearWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:a!=null&&((F=Object.entries(a==null?void 0:a.fyearWiseTaxes))==null?void 0:F.map(([s,r])=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[l("mainSafPaymentDetailPage.financialYearLabel.label")," : ",s]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[r==null?void 0:r.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.treeTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.professionalTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.stateEducationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.totalTax})]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(O=a==null?void 0:a.grandTaxes)==null?void 0:O.generalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(I=a==null?void 0:a.grandTaxes)==null?void 0:I.roadTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.grandTaxes.firefightingTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(H=a==null?void 0:a.grandTaxes)==null?void 0:H.educationTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(q=a==null?void 0:a.grandTaxes)==null?void 0:q.waterTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(R=a==null?void 0:a.grandTaxes)==null?void 0:R.cleanlinessTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(U=a==null?void 0:a.grandTaxes)==null?void 0:U.sewerageTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(Y=a==null?void 0:a.grandTaxes)==null?void 0:Y.treeTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(z=a==null?void 0:a.grandTaxes)==null?void 0:z.professionalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(V=a==null?void 0:a.grandTaxes)==null?void 0:V.stateEducationTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[($=a==null?void 0:a.grandTaxes)==null?void 0:$.totalTax," "]})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.grandTotalLabel.label")," - ",(Z=a==null?void 0:a.grandTaxes)==null?void 0:Z.totalTax," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.rebateAmountLabel.label")," - ",a==null?void 0:a.rebateAmt," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.totalPayableAmountLabel.label")," - ",a==null?void 0:a.payableAmt," "]})]})]})]}),e.jsxs("div",{className:"flex justify-between px-1 flex  font-serif underline mt-4 bg-blue-300 py-3",children:[e.jsxs("h1",{className:"flex gap-2",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Ulbwise Tax Description"]}),e.jsxs("button",{onClick:()=>y(2),children:[m==2?e.jsx(De,{}):e.jsx(Ee,{}),"  "]})]}),e.jsxs("div",{className:`${m==2?"":"hidden"}`,children:[e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2",children:[e.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.floorWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.builtUpAreaLabel.label")," (in Sqmt.) "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.alvLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.maintenanceLabel.label"),"  "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.valueAfterMaintenanceLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.agingAmountLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.taxValueLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (30%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" (3%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label"),e.jsx("small",{className:"block",children:" (2%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label"),e.jsx("small",{className:"block",children:" (1%)"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]})]})}),e.jsx("tbody",{children:a!=null&&((X=(G=a==null?void 0:a.ulbWiseTax)==null?void 0:G.floorsTaxes)==null?void 0:X.map(s=>e.jsxs("tr",{className:"text-xs font-semibold text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.buildupAreaInSqmt}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.alv}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.maintantance10Perc,"(",s==null?void 0:s.maintancePerc,"%)"]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.valueAfterMaintance}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.agingAmt,"(",s==null?void 0:s.agingPerc,"%) "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.taxValue}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.treeTax}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.professionalTax,"(",s==null?void 0:s.professionalTaxPerc,"%)"]}),e.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.stateEducationTax,"(",s==null?void 0:s.stateEducationTaxPerc,"%)"]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.financialYearWiseTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:((J=a==null?void 0:a.ulbWiseTax)==null?void 0:J.length)>0&&((Q=Object.entries((K=a==null?void 0:a.ulbWiseTax)==null?void 0:K.fyearWiseTaxes))==null?void 0:Q.map(([s,r])=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",s]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[r==null?void 0:r.generalTax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.roadTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.firefightingTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.educationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.waterTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.cleanlinessTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.sewerageTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.treeTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.professionalTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.stateEducationTax}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.totalTax})]})]})))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),"  ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),"  ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(ae=(ee=a==null?void 0:a.ulbWiseTax)==null?void 0:ee.grandTaxes)==null?void 0:ae.generalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(le=(se=a==null?void 0:a.ulbWiseTax)==null?void 0:se.grandTaxes)==null?void 0:le.roadTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(de=(re=a==null?void 0:a.ulbWiseTax)==null?void 0:re.grandTaxes)==null?void 0:de.firefightingTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(te=(ce=a==null?void 0:a.ulbWiseTax)==null?void 0:ce.grandTaxes)==null?void 0:te.educationTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ne=(ie=a==null?void 0:a.ulbWiseTax)==null?void 0:ie.grandTaxes)==null?void 0:ne.waterTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(xe=(me=a==null?void 0:a.ulbWiseTax)==null?void 0:me.grandTaxes)==null?void 0:xe.cleanlinessTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(oe=(be=a==null?void 0:a.ulbWiseTax)==null?void 0:be.grandTaxes)==null?void 0:oe.sewerageTax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(pe=(he=a==null?void 0:a.ulbWiseTax)==null?void 0:he.grandTaxes)==null?void 0:pe.treeTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(Ne=(je=a==null?void 0:a.ulbWiseTax)==null?void 0:je.grandTaxes)==null?void 0:Ne.professionalTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(Pe=(ge=a==null?void 0:a.ulbWiseTax)==null?void 0:ge.grandTaxes)==null?void 0:Pe.stateEducationTax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(Te=(ye=a==null?void 0:a.ulbWiseTax)==null?void 0:ye.grandTaxes)==null?void 0:Te.totalTax," "]})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.grandTotalLabel.label")," - ",(we=(Se=a==null?void 0:a.ulbWiseTax)==null?void 0:Se.grandTaxes)==null?void 0:we.totalTax," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.rebateAmountLabel.label")," - ",(Le=a==null?void 0:a.ulbWiseTax)==null?void 0:Le.rebateAmt," "]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.totalPayableAmountLabel.label")," - ",(ke=a==null?void 0:a.ulbWiseTax)==null?void 0:ke.payableAmt," "]})]})]})]})]})]}),((Ae=a==null?void 0:a.basicDetails)==null?void 0:Ae.payment_status)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:px-10  text-right pt-4  text-lg font-semibold",children:[l("mainSafPaymentDetailPage.totalPayableAmountLabel.label")," ₹ ",(fe=a==null?void 0:a.ulbWiseTax)==null?void 0:fe.payableAmt,"    "]}),e.jsxs("div",{className:"md:px-10 text-right pt-2 flex-1 ",children:[e.jsx("span",{className:"mb-2 mx-3 font-semibold",children:"Choose Payment Mode"}),e.jsxs("select",{className:"text-center rounded-md p-1",onChange:Ve,value:p,children:[e.jsx("option",{value:"0",className:"text-center",children:"Select"}),e.jsx("option",{value:"1",className:"text-center",children:"Online Payment"}),e.jsx("option",{value:"2",className:"text-center",children:"Offline Payment"})]})]}),He&&e.jsx("div",{className:"md:px-10 text-right flex-1 text-lg font-semibold",children:e.jsx("button",{onClick:$e,type:"submit",className:"px-6 py-2 mt-6 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Pay Now"})})]}):"",((_e=a==null?void 0:a.basicDetails)==null?void 0:_e.payment_status)==1?e.jsx(e.Fragment,{children:e.jsx("div",{class:"bg-white p-6 shadow-xl md:mx-auto",children:e.jsx("div",{class:"py-10 text-center  justify-center flex items-center ",children:e.jsx("div",{className:"px-6 py-2 mt-6 shadow-xl bg-indigo-600  rounded hover:bg-indigo-500 cursor-pointer text-white font-semibold",onClick:Re,children:l("mainPropertyPaymentPage.viewReceipt.label")})})})}):""]})}function ha(){return i.useRef(),e.jsx("div",{className:"container",children:e.jsx("div",{className:"w-full   m-2 p-2",children:e.jsx(sa,{})})})}export{ha as default};
