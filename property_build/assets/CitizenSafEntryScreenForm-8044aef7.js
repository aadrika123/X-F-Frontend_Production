import{r as l,e as k,q as S,s as T,w as A,j as e,dS as q,dT as E,A as C}from"./index-4f037684.js";function H(){const g=[{id:1,title:"How to Apply ?",body:"Step 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Step 2. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium."},{id:2,title:"How  avail Armed Forces ?",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium."},{id:3,title:"Who is Specially Abled ?",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium."},{id:4,title:"This is heading for this ?",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium."},{id:5,title:"This is heading for this ?",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium."},{id:6,title:"This is heading for this ?",body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium."}],[b,o]=l.useState("col-span-12 md:col-span-4 py-6"),[p,i]=l.useState("col-span-12 md:col-span-4 py-6"),[h,n]=l.useState("col-span-12 md:col-span-4 py-6"),[f,r]=l.useState("col-span-12 md:col-span-4 py-6"),[j,u]=l.useState(!1),[s,y]=l.useState(),[a,N]=l.useState("both"),d=k(),x=t=>{N(t),t=="new"&&(o("col-span-12 md:col-span-12 py-0 block"),i("w-0 col-span-0 md:col-span-0 hidden"),n("w-0 col-span-0 md:col-span-0 hidden"),r("w-0 col-span-0 md:col-span-0 hidden")),t=="re"&&(o("w-0 col-span-0 md:col-span-0 hidden"),i("col-span-12 md:col-span-12 py-0 block"),n("w-0 col-span-0 md:col-span-0 hidden"),r("w-0 col-span-0 md:col-span-0 hidden")),t=="mu"&&(o("w-0 col-span-0 md:col-span-0 hidden"),i("w-0 col-span-0 md:col-span-0 hidden"),n("col-span-12 md:col-span-12 py-0 block"),r("w-0 col-span-0 md:col-span-0 hidden")),t=="obj"&&(o("w-0 col-span-0 md:col-span-0 hidden"),i("w-0 col-span-0 md:col-span-0 hidden"),n("w-0 col-span-0 md:col-span-0 hidden"),r("col-span-12 md:col-span-12 py-0 block")),t=="back"&&(u(!1),o("col-span-12 md:col-span-4 py-6"),i("col-span-12 md:col-span-4 py-6"),n("col-span-12 md:col-span-4 py-6"),r("col-span-12 md:col-span-4 py-6"))},v=S({holdingNo:T().required("Enter holding no.")}),c=A({initialValues:{holdingNo:""},onSubmit:(t,m)=>{w()},validationSchema:v}),w=()=>{let t=601;C.get(`http://localhost:3001/dummyHolding/${t}`).then(function(m){y(m.data)}).catch(function(m){}).then(function(){})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("div",{})}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12  m-12",children:e.jsxs("div",{className:" col-span-12 mx-auto",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/609/609803.png",className:"h-9 w-9  "}),e.jsx("p",{className:"font-bold text-2xl ml-10 -mt-8 text-gray-700 ",children:"APPLY FOR PROPERTY TAX"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 -mt-8",children:[e.jsx("div",{className:" col-span-10 p-2 ",children:e.jsxs("section",{className:`${p=="col-span-12 md:col-span-12 py-0 block "||h=="col-span-12 md:col-span-12 py-0 block","block"} text-gray-600 body-font overflow-hidden   p-3  `,children:[e.jsxs("h1",{className:"text-gray-700 text-xl title-font font-medium mb-4 flex items-center",children:[e.jsx(q,{className:"inline"})," ",e.jsx("p",{className:"ml-3",children:"Find Holding"})]}),e.jsx("form",{onSubmit:c.handleSubmit,children:e.jsxs("div",{className:" flex",children:[e.jsxs("div",{className:"flex-1   form-group mb-3 col-span-8 md:col-span-2",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline  ",children:"*"}),"Holding no."]}),e.jsx("input",{...c.getFieldProps("holdingNo"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter holding no."}),e.jsx("span",{classNameName:"text-red-600 absolute text-xs",children:c.touched.holdingNo&&c.errors.holdingNo?c.errors.holdingNo:null})]}),e.jsxs("div",{className:"flex-1  form-group mb-2 col-span-1 md:col-span-1 align-bottom",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold invisible ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline  ",children:"*"}),"Enter Holding no."]}),e.jsx("div",{className:"md:px-10 ",children:e.jsxs("button",{onClick:()=>u(!0),type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:[e.jsx(E,{className:"inline text-sm font-bold"}),"Find"]})})]})]})}),j&&e.jsx("div",{className:"py-2 overflow-x-auto bg-white",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left",children:"Holding No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left",children:"Owner Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left",children:"Guardian Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left",children:"Address"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left",children:"Action"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.holdingNo}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.ownerName}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.guardianName}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.Address}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[(a=="re"||a=="both")&&e.jsx("button",{onClick:()=>d("/safform/re"),type:"button",className:" px-2 py-1 bg-green-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Re-Assessment "}),(a=="mu"||a=="both")&&e.jsx("button",{onClick:()=>d("/safform/mu"),type:"button",className:"ml-2 px-2 py-1 bg-orange-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out",children:"Mutation"}),(a=="obj"||a=="both")&&e.jsx("button",{onClick:()=>d("/citizenobjection"),type:"button",className:"ml-2 px-2 py-1 bg-orange-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out",children:"Objection"})]})]})})]})})})]})}),e.jsx("div",{className:" col-span-2 p-2",children:e.jsx("img",{src:"https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=826&t=st=1659784290~exp=1659784890~hmac=ebdaac857732a1bae2aa343b76514f5a34cd662dc447907ccdade20efbfe5bab",className:"h-32 mt-6  "})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12",children:[e.jsx("div",{className:"col-span-3 ",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-4 -mt-8 ",children:[e.jsx("div",{className:"",children:e.jsx("div",{className:` ${b} p-4 md:p-5`,onClick:()=>d("/safform/new"),children:e.jsxs("div",{class:"hover:shadow-xl hover:bg-emerald-600  rounded-lg sm:w-full w-full p-4 p-4 bg-emerald-500 relative overflow-hidden",children:[e.jsx("img",{alt:"moto",src:"https://cdn-icons-png.flaticon.com/128/4205/4205906.png",class:"absolute -right-2 -bottom-6 h-16 w-16 mb-4 "}),e.jsxs("div",{class:"w-4/6",children:[e.jsx("p",{class:" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10",children:"NEW-ASSIGNMENT"}),e.jsx("p",{class:"text-gray-800 text-xs",children:"Apply"})]})]})})}),e.jsx("div",{className:"",children:e.jsx("div",{className:` ${p} p-4  md:p-5 `,onClick:()=>x("re"),children:e.jsxs("div",{class:"hover:shadow-xl hover:bg-amber-500  rounded-lg sm:w-full w-full p-4 p-4 bg-amber-400 relative overflow-hidden",children:[e.jsx("img",{alt:"moto",src:"https://cdn-icons-png.flaticon.com/128/4205/4205906.png",class:"absolute -right-2 -bottom-6 h-16 w-16 mb-4  "}),e.jsxs("div",{class:"w-4/6",children:[e.jsx("p",{class:" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10",children:"RE-ASSIGNMENT"}),e.jsx("p",{class:"text-gray-800 text-xs",children:"Apply"})]})]})})}),e.jsx("div",{className:"",children:e.jsx("div",{className:` ${h} p-4  md:p-5 `,onClick:()=>x("mu"),children:e.jsxs("div",{class:"hover:shadow-xl hover:bg-purple-600 rounded-lg sm:w-full w-full p-4 p-4 bg-purple-500 relative overflow-hidden",children:[e.jsx("img",{alt:"moto",src:"https://cdn-icons-png.flaticon.com/128/4205/4205906.png",class:"absolute -right-2 -bottom-6 h-16 w-16 mb-4 "}),e.jsxs("div",{class:"w-4/6",children:[e.jsx("p",{class:" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10",children:"MUTATION"}),e.jsx("p",{class:"text-gray-800 text-xs",children:"Apply"})]})]})})}),e.jsx("div",{className:"",children:e.jsx("div",{className:`${f} p-4 md:p-5  `,onClick:()=>x("obj"),children:e.jsxs("div",{class:"hover:shadow-xl hover:bg-green-500 rounded-lg sm:w-full w-full p-4 bg-green-400 relative overflow-hidden  ",children:[e.jsx("img",{alt:"moto",src:"https://cdn-icons-png.flaticon.com/128/4205/4205906.png",class:"absolute -right-2 -bottom-6 h-16 w-16 mb-4 "}),e.jsxs("div",{class:"w-4/6",children:[e.jsx("p",{class:" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10",children:"OBJECTION"}),e.jsx("p",{class:"text-gray-800 text-xs",children:"Apply"})]})]})})})]})}),e.jsxs("div",{className:"col-span-6 -mt-6",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2",children:e.jsx("div",{className:"mt-5",children:e.jsx("h1",{className:"font-semibold text-xl",children:"PROPERTY TAX"})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1",children:[e.jsx("h1",{className:"text-bold  text-md text-black",children:"Introduction:"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["‘Property tax’ or ‘House tax’ is a land tax on building, along with appurtenant (belonging) land. It is imposed on the Possessor and not on the custodian of the property.",e.jsx("br",{}),"The project will tackle difficulties faced by the land owners and tax collector for the survey, assessment, calculation and payment of property tax.",e.jsx("br",{}),"The project in whole will deal with all aspects of property tax management, from survey to collection.",e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("h1",{className:"text-bold mt-2 text-md text-black",children:" Project Scope:"}),e.jsx("p",{className:"text-sm text-gray-500",children:"The main scope of the Tax Management system is to generate unique ID demand & unique property ID generation for citizens, direct form filling from the tax collector’s device (tab or a smartphone), e signature/confirmation done by the property owner after reviewing the details of self-assessment. Hence reducing the workload of back office for digitization."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h1",{className:"font-semibold text-lg",children:" Citizen Portal: - "}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-bold mt-2 text-md text-black",children:"New-assessment "}),e.jsx("p",{className:"text-sm text-gray-600",children:"The citizen themselves can fill in their online assessment form."})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-bold mt-2 text-md text-black",children:"Reassessment  "}),e.jsx("p",{className:"text-sm text-gray-500",children:"The citizen themselves reassess their previous property details in case there is addition to a building in terms of construction, or reassessment for a new financial year."})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-bold mt-2 text-md text-black",children:"Reassessment with mutation  "}),e.jsx("p",{className:"text-sm text-gray-6500",children:"The citizen can use this portal for reassessment if a property is being sold or transferred to another person. This reassessment will require prescribed documents that have to be uploaded at the time of filling.."})]})]})]})]}),e.jsx("div",{className:"col-span-3 ",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"space-y-2 p-4",children:[e.jsx("h1",{className:"text-center -mt-4 font-semibold bg-teal-500 p-0 text-lg",children:"FAQ ?"}),g.map((t,m)=>e.jsxs("details",{className:"rounded-lg  shadow-lg bg-white",children:[e.jsx("summary",{className:"px-3 py-1 cursor-pointer font-semibold bg-sky-200 h-8 rounded-lg text-gray-700 text-sm",children:t.title}),e.jsx("p",{className:"px-4 py-6 pt-4 ml-4 -mt-4 text-gray-500 text-xs",children:t.body})]}))]})})})})]})]})]})}export{H as default};
