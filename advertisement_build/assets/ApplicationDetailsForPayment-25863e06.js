import{M as O,i as Q,g as W,r as p,h as Y,d as D,e as Z,f as s,F as m,j as l,k as g,X as ee,l as le,A as te}from"./index-e7e132f9.js";import{B as y}from"./BackendUrlAdvt-96a22911.js";O.setAppElement("#root");function se(){var f,b,u,N,w,v,_;const{id:i,idFor:h,type:c}=Q(),{api_agencyApplicationFullDetailById:I,api_privateLandApplicationFullDetailById:B,api_advertApplicationFullDetailById:V,api_movableApplicationFullDetailById:k,api_hoardingApplicationFullDetailById:L,api_advertViewDocuments:S,api_movableViewDocuments:$,api_privateLandViewDocuments:F,api_agencyViewDocuments:M,api_hoardingViewDocuments:j,api_BanquetMarriageApplicationFullDetailById:q,api_HostelApplicationFullDetailById:H,api_LodgeApplicationFullDetailById:E,api_DharamshalaApplicationFullDetailById:P,api_BanquetMarriageViewDocuments:T,api_DharamshalaViewDocuments:R,api_HostelViewDocuments:U,api_LodgeViewDocuments:C}=te();W("Agency Details");const[x,X]=p.useState();p.useState(!1),p.useState();const z=Y(),[o,G]=p.useState(),[re,d]=p.useState(!1);p.useState(!1),p.useState(""),console.log("agency pay id through param",i),console.log("agency pay type through param",c),console.log("agency pay id for through param",h),p.useEffect(()=>{J()},[]);const J=()=>{const e=h;console.log("application for",e),d(!0);let r,t;e=="selfAdvt"&&(r=S,t={applicationId:i,type:c}),e=="movableVehicle"&&(r=$,t={applicationId:i,type:c}),e=="privateLand"&&(r=F,t={applicationId:i,type:c}),e=="agency"&&(r=M,t={applicationId:i,type:c}),e=="hoarding"&&(r=j,t={applicationId:i,type:c}),e=="banquetMarriageHall"&&(r=T,t={applicationId:i,type:c}),e=="hostel"&&(r=U,t={applicationId:i,type:c}),e=="lodge"&&(r=C,t={applicationId:i,type:c}),e=="dharamshala"&&(r=R,t={applicationId:i,type:c}),D.post(`${r}`,t,Z()).then(a=>{var n;console.log("document list",a),X((n=a==null?void 0:a.data)==null?void 0:n.data),d(!1)}).catch(a=>{console.log("error at saf application details ",a),d(!1)})},K=()=>{const e="Approve",r=h;console.log("application for",r),d(!0);let t,a;r=="selfAdvt"&&(t=V,a={applicationId:i,type:e}),r=="movableVehicle"&&(t=k,a={applicationId:i,type:e}),r=="privateLand"&&(t=B,a={applicationId:i,type:e}),r=="agency"&&(t=I,a={applicationId:i,type:e}),r=="hoarding"&&(t=L,a={applicationId:i,type:e}),r=="banquetMarriageHall"&&(t=q,a={applicationId:i,type:e}),r=="hostel"&&(t=H,a={applicationId:i,type:e}),r=="lodge"&&(t=E,a={applicationId:i,type:e}),r=="dharamshala"&&(t=P,a={applicationId:i,type:e}),D.post(`${t}`,a,le()).then(function(n){console.log("Application details",n.data.data),G(n.data.data),d(!1)}).catch(function(n){console.log(" application details error...",n),d(!1)})};return p.useEffect(()=>{K()},[]),console.log("document list",x),console.log("application name",(b=(f=o==null?void 0:o.fullDetailsData)==null?void 0:f.cardArray)==null?void 0:b.headerTitle),s(m,{children:[l("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg  p-4",children:[l("h1",{className:"text-center pl-2 font-bold text-2xl text-gray-700 uppercase underline",children:(N=(u=o==null?void 0:o.fullDetailsData)==null?void 0:u.cardArray)==null?void 0:N.headerTitle}),s("h1",{className:"flex-1 flex p-2 pl-2 pt-2 font-bold text-xl text-gray-700 bg-white shadow-lg",children:["Application No. - ",(o==null?void 0:o.application_no)||""]}),s("div",{className:"p-4",children:[s("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[l(g,{className:"inline"})," Basic Details"]}),(v=(w=o==null?void 0:o.fullDetailsData)==null?void 0:w.dataArray)==null?void 0:v.map(e=>{var r;return l("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(r=e==null?void 0:e.data)==null?void 0:r.map(t=>s("div",{className:"pl-4 p-2",children:[s("h1",{className:"font-bold text-sm",children:[(t==null?void 0:t.value)||"N/A"," "]}),l("h1",{className:"text-gray-500 text-xs",children:t==null?void 0:t.displayString})]}))})}),h=="agency"&&s("div",{className:"mt-10 ",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[l(g,{className:"inline"})," Directors Details"]}),s("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[l("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s("tr",{children:[l("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),l("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Director Name"}),l("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Director Mobile No."}),l("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Director Email"})]})}),l("tbody",{className:"text-sm",children:l(m,{children:(_=o==null?void 0:o.directors)==null?void 0:_.map(e=>s("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[l("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),l("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.director_name?e==null?void 0:e.director_name:"N/A"}),l("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.director_mobile?e==null?void 0:e.director_mobile:"N/A"}),l("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.director_email?e==null?void 0:e.director_email:"N/A"})]}))})})]})]})]})]})}),s("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[l(g,{className:"inline"})," Document List"]}),l("div",{className:"py-0 shadow-xl mt-3",children:l("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:l("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:s("table",{className:"min-w-full leading-normal",children:[l("thead",{className:"bg-white",children:s("tr",{className:"font-semibold",children:[l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),l("tbody",{children:x==null?void 0:x.map((e,r)=>{var t,a,n,A;return s("tr",{className:"font-semibold",children:[l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r+1}),l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:e==null?void 0:e.doc_val}),s("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:[((t=e==null?void 0:e.doc_path)==null?void 0:t.split(".")[1])=="pdf"&&l("div",{className:"flex-shrink-0 text-[28px]",children:l(ee,{})}),((a=e==null?void 0:e.doc_path)==null?void 0:a.split(".")[1])=="jpg"&&l("div",{className:"flex-shrink-0",children:l("img",{src:`${y}/${e==null?void 0:e.doc_path}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((n=e==null?void 0:e.doc_path)==null?void 0:n.split(".")[1])=="jpeg"&&l("div",{className:"flex-shrink-0",children:l("img",{src:`${y}/${e==null?void 0:e.doc_path}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})}),((A=e==null?void 0:e.doc_path)==null?void 0:A.split(".")[1])=="png"&&l("div",{className:"flex-shrink-0",children:l("img",{src:`${y}/${e==null?void 0:e.doc_path}`,className:"md:w-[2vw] w-[5vw]",alt:"",srcset:""})})]}),s("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:[l("p",{className:"whitespace-no-wrap",children:(e==null?void 0:e.verify_status)==0&&l(m,{children:"Pending"})}),l("p",{className:"text-green-500 whitespace-no-wrap",children:(e==null?void 0:e.verify_status)==1&&l(m,{children:"Verified"})}),l("p",{className:"text-red-500 whitespace-no-wrap",children:(e==null?void 0:e.verify_status)==2&&l(m,{children:"Rejected"})})]}),l("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:(e==null?void 0:e.remarks)==null?l("i",{children:"N/A"}):e==null?void 0:e.remarks})]})})})]})})})})]}),l("button",{className:"float-right mr-4 -mt-32 text-white border border-green-500 bg-green-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",onClick:()=>z(`/advertisement-payment/${i}/${h}`),children:"Pay Now"})]})}export{se as default};
