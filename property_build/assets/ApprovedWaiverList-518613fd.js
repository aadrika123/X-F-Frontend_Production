import{a as u,e as v,r as s,j as e,ah as j,g as y,V as r}from"./index-161aea56.js";const C=()=>{const{post_waiverApprovedList:m}=y();u("Approved Waiver List");const l=v();s.useState(null);const[_,A]=s.useState(0);s.useEffect(()=>{},[]);const h=[{Header:"#",Cell:({row:a})=>e.jsx("div",{className:"pr-2",children:a.index+1})},{Header:"Ward No",accessor:"ward_no",Cell:({cell:a})=>{var i,o,n;return e.jsx("span",{children:r((i=a.row.original)==null?void 0:i.old_ward_no)=="NA"?r((o=a.row.original)==null?void 0:o.new_ward_no):r((n=a.row.original)==null?void 0:n.old_ward_no)})}},{Header:"Application No",accessor:"application_no",Cell:({cell:a})=>{var i;return e.jsx("span",{children:r((i=a.row.original)==null?void 0:i.application_no)})}},{Header:"Applicant Name",accessor:"applicant_name",Cell:({cell:a})=>{var i;return e.jsx("span",{children:r((i=a.row.original)==null?void 0:i.applicant_name)})}},{Header:"Application Type",accessor:"application_type",Cell:({cell:a})=>{var i;return e.jsx("span",{children:r((i=a.row.original)==null?void 0:i.application_type)})}},{Header:"Apply Date",accessor:"application_date",Cell:({cell:a})=>{var i;return e.jsx("span",{children:r((i=a.row.original)==null?void 0:i.application_date)})}},{Header:"Action",Cell:({cell:a})=>e.jsx(e.Fragment,{children:e.jsx("button",{className:"mx-auto bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded-md shadow-md text-white",onClick:()=>{var i,o,n,t,p,d,c,g,w,x;return l(`/generate-waiver-demand/${((o=(i=a==null?void 0:a.row)==null?void 0:i.original)==null?void 0:o.application_type)=="Saf"?(t=(n=a==null?void 0:a.row)==null?void 0:n.original)==null?void 0:t.saf_id:(d=(p=a==null?void 0:a.row)==null?void 0:p.original)==null?void 0:d.property_id}/${(g=(c=a==null?void 0:a.row)==null?void 0:c.original)==null?void 0:g.application_type}/${(x=(w=a==null?void 0:a.row)==null?void 0:w.original)==null?void 0:x.id}`)},children:"View"})})}];return e.jsxs("div",{className:"bg-white p-4 mt-1",children:[e.jsxs("div",{className:"poppins pb-4",children:[e.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-widest md:tracking-[0.6rem]",children:"Approved Waiver List"}),e.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400"})]}),e.jsx(j,{api:m,columns:h,requestBody:{},changeData:_})]})};export{C as default};
