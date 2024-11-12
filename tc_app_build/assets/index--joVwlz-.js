import{j as e,b as pe,e as je,d as Ne,c as ye,p as oe,S as fe,Q as K,I as ue}from"./index-kFrNXNj3.js";import{u as ge,d as Te,e as we,f as _e,r as Pe}from"./router-5yjtezO8.js";import{u as Ae}from"./formik.esm-BnzrXcQN.js";import{c as De,a as p}from"./index.esm-uHa2PMRf.js";import{P as ve}from"./index-RhIUOsuG.js";import{O as Fe}from"./OverLayLoader-A0nyVvRw.js";import{r as $}from"./tailwind-6U-kYQAu.js";import{F as Ce}from"./FormProvider-m5UeA_k0.js";import{T as d}from"./TextField-VY9Pfcn0.js";import{S as be}from"./SelectField-TDHKwV6Z.js";import"./index-iFVn5AxS.js";import{u as Ee}from"./usePathWisePermission-LyyBfJee.js";import{U as Ie}from"./useSaveLocation-FXBZJfDP.js";import{u as qe}from"./useLocationRadius-_0NjnvG9.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./module-NSAAS-cO.js";import"./customInputValidation-jhKsg103.js";function Me({data:s,permissionResult:a}){var h,t,y,f,E,I,u,j,g,b,T,v,l,F,i,C,w,_,A,P,x;return e.jsx($.Card,{children:e.jsxs("div",{className:"px-4 py-6",children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Holding No:"}),e.jsx("h1",{className:"text-xs",children:(t=(h=s==null?void 0:s.data)==null?void 0:h.basicDetails)==null?void 0:t.holding_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-xs",children:(f=(y=s==null?void 0:s.data)==null?void 0:y.basicDetails)==null?void 0:f.property_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Owner Name:"}),e.jsx("h1",{className:"text-xs",children:(I=(E=s==null?void 0:s.data)==null?void 0:E.basicDetails)==null?void 0:I.owner_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Owner Name (In Marathi):"}),e.jsx("h1",{className:"text-xs",children:((j=(u=s==null?void 0:s.data)==null?void 0:u.basicDetails)==null?void 0:j.owner_name_marathi)||"N/A"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Applicant Name:"}),e.jsx("h1",{className:"text-xs",children:(b=(g=s==null?void 0:s.data)==null?void 0:g.basicDetails)==null?void 0:b.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-xs",children:(v=(T=s==null?void 0:s.data)==null?void 0:T.basicDetails)==null?void 0:v.prop_address})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Zone:"}),e.jsx("h1",{className:"text-xs",children:(F=(l=s==null?void 0:s.data)==null?void 0:l.basicDetails)==null?void 0:F.zone_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Ward No:"}),e.jsx("h1",{className:"text-xs",children:(C=(i=s==null?void 0:s.data)==null?void 0:i.basicDetails)==null?void 0:C.ward_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Ownership Type:"}),e.jsx("h1",{className:"text-xs",children:(_=(w=s==null?void 0:s.data)==null?void 0:w.basicDetails)==null?void 0:_.ownership_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Property Type:"}),e.jsx("h1",{className:"text-xs",children:(P=(A=s==null?void 0:s.data)==null?void 0:A.basicDetails)==null?void 0:P.property_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Is-Armed-Force:"}),e.jsx("h1",{className:"text-xs",children:(x=s==null?void 0:s.data)!=null&&x.isSingleManArmedForce?"Yes":"No"})]})]}),e.jsx("div",{className:"my-3 border-b-2"})]})})}function Be({data:s}){var a,h;return e.jsx($.Card,{className:"mt-4 w-full",children:e.jsxs($.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Demand List"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Financial Year :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:(h=(a=s==null?void 0:s.data)==null?void 0:a.demandList)==null?void 0:h.map((t,y)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.fyear}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.light_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.total_tax})]},y))})]})})]})})}function Se({data:s}){var a,h,t,y,f,E,I,u,j,g,b,T,v,l,F,i,C,w,_,A,P,x,q,J,Z,M,B,S,R,U,W,L,O,Q,H,G,Y,V;return e.jsx($.Card,{className:"mt-4 w-full",children:e.jsxs($.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Grand Total Tax"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Interest"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(h=(a=s==null?void 0:s.data)==null?void 0:a.grandTaxes)==null?void 0:h.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(y=(t=s==null?void 0:s.data)==null?void 0:t.grandTaxes)==null?void 0:y.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(E=(f=s==null?void 0:s.data)==null?void 0:f.grandTaxes)==null?void 0:E.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(u=(I=s==null?void 0:s.data)==null?void 0:I.grandTaxes)==null?void 0:u.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(g=(j=s==null?void 0:s.data)==null?void 0:j.grandTaxes)==null?void 0:g.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(T=(b=s==null?void 0:s.data)==null?void 0:b.grandTaxes)==null?void 0:T.cleanliness_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(l=(v=s==null?void 0:s.data)==null?void 0:v.grandTaxes)==null?void 0:l.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(i=(F=s==null?void 0:s.data)==null?void 0:F.grandTaxes)==null?void 0:i.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(w=(C=s==null?void 0:s.data)==null?void 0:C.grandTaxes)==null?void 0:w.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(A=(_=s==null?void 0:s.data)==null?void 0:_.grandTaxes)==null?void 0:A.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(x=(P=s==null?void 0:s.data)==null?void 0:P.grandTaxes)==null?void 0:x.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(J=(q=s==null?void 0:s.data)==null?void 0:q.grandTaxes)==null?void 0:J.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(M=(Z=s==null?void 0:s.data)==null?void 0:Z.grandTaxes)==null?void 0:M.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(S=(B=s==null?void 0:s.data)==null?void 0:B.grandTaxes)==null?void 0:S.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(U=(R=s==null?void 0:s.data)==null?void 0:R.grandTaxes)==null?void 0:U.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(L=(W=s==null?void 0:s.data)==null?void 0:W.grandTaxes)==null?void 0:L.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(Q=(O=s==null?void 0:s.data)==null?void 0:O.grandTaxes)==null?void 0:Q.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(G=(H=s==null?void 0:s.data)==null?void 0:H.grandTaxes)==null?void 0:G.monthlyPenalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(V=(Y=s==null?void 0:s.data)==null?void 0:Y.grandTaxes)==null?void 0:V.total_tax})]})})]})})]})})}const ae=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"},{id:5,label:"NEFT",value:"NEFT"}],Re=[{id:1,label:"Full Payment",value:"isFullPayment"},{id:2,label:"Arrear Amount",value:"isArrearPayment"},{id:3,label:"Part Payment",value:"isPartPayment"}];function Ue({data:s,formik:a,calculateActualAmount:h,PayNow:t,payableAmt:y,advanceAmount:f,rebateAmount:E,arrearPayableAmt:I,ButtonAomunt:u}){var g,b,T,v,l,F,i,C,w,_,A,P,x,q,J,Z,M,B,S,R,U,W,L,O,Q,H,G,Y,V,X,r,c,m,N,D,k,z,ee,se,re,te,le;console.log((g=s==null?void 0:s.data)==null?void 0:g.remainAdvance),console.log((b=s==null?void 0:s.data)==null?void 0:b.payableAmt);const j=()=>f>=y?u():t();return e.jsx($.Card,{className:"mt-4 w-full",children:e.jsxs($.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Payment Action"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold ",children:"* Total Arrear Amount -:"})}),e.jsx("div",{children:(T=s==null?void 0:s.data)!=null&&T.isSingleManArmedForce||(v=s==null?void 0:s.data)!=null&&v.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(l=s==null?void 0:s.data)==null?void 0:l.arrear," - ₹",(F=s==null?void 0:s.data)==null?void 0:F.arrear_exempted_general_tax," = ₹"," ",((i=s==null?void 0:s.data)==null?void 0:i.arrear)-((C=s==null?void 0:s.data)==null?void 0:C.arrear_exempted_general_tax)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-red-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(w=s==null?void 0:s.data)==null?void 0:w.arrear]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Current Amount -:"})}),e.jsx("div",{children:(_=s==null?void 0:s.data)!=null&&_.isSingleManArmedForce||(A=s==null?void 0:s.data)!=null&&A.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(P=s==null?void 0:s.data)==null?void 0:P.currentDemand," - ₹",(x=s==null?void 0:s.data)==null?void 0:x.current_exempted_general_tax," = ₹"," ",parseFloat(((q=s==null?void 0:s.data)==null?void 0:q.currentDemand)-((J=s==null?void 0:s.data)==null?void 0:J.current_exempted_general_tax)).toFixed(2)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-cyan-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(Z=s==null?void 0:s.data)==null?void 0:Z.currentDemand]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Interest Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold ",children:[e.jsxs("span",{className:"text-red-500",children:["₹ ",(M=s==null?void 0:s.data)==null?void 0:M.totalInterestPenalty]})," ",e.jsxs("small",{children:["( Interest on Arrear ₹ ",(B=s==null?void 0:s.data)==null?void 0:B.arrearInterest," + Previous Interest ₹ ",(S=s==null?void 0:s.data)==null?void 0:S.previousInterest,")"]})]})}),e.jsx("div",{className:"my-3 border-b-2 col-span-2"}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Payable Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[(R=s==null?void 0:s.data)!=null&&R.isSingleManArmedForce||(U=s==null?void 0:s.data)!=null&&U.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(W=s==null?void 0:s.data)==null?void 0:W.payableAmt," - ₹",(L=s==null?void 0:s.data)==null?void 0:L.total_exempted_general_tax," = ₹"," ",parseFloat(((O=s==null?void 0:s.data)==null?void 0:O.payableAmt)-((Q=s==null?void 0:s.data)==null?void 0:Q.total_exempted_general_tax)).toFixed(2)," "]})," "]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",y]})," "]}),e.jsx("small",{children:"(Arrear + Current + Interest)"})," ",e.jsx("div",{children:e.jsxs("h1",{className:"text-[10px] text-yellow-800",children:["( If You Pay Full Amount Before"," ",(G=(H=s==null?void 0:s.data)==null?void 0:H.QuarterlyRebates[0])==null?void 0:G.upto_date,", Then"," ",(V=(Y=s==null?void 0:s.data)==null?void 0:Y.QuarterlyRebates[0])==null?void 0:V.rebates," % Of General Tax For Current Year Will Be Waived. )"]})}),((X=s==null?void 0:s.data)==null?void 0:X.isSingleManArmedForce)||((r=s==null?void 0:s.data)==null?void 0:r.isMobileTower)&&e.jsxs("small",{className:"text-blue-500",children:[" ","- (",(c=s==null?void 0:s.data)==null?void 0:c.total_exempted_general_tax," General Tax Exemption)"]})]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Advance Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(m=s==null?void 0:s.data)==null?void 0:m.remainAdvance]})," ",e.jsx("small",{className:"text-green-500",children:"(This Is An Adjustable Amount From Total Payment Value.)"})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(Ce,{formik:a,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"mb-4",children:e.jsxs(be,{label:"Payment Mode",name:"paymentMode",formik:a,children:[e.jsx("option",{value:"",children:"select"}),parseFloat((N=s==null?void 0:s.data)==null?void 0:N.remainAdvance)>=parseFloat((D=s==null?void 0:s.data)==null?void 0:D.payableAmt)&&e.jsx("option",{value:"ADVANCE ADJUSTMENT",children:"Advance Adjustment"}),ae==null?void 0:ae.map(o=>e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id))]})}),e.jsx("div",{children:e.jsxs(be,{label:"Payment Option",name:"paymentType",formik:a,type:"select",children:[e.jsx("option",{value:"",children:"select"}),Re.map(o=>{var ne;return((ne=s==null?void 0:s.data)==null?void 0:ne.arrear)>0?e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id):o.value!="isArrearPayment"&&e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id)})]})})]}),((k=a.values)==null?void 0:k.paymentMode)==="CHEQUE"?e.jsx(We,{formik:a}):((z=a.values)==null?void 0:z.paymentMode)==="DD"?e.jsx(Le,{formik:a}):((ee=a.values)==null?void 0:ee.paymentMode)==="NEFT"?e.jsx(Oe,{formik:a}):null,((se=a.values)==null?void 0:se.paymentType)==="isPartPayment"&&e.jsx("div",{className:"",children:e.jsx(d,{label:"Part Payment Amount",name:"paidAmount",type:"number",formik:a,onInput:((re=a.values)==null?void 0:re.paymentType)==="isPartPayment"?o=>{o.target.value=Math.max(0,parseInt(o.target.value)).toString().slice(0,10)}:null})}),f>=j()&&parseFloat((te=s==null?void 0:s.data)==null?void 0:te.remainAdvance)>=parseFloat((le=s==null?void 0:s.data)==null?void 0:le.payableAmt)&&e.jsxs("h1",{className:"text-xs font-semibold text-green-500",children:["₹",f," - ₹",j()," = ₹",f-j()," will remain in advance."]}),e.jsx("div",{className:"flex justify-center mt-2",children:e.jsxs($.Button,{type:"submit",color:"indigo",disabled:!a.isValid,children:["Submit ₹ ",j()]})})]})]})})}const We=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(d,{label:"Cheque No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Cheque Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Upload Cheque Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),Le=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(d,{label:"DD No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"DD Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Upload DD Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),Oe=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(d,{label:"NEFT No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"NEFT Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(d,{label:"Upload NEFT Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),Qe=De().shape({paymentMode:p().required("Payment Mode is required"),paymentType:p().required("Payment Type is required"),paidAmount:p().when(["paymentType"],{is:s=>s=="isPartPayment",then:()=>p().required("Part Payment Amount is required")}),chequeNo:p().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>p().required("Cheque No is required")}),chequeDate:p().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>p().required("Cheque Date is required")}),neftImage:p().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>p().required("Cheque Upload is required")}),bankName:p().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>p().required("Bank Name is required")}),branchName:p().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>p().required("Branch Name is required")}),paymentRemark:p().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>p().required("Payment Remark is required")})});function cs(){var M,B,S,R,U,W,L,O,Q,H,G,Y,V,X;const s=pe(),{isGeolocationEnabled:a,coords:h}=je(!1),{radiusInMeters:t,distanceToTargetEast:y,distanceToTargetNorth:f,distanceToTargetSouth:E,distanceToTargetWest:I}=qe(),u=ge(),{saveLocation:j}=Ie();Te.useState(0);const g=Ne({}),{id:b}=we(),{pathname:T}=_e(),{result:v}=Ee((B=(M=T==null?void 0:T.split("/"))==null?void 0:M.slice(0,-1))==null?void 0:B.join("/")),{data:l,isLoading:F}=ye({api:oe.getDemandDetails,config:{propId:b},value:b,options:{enabled:!!b}}),i=Ae({enableReinitialize:!0,initialValues:{paymentMode:"",paymentType:"",chequeNo:"",chequeDate:"",bankName:"",branchName:"",paymentRemark:"",neftImage:"",paidAmount:""},validationSchema:Qe,onSubmit:async r=>{fe.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+q(),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(c=>{c.isConfirmed&&C(r)}).catch(c=>{var m,N;K.error((N=(m=c==null?void 0:c.response)==null?void 0:m.data)==null?void 0:N.message)})}}),C=async r=>{var m,N,D,k,z,ee,se,re,te,le,o,ne,ie,ce,xe,de,me,he;let c={};if((r==null?void 0:r.paymentMode)==="ONLINE"){c={propId:b,paymentMode:r==null?void 0:r.paymentMode,paymentType:r==null?void 0:r.paymentType,paidAmount:x(),deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/property/payment-history"};const n=await g.mutateAsync({api:oe.iciciPayment,data:c});(m=n==null?void 0:n.data)!=null&&m.status?(j({actionType:"PropertyPaymentOnline",refId:(D=(N=n==null?void 0:n.data)==null?void 0:N.data)==null?void 0:D.requestId,moduleId:1}),K.success((k=n==null?void 0:n.data)==null?void 0:k.message),window.location.href=(ee=(z=n==null?void 0:n.data)==null?void 0:z.data)==null?void 0:ee.encryptUrl,i.resetForm()):K.error((se=n==null?void 0:n.data)==null?void 0:se.message)}else{(r==null?void 0:r.paymentMode)==="CHEQUE"||(r==null?void 0:r.paymentMode)==="DD"||(r==null?void 0:r.paymentMode)==="NEFT"?c={id:b,paymentMode:r==null?void 0:r.paymentMode,paymentType:r==null?void 0:r.paymentType,chequeNo:r==null?void 0:r.chequeNo,chequeDate:r==null?void 0:r.chequeDate,bankName:r==null?void 0:r.bankName,branchName:r==null?void 0:r.branchName,paymentRemark:r==null?void 0:r.paymentRemark,neftImage:r==null?void 0:r.neftImage,paidAmount:x(),deviceType:"android"}:c={id:b,paymentMode:r==null?void 0:r.paymentMode,paymentType:r==null?void 0:r.paymentType,paidAmount:x(),deviceType:"android"};try{const n=await g.mutateAsync({api:oe.holdingPayment,data:c});(re=n==null?void 0:n.data)!=null&&re.status?(j({actionType:"successPropertyPayment",refId:(le=(te=n==null?void 0:n.data)==null?void 0:te.data)==null?void 0:le.transactionId,moduleId:1}),K.success((o=n==null?void 0:n.data)==null?void 0:o.message),u("/amc-app/property/payment-response?response=".concat((ie=(ne=n==null?void 0:n.data)==null?void 0:ne.data)==null?void 0:ie.transactionId,"&tranNo=").concat((xe=(ce=n==null?void 0:n.data)==null?void 0:ce.data)==null?void 0:xe.TransactionNo),{replace:!0}),i.resetForm()):(K.error((de=n==null?void 0:n.data)==null?void 0:de.message),j({actionType:"failedPropertyPayment",refId:b,moduleId:1}))}catch(n){K.error((he=(me=n==null?void 0:n.response)==null?void 0:me.data)==null?void 0:he.message)}}};let w=parseFloat((S=l==null?void 0:l.data)==null?void 0:S.payableAmt)||0,_=parseFloat((R=l==null?void 0:l.data)==null?void 0:R.remainAdvance)||0,A=parseFloat((W=(U=l==null?void 0:l.data)==null?void 0:U.QuarterlyRebates[0])==null?void 0:W.rebates_amt)||0,P=parseFloat((L=l==null?void 0:l.data)==null?void 0:L.arrearPayableAmt)||0;const x=()=>{var c,m,N,D;let r=0;return((c=i.values)==null?void 0:c.paymentType)=="isFullPayment"&&(r=w-_-A),((m=i.values)==null?void 0:m.paymentType)=="isArrearPayment"&&(r=P-_),((N=i.values)==null?void 0:N.paymentType)=="isPartPayment"&&(r=parseFloat((D=i.values)==null?void 0:D.paidAmount)||0),r},q=()=>{var r,c,m,N,D,k,z;return((r=l==null?void 0:l.data)==null?void 0:r.totalInterestPenalty)>0&&((c=i.values)==null?void 0:c.paymentType)==="isFullPayment"?Math.round(x()-((m=l==null?void 0:l.data)==null?void 0:m.total_exempted_general_tax)||0):((N=i.values)==null?void 0:N.paymentType)=="isArrearPayment"?Math.round(x()-parseFloat((D=l==null?void 0:l.data)==null?void 0:D.arrear_exempted_general_tax)||0):((k=i.values)==null?void 0:k.paymentType)=="isFullPayment"?Math.round(x()-parseFloat((z=l==null?void 0:l.data)==null?void 0:z.total_exempted_general_tax)||0):Math.round(x()||0)},J=()=>{var r,c,m;return((r=l==null?void 0:l.data)==null?void 0:r.totalInterestPenalty)>0&&((c=i.values)==null?void 0:c.paymentType)==="isFullPayment"?Math.round(w):((m=i.values)==null?void 0:m.paymentType)=="isArrearPayment"?Math.round(P):Math.round(x()||0)};Pe.useEffect(()=>{var r;((r=i.values)==null?void 0:r.paymentType)=="paidAmount"&&x()},[(O=i.values)==null?void 0:O.paidAmount]);const Z=()=>{var r;return!(h!=null&&h.latitude)&&!(h!=null&&h.longitude)?e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("h1",{className:"text-center text-red-600 text-xs font-bold",children:"Please Wait While We Fetch Your Location..."})}):a?y>=t&&I>=t&&E>=t&&f>=t?((r=l==null?void 0:l.data)==null?void 0:r.payableAmt)>0?e.jsx(Ue,{formik:i,data:l,calculateActualAmount:x,PayNow:q,payableAmt:w,advanceAmount:_,rebateAmount:A,arrearPayableAmt:P,ButtonAomunt:J}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>u("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Payment Already Done"})}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>window.location.reload(),className:"text-red-500 border text-sm text-center border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"You are inside the 50 meter radius of zonal office, you can't make payment"})}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>u("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Please enable location to proceed with payment"})})};return F?e.jsx(ue,{}):e.jsxs(ve,{title:"Demand Details",children:[g.isLoading&&e.jsx(Fe,{}),e.jsx("div",{className:"flex flex-col h-full py-3 px-4",children:e.jsxs("div",{className:"flex flex-col flex-grow",children:[e.jsx(Me,{data:l,permissionResult:v}),e.jsx(Be,{data:l}),e.jsx(Se,{data:l}),(Y=(Q=s==null?void 0:s.permittedWard)==null?void 0:Q.map(r=>r==null?void 0:r.ward_name))!=null&&Y.includes((G=(H=l==null?void 0:l.data)==null?void 0:H.basicDetails)==null?void 0:G.ward_no)?Z():e.jsx("div",{className:"flex justify-center py-6",children:e.jsxs("button",{onClick:()=>u("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:["You are not authorized to make payment for this ward no (",(X=(V=l==null?void 0:l.data)==null?void 0:V.basicDetails)==null?void 0:X.ward_no,")"]})})]})})]})}export{cs as default};
