import{a as h,e as N,r as i,j as l,K as g,U as j,A as b,b as A,P as y}from"./index-362d414a.js";function H(){const{api_editExistingPropertyList:c}=y();h("Edit Existing List");const v=N(),[a,m]=i.useState(),[n,t]=i.useState(!1),x=()=>{t(!0),b.post(c,{},A()).then(e=>{var u,d;t(!1),console.log("success => ",e),m((d=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:d.data)}).catch(e=>(console.log("getting eroor => ",e),t(!1)))};i.useEffect(()=>{x()},[]),console.log("object",a);const f=[{Header:"Sl No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Holding No.",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property No.",accessor:"property_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Guardian Name",accessor:"guardian_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Email",accessor:"email",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Application Date",accessor:"application_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",accessor:"id",Cell:({cell:e})=>l.jsx("button",{onClick:()=>v(`/approve-existing-property/bo-edit/${e.row.values.id}`),className:`bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 \r
                      hover:text-white text-black`,children:"View"})}];return l.jsxs(l.Fragment,{children:[n&&l.jsx(g,{}),l.jsx("div",{className:"bg-white shadow-md rounded-md px-2 py-2",children:a!=null&&(a==null?void 0:a.length)!=0&&!n?l.jsx(l.Fragment,{children:l.jsx(j,{dataList:a,columns:f})}):l.jsx(l.Fragment,{children:l.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})})}),l.jsx("div",{className:"h-[20vh]"})]})}export{H as default};
