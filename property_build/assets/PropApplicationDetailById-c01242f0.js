import{u as m,e as h,r as a,j as e,aA as N,b as j,ac as b,g as f}from"./index-3a3e7484.js";import{B as v}from"./BackComponent-06a572f5.js";function p(){var r,l;const{safId:x}=m(),d=h(),{api_getPropertyApplicationList:n}=f(),[s,i]=a.useState(),o=()=>{const t=j();b.post(`${n}`,{propertyId:x},t).then(function(c){i(c.data.data)}).catch(function(c){})};return a.useEffect(()=>{o()},[x]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-2 container mx-auto w-full p-4 mt-5  rounded-lg bg-white shadow-lg ",children:[e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsxs("button",{className:"bg-amber-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-28 px-0 py-1 rounded-md text-center",onClick:()=>d(`/propertyDemandDetails/${x}`),children:[" ","DEMAND DETAIL"]})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsxs("button",{className:"bg-amber-200 text-gray-600 border-b-2 shadow-lg border-white text-xs w-28 px-0 py-1 rounded-md text-center",onClick:()=>d("/propertyPayment"),children:[" ","PAYMENT DETAILS"]})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsx("button",{className:"bg-sky-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-28 px-0 py-1 rounded-md text-center",onClick:()=>d(`/safform/re/${x}`),children:"RE-ASSESSMENT"})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsx("button",{className:"bg-sky-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-32 px-0 py-1 rounded-md text-center",onClick:()=>d(`/waterHarvesting/${x}`),children:"WATER HARVESTING"})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsx("button",{className:"bg-sky-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-28 px-0 py-1 rounded-md text-center",onClick:()=>d(`/objection/${x}`),children:"OBJECTION"})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsx("button",{className:"bg-sky-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-28 px-0 py-1 rounded-md text-center",onClick:()=>d(`/con-form/${x}`),children:"CONCESSION"})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsx("button",{className:"bg-sky-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-28 px-0 py-1 rounded-md text-center",onClick:()=>d(`/waterHarvesting/${x}`),children:"BIFURCATION"})}),e.jsx("div",{className:"col-span-1  mx-auto",children:e.jsx("button",{className:"bg-sky-200 text-gray-600 border-b-2 shadow-lg border-white text-xs  w-28 px-0 py-1 rounded-md text-center",onClick:()=>d(`/waterHarvesting/${x}`),children:"AMALGAMATION"})})]}),e.jsx("div",{className:"col-span-1 p-2 float-right",children:e.jsx(N,{to:"/search",children:e.jsx(v,{})})}),e.jsxs("div",{className:"col-span-10 bg-gray-50 rounded-lg p-4",children:[e.jsxs("div",{className:" ",children:[e.jsx("div",{className:" ",children:e.jsx("h1",{className:" text-gray-600 font-semibold text-2xl text-center ",children:"APPLICATION REVIEW"})}),e.jsx("div",{className:" float-right p-2"})]}),e.jsx("div",{className:" p-2  flex flex-col md:flex-row",children:e.jsx("div",{children:e.jsxs("h1",{className:" text-gray-600 font-semibold text-xs md:text-lg",children:[" ",e.jsxs("span",{className:"text-green-500",children:["SAF NO:- ",s==null?void 0:s.saf_no]})]})})}),e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl  text-[#37517e] ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/6592/6592963.png",alt:"pin",className:"w-5 inline"})," ","Basic Details"]}),e.jsxs("div",{className:" rounded-lg shadow-lg py-6 border mt-2 bg-white",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Ward No."}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.old_ward_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"New Ward No"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.old_ward_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Ownership Type"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.ownership_type})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Property Type"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.property_type})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Zone"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.zone_mstr_id})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Property has Mobile Tower(s) ?"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.is_mobile_tower})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Property has Hoarding Board(s) ?"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.is_hoarding_board})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Is property a Petrol Pump ?"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.is_petrol_pump})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Rainwater harvesting provision ?"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.is_water_harvesting})]}),e.jsx("div",{className:"flex-1 text-xs"})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-6 text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ","Property Address & Details"]}),e.jsxs("div",{className:"border-l-2 border rounded-lg shadow-lg py-6 mt-2 bg-white",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Khata No."}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.khata_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Plot No"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.plot_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Village/Mauja Name"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.village_mauja_name})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Area of Plot"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.area_of_plot})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Road Width"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.road_type_mstr_id})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"City"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.prop_city})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"District"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.prop_dist})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"State"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.prop_state})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Pin"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.prop_pin_code})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Locality"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.prop_address})]})]}),e.jsx("div",{}),e.jsxs("div",{className:"col-span-4 grid grid-cols-5 justify-center items-center mt-4 mb-4",children:[e.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("label",{className:"form-check-label text-gray-800",children:[" ",e.jsx("small",{className:"block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center",children:"Corresponding Address"})]})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"City"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.corr_city})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"District"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.corr_dist})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"State"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.corr_state})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Pin"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.corr_pin_code})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Locality"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.corr_address})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-6 text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/616/616494.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ","Electricity & Water Details"]}),e.jsxs("div",{className:"border-l-2 border rounded-lg shadow-lg py-6  mt-2 bg-white",children:[e.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Electricity K. No"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.khata_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"ACC No."}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.elect_acc_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"BIND/BOOK No."}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.elect_bind_book_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Electricity Consumer Category"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.elect_cons_category})]}),e.jsx("div",{className:"flex-1 text-xs"})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Building Plan Approval No."}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.building_plan_approval_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Building Plan Approval Date"}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.building_plan_approval_date})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Water Consumer No."}),e.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s==null?void 0:s.khata_no})]}),e.jsxs("div",{className:"flex-1 text-xs",children:[e.jsx("div",{className:"text-[#37517e]",children:"Water Connection Date"}),e.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s==null?void 0:s.water_conn_date})]}),e.jsx("div",{className:"flex-1 text-xs"})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," ","Owner Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Owner Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Gender"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"DOB"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Guardian Name"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Relation"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Mobile No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Aadhar"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["PAN"," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["email"," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Is-Armed-Force"," "]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Is-Specially-Abled?"," "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(r=s==null?void 0:s.owners)==null?void 0:r.map(t=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:"Demo"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.owner_name}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.gender}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.dob}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.guardian_name}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.relation_type}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.mobile_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.aadhar_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.pan_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.email}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.is_armed_force}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.is_specially_abled})]}))})})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-[#37517e]",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/7699/7699994.png",alt:"building image",className:"inline w-4 text-[#37517e]"})," ","Floor Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Floor"," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Usage Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Occupancy Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Construction Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Built Up Area"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"From Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Upto Date"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(l=s==null?void 0:s.floors)==null?void 0:l.map(t=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:"Demo"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.floor_mstr_id}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.usage_type_mstr_id}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.occupancy_type_mstr_id}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.const_type_mstr_id}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.builtup_area}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.date_from}),e.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:t==null?void 0:t.date_upto})]}))})})]})]})]}),e.jsx("div",{className:"h-40 w-full"})]})}export{p as default};
