import{Y as me,bk as pe,j as e,r as j,aq as De,az as ye,e as es,a as ss,q as ls,s as F,w as rs,ap as Ke,A as S,b as k,o as ds,U as cs,P as is}from"./index-b7a9b315.js";import{Q as xs}from"./QrCode-1bf44191.js";const os=({index:x,paymentData:s,type:a})=>{var u,N,h,A,o,w,g,t,v,T,n,P,c,B,L,_,f,d,r,i,b,C,R,I,M,q,U,E,W,z,H,V,O,Y,Q,$,Z,G,X,J,K,m,p,D,y,ee,se,le,re,de,ce,ie,xe,oe,te,he,be,ne,je,ue,Ne,ge,fe,ae,Ae,we,ve,Te,Pe,Be,Le,_e,Fe,Se,ke,Ce,Re,Ie,Me,qe,Ue,Ee,We,ze,He,Ve,Oe,Ye,Qe,$e,Ze,Ge,Xe,Je;const{t:l}=me();return pe(),e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full  flex justify-center items-center",children:e.jsx("div",{id:"receipts-container",className:`receipt printData${x} print:grid print:grid-cols-12 w-[76rem]`,children:e.jsx("div",{className:"print:col-span-12",children:e.jsx("div",{className:"print:absolute border-2  left-4 print:w-[97vw] border-dashed border-gray-600 print:h-[90vh]  my-11 bg-white p-2  md:mx-auto lg:mx-auto  ",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"grid grid-cols-6 text-center ",children:[e.jsx("div",{className:"col-span-5",children:e.jsxs("div",{className:"h-auto flex gap-1 w-full",children:[e.jsx("img",{src:"https://th.bing.com/th/id/OIP.2h0NzgL6-wG4kSWlkAS0jgHaHX?pid=ImgDet&rs=1",alt:"logo",className:"w-24 h-24"}),e.jsx("div",{className:"text-sm font-semibold whitespace-nowrap  py-2"}),e.jsxs("div",{className:"text-center  w-full",children:[e.jsx("div",{className:"text-2xl font-semibold px-2  bg-gray-700 text-white border rounded mx-1 py-1",children:l("tranActualTaxBillPage.akolaMunicipalCorporationLabel.label")}),e.jsx("p",{className:"text-sm font-normal px-2",children:l("tranActualTaxBillPage.receiptLabel.label")}),e.jsx("table",{className:"table-auto w-full  ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.ownerNameLabel.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(u=s==null?void 0:s.receiptDtls)==null?void 0:u.customerName]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",l("tranActualTaxBillPage.holdingNoLabel.label"),":"]}),e.jsxs("td",{className:"text-start",children:[" ",(N=s==null?void 0:s.receiptDtls)==null?void 0:N.applicationNo," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",l("tranActualTaxBillPage.billNoLabel.label")," : "]}),e.jsx("td",{className:"text-start",children:((h=s==null?void 0:s.receiptDtls)==null?void 0:h.transactionNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.addressLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((A=s==null?void 0:s.receiptDtls)==null?void 0:A.address)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.mobileNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((o=s==null?void 0:s.receiptDtls)==null?void 0:o.mobileNo)||"N/A"}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.propertyNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((w=s==null?void 0:s.receiptDtls)==null?void 0:w.propertyNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.westZoneLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((g=s==null?void 0:s.receiptDtls)==null?void 0:g.zone_name)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.wardNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((t=s==null?void 0:s.receiptDtls)==null?void 0:t.wardNo)||"N/A"}),((v=s==null?void 0:s.receiptDtls)==null?void 0:v.paymentMode)=="CASH"?"":e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.verifyStatusLabel.label")," :"]}),((T=s==null?void 0:s.receiptDtls)==null?void 0:T.verifyStatus)==0&&e.jsxs("td",{className:"text-start text-red-500 ",children:[l("tranActualTaxBillPage.notVerifiedLabel.label")," "]}),((n=s==null?void 0:s.receiptDtls)==null?void 0:n.verifyStatus)==1&&e.jsxs("td",{className:"text-start text-green-500 ",children:[l("tranActualTaxBillPage.verifiedLabel.label")," "]}),((P=s==null?void 0:s.receiptDtls)==null?void 0:P.verifyStatus)==2&&e.jsxs("td",{className:"text-start text-yellow-700 ",children:[l("tranActualTaxBillPage.underVerificationLabel.label")," "]}),((c=s==null?void 0:s.receiptDtls)==null?void 0:c.verifyStatus)==3&&e.jsxs("td",{className:"text-start text-red-500",children:[l("tranActualTaxBillPage.bounceLabel.label")," "]})]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.paymentModeLabel.label")," :"]}),e.jsx("td",{className:"text-start",colSpan:3,children:((B=s==null?void 0:s.receiptDtls)==null?void 0:B.paymentMode)||"N/A"}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",l("tranActualTaxBillPage.paidFromLabel.label"),"  : "]}),e.jsxs("td",{className:"text-start",children:[" ",(L=s==null?void 0:s.receiptDtls)==null?void 0:L.paidFrom," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",l("tranActualTaxBillPage.paidUptoLabel.label"),"  :"]}),e.jsxs("td",{className:"text-start",children:[" ",(_=s==null?void 0:s.receiptDtls)==null?void 0:_.paidUpto]})]}),e.jsx("tr",{className:"text-[11px] ",children:((f=s==null?void 0:s.receiptDtls)==null?void 0:f.paymentMode)=="CHEQUE"||((d=s==null?void 0:s.receiptDtls)==null?void 0:d.paymentMode)=="DD"?e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start",children:[" ",l("tranActualTaxBillPage.bankNameLabel.label")," :"]}),e.jsx("td",{className:"text-start whitespace-nowrap",children:(r=s==null?void 0:s.receiptDtls)==null?void 0:r.bankName}),e.jsxs("th",{className:"text-start",children:[" ",l("tranActualTaxBillPage.branchNameLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(i=s==null?void 0:s.receiptDtls)==null?void 0:i.branchName}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.chequeNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(b=s==null?void 0:s.receiptDtls)==null?void 0:b.chequeNo}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[l("tranActualTaxBillPage.chequeDateLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(C=s==null?void 0:s.receiptDtls)==null?void 0:C.chequeDate})," "]}):""})]})})]})]})}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("button",{className:"rounded px-2 py-1 bg-blue-50  text-gray-700 outline outline-1 m-1 text-sm",disabled:!0,children:(R=s==null?void 0:s.receiptDtls)==null?void 0:R.transactionDate}),e.jsx("div",{className:"w-24 h-24 mx-auto",children:xs(window.location.href)})]})]}),e.jsxs("div",{className:" text-xs  w-full text-center",children:[e.jsxs("h1",{className:"",children:[l("tranActualTaxBillPage.amountPayText1.label",{from:(I=s==null?void 0:s.receiptDtls)==null?void 0:I.paidFrom.split("-")[0],upto:(M=s==null?void 0:s.receiptDtls)==null?void 0:M.paidUpto.split("-")[1]})," ",e.jsxs("b",{children:["Rs:-",(q=s==null?void 0:s.receiptDtls)==null?void 0:q.totalPaidAmount]})]}),e.jsx("h1",{className:"",children:e.jsxs("p",{className:"p-1",children:[" ",e.jsxs("b",{children:[(U=s==null?void 0:s.receiptDtls)==null?void 0:U.paidAmtInWords,". "]}),l("tranActualTaxBillPage.amountPayText2.label")]})})]}),e.jsx("div",{className:"w-full  text-center text-xs border border-gray-600 ",children:((E=s==null?void 0:s.receiptDtls)==null?void 0:E.isArrearReceipt)==!0?e.jsx(e.Fragment,{children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-gray-300 font-semibold  ",children:[e.jsxs("td",{className:"border text-left  ",children:[l("tranActualTaxBillPage.paidArrearAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(W=s==null?void 0:s.receiptDtls)==null?void 0:W.arrearSettled," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[" ",l("tranActualTaxBillPage.paidDemandAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(z=s==null?void 0:s.receiptDtls)==null?void 0:z.demandAmount," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[l("tranActualTaxBillPage.paidTotalAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center ",children:["  ",(H=s==null?void 0:s.receiptDtls)==null?void 0:H.totalPaidAmount,".00 "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[l("tranActualTaxBillPage.paidAmountInWordsLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(V=s==null?void 0:s.receiptDtls)==null?void 0:V.paidAmtInWords]})]})]})})}):e.jsxs("table",{className:"table-auto w-full border text-center",children:[((O=s==null?void 0:s.receiptDtls)==null?void 0:O.verifyStatus)==3?e.jsxs("div",{className:"flex justify-center items-center w-full  absolute z-10 bg-transparent opacity-40  rounded-full ",children:[" ",e.jsx("img",{src:"https://i.ibb.co/ZV0CH9V/BOUNCE-removebg-preview.png",alt:"",className:"-ml-72 "})]}):"",e.jsx("thead",{children:e.jsxs("tr",{className:"border",children:[e.jsx("th",{className:"border",children:"#."}),e.jsxs("th",{className:"border",children:[l("tranActualTaxBillPage.tablehead1.label")," "]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(A)"})," ",l("tranActualTaxBillPage.tablehead2.label")]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(B)"})," ",l("tranActualTaxBillPage.tablehead3.label")]}),e.jsxs("th",{className:"border",children:[" ",e.jsx("b",{children:"(A+B)"})," ",l("tranActualTaxBillPage.tablehead4.label")]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  1 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.generalTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Y=s==null?void 0:s.overdueDemand)==null?void 0:Y.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Q=s==null?void 0:s.currentDemand)==null?void 0:Q.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",($=s==null?void 0:s.aggregateDemand)==null?void 0:$.general_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  2 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.roadTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(Z=s==null?void 0:s.overdueDemand)==null?void 0:Z.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(G=s==null?void 0:s.currentDemand)==null?void 0:G.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(X=s==null?void 0:s.aggregateDemand)==null?void 0:X.road_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  3 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.sewageTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(J=s==null?void 0:s.overdueDemand)==null?void 0:J.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(K=s==null?void 0:s.currentDemand)==null?void 0:K.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(m=s==null?void 0:s.aggregateDemand)==null?void 0:m.sewarage_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  4 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.fireFightingTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(p=s==null?void 0:s.overdueDemand)==null?void 0:p.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(D=s==null?void 0:s.currentDemand)==null?void 0:D.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(y=s==null?void 0:s.aggregateDemand)==null?void 0:y.firefighting_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  5 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.waterBenefitLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(ee=s==null?void 0:s.overdueDemand)==null?void 0:ee.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(se=s==null?void 0:s.currentDemand)==null?void 0:se.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(le=s==null?void 0:s.aggregateDemand)==null?void 0:le.water_benefit," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 6 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.educationTaxLabel.label"),"  "]}),e.jsxs("td",{className:"border",children:["  ",(re=s==null?void 0:s.overdueDemand)==null?void 0:re.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(de=s==null?void 0:s.currentDemand)==null?void 0:de.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ce=s==null?void 0:s.aggregateDemand)==null?void 0:ce.sp_education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  7 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.sanitationTax.label")," "]}),e.jsx("td",{className:"border",children:(ie=s==null?void 0:s.overdueDemand)==null?void 0:ie.light_cess}),e.jsx("td",{className:"border",children:(xe=s==null?void 0:s.currentDemand)==null?void 0:xe.light_cess}),e.jsx("td",{className:"border",children:(oe=s==null?void 0:s.aggregateDemand)==null?void 0:oe.light_cess})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  8 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.treeTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(te=s==null?void 0:s.overdueDemand)==null?void 0:te.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(he=s==null?void 0:s.currentDemand)==null?void 0:he.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(be=s==null?void 0:s.aggregateDemand)==null?void 0:be.tree_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  9 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.spEducationTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(ne=s==null?void 0:s.overdueDemand)==null?void 0:ne.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(je=s==null?void 0:s.currentDemand)==null?void 0:je.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ue=s==null?void 0:s.aggregateDemand)==null?void 0:ue.education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  10 "}),e.jsxs("td",{className:"border text-left",children:["  ",l("tranActualTaxBillPage.guranteeFee.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  11 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.spWaterCessLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Ne=s==null?void 0:s.overdueDemand)==null?void 0:Ne.sp_water_cess," "]}),e.jsxs("td",{className:"border",children:["  ",(ge=s==null?void 0:s.currentDemand)==null?void 0:ge.sp_water_cess," "]}),e.jsxs("td",{className:"border",children:["  ",(fe=s==null?void 0:s.aggregateDemand)==null?void 0:fe.sp_water_cess," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  12 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.bigBuildingTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(ae=s==null?void 0:s.overdueDemand)==null?void 0:ae.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(Ae=s==null?void 0:s.currentDemand)==null?void 0:Ae.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(we=s==null?void 0:s.aggregateDemand)==null?void 0:we.major_building," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  13 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.agriTax.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  14 "}),e.jsxs("td",{className:"border text-left",children:["  ",l("tranActualTaxBillPage.punishmentUnderScetion.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  15 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.OpenPlotTax.label")," "]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  16 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.punishmentLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:[s==null?void 0:s.arrearPenalty,"  "]}),e.jsxs("td",{className:"border text-center",children:["0.00","  "]}),e.jsxs("td",{className:"border text-center",children:[s==null?void 0:s.arrearPenalty,"  "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  17 "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.paidTotalAmountLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(ve=s==null?void 0:s.overdueDemand)==null?void 0:ve.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(Te=s==null?void 0:s.currentDemand)==null?void 0:Te.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(Pe=s==null?void 0:s.aggregateDemand)==null?void 0:Pe.totalPayableAmt," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 18  "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.penaltyAmnestyScheme.label")]}),e.jsx("td",{className:"border",children:(Be=s==null?void 0:s.overdueDemand)==null?void 0:Be.exceptionUnderSAY}),e.jsx("td",{className:"border",children:(Le=s==null?void 0:s.currentDemand)==null?void 0:Le.exceptionUnderSAY}),e.jsx("td",{className:"border",children:(_e=s==null?void 0:s.aggregateDemand)==null?void 0:_e.exceptionUnderSAY})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 19  "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.penaltyRegularTax.label")]}),e.jsx("td",{className:"border",children:(Fe=s==null?void 0:s.overdueDemand)==null?void 0:Fe.generalTaxException}),e.jsx("td",{className:"border",children:(Se=s==null?void 0:s.currentDemand)==null?void 0:Se.generalTaxException}),e.jsx("td",{className:"border",children:(ke=s==null?void 0:s.aggregateDemand)==null?void 0:ke.generalTaxException})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 20  "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.totalPaymentAfterPenalty.label")]}),e.jsx("td",{className:"border",children:(Ce=s==null?void 0:s.overdueDemand)==null?void 0:Ce.payableAfterDeduction}),e.jsx("td",{className:"border",children:(Re=s==null?void 0:s.currentDemand)==null?void 0:Re.payableAfterDeduction}),e.jsx("td",{className:"border",children:(Ie=s==null?void 0:s.aggregateDemand)==null?void 0:Ie.payableAfterDeduction})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 21  "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.advanceAmountOtherTaxes.label")]}),e.jsx("td",{className:"border",children:(Me=s==null?void 0:s.overdueDemand)==null?void 0:Me.advanceAmt}),e.jsx("td",{className:"border",children:(qe=s==null?void 0:s.currentDemand)==null?void 0:qe.advanceAmt}),e.jsx("td",{className:"border",children:(Ue=s==null?void 0:s.aggregateDemand)==null?void 0:Ue.advanceAmt})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 22  "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.totalPaymentAfterAdvance.label")]}),e.jsx("td",{className:"border",children:(Ee=s==null?void 0:s.overdueDemand)==null?void 0:Ee.totalPayableAfterAdvance}),e.jsx("td",{className:"border",children:(We=s==null?void 0:s.currentDemand)==null?void 0:We.totalPayableAfterAdvance}),e.jsx("td",{className:"border",children:(ze=s==null?void 0:s.aggregateDemand)==null?void 0:ze.totalPayableAfterAdvance})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 23  "}),e.jsxs("td",{className:"border text-left",children:["   ",l("tranActualTaxBillPage.noticeFeeWarrantFee.label")]}),e.jsx("td",{className:"border",children:(He=s==null?void 0:s.overdueDemand)==null?void 0:He.noticeFee}),e.jsx("td",{className:"border",children:(Ve=s==null?void 0:s.currentDemand)==null?void 0:Ve.noticeFee}),e.jsx("td",{className:"border",children:(Oe=s==null?void 0:s.aggregateDemand)==null?void 0:Oe.noticeFee})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border ",children:"  "}),e.jsxs("td",{className:"border font-bold text-left",children:["   ",l("tranActualTaxBillPage.totalTaxLabel.label")," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(Ye=s==null?void 0:s.overdueDemand)==null?void 0:Ye.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(Qe=s==null?void 0:s.currentDemand)==null?void 0:Qe.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",($e=s==null?void 0:s.aggregateDemand)==null?void 0:$e.FinalTax," "]})]})]})]})}),e.jsxs("h1",{className:"font-semibold pt-6",children:[l("tranActualTaxBillPage.connectWithUsLabel.label")," :- "]}),e.jsxs("div",{className:"grid grid-cols-5  text-sm  ",children:[e.jsxs("div",{className:"text-left whitespace-nowrap",children:[e.jsxs("p",{children:[l("tranActualTaxBillPage.collectionAgent.label"),"  : ",(Ze=s==null?void 0:s.receiptDtls)==null?void 0:Ze.tcName]}),e.jsxs("p",{children:[l("tranActualTaxBillPage.mobileNoLabel.label")," ",((Ge=s==null?void 0:s.receiptDtls)==null?void 0:Ge.tcMobile)||"N/A"," "]})]}),e.jsx("div",{className:"p-2 pt-6",children:e.jsxs("div",{className:"rounded px-2 py-1 w-full border hover:shadow bg-gray-500 text-white text-center capitalize text-xs",children:[e.jsx("p",{children:l("tranActualTaxBillPage.tollFreeNoLabel.label")}),e.jsx("p",{className:"lowercase",children:(Je=(Xe=s==null?void 0:s.receiptDtls)==null?void 0:Xe.ulbDetails)==null?void 0:Je.toll_free_no})]})}),e.jsxs("div",{className:"text-center ",children:[e.jsxs("p",{children:[l("tranActualTaxBillPage.taxClerkLabel.label")," "]}),e.jsxs("p",{children:[l("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{children:[l("tranActualTaxBillPage.taxSuperintendentLabel.label")," "]}),e.jsxs("p",{children:[l("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{children:l("tranActualTaxBillPage.deputyCommissionarLabel.label")}),e.jsxs("p",{children:[l("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]})]})]})})})})})})};function ts(x){var l,u;const s=j.useRef(),a=De.useReactToPrint({content:()=>s.current});return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:a,className:"float-right pl-4 pr-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded  hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(ye,{className:"inline text-lg"}),"Print All"]})})}),e.jsx("div",{ref:s,id:"printableArea",className:"",children:(u=(l=x==null?void 0:x.data)==null?void 0:l.data)==null?void 0:u.map((N,h)=>e.jsx(os,{paymentData:N,index:h,type:x==null?void 0:x.type}))})]})})}const ns=()=>{var f;const{get_MasterData:x,get_taxCollectorList:s,get_collectorList:a,searchTaxRecieptBulkPrint:l}=is();es();const[u,N]=j.useState(),[h,A]=j.useState(),[o,w]=j.useState(),[g,t]=j.useState(!1),[v,T]=j.useState("");ss("Tax Reciept Bulk Print");const n="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",P=ls({fromDate:F().required("Field Required"),uptoDate:F().required("Field Required"),userId:F().required("Field Required")}),c=rs({initialValues:{fromDate:Ke(new Date).format("yy-MM-DD"),uptoDate:Ke(new Date).format("yy-MM-DD"),userId:"",tranType:"Property"},enableReinitialize:!0,onSubmit:d=>{T(d.tranType),B()},validationSchema:P}),B=()=>{t(!0);let d={fromDate:c.values.fromDate,toDate:c.values.uptoDate,userId:c.values.userId,tranType:c.values.tranType};S.post(l,d,k()).then(r=>{var i;((i=r==null?void 0:r.data)==null?void 0:i.status)==!0?(console.log("search success => ",r),w(r==null?void 0:r.data)):console.log("error while search => ",r),t(!1)}).catch(r=>(console.log("error while search => ",r),t(!1)))};j.useEffect(()=>{L(),_()},[]);const L=()=>{S.get(x,k()).then(d=>{var r,i,b;((r=d==null?void 0:d.data)==null?void 0:r.status)==!0&&N((b=(i=d==null?void 0:d.data)==null?void 0:i.data)==null?void 0:b.ward_master)}).catch(d=>console.log("error getting master list",d))},_=d=>{t(!0),S.post(a,{},k()).then(r=>{var i,b;((i=r==null?void 0:r.data)==null?void 0:i.status)==!0&&(console.log("getting collector list => ",r),A((b=r==null?void 0:r.data)==null?void 0:b.data)),t(!1)}).catch(r=>(console.log("error getting collector list => ",r),t(!1)))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:c.handleChange,onSubmit:c.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Transaction From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",id:"",className:n,value:c.values.fromDate})}),e.jsx("div",{className:"col-span-12 text-end",children:c.touched.fromDate&&c.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:c.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Transaction Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",id:"",className:n,value:c.values.uptoDate})}),e.jsx("div",{className:"col-span-12 text-end",children:c.touched.uptoDate&&c.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:c.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:n,children:[e.jsx("option",{value:"",children:"Select"}),h==null?void 0:h.map(d=>e.jsx(e.Fragment,{children:e.jsx("option",{className:"capitalize",value:d==null?void 0:d.id,children:d==null?void 0:d.user_name})}))]})}),e.jsx("div",{className:"col-span-12 text-end",children:c.touched.userId&&c.errors.userId&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:c.errors.userId})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Transaction Type :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"tranType",id:"",className:n,children:[e.jsx("option",{value:"Property",selected:!0,children:"Property"}),e.jsx("option",{value:"Saf",children:"SAF"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:g?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(ds,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(cs,{})}),"Search"]})})]})]}),!g&&(o==null?void 0:o.data)!=null&&((f=o==null?void 0:o.data)==null?void 0:f.length)!=0?e.jsxs(e.Fragment,{children:[e.jsx(ts,{data:o,type:v}),e.jsx("div",{className:"mb-6"})]}):e.jsx(e.Fragment,{children:!g&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{ns as default};
