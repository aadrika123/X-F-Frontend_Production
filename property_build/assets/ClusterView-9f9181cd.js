import{f as Ce,Y as Se,r as i,a as Ae,e as He,u as Pe,A as V,b as W,j as l,B as Fe,S as _e,L as q,a8 as Le,ds as L,W as x,V as K,ag as $e,d5 as ke,dt as Me,aj as Te,Q as Be}from"./index-4f037684.js";import{b as De}from"./index.esm-7a52a587.js";const Ee=()=>{const c=Ce;return{getCluster:`${c}/api/property/cluster/get-all-clusters`,addCluster:`${c}/api/property/cluster/save-cluster-details`,viewCluster:`${c}/api/property/cluster/get-cluster-by-id`,updateCluster:`${c}/api/property/cluster/edit-cluster-details`,deleteCluster:`${c}/api/property/cluster/delete-cluster-data`,viewHolding:`${c}/api/property/cluster/holding-by-cluster`,searchHolding:`${c}/api/property/cluster/details-by-holding`,searchSaf:`${c}/api/property/cluster/get-saf-by-safno`,mapHoldingApi:`${c}/api/property/cluster/save-holding-in-cluster`,mapSafApi:`${c}/api/property/cluster/save-saf-in-cluster`}};const Ie=c=>{const{t:a}=Se(),[G,$]=i.useState(!1),[r,Q]=i.useState(""),[m,k]=i.useState("SAF"),[N,Y]=i.useState(""),[w,Oe]=i.useState(!1),[o,J]=i.useState(),[f,X]=i.useState([]),[g,M]=i.useState([]),[h,j]=i.useState([]),[t,Z]=i.useState(),[T,p]=i.useState(0),[ee,y]=i.useState(!1),[le,C]=i.useState(!1),[ae,te]=i.useState(!1),[ie,S]=i.useState(!1),[ne,se]=i.useState(null),[de,A]=i.useState(""),[ce,H]=i.useState(null),[B,D]=i.useState(0);Ae(`${a("mainClusterPage.clusterDetailsView.label")}`);const P=He(),E=e=>{$(!0),Q(e),j([]),M([])},F=()=>{$(!1),A(""),H(null),D(0)},re=()=>{},{id:v}=Pe(),I="bg-indigo-500  text-white border border-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm transition-all duration-100 ease-in-out cursor-pointer text-sm",_="text-indigo-500 bg-white border border-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm transition-all duration-100 ease-in-out cursor-pointer text-sm",{mapHoldingApi:ue,mapSafApi:me,searchHolding:xe,searchSaf:oe,viewCluster:fe}=Ee();i.useEffect(()=>{he()},[T]);const he=()=>{S(!1),y(!0),V.post(fe,{clusterId:v},W()).then(e=>{var s,n,u,d,z,U,R;(s=e==null?void 0:e.data)!=null&&s.status?(Z((u=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:u.cluster),X((z=(d=e==null?void 0:e.data)==null?void 0:d.data)==null?void 0:z.Property),J((R=(U=e==null?void 0:e.data)==null?void 0:U.data)==null?void 0:R.Saf)):S(!0),y(!1)}).catch(e=>{S(!0),y(!1)})},ge=()=>{if(N.length<4){b(!0,"Enter atleast 5 digits");return}r=="Holding"?(A(xe),H({holdingNo:N})):(A(oe),H({safNo:N})),D(e=>e+1)},ve=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No.",accessor:"wardId",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:`${r} No.`,accessor:r=="Holding"?"holding_no":"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Name",accessor:"ownerName",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobileNo",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Type",accessor:"propertyType",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",Cell:({row:e})=>l.jsx(l.Fragment,{children:l.jsx("div",{className:"space-x-2",children:l.jsx("button",{className:"bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-xs font-semibold py-1 px-2",onClick:()=>be(e==null?void 0:e.index),children:a("mainClusterPage.select.label")})})})}],O=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:`${m} No.`,accessor:m=="Holding"?"holdingNo":"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Name",accessor:"ownername",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobileno",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Type",accessor:"propertyType",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("div",{className:"w-full flex flex-row justify-center items-center",children:l.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],be=e=>{r=="Holding"?je(e):Ne(e)},je=e=>{var s,n;h.includes((s=g[e])==null?void 0:s.holding_no)==!1&&j(u=>{var d;return[...u,(d=g[e])==null?void 0:d.holding_no]}),h.includes((n=g[e])==null?void 0:n.holding_no)&&b(!0,"Duplicate not allowed !!!")},Ne=e=>{var s,n;h.includes((s=g[e])==null?void 0:s.saf_no)==!1&&j(u=>{var d;return[...u,(d=g[e])==null?void 0:d.saf_no]}),h.includes((n=g[e])==null?void 0:n.saf_no)&&b(!0,"Duplicate not allowed !!!")},we=(e,s)=>{j(n=>n.filter((u,d)=>u!==e))},ye=()=>{C(!0);let e=r=="Holding"?ue:me,s=r=="Holding"?{clusterId:v,holdingNo:[...new Set(h)]}:{clusterId:v,safNo:[...new Set(h)]};V.post(e,s,W()).then(n=>{var u,d;((u=n==null?void 0:n.data)==null?void 0:u.status)==!0&&(Be.success("Mapping successfull !!!"),F(),p(T+1)),((d=n==null?void 0:n.data)==null?void 0:d.status)==!1&&b(!0,`Check out some ${r} no. already mapped or selected !!!`),C(!1)}).catch(n=>{C(!1),b(!0,"Error occured while mapping. Please try again later")})},b=(e,s)=>{se(s),te(e)};return ee?l.jsx(l.Fragment,{children:l.jsx(Fe,{})}):ie?l.jsx(_e,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):l.jsxs(l.Fragment,{children:[le&&l.jsx(q,{}),ae&&l.jsx(Le,{activateBottomErrorCard:b,errorTitle:ne}),l.jsxs("div",{className:"flex  flex-col w-full text-zinc-800 h-[100vh] overflow-y-auto",children:[l.jsxs("div",{children:[l.jsx("div",{className:"flex flex-wrap justify-between",children:l.jsxs("div",{className:"flex items-center space-x-2 ",children:[l.jsx("span",{className:"font-extrabold",children:l.jsx(L,{})}),l.jsx("span",{className:"font-bold",children:a("mainClusterPage.basicDetails.label")})]})}),l.jsxs("div",{className:"bg-white rounded-md shadow-lg w-full px-4 py-2.5 pb-4 mt-4 flex flex-wrap items-start flex-row gap-y-4",children:[l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.oldWardNo.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.ward_no)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.newWardNo.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.new_ward_no)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[15rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.name.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.cluster_name)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.type.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.cluster_type)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.mobileNo.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.mobile_no)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[15rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.authorizedPersonName.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.authorized_person_name)})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[10rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.createdAt.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(new Date(t==null?void 0:t.created_at).toLocaleDateString("en-GB"))})]}),l.jsxs("div",{className:"flex flex-col-reverse poppins space-y-1 w-[35rem]",children:[l.jsx("div",{className:"text-xs",children:a("mainClusterPage.address.label")}),l.jsx("div",{className:"text-sm font-semibold",children:x(t==null?void 0:t.address)})]})]})]}),l.jsxs("div",{className:"relative bg-white p-4 mt-8",children:[l.jsxs("div",{className:"flex flex-row flex-wrap justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2 mb-2 sm:mb-0",children:[l.jsxs("div",{className:(m=="SAF"?"border-2 border-indigo-600 shadow-indigo-400":"border-none")+" shadow-md rounded-md flex items-center space-x-2 px-4 py-2 cursor-pointer text-sm",onClick:()=>k("SAF"),children:[l.jsx("span",{className:"font-extrabold",children:l.jsx(L,{})}),l.jsx("span",{className:"font-semibold",children:a("mainClusterPage.mappedSAFList.label")})]}),l.jsxs("div",{className:(m=="Holding"?"border-2 border-indigo-600 shadow-indigo-400":"border-none")+" shadow-md rounded-md flex items-center space-x-2 px-4 py-2 cursor-pointer text-sm",onClick:()=>k("Holding"),children:[l.jsx("span",{className:"font-extrabold",children:l.jsx(L,{})}),l.jsx("span",{className:"font-semibold",children:a("mainClusterPage.mappedHoldingList.label")})]})]}),m=="SAF"&&l.jsxs("div",{className:"flex items-center space-x-2 ",children:[l.jsx("div",{className:I,onClick:()=>E("SAF"),children:a("mainClusterPage.addSAF.label")}),(o==null?void 0:o.length)>0&&l.jsx("div",{onClick:()=>P(`/viewDemandCluster/${v}`),className:_,children:a("mainClusterPage.viewSAFDemand.label")})]}),m=="Holding"&&l.jsxs("div",{className:"flex items-center space-x-2 ",children:[l.jsx("div",{className:I,onClick:()=>E("Holding"),children:a("mainClusterPage.addHolding.label")}),(f==null?void 0:f.length)>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:()=>P(`/cluster-holding-transactions/${v}`),className:_,children:a("mainClusterPage.viewPaymentHistory.label")}),l.jsx("div",{onClick:()=>P(`/viewDemandHoldingPropertyCluster/${v}`),className:_,children:a("mainClusterPage.viewPropertyDemand.label")})]})]})]}),l.jsx("div",{className:"mt-4",children:!w&&l.jsxs(l.Fragment,{children:[m=="Holding"&&l.jsx(l.Fragment,{children:(f==null?void 0:f.length)>0?l.jsx(K,{columns:O,dataList:f}):l.jsxs("div",{className:"text-red-500 poppins font-semibold text-lg w-full text-center py-4",children:[" ",a("mainClusterPage.noMappedHoldingAvailable.label")]})}),m=="SAF"&&l.jsx(l.Fragment,{children:(o==null?void 0:o.length)>0?l.jsx(K,{columns:O,dataList:o}):l.jsx("div",{className:"text-red-500 poppins font-semibold text-lg w-full text-center py-4",children:a("mainClusterPage.noMappedSAFAvailable.label")})})]})})]})]}),l.jsx($e,{isOpen:G,onAfterOpen:re,onRequestClose:F,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",contentLabel:"Example Modal",children:l.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] h-[80vh] w-full relative bg-gray-50 px-6 py-4  border-t-2 border-l-2 overflow-auto",children:[w&&l.jsx(q,{}),l.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:F,children:l.jsx(De,{fontSize:10})}),l.jsxs("h1",{className:"mb-2 mx-6 font-serif font-semibold  text-gray-600 text-lg",children:[l.jsx(ke,{className:"inline mr-2"}),a("mainClusterPage.add.label")," ",r]}),l.jsxs("div",{className:"bg-white w-full px-4 py-6 rounded-md shadow-md mt-4 flex flex-row flex-wrap gap-y-2 justify-start gap-x-6 items-center",children:[l.jsxs("label",{htmlFor:"search",className:"poppins 2xl:text-md text-sm",children:[a("mainClusterPage.enterLastDigits.label")," ",r," ",a("mainClusterPage.number.label")," : "]}),l.jsx("input",{type:"text",name:"search",id:"search",className:"px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",onChange:e=>Y(e.target.value)}),l.jsx("button",{className:"md:mt-1.5 px-6 py-1.5 cursor-pointer w-max bg-green-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-060 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out tracking-wide",onClick:()=>ge(),children:a("mainClusterPage.search.label")})]}),l.jsxs("div",{className:"bg-white w-[100%] p-4 rounded-md shadow-md mt-4 flex flex-row flex-wrap gap-y-2 justify-start gap-x-6 items-center poppins",children:[l.jsxs("div",{className:" w-full flex flex-col md:flex-row md:items-center gap-2 border-b-2 border-gray-500 pb-2 mb-2",children:[l.jsxs("div",{className:"full text-sm md:w-[20%] w-full",children:[a("mainClusterPage.selected.label")," ",r,"   :     "]}),l.jsxs("div",{className:"w-full md:w-[80%]",children:[l.jsx("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-1 h-10 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[...new Set(h)].map((e,s)=>l.jsx("div",{className:"w-max",children:l.jsxs("span",{className:"bg-indigo-100 text-gray-800 flex flex-row items-cente poppins text-xs px-2 py-1.5 rounded-md font-semibold",children:[e," ",l.jsx(Me,{className:"inline text-red-600 font-semibold text-sm cursor-pointer hover:text-red-700",onClick:()=>we(e)})]})}))}),!w&&l.jsxs("button",{className:"md:mt-1.5 px-6 py-1.5 cursor-pointer w-max bg-green-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-060 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",onClick:()=>ye(),children:[a("mainClusterPage.map.label")," ",r]})]})]}),l.jsx("div",{className:"w-full",children:B>0&&l.jsx(Te,{getData:!0,allData:e=>M(e==null?void 0:e.data),api:de,columns:ve,requestBody:ce,changeData:B})})]})]})}),l.jsx("div",{className:"h-[20vh]"})]})},Re=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ee as C,Ie as a,Re as b};
