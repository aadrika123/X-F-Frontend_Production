import{r as a,u as v,J as f,a as N,e as j,j as s,S as y,L as _,N as C,O as S,V as H,W as o,X as L}from"./index-c6aa66f9.js";function R(){a.useState();const{type:t,filterParam:A,searchValueParam:D}=v(),[h,P]=a.useState(!1),[r,$]=a.useState([]),[m,M]=a.useState(!1);a.useContext(f);const[p,T]=a.useState(!1);N("Your Default Route");const l=j(),w=(e,i)=>{let n=`/holdingPropertyDetails/${i}`;L(e,n,l)},b=[{Header:"Ward No.",accessor:"ward_name"},{Header:"Owner's Name",accessor:"owner_name"},{Header:"Property Tax No.",accessor:"pt_no",Cell:({cell:e})=>s.jsx("span",{children:o(e.row.original.pt_no)})},{Header:"Holding No",accessor:"holding_no",Cell:({cell:e})=>s.jsx("span",{children:o(e.row.original.holding_no)})},{Header:"New Holding No",accessor:"new_holding_no",Cell:({cell:e})=>s.jsx("span",{children:o(e.row.original.new_holding_no)})},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:e})=>s.jsx("span",{children:o(e.row.original.mobile_no)})},{Header:"Address",accessor:"prop_address",Cell:({cell:e})=>s.jsx("span",{children:o(e.row.original.prop_address)})},{Header:"Status",Cell:({cell:e})=>s.jsxs("div",{children:[e.row.original.active_status===1&&s.jsx("span",{className:"text-green-400 font-semibold",children:"Active"}),e.row.original.active_status===0&&s.jsx("span",{className:"text-red-400 font-semibold",children:"Disabled"})]})},{Header:"Action",accessor:"id",Cell:({cell:e})=>s.jsx("button",{onClick:i=>w(i,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:"View"})},{Header:"All Modules",Cell:({cell:e})=>s.jsx("button",{onClick:()=>l(`/allmodules-dues/${e.row.values.id}`),className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Dues"})},{Header:"Geo",Cell:({cell:e})=>s.jsx("button",{onClick:i=>{var n,d,c,u,x,g;return l(`/geo-map/${(n=e.row.original)==null?void 0:n.latitude}/${(d=e.row.original)==null?void 0:d.longitude}/${(c=e.row.original)==null?void 0:c.new_holding_no}/${(u=e.row.original)==null?void 0:u.prop_address}/${(g=(x=e==null?void 0:e.row)==null?void 0:x.original)==null?void 0:g.id}`)},className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Geo-Map"})}];return a.useEffect(()=>{},[]),p?s.jsx(y,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):s.jsxs(s.Fragment,{children:[h&&s.jsx(_,{}),(t=="re"||t=="mu")&&s.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[s.jsx(C,{className:"inline mr-2 text-3xl"}),"For ",s.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),s.jsx("div",{className:" mt-6 h-auto  flex justify-center items-center flex-col md:flex-row",children:s.jsx("div",{className:"flex-1",children:s.jsxs("div",{className:"text-2xl font-semibold text-gray-700",children:[" ",s.jsx(S,{className:"inline text-indigo-500 mr-4"}),"Access all your regular visited households at one place to boost your productivity."]})})}),s.jsxs("div",{className:"mt-10",children:[s.jsx(H,{exportStatus:!1,columns:b,dataList:r}),m&&(r==null?void 0:r.length)==0&&s.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"}),s.jsx("div",{className:"w-full h-40"})]})]})}export{R as default};
