import{c as Ls,p as Hs,j as s}from"./index-dL_EjbSt.js";import{e as Us,u as Vs,d as Qs}from"./router-5yjtezO8.js";import"./moment-UBOc2Xni.js";import{P as Ss}from"./index-vQju75AN.js";import{O as Ys}from"./OverLayLoader-KS6KwRK7.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./tailwind-6U-kYQAu.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./module-fKnwz8NQ.js";function ct(){var r,c,n,l,o,a,p,m,N,D,d,h,x,u,b,j,v,y,P,M,g,A,T,w,f,C,R,q,k,B,_,O,I,E,W,z,F,L,H,U,V,Q,S,Y,Z,J,K,G,X,$,ee,se,te,ie,re,ce,ne,le,oe,ae,pe,me,Ne,De,de,he,xe,ue,be,je,ve,ye,Pe,Me,ge,Ae,Te,we,fe,Ce,Re,qe,ke,Be,_e,Oe,Ie,Ee,We,ze,Fe,Le,He,Ue,Ve,Qe,Se,Ye,Ze,Je,Ke,Ge,Xe,$e,es,ss,ts,is,rs,cs,ns,ls,os,as;const{id:t}=Us(),Is=Vs(),{data:e,isLoading:Es}=Ls({api:Hs.propPaymentReceipt,config:{tranId:t},value:[t],options:{enabled:!!t}}),Ws=Qs.useCallback(()=>{var ps,ms,Ns,Ds,ds,hs,xs,us,bs,js,vs,ys,Ps,Ms,gs,As,Ts,ws,fs,Cs,Rs,qs,ks,Bs,_s,Os;return((ms=(ps=e==null?void 0:e.data)==null?void 0:ps.receiptDtls)==null?void 0:ms.paymentMode)==="CHEQUE"?"Payment Mode: "+((Ds=(Ns=e==null?void 0:e.data)==null?void 0:Ns.receiptDtls)==null?void 0:Ds.paymentMode)+"\nBank Name: "+((hs=(ds=e==null?void 0:e.data)==null?void 0:ds.receiptDtls)==null?void 0:hs.bankName)+"\nBranch Name: "+((us=(xs=e==null?void 0:e.data)==null?void 0:xs.receiptDtls)==null?void 0:us.branchName)+"\nCheque no: "+((js=(bs=e==null?void 0:e.data)==null?void 0:bs.receiptDtls)==null?void 0:js.chequeNo)+"\nCheque Date: "+((ys=(vs=e==null?void 0:e.data)==null?void 0:vs.receiptDtls)==null?void 0:ys.chequeDate):((Ms=(Ps=e==null?void 0:e.data)==null?void 0:Ps.receiptDtls)==null?void 0:Ms.paymentMode)==="DD"?"Payment Mode: "+((As=(gs=e==null?void 0:e.data)==null?void 0:gs.receiptDtls)==null?void 0:As.paymentMode)+"\nBank Name: "+((ws=(Ts=e==null?void 0:e.data)==null?void 0:Ts.receiptDtls)==null?void 0:ws.bankName)+"\nBranch Name: "+((Cs=(fs=e==null?void 0:e.data)==null?void 0:fs.receiptDtls)==null?void 0:Cs.branchName)+"\nCheque no: "+((qs=(Rs=e==null?void 0:e.data)==null?void 0:Rs.receiptDtls)==null?void 0:qs.chequeNo)+"\nCheque Date: "+((Bs=(ks=e==null?void 0:e.data)==null?void 0:ks.receiptDtls)==null?void 0:Bs.chequeDate):"Payment Mode: "+((Os=(_s=e==null?void 0:e.data)==null?void 0:_s.receiptDtls)==null?void 0:Os.paymentMode)},[(r=e==null?void 0:e.data)==null?void 0:r.receiptDtls]),zs="  "+((l=(n=(c=e==null?void 0:e.data)==null?void 0:c.receiptDtls)==null?void 0:n.ulbDetails)==null?void 0:l.ulb_name)+"\n[C]"+((p=(a=(o=e==null?void 0:e.data)==null?void 0:o.receiptDtls)==null?void 0:a.ulbDetails)==null?void 0:p.state)+"\n \n \nReceipt No: "+((N=(m=e==null?void 0:e.data)==null?void 0:m.receiptDtls)==null?void 0:N.receiptNo)+'\n<b>Owner Name: </b><b><font size="big">'+((d=(D=e==null?void 0:e.data)==null?void 0:D.receiptDtls)==null?void 0:d.ownerName)+"</font></b>\nOccupant Name: "+((x=(h=e==null?void 0:e.data)==null?void 0:h.receiptDtls)==null?void 0:x.customerName)+"\nHolding No: "+((b=(u=e==null?void 0:e.data)==null?void 0:u.receiptDtls)==null?void 0:b.applicationNo)+"\nZone: "+((v=(j=e==null?void 0:e.data)==null?void 0:j.receiptDtls)==null?void 0:v.zone_name)+"\nWard No: "+((P=(y=e==null?void 0:e.data)==null?void 0:y.receiptDtls)==null?void 0:P.wardNo)+"\nAddress: "+((g=(M=e==null?void 0:e.data)==null?void 0:M.receiptDtls)==null?void 0:g.address)+"\nTransaction Date: "+((T=(A=e==null?void 0:e.data)==null?void 0:A.receiptDtls)==null?void 0:T.transactionDate)+"\nTransaction Time: "+((f=(w=e==null?void 0:e.data)==null?void 0:w.receiptDtls)==null?void 0:f.transactionTime)+"\nDescription: "+((R=(C=e==null?void 0:e.data)==null?void 0:C.receiptDtls)==null?void 0:R.accountDescription)+"\nProperty No: "+((k=(q=e==null?void 0:e.data)==null?void 0:q.receiptDtls)==null?void 0:k.propertyNo)+"\nTransaction No: "+((_=(B=e==null?void 0:e.data)==null?void 0:B.receiptDtls)==null?void 0:_.transactionNo)+"\nPaid Upto: "+((I=(O=e==null?void 0:e.data)==null?void 0:O.receiptDtls)==null?void 0:I.mobileDuration)+"\nMode: "+((W=(E=e==null?void 0:e.data)==null?void 0:E.receiptDtls)==null?void 0:W.paymentMode)+"\nRebate: "+Math.round(((z=e==null?void 0:e.data)==null?void 0:z.arrearPenaltyRebate)||0)+"\nTotal Paid Amount: "+Math.round((L=(F=e==null?void 0:e.data)==null?void 0:F.receiptDtls)==null?void 0:L.totalPaidAmount)+"\n(In word): "+((U=(H=e==null?void 0:e.data)==null?void 0:H.receiptDtls)==null?void 0:U.paidAmtInWords)+"\n"+Ws()+"\n********************************\nTc Name: "+((Q=(V=e==null?void 0:e.data)==null?void 0:V.receiptDtls)==null?void 0:Q.tcName)+"\nTc Mobile No: "+((Y=(S=e==null?void 0:e.data)==null?void 0:S.receiptDtls)==null?void 0:Y.tcMobile)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  "+((K=(J=(Z=e==null?void 0:e.data)==null?void 0:Z.receiptDtls)==null?void 0:J.ulbDetails)==null?void 0:K.website)+"\n",Fs=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:zs}}))};return s.jsxs(Ss,{title:"Payment Receipt",children:[Es&&s.jsx(Ys,{}),s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:s.jsx("div",{className:" text-justify font-poppins ",children:s.jsxs("div",{className:" text-gray-700  text-xs",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto",alt:"Akola Municipal Corporation",loading:"lazy"})}),s.jsx("div",{className:"text-center  font-semibold",children:(($=(X=(G=e==null?void 0:e.data)==null?void 0:G.receiptDtls)==null?void 0:X.ulbDetails)==null?void 0:$.ulb_name)||"NA"}),s.jsx("div",{className:"text-center ",children:(te=(se=(ee=e==null?void 0:e.data)==null?void 0:ee.receiptDtls)==null?void 0:se.ulbDetails)==null?void 0:te.state}),s.jsxs("div",{className:"mt-4",children:["Receipt No : ",((re=(ie=e==null?void 0:e.data)==null?void 0:ie.receiptDtls)==null?void 0:re.receiptNo)||"NA"]}),s.jsxs("div",{className:"",children:["Owner Name : ",((ne=(ce=e==null?void 0:e.data)==null?void 0:ce.receiptDtls)==null?void 0:ne.ownerName)||"NA"]}),s.jsxs("div",{className:"",children:["Occupant Name: : ",((oe=(le=e==null?void 0:e.data)==null?void 0:le.receiptDtls)==null?void 0:oe.customerName)||"NA"]}),s.jsxs("div",{className:"",children:["Holding No : ",(pe=(ae=e==null?void 0:e.data)==null?void 0:ae.receiptDtls)==null?void 0:pe.applicationNo]}),s.jsxs("div",{className:"",children:["Zone : ",(Ne=(me=e==null?void 0:e.data)==null?void 0:me.receiptDtls)==null?void 0:Ne.zone_name]}),s.jsxs("div",{className:"",children:["Ward No : ",(de=(De=e==null?void 0:e.data)==null?void 0:De.receiptDtls)==null?void 0:de.wardNo]}),s.jsxs("div",{className:"",children:["Address : ",(xe=(he=e==null?void 0:e.data)==null?void 0:he.receiptDtls)==null?void 0:xe.address]}),s.jsxs("div",{className:"",children:["Transaction Date : ",(be=(ue=e==null?void 0:e.data)==null?void 0:ue.receiptDtls)==null?void 0:be.transactionDate]}),s.jsxs("div",{className:"",children:["Transaction Time : ",(ve=(je=e==null?void 0:e.data)==null?void 0:je.receiptDtls)==null?void 0:ve.transactionTime]}),s.jsxs("div",{className:"",children:["Description : ",(Pe=(ye=e==null?void 0:e.data)==null?void 0:ye.receiptDtls)==null?void 0:Pe.accountDescription]}),s.jsxs("div",{className:"",children:["Property No : ",(ge=(Me=e==null?void 0:e.data)==null?void 0:Me.receiptDtls)==null?void 0:ge.propertyNo]}),s.jsxs("div",{className:"",children:["Transaction No :"," ",((Te=(Ae=e==null?void 0:e.data)==null?void 0:Ae.receiptDtls)==null?void 0:Te.transactionNo)||"NA"]}),s.jsxs("div",{className:"",children:["Paid Upto :"," ",(fe=(we=e==null?void 0:e.data)==null?void 0:we.receiptDtls)==null?void 0:fe.mobileDuration]}),s.jsxs("div",{className:"",children:["Mode : ",(Re=(Ce=e==null?void 0:e.data)==null?void 0:Ce.receiptDtls)==null?void 0:Re.paymentMode]}),((qe=e==null?void 0:e.data)==null?void 0:qe.arrearPenaltyRebate)>0&&s.jsxs("div",{className:"",children:["Rebate: ",Math.round((ke=e==null?void 0:e.data)==null?void 0:ke.arrearPenaltyRebate)]}),s.jsxs("div",{className:"",children:["Total Paid Amount :"," ",Math.round((_e=(Be=e==null?void 0:e.data)==null?void 0:Be.receiptDtls)==null?void 0:_e.totalPaidAmount)]}),s.jsxs("div",{className:"w-80",children:["(In words) : ",(Ie=(Oe=e==null?void 0:e.data)==null?void 0:Oe.receiptDtls)==null?void 0:Ie.paidAmtInWords]}),((We=(Ee=e==null?void 0:e.data)==null?void 0:Ee.receiptDtls)==null?void 0:We.paymentMode)=="CHEQUE"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((Fe=(ze=e==null?void 0:e.data)==null?void 0:ze.receiptDtls)==null?void 0:Fe.bankName)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((He=(Le=e==null?void 0:e.data)==null?void 0:Le.receiptDtls)==null?void 0:He.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque no. : ",((Ve=(Ue=e==null?void 0:e.data)==null?void 0:Ue.receiptDtls)==null?void 0:Ve.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque date : ",((Se=(Qe=e==null?void 0:e.data)==null?void 0:Qe.receiptDtls)==null?void 0:Se.chequeDate)||"NA"]})]}),((Ze=(Ye=e==null?void 0:e.data)==null?void 0:Ye.receiptDtls)==null?void 0:Ze.paymentMode)=="DD"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((Ke=(Je=e==null?void 0:e.data)==null?void 0:Je.receiptDtls)==null?void 0:Ke.bank_name)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((Xe=(Ge=e==null?void 0:e.data)==null?void 0:Ge.receiptDtls)==null?void 0:Xe.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque no. : ",((es=($e=e==null?void 0:e.data)==null?void 0:$e.receiptDtls)==null?void 0:es.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque date : ",((ts=(ss=e==null?void 0:e.data)==null?void 0:ss.receiptDtls)==null?void 0:ts.chequeDate)||"NA"]})]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Tc Name : ",(rs=(is=e==null?void 0:e.data)==null?void 0:is.receiptDtls)==null?void 0:rs.tcName]}),s.jsxs("div",{className:"",children:["Tc Mobile No. : ",(ns=(cs=e==null?void 0:e.data)==null?void 0:cs.receiptDtls)==null?void 0:ns.tcMobile]}),s.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),s.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),s.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",((as=(os=(ls=e==null?void 0:e.data)==null?void 0:ls.receiptDtls)==null?void 0:os.ulbDetails)==null?void 0:as.website)||"NA"]})]})})}),s.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>Is("/amc-app/property/search-holding"),children:"Search Property"}),s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{var i;Fs(),console.log((i=e.data)==null?void 0:i.receiptDtls)},children:"Print"})]})]})]})}export{ct as default};
