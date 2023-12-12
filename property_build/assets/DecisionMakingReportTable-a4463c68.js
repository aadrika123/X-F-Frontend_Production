import{a as w,r as n,A as _,b as H,j as e,K as B,P as E}from"./index-eb8737a9.js";const C=l=>{var b,c,a,m,t,i,x,g,y,h,j,N,u,f,T,A,S,M,R,F;w("Decision Making Report");const{searchDecisionMakingReport:D}=E(),[k,s]=n.useState(!1),[d,v]=n.useState();return n.useEffect(()=>{s(!0),_.post(D,{},H()).then(r=>{var o,P;((o=r==null?void 0:r.data)==null?void 0:o.status)==!0?(console.log("search success => ",r),v((P=r==null?void 0:r.data)==null?void 0:P.data)):console.log("error while search => ",r),s(!1)}).catch(r=>(console.log("error while search => ",r),s(!1)))},[]),k?e.jsx(B,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"w-full border-b-2 border-gray-700 text-gray-700 text-center text-lg font-semibold uppercase tracking-[0.7rem] mb-2 mt-8",children:"Decision Making Report"})}),e.jsxs("table",{className:"w-full mt-2",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"S.No."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Ward No."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Legacy Data (3)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Reassessment (4.1)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Mutation (4.2)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Mutation (4.3)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total SAF (5)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total To Be Reassessed (6)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total HH as per Records (7=5+6)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Holding (7)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Non Assessed Percentage (8)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Fully Digitized SAF (9)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total SAM (10)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"SAM Percentage (11)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Geo Tagging (12)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Geo Tagging Percentage (13)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Pure Commercial (14.1)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Mix SAF (14.2)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Pure Govt (14.3)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total Pure Residential (14.4)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total BTC"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Total FAM"})]}),d!=null&&(d==null?void 0:d.length)!=0?e.jsxs(e.Fragment,{children:[" ",d==null?void 0:d.map((r,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:o+1}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.transaction_mode}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.holding_count}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.tran_count}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.amount})]})),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",colSpan:2,children:"Total"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(b=l==null?void 0:l.data)==null?void 0:b.holding_count}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(c=l==null?void 0:l.data)==null?void 0:c.tran_count}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(a=l==null?void 0:l.data)==null?void 0:a.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(m=l==null?void 0:l.data)==null?void 0:m.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(t=l==null?void 0:l.data)==null?void 0:t.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(i=l==null?void 0:l.data)==null?void 0:i.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(x=l==null?void 0:l.data)==null?void 0:x.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(g=l==null?void 0:l.data)==null?void 0:g.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(y=l==null?void 0:l.data)==null?void 0:y.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(h=l==null?void 0:l.data)==null?void 0:h.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(j=l==null?void 0:l.data)==null?void 0:j.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(N=l==null?void 0:l.data)==null?void 0:N.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(u=l==null?void 0:l.data)==null?void 0:u.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(f=l==null?void 0:l.data)==null?void 0:f.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(T=l==null?void 0:l.data)==null?void 0:T.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(A=l==null?void 0:l.data)==null?void 0:A.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(S=l==null?void 0:l.data)==null?void 0:S.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(M=l==null?void 0:l.data)==null?void 0:M.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(R=l==null?void 0:l.data)==null?void 0:R.amount}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:(F=l==null?void 0:l.data)==null?void 0:F.amount})]})]}):e.jsx("tr",{children:e.jsx("td",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",colSpan:22,children:"No Data Found"})})]}),e.jsx("div",{className:"h-[20vh]"})]})};export{C as default};
