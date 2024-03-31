import{j as e,b as X,a as k,p as G,S as ee,Q as H,f as se}from"./index-kgqcLUgD.js";import{u as re,d as le,h as ne,f as te,r as ae}from"./router-g9NwwHut.js";import{u as oe}from"./formik.esm-MEJnthxH.js";import{c as ce,a as f}from"./index.esm-lGQm42K_.js";import{P as xe}from"./index-o0AMy7sT.js";import{O as de}from"./OverLayLoader-pmnZGXIX.js";import{r as I}from"./tailwind-xMhOhnt0.js";import{F as ie}from"./FormProvider-3lUJpTxm.js";import{T as m}from"./TextField-lqCZRND9.js";import{S as K}from"./SelectField-y3joe3Vf.js";import"./index-KJUlVKah.js";import{u as me}from"./usePathWisePermission-u64OcEAE.js";import{U as he}from"./useSaveLocation-nXoF36lC.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./module-JpL022rF.js";function be({data:s,permissionResult:a}){var g,r,u,A,t,F,x,v,h,T,_,w,P,D,l,c,d,i,b,p,j,N,y;return e.jsx(I.Card,{children:e.jsxs("div",{className:"px-4 py-6",children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),e.jsx("h1",{className:"text-sm",children:(r=(g=s==null?void 0:s.data)==null?void 0:g.basicDetails)==null?void 0:r.holding_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(A=(u=s==null?void 0:s.data)==null?void 0:u.basicDetails)==null?void 0:A.property_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),e.jsx("h1",{className:"text-sm",children:(F=(t=s==null?void 0:s.data)==null?void 0:t.basicDetails)==null?void 0:F.owner_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name (In Marathi):"}),e.jsx("h1",{className:"text-sm",children:((v=(x=s==null?void 0:s.data)==null?void 0:x.basicDetails)==null?void 0:v.owner_name_marathi)||"N/A"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant Name:"}),e.jsx("h1",{className:"text-sm",children:(T=(h=s==null?void 0:s.data)==null?void 0:h.basicDetails)==null?void 0:T.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm",children:(w=(_=s==null?void 0:s.data)==null?void 0:_.basicDetails)==null?void 0:w.prop_address})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),e.jsx("h1",{className:"text-sm",children:(D=(P=s==null?void 0:s.data)==null?void 0:P.basicDetails)==null?void 0:D.zone_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("h1",{className:"text-sm",children:(c=(l=s==null?void 0:s.data)==null?void 0:l.basicDetails)==null?void 0:c.ward_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type:"}),e.jsx("h1",{className:"text-sm",children:(i=(d=s==null?void 0:s.data)==null?void 0:d.basicDetails)==null?void 0:i.ownership_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property Type:"}),e.jsx("h1",{className:"text-sm",children:(p=(b=s==null?void 0:s.data)==null?void 0:b.basicDetails)==null?void 0:p.property_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Is-Armed-Force:"}),e.jsx("h1",{className:"text-sm",children:(j=s==null?void 0:s.data)!=null&&j.isSingleManArmedForce?"Yes":"No"})]})]}),e.jsx("div",{className:"my-3 border-b-2"}),(a==null?void 0:a.read)&&e.jsx("div",{className:"grid grid-cols-1 gap-2 items-center justify-center text-center",children:e.jsx("a",{href:"/property/holdingPropertyDetails/".concat((y=(N=s==null?void 0:s.data)==null?void 0:N.basicDetails)==null?void 0:y.id),children:e.jsx(I.Button,{variant:"outlined",size:"sm",color:"blue",fullWidth:!0,className:"p-1.5 text-[12px] capitalize",children:"Holding Details"})})})]})})}function pe({data:s}){var a,g;return e.jsx(I.Card,{className:"mt-4 w-full",children:e.jsxs(I.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Demand List"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Financial Year :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:(g=(a=s==null?void 0:s.data)==null?void 0:a.demandList)==null?void 0:g.map((r,u)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.fyear}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.light_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.total_tax})]},u))})]})})]})})}function je({data:s}){var a,g,r,u,A,t,F,x,v,h,T,_,w,P,D,l,c,d,i,b,p,j,N,y,E,q,C,B,M,S,U,O,R,L,W,n,Q,V;return e.jsx(I.Card,{className:"mt-4 w-full",children:e.jsxs(I.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Grand Total Tax"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Interest"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(g=(a=s==null?void 0:s.data)==null?void 0:a.grandTaxes)==null?void 0:g.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(u=(r=s==null?void 0:s.data)==null?void 0:r.grandTaxes)==null?void 0:u.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t=(A=s==null?void 0:s.data)==null?void 0:A.grandTaxes)==null?void 0:t.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(x=(F=s==null?void 0:s.data)==null?void 0:F.grandTaxes)==null?void 0:x.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(h=(v=s==null?void 0:s.data)==null?void 0:v.grandTaxes)==null?void 0:h.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(_=(T=s==null?void 0:s.data)==null?void 0:T.grandTaxes)==null?void 0:_.cleanliness_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(P=(w=s==null?void 0:s.data)==null?void 0:w.grandTaxes)==null?void 0:P.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(l=(D=s==null?void 0:s.data)==null?void 0:D.grandTaxes)==null?void 0:l.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d=(c=s==null?void 0:s.data)==null?void 0:c.grandTaxes)==null?void 0:d.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(b=(i=s==null?void 0:s.data)==null?void 0:i.grandTaxes)==null?void 0:b.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(j=(p=s==null?void 0:s.data)==null?void 0:p.grandTaxes)==null?void 0:j.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(y=(N=s==null?void 0:s.data)==null?void 0:N.grandTaxes)==null?void 0:y.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(q=(E=s==null?void 0:s.data)==null?void 0:E.grandTaxes)==null?void 0:q.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(B=(C=s==null?void 0:s.data)==null?void 0:C.grandTaxes)==null?void 0:B.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(S=(M=s==null?void 0:s.data)==null?void 0:M.grandTaxes)==null?void 0:S.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(O=(U=s==null?void 0:s.data)==null?void 0:U.grandTaxes)==null?void 0:O.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(L=(R=s==null?void 0:s.data)==null?void 0:R.grandTaxes)==null?void 0:L.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(n=(W=s==null?void 0:s.data)==null?void 0:W.grandTaxes)==null?void 0:n.monthlyPenalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(V=(Q=s==null?void 0:s.data)==null?void 0:Q.grandTaxes)==null?void 0:V.total_tax})]})})]})})]})})}const Y=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"},{id:5,label:"NEFT",value:"NEFT"}],Ne=[{id:1,label:"Full Payment",value:"isFullPayment"},{id:2,label:"Arrear Amount",value:"isArrearPayment"},{id:3,label:"Part Payment",value:"isPartPayment"}];function ye({data:s,formik:a,calculateActualAmount:g,PayNow:r}){var u,A,t,F,x,v,h,T,_,w,P,D,l,c,d,i,b,p,j,N,y,E,q,C,B,M,S,U,O,R,L,W,n,Q,V,$,z,Z;return e.jsx(I.Card,{className:"mt-4 w-full",children:e.jsxs(I.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Payment Action"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold ",children:"* Total Arrear Amount -:"})}),e.jsx("div",{children:(u=s==null?void 0:s.data)!=null&&u.isSingleManArmedForce?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(A=s==null?void 0:s.data)==null?void 0:A.arrear," - ₹",(t=s==null?void 0:s.data)==null?void 0:t.arrear_exempted_general_tax," = ₹"," ",((F=s==null?void 0:s.data)==null?void 0:F.arrear)-((x=s==null?void 0:s.data)==null?void 0:x.arrear_exempted_general_tax)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-red-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(v=s==null?void 0:s.data)==null?void 0:v.arrear]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Current Amount -:"})}),e.jsx("div",{children:(h=s==null?void 0:s.data)!=null&&h.isSingleManArmedForce?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(T=s==null?void 0:s.data)==null?void 0:T.currentDemand," - ₹",(_=s==null?void 0:s.data)==null?void 0:_.current_exempted_general_tax," = ₹"," ",((w=s==null?void 0:s.data)==null?void 0:w.currentDemand)-((P=s==null?void 0:s.data)==null?void 0:P.current_exempted_general_tax)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-cyan-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(D=s==null?void 0:s.data)==null?void 0:D.currentDemand]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Interest Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold ",children:[e.jsxs("span",{className:"text-red-500",children:["₹ ",(l=s==null?void 0:s.data)==null?void 0:l.totalInterestPenalty]})," ",e.jsxs("small",{children:["( Interest on Arrear ₹ ",(c=s==null?void 0:s.data)==null?void 0:c.arrearInterest," + Previous Interest ₹ ",(d=s==null?void 0:s.data)==null?void 0:d.previousInterest,")"]})]})}),((i=s==null?void 0:s.data)==null?void 0:i.totalInterestPenalty)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-span-1"}),e.jsx("div",{className:"col-span-1",children:e.jsx("h1",{className:"text-sm font-semibold ",children:e.jsxs("small",{className:"text-green-500",children:["( If You Pay Full Amount Before"," ",(p=(b=s==null?void 0:s.data)==null?void 0:b.rebates[0])==null?void 0:p.effective_upto,", Then"," ",(N=(j=s==null?void 0:s.data)==null?void 0:j.rebates[0])==null?void 0:N.rebates," % Of Interest On The Property Will Be Waived. )"]})})})]}),e.jsx("div",{className:"my-3 border-b-2 col-span-2"}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Payable Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[(y=s==null?void 0:s.data)!=null&&y.isSingleManArmedForce?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(E=s==null?void 0:s.data)==null?void 0:E.payableAmt," - ₹",(q=s==null?void 0:s.data)==null?void 0:q.total_exempted_general_tax," = ₹"," ",((C=s==null?void 0:s.data)==null?void 0:C.payableAmt)-((B=s==null?void 0:s.data)==null?void 0:B.total_exempted_general_tax)," "]})," "]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(M=s==null?void 0:s.data)==null?void 0:M.payableAmt]})," "]}),e.jsx("small",{children:"(Arrear + Current + Interest)"})," ",((S=s==null?void 0:s.data)==null?void 0:S.totalInterestPenalty)>0&&e.jsxs("small",{className:"text-green-500",children:["(",(U=s==null?void 0:s.data)==null?void 0:U.payableAmt," -"," ",(R=(O=s==null?void 0:s.data)==null?void 0:O.rebates[0])==null?void 0:R.rebates_amt,")"]}),((L=s==null?void 0:s.data)==null?void 0:L.isSingleManArmedForce)&&e.jsxs("small",{className:"text-blue-500",children:[" ","- (",(W=s==null?void 0:s.data)==null?void 0:W.total_exempted_general_tax," General Tax Exemption)"]})]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Advance Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(n=s==null?void 0:s.data)==null?void 0:n.remainAdvance]})," ",e.jsx("small",{className:"text-green-500",children:"(This Is An Adjustable Amount From Total Payment Value.)"})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(ie,{formik:a,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"mb-4",children:e.jsxs(K,{label:"Payment Mode",name:"paymentMode",formik:a,children:[e.jsx("option",{value:"",children:"select"}),Y==null?void 0:Y.map(o=>e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id))]})}),e.jsx("div",{children:e.jsxs(K,{label:"Payment Option",name:"paymentType",formik:a,type:"select",children:[e.jsx("option",{value:"",children:"select"}),Ne.map(o=>{var J;return((J=s==null?void 0:s.data)==null?void 0:J.arrear)>0?e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id):o.value!="isArrearPayment"&&e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id)})]})})]}),((Q=a.values)==null?void 0:Q.paymentMode)==="CHEQUE"?e.jsx(fe,{formik:a}):((V=a.values)==null?void 0:V.paymentMode)==="DD"?e.jsx(ue,{formik:a}):(($=a.values)==null?void 0:$.paymentMode)==="NEFT"?e.jsx(ge,{formik:a}):null,((z=a.values)==null?void 0:z.paymentType)==="isPartPayment"&&e.jsx("div",{className:"",children:e.jsx(m,{label:"Part Payment Amount",name:"paidAmount",type:"number",formik:a,onInput:((Z=a.values)==null?void 0:Z.paymentType)==="isPartPayment"?o=>{o.target.value=Math.max(0,parseInt(o.target.value)).toString().slice(0,10)}:null})}),e.jsx("div",{className:"flex justify-center mt-2",children:e.jsxs(I.Button,{type:"submit",color:"indigo",disabled:!a.isValid,children:["Submit ₹ ",r()]})})]})]})})}const fe=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"Cheque No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Cheque Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload Cheque Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),ue=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"DD No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"DD Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload DD Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),ge=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"NEFT No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"NEFT Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload NEFT Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),Te=ce().shape({paymentMode:f().required("Payment Mode is required"),paymentType:f().required("Payment Type is required"),paidAmount:f().when(["paymentType"],{is:s=>s=="isPartPayment",then:()=>f().required("Part Payment Amount is required")}),chequeNo:f().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>f().required("Cheque No is required")}),chequeDate:f().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>f().required("Cheque Date is required")}),neftImage:f().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>f().required("Cheque Upload is required")}),bankName:f().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>f().required("Bank Name is required")}),branchName:f().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>f().required("Branch Name is required")}),paymentRemark:f().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>f().required("Payment Remark is required")})});function He(){var _,w,P,D;const s=re(),{saveLocation:a}=he();le.useState(0);const g=X({}),{id:r}=ne(),{pathname:u}=te(),{result:A}=me((w=(_=u==null?void 0:u.split("/"))==null?void 0:_.slice(0,-1))==null?void 0:w.join("/")),{data:t,isLoading:F}=k({api:G.getDemandDetails,config:{propId:r},value:r,options:{enabled:!!r}}),x=oe({enableReinitialize:!0,initialValues:{paymentMode:"",paymentType:"",chequeNo:"",chequeDate:"",bankName:"",branchName:"",paymentRemark:"",neftImage:"",paidAmount:""},validationSchema:Te,onSubmit:async l=>{ee.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+T(),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(c=>{c.isConfirmed&&v(l)}).catch(c=>{var d,i;H.error((i=(d=c==null?void 0:c.response)==null?void 0:d.data)==null?void 0:i.message)})}}),v=async l=>{var d,i,b,p,j,N,y,E,q,C,B,M,S,U,O,R,L,W;let c={};if((l==null?void 0:l.paymentMode)==="ONLINE"){c={propId:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,paidAmount:h(),deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/property/payment-history"};const n=await g.mutateAsync({api:G.iciciPayment,data:c});(d=n==null?void 0:n.data)!=null&&d.status?(a({actionType:"PropertyPaymentOnline",refId:(b=(i=n==null?void 0:n.data)==null?void 0:i.data)==null?void 0:b.requestId,moduleId:1}),H.success((p=n==null?void 0:n.data)==null?void 0:p.message),window.location.href=(N=(j=n==null?void 0:n.data)==null?void 0:j.data)==null?void 0:N.encryptUrl,x.resetForm()):H.error((y=n==null?void 0:n.data)==null?void 0:y.message)}else{(l==null?void 0:l.paymentMode)==="CHEQUE"||(l==null?void 0:l.paymentMode)==="DD"||(l==null?void 0:l.paymentMode)==="NEFT"?c={id:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,chequeNo:l==null?void 0:l.chequeNo,chequeDate:l==null?void 0:l.chequeDate,bankName:l==null?void 0:l.bankName,branchName:l==null?void 0:l.branchName,paymentRemark:l==null?void 0:l.paymentRemark,neftImage:l==null?void 0:l.neftImage,paidAmount:h(),deviceType:"android"}:c={id:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,paidAmount:h(),deviceType:"android"};try{const n=await g.mutateAsync({api:G.holdingPayment,data:c});(E=n==null?void 0:n.data)!=null&&E.status?(a({actionType:"successPropertyPayment",refId:(C=(q=n==null?void 0:n.data)==null?void 0:q.data)==null?void 0:C.transactionId,moduleId:1}),H.success((B=n==null?void 0:n.data)==null?void 0:B.message),s("/amc-app/property/payment-response?response=".concat((S=(M=n==null?void 0:n.data)==null?void 0:M.data)==null?void 0:S.transactionId,"&tranNo=").concat((O=(U=n==null?void 0:n.data)==null?void 0:U.data)==null?void 0:O.TransactionNo),{replace:!0}),x.resetForm()):(H.error((R=n==null?void 0:n.data)==null?void 0:R.message),a({actionType:"failedPropertyPayment",refId:r,moduleId:1}))}catch(n){H.error((W=(L=n==null?void 0:n.response)==null?void 0:L.data)==null?void 0:W.message)}}},h=()=>{var c,d,i,b,p,j,N,y;let l=0;return((c=x.values)==null?void 0:c.paymentType)=="isFullPayment"&&(l=parseFloat((d=t==null?void 0:t.data)==null?void 0:d.payableAmt)-parseFloat((i=t==null?void 0:t.data)==null?void 0:i.remainAdvance)),((b=x.values)==null?void 0:b.paymentType)=="isArrearPayment"&&(l=parseFloat((p=t==null?void 0:t.data)==null?void 0:p.arrearPayableAmt)-parseFloat((j=t==null?void 0:t.data)==null?void 0:j.remainAdvance)),((N=x.values)==null?void 0:N.paymentType)=="isPartPayment"&&(l=parseFloat((y=x.values)==null?void 0:y.paidAmount)),l},T=()=>{var l,c,d,i,b,p,j,N,y;return((l=t==null?void 0:t.data)==null?void 0:l.totalInterestPenalty)>0&&((c=x.values)==null?void 0:c.paymentType)==="isFullPayment"?Math.round(h()-((i=(d=t==null?void 0:t.data)==null?void 0:d.rebates[0])==null?void 0:i.rebates_amt)-((b=t==null?void 0:t.data)==null?void 0:b.total_exempted_general_tax)||0):((p=x.values)==null?void 0:p.paymentType)=="isArrearPayment"?Math.round(h()-parseFloat((j=t==null?void 0:t.data)==null?void 0:j.arrear_exempted_general_tax)||0):((N=x.values)==null?void 0:N.paymentType)=="isFullPayment"?Math.round(h()-parseFloat((y=t==null?void 0:t.data)==null?void 0:y.total_exempted_general_tax)||0):Math.round(h()||0)};return ae.useEffect(()=>{var l;((l=x.values)==null?void 0:l.paymentType)=="paidAmount"&&h()},[(P=x.values)==null?void 0:P.paidAmount]),F?e.jsx(se,{}):e.jsxs(xe,{title:"Demand Details",children:[g.isLoading&&e.jsx(de,{}),e.jsx("div",{className:"flex flex-col h-full py-3 px-4",children:e.jsxs("div",{className:"flex flex-col flex-grow",children:[e.jsx(be,{data:t,permissionResult:A}),e.jsx(pe,{data:t}),e.jsx(je,{data:t}),((D=t==null?void 0:t.data)==null?void 0:D.payableAmt)>0?e.jsx(ye,{formik:x,data:t,calculateActualAmount:h,PayNow:T}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>s("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Payment Already Done"})})]})})]})}export{He as default};