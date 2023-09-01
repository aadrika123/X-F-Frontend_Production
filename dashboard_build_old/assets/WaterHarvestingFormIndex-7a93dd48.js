import{r as a,c as V,d as X,aR as Z,b as Q,j as e,a as E,aH as J,aS as ee,X as te,ax as se,aG as ae,M,u as re,g as le,A,W,C as de,aT as ne,f as ie,_ as B}from"./index-e24d5f40.js";import{a as xe}from"./index.esm-49de7796.js";import{R as f}from"./rate-649e5b7d.js";import ce from"./OtpScreen-e9538d77.js";import{T as oe}from"./ThemeStyle-cd0bebeb.js";function me(t){var p,b;a.useState(!1);const[o,N]=a.useState(""),x=V({dateOfCompletion:X().required("This is a required field !"),rwhImage:Z().required("Upload an image")}),s=Q({initialValues:{isWaterHarvestingBefore:"",dateOfCompletion:"",rwhImage:""},onSubmit:(r,i)=>{console.log("waterHarvesting ",r),t.collectFormDataFun("waterHarvesting",r),t.nextFun(1)},validationSchema:x}),w=r=>{let i=r.target.files;N(r.target.files[0]),console.log("file in change => ",i),t.rwhFile(r.target.files[0])};return console.log("props master data in water harvesting",t.preFormData),e.jsxs(e.Fragment,{children:[e.jsxs("h1",{className:"mt-6 mb-2 font-serif font-semibold text-gray-600",children:[e.jsx(xe,{className:"inline mr-2"}),"Rain Water Harvesting"]}),e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg shadow-lg bg-white mx-auto flex flex-wrap gap-x-20 top-14 mb-6",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm",children:"Holding No.:    "}),e.jsx("span",{className:"font-semibold text-sm",children:(p=t==null?void 0:t.harvesting)==null?void 0:p.holding_no})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm",children:"Ward No.:    "}),e.jsx("span",{className:"font-semibold text-sm",children:(b=t==null?void 0:t.harvesting)==null?void 0:b.ward_mstr_id})]})]}),e.jsx("div",{className:"block p-4 w-full md:py-6 rounded-lg shadow-lg bg-white mx-auto  top-14",children:e.jsxs("form",{onSubmit:s.handleSubmit,onChange:s.handleChange,children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-2 gap-4",children:e.jsx("div",{className:"col-span-1",children:e.jsxs("div",{className:"flex flex-row space-x-3",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Does Completion of Water Harvesting is done before 31-03-2017?"]}),e.jsx("input",{className:"w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  darks:bg-gray-700 darks:border-gray-600",type:"radio",id:"isWaterHarvestingBefore",name:"isWaterHarvestingBefore",value:1,onChange:s.handleChange,required:!0}),e.jsx("label",{for:"option1",className:" text-sm font-medium text-gray-900 darks:text-gray-300",children:"Yes"}),e.jsx("input",{className:"w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  darks:bg-gray-700 darks:border-gray-600",type:"radio",id:"isWaterHarvestingBefore",name:"isWaterHarvestingBefore",value:0,onChange:s.handleChange,required:!0}),e.jsx("label",{for:"option1",className:"text-sm font-medium text-gray-900 darks:text-gray-300",children:"No"})]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-2 gap-4"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-2 gap-4",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Date of Completion of Water Harvesting Structure"]}),e.jsx("input",{type:"date",name:"dateOfCompletion",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"",value:s.values.dateOfCompletion,onChange:s.handleChange}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.dateOfCompletion&&s.errors.dateOfCompletion?s.errors.dateOfCompletion:null})]}),e.jsxs("div",{className:"col-span-1 mt-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Rain Water Harvesting Image"]}),e.jsx("input",{accept:".jpg,.jpeg",type:"file",name:"rwhImage",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"",value:s.values.rwhImage,onChange:w}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.rwhImage&&s.errors.rwhImage?s.errors.rwhImage:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-2",children:e.jsx("div",{className:"md:px-10 text-right",children:e.jsx("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save & Next"})})})]})})]})}function he(t){return a.useState(!1),E(),console.log("saf submit response data at safformdemand...",t.safSubmitResponse),e.jsxs("div",{className:" block p-4 mt-4 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto ",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-0 bg-green-400 text-center text-white font-serif py-2 text-lg shadow-lg border border-white",children:[e.jsx(J,{className:"text-white inline text-3xl"})," Your form has been submitted successfully"]}),e.jsx("div",{className:"w-full flex mb-10 mt-10",children:e.jsx("div",{className:"md:px-10 flex-1",children:e.jsxs("button",{onClick:()=>t.backFun(1),type:"button",className:"pl-4 pr-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",children:[e.jsx(ee,{className:"inline text-lg"})," Back"]})})}),e.jsx("div",{className:"mt-40"})]})}function be(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Rental Rate 1 "]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsxs("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:[e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",colSpan:1,children:".."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center border-r border-l border-white",colSpan:3,children:"ZONE 1"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center",colSpan:3,children:"ZONE 2"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Construction Type ------------ USE OF BUILDING"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-l border-white",children:"Pucca with RCC Roof (RCC)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Pucca with Asbestos/Corrugated Sheet (ACC)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-white",children:"Kuttcha with Clay Roof (Other)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Pucca with RCC Roof (RCC)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Pucca with Asbestos/Corrugated Sheet (ACC)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Kuttcha with Clay Roof (Other)"})]})]}),e.jsx("tbody",{className:"text-sm",children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"Residential"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"200.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-r border-gray-500",children:"1.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.075%"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.80"})]}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"Commercial"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"200.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-r border-gray-500",children:"1.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.075%"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.80"})]})]})})]})]})})}function ge(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Usage Factor 2"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white",children:"Usage Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Multiplying Factor"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"RESIDENTIAL"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"2"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"COMMERCIAL ESTABLISHMENTS AND UNDERTAKING OF STATE AND CENTRAL GOVERNMENT"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]})]})})]})]})})}function fe(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Rental Rate 2"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Construction Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white",children:"Principal Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Other"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"Pucca with RCC Roof (RCC)"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"144.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"115.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"86.00"})]})})})]})]})})}function pe(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Circle Rate 3 "]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsxs("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:[e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center border-r border-l border-white",colSpan:4,children:"DLX Apartment (Square Feet )"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center border-r border-l border-white",colSpan:4,children:"Building Pakka(Square Feet )"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center",colSpan:4,children:"Building Kaccha(Square Feet )"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"WARD NO"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-l border-white",children:"Urban Residential Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Commercial Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left ",children:"Urban Residential"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-white",children:"Urban Commercial"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Residential Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Commercial Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Residential"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-white",children:"Urban Commercial"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Residential Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Commercial Main Road"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Residential"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Urban Commercial"})]})]}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"200.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.075%"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-r border-gray-500",children:"1.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"200.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.075%"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-r border-gray-500",children:"1.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"200.00"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"0.075%"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-r border-gray-500",children:"1.00"})]})})})]})]})})}function ue(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Occupany factor 3"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white",children:"Occupancy Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Multiplying Factor"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"TENANTED"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"2"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"SELF OCCUPIED"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]})]})})]})]})})}function je(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Matrix factor 3"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Building Type----Road Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white",children:"Building Pakka"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Building Kaccha"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"Main Road"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"0.5"})]}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"Other Road"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"0.5"})]})]})})]})]})})}function ye(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Calculation Factor 3"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white",children:"Usage Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Multiplying Factor"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"RESIDENTIAL"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"2"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"COMMERCIAL ESTABLISHMENTS AND UNDERTAKING OF STATE AND CENTRAL GOVERNMENT"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]})]})})]})]})})}function Ne(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-2 font-semibold mt-4 text-gray-600 text-sm",children:[e.jsx("img",{className:"inline w-6",src:f,alt:"rate-image"})," Occupany factor 2"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white",children:"Occupancy Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Multiplying Factor"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"TENANTED"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left ",children:"2"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"SELF OCCUPIED"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left border-l border-gray-500",children:"2,241.00"})]})]})})]})]})})}const U={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"transparent",border:"none"}};function we(t){var g,j,m,y,h;const[o,N]=a.useState(""),[x,s]=a.useState(!1);a.useState(!1);const[w,p]=a.useState(!1);E(),console.log("form review data...",t==null?void 0:t.formReviewData,"and incoming image in review => ",t==null?void 0:t.rwhImGet);function b(){s(!1),N("")}function r(){p(!0)}function i(){}function u(){s(!1)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" block p-4 mt-4 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto",children:[e.jsx("h1",{className:"px-2 font-semibold mt-0 bg-gray-400 text-center text-white font-serif py-2 text-lg shadow-lg border border-white mb-10",children:"Review and submit your form details."}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{children:[e.jsxs("h1",{className:"px-1  font-semibold font-serif text-xs",children:[e.jsx("img",{src:te,alt:"pin",className:"w-5 inline"}),"Rain Water Harvesting"]}),e.jsxs("div",{className:"bg-green-50 rounded-lg shadow-lg py-6",children:[e.jsx("div",{className:"flex space-x-10 pl-4 ",children:e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-gray-500",children:"Does Completion of Water Harvesting is done before 31-03-2017?   "}),e.jsx("div",{className:"font-bold text-sm",children:((j=(g=t==null?void 0:t.formReviewData)==null?void 0:g.waterHarvesting)==null?void 0:j.isWaterHarvestingBefore)==1?"Yes":"No"})]})}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-gray-500",children:"Date of Completion of Water Harvesting Structure "}),e.jsx("div",{className:"font-semibold text-sm",children:(y=(m=t==null?void 0:t.formReviewData)==null?void 0:m.waterHarvesting)==null?void 0:y.dateOfCompletion})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-gray-500",children:"Water Harvesting Image "}),e.jsx("div",{className:"font-bold text-sm",children:(h=t==null?void 0:t.rwhImGet)==null?void 0:h.name})]}),e.jsx("div",{className:"flex-1 text-xs"})]})]})]})}),e.jsxs("div",{className:"w-full flex mb-10 mt-4",children:[e.jsx("div",{className:"md:px-10 flex-1",children:e.jsxs("button",{onClick:()=>t.backFun(),type:"button",className:"pl-4 pr-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",children:[e.jsx(se,{className:"inline text-lg"})," Edit"]})}),e.jsx("div",{className:"md:px-10 text-right flex-1",children:e.jsxs("button",{onClick:r,type:"button",className:" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Submit ",e.jsx(ae,{className:"inline text-lg"})]})})]}),e.jsx("div",{className:"w-full h-20"})]}),e.jsx(M,{isOpen:x,onRequestClose:b,style:U,contentLabel:"Example Modal",children:e.jsxs("div",{className:"relative rounded-xl p-6 border-2 border-gray-200 rounded bg-white",children:[o=="rental_rate1"&&e.jsx(be,{}),o=="usageFactor_rate2"&&e.jsx(ge,{}),o=="occupancyFactor_rate2"&&e.jsx(Ne,{}),o=="rental_rate2"&&e.jsx(fe,{}),o=="circle_rate3"&&e.jsx(pe,{}),o=="occupancyFactor_rate3"&&e.jsx(ue,{}),o=="matrixFactor_rate3"&&e.jsx(je,{}),o=="calculationFactor_rate3"&&e.jsx(ye,{})]})}),e.jsx(M,{isOpen:w,onAfterOpen:i,onRequestClose:u,style:U,contentLabel:"Example Modal",children:e.jsx(ce,{allFormData:t==null?void 0:t.formReviewData,submitFun:t.submitFun,closeOtpModaal:u})})]})}function ve(t){var r,i,u,g,j,m,y,h,T,v;const{bgCardColor:o,headingTxtTheme:N,paraTextTheme:x,btnTextColor:s,btnBgColor:w,headBgColor:p,titleHeadTxtTheme:b}=oe();return console.log("props.allFormData in feebback screen ",t==null?void 0:t.allFormData),console.log("props.assTypeText in feebback screen ",t==null?void 0:t.assTypeText),e.jsx("div",{children:e.jsx("div",{className:"",children:e.jsxs("div",{children:[e.jsx("div",{className:"mt-4",children:e.jsxs("h1",{className:"font-mono h-10 border-sky-500 border-2 rounded-lg text-sky-500 hover:bg-sky-50 py-1 px-4  m-2",children:["FEEDBACK For ",e.jsxs("strong",{className:"text-slate-500 text-xs capitalize",children:[" ",t==null?void 0:t.assTypeText,"  ! "]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 bg-gray-50 shadow-md p-2  border-t-4 border-sky-300",children:[e.jsx("div",{className:"col-span-4",children:e.jsx("h1",{className:`${b} font-bold`,children:"Water Harvesting"})}),((i=(r=t==null?void 0:t.allFormData)==null?void 0:r.waterHarvesting)==null?void 0:i.isWaterHarvestingBefore)==null?"":e.jsx("div",{className:"col-span-4 mt-1",children:e.jsxs("div",{className:"flex ",children:[e.jsx("div",{className:"flex-1",children:e.jsx("h1",{className:`${x} `,children:"Does Completion of Water Harvesting is done before 31-03-2017?  -"})}),e.jsx("div",{className:"flex-1",children:e.jsx("h1",{className:`${x} font-semibold mx-auto`,children:e.jsx("div",{className:"font-bold text-sm",children:((g=(u=t==null?void 0:t.formReviewData)==null?void 0:u.waterHarvesting)==null?void 0:g.isWaterHarvestingBefore)==1?"Yes":"No"})})})]})}),((m=(j=t==null?void 0:t.allFormData)==null?void 0:j.waterHarvesting)==null?void 0:m.dateOfCompletion)==null?"":e.jsx("div",{className:"col-span-4 mt-1",children:e.jsxs("div",{className:"flex flex-row ",children:[e.jsx("div",{className:"flex-1",children:e.jsx("h1",{className:`${x} `,children:"Date of Completion of Water Harvesting Structure -"})}),e.jsxs("div",{className:"flex-1",children:[" ",e.jsx("h1",{className:`${x} font-semibold mx-auto`,children:(h=(y=t==null?void 0:t.allFormData)==null?void 0:y.waterHarvesting)==null?void 0:h.dateOfCompletion})]})]})}),((T=t==null?void 0:t.rwhImGet)==null?void 0:T.name)==null?"":e.jsx("div",{className:"col-span-4 mt-1",children:e.jsxs("div",{className:"flex flex-row ",children:[e.jsx("div",{className:"flex-1",children:e.jsx("h1",{className:`${x} `,children:"Rain Water Harvesting Image -"})}),e.jsxs("div",{className:"flex-1",children:[" ",e.jsx("h1",{className:`${x} font-semibold mx-auto`,children:(v=t==null?void 0:t.rwhImGet)==null?void 0:v.name})]})]})})]})]})})})}function Te(){const{api_getMasterDataWaterHarvesting:t,api_postWaterHarvestingData:o,api_getHoldingDetails:N}=ie(),{id:x}=re();console.log("param re ..",x),E();const[s,w]=a.useState(),[p,b]=a.useState(),[r,i]=a.useState(1),[u,g]=a.useState("translate-x-0 mb-40"),[j,m]=a.useState("pl-20 translate-x-full"),[y,h]=a.useState("pl-20 translate-x-full"),[T,v]=a.useState("pl-20 translate-x-full"),[c,_]=a.useState({});a.useState("");const[L,P]=a.useState(),[$,G]=a.useState(),[q,R]=a.useState(!1),{notify:O}=a.useContext(le);let C="WATER HARVESTING";console.log("ass type . from main ",C);const I=l=>{let n=l;n==2&&(i(1),g("translate-x-0 mb-40"),m("pl-20 translate-x-full mb-0")),n==3&&(i(2),m("translate-x-0 mb-40"),h("pl-20 translate-x-full mb-0")),n==4&&(i(3),h("translate-x-0 mb-40"),v("pl-20 translate-x-full mb-0")),n==5&&(i(4),v("translate-x-0 mb-40"))},S=l=>{let n=l;n==1&&(i(2),g(" -translate-x-full right-80 mb-0"),m("pl-0 translate-x-0 mb-40")),n==2&&(i(3),m("-translate-x-full right-80 mb-0"),h("pl-0 translate-x-0 mb-40")),n==3&&(i(4),h("-translate-x-full right-80 mb-0"),v("pl-0 translate-x-0 mb-40"))},D=(l,n)=>{console.log("prev of all Data",c),_({...c,[l]:n})};a.useEffect(()=>{let l=window.localStorage.getItem("token");console.log("token at basic details is  get method...",l);const n={headers:{Authorization:`Bearer ${l}`,Accept:"application/json"}};A.get(`${t}`,n).then(function(d){console.log("water harvesting master data ....",d.data.data),P(d.data.data)}).catch(function(d){console.log("errorrr.... ",d)})},[]),a.useEffect(()=>{let l=window.localStorage.getItem("token");console.log("token at basic details is  get method...",l);const n={headers:{Authorization:`Bearer ${l}`,Accept:"application/json"}};A.post(N,{propertyId:x},n).then(d=>{var F;console.log("getting harvesting details => ",d),b((F=d==null?void 0:d.data)==null?void 0:F.data)}).catch(d=>{console.log("getting harvesting details error => ",d)})},[]);const K=()=>{console.log("final form ready to submit...",c),z()},z=()=>{var F,H;R(!0);let l=window.localStorage.getItem("token");console.log("token at basic details is post method...",l);const n={headers:{Authorization:`Bearer ${l}`,Accept:"application/json"}};console.log("submitting values in index => ",c==null?void 0:c.waterHarvesting,"and file is =>",s);let d=new FormData;d.append("isWaterHarvestingBefore",(F=c==null?void 0:c.waterHarvesting)==null?void 0:F.isWaterHarvestingBefore),d.append("dateOfCompletion",(H=c==null?void 0:c.waterHarvesting)==null?void 0:H.dateOfCompletion),d.append("rwhImage",s),d.append("propertyId",x),A.post(`${o}`,d,n).then(function(k){R(!1),console.log("response after submitting water harvesting data",k),G(k.data),B.success("Submitted Successfully !!"),S(2),R(!1)}).catch(function(k){console.log("errorrr.... ",k),R(!1),B.error("Something went wrong !!")})},Y=l=>{w(l),console.log("incoming image => ",l)};return console.log("form index",r),e.jsxs(e.Fragment,{children:[e.jsx(W,{position:"top-right",autoClose:2e3}),q&&e.jsx("div",{className:"inline",children:e.jsx(de,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),e.jsxs("div",{className:"w-full  mt-4 grid grid-cols-1 md:grid-cols-12 gap-2 lg:grid-cols-12 p-2",children:[e.jsx("div",{className:"col-span-9 w-full h-screen overflow-x-hidden",children:e.jsxs("div",{className:"w-full bg-white py-4 rounded-lg",children:[e.jsxs("h1",{className:"font-mono h-10 border-sky-500 border-2 rounded-lg text-sky-500 hover:bg-sky-50 py-1 px-4 m-2",children:["WELCOME TO PROPERTY. YOU ARE APPLYING FOR A ",e.jsxs("strong",{className:"text-slate-500 text-sm capitalize",children:[C," ! "]})]}),e.jsx("div",{children:e.jsx("div",{className:"text-right relative top-0 animate__animated animate__fadeInDown",children:e.jsxs("span",{className:"bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-md shadow-sky-400 font-semibold pr-4 p-2",children:[e.jsx(ne,{className:"inline"}),C]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-8  p-4 -mt-14  ",children:e.jsxs("div",{className:"col-span-8 ",children:[e.jsx(W,{position:"top-right",autoClose:2e3}),r==1&&e.jsx("div",{className:`${u} transition-all relative`,children:e.jsx(me,{preFormData:L,collectFormDataFun:D,toastFun:O,backFun:I,nextFun:S,rwhFile:Y,harvesting:p})}),r==2&&e.jsx("div",{className:`${j} transition-all relative`,children:e.jsx(we,{formReviewData:c,collectFormDataFun:D,submitFun:K,toastFun:O,backFun:I,nextFun:S,rwhImGet:s})}),r==3&&e.jsx("div",{className:`${y} transition-all relative`,children:e.jsx(he,{toastFun:O,backFun:I,nextFun:S,safSubmitResponse:$})})]})})]})}),r!=2&&e.jsx("div",{className:"col-span-3 bg-white w-full h-screen  rounded-lg p-2 overflow-auto",children:e.jsx(ve,{allFormData:c,assTypeText:C,rwhImGet:s})}),r==2&&e.jsxs("div",{className:"col-span-3 bg-white w-full h-screen  rounded-lg p-2 overflow-auto",children:[e.jsx("div",{className:"mt-4",children:e.jsxs("h1",{className:"font-mono h-10 border-sky-500 border-2 rounded-lg text-sky-500 hover:bg-sky-50 py-1 px-4  m-2",children:["FEEDBACK For ",e.jsxs("strong",{className:"text-slate-500 text-xs capitalize",children:[" ",C," ! "]})]})}),e.jsx("img",{src:"https://img.freepik.com/free-vector/customer-survey-concept-illustration_114360-2594.jpg?w=740&t=st=1668512900~exp=1668513500~hmac=b3ae0ac3b6592284527249c349f899bf6ed80bbc5c2581aeb2af0d557f5406bc",className:"opacity-80"})]})]})]})}export{Te as default};
