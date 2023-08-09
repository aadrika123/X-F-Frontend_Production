import{h as M,r as i,u as j,d as p,e as u,f as c,F as H,j as e,i as I,w as V,U as R,A as U,Q as h}from"./index-8dee1bf7.js";function J(){var N,v,x,b,f,_,T,w,$,C,k,E;const{api_BanquetMarriageApplicationDetailToEdit:F,api_getAdvertMasterData:A,api_BanquetMarriageEditedApplication:P}=U(),{id:m}=M();console.log("application id through param",m);const[S,g]=i.useState(!1),[r,W]=i.useState(),[d,G]=i.useState();i.useState(!0);let o="mt-6 -ml-6 text-xs text-gray-600",n="text-xs rounded leading-5 shadow-md px-1.5 py-1 w-full h-6 md:h-8  mt-5 ";const y=(l,a)=>{h.dismiss(),a=="escalated"&&h.success(l),a=="de-escalated"&&h.warn(l),a=="error"&&h.error(l)},z={remarks:"",hallType:r==null?void 0:r.hall_type_id,organizationType:r==null?void 0:r.organization_type_id,floorArea:r==null?void 0:r.floor_area,landDeedType:r==null?void 0:r.land_deed_type_id,waterSupplyType:r==null?void 0:r.water_supply_type_id,electricityType:r==null?void 0:r.electricity_type_id,securityType:r==null?void 0:r.security_type_id,noOfCctv:r==null?void 0:r.cctv_camera,noFireExtinguishers:r==null?void 0:r.fire_extinguisher,noEntryGates:r==null?void 0:r.entry_gate,noExitGate:r==null?void 0:r.exit_gate,noTwoWheelerParking:r==null?void 0:r.two_wheelers_parking,noFourWheelerParking:r==null?void 0:r.four_wheelers_parking},s=j({initialValues:z,enableReinitialize:!0,onSubmit:l=>{console.log("banquetForm",l),L(l)}}),O=l=>{console.log("target type",l.target.type),console.log("check box name",l.target.name),l.target.name;let a=l.target.value;console.log("ulb id 1 ...",a)};i.useEffect(()=>{q()},[]);const q=()=>{g(!0);const l={applicationId:m};p.post(`${F}`,l,u()).then(function(a){console.log("application details 22",a.data.data),W(a.data.data),g(!1)}).catch(function(a){console.log("errorrr.... ",a),g(!1)})};i.useEffect(()=>{B()},[]);const B=l=>{p.post(`${A}`,u()).then(function(a){console.log("master data for self advertisement",a.data.data),G(a.data.data)}).catch(function(a){console.log("errorrr.... ",a)})},L=l=>{const a={applicationId:m,remarks:l==null?void 0:l.remarks,floorArea:l==null?void 0:l.floorArea,hallType:l==null?void 0:l.hallType,organizationType:l==null?void 0:l.organizationType,landDeedType:l==null?void 0:l.landDeedType,waterSupplyType:l==null?void 0:l.waterSupplyType,electricityType:l==null?void 0:l.electricityType,securityType:l==null?void 0:l.securityType,cctvCamera:l==null?void 0:l.noOfCctv,fireExtinguisher:l==null?void 0:l.noFireExtinguishers,entryGate:l==null?void 0:l.noEntryGates,exitGate:l==null?void 0:l.noExitGate,twoWheelersParking:l==null?void 0:l.noTwoWheelerParking,fourWheelersParking:l==null?void 0:l.noFourWheelerParking};console.log("request body to update form",a),p.post(`${P}`,a,u()).then(function(t){console.log("edited application data",t),y("Application Updated Successfully ","escalated")}).catch(function(t){console.log("errorrr.... ",t),y("Failed to update ","escalated")})};return console.log("master data",d),console.log("application detail",r),c(H,{children:[S&&e(I,{}),e(V,{position:"top-right",autoClose:5e3}),e("div",{className:"  ml-4 w-full",children:e("form",{onSubmit:s.handleSubmit,onChange:O,children:c("div",{children:[e("div",{className:"bg-white",children:c("div",{className:"container mx-auto my-5 p-5",children:[c("div",{className:"md:flex no-wrap md:-mx-2 ",children:[e("div",{className:"w-full md:w-3/12 md:mx-2 shadow-xl flex justify-center items-center ",children:c("div",{className:"bg-white items-center my-auto ",children:[c("div",{className:"image overflow-hidden text-center",children:[e("div",{className:"text-indigo-600 font-bold text-2xl leading-8",children:r==null?void 0:r.application_no}),e("div",{className:"text-sm text-gray-600",children:"Application No."})]}),c("div",{className:"image overflow-hidden text-center mt-10",children:[e("div",{className:"text-gray-900 font-bold text-lg leading-8",children:r==null?void 0:r.application_date}),e("div",{className:"text-sm text-gray-600",children:"Apply Date"})]})]})}),e("div",{className:"w-full md:w-9/12 mx-2 h-auto",children:c("div",{className:"bg-white p-3 shadow-xl rounded-sm",children:[c("div",{className:"flex items-center pl-4 space-x-2 font-semibold text-gray-900 leading-8",children:[e("span",{clas:"text-green-500",children:e(R,{})}),e("span",{className:"tracking-wide text-3xl",children:r==null?void 0:r.headertitle})]}),e("div",{className:"text-gray-700 py-6",children:c("div",{className:"grid md:grid-cols-2 text-sm",children:[c("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Applicant Name  : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.applicant})]}),c("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Appication No   : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.application_no})]}),c("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Entity Address   : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.entity_address})]}),c("div",{className:"grid grid-cols-2",children:[e("div",{className:"px-4 py-2 font-semibold",children:"Entity Name  : "}),e("div",{className:"px-4 py-2",children:r==null?void 0:r.entity_name})]})]})})]})})]}),e("div",{})]})}),e("h1",{className:"font-semibold text-gray-600 text-xl text-center",children:"Verify Data"}),c("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 container mx-auto pb-8 gap-4 mt-3 p-4 ",children:[e("div",{className:"col-span-7",children:c("div",{className:"col-span-6 p-2 bg-white shadow-lg",children:[c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5  bg-violet-100 p-2",children:[e("div",{className:"col-span-1",children:e("p",{className:"text-center font-semibold",children:"Fields"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{className:"text-center font-semibold",children:"Filled Data"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{className:"text-center font-semibold",children:"Edit"})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Hall Type"})}),c("div",{className:"col-span-2 mr-2 ",children:[c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.hall_type_name," "]}),e("p",{className:"text-red-500 text-xs absolute",children:s.touched.hallType&&s.errors.hallType?s.errors.hallType:null})]}),c("div",{className:"col-span-2 mr-2 ",children:[c("select",{className:`${n} bg-white `,...s.getFieldProps("hallType"),children:[e("option",{children:"select "}),(v=(N=d==null?void 0:d.paramCategories)==null?void 0:N.HallType)==null?void 0:v.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]}),e("p",{className:"text-red-500 text-xs absolute",children:s.touched.hallType&&s.errors.hallType?s.errors.hallType:null})]})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Organization Type"})}),e("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.organization_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...s.getFieldProps("organizationType"),children:[e("option",{children:"select "}),(b=(x=d==null?void 0:d.paramCategories)==null?void 0:x.OrganizationType)==null?void 0:b.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Floor Area"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"text",name:"floorArea",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.floor_area})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"text",name:"floorArea",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.floorArea})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Land Deed Type"})}),e("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.land_deed_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...s.getFieldProps("landDeedType"),children:[e("option",{children:"select "}),(_=(f=d==null?void 0:d.paramCategories)==null?void 0:f.LandDeedType)==null?void 0:_.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Water Supply Type"})}),e("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.water_supply_type_name,"  "]})}),e("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...s.getFieldProps("waterSupplyType"),children:[e("option",{children:"select "}),(w=(T=d==null?void 0:d.paramCategories)==null?void 0:T.WaterSupplyType)==null?void 0:w.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Electricity Type"})}),e("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.electricity_type_name,"  "]})}),e("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...s.getFieldProps("electricityType"),children:[e("option",{children:"select "}),(C=($=d==null?void 0:d.paramCategories)==null?void 0:$.ElectricityType)==null?void 0:C.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"Security Type"})}),e("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[r==null?void 0:r.security_type_name," "]})}),e("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...s.getFieldProps("securityType"),children:[e("option",{children:"select "}),(E=(k=d==null?void 0:d.paramCategories)==null?void 0:k.SecutityType)==null?void 0:E.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"No of CCTV Camera"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noOfCctv",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.cctv_camera})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noOfCctv",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.noOfCctv})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"No. of Fire Extinguishers"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.fire_extinguisher})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.noFireExtinguishers})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"No. of Entry Gates"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noEntryGates",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.entry_gate})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noEntryGates",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.noEntryGates})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"No. of Exit Gates"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noExitGate",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.exit_gate})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noExitGate",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.noExitGate})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"No. of TWo Wheelers Parking Space"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.two_wheelers_parking})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.noTwoWheelerParking})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[e("div",{className:"col-span-1",children:e("p",{className:`${o}`,children:"No. of Four Wheelers Parking Space"})}),e("div",{className:"col-span-2 mr-2 ",children:e("p",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:r==null?void 0:r.four_wheelers_parking})}),e("div",{className:"col-span-2 mr-2 ",children:e("input",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n}`,onChange:s.handleChange,value:s.values.noFourWheelerParking})})]})]})}),c("div",{className:"col-span-5",children:[c("div",{className:"flex flex-col space-y-2 mb-2",children:[e("label",{htmlFor:"remarks",className:"text-zinc-500 capitalize text-lg font-semibold",children:"Remarks"}),e("textarea",{name:"remarks",onChange:s.handleChange,value:s.values.remarks,className:"bg-gray-100 text-xs border-2 border-gray-400 rounded-md px-4 py-2 h-32 shadow-md",placeholder:"Write your remarks here..."})]}),e("div",{className:"text-center",children:e("button",{type:"submit",className:"text-md mt-4 py-2 px-16 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:outline-none focus:ring-0",children:"submit"})})]})]})]})})})]})}export{J as default};
