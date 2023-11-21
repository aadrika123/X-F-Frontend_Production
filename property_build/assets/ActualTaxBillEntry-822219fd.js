import{r as d,j as e,B as Hr,V as Ir,ae as zr,u as Or,X as Qr,e as Vr,a as Yr,a4 as Xr,b as Zr,Q as $r,c as Gr,af as Jr,ad as Kr}from"./index-362d414a.js";import"./index-7a24c7c5.js";import{Q as ed}from"./QrCode-01ebcc4b.js";import{A as ad}from"./AmcChqReceipt-ecda4be8.js";class td extends d.Component{render(){var p,g,t,x,h,i,m,s,l,r,f,c,b,u,n,j,N,a,o,D,A,T,P,w,B,y,v,L,_,S,F,C,R,k,E,M,U,q,I,H,W,z,O,Q,V,Y,X,Z,$,G,J,K,ee,ae,te,se,le,re,de,ie,ce,ne,oe,pe,xe,he,me,be,ue,je,Ne,ge,fe,De,Ae,Te,Pe,we,Be,ye,ve,Le,_e,Se,Fe,Ce,Re,ke,Ee,Me,Ue,qe,Ie,He,We,ze,Oe,Qe,Ve,Ye,Xe,Ze,$e,Ge,Je,Ke,ea,aa,ta,sa,la,ra,da,ia,ca,na,oa,pa,xa,ha,ma,ba,ua,ja,Na,ga,fa,Da,Aa,Ta,Pa,wa,Ba,ya,va,La,_a,Sa,Fa,Ca,Ra,ka,Ea,Ma,Ua,qa,Ia,Ha,Wa,za,Oa,Qa,Va,Ya,Xa,Za,$a,Ga,Ja,Ka,et,at,tt,st,lt,rt,dt,it,ct,nt,ot,pt,xt,ht,mt,bt,ut,jt,Nt,gt,ft,Dt,At,Tt,Pt,wt,Bt,yt,vt,Lt,_t,St,Ft,Ct,Rt,kt,Et,Mt,Ut,qt,It,Ht,Wt,zt,Ot,Qt,Vt,Yt,Xt,Zt,$t,Gt,Jt,Kt,es,as,ts,ss,ls,rs,ds,is,cs,ns,os,ps,xs,hs,ms,bs,us,js,Ns,gs,fs,Ds,As,Ts,Ps,ws,Bs,ys,vs,Ls,_s,Ss,Fs,Cs,Rs,ks,Es,Ms,Us,qs,Is,Hs,Ws,zs,Os,Qs,Vs,Ys,Xs,Zs,$s,Gs,Js,Ks,el,al,tl,sl,ll,rl,dl,il,cl,nl,ol,pl,xl,hl,ml,bl,ul,jl,Nl,gl,fl,Dl,Al,Tl,Pl,wl,Bl,yl,vl,Ll,_l,Sl,Fl,Cl,Rl,kl,El,Ml,Ul,ql,Il,Hl,Wl,zl,Ol,Ql,Vl,Yl,Xl,Zl,$l,Gl,Jl,Kl,er,ar,tr,sr,lr,rr,dr,ir,cr,nr,or,pr,xr,hr,mr,br,ur,jr,Nr,gr,fr,Dr,Ar,Tr,Pr,wr,Br,yr,vr,Lr,_r,Sr,Fr,Cr,Rr,kr,Er,Mr,Ur,qr;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-[66rem] mx-auto bg-white p-4 border ",id:"printableArea",children:[((p=this.props)==null?void 0:p.Loading)&&e.jsx(Hr,{}),e.jsxs("div",{className:"grid grid-cols-6 text-center ",children:[e.jsx("div",{className:"col-span-5",children:e.jsxs("div",{className:"h-auto flex gap-1 w-full",children:[e.jsx("img",{src:"https://th.bing.com/th/id/OIP.2h0NzgL6-wG4kSWlkAS0jgHaHX?pid=ImgDet&rs=1",alt:"logo",className:"w-24 h-24"}),e.jsx("div",{className:"text-sm font-semibold whitespace-nowrap  py-2"}),e.jsxs("div",{className:"text-center  w-full",children:[e.jsx("div",{className:"text-2xl font-semibold px-2  bg-gray-700 text-white border rounded mx-1 py-1",children:(g=this.props)==null?void 0:g.t("tranActualTaxBillPage.akolaMunicipalCorporationLabel.label")}),e.jsx("p",{className:"text-sm font-normal px-2",children:(t=this.props)==null?void 0:t.t("tranActualTaxBillPage.receiptLabel.label")}),e.jsx("table",{className:"table-auto w-full  ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(x=this.props)==null?void 0:x.t("tranActualTaxBillPage.ownerNameLabel.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(m=(i=(h=this.props)==null?void 0:h.fullData)==null?void 0:i.receiptDtls)==null?void 0:m.ownerName]}),e.jsx("th",{className:"text-start whitespace-nowrap"}),e.jsx("td",{className:"text-start",children:" "}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"  "}),e.jsx("td",{className:"text-start",children:" "})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(s=this.props)==null?void 0:s.t("tranActualTaxBillPage.occupantName.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(f=(r=(l=this.props)==null?void 0:l.fullData)==null?void 0:r.receiptDtls)==null?void 0:f.customerName]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(c=this.props)==null?void 0:c.t("tranAmcChqReceipt.receiptNoLabel.label")," : "]}),e.jsxs("td",{className:"text-start",children:[" ",Ir((n=(u=(b=this.props)==null?void 0:b.fullData)==null?void 0:u.receiptDtls)==null?void 0:n.receiptNo)]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(j=this.props)==null?void 0:j.t("tranAmcChqReceipt.receiptBookNoLabel1.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[Ir((o=(a=(N=this.props)==null?void 0:N.fullData)==null?void 0:a.receiptDtls)==null?void 0:o.bookNo)," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(D=this.props)==null?void 0:D.t("tranActualTaxBillPage.holdingNoLabel.label"),":"]}),e.jsxs("td",{className:"text-start",children:[" ",(P=(T=(A=this.props)==null?void 0:A.fullData)==null?void 0:T.receiptDtls)==null?void 0:P.applicationNo," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(w=this.props)==null?void 0:w.t("tranActualTaxBillPage.billNoLabel.label")," : "]}),e.jsx("td",{className:"text-start",children:((v=(y=(B=this.props)==null?void 0:B.fullData)==null?void 0:y.receiptDtls)==null?void 0:v.transactionNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(L=this.props)==null?void 0:L.t("tranActualTaxBillPage.addressLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((F=(S=(_=this.props)==null?void 0:_.fullData)==null?void 0:S.receiptDtls)==null?void 0:F.address)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(C=this.props)==null?void 0:C.t("tranActualTaxBillPage.mobileNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((E=(k=(R=this.props)==null?void 0:R.fullData)==null?void 0:k.receiptDtls)==null?void 0:E.mobileNo)||"N/A"}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(M=this.props)==null?void 0:M.t("tranActualTaxBillPage.propertyNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((I=(q=(U=this.props)==null?void 0:U.fullData)==null?void 0:q.receiptDtls)==null?void 0:I.propertyNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(H=this.props)==null?void 0:H.t("tranActualTaxBillPage.westZoneLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((O=(z=(W=this.props)==null?void 0:W.fullData)==null?void 0:z.receiptDtls)==null?void 0:O.zone_name)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(Q=this.props)==null?void 0:Q.t("tranActualTaxBillPage.wardNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((X=(Y=(V=this.props)==null?void 0:V.fullData)==null?void 0:Y.receiptDtls)==null?void 0:X.wardNo)||"N/A"}),((G=($=(Z=this.props)==null?void 0:Z.fullData)==null?void 0:$.receiptDtls)==null?void 0:G.paymentMode)=="CASH"?"":e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(J=this.props)==null?void 0:J.t("tranActualTaxBillPage.verifyStatusLabel.label")," :"]}),((ae=(ee=(K=this.props)==null?void 0:K.fullData)==null?void 0:ee.receiptDtls)==null?void 0:ae.verifyStatus)==0&&e.jsxs("td",{className:"text-start text-red-500 ",children:[(te=this.props)==null?void 0:te.t("tranActualTaxBillPage.notVerifiedLabel.label")," "]}),((re=(le=(se=this.props)==null?void 0:se.fullData)==null?void 0:le.receiptDtls)==null?void 0:re.verifyStatus)==1&&e.jsxs("td",{className:"text-start text-green-500 ",children:[(de=this.props)==null?void 0:de.t("tranActualTaxBillPage.verifiedLabel.label")," "]}),((ne=(ce=(ie=this.props)==null?void 0:ie.fullData)==null?void 0:ce.receiptDtls)==null?void 0:ne.verifyStatus)==2&&e.jsxs("td",{className:"text-start text-yellow-700 ",children:[(oe=this.props)==null?void 0:oe.t("tranActualTaxBillPage.underVerificationLabel.label")," "]}),((he=(xe=(pe=this.props)==null?void 0:pe.fullData)==null?void 0:xe.receiptDtls)==null?void 0:he.verifyStatus)==3&&e.jsxs("td",{className:"text-start text-red-500",children:[(me=this.props)==null?void 0:me.t("tranActualTaxBillPage.bounceLabel.label")," "]})]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(be=this.props)==null?void 0:be.t("tranActualTaxBillPage.paymentModeLabel.label")," :"]}),e.jsx("td",{className:"text-start",colSpan:3,children:((Ne=(je=(ue=this.props)==null?void 0:ue.fullData)==null?void 0:je.receiptDtls)==null?void 0:Ne.paymentMode)||"N/A"})]}),e.jsx("tr",{className:"text-[11px] ",children:((De=(fe=(ge=this.props)==null?void 0:ge.fullData)==null?void 0:fe.receiptDtls)==null?void 0:De.paymentMode)=="CHEQUE"||((Pe=(Te=(Ae=this.props)==null?void 0:Ae.fullData)==null?void 0:Te.receiptDtls)==null?void 0:Pe.paymentMode)=="DD"?e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start",children:[" ",(we=this.props)==null?void 0:we.t("tranActualTaxBillPage.bankNameLabel.label")," :"]}),e.jsx("td",{className:"text-start whitespace-nowrap",children:(ve=(ye=(Be=this.props)==null?void 0:Be.fullData)==null?void 0:ye.receiptDtls)==null?void 0:ve.bankName}),e.jsxs("th",{className:"text-start",children:[" ",(Le=this.props)==null?void 0:Le.t("tranActualTaxBillPage.branchNameLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Fe=(Se=(_e=this.props)==null?void 0:_e.fullData)==null?void 0:Se.receiptDtls)==null?void 0:Fe.branchName}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(Ce=this.props)==null?void 0:Ce.t("tranActualTaxBillPage.chequeNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Ee=(ke=(Re=this.props)==null?void 0:Re.fullData)==null?void 0:ke.receiptDtls)==null?void 0:Ee.chequeNo}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(Me=this.props)==null?void 0:Me.t("tranActualTaxBillPage.chequeDateLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Ie=(qe=(Ue=this.props)==null?void 0:Ue.fullData)==null?void 0:qe.receiptDtls)==null?void 0:Ie.chequeDate})," "]}):""})]})}),e.jsxs("div",{className:" text-xs  w-full text-left mt-2",children:[e.jsxs("h1",{className:"",children:[(Ye=this.props)==null?void 0:Ye.t("tranActualTaxBillPage.amountPayText1.label",{from:(ze=(We=(He=this.props)==null?void 0:He.fullData)==null?void 0:We.receiptDtls)==null?void 0:ze.paidFrom.split("-")[0],upto:(Ve=(Qe=(Oe=this.props)==null?void 0:Oe.fullData)==null?void 0:Qe.receiptDtls)==null?void 0:Ve.paidUpto.split("-")[1]})," ",e.jsxs("b",{children:["Rs:-",($e=(Ze=(Xe=this.props)==null?void 0:Xe.fullData)==null?void 0:Ze.receiptDtls)==null?void 0:$e.totalPaidAmount]})]}),e.jsx("h1",{className:"",children:e.jsxs("p",{className:"p-1",children:[" ",e.jsxs("b",{children:[(Ke=(Je=(Ge=this.props)==null?void 0:Ge.fullData)==null?void 0:Je.receiptDtls)==null?void 0:Ke.paidAmtInWords,". "]}),(ea=this.props)==null?void 0:ea.t("tranActualTaxBillPage.amountPayText2.label")]})})]})]})]})}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("button",{className:"rounded px-2 py-1 bg-blue-50  text-gray-700 outline outline-1 m-1 text-sm",disabled:!0,children:(sa=(ta=(aa=this.props)==null?void 0:aa.fullData)==null?void 0:ta.receiptDtls)==null?void 0:sa.transactionDate}),e.jsxs("div",{className:"w-20 h-24 mt-2 mx-auto",children:["  ",e.jsx(ed,{size:"100",url:`${zr}/property/paymentReceipt/${(la=this.props)==null?void 0:la.paymentId}/holding`})]})]})]}),e.jsx("div",{className:"w-full  text-center text-xs border border-gray-600 ",children:((ia=(da=(ra=this.props)==null?void 0:ra.fullData)==null?void 0:da.receiptDtls)==null?void 0:ia.isArrearReceipt)==!0?e.jsx(e.Fragment,{children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-gray-300 font-semibold  ",children:[e.jsxs("td",{className:"border text-left  ",children:[(ca=this.props)==null?void 0:ca.t("tranActualTaxBillPage.paidArrearAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(pa=(oa=(na=this.props)==null?void 0:na.fullData)==null?void 0:oa.receiptDtls)==null?void 0:pa.arrearSettled," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[" ",(xa=this.props)==null?void 0:xa.t("tranActualTaxBillPage.paidDemandAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(ba=(ma=(ha=this.props)==null?void 0:ha.fullData)==null?void 0:ma.receiptDtls)==null?void 0:ba.demandAmount," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[(ua=this.props)==null?void 0:ua.t("tranActualTaxBillPage.paidTotalAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center ",children:["  ",(ga=(Na=(ja=this.props)==null?void 0:ja.fullData)==null?void 0:Na.receiptDtls)==null?void 0:ga.totalPaidAmount,".00 "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[(fa=this.props)==null?void 0:fa.t("tranActualTaxBillPage.paidAmountInWordsLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(Ta=(Aa=(Da=this.props)==null?void 0:Da.fullData)==null?void 0:Aa.receiptDtls)==null?void 0:Ta.paidAmtInWords]})]})]})})}):e.jsxs("table",{className:"table-auto w-full border text-center",children:[((Ba=(wa=(Pa=this.props)==null?void 0:Pa.fullData)==null?void 0:wa.receiptDtls)==null?void 0:Ba.verifyStatus)==3?e.jsxs("div",{className:"flex justify-center items-center w-full  absolute z-10 bg-transparent opacity-40  rounded-full ",children:[" ",e.jsx("img",{src:"https://i.ibb.co/ZV0CH9V/BOUNCE-removebg-preview.png",alt:"",className:"-ml-72 "})]}):"",e.jsx("thead",{children:e.jsxs("tr",{className:"border",children:[e.jsx("th",{className:"border",children:"#."}),e.jsxs("th",{className:"border",children:[(ya=this.props)==null?void 0:ya.t("tranActualTaxBillPage.tablehead1.label")," "]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(A)"})," ",(va=this.props)==null?void 0:va.t("tranActualTaxBillPage.tablehead2.label")]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(B)"})," ",(La=this.props)==null?void 0:La.t("tranActualTaxBillPage.tablehead3.label")]}),e.jsxs("th",{className:"border",children:[" ",e.jsx("b",{children:"(A+B)"})," ",(_a=this.props)==null?void 0:_a.t("tranActualTaxBillPage.tablehead4.label")]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  1 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Sa=this.props)==null?void 0:Sa.t("tranActualTaxBillPage.generalTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Ra=(Ca=(Fa=this.props)==null?void 0:Fa.fullData)==null?void 0:Ca.overdueDemand)==null?void 0:Ra.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ma=(Ea=(ka=this.props)==null?void 0:ka.fullData)==null?void 0:Ea.currentDemand)==null?void 0:Ma.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ia=(qa=(Ua=this.props)==null?void 0:Ua.fullData)==null?void 0:qa.aggregateDemand)==null?void 0:Ia.general_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  2 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ha=this.props)==null?void 0:Ha.t("tranActualTaxBillPage.roadTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(Oa=(za=(Wa=this.props)==null?void 0:Wa.fullData)==null?void 0:za.overdueDemand)==null?void 0:Oa.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ya=(Va=(Qa=this.props)==null?void 0:Qa.fullData)==null?void 0:Va.currentDemand)==null?void 0:Ya.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",($a=(Za=(Xa=this.props)==null?void 0:Xa.fullData)==null?void 0:Za.aggregateDemand)==null?void 0:$a.road_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  3 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ga=this.props)==null?void 0:Ga.t("tranActualTaxBillPage.sewageTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(et=(Ka=(Ja=this.props)==null?void 0:Ja.fullData)==null?void 0:Ka.overdueDemand)==null?void 0:et.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(st=(tt=(at=this.props)==null?void 0:at.fullData)==null?void 0:tt.currentDemand)==null?void 0:st.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(dt=(rt=(lt=this.props)==null?void 0:lt.fullData)==null?void 0:rt.aggregateDemand)==null?void 0:dt.sewarage_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  4 "}),e.jsxs("td",{className:"border text-left",children:["   ",(it=this.props)==null?void 0:it.t("tranActualTaxBillPage.fireFightingTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(ot=(nt=(ct=this.props)==null?void 0:ct.fullData)==null?void 0:nt.overdueDemand)==null?void 0:ot.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ht=(xt=(pt=this.props)==null?void 0:pt.fullData)==null?void 0:xt.currentDemand)==null?void 0:ht.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ut=(bt=(mt=this.props)==null?void 0:mt.fullData)==null?void 0:bt.aggregateDemand)==null?void 0:ut.firefighting_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  5 "}),e.jsxs("td",{className:"border text-left",children:["   ",(jt=this.props)==null?void 0:jt.t("tranActualTaxBillPage.waterBenefitLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(ft=(gt=(Nt=this.props)==null?void 0:Nt.fullData)==null?void 0:gt.overdueDemand)==null?void 0:ft.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(Tt=(At=(Dt=this.props)==null?void 0:Dt.fullData)==null?void 0:At.currentDemand)==null?void 0:Tt.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(Bt=(wt=(Pt=this.props)==null?void 0:Pt.fullData)==null?void 0:wt.aggregateDemand)==null?void 0:Bt.water_benefit," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 6 "}),e.jsxs("td",{className:"border text-left",children:["   ",(yt=this.props)==null?void 0:yt.t("tranActualTaxBillPage.educationTaxLabel.label"),"  "]}),e.jsxs("td",{className:"border",children:["  ",(_t=(Lt=(vt=this.props)==null?void 0:vt.fullData)==null?void 0:Lt.overdueDemand)==null?void 0:_t.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ct=(Ft=(St=this.props)==null?void 0:St.fullData)==null?void 0:Ft.currentDemand)==null?void 0:Ct.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Et=(kt=(Rt=this.props)==null?void 0:Rt.fullData)==null?void 0:kt.aggregateDemand)==null?void 0:Et.sp_education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  7 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Mt=this.props)==null?void 0:Mt.t("tranActualTaxBillPage.sanitationTax.label")," "]}),e.jsx("td",{className:"border",children:(It=(qt=(Ut=this.props)==null?void 0:Ut.fullData)==null?void 0:qt.overdueDemand)==null?void 0:It.light_cess}),e.jsx("td",{className:"border",children:(zt=(Wt=(Ht=this.props)==null?void 0:Ht.fullData)==null?void 0:Wt.currentDemand)==null?void 0:zt.light_cess}),e.jsx("td",{className:"border",children:(Vt=(Qt=(Ot=this.props)==null?void 0:Ot.fullData)==null?void 0:Qt.aggregateDemand)==null?void 0:Vt.light_cess})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  8 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Yt=this.props)==null?void 0:Yt.t("tranActualTaxBillPage.treeTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",($t=(Zt=(Xt=this.props)==null?void 0:Xt.fullData)==null?void 0:Zt.overdueDemand)==null?void 0:$t.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Kt=(Jt=(Gt=this.props)==null?void 0:Gt.fullData)==null?void 0:Jt.currentDemand)==null?void 0:Kt.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ts=(as=(es=this.props)==null?void 0:es.fullData)==null?void 0:as.aggregateDemand)==null?void 0:ts.tree_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  9 "}),e.jsxs("td",{className:"border text-left",children:["   ",(ss=this.props)==null?void 0:ss.t("tranActualTaxBillPage.spEducationTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(ds=(rs=(ls=this.props)==null?void 0:ls.fullData)==null?void 0:rs.overdueDemand)==null?void 0:ds.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ns=(cs=(is=this.props)==null?void 0:is.fullData)==null?void 0:cs.currentDemand)==null?void 0:ns.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(xs=(ps=(os=this.props)==null?void 0:os.fullData)==null?void 0:ps.aggregateDemand)==null?void 0:xs.education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  10 "}),e.jsxs("td",{className:"border text-left",children:["  ",(hs=this.props)==null?void 0:hs.t("tranActualTaxBillPage.guranteeFee.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  11 "}),e.jsxs("td",{className:"border text-left",children:["   ",(ms=this.props)==null?void 0:ms.t("tranActualTaxBillPage.spWaterCessLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(js=(us=(bs=this.props)==null?void 0:bs.fullData)==null?void 0:us.overdueDemand)==null?void 0:js.sp_water_cess," "]}),e.jsxs("td",{className:"border",children:["  ",(fs=(gs=(Ns=this.props)==null?void 0:Ns.fullData)==null?void 0:gs.currentDemand)==null?void 0:fs.sp_water_cess," "]}),e.jsxs("td",{className:"border",children:["  ",(Ts=(As=(Ds=this.props)==null?void 0:Ds.fullData)==null?void 0:As.aggregateDemand)==null?void 0:Ts.sp_water_cess," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  12 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ps=this.props)==null?void 0:Ps.t("tranActualTaxBillPage.bigBuildingTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(ys=(Bs=(ws=this.props)==null?void 0:ws.fullData)==null?void 0:Bs.overdueDemand)==null?void 0:ys.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(_s=(Ls=(vs=this.props)==null?void 0:vs.fullData)==null?void 0:Ls.currentDemand)==null?void 0:_s.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(Cs=(Fs=(Ss=this.props)==null?void 0:Ss.fullData)==null?void 0:Fs.aggregateDemand)==null?void 0:Cs.major_building," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  13 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Rs=this.props)==null?void 0:Rs.t("tranActualTaxBillPage.agriTax.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  14 "}),e.jsxs("td",{className:"border text-left",children:["  ",(ks=this.props)==null?void 0:ks.t("tranActualTaxBillPage.punishmentUnderScetion.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  15 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Es=this.props)==null?void 0:Es.t("tranActualTaxBillPage.OpenPlotTax.label")," "]}),e.jsx("td",{className:"border",children:(qs=(Us=(Ms=this.props)==null?void 0:Ms.fullData)==null?void 0:Us.overdueDemand)==null?void 0:qs.open_ploat_tax}),e.jsx("td",{className:"border",children:(Ws=(Hs=(Is=this.props)==null?void 0:Is.fullData)==null?void 0:Hs.currentDemand)==null?void 0:Ws.open_ploat_tax}),e.jsx("td",{className:"border",children:(Qs=(Os=(zs=this.props)==null?void 0:zs.fullData)==null?void 0:Os.aggregateDemand)==null?void 0:Qs.open_ploat_tax})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  16 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Vs=this.props)==null?void 0:Vs.t("tranActualTaxBillPage.punishmentLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:[(Xs=(Ys=this.props)==null?void 0:Ys.fullData)==null?void 0:Xs.arrearPenalty,"  "]}),e.jsxs("td",{className:"border text-center",children:["0.00","  "]}),e.jsxs("td",{className:"border text-center",children:[($s=(Zs=this.props)==null?void 0:Zs.fullData)==null?void 0:$s.arrearPenalty," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  17 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Gs=this.props)==null?void 0:Gs.t("tranActualTaxBillPage.paidTotalAmountLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(el=(Ks=(Js=this.props)==null?void 0:Js.fullData)==null?void 0:Ks.overdueDemand)==null?void 0:el.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(sl=(tl=(al=this.props)==null?void 0:al.fullData)==null?void 0:tl.currentDemand)==null?void 0:sl.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(dl=(rl=(ll=this.props)==null?void 0:ll.fullData)==null?void 0:rl.aggregateDemand)==null?void 0:dl.totalPayableAmt," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 18  "}),e.jsxs("td",{className:"border text-left",children:["   ",(il=this.props)==null?void 0:il.t("tranActualTaxBillPage.penaltyAmnestyScheme.label")]}),e.jsx("td",{className:"border",children:(ol=(nl=(cl=this.props)==null?void 0:cl.fullData)==null?void 0:nl.overdueDemand)==null?void 0:ol.exceptionUnderSAY}),e.jsx("td",{className:"border",children:(hl=(xl=(pl=this.props)==null?void 0:pl.fullData)==null?void 0:xl.currentDemand)==null?void 0:hl.exceptionUnderSAY}),e.jsx("td",{className:"border",children:(ul=(bl=(ml=this.props)==null?void 0:ml.fullData)==null?void 0:bl.aggregateDemand)==null?void 0:ul.exceptionUnderSAY})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 19  "}),e.jsxs("td",{className:"border text-left",children:["   ",(jl=this.props)==null?void 0:jl.t("tranActualTaxBillPage.penaltyRegularTax.label")]}),e.jsx("td",{className:"border",children:(fl=(gl=(Nl=this.props)==null?void 0:Nl.fullData)==null?void 0:gl.overdueDemand)==null?void 0:fl.generalTaxException}),e.jsx("td",{className:"border",children:(Tl=(Al=(Dl=this.props)==null?void 0:Dl.fullData)==null?void 0:Al.currentDemand)==null?void 0:Tl.generalTaxException}),e.jsx("td",{className:"border",children:(Bl=(wl=(Pl=this.props)==null?void 0:Pl.fullData)==null?void 0:wl.aggregateDemand)==null?void 0:Bl.generalTaxException})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 20  "}),e.jsxs("td",{className:"border text-left",children:["   ",(yl=this.props)==null?void 0:yl.t("tranActualTaxBillPage.totalPaymentAfterPenalty.label")]}),e.jsx("td",{className:"border",children:(_l=(Ll=(vl=this.props)==null?void 0:vl.fullData)==null?void 0:Ll.overdueDemand)==null?void 0:_l.payableAfterDeduction}),e.jsx("td",{className:"border",children:(Cl=(Fl=(Sl=this.props)==null?void 0:Sl.fullData)==null?void 0:Fl.currentDemand)==null?void 0:Cl.payableAfterDeduction}),e.jsx("td",{className:"border",children:(El=(kl=(Rl=this.props)==null?void 0:Rl.fullData)==null?void 0:kl.aggregateDemand)==null?void 0:El.payableAfterDeduction})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 21  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ml=this.props)==null?void 0:Ml.t("tranActualTaxBillPage.advanceAmountOtherTaxes.label")]}),e.jsxs("td",{className:"border",children:["  ",(Il=(ql=(Ul=this.props)==null?void 0:Ul.fullData)==null?void 0:ql.overdueDemand)==null?void 0:Il.advanceAmt]}),e.jsxs("td",{className:"border",children:["  ",(zl=(Wl=(Hl=this.props)==null?void 0:Hl.fullData)==null?void 0:Wl.currentDemand)==null?void 0:zl.advanceAmt]}),e.jsxs("td",{className:"border",children:["  ",(Vl=(Ql=(Ol=this.props)==null?void 0:Ol.fullData)==null?void 0:Ql.aggregateDemand)==null?void 0:Vl.advanceAmt]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 22  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Yl=this.props)==null?void 0:Yl.t("tranActualTaxBillPage.totalPaymentAfterAdvance.label")]}),e.jsxs("td",{className:"border",children:["  ",($l=(Zl=(Xl=this.props)==null?void 0:Xl.fullData)==null?void 0:Zl.overdueDemand)==null?void 0:$l.totalPayableAfterAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Kl=(Jl=(Gl=this.props)==null?void 0:Gl.fullData)==null?void 0:Jl.currentDemand)==null?void 0:Kl.totalPayableAfterAdvance]}),e.jsxs("td",{className:"border",children:["  ",(tr=(ar=(er=this.props)==null?void 0:er.fullData)==null?void 0:ar.aggregateDemand)==null?void 0:tr.totalPayableAfterAdvance]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 23  "}),e.jsxs("td",{className:"border text-left",children:["   ",(sr=this.props)==null?void 0:sr.t("tranActualTaxBillPage.noticeFeeWarrantFee.label")]}),e.jsxs("td",{className:"border",children:["  ",(dr=(rr=(lr=this.props)==null?void 0:lr.fullData)==null?void 0:rr.overdueDemand)==null?void 0:dr.noticeFee]}),e.jsxs("td",{className:"border",children:["  ",(nr=(cr=(ir=this.props)==null?void 0:ir.fullData)==null?void 0:cr.currentDemand)==null?void 0:nr.noticeFee]}),e.jsxs("td",{className:"border",children:["  ",(xr=(pr=(or=this.props)==null?void 0:or.fullData)==null?void 0:pr.aggregateDemand)==null?void 0:xr.noticeFee]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border ",children:"  "}),e.jsxs("td",{className:"border font-bold text-left",children:["   ",(hr=this.props)==null?void 0:hr.t("tranActualTaxBillPage.totalTaxLabel.label")," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(ur=(br=(mr=this.props)==null?void 0:mr.fullData)==null?void 0:br.overdueDemand)==null?void 0:ur.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(gr=(Nr=(jr=this.props)==null?void 0:jr.fullData)==null?void 0:Nr.currentDemand)==null?void 0:gr.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(Ar=(Dr=(fr=this.props)==null?void 0:fr.fullData)==null?void 0:Dr.aggregateDemand)==null?void 0:Ar.FinalTax," "]})]})]})]})}),e.jsxs("h1",{className:"text-xs mt-2",children:[" ",(Tr=this.props)==null?void 0:Tr.t("tranActualTaxBillPage.policyLabel.label")]}),e.jsxs("h1",{className:"font-semibold pt-2",children:[(Pr=this.props)==null?void 0:Pr.t("tranActualTaxBillPage.connectWithUsLabel.label")," :- "]}),e.jsxs("div",{className:"grid grid-cols-5  text-sm  ",children:[e.jsx("div",{className:"text-left whitespace-pre-wrap mt-5",children:e.jsxs("p",{children:[(wr=this.props)==null?void 0:wr.t("tranActualTaxBillPage.collectionAgent.label"),"  : ",(vr=(yr=(Br=this.props)==null?void 0:Br.fullData)==null?void 0:yr.receiptDtls)==null?void 0:vr.tcName]})}),e.jsx("div",{className:"p-2 pt-6",children:e.jsxs("div",{className:"rounded px-2 py-1 w-full border hover:shadow bg-gray-500 text-white text-center capitalize text-xs",children:[e.jsx("p",{children:(Lr=this.props)==null?void 0:Lr.t("tranActualTaxBillPage.tollFreeNoLabel.label")}),e.jsx("p",{className:"lowercase",children:(Cr=(Fr=(Sr=(_r=this.props)==null?void 0:_r.fullData)==null?void 0:Sr.receiptDtls)==null?void 0:Fr.ulbDetails)==null?void 0:Cr.toll_free_no})]})}),e.jsxs("div",{className:"text-center ",children:[e.jsxs("p",{children:[(Rr=this.props)==null?void 0:Rr.t("tranActualTaxBillPage.taxClerkLabel.label")," "]}),e.jsxs("p",{children:[(kr=this.props)==null?void 0:kr.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{children:[(Er=this.props)==null?void 0:Er.t("tranActualTaxBillPage.taxSuperintendentLabel.label")," "]}),e.jsxs("p",{children:[(Mr=this.props)==null?void 0:Mr.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{children:(Ur=this.props)==null?void 0:Ur.t("tranActualTaxBillPage.deputyCommissionarLabel.label")}),e.jsxs("p",{children:[(qr=this.props)==null?void 0:qr.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]})]})]})})}}function id(){var n;const{api_getsafDemandById:Wr,api_getHoldingReceiptUrl:p,api_paysafoffline_Mode:g}=Kr(),[t,x]=d.useState(null),[h,i]=d.useState(!1),[m,s]=d.useState(!1),l=d.useRef(),{paymentId:r,module:f}=Or(),{t:c}=Qr(),b=Vr();Yr("Payment Receipt"),d.useEffect(()=>{u()},[]);const u=()=>{s(!0);let j=p,N={tranId:r};Xr.post(j,N,Zr()).then(function(a){var o;s(!1),console.log("response after pushing saf data",a.data.data),(o=a==null?void 0:a.data)!=null&&o.status?(x(a.data.data),i(!1),setLoader(!1)):($r.warn(a.data.message),i(!0),s(!1))}).catch(function(a){console.log("error in submitting saf form ","error")})};return e.jsxs("div",{children:[m&&e.jsx(Hr,{}),h?e.jsxs("div",{className:"w-full bg-white h-48 p-4 text-center",children:[e.jsx("h1",{className:"my-2 p-2 text-lg font-semibold font-poppins text-red-500",children:"Demands against this transaction does not exist"}),e.jsx("button",{className:"px-2 py-2 rounded border bg-blue-500 hover:bg-blue-600 text-white ",type:"button",onClick:()=>b(-1),children:"Return To Previous Page"})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(Gr,{trigger:()=>e.jsxs("button",{id:"clickButton",className:"bg-teal-500  hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg text-xs font-mono fixed bottom-1 right-[25vw] md:right-[40vw] ",children:[e.jsx(Jr,{})," Print !"]}),content:()=>l.current,copyStyles:!0}),((n=t==null?void 0:t.receiptDtls)==null?void 0:n.chequeStatus)!=1?e.jsx(e.Fragment,{children:e.jsx(ad,{ref:l,t:c,fullData:t,paymentId:r})}):e.jsx(e.Fragment,{children:e.jsx(td,{ref:l,t:c,fullData:t,paymentId:r})})]})})]})}export{id as default};
