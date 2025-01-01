import{k as z,r as i,d as L,e as p,f as u,g as s,F as j,j as e,l as q,t as I,_ as V,A as H,Q as m}from"./index-7796fcbb.js";function U(){var y,v,f,b,x,_,$,w,T,C;const{api_DharamshalaApplicationDetailToEdit:k,api_getAdvertMasterData:E,api_DharamshalaEditedApplication:F}=H(),{id:h}=z();console.log("application id through param",h);const[A,g]=i.useState(!1),[r,O]=i.useState(),[o,P]=i.useState();i.useState(!0);let a="mt-6 -ml-6 text-xs text-gray-600",n="text-xs rounded leading-5 shadow-md px-1.5 py-1 w-full h-6 md:h-8  mt-5 ";const N=(l,d)=>{m.dismiss(),d=="escalated"&&m.success(l),d=="de-escalated"&&m.warn(l),d=="error"&&m.error(l)},S={remarks:"",floorArea:r==null?void 0:r.floorArea,noOfBeds:r==null?void 0:r.noOfBeds,noOfRooms:r==null?void 0:r.noOfRooms,hallType:r==null?void 0:r.hall_type_id,organizationType:r==null?void 0:r.organization_type_id,floorArea:r==null?void 0:r.floor_area,landDeedType:r==null?void 0:r.land_deed_type_id,waterSupplyType:r==null?void 0:r.water_supply_type_id,electricityType:r==null?void 0:r.electricity_type_id,securityType:r==null?void 0:r.security_type_id,noOfCctv:r==null?void 0:r.cctv_camera,noFireExtinguishers:r==null?void 0:r.fire_extinguisher,noEntryGates:r==null?void 0:r.entry_gate,noExitGate:r==null?void 0:r.exit_gate,noTwoWheelerParking:r==null?void 0:r.two_wheelers_parking,noFourWheelerParking:r==null?void 0:r.four_wheelers_parking},c=L({initialValues:S,enableReinitialize:!0,onSubmit:l=>{console.log("banquetForm",l),R(l)}}),W=l=>{console.log("target type",l.target.type),console.log("check box name",l.target.name),l.target.name;let d=l.target.value;console.log("ulb id 1 ...",d)};i.useEffect(()=>{G()},[]);const G=()=>{g(!0);const l={applicationId:h};p.post(`${k}`,l,u()).then(function(d){console.log("application details 22",d.data.data),O(d.data.data),g(!1)}).catch(function(d){console.log("errorrr.... ",d),g(!1)})};i.useEffect(()=>{B()},[]);const B=l=>{p.post(`${E}`,u()).then(function(d){console.log("master data for self advertisement",d.data.data),P(d.data.data)}).catch(function(d){console.log("errorrr.... ",d)})},R=l=>{const d={applicationId:h,remarks:l==null?void 0:l.remarks,floorArea:l==null?void 0:l.floorArea,noOfBeds:l==null?void 0:l.noOfBeds,noOfRooms:l==null?void 0:l.noOfRooms,organizationType:l==null?void 0:l.organizationType,landDeedType:l==null?void 0:l.landDeedType,waterSupplyType:l==null?void 0:l.waterSupplyType,electricityType:l==null?void 0:l.electricityType,securityType:l==null?void 0:l.securityType,cctvCamera:l==null?void 0:l.noOfCctv,fireExtinguisher:l==null?void 0:l.noFireExtinguishers,entryGate:l==null?void 0:l.noEntryGates,exitGate:l==null?void 0:l.noExitGate,twoWheelersParking:l==null?void 0:l.noTwoWheelerParking,fourWheelersParking:l==null?void 0:l.noFourWheelerParking};console.log("request body to update form",d),p.post(`${F}`,d,u()).then(function(t){console.log("edited application data",t),N("Application Updated Successfully ","escalated")}).catch(function(t){console.log("errorrr.... ",t),N("Failed to update ","escalated")})};return console.log("master data",o),console.log("application detail",r),s(j,{children:[A&&e(q,{}),e(I,{position:"top-right",autoClose:5e3}),e("div",{className:"  ml-4 w-full",children:e("form",{onSubmit:c.handleSubmit,onChange:W,children:s("div",{children:[e("div",{className:"bg-white",children:s("div",{className:"container mx-auto my-5 p-5",children:[s("div",{className:"md:flex no-wrap md:-mx-2 ",children:[e("div",{className:"w-full md:w-3/12 md:mx-2 shadow-xl flex justify-center items-center ",children:s("div",{className:"bg-white items-center my-auto ",children:[s("div",{className:"image overflow-hidden text-center",children:[e("div",{className:"text-indigo-600 font-bold text-2xl leading-8",children:r==null?void 0:r.application_no}),e("div",{className:"text-sm text-gray-600",children:"Application No."})]}),s("div",{className:"image overflow-hidden text-center mt-10",children:[e("div",{className:"text-gray-900 font-bold text-lg leading-8",children:r==null?void 0:r.application_date}),e("div",{className:"text-sm text-gray-600",children:"Apply Date"})]})]})}),e("div",{className:"w-full md:w-9/12 mx-2 h-auto",children:s("div",{className:"bg-white p-3 shadow-xl rounded-sm",children:[s("div",{className:"flex items-center pl-4 space-x-2 font-semibold text-gray-900 leading-8",children:[e("span",{clas:"text-green-500",children:e(V,{})}),e("span",{className:"tracking-wide text-3xl",children:r==null?void 0:r.headertitle})]}),e("div",{className:"text-gray-700 py-6",children:s("div",{className:"grid md:grid-cols-2 text-sm",children:[s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Applicant Name  : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.applicant})]}),s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Appication No   : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.application_no})]}),s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Entity Address   : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.entity_address})]}),s("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Entity Name  : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.entity_name})]})]})})]})})]}),e("div",{})]})}),e("h1",{className:"font-semibold text-gray-600 text-xl text-center",children:"Verify Data"}),s("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 container mx-auto pb-8 gap-4 mt-3 p-4 ",children:[e("div",{className:"col-span-7",children:s("div",{className:"col-span-6 p-2 bg-white shadow-lg",children:[s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5  bg-violet-100 p-2",children:[e("div",{className:"col-span-1",children:e("p",{className:"text-center font-semibold",children:"Fields"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{className:"text-center font-semibold",children:"Filled Data"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{className:"text-center font-semibold",children:"Edit"})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Floor Area"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"text",name:"floorArea",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.floor_area})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"text",name:"floorArea",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.floorArea})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Organization Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.organization_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("organizationType"),children:[e("option",{children:"select "}),(v=(y=o==null?void 0:o.paramCategories)==null?void 0:y.OrganizationType)==null?void 0:v.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Land Deed Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.land_deed_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("landDeedType"),children:[e("option",{children:"select "}),(b=(f=o==null?void 0:o.paramCategories)==null?void 0:f.LandDeedType)==null?void 0:b.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Water Supply Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.water_supply_type_name,"  "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("waterSupplyType"),children:[e("option",{children:"select "}),(_=(x=o==null?void 0:o.paramCategories)==null?void 0:x.WaterSupplyType)==null?void 0:_.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Electricity Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.electricity_type_name,"  "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("electricityType"),children:[e("option",{children:"select "}),(w=($=o==null?void 0:o.paramCategories)==null?void 0:$.ElectricityType)==null?void 0:w.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"Security Type"})}),e("div",{className:"col-span-2 mr-2 ",children:s("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.security_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:s("select",{className:`${n} bg-white`,...c.getFieldProps("securityType"),children:[e("option",{children:"select "}),(C=(T=o==null?void 0:o.paramCategories)==null?void 0:T.SecutityType)==null?void 0:C.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Beds"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noOfBeds",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.noOfBeds})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noOfBeds",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noOfBeds})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Rooms"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noOfRooms",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.noOfRooms})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noOfRooms",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noOfRooms})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No of CCTV Camera"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noOfCctv",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.cctv_camera})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noOfCctv",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noOfCctv})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Fire Extinguishers"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.fire_extinguisher})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noFireExtinguishers})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Entry Gates"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noEntryGates",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.entry_gate})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noEntryGates",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noEntryGates})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Exit Gates"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noExitGate",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.exit_gate})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noExitGate",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noExitGate})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of TWo Wheelers Parking Space"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.two_wheelers_parking})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noTwoWheelerParking})})]}),s("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${a}`,children:"No. of Four Wheelers Parking Space"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.four_wheelers_parking})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n}`,onChange:c.handleChange,value:c.values.noFourWheelerParking})})]})]})}),s("div",{className:"col-span-5",children:[s("div",{className:"flex flex-col space-y-2 mb-2",children:[e("label",{htmlFor:"remarks",className:"text-zinc-500 capitalize text-lg font-semibold",children:"Remarks"}),e("textarea",{name:"remarks",onChange:c.handleChange,value:c.values.remarks,className:"bg-gray-100 text-xs border-2 border-gray-400 rounded-md px-4 py-2 h-32 shadow-md",placeholder:"Write your remarks here..."})]}),e("div",{className:"text-center",children:e("button",{type:"submit",className:"text-md mt-4 py-2 px-16 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:outline-none focus:ring-0",children:"submit"})})]})]})]})})})]})}export{U as default};
