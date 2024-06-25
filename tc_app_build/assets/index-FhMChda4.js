import{j as e,b as K,a as X,p as V,S as k,Q as W,f as ee}from"./index-oMCNvfzY.js";import{u as se,d as re,h as le,f as ne,r as te}from"./router-Gz5zDwiC.js";import{u as ae}from"./formik.esm--kcEIyis.js";import{c as oe,a as N}from"./index.esm-R3GYZtbq.js";import{P as ce}from"./index-gpvjJkSB.js";import{O as xe}from"./OverLayLoader-fww_W-DF.js";import{r as C}from"./tailwind-I_6OOYa1.js";import{F as ie}from"./FormProvider-Z7kESPTC.js";import{T as m}from"./TextField-8elm19wF.js";import{S as J}from"./SelectField-S88D-pNO.js";import"./index-iyheVW_q.js";import{u as de}from"./usePathWisePermission-pTd0-uXC.js";import{U as me}from"./useSaveLocation-2APiXcsv.js";import"./reactQuery-jbZnqRwH.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-lPgvryBG.js";import"./reactIcons-3AhG4mX-.js";import"./headlessui-KvrvKpJj.js";import"./module-PgHPULbe.js";import"./customInputValidation-8tSUGdUh.js";function he({data:s,permissionResult:a}){var g,r,y,v,t,E,x,I,h,T,_,w,P,D,l,c,i,d,b,p,j,f,u;return e.jsx(C.Card,{children:e.jsxs("div",{className:"px-4 py-6",children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),e.jsx("h1",{className:"text-sm",children:(r=(g=s==null?void 0:s.data)==null?void 0:g.basicDetails)==null?void 0:r.holding_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(v=(y=s==null?void 0:s.data)==null?void 0:y.basicDetails)==null?void 0:v.property_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),e.jsx("h1",{className:"text-sm",children:(E=(t=s==null?void 0:s.data)==null?void 0:t.basicDetails)==null?void 0:E.owner_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name (In Marathi):"}),e.jsx("h1",{className:"text-sm",children:((I=(x=s==null?void 0:s.data)==null?void 0:x.basicDetails)==null?void 0:I.owner_name_marathi)||"N/A"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant Name:"}),e.jsx("h1",{className:"text-sm",children:(T=(h=s==null?void 0:s.data)==null?void 0:h.basicDetails)==null?void 0:T.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm",children:(w=(_=s==null?void 0:s.data)==null?void 0:_.basicDetails)==null?void 0:w.prop_address})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),e.jsx("h1",{className:"text-sm",children:(D=(P=s==null?void 0:s.data)==null?void 0:P.basicDetails)==null?void 0:D.zone_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("h1",{className:"text-sm",children:(c=(l=s==null?void 0:s.data)==null?void 0:l.basicDetails)==null?void 0:c.ward_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type:"}),e.jsx("h1",{className:"text-sm",children:(d=(i=s==null?void 0:s.data)==null?void 0:i.basicDetails)==null?void 0:d.ownership_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property Type:"}),e.jsx("h1",{className:"text-sm",children:(p=(b=s==null?void 0:s.data)==null?void 0:b.basicDetails)==null?void 0:p.property_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Is-Armed-Force:"}),e.jsx("h1",{className:"text-sm",children:(j=s==null?void 0:s.data)!=null&&j.isSingleManArmedForce?"Yes":"No"})]})]}),e.jsx("div",{className:"my-3 border-b-2"}),(a==null?void 0:a.read)&&e.jsx("div",{className:"grid grid-cols-1 gap-2 items-center justify-center text-center",children:e.jsx("a",{href:"/property/safform/re/".concat((u=(f=s==null?void 0:s.data)==null?void 0:f.basicDetails)==null?void 0:u.id),children:e.jsx(C.Button,{variant:"outlined",size:"sm",color:"blue",fullWidth:!0,className:"p-1.5 text-[12px] capitalize",children:"Survey Old Property"})})})]})})}function be({data:s}){var a,g;return e.jsx(C.Card,{className:"mt-4 w-full",children:e.jsxs(C.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Demand List"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Financial Year :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:(g=(a=s==null?void 0:s.data)==null?void 0:a.demandList)==null?void 0:g.map((r,y)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.fyear}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.light_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.total_tax})]},y))})]})})]})})}function pe({data:s}){var a,g,r,y,v,t,E,x,I,h,T,_,w,P,D,l,c,i,d,b,p,j,f,u,A,F,q,B,M,S,R,U,O,L,Q,n,H,G;return e.jsx(C.Card,{className:"mt-4 w-full",children:e.jsxs(C.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Grand Total Tax"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Interest"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(g=(a=s==null?void 0:s.data)==null?void 0:a.grandTaxes)==null?void 0:g.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(y=(r=s==null?void 0:s.data)==null?void 0:r.grandTaxes)==null?void 0:y.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t=(v=s==null?void 0:s.data)==null?void 0:v.grandTaxes)==null?void 0:t.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(x=(E=s==null?void 0:s.data)==null?void 0:E.grandTaxes)==null?void 0:x.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(h=(I=s==null?void 0:s.data)==null?void 0:I.grandTaxes)==null?void 0:h.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(_=(T=s==null?void 0:s.data)==null?void 0:T.grandTaxes)==null?void 0:_.cleanliness_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(P=(w=s==null?void 0:s.data)==null?void 0:w.grandTaxes)==null?void 0:P.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(l=(D=s==null?void 0:s.data)==null?void 0:D.grandTaxes)==null?void 0:l.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(i=(c=s==null?void 0:s.data)==null?void 0:c.grandTaxes)==null?void 0:i.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(b=(d=s==null?void 0:s.data)==null?void 0:d.grandTaxes)==null?void 0:b.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(j=(p=s==null?void 0:s.data)==null?void 0:p.grandTaxes)==null?void 0:j.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(u=(f=s==null?void 0:s.data)==null?void 0:f.grandTaxes)==null?void 0:u.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(F=(A=s==null?void 0:s.data)==null?void 0:A.grandTaxes)==null?void 0:F.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(B=(q=s==null?void 0:s.data)==null?void 0:q.grandTaxes)==null?void 0:B.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(S=(M=s==null?void 0:s.data)==null?void 0:M.grandTaxes)==null?void 0:S.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(U=(R=s==null?void 0:s.data)==null?void 0:R.grandTaxes)==null?void 0:U.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(L=(O=s==null?void 0:s.data)==null?void 0:O.grandTaxes)==null?void 0:L.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(n=(Q=s==null?void 0:s.data)==null?void 0:Q.grandTaxes)==null?void 0:n.monthlyPenalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(G=(H=s==null?void 0:s.data)==null?void 0:H.grandTaxes)==null?void 0:G.total_tax})]})})]})})]})})}const Y=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"},{id:5,label:"NEFT",value:"NEFT"}],je=[{id:1,label:"Full Payment",value:"isFullPayment"},{id:2,label:"Arrear Amount",value:"isArrearPayment"},{id:3,label:"Part Payment",value:"isPartPayment"}];function Ne({data:s,formik:a,calculateActualAmount:g,PayNow:r}){var y,v,t,E,x,I,h,T,_,w,P,D,l,c,i,d,b,p,j,f,u,A,F,q,B,M,S,R,U,O,L,Q,n,H,G,$,z;return e.jsx(C.Card,{className:"mt-4 w-full",children:e.jsxs(C.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Payment Action"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold ",children:"* Total Arrear Amount -:"})}),e.jsx("div",{children:(y=s==null?void 0:s.data)!=null&&y.isSingleManArmedForce||(v=s==null?void 0:s.data)!=null&&v.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(t=s==null?void 0:s.data)==null?void 0:t.arrear," - ₹",(E=s==null?void 0:s.data)==null?void 0:E.arrear_exempted_general_tax," = ₹"," ",((x=s==null?void 0:s.data)==null?void 0:x.arrear)-((I=s==null?void 0:s.data)==null?void 0:I.arrear_exempted_general_tax)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-red-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(h=s==null?void 0:s.data)==null?void 0:h.arrear]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Current Amount -:"})}),e.jsx("div",{children:(T=s==null?void 0:s.data)!=null&&T.isSingleManArmedForce||(_=s==null?void 0:s.data)!=null&&_.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(w=s==null?void 0:s.data)==null?void 0:w.currentDemand," - ₹",(P=s==null?void 0:s.data)==null?void 0:P.current_exempted_general_tax," = ₹"," ",parseFloat(((D=s==null?void 0:s.data)==null?void 0:D.currentDemand)-((l=s==null?void 0:s.data)==null?void 0:l.current_exempted_general_tax)).toFixed(2)," "]}),e.jsx("h1",{className:"font-semibold text-[11px] text-cyan-500",children:"(General Tax Exemption)"})]}):e.jsx(e.Fragment,{children:e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(c=s==null?void 0:s.data)==null?void 0:c.currentDemand]})})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Interest Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold ",children:[e.jsxs("span",{className:"text-red-500",children:["₹ ",(i=s==null?void 0:s.data)==null?void 0:i.totalInterestPenalty]})," ",e.jsxs("small",{children:["( Interest on Arrear ₹ ",(d=s==null?void 0:s.data)==null?void 0:d.arrearInterest," + Previous Interest ₹ ",(b=s==null?void 0:s.data)==null?void 0:b.previousInterest,")"]})]})}),e.jsx("div",{className:"my-3 border-b-2 col-span-2"}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Payable Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[(p=s==null?void 0:s.data)!=null&&p.isSingleManArmedForce||(j=s==null?void 0:s.data)!=null&&j.isMobileTower?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(f=s==null?void 0:s.data)==null?void 0:f.payableAmt," - ₹",(u=s==null?void 0:s.data)==null?void 0:u.total_exempted_general_tax," = ₹"," ",parseFloat(((A=s==null?void 0:s.data)==null?void 0:A.payableAmt)-((F=s==null?void 0:s.data)==null?void 0:F.total_exempted_general_tax)).toFixed(2)," "]})," "]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(q=s==null?void 0:s.data)==null?void 0:q.payableAmt]})," "]}),e.jsx("small",{children:"(Arrear + Current + Interest)"})," ",e.jsx("div",{children:e.jsxs("h1",{className:"text-[10px] text-yellow-800",children:["( If You Pay Full Amount Before"," ",(M=(B=s==null?void 0:s.data)==null?void 0:B.QuarterlyRebates[0])==null?void 0:M.upto_date,", Then"," ",(R=(S=s==null?void 0:s.data)==null?void 0:S.QuarterlyRebates[0])==null?void 0:R.rebates," % Of General Tax For Current Year Will Be Waived. )"]})}),((U=s==null?void 0:s.data)==null?void 0:U.isSingleManArmedForce)||((O=s==null?void 0:s.data)==null?void 0:O.isMobileTower)&&e.jsxs("small",{className:"text-blue-500",children:[" ","- (",(L=s==null?void 0:s.data)==null?void 0:L.total_exempted_general_tax," General Tax Exemption)"]})]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Advance Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(Q=s==null?void 0:s.data)==null?void 0:Q.remainAdvance]})," ",e.jsx("small",{className:"text-green-500",children:"(This Is An Adjustable Amount From Total Payment Value.)"})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(ie,{formik:a,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"mb-4",children:e.jsxs(J,{label:"Payment Mode",name:"paymentMode",formik:a,children:[e.jsx("option",{value:"",children:"select"}),Y==null?void 0:Y.map(o=>e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id))]})}),e.jsx("div",{children:e.jsxs(J,{label:"Payment Option",name:"paymentType",formik:a,type:"select",children:[e.jsx("option",{value:"",children:"select"}),je.map(o=>{var Z;return((Z=s==null?void 0:s.data)==null?void 0:Z.arrear)>0?e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id):o.value!="isArrearPayment"&&e.jsx("option",{value:o==null?void 0:o.value,children:o==null?void 0:o.label},o==null?void 0:o.id)})]})})]}),((n=a.values)==null?void 0:n.paymentMode)==="CHEQUE"?e.jsx(ye,{formik:a}):((H=a.values)==null?void 0:H.paymentMode)==="DD"?e.jsx(fe,{formik:a}):((G=a.values)==null?void 0:G.paymentMode)==="NEFT"?e.jsx(ue,{formik:a}):null,(($=a.values)==null?void 0:$.paymentType)==="isPartPayment"&&e.jsx("div",{className:"",children:e.jsx(m,{label:"Part Payment Amount",name:"paidAmount",type:"number",formik:a,onInput:((z=a.values)==null?void 0:z.paymentType)==="isPartPayment"?o=>{o.target.value=Math.max(0,parseInt(o.target.value)).toString().slice(0,10)}:null})}),e.jsx("div",{className:"flex justify-center mt-2",children:e.jsxs(C.Button,{type:"submit",color:"indigo",disabled:!a.isValid,children:["Submit ₹ ",r()]})})]})]})})}const ye=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"Cheque No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Cheque Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload Cheque Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),fe=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"DD No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"DD Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload DD Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),ue=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"NEFT No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"NEFT Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Upload NEFT Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),ge=oe().shape({paymentMode:N().required("Payment Mode is required"),paymentType:N().required("Payment Type is required"),paidAmount:N().when(["paymentType"],{is:s=>s=="isPartPayment",then:()=>N().required("Part Payment Amount is required")}),chequeNo:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Cheque No is required")}),chequeDate:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Cheque Date is required")}),neftImage:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Cheque Upload is required")}),bankName:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Bank Name is required")}),branchName:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Branch Name is required")}),paymentRemark:N().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>N().required("Payment Remark is required")})});function We(){var _,w,P,D;const s=se(),{saveLocation:a}=me();re.useState(0);const g=K({}),{id:r}=le(),{pathname:y}=ne(),{result:v}=de((w=(_=y==null?void 0:y.split("/"))==null?void 0:_.slice(0,-1))==null?void 0:w.join("/")),{data:t,isLoading:E}=X({api:V.getDemandDetails,config:{propId:r},value:r,options:{enabled:!!r}}),x=ae({enableReinitialize:!0,initialValues:{paymentMode:"",paymentType:"",chequeNo:"",chequeDate:"",bankName:"",branchName:"",paymentRemark:"",neftImage:"",paidAmount:""},validationSchema:ge,onSubmit:async l=>{k.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+T(),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(c=>{c.isConfirmed&&I(l)}).catch(c=>{var i,d;W.error((d=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:d.message)})}}),I=async l=>{var i,d,b,p,j,f,u,A,F,q,B,M,S,R,U,O,L,Q;let c={};if((l==null?void 0:l.paymentMode)==="ONLINE"){c={propId:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,paidAmount:h(),deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/property/payment-history"};const n=await g.mutateAsync({api:V.iciciPayment,data:c});(i=n==null?void 0:n.data)!=null&&i.status?(a({actionType:"PropertyPaymentOnline",refId:(b=(d=n==null?void 0:n.data)==null?void 0:d.data)==null?void 0:b.requestId,moduleId:1}),W.success((p=n==null?void 0:n.data)==null?void 0:p.message),window.location.href=(f=(j=n==null?void 0:n.data)==null?void 0:j.data)==null?void 0:f.encryptUrl,x.resetForm()):W.error((u=n==null?void 0:n.data)==null?void 0:u.message)}else{(l==null?void 0:l.paymentMode)==="CHEQUE"||(l==null?void 0:l.paymentMode)==="DD"||(l==null?void 0:l.paymentMode)==="NEFT"?c={id:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,chequeNo:l==null?void 0:l.chequeNo,chequeDate:l==null?void 0:l.chequeDate,bankName:l==null?void 0:l.bankName,branchName:l==null?void 0:l.branchName,paymentRemark:l==null?void 0:l.paymentRemark,neftImage:l==null?void 0:l.neftImage,paidAmount:h(),deviceType:"android"}:c={id:r,paymentMode:l==null?void 0:l.paymentMode,paymentType:l==null?void 0:l.paymentType,paidAmount:h(),deviceType:"android"};try{const n=await g.mutateAsync({api:V.holdingPayment,data:c});(A=n==null?void 0:n.data)!=null&&A.status?(a({actionType:"successPropertyPayment",refId:(q=(F=n==null?void 0:n.data)==null?void 0:F.data)==null?void 0:q.transactionId,moduleId:1}),W.success((B=n==null?void 0:n.data)==null?void 0:B.message),s("/amc-app/property/payment-response?response=".concat((S=(M=n==null?void 0:n.data)==null?void 0:M.data)==null?void 0:S.transactionId,"&tranNo=").concat((U=(R=n==null?void 0:n.data)==null?void 0:R.data)==null?void 0:U.TransactionNo),{replace:!0}),x.resetForm()):(W.error((O=n==null?void 0:n.data)==null?void 0:O.message),a({actionType:"failedPropertyPayment",refId:r,moduleId:1}))}catch(n){W.error((Q=(L=n==null?void 0:n.response)==null?void 0:L.data)==null?void 0:Q.message)}}},h=()=>{var c,i,d,b,p,j,f,u,A,F;let l=0;return((c=x.values)==null?void 0:c.paymentType)=="isFullPayment"&&(l=parseFloat((i=t==null?void 0:t.data)==null?void 0:i.payableAmt)-parseFloat((d=t==null?void 0:t.data)==null?void 0:d.remainAdvance)-parseFloat((p=(b=t==null?void 0:t.data)==null?void 0:b.QuarterlyRebates[0])==null?void 0:p.rebates_amt)),((j=x.values)==null?void 0:j.paymentType)=="isArrearPayment"&&(l=parseFloat((f=t==null?void 0:t.data)==null?void 0:f.arrearPayableAmt)-parseFloat((u=t==null?void 0:t.data)==null?void 0:u.remainAdvance)),((A=x.values)==null?void 0:A.paymentType)=="isPartPayment"&&(l=parseFloat((F=x.values)==null?void 0:F.paidAmount)),l},T=()=>{var l,c,i,d,b,p,j;return((l=t==null?void 0:t.data)==null?void 0:l.totalInterestPenalty)>0&&((c=x.values)==null?void 0:c.paymentType)==="isFullPayment"?Math.round(h()-((i=t==null?void 0:t.data)==null?void 0:i.total_exempted_general_tax)||0):((d=x.values)==null?void 0:d.paymentType)=="isArrearPayment"?Math.round(h()-parseFloat((b=t==null?void 0:t.data)==null?void 0:b.arrear_exempted_general_tax)||0):((p=x.values)==null?void 0:p.paymentType)=="isFullPayment"?Math.round(h()-parseFloat((j=t==null?void 0:t.data)==null?void 0:j.total_exempted_general_tax)||0):Math.round(h()||0)};return te.useEffect(()=>{var l;((l=x.values)==null?void 0:l.paymentType)=="paidAmount"&&h()},[(P=x.values)==null?void 0:P.paidAmount]),E?e.jsx(ee,{}):e.jsxs(ce,{title:"Demand Details",children:[g.isLoading&&e.jsx(xe,{}),e.jsx("div",{className:"flex flex-col h-full py-3 px-4",children:e.jsxs("div",{className:"flex flex-col flex-grow",children:[e.jsx(he,{data:t,permissionResult:v}),e.jsx(be,{data:t}),e.jsx(pe,{data:t}),((D=t==null?void 0:t.data)==null?void 0:D.payableAmt)>0?e.jsx(Ne,{formik:x,data:t,calculateActualAmount:h,PayNow:T}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>s("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Payment Already Done"})})]})})]})}export{We as default};
