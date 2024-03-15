import{a as Re,w as ge,j as s}from"./index-kY_1vXrj.js";import{h as fe,u as Fe,d as ke}from"./router-g9NwwHut.js";import"./moment-X--WQ6sg.js";import{P as We}from"./index-CK_pnLs4.js";import{O as qe}from"./OverLayLoader-SmXvaihr.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./tailwind-xMhOhnt0.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./module-ZmhHPkNa.js";function Ue(){var i,o,r,c,t,m,a,l,d,N,u,h,x,p,A,j,v,M,b,D,y,P,C,T,w,R,g,f,F,k,W,q,E,L,B,S,I,K,V,_,z,O,Y,G,H,U,Z,J,Q,X,$,ee,se,ne,ie,oe,re,ce,te,me,ae;const{id:n}=fe(),ye=Fe(),{data:e,isLoading:Pe}=Re({api:ge.waterPaymentReceipt,config:{tranId:n},value:[n],options:{enabled:!!n}}),Ce=ke.useCallback(()=>{var le,de,Ne,ue,he,xe,pe,Ae,je,ve,Me,be,De;return((le=e==null?void 0:e.data)==null?void 0:le.paymentMode)=="Cheque"?"Payment Mode: "+((de=e==null?void 0:e.data)==null?void 0:de.paymentMode)+"\nBank Name: "+((Ne=e==null?void 0:e.data)==null?void 0:Ne.bankName)+"\nBranch Name: "+((ue=e==null?void 0:e.data)==null?void 0:ue.branchName)+"\nCheque no: "+((he=e==null?void 0:e.data)==null?void 0:he.chequeNo)+"\nCheque Date: "+((xe=e==null?void 0:e.data)==null?void 0:xe.chequeDate):((pe=e==null?void 0:e.data)==null?void 0:pe.paymentMode)=="DD"?"Payment Mode: "+((Ae=e==null?void 0:e.data)==null?void 0:Ae.paymentMode)+"\nBank Name: "+((je=e==null?void 0:e.data)==null?void 0:je.bankName)+"\nBranch Name: "+((ve=e==null?void 0:e.data)==null?void 0:ve.branchName)+"\nDD No: "+((Me=e==null?void 0:e.data)==null?void 0:Me.chequeNo)+"\nDD Date: "+((be=e==null?void 0:e.data)==null?void 0:be.chequeDate):"Payment Mode: "+((De=e==null?void 0:e.data)==null?void 0:De.paymentMode)},[e==null?void 0:e.data]),Te="  "+((i=e==null?void 0:e.data)==null?void 0:i.ulbName)+"\n[C]WATER USER CHARGE\n[C]PAYMENT RECEIPT\n********************************\nTransaction No : "+((o=e==null?void 0:e.data)==null?void 0:o.transactionNo)+"\nReceived From Mr/Mrs/Miss : "+((r=e==null?void 0:e.data)==null?void 0:r.customerName)+"\nDepartment/Section : "+((c=e==null?void 0:e.data)==null?void 0:c.accountDescription)+"\nAccount Description : "+((t=e==null?void 0:e.data)==null?void 0:t.description)+"\nZone : "+((m=e==null?void 0:e.data)==null?void 0:m.zoneName)+"\nWard No : "+((a=e==null?void 0:e.data)==null?void 0:a.WardNo)+"\nConsumer No: "+((l=e==null?void 0:e.data)==null?void 0:l.consumerNo)+"\nDate : "+((d=e==null?void 0:e.data)==null?void 0:d.transactionDate)+"\nTransaction Time : "+((N=e==null?void 0:e.data)==null?void 0:N.transactionTime)+"\nMobile No : "+((u=e==null?void 0:e.data)==null?void 0:u.customerMobile)+"\nAddress : "+((h=e==null?void 0:e.data)==null?void 0:h.address)+"\nSession : "+((x=e==null?void 0:e.data)==null?void 0:x.session)+"\nPenalty : "+Math.round((p=e==null?void 0:e.data)==null?void 0:p.penaltyAmount).toFixed(2)+"\nAdvance Amount : "+Math.round((A=e==null?void 0:e.data)==null?void 0:A.advancePaidAmount).toFixed(2)+"\nAdjust Amount : "+Math.round((j=e==null?void 0:e.data)==null?void 0:j.adjustAmount).toFixed(2)+"\nDue Amount : "+Math.round((v=e==null?void 0:e.data)==null?void 0:v.dueAmount).toFixed(2)+"\nPaid Amount : "+Math.round((M=e==null?void 0:e.data)==null?void 0:M.totalPaidAmount).toFixed(2)+"\n(in words) :"+((b=e==null?void 0:e.data)==null?void 0:b.paidAmtInWords)+"\nTowards : "+((D=e==null?void 0:e.data)==null?void 0:D.towards)+"\n"+Ce()+"\nWater Consumed (in K.L.) : "+((y=e==null?void 0:e.data)==null?void 0:y.waterConsumed)+"\nLast Meter Reading (in K.L.) : "+((P=e==null?void 0:e.data)==null?void 0:P.unitConsumed)+"\n********************************\nTc Name : "+((C=e==null?void 0:e.data)==null?void 0:C.empName)+"\nTc Mobile No. : "+((T=e==null?void 0:e.data)==null?void 0:T.empMobile)+"\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: "+((w=e==null?void 0:e.data)==null?void 0:w.currentWebSite)+"\n********************************\n",we=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:Te}}))};return s.jsxs(We,{title:"Payment Receipt",children:[Pe&&s.jsx(qe,{}),s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:s.jsx("div",{className:" text-justify font-poppins ",children:s.jsxs("div",{className:" text-gray-700  text-xs",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto",alt:"Akola Municipal Corporation",loading:"lazy"})}),s.jsx("div",{className:"text-center  font-semibold uppercase",children:((R=e==null?void 0:e.data)==null?void 0:R.ulbName)||"NA"}),s.jsx("div",{className:"text-center text-xs",children:"WATER USER CHARGE"}),s.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),s.jsxs("div",{className:"mt-4",children:["Transaction No : ",((g=e==null?void 0:e.data)==null?void 0:g.transactionNo)||"NA"]}),s.jsxs("div",{className:"",children:["Received From Mr/Mrs/Miss : ",((f=e==null?void 0:e.data)==null?void 0:f.customerName)||"NA"]}),s.jsxs("div",{className:"",children:["Department/Section : ",((F=e==null?void 0:e.data)==null?void 0:F.accountDescription)||"NA"]}),s.jsxs("div",{className:"",children:["Account Description : ",((k=e==null?void 0:e.data)==null?void 0:k.description)||"NA"]}),s.jsxs("div",{className:"",children:["Zone : ",((W=e==null?void 0:e.data)==null?void 0:W.zoneName)||"NA"]}),s.jsxs("div",{className:"",children:["Ward No : ",((q=e==null?void 0:e.data)==null?void 0:q.WardNo)||"NA"]}),s.jsxs("div",{className:"",children:["Consumer No: ",(E=e==null?void 0:e.data)==null?void 0:E.consumerNo]}),s.jsxs("div",{className:"",children:["Date : ",(L=e==null?void 0:e.data)==null?void 0:L.transactionDate]}),s.jsxs("div",{className:"",children:["Transaction Time : ",(B=e==null?void 0:e.data)==null?void 0:B.transactionTime]}),s.jsxs("div",{className:"",children:["Mobile No : ",((S=e==null?void 0:e.data)==null?void 0:S.customerMobile)||"NA"]}),s.jsxs("div",{className:"",children:["Address : ",(I=e==null?void 0:e.data)==null?void 0:I.address]}),s.jsxs("div",{className:"w-80",children:["Session : ",((K=e==null?void 0:e.data)==null?void 0:K.session)||"NA"]}),s.jsxs("div",{className:"",children:["Penalty :"," ",Math.round((V=e==null?void 0:e.data)==null?void 0:V.penaltyAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Advance Amount :"," ",Math.round((_=e==null?void 0:e.data)==null?void 0:_.advancePaidAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Adjust Amount :"," ",Math.round((z=e==null?void 0:e.data)==null?void 0:z.adjustAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Paid Amount :"," ",Math.round((O=e==null?void 0:e.data)==null?void 0:O.totalPaidAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["(in words) :",((Y=e==null?void 0:e.data)==null?void 0:Y.paidAmtInWords)||"NA"]}),s.jsxs("div",{className:"",children:["Due Amount :"," ",Math.round((G=e==null?void 0:e.data)==null?void 0:G.dueAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Towards :"," ",(H=e==null?void 0:e.data)==null?void 0:H.towards]}),s.jsxs("div",{className:"",children:["Vide : ",(U=e==null?void 0:e.data)==null?void 0:U.paymentMode]}),s.jsxs("div",{className:"w-80",children:["Water Consumed (in K.L.) : ",((Z=e==null?void 0:e.data)==null?void 0:Z.waterConsumed)||"NA"]}),s.jsxs("div",{className:"w-80",children:["Last Meter Reading (in K.L.) :"," ",((J=e==null?void 0:e.data)==null?void 0:J.unitConsumed)||"NA"]}),((Q=e==null?void 0:e.data)==null?void 0:Q.paymentMode)=="Cheque"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((X=e==null?void 0:e.data)==null?void 0:X.bankName)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",(($=e==null?void 0:e.data)==null?void 0:$.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque no. : ",((ee=e==null?void 0:e.data)==null?void 0:ee.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque date : ",((se=e==null?void 0:e.data)==null?void 0:se.chequeDate)||"NA"]})]}),((ne=e==null?void 0:e.data)==null?void 0:ne.paymentMode)=="DD"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((ie=e==null?void 0:e.data)==null?void 0:ie.bank_name)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((oe=e==null?void 0:e.data)==null?void 0:oe.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["DD No. : ",((re=e==null?void 0:e.data)==null?void 0:re.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["DD Date : ",((ce=e==null?void 0:e.data)==null?void 0:ce.chequeDate)||"NA"]})]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Tc Name : ",(te=e==null?void 0:e.data)==null?void 0:te.empName]}),s.jsxs("div",{className:"",children:["Tc Mobile No. : ",(me=e==null?void 0:e.data)==null?void 0:me.empMobile]}),s.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),s.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),s.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",((ae=e==null?void 0:e.data)==null?void 0:ae.currentWebSite)||"NA"]})]})})}),s.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>ye("/amc-app/water/search-consumer"),children:"Search Consumer"}),s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{we()},children:"Print"})]})]})]})}export{Ue as default};
