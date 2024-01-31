import{a as we,w as Re,j as s}from"./index-iuZ-7lxl.js";import{h as Pe,u as ge,R as fe}from"./react-rKuUt_as.js";import{P as qe}from"./index-T4RTB032.js";import{O as We}from"./OverLayLoader-V90Eeqa0.js";import"./module-J__itnbi.js";function Se(){var c,o,r,t,m,a,l,N,d,h,u,x,p,j,v,A,M,b,C,y,T,D,w,R,P,g,f,q,W,k,E,F,L,B,S,I,K,V,_,O,Y,z,G,H,U,Z,J,Q,X,$,ee,se,ne,ie,ce,oe,re,te;const{id:n}=Pe(),be=ge(),{data:e,isLoading:Ce}=we({api:Re.waterPaymentReceipt,config:{transactionNo:n},value:[n],options:{enabled:!!n}}),ye=fe.useCallback(()=>{var me,ae,le,Ne,de,he,ue,xe,pe,je,ve,Ae,Me;return((me=e==null?void 0:e.data)==null?void 0:me.paymentMode)==="Cheque"?"Payment Mode: "+((ae=e==null?void 0:e.data)==null?void 0:ae.paymentMode)+"\nBank Name: "+((le=e==null?void 0:e.data)==null?void 0:le.bankName)+"\nBranch Name: "+((Ne=e==null?void 0:e.data)==null?void 0:Ne.branchName)+"\nCheque no: "+((de=e==null?void 0:e.data)==null?void 0:de.chequeNo)+"\nCheque Date: "+((he=e==null?void 0:e.data)==null?void 0:he.chequeDate):((ue=e==null?void 0:e.data)==null?void 0:ue.paymentMode)==="DD"?"Payment Mode: "+((xe=e==null?void 0:e.data)==null?void 0:xe.paymentMode)+"\nBank Name: "+((pe=e==null?void 0:e.data)==null?void 0:pe.bankName)+"\nBranch Name: "+((je=e==null?void 0:e.data)==null?void 0:je.branchName)+"\nCheque no: "+((ve=e==null?void 0:e.data)==null?void 0:ve.chequeNo)+"\nCheque Date: "+((Ae=e==null?void 0:e.data)==null?void 0:Ae.chequeDate):"Payment Mode: "+((Me=e==null?void 0:e.data)==null?void 0:Me.paymentMode)},[(c=e==null?void 0:e.data)==null?void 0:c.receiptDtls]),Te="  "+((o=e==null?void 0:e.data)==null?void 0:o.ulbName)+"\n[C]WATER USER CHARGE\n[C]PAYMENT RECEIPT\n****************************************************\nTransaction No : "+((r=e==null?void 0:e.data)==null?void 0:r.transactionNo)+"\nReceived From Mr/Mrs/Miss : "+((t=e==null?void 0:e.data)==null?void 0:t.customerName)+"\nDepartment/Section : "+((m=e==null?void 0:e.data)==null?void 0:m.accountDescription)+"\nAccount Description : "+((a=e==null?void 0:e.data)==null?void 0:a.description)+"\nZone : "+((l=e==null?void 0:e.data)==null?void 0:l.zoneName)+"\nWard No : "+((N=e==null?void 0:e.data)==null?void 0:N.WardNo)+"\nConsumer No: "+((d=e==null?void 0:e.data)==null?void 0:d.consumerNo)+"\nDate : "+((h=e==null?void 0:e.data)==null?void 0:h.transactionDate)+"\nTransaction Time : "+((u=e==null?void 0:e.data)==null?void 0:u.transactionTime)+"\nMobile No : "+((x=e==null?void 0:e.data)==null?void 0:x.customerMobile)+"\nAddress : "+((p=e==null?void 0:e.data)==null?void 0:p.address)+"\nSession : "+((j=e==null?void 0:e.data)==null?void 0:j.session)+"\nAmount : "+Math.round((v=e==null?void 0:e.data)==null?void 0:v.demandAmount).toFixed(2)+"\nPenalty : "+Math.round((A=e==null?void 0:e.data)==null?void 0:A.penaltyAmount).toFixed(2)+"\nDue Amount : "+Math.round((M=e==null?void 0:e.data)==null?void 0:M.dueAmount).toFixed(2)+"\n(in words) :"+((b=e==null?void 0:e.data)==null?void 0:b.paidAmtInWords)+"\nTowards : "+((C=e==null?void 0:e.data)==null?void 0:C.towards)+"\n"+ye()+"\nWater Consumed (in K.L.) : "+((y=e==null?void 0:e.data)==null?void 0:y.waterConsumed)+"\nLast Meter Reading (in K.L.) : "+((T=e==null?void 0:e.data)==null?void 0:T.unitConsumed)+"\n****************************************************\nTc Name : "+((D=e==null?void 0:e.data)==null?void 0:D.empName)+"\nTc Mobile No. : "+((w=e==null?void 0:e.data)==null?void 0:w.empMobile)+"\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: "+((R=e==null?void 0:e.data)==null?void 0:R.currentWebSite)+"\n****************************************************\n",De=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:Te}}))};return s.jsxs(qe,{title:"Payment Receipt",children:[Ce&&s.jsx(We,{}),s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:s.jsx("div",{className:" text-justify font-poppins ",children:s.jsxs("div",{className:" text-gray-700  text-xs",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto"})}),s.jsx("div",{className:"text-center  font-semibold uppercase",children:((P=e==null?void 0:e.data)==null?void 0:P.ulbName)||"NA"}),s.jsx("div",{className:"text-center text-xs",children:"WATER USER CHARGE"}),s.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),s.jsxs("div",{className:"mt-4",children:["Transaction No : ",((g=e==null?void 0:e.data)==null?void 0:g.transactionNo)||"NA"]}),s.jsxs("div",{className:"",children:["Received From Mr/Mrs/Miss : ",((f=e==null?void 0:e.data)==null?void 0:f.customerName)||"NA"]}),s.jsxs("div",{className:"",children:["Department/Section : ",((q=e==null?void 0:e.data)==null?void 0:q.accountDescription)||"NA"]}),s.jsxs("div",{className:"",children:["Account Description : ",((W=e==null?void 0:e.data)==null?void 0:W.description)||"NA"]}),s.jsxs("div",{className:"",children:["Zone : ",((k=e==null?void 0:e.data)==null?void 0:k.zoneName)||"NA"]}),s.jsxs("div",{className:"",children:["Ward No : ",((E=e==null?void 0:e.data)==null?void 0:E.WardNo)||"NA"]}),s.jsxs("div",{className:"",children:["Consumer No: ",(F=e==null?void 0:e.data)==null?void 0:F.consumerNo]}),s.jsxs("div",{className:"",children:["Date : ",(L=e==null?void 0:e.data)==null?void 0:L.transactionDate]}),s.jsxs("div",{className:"",children:["Transaction Time : ",(B=e==null?void 0:e.data)==null?void 0:B.transactionTime]}),s.jsxs("div",{className:"",children:["Mobile No : ",((S=e==null?void 0:e.data)==null?void 0:S.customerMobile)||"NA"]}),s.jsxs("div",{className:"",children:["Address : ",(I=e==null?void 0:e.data)==null?void 0:I.address]}),s.jsxs("div",{className:"w-80",children:["Session : ",((K=e==null?void 0:e.data)==null?void 0:K.session)||"NA"]}),s.jsxs("div",{className:"",children:["Amount :"," ",Math.round((V=e==null?void 0:e.data)==null?void 0:V.demandAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Penalty :"," ",Math.round((_=e==null?void 0:e.data)==null?void 0:_.penaltyAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Due Amount :"," ",Math.round((O=e==null?void 0:e.data)==null?void 0:O.dueAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["(in words) :",((Y=e==null?void 0:e.data)==null?void 0:Y.paidAmtInWords)||"NA"]}),s.jsxs("div",{className:"",children:["Towards :"," ",(z=e==null?void 0:e.data)==null?void 0:z.towards]}),s.jsxs("div",{className:"",children:["Vide : ",(G=e==null?void 0:e.data)==null?void 0:G.paymentMode]}),s.jsxs("div",{className:"w-80",children:["Water Consumed (in K.L.) : ",((H=e==null?void 0:e.data)==null?void 0:H.waterConsumed)||"NA"]}),s.jsxs("div",{className:"w-80",children:["Last Meter Reading (in K.L.) :"," ",((U=e==null?void 0:e.data)==null?void 0:U.unitConsumed)||"NA"]}),((Z=e==null?void 0:e.data)==null?void 0:Z.paymentMode)=="Cheque"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((J=e==null?void 0:e.data)==null?void 0:J.bankName)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((Q=e==null?void 0:e.data)==null?void 0:Q.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque no. : ",((X=e==null?void 0:e.data)==null?void 0:X.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque date : ",(($=e==null?void 0:e.data)==null?void 0:$.chequeDate)||"NA"]})]}),((ee=e==null?void 0:e.data)==null?void 0:ee.paymentMode)=="DD"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((se=e==null?void 0:e.data)==null?void 0:se.bank_name)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((ne=e==null?void 0:e.data)==null?void 0:ne.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque no. : ",((ie=e==null?void 0:e.data)==null?void 0:ie.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque date : ",((ce=e==null?void 0:e.data)==null?void 0:ce.chequeDate)||"NA"]})]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Tc Name : ",(oe=e==null?void 0:e.data)==null?void 0:oe.empName]}),s.jsxs("div",{className:"",children:["Tc Mobile No. : ",(re=e==null?void 0:e.data)==null?void 0:re.empMobile]}),s.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),s.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),s.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",((te=e==null?void 0:e.data)==null?void 0:te.currentWebSite)||"NA"]})]})})}),s.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>be("/amc-app/water/search-consumer"),children:"Search Consumer"}),s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{var i;De(),console.log((i=e.data)==null?void 0:i.receiptDtls)},children:"Print"})]})]})]})}export{Se as default};
