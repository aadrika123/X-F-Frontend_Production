import{r as d,j as e,B as Pd,W as D,aj as Bd,u as yd,Y as vd,e as _d,a as Ld,a9 as Sd,b as Cd,Q as Fd,c as Rd,ak as Id,ai as kd}from"./index-025cc29f.js";import{Q as Md}from"./QrCode-962b374a.js";import{A as qd}from"./AmcChqReceipt-fea8cc0a.js";class Ed extends d.Component{render(){var p,g,t,h,x,i,m,s,l,r,f,c,b,u,n,j,N,a,o,A,w,P,T,B,y,v,_,L,S,C,F,R,I,k,M,q,E,W,H,U,z,O,Q,V,Y,Z,$,G,X,J,K,ee,ae,te,se,le,re,de,ie,ce,ne,oe,pe,he,xe,me,be,ue,je,Ne,ge,fe,De,Ae,we,Pe,Te,Be,ye,ve,_e,Le,Se,Ce,Fe,Re,Ie,ke,Me,qe,Ee,We,He,Ue,ze,Oe,Qe,Ve,Ye,Ze,$e,Ge,Xe,Je,Ke,ea,aa,ta,sa,la,ra,da,ia,ca,na,oa,pa,ha,xa,ma,ba,ua,ja,Na,ga,fa,Da,Aa,wa,Pa,Ta,Ba,ya,va,_a,La,Sa,Ca,Fa,Ra,Ia,ka,Ma,qa,Ea,Wa,Ha,Ua,za,Oa,Qa,Va,Ya,Za,$a,Ga,Xa,Ja,Ka,et,at,tt,st,lt,rt,dt,it,ct,nt,ot,pt,ht,xt,mt,bt,ut,jt,Nt,gt,ft,Dt,At,wt,Pt,Tt,Bt,yt,vt,_t,Lt,St,Ct,Ft,Rt,It,kt,Mt,qt,Et,Wt,Ht,Ut,zt,Ot,Qt,Vt,Yt,Zt,$t,Gt,Xt,Jt,Kt,es,as,ts,ss,ls,rs,ds,is,cs,ns,os,ps,hs,xs,ms,bs,us,js,Ns,gs,fs,Ds,As,ws,Ps,Ts,Bs,ys,vs,_s,Ls,Ss,Cs,Fs,Rs,Is,ks,Ms,qs,Es,Ws,Hs,Us,zs,Os,Qs,Vs,Ys,Zs,$s,Gs,Xs,Js,Ks,el,al,tl,sl,ll,rl,dl,il,cl,nl,ol,pl,hl,xl,ml,bl,ul,jl,Nl,gl,fl,Dl,Al,wl,Pl,Tl,Bl,yl,vl,_l,Ll,Sl,Cl,Fl,Rl,Il,kl,Ml,ql,El,Wl,Hl,Ul,zl,Ol,Ql,Vl,Yl,Zl,$l,Gl,Xl,Jl,Kl,er,ar,tr,sr,lr,rr,dr,ir,cr,nr,or,pr,hr,xr,mr,br,ur,jr,Nr,gr,fr,Dr,Ar,wr,Pr,Tr,Br,yr,vr,_r,Lr,Sr,Cr,Fr,Rr,Ir,kr,Mr,qr,Er,Wr,Hr,Ur,zr,Or,Qr,Vr,Yr,Zr,$r,Gr,Xr,Jr,Kr,ed,ad,td,sd,ld,rd,dd,id,cd,nd,od,pd,hd,xd,md,bd,ud,jd,Nd,gd,fd,Dd,Ad,wd;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-[66rem] mx-auto bg-white p-4 border ",id:"printableArea",children:[((p=this.props)==null?void 0:p.Loading)&&e.jsx(Pd,{}),e.jsxs("div",{className:"grid grid-cols-6 text-center ",children:[e.jsxs("div",{className:"col-span-5",children:[e.jsxs("div",{className:"h-auto flex gap-1 w-full",children:[e.jsx("img",{src:"https://th.bing.com/th/id/OIP.2h0NzgL6-wG4kSWlkAS0jgHaHX?pid=ImgDet&rs=1",alt:"logo",className:"w-24 h-24"}),e.jsx("div",{className:"text-sm font-semibold whitespace-nowrap  py-2"}),e.jsxs("div",{className:"text-center  w-full",children:[e.jsx("div",{className:"text-2xl font-semibold px-2  bg-gray-700 text-white border rounded mx-1 py-1",children:(g=this.props)==null?void 0:g.t("tranActualTaxBillPage.akolaMunicipalCorporationLabel.label")}),e.jsx("p",{className:"text-sm font-normal px-2",children:(t=this.props)==null?void 0:t.t("tranActualTaxBillPage.receiptLabel.label")}),e.jsx("table",{className:"table-auto w-full  ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(h=this.props)==null?void 0:h.t("tranActualTaxBillPage.ownerNameLabel.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(m=(i=(x=this.props)==null?void 0:x.fullData)==null?void 0:i.receiptDtls)==null?void 0:m.ownerName]}),e.jsx("th",{className:"text-start whitespace-nowrap"}),e.jsx("td",{className:"text-start",children:" "}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"  "}),e.jsx("td",{className:"text-start",children:" "})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(s=this.props)==null?void 0:s.t("tranActualTaxBillPage.occupantName.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[" ",(f=(r=(l=this.props)==null?void 0:l.fullData)==null?void 0:r.receiptDtls)==null?void 0:f.customerName]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(c=this.props)==null?void 0:c.t("tranAmcChqReceipt.receiptNoLabel.label")," : "]}),e.jsxs("td",{className:"text-start",children:[" ",D((n=(u=(b=this.props)==null?void 0:b.fullData)==null?void 0:u.receiptDtls)==null?void 0:n.receiptNo)]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(j=this.props)==null?void 0:j.t("mainNewAssessmentPage.BuildingName.label")," : "]}),e.jsxs("td",{className:"text-start",children:[" ",D((o=(a=(N=this.props)==null?void 0:N.fullData)==null?void 0:a.receiptDtls)==null?void 0:o.building_name)]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(A=this.props)==null?void 0:A.t("tranAmcChqReceipt.receiptBookNoLabel1.label")," :"]}),e.jsxs("td",{className:"text-start whitespace-pre-wrap",colSpan:3,children:[D((T=(P=(w=this.props)==null?void 0:w.fullData)==null?void 0:P.receiptDtls)==null?void 0:T.bookNo)," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(B=this.props)==null?void 0:B.t("tranActualTaxBillPage.holdingNoLabel.label"),":"]}),e.jsxs("td",{className:"text-start",children:[" ",(_=(v=(y=this.props)==null?void 0:y.fullData)==null?void 0:v.receiptDtls)==null?void 0:_.applicationNo," "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[" ",(L=this.props)==null?void 0:L.t("tranActualTaxBillPage.billNoLabel.label")," : "]}),e.jsx("td",{className:"text-start",children:((F=(C=(S=this.props)==null?void 0:S.fullData)==null?void 0:C.receiptDtls)==null?void 0:F.transactionNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(R=this.props)==null?void 0:R.t("tranActualTaxBillPage.addressLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",((M=(k=(I=this.props)==null?void 0:I.fullData)==null?void 0:k.receiptDtls)==null?void 0:M.address)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(q=this.props)==null?void 0:q.t("tranActualTaxBillPage.mobileNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((H=(W=(E=this.props)==null?void 0:E.fullData)==null?void 0:W.receiptDtls)==null?void 0:H.mobileNo)||"N/A"}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(U=this.props)==null?void 0:U.t("tranActualTaxBillPage.propertyNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((Q=(O=(z=this.props)==null?void 0:z.fullData)==null?void 0:O.receiptDtls)==null?void 0:Q.propertyNo)||"N/A"})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(V=this.props)==null?void 0:V.t("tranActualTaxBillPage.westZoneLabel.label")," :"]}),e.jsxs("td",{className:"text-start",colSpan:3,children:[" ",(($=(Z=(Y=this.props)==null?void 0:Y.fullData)==null?void 0:Z.receiptDtls)==null?void 0:$.zone_name)||"N/A","   "]}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(G=this.props)==null?void 0:G.t("tranActualTaxBillPage.wardNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:((K=(J=(X=this.props)==null?void 0:X.fullData)==null?void 0:J.receiptDtls)==null?void 0:K.wardNo)||"N/A"}),((te=(ae=(ee=this.props)==null?void 0:ee.fullData)==null?void 0:ae.receiptDtls)==null?void 0:te.paymentMode)=="CASH"?"":e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(se=this.props)==null?void 0:se.t("tranActualTaxBillPage.verifyStatusLabel.label")," :"]}),((de=(re=(le=this.props)==null?void 0:le.fullData)==null?void 0:re.receiptDtls)==null?void 0:de.verifyStatus)==0&&e.jsxs("td",{className:"text-start text-red-500 ",children:[(ie=this.props)==null?void 0:ie.t("tranActualTaxBillPage.notVerifiedLabel.label")," "]}),((oe=(ne=(ce=this.props)==null?void 0:ce.fullData)==null?void 0:ne.receiptDtls)==null?void 0:oe.verifyStatus)==1&&e.jsxs("td",{className:"text-start text-green-500 ",children:[(pe=this.props)==null?void 0:pe.t("tranActualTaxBillPage.verifiedLabel.label")," "]}),((me=(xe=(he=this.props)==null?void 0:he.fullData)==null?void 0:xe.receiptDtls)==null?void 0:me.verifyStatus)==2&&e.jsxs("td",{className:"text-start text-yellow-700 ",children:[(be=this.props)==null?void 0:be.t("tranActualTaxBillPage.underVerificationLabel.label")," "]}),((Ne=(je=(ue=this.props)==null?void 0:ue.fullData)==null?void 0:je.receiptDtls)==null?void 0:Ne.verifyStatus)==3&&e.jsxs("td",{className:"text-start text-red-500",children:[(ge=this.props)==null?void 0:ge.t("tranActualTaxBillPage.bounceLabel.label")," "]})]})]}),e.jsxs("tr",{className:"text-[11px] ",children:[e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(fe=this.props)==null?void 0:fe.t("tranActualTaxBillPage.paymentModeLabel.label")," :"]}),e.jsx("td",{className:"text-start",colSpan:3,children:((we=(Ae=(De=this.props)==null?void 0:De.fullData)==null?void 0:Ae.receiptDtls)==null?void 0:we.paymentMode)||"N/A"}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"Plot No. :"}),e.jsx("td",{className:"text-start",children:((Be=(Te=(Pe=this.props)==null?void 0:Pe.fullData)==null?void 0:Te.receiptDtls)==null?void 0:Be.plot_no)||"N/A"}),e.jsx("th",{className:"text-start whitespace-nowrap",children:"Area Of Plot :"}),e.jsx("td",{className:"text-start",children:((_e=(ve=(ye=this.props)==null?void 0:ye.fullData)==null?void 0:ve.receiptDtls)==null?void 0:_e.area_of_plot)||"N/A"})]}),e.jsx("tr",{className:"text-[11px] ",children:((Ce=(Se=(Le=this.props)==null?void 0:Le.fullData)==null?void 0:Se.receiptDtls)==null?void 0:Ce.paymentMode)=="CHEQUE"||((Ie=(Re=(Fe=this.props)==null?void 0:Fe.fullData)==null?void 0:Re.receiptDtls)==null?void 0:Ie.paymentMode)=="DD"?e.jsxs(e.Fragment,{children:[e.jsxs("th",{className:"text-start",children:[" ",(ke=this.props)==null?void 0:ke.t("tranActualTaxBillPage.bankNameLabel.label")," :"]}),e.jsx("td",{className:"text-start whitespace-nowrap",children:(Ee=(qe=(Me=this.props)==null?void 0:Me.fullData)==null?void 0:qe.receiptDtls)==null?void 0:Ee.bankName}),e.jsxs("th",{className:"text-start",children:[" ",(We=this.props)==null?void 0:We.t("tranActualTaxBillPage.branchNameLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(ze=(Ue=(He=this.props)==null?void 0:He.fullData)==null?void 0:Ue.receiptDtls)==null?void 0:ze.branchName}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(Oe=this.props)==null?void 0:Oe.t("tranActualTaxBillPage.chequeNoLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Ye=(Ve=(Qe=this.props)==null?void 0:Qe.fullData)==null?void 0:Ve.receiptDtls)==null?void 0:Ye.chequeNo}),e.jsxs("th",{className:"text-start whitespace-nowrap",children:[(Ze=this.props)==null?void 0:Ze.t("tranActualTaxBillPage.chequeDateLabel.label")," :"]}),e.jsx("td",{className:"text-start",children:(Xe=(Ge=($e=this.props)==null?void 0:$e.fullData)==null?void 0:Ge.receiptDtls)==null?void 0:Xe.chequeDate})," "]}):""})]})})]})]}),e.jsxs("div",{className:"text-xs w-full  text-center mt-2 whitespace-nowrap ",children:[e.jsxs("h1",{children:[e.jsxs("b",{children:[(aa=this.props)==null?void 0:aa.t("tranActualTaxBillPage.amountPayText1.label",{from:(ea=(Ke=(Je=this.props)==null?void 0:Je.fullData)==null?void 0:Ke.receiptDtls)==null?void 0:ea.duration})," ",(ta=this.props)==null?void 0:ta.t("tranActualTaxBillPage.amountPayTextafter.label")]}),"  ",e.jsxs("b",{children:["Rs:- ",(ra=(la=(sa=this.props)==null?void 0:sa.fullData)==null?void 0:la.receiptDtls)==null?void 0:ra.totalPaidAmount]})]}),e.jsx("h1",{className:"px-20",children:e.jsxs("p",{className:"p-1",children:[" ",e.jsxs("b",{children:[(ca=(ia=(da=this.props)==null?void 0:da.fullData)==null?void 0:ia.receiptDtls)==null?void 0:ca.paidAmtInWords,"."]})," ",e.jsx("b",{children:(na=this.props)==null?void 0:na.t("tranActualTaxBillPage.amountPayText2.label")})]})})]})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("button",{className:"rounded px-2 py-1 bg-blue-50  text-gray-700 outline outline-1 m-1 text-sm",disabled:!0,children:(ha=(pa=(oa=this.props)==null?void 0:oa.fullData)==null?void 0:pa.receiptDtls)==null?void 0:ha.transactionDate}),e.jsxs("div",{className:"w-20 h-24 mt-2 mx-auto",children:["  ",e.jsx(Md,{size:"100",url:`${Bd}/property/paymentReceipt/${(xa=this.props)==null?void 0:xa.paymentId}/holding`})]})]})]}),e.jsx("div",{className:"w-full  text-center text-xs border border-gray-600 ",children:((ua=(ba=(ma=this.props)==null?void 0:ma.fullData)==null?void 0:ba.receiptDtls)==null?void 0:ua.isArrearReceipt)==!0?e.jsx(e.Fragment,{children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-gray-300 font-semibold  ",children:[e.jsxs("td",{className:"border text-left  ",children:[(ja=this.props)==null?void 0:ja.t("tranActualTaxBillPage.paidArrearAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(fa=(ga=(Na=this.props)==null?void 0:Na.fullData)==null?void 0:ga.receiptDtls)==null?void 0:fa.arrearSettled," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[" ",(Da=this.props)==null?void 0:Da.t("tranActualTaxBillPage.paidDemandAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(Pa=(wa=(Aa=this.props)==null?void 0:Aa.fullData)==null?void 0:wa.receiptDtls)==null?void 0:Pa.demandAmount," "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[(Ta=this.props)==null?void 0:Ta.t("tranActualTaxBillPage.paidTotalAmountLabel.label")," "]}),e.jsxs("td",{className:"border text-center ",children:["  ",(va=(ya=(Ba=this.props)==null?void 0:Ba.fullData)==null?void 0:ya.receiptDtls)==null?void 0:va.totalPaidAmount,".00 "]})]}),e.jsxs("tr",{className:"bg-gray-300 font-semibold",children:[e.jsxs("td",{className:"border text-left  ",children:[(_a=this.props)==null?void 0:_a.t("tranActualTaxBillPage.paidAmountInWordsLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:["  ",(Ca=(Sa=(La=this.props)==null?void 0:La.fullData)==null?void 0:Sa.receiptDtls)==null?void 0:Ca.paidAmtInWords]})]})]})})}):e.jsxs("table",{className:"table-auto w-full border text-center",children:[((Ia=(Ra=(Fa=this.props)==null?void 0:Fa.fullData)==null?void 0:Ra.receiptDtls)==null?void 0:Ia.verifyStatus)==3?e.jsxs("div",{className:"flex justify-center items-center w-full  absolute z-10 bg-transparent opacity-40  rounded-full ",children:[" ",e.jsx("img",{src:"https://i.ibb.co/ZV0CH9V/BOUNCE-removebg-preview.png",alt:"",className:"-ml-72 "})]}):"",e.jsx("thead",{children:e.jsxs("tr",{className:"border",children:[e.jsx("th",{className:"border",children:"#."}),e.jsxs("th",{className:"border",children:[(ka=this.props)==null?void 0:ka.t("tranActualTaxBillPage.tablehead1.label")," "]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(A)"})," ",(Ma=this.props)==null?void 0:Ma.t("tranActualTaxBillPage.tablehead2.label")]}),e.jsxs("th",{className:"border",children:[e.jsx("b",{children:"(B)"})," ",(qa=this.props)==null?void 0:qa.t("tranActualTaxBillPage.tablehead3.label")]}),e.jsxs("th",{className:"border",children:[" ",e.jsx("b",{children:"(A+B)"})," ",(Ea=this.props)==null?void 0:Ea.t("tranActualTaxBillPage.tablehead4.label")]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  1 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Wa=this.props)==null?void 0:Wa.t("tranActualTaxBillPage.generalTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(za=(Ua=(Ha=this.props)==null?void 0:Ha.fullData)==null?void 0:Ua.overdueDemand)==null?void 0:za.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Va=(Qa=(Oa=this.props)==null?void 0:Oa.fullData)==null?void 0:Qa.currentDemand)==null?void 0:Va.general_tax," "]}),e.jsxs("td",{className:"border",children:["  ",($a=(Za=(Ya=this.props)==null?void 0:Ya.fullData)==null?void 0:Za.aggregateDemand)==null?void 0:$a.general_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  2 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ga=this.props)==null?void 0:Ga.t("tranActualTaxBillPage.roadTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(Ka=(Ja=(Xa=this.props)==null?void 0:Xa.fullData)==null?void 0:Ja.overdueDemand)==null?void 0:Ka.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(tt=(at=(et=this.props)==null?void 0:et.fullData)==null?void 0:at.currentDemand)==null?void 0:tt.road_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(rt=(lt=(st=this.props)==null?void 0:st.fullData)==null?void 0:lt.aggregateDemand)==null?void 0:rt.road_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  3 "}),e.jsxs("td",{className:"border text-left",children:["   ",(dt=this.props)==null?void 0:dt.t("tranActualTaxBillPage.sewageTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(nt=(ct=(it=this.props)==null?void 0:it.fullData)==null?void 0:ct.overdueDemand)==null?void 0:nt.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ht=(pt=(ot=this.props)==null?void 0:ot.fullData)==null?void 0:pt.currentDemand)==null?void 0:ht.sewarage_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(bt=(mt=(xt=this.props)==null?void 0:xt.fullData)==null?void 0:mt.aggregateDemand)==null?void 0:bt.sewarage_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  4 "}),e.jsxs("td",{className:"border text-left",children:["   ",(ut=this.props)==null?void 0:ut.t("tranActualTaxBillPage.fireFightingTaxLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(gt=(Nt=(jt=this.props)==null?void 0:jt.fullData)==null?void 0:Nt.overdueDemand)==null?void 0:gt.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(At=(Dt=(ft=this.props)==null?void 0:ft.fullData)==null?void 0:Dt.currentDemand)==null?void 0:At.firefighting_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Tt=(Pt=(wt=this.props)==null?void 0:wt.fullData)==null?void 0:Pt.aggregateDemand)==null?void 0:Tt.firefighting_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  5 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Bt=this.props)==null?void 0:Bt.t("tranActualTaxBillPage.waterBenefitLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(_t=(vt=(yt=this.props)==null?void 0:yt.fullData)==null?void 0:vt.overdueDemand)==null?void 0:_t.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(Ct=(St=(Lt=this.props)==null?void 0:Lt.fullData)==null?void 0:St.currentDemand)==null?void 0:Ct.water_benefit," "]}),e.jsxs("td",{className:"border",children:["  ",(It=(Rt=(Ft=this.props)==null?void 0:Ft.fullData)==null?void 0:Rt.aggregateDemand)==null?void 0:It.water_benefit," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 6 "}),e.jsxs("td",{className:"border text-left",children:["   ",(kt=this.props)==null?void 0:kt.t("tranActualTaxBillPage.educationTaxLabel.label"),"  "]}),e.jsxs("td",{className:"border",children:["  ",(Et=(qt=(Mt=this.props)==null?void 0:Mt.fullData)==null?void 0:qt.overdueDemand)==null?void 0:Et.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ut=(Ht=(Wt=this.props)==null?void 0:Wt.fullData)==null?void 0:Ht.currentDemand)==null?void 0:Ut.sp_education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Qt=(Ot=(zt=this.props)==null?void 0:zt.fullData)==null?void 0:Ot.aggregateDemand)==null?void 0:Qt.sp_education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  7 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Vt=this.props)==null?void 0:Vt.t("tranActualTaxBillPage.sanitationTax.label")," "]}),e.jsx("td",{className:"border",children:($t=(Zt=(Yt=this.props)==null?void 0:Yt.fullData)==null?void 0:Zt.overdueDemand)==null?void 0:$t.light_cess}),e.jsx("td",{className:"border",children:(Jt=(Xt=(Gt=this.props)==null?void 0:Gt.fullData)==null?void 0:Xt.currentDemand)==null?void 0:Jt.light_cess}),e.jsx("td",{className:"border",children:(as=(es=(Kt=this.props)==null?void 0:Kt.fullData)==null?void 0:es.aggregateDemand)==null?void 0:as.light_cess})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  8 "}),e.jsxs("td",{className:"border text-left",children:["   ",(ts=this.props)==null?void 0:ts.t("tranActualTaxBillPage.treeTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(rs=(ls=(ss=this.props)==null?void 0:ss.fullData)==null?void 0:ls.overdueDemand)==null?void 0:rs.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(cs=(is=(ds=this.props)==null?void 0:ds.fullData)==null?void 0:is.currentDemand)==null?void 0:cs.tree_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(ps=(os=(ns=this.props)==null?void 0:ns.fullData)==null?void 0:os.aggregateDemand)==null?void 0:ps.tree_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  9 "}),e.jsxs("td",{className:"border text-left",children:["   ",(hs=this.props)==null?void 0:hs.t("tranActualTaxBillPage.spEducationTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(bs=(ms=(xs=this.props)==null?void 0:xs.fullData)==null?void 0:ms.overdueDemand)==null?void 0:bs.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ns=(js=(us=this.props)==null?void 0:us.fullData)==null?void 0:js.currentDemand)==null?void 0:Ns.education_tax," "]}),e.jsxs("td",{className:"border",children:["  ",(Ds=(fs=(gs=this.props)==null?void 0:gs.fullData)==null?void 0:fs.aggregateDemand)==null?void 0:Ds.education_tax," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  10 "}),e.jsxs("td",{className:"border text-left",children:["  ",(As=this.props)==null?void 0:As.t("tranActualTaxBillPage.guranteeFee.label")]}),e.jsx("td",{className:"border",children:(Ts=(Ps=(ws=this.props)==null?void 0:ws.fullData)==null?void 0:Ps.overdueDemand)==null?void 0:Ts.professional_tax}),e.jsx("td",{className:"border",children:(vs=(ys=(Bs=this.props)==null?void 0:Bs.fullData)==null?void 0:ys.currentDemand)==null?void 0:vs.professional_tax}),e.jsx("td",{className:"border",children:(Ss=(Ls=(_s=this.props)==null?void 0:_s.fullData)==null?void 0:Ls.aggregateDemand)==null?void 0:Ss.professional_tax})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  11 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Cs=this.props)==null?void 0:Cs.t("tranActualTaxBillPage.spWaterCessLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Is=(Rs=(Fs=this.props)==null?void 0:Fs.fullData)==null?void 0:Rs.overdueDemand)==null?void 0:Is.water_bill," "]}),e.jsxs("td",{className:"border",children:["  ",(qs=(Ms=(ks=this.props)==null?void 0:ks.fullData)==null?void 0:Ms.currentDemand)==null?void 0:qs.water_bill," "]}),e.jsxs("td",{className:"border",children:["  ",(Hs=(Ws=(Es=this.props)==null?void 0:Es.fullData)==null?void 0:Ws.aggregateDemand)==null?void 0:Hs.water_bill," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  12 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Us=this.props)==null?void 0:Us.t("tranActualTaxBillPage.bigBuildingTaxLabel.label")," "]}),e.jsxs("td",{className:"border",children:["  ",(Qs=(Os=(zs=this.props)==null?void 0:zs.fullData)==null?void 0:Os.overdueDemand)==null?void 0:Qs.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(Zs=(Ys=(Vs=this.props)==null?void 0:Vs.fullData)==null?void 0:Ys.currentDemand)==null?void 0:Zs.major_building," "]}),e.jsxs("td",{className:"border",children:["  ",(Xs=(Gs=($s=this.props)==null?void 0:$s.fullData)==null?void 0:Gs.aggregateDemand)==null?void 0:Xs.major_building," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  13 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Js=this.props)==null?void 0:Js.t("tranActualTaxBillPage.agriTax.label")]}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"}),e.jsx("td",{className:"border",children:"0.00"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  14 "}),e.jsxs("td",{className:"border text-left",children:["  ",(Ks=this.props)==null?void 0:Ks.t("tranActualTaxBillPage.punishmentUnderScetion.label")]}),e.jsx("td",{className:"border",children:(tl=(al=(el=this.props)==null?void 0:el.fullData)==null?void 0:al.overdueDemand)==null?void 0:tl.tax1}),e.jsx("td",{className:"border",children:(rl=(ll=(sl=this.props)==null?void 0:sl.fullData)==null?void 0:ll.currentDemand)==null?void 0:rl.tax1}),e.jsx("td",{className:"border",children:(cl=(il=(dl=this.props)==null?void 0:dl.fullData)==null?void 0:il.aggregateDemand)==null?void 0:cl.tax1})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  15 "}),e.jsxs("td",{className:"border text-left",children:["   ",(nl=this.props)==null?void 0:nl.t("tranActualTaxBillPage.OpenPlotTax.label")," "]}),e.jsx("td",{className:"border",children:parseInt((hl=(pl=(ol=this.props)==null?void 0:ol.fullData)==null?void 0:pl.overdueDemand)==null?void 0:hl.sp_water_cess)+parseInt((bl=(ml=(xl=this.props)==null?void 0:xl.fullData)==null?void 0:ml.overdueDemand)==null?void 0:bl.open_ploat_tax)}),e.jsx("td",{className:"border",children:parseInt((Nl=(jl=(ul=this.props)==null?void 0:ul.fullData)==null?void 0:jl.currentDemand)==null?void 0:Nl.sp_water_cess)+parseInt((Dl=(fl=(gl=this.props)==null?void 0:gl.fullData)==null?void 0:fl.currentDemand)==null?void 0:Dl.open_ploat_tax)}),e.jsx("td",{className:"border",children:parseInt((Pl=(wl=(Al=this.props)==null?void 0:Al.fullData)==null?void 0:wl.aggregateDemand)==null?void 0:Pl.sp_water_cess)+parseInt((yl=(Bl=(Tl=this.props)==null?void 0:Tl.fullData)==null?void 0:Bl.aggregateDemand)==null?void 0:yl.open_ploat_tax)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  16 "}),e.jsxs("td",{className:"border text-left",children:["   ",(vl=this.props)==null?void 0:vl.t("tranActualTaxBillPage.punishmentLabel.label")," "]}),e.jsxs("td",{className:"border text-center",children:[(Sl=(Ll=(_l=this.props)==null?void 0:_l.fullData)==null?void 0:Ll.overdueDemand)==null?void 0:Sl.arrearPenalty,"  "]}),e.jsxs("td",{className:"border text-center",children:["0.00","  "]}),e.jsxs("td",{className:"border text-center",children:[(Rl=(Fl=(Cl=this.props)==null?void 0:Cl.fullData)==null?void 0:Fl.aggregateDemand)==null?void 0:Rl.arrearPenalty," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"  17 "}),e.jsxs("td",{className:"border text-left",children:["   ",(Il=this.props)==null?void 0:Il.t("tranActualTaxBillPage.paidTotalAmountLabel.label")]}),e.jsxs("td",{className:"border",children:["  ",(ql=(Ml=(kl=this.props)==null?void 0:kl.fullData)==null?void 0:Ml.overdueDemand)==null?void 0:ql.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(Hl=(Wl=(El=this.props)==null?void 0:El.fullData)==null?void 0:Wl.currentDemand)==null?void 0:Hl.totalPayableAmt," "]}),e.jsxs("td",{className:"border",children:["  ",(Ol=(zl=(Ul=this.props)==null?void 0:Ul.fullData)==null?void 0:zl.aggregateDemand)==null?void 0:Ol.totalPayableAmt," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 18  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Ql=this.props)==null?void 0:Ql.t("tranActualTaxBillPage.penaltyAmnestyScheme.label")]}),e.jsx("td",{className:"border",children:(Zl=(Yl=(Vl=this.props)==null?void 0:Vl.fullData)==null?void 0:Yl.overdueDemand)==null?void 0:Zl.arrearPenaltyRebate}),e.jsx("td",{className:"border",children:(Xl=(Gl=($l=this.props)==null?void 0:$l.fullData)==null?void 0:Gl.currentDemand)==null?void 0:Xl.exceptionUnderSAY}),e.jsx("td",{className:"border",children:(er=(Kl=(Jl=this.props)==null?void 0:Jl.fullData)==null?void 0:Kl.aggregateDemand)==null?void 0:er.arrearPenaltyRebate})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 19  "}),e.jsxs("td",{className:"border text-left",children:["   ",(ar=this.props)==null?void 0:ar.t("tranActualTaxBillPage.penaltyRegularTax.label")]}),e.jsx("td",{className:"border",children:(lr=(sr=(tr=this.props)==null?void 0:tr.fullData)==null?void 0:sr.overdueDemand)==null?void 0:lr.exempted_general_tax}),e.jsx("td",{className:"border",children:(ir=(dr=(rr=this.props)==null?void 0:rr.fullData)==null?void 0:dr.currentDemand)==null?void 0:ir.exempted_general_tax}),e.jsx("td",{className:"border",children:(or=(nr=(cr=this.props)==null?void 0:cr.fullData)==null?void 0:nr.aggregateDemand)==null?void 0:or.exempted_general_tax})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 20  "}),e.jsxs("td",{className:"border text-left",children:["   ",(pr=this.props)==null?void 0:pr.t("tranActualTaxBillPage.totalPaymentAfterPenalty.label")]}),e.jsx("td",{className:"border",children:(mr=(xr=(hr=this.props)==null?void 0:hr.fullData)==null?void 0:xr.overdueDemand)==null?void 0:mr.payableAfterDeduction}),e.jsx("td",{className:"border",children:(jr=(ur=(br=this.props)==null?void 0:br.fullData)==null?void 0:ur.currentDemand)==null?void 0:jr.payableAfterDeduction}),e.jsx("td",{className:"border",children:(fr=(gr=(Nr=this.props)==null?void 0:Nr.fullData)==null?void 0:gr.aggregateDemand)==null?void 0:fr.payableAfterDeduction})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 21  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Dr=this.props)==null?void 0:Dr.t("tranActualTaxBillPage.advanceAmountOtherTaxes.label")]}),e.jsxs("td",{className:"border",children:["  ",(Pr=(wr=(Ar=this.props)==null?void 0:Ar.fullData)==null?void 0:wr.overdueDemand)==null?void 0:Pr.netAdvance]}),e.jsxs("td",{className:"border",children:["  ",(yr=(Br=(Tr=this.props)==null?void 0:Tr.fullData)==null?void 0:Br.currentDemand)==null?void 0:yr.netAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Lr=(_r=(vr=this.props)==null?void 0:vr.fullData)==null?void 0:_r.aggregateDemand)==null?void 0:Lr.netAdvance]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 22  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Sr=this.props)==null?void 0:Sr.t("tranActualTaxBillPage.totalPaymentAfterAdvance.label")]}),e.jsxs("td",{className:"border",children:["  ",(Rr=(Fr=(Cr=this.props)==null?void 0:Cr.fullData)==null?void 0:Fr.overdueDemand)==null?void 0:Rr.totalPayableAfterAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Mr=(kr=(Ir=this.props)==null?void 0:Ir.fullData)==null?void 0:kr.currentDemand)==null?void 0:Mr.totalPayableAfterAdvance]}),e.jsxs("td",{className:"border",children:["  ",(Wr=(Er=(qr=this.props)==null?void 0:qr.fullData)==null?void 0:Er.aggregateDemand)==null?void 0:Wr.totalPayableAfterAdvance]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" 23  "}),e.jsxs("td",{className:"border text-left",children:["   ",(Hr=this.props)==null?void 0:Hr.t("tranActualTaxBillPage.noticeFeeWarrantFee.label")]}),e.jsxs("td",{className:"border",children:["  ",(Or=(zr=(Ur=this.props)==null?void 0:Ur.fullData)==null?void 0:zr.overdueDemand)==null?void 0:Or.noticeFee]}),e.jsxs("td",{className:"border",children:["  ",(Yr=(Vr=(Qr=this.props)==null?void 0:Qr.fullData)==null?void 0:Vr.currentDemand)==null?void 0:Yr.noticeFee]}),e.jsxs("td",{className:"border",children:["  ",(Gr=($r=(Zr=this.props)==null?void 0:Zr.fullData)==null?void 0:$r.aggregateDemand)==null?void 0:Gr.noticeFee]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border ",children:"  "}),e.jsxs("td",{className:"border font-bold text-left",children:["   ",(Xr=this.props)==null?void 0:Xr.t("tranActualTaxBillPage.totalTaxLabel.label")," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(ed=(Kr=(Jr=this.props)==null?void 0:Jr.fullData)==null?void 0:Kr.overdueDemand)==null?void 0:ed.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(sd=(td=(ad=this.props)==null?void 0:ad.fullData)==null?void 0:td.currentDemand)==null?void 0:sd.FinalTax," "]}),e.jsxs("td",{className:"border font-bold",children:["  ",(dd=(rd=(ld=this.props)==null?void 0:ld.fullData)==null?void 0:rd.aggregateDemand)==null?void 0:dd.FinalTax," "]})]})]})]})}),e.jsxs("h1",{className:"text-xs mt-2",children:[" ",(id=this.props)==null?void 0:id.t("tranActualTaxBillPage.policyLabel.label")]}),e.jsxs("h1",{className:"font-semibold pt-2",children:[(cd=this.props)==null?void 0:cd.t("tranActualTaxBillPage.connectWithUsLabel.label")," :- "]}),e.jsxs("div",{className:"grid grid-cols-5  text-sm  mt-16",children:[e.jsx("div",{className:"text-left whitespace-pre-wrap mt-5",children:e.jsxs("p",{children:[(nd=this.props)==null?void 0:nd.t("tranActualTaxBillPage.collectionAgent.label"),"  : ",(hd=(pd=(od=this.props)==null?void 0:od.fullData)==null?void 0:pd.receiptDtls)==null?void 0:hd.tcName]})}),e.jsx("div",{className:"p-2 pt-6",children:e.jsxs("div",{className:"rounded px-2 py-1 w-full border hover:shadow bg-gray-500 text-white text-center capitalize text-xs",children:[e.jsx("p",{children:(xd=this.props)==null?void 0:xd.t("tranActualTaxBillPage.tollFreeNoLabel.label")}),e.jsx("p",{className:"lowercase",children:(jd=(ud=(bd=(md=this.props)==null?void 0:md.fullData)==null?void 0:bd.receiptDtls)==null?void 0:ud.ulbDetails)==null?void 0:jd.toll_free_no})]})}),e.jsxs("div",{className:"text-center ",children:[e.jsxs("p",{children:[(Nd=this.props)==null?void 0:Nd.t("tranActualTaxBillPage.taxClerkLabel.label")," "]}),e.jsxs("p",{children:[(gd=this.props)==null?void 0:gd.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{children:[(fd=this.props)==null?void 0:fd.t("tranActualTaxBillPage.taxSuperintendentLabel.label")," "]}),e.jsxs("p",{children:[(Dd=this.props)==null?void 0:Dd.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{children:(Ad=this.props)==null?void 0:Ad.t("tranActualTaxBillPage.deputyCommissionarLabel.label")}),e.jsxs("p",{children:[(wd=this.props)==null?void 0:wd.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")," "]})]})]})]})})}}function zd(){var n;const{api_getsafDemandById:Td,api_getHoldingReceiptUrl:p,api_paysafoffline_Mode:g}=kd(),[t,h]=d.useState(null),[x,i]=d.useState(!1),[m,s]=d.useState(!1),l=d.useRef(),{paymentId:r,module:f}=yd(),{t:c}=vd(),b=_d();Ld("Payment Receipt"),d.useEffect(()=>{u()},[]);const u=()=>{s(!0);let j=p,N={tranId:r};Sd.post(j,N,Cd()).then(function(a){var o;s(!1),console.log("response after pushing saf data",a.data.data),(o=a==null?void 0:a.data)!=null&&o.status?(h(a.data.data),i(!1),setLoader(!1)):(Fd.warn(a.data.message),i(!0),s(!1))}).catch(function(a){console.log("error in submitting saf form ","error")})};return e.jsxs("div",{children:[m&&e.jsx(Pd,{}),x?e.jsxs("div",{className:"w-full bg-white h-48 p-4 text-center",children:[e.jsx("h1",{className:"my-2 p-2 text-lg font-semibold font-poppins text-red-500",children:"Demands against this transaction does not exist"}),e.jsx("button",{className:"px-2 py-2 rounded border bg-blue-500 hover:bg-blue-600 text-white ",type:"button",onClick:()=>b(-1),children:"Return To Previous Page"})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(Rd,{trigger:()=>e.jsxs("button",{id:"clickButton",className:"bg-teal-500  hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg text-xs font-mono fixed bottom-1 right-[25vw] md:right-[40vw] ",children:[e.jsx(Id,{})," Print !"]}),content:()=>l.current,copyStyles:!0}),((n=t==null?void 0:t.receiptDtls)==null?void 0:n.chequeStatus)!=1?e.jsx(e.Fragment,{children:e.jsx(qd,{ref:l,t:c,fullData:t,paymentId:r})}):e.jsx(e.Fragment,{children:e.jsx(Ed,{ref:l,t:c,fullData:t,paymentId:r})})]})})]})}export{zd as default};
