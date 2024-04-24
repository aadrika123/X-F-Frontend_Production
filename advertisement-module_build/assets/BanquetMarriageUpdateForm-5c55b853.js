import{u as j,i as I,r as g,b as H,d as u,e as y,f as c,F as R,j as l,B as V,a1 as U,A as Q,Q as h}from"./index-d822e393.js";import{G as J}from"./index.esm-edb95042.js";function Y(){var v,b,f,w,x,k,_,P,T,$,C,E;const{t:s}=j(),{api_BanquetMarriageApplicationDetailToEdit:F,api_getAdvertMasterData:A,api_BanquetMarriageEditedApplication:S}=Q(),{id:m}=I();console.log("application id through param",m);const[G,t]=g.useState(!1),[e,W]=g.useState(),[d,O]=g.useState();g.useState(!0);let i="mt-6 -ml-6 text-xs text-gray-600",n="text-xs rounded leading-5 shadow-md px-1.5 py-1 w-full h-6 md:h-8  mt-5 ";const N=(r,o)=>{h.dismiss(),o=="escalated"&&h.success(r),o=="de-escalated"&&h.warn(r),o=="error"&&h.error(r)},z={remarks:"",hallType:e==null?void 0:e.hall_type_id,organizationType:e==null?void 0:e.organization_type_id,floorArea:e==null?void 0:e.floor_area,landDeedType:e==null?void 0:e.land_deed_type_id,waterSupplyType:e==null?void 0:e.water_supply_type_id,electricityType:e==null?void 0:e.electricity_type_id,securityType:e==null?void 0:e.security_type_id,noOfCctv:e==null?void 0:e.cctv_camera,noFireExtinguishers:e==null?void 0:e.fire_extinguisher,noEntryGates:e==null?void 0:e.entry_gate,noExitGate:e==null?void 0:e.exit_gate,noTwoWheelerParking:e==null?void 0:e.two_wheelers_parking,noFourWheelerParking:e==null?void 0:e.four_wheelers_parking},a=H({initialValues:z,enableReinitialize:!0,onSubmit:r=>{console.log("banquetForm",r),M(r)}}),q=r=>{console.log("target type",r.target.type),console.log("check box name",r.target.name),r.target.name;let o=r.target.value;console.log("ulb id 1 ...",o)};g.useEffect(()=>{B()},[]);const B=()=>{t(!0);const r={applicationId:m};u.post(`${F}`,r,y()).then(function(o){console.log("application details 22",o.data.data),W(o.data.data),t(!1)}).catch(function(o){console.log("errorrr.... ",o),t(!1)})};g.useEffect(()=>{L()},[]);const L=r=>{u.post(`${A}`,{},y()).then(function(o){console.log("master data for self advertisement",o.data.data),O(o.data.data)}).catch(function(o){console.log("errorrr.... ",o)})},M=r=>{const o={applicationId:m,remarks:r==null?void 0:r.remarks,floorArea:r==null?void 0:r.floorArea,hallType:r==null?void 0:r.hallType,organizationType:r==null?void 0:r.organizationType,landDeedType:r==null?void 0:r.landDeedType,waterSupplyType:r==null?void 0:r.waterSupplyType,electricityType:r==null?void 0:r.electricityType,securityType:r==null?void 0:r.securityType,cctvCamera:r==null?void 0:r.noOfCctv,fireExtinguisher:r==null?void 0:r.noFireExtinguishers,entryGate:r==null?void 0:r.noEntryGates,exitGate:r==null?void 0:r.noExitGate,twoWheelersParking:r==null?void 0:r.noTwoWheelerParking,fourWheelersParking:r==null?void 0:r.noFourWheelerParking};console.log("request body to update form",o),u.post(`${S}`,o,y()).then(function(p){console.log("edited application data",p),N("Application Updated Successfully ","escalated")}).catch(function(p){console.log("errorrr.... ",p),N("Failed to update ","escalated")})};return console.log("master data",d),console.log("application detail",e),c(R,{children:[G&&l(V,{}),l(U,{position:"top-right",autoClose:5e3}),l("div",{className:"  ml-4 w-full",children:l("form",{onSubmit:a.handleSubmit,onChange:q,children:c("div",{children:[l("div",{className:"bg-white",children:c("div",{className:"container mx-auto my-5 p-5",children:[c("div",{className:"md:flex no-wrap md:-mx-2 ",children:[l("div",{className:"w-full md:w-3/12 md:mx-2 shadow-xl flex justify-center items-center ",children:c("div",{className:"bg-white items-center my-auto ",children:[c("div",{className:"image overflow-hidden text-center",children:[l("div",{className:"text-indigo-600 font-bold text-2xl leading-8",children:e==null?void 0:e.application_no}),l("div",{className:"text-sm text-gray-600",children:s("workflowPage.applicationNo.label")})]}),c("div",{className:"image overflow-hidden text-center mt-10",children:[l("div",{className:"text-gray-900 font-bold text-lg leading-8",children:e==null?void 0:e.application_date}),l("div",{className:"text-sm text-gray-600",children:s("workflowPage.applicationDate.label")})]})]})}),l("div",{className:"w-full md:w-9/12 mx-2 h-auto",children:c("div",{className:"bg-white p-3 shadow-xl rounded-sm",children:[c("div",{className:"flex items-center pl-4 space-x-2 font-semibold text-gray-900 leading-8",children:[l("span",{clas:"text-green-500",children:l(J,{})}),l("span",{className:"tracking-wide text-3xl",children:e==null?void 0:e.headertitle})]}),l("div",{className:"text-gray-700 py-6",children:c("div",{className:"grid md:grid-cols-2 text-sm",children:[c("div",{className:"grid grid-cols-2",children:[c("div",{className:"px-4 py-2 font-semibold",children:[s("workflowPage.applicantName.label")," :"," "]}),l("div",{className:"px-4 py-2",children:e==null?void 0:e.applicant})]}),c("div",{className:"grid grid-cols-2",children:[c("div",{className:"px-4 py-2 font-semibold",children:[s("workflowPage.applicationNo.label")," :"," "]}),l("div",{className:"px-4 py-2",children:e==null?void 0:e.application_no})]}),c("div",{className:"grid grid-cols-2",children:[c("div",{className:"px-4 py-2 font-semibold",children:[s("workflowPage.entityAddress.label")," :"," "]}),l("div",{className:"px-4 py-2",children:e==null?void 0:e.entity_address})]}),c("div",{className:"grid grid-cols-2",children:[c("div",{className:"px-4 py-2 font-semibold",children:[s("workflowPage.entityName.label")," :"," "]}),l("div",{className:"px-4 py-2",children:e==null?void 0:e.entity_name})]})]})})]})})]}),l("div",{})]})}),l("h1",{className:"font-semibold text-gray-600 text-xl text-center",children:s("workflowPage.verifyData.label")}),c("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 container mx-auto pb-8 gap-4 mt-3 p-4 ",children:[l("div",{className:"col-span-7",children:c("div",{className:"col-span-6 p-2 bg-white shadow-lg",children:[c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5  bg-violet-100 p-2",children:[l("div",{className:"col-span-1",children:c("p",{className:"text-center font-semibold",children:[" ",s("workflowPage.fields.label")]})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{className:"text-center font-semibold",children:s("workflowPage.filledData.label")})}),l("div",{className:"col-span-2 mr-2 ",children:c("p",{className:"text-center font-semibold",children:[" ",s("workflowPage.edit.label")]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:c("p",{className:`${i}`,children:[" ",s("workflowPage.hallType.label")]})}),c("div",{className:"col-span-2 mr-2 ",children:[c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[e==null?void 0:e.hall_type_name," "]}),l("p",{className:"text-red-500 text-xs absolute",children:a.touched.hallType&&a.errors.hallType?a.errors.hallType:null})]}),c("div",{className:"col-span-2 mr-2 ",children:[c("select",{className:`${n} bg-white `,...a.getFieldProps("hallType"),children:[c("option",{children:[" ",s("workflowPage.select.label")," "]}),(b=(v=d==null?void 0:d.paramCategories)==null?void 0:v.HallType)==null?void 0:b.map(r=>l("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.string_parameter}))]}),l("p",{className:"text-red-500 text-xs absolute",children:a.touched.hallType&&a.errors.hallType?a.errors.hallType:null})]})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:c("p",{className:`${i}`,children:[" ",s("workflowPage.organizationType.label")]})}),l("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[e==null?void 0:e.organization_type_name," "]})}),l("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...a.getFieldProps("organizationType"),children:[c("option",{children:[" ",s("workflowPage.select.label")," "]}),(w=(f=d==null?void 0:d.paramCategories)==null?void 0:f.OrganizationType)==null?void 0:w.map(r=>l("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:c("p",{className:`${i}`,children:[" ",s("workflowPage.floorArea.label")]})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"text",name:"floorArea",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.floor_area})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"text",name:"floorArea",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.floorArea})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.landDeedType.label")})}),l("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[e==null?void 0:e.land_deed_type_name," "]})}),l("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...a.getFieldProps("landDeedType"),children:[l("option",{children:"select "}),(k=(x=d==null?void 0:d.paramCategories)==null?void 0:x.LandDeedType)==null?void 0:k.map(r=>l("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.waterSupplyType.label")})}),l("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[e==null?void 0:e.water_supply_type_name," "]})}),l("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...a.getFieldProps("waterSupplyType"),children:[c("option",{children:[s("workflowPage.select.label")," "]}),(P=(_=d==null?void 0:d.paramCategories)==null?void 0:_.WaterSupplyType)==null?void 0:P.map(r=>l("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.electricityType.label")})}),l("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[e==null?void 0:e.electricity_type_name," "]})}),l("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...a.getFieldProps("electricityType"),children:[l("option",{children:s("workflowPage.select.label")}),($=(T=d==null?void 0:d.paramCategories)==null?void 0:T.ElectricityType)==null?void 0:$.map(r=>l("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.securityType.label")})}),l("div",{className:"col-span-2 mr-2 ",children:c("p",{className:`${n} bg-gray-100`,disabled:!0,children:[e==null?void 0:e.security_type_name," "]})}),l("div",{className:"col-span-2 mr-2 ",children:c("select",{className:`${n} bg-white`,...a.getFieldProps("securityType"),children:[c("option",{children:[s("workflowPage.select.label")," "]}),(E=(C=d==null?void 0:d.paramCategories)==null?void 0:C.SecutityType)==null?void 0:E.map(r=>l("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.string_parameter}))]})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.noOfCCTVCamera.label")})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"number",name:"noOfCctv",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.cctv_camera})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"number",name:"noOfCctv",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.noOfCctv})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.noOfFireExtinguishers.label")})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.fire_extinguisher})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"number",name:"noFireExtinguishers",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.noFireExtinguishers})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:c("p",{className:`${i}`,children:[" ",s("workflowPage.noOfEntryGates.label")]})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"number",name:"noEntryGates",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.entry_gate})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"number",name:"noEntryGates",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.noEntryGates})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.NoOfExitGates.label")})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"number",name:"noExitGate",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.exit_gate})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"number",name:"noExitGate",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.noExitGate})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.NoOfTwoWheelersParkingSpace.label")})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.two_wheelers_parking})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"number",name:"noTwoWheelerParking",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.noTwoWheelerParking})})]}),c("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 ml-8",children:[l("div",{className:"col-span-1",children:l("p",{className:`${i}`,children:s("workflowPage.noOfFourWheelersParkingSpace.label")})}),l("div",{className:"col-span-2 mr-2 ",children:l("p",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n} bg-gray-100`,disabled:!0,children:e==null?void 0:e.four_wheelers_parking})}),l("div",{className:"col-span-2 mr-2 ",children:l("input",{type:"number",name:"noFourWheelerParking",placeholder:"",className:`${n}`,onChange:a.handleChange,value:a.values.noFourWheelerParking})})]})]})}),c("div",{className:"col-span-5",children:[c("div",{className:"flex flex-col space-y-2 mb-2",children:[l("label",{htmlFor:"remarks",className:"text-zinc-500 capitalize text-lg font-semibold",children:s("workflowPage.Remarks.label")}),l("textarea",{name:"remarks",onChange:a.handleChange,value:a.values.remarks,className:"bg-gray-100 text-xs border-2 border-gray-400 rounded-md px-4 py-2 h-32 shadow-md",placeholder:"Write your remarks here..."})]}),l("div",{className:"text-center",children:l("button",{type:"submit",className:"text-md mt-4 py-2 px-16 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-green-600 focus:bg-green-600 focus:border-green-600 focus:outline-none focus:ring-0",children:s("workflowPage.submit.label")})})]})]})]})})})]})}export{Y as default};
