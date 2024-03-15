import{j as e,b as G,a as Y,p as W,S as Z,Q as M,f as J}from"./index-kY_1vXrj.js";import{u as K,d as X,h as k,f as ee,r as se}from"./router-g9NwwHut.js";import{u as re}from"./formik.esm-MEJnthxH.js";import{c as te,a as y}from"./index.esm-lGQm42K_.js";import{P as le}from"./index-CK_pnLs4.js";import{O as ne}from"./OverLayLoader-SmXvaihr.js";import{r as v}from"./tailwind-xMhOhnt0.js";import{F as ae}from"./FormProvider-rxNuI5sC.js";import{T as x}from"./TextField-FKmRpgrx.js";import{S as z}from"./SelectField-ZfIKjb1a.js";import"./index-KJUlVKah.js";import{u as oe}from"./usePathWisePermission-LkOG6C84.js";import{U as de}from"./useSaveLocation-XCBhc87n.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./module-ZmhHPkNa.js";function ce({data:s,permissionResult:a}){var f,r,u,_,o,I,i,A,N,T,P,w,D,t,d,m,h,b,c,p,j,g;return e.jsx(v.Card,{children:e.jsxs("div",{className:"px-4 py-6",children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),e.jsx("h1",{className:"text-sm",children:(r=(f=s==null?void 0:s.data)==null?void 0:f.basicDetails)==null?void 0:r.holding_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(_=(u=s==null?void 0:s.data)==null?void 0:u.basicDetails)==null?void 0:_.property_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),e.jsx("h1",{className:"text-sm",children:(I=(o=s==null?void 0:s.data)==null?void 0:o.basicDetails)==null?void 0:I.owner_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name (In Marathi):"}),e.jsx("h1",{className:"text-sm",children:((A=(i=s==null?void 0:s.data)==null?void 0:i.basicDetails)==null?void 0:A.owner_name_marathi)||"N/A"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant Name:"}),e.jsx("h1",{className:"text-sm",children:(T=(N=s==null?void 0:s.data)==null?void 0:N.basicDetails)==null?void 0:T.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm",children:(w=(P=s==null?void 0:s.data)==null?void 0:P.basicDetails)==null?void 0:w.prop_address})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),e.jsx("h1",{className:"text-sm",children:(t=(D=s==null?void 0:s.data)==null?void 0:D.basicDetails)==null?void 0:t.zone_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("h1",{className:"text-sm",children:(m=(d=s==null?void 0:s.data)==null?void 0:d.basicDetails)==null?void 0:m.ward_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type:"}),e.jsx("h1",{className:"text-sm",children:(b=(h=s==null?void 0:s.data)==null?void 0:h.basicDetails)==null?void 0:b.ownership_type})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property Type:"}),e.jsx("h1",{className:"text-sm",children:(p=(c=s==null?void 0:s.data)==null?void 0:c.basicDetails)==null?void 0:p.property_type})]})]}),e.jsx("div",{className:"my-3 border-b-2"}),(a==null?void 0:a.read)&&e.jsx("div",{className:"grid grid-cols-1 gap-2 items-center justify-center text-center",children:e.jsx("a",{href:"/property/holdingPropertyDetails/".concat((g=(j=s==null?void 0:s.data)==null?void 0:j.basicDetails)==null?void 0:g.id),children:e.jsx(v.Button,{variant:"outlined",size:"sm",color:"blue",fullWidth:!0,className:"p-1.5 text-[12px] capitalize",children:"Holding Details"})})})]})})}function ie({data:s}){var a,f;return e.jsx(v.Card,{className:"mt-4 w-full",children:e.jsxs(v.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Demand List"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Financial Year :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:(f=(a=s==null?void 0:s.data)==null?void 0:a.demandList)==null?void 0:f.map((r,u)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.fyear}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.light_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.total_tax})]},u))})]})})]})})}function xe({data:s}){var a,f,r,u,_,o,I,i,A,N,T,P,w,D,t,d,m,h,b,c,p,j,g,q,C,E,F,n,B,S,U,O,R,L,l,Q,V,$;return e.jsx(v.Card,{className:"mt-4 w-full",children:e.jsxs(v.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Grand Total Tax"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Interest"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(f=(a=s==null?void 0:s.data)==null?void 0:a.grandTaxes)==null?void 0:f.general_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(u=(r=s==null?void 0:s.data)==null?void 0:r.grandTaxes)==null?void 0:u.road_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(o=(_=s==null?void 0:s.data)==null?void 0:_.grandTaxes)==null?void 0:o.firefighting_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(i=(I=s==null?void 0:s.data)==null?void 0:I.grandTaxes)==null?void 0:i.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(N=(A=s==null?void 0:s.data)==null?void 0:A.grandTaxes)==null?void 0:N.water_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(P=(T=s==null?void 0:s.data)==null?void 0:T.grandTaxes)==null?void 0:P.cleanliness_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(D=(w=s==null?void 0:s.data)==null?void 0:w.grandTaxes)==null?void 0:D.sewarage_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(d=(t=s==null?void 0:s.data)==null?void 0:t.grandTaxes)==null?void 0:d.tree_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(h=(m=s==null?void 0:s.data)==null?void 0:m.grandTaxes)==null?void 0:h.professional_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(c=(b=s==null?void 0:s.data)==null?void 0:b.grandTaxes)==null?void 0:c.tax1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(j=(p=s==null?void 0:s.data)==null?void 0:p.grandTaxes)==null?void 0:j.state_education_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(q=(g=s==null?void 0:s.data)==null?void 0:g.grandTaxes)==null?void 0:q.water_benefit}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(E=(C=s==null?void 0:s.data)==null?void 0:C.grandTaxes)==null?void 0:E.water_bill}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(n=(F=s==null?void 0:s.data)==null?void 0:F.grandTaxes)==null?void 0:n.sp_water_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(S=(B=s==null?void 0:s.data)==null?void 0:B.grandTaxes)==null?void 0:S.drain_cess}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(O=(U=s==null?void 0:s.data)==null?void 0:U.grandTaxes)==null?void 0:O.major_building}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(L=(R=s==null?void 0:s.data)==null?void 0:R.grandTaxes)==null?void 0:L.open_ploat_tax}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(Q=(l=s==null?void 0:s.data)==null?void 0:l.grandTaxes)==null?void 0:Q.monthlyPenalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:($=(V=s==null?void 0:s.data)==null?void 0:V.grandTaxes)==null?void 0:$.total_tax})]})})]})})]})})}const H=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"},{id:5,label:"NEFT",value:"NEFT"}],me=[{id:1,label:"Full Payment",value:"isFullPayment"},{id:2,label:"Arrear Amount",value:"isArrearPayment"},{id:3,label:"Part Payment",value:"isPartPayment"}];function he({data:s,formik:a,calculateActualAmount:f}){var r,u,_,o,I,i,A,N,T,P,w,D,t,d,m,h,b,c,p,j,g,q,C,E,F;return e.jsx(v.Card,{className:"mt-4 w-full",children:e.jsxs(v.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"Payment Action"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold ",children:"* Total Arrear Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",(r=s==null?void 0:s.data)==null?void 0:r.arrear]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Current Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",(u=s==null?void 0:s.data)==null?void 0:u.currentDemand]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Interest Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold ",children:[e.jsxs("span",{className:"text-red-500",children:["₹ ",(_=s==null?void 0:s.data)==null?void 0:_.totalInterestPenalty]})," ",e.jsxs("small",{children:["( Interest on Arrear ₹ ",(o=s==null?void 0:s.data)==null?void 0:o.arrearInterest," + Previous Interest ₹ ",(I=s==null?void 0:s.data)==null?void 0:I.previousInterest,")"]})]})}),((i=s==null?void 0:s.data)==null?void 0:i.totalInterestPenalty)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-span-1"}),e.jsx("div",{className:"col-span-1",children:e.jsx("h1",{className:"text-sm font-semibold ",children:e.jsxs("small",{className:"text-green-500",children:["( If You Pay Full Amount Before"," ",(N=(A=s==null?void 0:s.data)==null?void 0:A.rebates[0])==null?void 0:N.effective_upto,", Then"," ",(P=(T=s==null?void 0:s.data)==null?void 0:T.rebates[0])==null?void 0:P.rebates," % Of Interest On The Property Will Be Waived. )"]})})})]}),e.jsx("div",{className:"my-3 border-b-2 col-span-2"}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Total Payable Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(w=s==null?void 0:s.data)==null?void 0:w.payableAmt]})," ",e.jsx("small",{children:"(Arrear + Current + Interest)"})," ",((D=s==null?void 0:s.data)==null?void 0:D.totalInterestPenalty)>0&&e.jsxs("small",{className:"text-green-500",children:["(",(t=s==null?void 0:s.data)==null?void 0:t.payableAmt," -"," ",(m=(d=s==null?void 0:s.data)==null?void 0:d.rebates[0])==null?void 0:m.rebates_amt,")"]})]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"* Advance Amount -:"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:[e.jsxs("span",{className:"text-blue-500",children:["₹ ",(h=s==null?void 0:s.data)==null?void 0:h.remainAdvance]})," ",e.jsx("small",{className:"text-green-500",children:"(This Is An Adjustable Amount From Total Payment Value.)"})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(ae,{formik:a,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"mb-4",children:e.jsxs(z,{label:"Payment Mode",name:"paymentMode",formik:a,children:[e.jsx("option",{value:"",children:"select"}),H==null?void 0:H.map(n=>e.jsx("option",{value:n==null?void 0:n.value,children:n==null?void 0:n.label},n==null?void 0:n.id))]})}),e.jsx("div",{children:e.jsxs(z,{label:"Payment Option",name:"paymentType",formik:a,type:"select",children:[e.jsx("option",{value:"",children:"select"}),me.map(n=>{var B;return((B=s==null?void 0:s.data)==null?void 0:B.arrear)>0?e.jsx("option",{value:n==null?void 0:n.value,children:n==null?void 0:n.label},n==null?void 0:n.id):n.value!="isArrearPayment"&&e.jsx("option",{value:n==null?void 0:n.value,children:n==null?void 0:n.label},n==null?void 0:n.id)})]})})]}),((b=a.values)==null?void 0:b.paymentMode)==="CHEQUE"?e.jsx(be,{formik:a}):((c=a.values)==null?void 0:c.paymentMode)==="DD"?e.jsx(pe,{formik:a}):((p=a.values)==null?void 0:p.paymentMode)==="NEFT"?e.jsx(je,{formik:a}):null,((j=a.values)==null?void 0:j.paymentType)==="isPartPayment"&&e.jsx("div",{className:"",children:e.jsx(x,{label:"Part Payment Amount",name:"paidAmount",type:"number",formik:a,onInput:((g=a.values)==null?void 0:g.paymentType)==="isPartPayment"?n=>{n.target.value=Math.max(0,parseInt(n.target.value)).toString().slice(0,10)}:null})}),e.jsx("div",{className:"flex justify-center mt-2",children:e.jsxs(v.Button,{type:"submit",color:"indigo",disabled:!a.isValid,children:["Submit ₹"," ",((q=s==null?void 0:s.data)==null?void 0:q.totalInterestPenalty)>0&&((C=a.values)==null?void 0:C.paymentType)==="isFullPayment"?Math.round(f()-((F=(E=s==null?void 0:s.data)==null?void 0:E.rebates[0])==null?void 0:F.rebates_amt)||0):Math.round(f())||0]})})]})]})})}const be=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(x,{label:"Cheque No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Cheque Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Upload Cheque Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),pe=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(x,{label:"DD No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"DD Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Upload DD Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),je=({formik:s})=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(x,{label:"NEFT No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"NEFT Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(x,{label:"Upload NEFT Image",name:"neftImage",type:"file",onChange:a=>{s.setFieldValue("neftImage",a.target.files[0])}})})]}),Ne=te().shape({paymentMode:y().required("Payment Mode is required"),paymentType:y().required("Payment Type is required"),paidAmount:y().when(["paymentType"],{is:s=>s=="isPartPayment",then:()=>y().required("Part Payment Amount is required")}),chequeNo:y().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>y().required("Cheque No is required")}),chequeDate:y().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>y().required("Cheque Date is required")}),neftImage:y().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>y().required("Cheque Upload is required")}),bankName:y().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>y().required("Bank Name is required")}),branchName:y().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>y().required("Branch Name is required")}),paymentRemark:y().when(["paymentMode"],{is:s=>s=="CHEQUE"||s=="DD"||s=="NEFT",then:()=>y().required("Payment Remark is required")})});function Ue(){var T,P,w,D;const s=K(),{saveLocation:a}=de();X.useState(0);const f=G({}),{id:r}=k(),{pathname:u}=ee(),{result:_}=oe((P=(T=u==null?void 0:u.split("/"))==null?void 0:T.slice(0,-1))==null?void 0:P.join("/")),{data:o,isLoading:I}=Y({api:W.getDemandDetails,config:{propId:r},value:r,options:{enabled:!!r}}),i=re({enableReinitialize:!0,initialValues:{paymentMode:"",paymentType:"",chequeNo:"",chequeDate:"",bankName:"",branchName:"",paymentRemark:"",neftImage:"",paidAmount:""},validationSchema:Ne,onSubmit:async t=>{var d,m,h,b;Z.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+(((d=o==null?void 0:o.data)==null?void 0:d.totalInterestPenalty)>0&&((m=i.values)==null?void 0:m.paymentType)==="isFullPayment"?Math.round(N()-((b=(h=o==null?void 0:o.data)==null?void 0:h.rebates[0])==null?void 0:b.rebates_amt)||0):Math.round(N())||0),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(c=>{c.isConfirmed&&A(t)}).catch(c=>{var p,j;M.error((j=(p=c==null?void 0:c.response)==null?void 0:p.data)==null?void 0:j.message)})}}),A=async t=>{var m,h,b,c,p,j,g,q,C,E,F,n,B,S,U,O,R,L;let d={};if((t==null?void 0:t.paymentMode)==="ONLINE"){d={propId:r,paymentMode:t==null?void 0:t.paymentMode,paymentType:t==null?void 0:t.paymentType,paidAmount:N(),deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/property/payment-history"};const l=await f.mutateAsync({api:W.iciciPayment,data:d});(m=l==null?void 0:l.data)!=null&&m.status?(a({actionType:"PropertyPaymentOnline",refId:(b=(h=l==null?void 0:l.data)==null?void 0:h.data)==null?void 0:b.requestId,moduleId:1}),M.success((c=l==null?void 0:l.data)==null?void 0:c.message),window.location.href=(j=(p=l==null?void 0:l.data)==null?void 0:p.data)==null?void 0:j.encryptUrl,i.resetForm()):M.error((g=l==null?void 0:l.data)==null?void 0:g.message)}else{(t==null?void 0:t.paymentMode)==="CHEQUE"||(t==null?void 0:t.paymentMode)==="DD"||(t==null?void 0:t.paymentMode)==="NEFT"?d={id:r,paymentMode:t==null?void 0:t.paymentMode,paymentType:t==null?void 0:t.paymentType,chequeNo:t==null?void 0:t.chequeNo,chequeDate:t==null?void 0:t.chequeDate,bankName:t==null?void 0:t.bankName,branchName:t==null?void 0:t.branchName,paymentRemark:t==null?void 0:t.paymentRemark,neftImage:t==null?void 0:t.neftImage,paidAmount:N(),deviceType:"android"}:d={id:r,paymentMode:t==null?void 0:t.paymentMode,paymentType:t==null?void 0:t.paymentType,paidAmount:N(),deviceType:"android"};try{const l=await f.mutateAsync({api:W.holdingPayment,data:d});(q=l==null?void 0:l.data)!=null&&q.status?(a({actionType:"successPropertyPayment",refId:(E=(C=l==null?void 0:l.data)==null?void 0:C.data)==null?void 0:E.transactionId,moduleId:1}),M.success((F=l==null?void 0:l.data)==null?void 0:F.message),s("/amc-app/property/payment-response?response=".concat((B=(n=l==null?void 0:l.data)==null?void 0:n.data)==null?void 0:B.transactionId,"&tranNo=").concat((U=(S=l==null?void 0:l.data)==null?void 0:S.data)==null?void 0:U.TransactionNo),{replace:!0}),i.resetForm()):(M.error((O=l==null?void 0:l.data)==null?void 0:O.message),a({actionType:"failedPropertyPayment",refId:r,moduleId:1}))}catch(l){M.error((L=(R=l==null?void 0:l.response)==null?void 0:R.data)==null?void 0:L.message)}}},N=()=>{var d,m,h,b,c,p,j,g;let t=0;return((d=i.values)==null?void 0:d.paymentType)=="isFullPayment"&&(t=parseInt((m=o==null?void 0:o.data)==null?void 0:m.payableAmt)-parseInt((h=o==null?void 0:o.data)==null?void 0:h.remainAdvance)),((b=i.values)==null?void 0:b.paymentType)=="isArrearPayment"&&(t=parseInt((c=o==null?void 0:o.data)==null?void 0:c.arrearPayableAmt)-parseInt((p=o==null?void 0:o.data)==null?void 0:p.remainAdvance)),((j=i.values)==null?void 0:j.paymentType)=="isPartPayment"&&(t=parseInt((g=i.values)==null?void 0:g.paidAmount)),t};return se.useEffect(()=>{var t;((t=i.values)==null?void 0:t.paymentType)=="paidAmount"&&N()},[(w=i.values)==null?void 0:w.paidAmount]),I?e.jsx(J,{}):e.jsxs(le,{title:"Demand Details",children:[f.isLoading&&e.jsx(ne,{}),e.jsx("div",{className:"flex flex-col h-full py-3 px-4",children:e.jsxs("div",{className:"flex flex-col flex-grow",children:[e.jsx(ce,{data:o,permissionResult:_}),e.jsx(ie,{data:o}),e.jsx(xe,{data:o}),((D=o==null?void 0:o.data)==null?void 0:D.payableAmt)>0?e.jsx(he,{formik:i,data:o,calculateActualAmount:N}):e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("div",{onClick:()=>s("/amc-app/property/search-holding"),className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Payment Already Done"})})]})})]})}export{Ue as default};
