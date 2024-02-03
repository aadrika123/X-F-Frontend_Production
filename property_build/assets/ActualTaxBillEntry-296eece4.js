import{r as d,j as e,B as fd,W as gd,aj as Ad,u as wd,Y as Td,e as Pd,a as Bd,a9 as vd,b as yd,Q as _d,c as Ld,ak as Sd,ai as Cd}from"./index-aa4572da.js";import{Q as Fd}from"./QrCode-e181ca9c.js";import{A as Id}from"./AmcChqReceipt-c686f322.js";class kd extends d.Component{render(){var p,g,t,x,h,i,m,s,l,r,f,c,b,u,n,j,N,a,o,D,A,w,T,P,B,v,y,_,L,S,C,F,I,k,R,E,M,q,U,W,H,z,O,Q,V,Y,Z,$,G,X,J,K,ee,ae,te,se,le,re,de,ie,ce,ne,oe,pe,xe,he,me,be,ue,je,Ne,ge,fe,De,Ae,we,Te,Pe,Be,ve,ye,_e,Le,Se,Ce,Fe,Ie,ke,Re,Ee,Me,qe,Ue,We,He,ze,Oe,Qe,Ve,Ye,Ze,$e,Ge,Xe,Je,Ke,ea,aa,ta,sa,la,ra,da,ia,ca,na,oa,pa,xa,ha,ma,ba,ua,ja,Na,ga,fa,Da,Aa,wa,Ta,Pa,Ba,va,ya,_a,La,Sa,Ca,Fa,Ia,ka,Ra,Ea,Ma,qa,Ua,Wa,Ha,za,Oa,Qa,Va,Ya,Za,$a,Ga,Xa,Ja,Ka,et,at,tt,st,lt,rt,dt,it,ct,nt,ot,pt,xt,ht,mt,bt,ut,jt,Nt,gt,ft,Dt,At,wt,Tt,Pt,Bt,vt,yt,_t,Lt,St,Ct,Ft,It,kt,Rt,Et,Mt,qt,Ut,Wt,Ht,zt,Ot,Qt,Vt,Yt,Zt,$t,Gt,Xt,Jt,Kt,es,as,ts,ss,ls,rs,ds,is,cs,ns,os,ps,xs,hs,ms,bs,us,js,Ns,gs,fs,Ds,As,ws,Ts,Ps,Bs,vs,ys,_s,Ls,Ss,Cs,Fs,Is,ks,Rs,Es,Ms,qs,Us,Ws,Hs,zs,Os,Qs,Vs,Ys,Zs,$s,Gs,Xs,Js,Ks,el,al,tl,sl,ll,rl,dl,il,cl,nl,ol,pl,xl,hl,ml,bl,ul,jl,Nl,gl,fl,Dl,Al,wl,Tl,Pl,Bl,vl,yl,_l,Ll,Sl,Cl,Fl,Il,kl,Rl,El,Ml,ql,Ul,Wl,Hl,zl,Ol,Ql,Vl,Yl,Zl,$l,Gl,Xl,Jl,Kl,er,ar,tr,sr,lr,rr,dr,ir,cr,nr,or,pr,xr,hr,mr,br,ur,jr,Nr,gr,fr,Dr,Ar,wr,Tr,Pr,Br,vr,yr,_r,Lr,Sr,Cr,Fr,Ir,kr,Rr,Er,Mr,qr,Ur,Wr,Hr,zr,Or,Qr,Vr,Yr,Zr,$r,Gr,Xr,Jr,Kr,ed,ad,td,sd,ld,rd,dd,id,cd,nd,od,pd,xd,hd,md,bd,ud,jd,Nd;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-[66rem] mx-auto bg-white p-4 border ",id:"printableArea",children:[((p=this.props)==null?void 0:p.Loading)&&e.jsx(fd,{}),e.jsxs("div",{className:"grid grid-cols-6 text-center ",children:[e.jsxs("div",{className:"col-span-5",children:[e.jsxs("div",{className:"h-auto flex gap-1 w-full",children:[e.jsx("img",{src:"https://th.bing.com/th/id/OIP.2h0NzgL6-wG4kSWlkAS0jgHaHX?pid=ImgDet&rs=1",alt:"logo",className:"w-24 h-24"}),e.jsx("div",{className:"text-sm font-semibold whitespace-nowrap  py-2"}),e.jsxs("div",{className:"text-center  w-full",children:[e.jsx("div",{className:"text-2xl font-semibold px-2  bg-gray-700 text-white border rounded mx-1 py-1",children:(g=this.props)==null?void 0:g.t("tranActualTaxBillPage.akolaMunicipalCorporationLabel.label")}),e.jsx("p",{className:"text-sm font-normal px-2",children:(t=this.props)==null?void 0:t.t("tranActualTaxBillPage.receiptLabel.label")}),e.jsx("table",{className:"table-auto w-full  ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(x=this.props)==null?void 0:x.t("tranActualTaxBillPage.ownerNameLabel.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(m=(i=(h=this.props)==null?void 0:h.fullData)==null?void 0:i.receiptDtls)==null?void 0:m.ownerName]}),e.jsx("th",{className:"text-start whitespace-nowrap"}),e.jsx("td",{className:"text-start",children:" "}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"  "}),e.jsx("td",{className:"text-start",children:" "})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(s=this.props)==null?void 0:s.t("tranActualTaxBillPage.occupantName.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(f=(r=(l=this.props)==null?void 0:l.fullData)==null?void 0:r.receiptDtls)==null?void 0:f.customerName]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(c=this.props)==null?void 0:c.t("tranAmcChqReceipt.receiptNoLabel.label")," : "]}),e.jsxs("td",{className:"text-start",children:[" ",gd((n=(u=(b=this.props)==null?void 0:b.fullData)==null?void 0:u.receiptDtls)==null?void 0:n.receiptNo)]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(j=this.props)==null?void 0:j.t("tranAmcChqReceipt.receiptBookNoLabel1.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[gd((o=(a=(N=this.props)==null?void 0:N.fullData)==null?void 0:a.receiptDtls)==null?void 0:o.bookNo)," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(D=this.props)==null?void 0:D.t("tranActualTaxBillPage.holdingNoLabel.label"),":"]}),e.jsxs("td",{className:"text-start",children:[" ",(T=(w=(A=this.props)==null?void 0:A.fullData)==null?void 0:w.receiptDtls)==null?void 0:T.applicationNo," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(P=this.props)==null?void 0:P.t("tranActualTaxBillPage.billNoLabel.label")," : "]}),e.jsx("td",{className:"text-start",children:((y=(v=(B=this.props)==null?void 0:B.fullData)==null?void 0:v.receiptDtls)==null?void 0:y.transactionNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(_=this.props)==null?void 0:_.t("tranActualTaxBillPage.addressLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((C=(S=(L=this.props)==null?void 0:L.fullData)==null?void 0:S.receiptDtls)==null?void 0:C.address)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(F=this.props)==null?void 0:F.t("tranActualTaxBillPage.mobileNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((R=(k=(I=this.props)==null?void 0:I.fullData)==null?void 0:k.receiptDtls)==null?void 0:R.mobileNo)||"N/A"}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(E=this.props)==null?void 0:E.t("tranActualTaxBillPage.propertyNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((U=(q=(M=this.props)==null?void 0:M.fullData)==null?void 0:q.receiptDtls)==null?void 0:U.propertyNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(W=this.props)==null?void 0:W.t("tranActualTaxBillPage.westZoneLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((O=(z=(H=this.props)==null?void 0:H.fullData)==null?void 0:z.receiptDtls)==null?void 0:O.zone_name)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(Q=this.props)==null?void 0:Q.t("tranActualTaxBillPage.wardNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((Z=(Y=(V=this.props)==null?void 0:V.fullData)==null?void 0:Y.receiptDtls)==null?void 0:Z.wardNo)||"N/A"}),((X=(G=($=this.props)==null?void 0:$.fullData)==null?void 0:G.receiptDtls)==null?void 0:X.paymentMode)=="CASH"?"":e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(J=this.props)==null?void 0:J.t("tranActualTaxBillPage.verifyStatusLabel.label")," :"]}),((ae=(ee=(K=this.props)==null?void 0:K.fullData)==null?void 0:ee.receiptDtls)==null?void 0:ae.verifyStatus)==0&&e.jsxs("td",{className:"text-start text-red-500 ",children:[(te=this.props)==null?void 0:te.t("tranActualTaxBillPage.notVerifiedLabel.label")," "]}),((re=(le=(se=this.props)==null?void 0:se.fullData)==null?void 0:le.receiptDtls)==null?void 0:re.verifyStatus)==1&&e.jsxs("td",{className:"text-start text-green-500 ",children:[(de=this.props)==null?void 0:de.t("tranActualTaxBillPage.verifiedLabel.label")," "]}),((ne=(ce=(ie=this.props)==null?void 0:ie.fullData)==null?void 0:ce.receiptDtls)==null?void 0:ne.verifyStatus)==2&&e.jsxs("td",{className:"text-start text-yellow-700 ",children:[(oe=this.props)==null?void 0:oe.t("tranActualTaxBillPage.underVerificationLabel.label")," "]}),((he=(xe=(pe=this.props)==null?void 0:pe.fullData)==null?void 0:xe.receiptDtls)==null?void 0:he.verifyStatus)==3&&e.jsxs("td",{className:"text-start text-red-500",children:[(me=this.props)==null?void 0:me.t("tranActualTaxBillPage.bounceLabel.label")," "]})]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(be=this.props)==null?void 0:be.t("tranActualTaxBillPage.paymentModeLabel.label")," :"]}),e.jsx("td",{className:"text-start",colSpan:3,children:((Ne=(je=(ue=this.props)==null?void 0:ue.fullData)==null?void 0:je.receiptDtls)==null?void 0:Ne.paymentMode)||"N/A"}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"Plot No. :"}),e.jsx("td",{className:"text-start",children:((De=(fe=(ge=this.props)==null?void 0:ge.fullData)==null?void 0:fe.receiptDtls)==null?void 0:De.plot_no)||"N/A"}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"Area Of Plot :"}),e.jsx("td",{className:"text-start",children:((Te=(we=(Ae=this.props)==null?void 0:Ae.fullData)==null?void 0:we.receiptDtls)==null?void 0:Te.area_of_plot)||"N/A"})]}),e.jsx("tr",{className:"text-[11px] ",children:((ve=(Be=(Pe=this.props)==null?void 0:Pe.fullData)==null?void 0:Be.receiptDtls)==null?void 0:ve.paymentMode)=="CHEQUE"||((Le=(_e=(ye=this.props)==null?void 0:ye.fullData)==null?void 0:_e.receiptDtls)==null?void 0:Le.paymentMode)=="DD"?e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start",children:[" ",(Se=this.props)==null?void 0:Se.t("tranActualTaxBillPage.bankNameLabel.label")," :"]}),e.jsx("td",{className:"text-start whitespace-nowrap",children:(Ie=(Fe=(Ce=this.props)==null?void 0:Ce.fullData)==null?void 0:Fe.receiptDtls)==null?void 0:Ie.bankName}),e.jsxs("th",{className:"text-start",children:[" ",(ke=this.props)==null?void 0:ke.t("tranActualTaxBillPage.branchNameLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Me=(Ee=(Re=this.props)==null?void 0:Re.fullData)==null?void 0:Ee.receiptDtls)==null?void 0:Me.branchName}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(qe=this.props)==null?void 0:qe.t("tranActualTaxBillPage.chequeNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(He=(We=(Ue=this.props)==null?void 0:Ue.fullData)==null?void 0:We.receiptDtls)==null?void 0:He.chequeNo}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(ze=this.props)==null?void 0:ze.t("tranActualTaxBillPage.chequeDateLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Ve=(Qe=(Oe=this.props)==null?void 0:Oe.fullData)==null?void 0:Qe.receiptDtls)==null?void 0:Ve.chequeDate})," "]}):""})]})})]})]}),e.jsxs("div",{className:"text-xs w-full  text-center mt-2 whitespace-nowrap ",children:[e.jsxs("h1",{children:[e.jsxs("b",{children:[(Ge=this.props)==null?void 0:Ge.t("tranActualTaxBillPage.amountPayText1.label",{from:($e=(Ze=(Ye=this.props)==null?void 0:Ye.fullData)==null?void 0:Ze.receiptDtls)==null?void 0:$e.duration})," ",(Xe=this.props)==null?void 0:Xe.t("tranActualTaxBillPage.amountPayTextafter.label")]}),"  ",e.jsxs("b",{children:["Rs:- ",(ea=(Ke=(Je=this.props)==null?void 0:Je.fullData)==null?void 0:Ke.receiptDtls)==null?void 0:ea.totalPaidAmount]})]}),e.jsx("h1",{className:"px-20",children:e.jsxs("p",{className:"p-1",children:[" ",e.jsxs("b",{children:[(sa=(ta=(aa=this.props)==null?void 0:aa.fullData)==null?void 0:ta.receiptDtls)==null?void 0:sa.paidAmtInWords,"."]})," ",e.jsx("b",{children:(la=this.props)==null?void 0:la.t("tranActualTaxBillPage.amountPayText2.label")})]})})]})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("button",{className:"rounded px-2 py-1 bg-blue-50  text-gray-700 outline outline-1 m-1 text-sm",disabled:!0,children:(ia=(da=(ra=this.props)==null?void 0:ra.fullData)==null?void 0:da.receiptDtls)==null?void 0:ia.transactionDate}),e.jsxs("div",{className:"w-20 h-24 mt-2 mx-auto",children:["  ",e.jsx(Fd,{size:"100",url:`${Ad}/property/paymentReceipt/${(ca=this.props)==null?void 0:ca.paymentId}/holding`})]})]})]}),e.jsx("div",{className:"w-full  text-center text-xs border border-gray-600 ",children:((pa=(oa=(na=this.props)==null?void 0:na.fullData)==null?void 0:oa.receiptDtls)==null?void 0:pa.isArrearReceipt)==!0?e.jsx(e.Fragment,{children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-gray-300 font-semibold  ",children:[e.jsxs("td",{className:"border text-left  ",children:[(xa=this.props)==null?void 0:xa.t("tranActualTaxBillPage.paidArrearAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(ba=(ma=(ha=this.props)==null?void 0:ha.fullData)==null?void 0:ma.receiptDtls)==null?void 0:ba.arrearSettled," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[" ",(ua=this.props)==null?void 0:ua.t("tranActualTaxBillPage.paidDemandAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(ga=(Na=(ja=this.props)==null?void 0:ja.fullData)==null?void 0:Na.receiptDtls)==null?void 0:ga.demandAmount," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[(fa=this.props)==null?void 0:fa.t("tranActualTaxBillPage.paidTotalAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center ",children:["  ",(wa=(Aa=(Da=this.props)==null?void 0:Da.fullData)==null?void 0:Aa.receiptDtls)==null?void 0:wa.totalPaidAmount,".00 "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[(Ta=this.props)==null?void 0:Ta.t("tranActualTaxBillPage.paidAmountInWordsLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(va=(Ba=(Pa=this.props)==null?void 0:Pa.fullData)==null?void 0:Ba.receiptDtls)==null?void 0:va.paidAmtInWords]})]})]})})}):e.jsxs("table",{className:"table-auto w-full border text-center",children:[((La=(_a=(ya=this.props)==null?void 0:ya.fullData)==null?void 0:_a.receiptDtls)==null?void 0:La.verifyStatus)==3?e.jsxs("div",{className:"flex justify-center items-center w-full  absolute z-10 bg-transparent opacity-40  rounded-full ",children:[" ",e.jsx("img",{src:"https://i.ibb.co/ZV0CH9V/BOUNCE-removebg-preview.png",alt:"",className:"-ml-72 "})]}):"",e.jsx("thead",{children:e.jsxs("tr",{className:"border",children:[e.jsx("th",{className:"border",children:"#."}),e.jsxs("th",{className:"border",children:[(Sa=this.props)==null?void 0:Sa.t("tranActualTaxBillPage.tablehead1.label")," "]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(A)"})," ",(Ca=this.props)==null?void 0:Ca.t("tranActualTaxBillPage.tablehead2.label")]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(B)"})," ",(Fa=this.props)==null?void 0:Fa.t("tranActualTaxBillPage.tablehead3.label")]}),e.jsxs("th",{className:"border",children:[" ",e.jsx("b",{children:"(A+B)"})," ",(Ia=this.props)==null?void 0:Ia.t("tranActualTaxBillPage.tablehead4.label")]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  1 "}),e.jsxs("td",{className:"border text-left",children:["   ",(ka=this.props)==null?void 0:ka.t("tranActualTaxBillPage.generalTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Ma=(Ea=(Ra=this.props)==null?void 0:Ra.fullData)==null?void 0:Ea.overdueDemand)==null?void 0:Ma.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Wa=(Ua=(qa=this.props)==null?void 0:qa.fullData)==null?void 0:Ua.currentDemand)==null?void 0:Wa.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Oa=(za=(Ha=this.props)==null?void 0:Ha.fullData)==null?void 0:za.aggregateDemand)==null?void 0:Oa.general_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  2 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Qa=this.props)==null?void 0:Qa.t("tranActualTaxBillPage.roadTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(Za=(Ya=(Va=this.props)==null?void 0:Va.fullData)==null?void 0:Ya.overdueDemand)==null?void 0:Za.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Xa=(Ga=($a=this.props)==null?void 0:$a.fullData)==null?void 0:Ga.currentDemand)==null?void 0:Xa.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(et=(Ka=(Ja=this.props)==null?void 0:Ja.fullData)==null?void 0:Ka.aggregateDemand)==null?void 0:et.road_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  3 "}),e.jsxs("td",{className:"border text-left",children:["   ",(at=this.props)==null?void 0:at.t("tranActualTaxBillPage.sewageTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(lt=(st=(tt=this.props)==null?void 0:tt.fullData)==null?void 0:st.overdueDemand)==null?void 0:lt.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(it=(dt=(rt=this.props)==null?void 0:rt.fullData)==null?void 0:dt.currentDemand)==null?void 0:it.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ot=(nt=(ct=this.props)==null?void 0:ct.fullData)==null?void 0:nt.aggregateDemand)==null?void 0:ot.sewarage_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  4 "}),e.jsxs("td",{className:"border text-left",children:["   ",(pt=this.props)==null?void 0:pt.t("tranActualTaxBillPage.fireFightingTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(mt=(ht=(xt=this.props)==null?void 0:xt.fullData)==null?void 0:ht.overdueDemand)==null?void 0:mt.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(jt=(ut=(bt=this.props)==null?void 0:bt.fullData)==null?void 0:ut.currentDemand)==null?void 0:jt.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ft=(gt=(Nt=this.props)==null?void 0:Nt.fullData)==null?void 0:gt.aggregateDemand)==null?void 0:ft.firefighting_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  5 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Dt=this.props)==null?void 0:Dt.t("tranActualTaxBillPage.waterBenefitLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Tt=(wt=(At=this.props)==null?void 0:At.fullData)==null?void 0:wt.overdueDemand)==null?void 0:Tt.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(vt=(Bt=(Pt=this.props)==null?void 0:Pt.fullData)==null?void 0:Bt.currentDemand)==null?void 0:vt.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(Lt=(_t=(yt=this.props)==null?void 0:yt.fullData)==null?void 0:_t.aggregateDemand)==null?void 0:Lt.water_benefit," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 6 "}),e.jsxs("td",{className:"border text-left",children:["   ",(St=this.props)==null?void 0:St.t("tranActualTaxBillPage.educationTaxLabel.label"),"  "]}),e.jsxs("td",{className:"border",children:["  ",(It=(Ft=(Ct=this.props)==null?void 0:Ct.fullData)==null?void 0:Ft.overdueDemand)==null?void 0:It.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Et=(Rt=(kt=this.props)==null?void 0:kt.fullData)==null?void 0:Rt.currentDemand)==null?void 0:Et.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ut=(qt=(Mt=this.props)==null?void 0:Mt.fullData)==null?void 0:qt.aggregateDemand)==null?void 0:Ut.sp_education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  7 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Wt=this.props)==null?void 0:Wt.t("tranActualTaxBillPage.sanitationTax.label")," "]}),e.jsx("td",{className:"border",children:(Ot=(zt=(Ht=this.props)==null?void 0:Ht.fullData)==null?void 0:zt.overdueDemand)==null?void 0:Ot.light_cess}),e.jsx("td",{className:"border",children:(Yt=(Vt=(Qt=this.props)==null?void 0:Qt.fullData)==null?void 0:Vt.currentDemand)==null?void 0:Yt.light_cess}),e.jsx("td",{className:"border",children:(Gt=($t=(Zt=this.props)==null?void 0:Zt.fullData)==null?void 0:$t.aggregateDemand)==null?void 0:Gt.light_cess})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  8 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Xt=this.props)==null?void 0:Xt.t("tranActualTaxBillPage.treeTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(es=(Kt=(Jt=this.props)==null?void 0:Jt.fullData)==null?void 0:Kt.overdueDemand)==null?void 0:es.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ss=(ts=(as=this.props)==null?void 0:as.fullData)==null?void 0:ts.currentDemand)==null?void 0:ss.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ds=(rs=(ls=this.props)==null?void 0:ls.fullData)==null?void 0:rs.aggregateDemand)==null?void 0:ds.tree_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  9 "}),e.jsxs("td",{className:"border text-left",children:["   ",(is=this.props)==null?void 0:is.t("tranActualTaxBillPage.spEducationTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(os=(ns=(cs=this.props)==null?void 0:cs.fullData)==null?void 0:ns.overdueDemand)==null?void 0:os.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(hs=(xs=(ps=this.props)==null?void 0:ps.fullData)==null?void 0:xs.currentDemand)==null?void 0:hs.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(us=(bs=(ms=this.props)==null?void 0:ms.fullData)==null?void 0:bs.aggregateDemand)==null?void 0:us.education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  10 "}),e.jsxs("td",{className:"border text-left",children:["  ",(js=this.props)==null?void 0:js.t("tranActualTaxBillPage.guranteeFee.label")]}),e.jsx("td",{className:"border",children:(fs=(gs=(Ns=this.props)==null?void 0:Ns.fullData)==null?void 0:gs.overdueDemand)==null?void 0:fs.professional_tax}),e.jsx("td",{className:"border",children:(ws=(As=(Ds=this.props)==null?void 0:Ds.fullData)==null?void 0:As.currentDemand)==null?void 0:ws.professional_tax}),e.jsx("td",{className:"border",children:(Bs=(Ps=(Ts=this.props)==null?void 0:Ts.fullData)==null?void 0:Ps.aggregateDemand)==null?void 0:Bs.professional_tax})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  11 "}),e.jsxs("td",{className:"border text-left",children:["   ",(vs=this.props)==null?void 0:vs.t("tranActualTaxBillPage.spWaterCessLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Ls=(_s=(ys=this.props)==null?void 0:ys.fullData)==null?void 0:_s.overdueDemand)==null?void 0:Ls.water_bill," "]}),e.jsxs("td",{className:"border",children:["  ",(Fs=(Cs=(Ss=this.props)==null?void 0:Ss.fullData)==null?void 0:Cs.currentDemand)==null?void 0:Fs.water_bill," "]}),e.jsxs("td",{className:"border",children:["  ",(Rs=(ks=(Is=this.props)==null?void 0:Is.fullData)==null?void 0:ks.aggregateDemand)==null?void 0:Rs.water_bill," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  12 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Es=this.props)==null?void 0:Es.t("tranActualTaxBillPage.bigBuildingTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Us=(qs=(Ms=this.props)==null?void 0:Ms.fullData)==null?void 0:qs.overdueDemand)==null?void 0:Us.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(zs=(Hs=(Ws=this.props)==null?void 0:Ws.fullData)==null?void 0:Hs.currentDemand)==null?void 0:zs.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(Vs=(Qs=(Os=this.props)==null?void 0:Os.fullData)==null?void 0:Qs.aggregateDemand)==null?void 0:Vs.major_building," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  13 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ys=this.props)==null?void 0:Ys.t("tranActualTaxBillPage.agriTax.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  14 "}),e.jsxs("td",{className:"border text-left",children:["  ",(Zs=this.props)==null?void 0:Zs.t("tranActualTaxBillPage.punishmentUnderScetion.label")]}),e.jsx("td",{className:"border",children:(Xs=(Gs=($s=this.props)==null?void 0:$s.fullData)==null?void 0:Gs.overdueDemand)==null?void 0:Xs.tax1}),e.jsx("td",{className:"border",children:(el=(Ks=(Js=this.props)==null?void 0:Js.fullData)==null?void 0:Ks.currentDemand)==null?void 0:el.tax1}),e.jsx("td",{className:"border",children:(sl=(tl=(al=this.props)==null?void 0:al.fullData)==null?void 0:tl.aggregateDemand)==null?void 0:sl.tax1})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  15 "}),e.jsxs("td",{className:"border text-left",children:["   ",(ll=this.props)==null?void 0:ll.t("tranActualTaxBillPage.OpenPlotTax.label")," "]}),e.jsx("td",{className:"border",children:parseInt((il=(dl=(rl=this.props)==null?void 0:rl.fullData)==null?void 0:dl.overdueDemand)==null?void 0:il.sp_water_cess)+parseInt((ol=(nl=(cl=this.props)==null?void 0:cl.fullData)==null?void 0:nl.overdueDemand)==null?void 0:ol.open_ploat_tax)}),e.jsx("td",{className:"border",children:parseInt((hl=(xl=(pl=this.props)==null?void 0:pl.fullData)==null?void 0:xl.currentDemand)==null?void 0:hl.sp_water_cess)+parseInt((ul=(bl=(ml=this.props)==null?void 0:ml.fullData)==null?void 0:bl.currentDemand)==null?void 0:ul.open_ploat_tax)}),e.jsx("td",{className:"border",children:parseInt((gl=(Nl=(jl=this.props)==null?void 0:jl.fullData)==null?void 0:Nl.aggregateDemand)==null?void 0:gl.sp_water_cess)+parseInt((Al=(Dl=(fl=this.props)==null?void 0:fl.fullData)==null?void 0:Dl.aggregateDemand)==null?void 0:Al.open_ploat_tax)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  16 "}),e.jsxs("td",{className:"border text-left",children:["   ",(wl=this.props)==null?void 0:wl.t("tranActualTaxBillPage.punishmentLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:[(Bl=(Pl=(Tl=this.props)==null?void 0:Tl.fullData)==null?void 0:Pl.overdueDemand)==null?void 0:Bl.arrearPenalty,"  "]}),e.jsxs("td",{className:"border text-center",children:["0.00","  "]}),e.jsxs("td",{className:"border text-center",children:[(_l=(yl=(vl=this.props)==null?void 0:vl.fullData)==null?void 0:yl.aggregateDemand)==null?void 0:_l.arrearPenalty," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  17 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ll=this.props)==null?void 0:Ll.t("tranActualTaxBillPage.paidTotalAmountLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(Fl=(Cl=(Sl=this.props)==null?void 0:Sl.fullData)==null?void 0:Cl.overdueDemand)==null?void 0:Fl.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(Rl=(kl=(Il=this.props)==null?void 0:Il.fullData)==null?void 0:kl.currentDemand)==null?void 0:Rl.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(ql=(Ml=(El=this.props)==null?void 0:El.fullData)==null?void 0:Ml.aggregateDemand)==null?void 0:ql.totalPayableAmt," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 18  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ul=this.props)==null?void 0:Ul.t("tranActualTaxBillPage.penaltyAmnestyScheme.label")]}),e.jsx("td",{className:"border",children:(zl=(Hl=(Wl=this.props)==null?void 0:Wl.fullData)==null?void 0:Hl.overdueDemand)==null?void 0:zl.exceptionUnderSAY}),e.jsx("td",{className:"border",children:(Vl=(Ql=(Ol=this.props)==null?void 0:Ol.fullData)==null?void 0:Ql.currentDemand)==null?void 0:Vl.exceptionUnderSAY}),e.jsx("td",{className:"border",children:($l=(Zl=(Yl=this.props)==null?void 0:Yl.fullData)==null?void 0:Zl.aggregateDemand)==null?void 0:$l.exceptionUnderSAY})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 19  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Gl=this.props)==null?void 0:Gl.t("tranActualTaxBillPage.penaltyRegularTax.label")]}),e.jsx("td",{className:"border",children:(Kl=(Jl=(Xl=this.props)==null?void 0:Xl.fullData)==null?void 0:Jl.overdueDemand)==null?void 0:Kl.generalTaxException}),e.jsx("td",{className:"border",children:(tr=(ar=(er=this.props)==null?void 0:er.fullData)==null?void 0:ar.currentDemand)==null?void 0:tr.generalTaxException}),e.jsx("td",{className:"border",children:(rr=(lr=(sr=this.props)==null?void 0:sr.fullData)==null?void 0:lr.aggregateDemand)==null?void 0:rr.generalTaxException})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 20  "}),e.jsxs("td",{className:"border text-left",children:["   ",(dr=this.props)==null?void 0:dr.t("tranActualTaxBillPage.totalPaymentAfterPenalty.label")]}),e.jsx("td",{className:"border",children:(nr=(cr=(ir=this.props)==null?void 0:ir.fullData)==null?void 0:cr.overdueDemand)==null?void 0:nr.payableAfterDeduction}),e.jsx("td",{className:"border",children:(xr=(pr=(or=this.props)==null?void 0:or.fullData)==null?void 0:pr.currentDemand)==null?void 0:xr.payableAfterDeduction}),e.jsx("td",{className:"border",children:(br=(mr=(hr=this.props)==null?void 0:hr.fullData)==null?void 0:mr.aggregateDemand)==null?void 0:br.payableAfterDeduction})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 21  "}),e.jsxs("td",{className:"border text-left",children:["   ",(ur=this.props)==null?void 0:ur.t("tranActualTaxBillPage.advanceAmountOtherTaxes.label")]}),e.jsxs("td",{className:"border",children:["  ",(gr=(Nr=(jr=this.props)==null?void 0:jr.fullData)==null?void 0:Nr.overdueDemand)==null?void 0:gr.netAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Ar=(Dr=(fr=this.props)==null?void 0:fr.fullData)==null?void 0:Dr.currentDemand)==null?void 0:Ar.netAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Pr=(Tr=(wr=this.props)==null?void 0:wr.fullData)==null?void 0:Tr.aggregateDemand)==null?void 0:Pr.netAdvance]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 22  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Br=this.props)==null?void 0:Br.t("tranActualTaxBillPage.totalPaymentAfterAdvance.label")]}),e.jsxs("td",{className:"border",children:["  ",(_r=(yr=(vr=this.props)==null?void 0:vr.fullData)==null?void 0:yr.overdueDemand)==null?void 0:_r.totalPayableAfterAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Cr=(Sr=(Lr=this.props)==null?void 0:Lr.fullData)==null?void 0:Sr.currentDemand)==null?void 0:Cr.totalPayableAfterAdvance]}),e.jsxs("td",{className:"border",children:["  ",(kr=(Ir=(Fr=this.props)==null?void 0:Fr.fullData)==null?void 0:Ir.aggregateDemand)==null?void 0:kr.totalPayableAfterAdvance]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 23  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Rr=this.props)==null?void 0:Rr.t("tranActualTaxBillPage.noticeFeeWarrantFee.label")]}),e.jsxs("td",{className:"border",children:["  ",(qr=(Mr=(Er=this.props)==null?void 0:Er.fullData)==null?void 0:Mr.overdueDemand)==null?void 0:qr.noticeFee]}),e.jsxs("td",{className:"border",children:["  ",(Hr=(Wr=(Ur=this.props)==null?void 0:Ur.fullData)==null?void 0:Wr.currentDemand)==null?void 0:Hr.noticeFee]}),e.jsxs("td",{className:"border",children:["  ",(Qr=(Or=(zr=this.props)==null?void 0:zr.fullData)==null?void 0:Or.aggregateDemand)==null?void 0:Qr.noticeFee]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border ",children:"  "}),e.jsxs("td",{className:"border font-bold text-left",children:["   ",(Vr=this.props)==null?void 0:Vr.t("tranActualTaxBillPage.totalTaxLabel.label")," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",($r=(Zr=(Yr=this.props)==null?void 0:Yr.fullData)==null?void 0:Zr.overdueDemand)==null?void 0:$r.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(Jr=(Xr=(Gr=this.props)==null?void 0:Gr.fullData)==null?void 0:Xr.currentDemand)==null?void 0:Jr.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(ad=(ed=(Kr=this.props)==null?void 0:Kr.fullData)==null?void 0:ed.aggregateDemand)==null?void 0:ad.FinalTax," "]})]})]})]})}),e.jsxs("h1",{className:"text-xs mt-2",children:[" ",(td=this.props)==null?void 0:td.t("tranActualTaxBillPage.policyLabel.label")]}),e.jsxs("h1",{className:"font-semibold pt-2",children:[(sd=this.props)==null?void 0:sd.t("tranActualTaxBillPage.connectWithUsLabel.label")," :- "]}),e.jsxs("div",{className:"grid grid-cols-5  text-sm  mt-16",children:[e.jsx("div",{className:"text-left whitespace-pre-wrap mt-5",children:e.jsxs("p",{children:[(ld=this.props)==null?void 0:ld.t("tranActualTaxBillPage.collectionAgent.label"),"  : ",(id=(dd=(rd=this.props)==null?void 0:rd.fullData)==null?void 0:dd.receiptDtls)==null?void 0:id.tcName]})}),e.jsx("div",{className:"p-2 pt-6",children:e.jsxs("div",{className:"rounded px-2 py-1 w-full border hover:shadow bg-gray-500 text-white text-center capitalize text-xs",children:[e.jsx("p",{children:(cd=this.props)==null?void 0:cd.t("tranActualTaxBillPage.tollFreeNoLabel.label")}),e.jsx("p",{className:"lowercase",children:(xd=(pd=(od=(nd=this.props)==null?void 0:nd.fullData)==null?void 0:od.receiptDtls)==null?void 0:pd.ulbDetails)==null?void 0:xd.toll_free_no})]})}),e.jsxs("div",{className:"text-center ",children:[e.jsxs("p",{children:[(hd=this.props)==null?void 0:hd.t("tranActualTaxBillPage.taxClerkLabel.label")," "]}),e.jsxs("p",{children:[(md=this.props)==null?void 0:md.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{children:[(bd=this.props)==null?void 0:bd.t("tranActualTaxBillPage.taxSuperintendentLabel.label")," "]}),e.jsxs("p",{children:[(ud=this.props)==null?void 0:ud.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{children:(jd=this.props)==null?void 0:jd.t("tranActualTaxBillPage.deputyCommissionarLabel.label")}),e.jsxs("p",{children:[(Nd=this.props)==null?void 0:Nd.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]})]})]})})}}function qd(){var n;const{api_getsafDemandById:Dd,api_getHoldingReceiptUrl:p,api_paysafoffline_Mode:g}=Cd(),[t,x]=d.useState(null),[h,i]=d.useState(!1),[m,s]=d.useState(!1),l=d.useRef(),{paymentId:r,module:f}=wd(),{t:c}=Td(),b=Pd();Bd("Payment Receipt"),d.useEffect(()=>{u()},[]);const u=()=>{s(!0);let j=p,N={tranId:r};vd.post(j,N,yd()).then(function(a){var o;s(!1),console.log("response after pushing saf data",a.data.data),(o=a==null?void 0:a.data)!=null&&o.status?(x(a.data.data),i(!1),setLoader(!1)):(_d.warn(a.data.message),i(!0),s(!1))}).catch(function(a){console.log("error in submitting saf form ","error")})};return e.jsxs("div",{children:[m&&e.jsx(fd,{}),h?e.jsxs("div",{className:"w-full bg-white h-48 p-4 text-center",children:[e.jsx("h1",{className:"my-2 p-2 text-lg font-semibold font-poppins text-red-500",children:"Demands against this transaction does not exist"}),e.jsx("button",{className:"px-2 py-2 rounded border bg-blue-500 hover:bg-blue-600 text-white ",type:"button",onClick:()=>b(-1),children:"Return To Previous Page"})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(Ld,{trigger:()=>e.jsxs("button",{id:"clickButton",className:"bg-teal-500  hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg text-xs font-mono fixed bottom-1 right-[25vw] md:right-[40vw] ",children:[e.jsx(Sd,{})," Print !"]}),content:()=>l.current,copyStyles:!0}),((n=t==null?void 0:t.receiptDtls)==null?void 0:n.chequeStatus)!=1?e.jsx(e.Fragment,{children:e.jsx(Id,{ref:l,t:c,fullData:t,paymentId:r})}):e.jsx(e.Fragment,{children:e.jsx(kd,{ref:l,t:c,fullData:t,paymentId:r})})]})})]})}export{qd as default};
