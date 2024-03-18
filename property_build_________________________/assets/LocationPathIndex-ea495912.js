import{j as e,r as n,e as R,h as b,k as z,m as $,o as F,A as j,p as O,g as U}from"./index-11eb40a4.js";import{h as G,d as f}from"./default-8404c59c.js";const H=i=>{const d=()=>i==null?void 0:i.langData.map((o,a)=>e.jsx(Marker,{position:{lat:o==null?void 0:o.lat,lng:o==null?void 0:o.lng},label:o==null?void 0:o.holding},a)),g=()=>{const o=i.langData.map(a=>({lat:a==null?void 0:a.lat,lng:a==null?void 0:a.lng}));return e.jsx(Polyline,{path:o,options:{strokeColor:"#ff0000",strokeOpacity:1,strokeWeight:2}})};return e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsxs(G,{bootstrapURLKeys:{key:"YOUR_API_KEY",libraries:["geometry"]},defaultCenter:{lat:23.3937225277778,lng:85.3721084444444},defaultZoom:12,children:[d(),g()]})})},q=i=>{const[d,g]=n.useState(),[o,a]=n.useState(1),[y,N]=n.useState(),[v,c]=n.useState(!1),[t,w]=n.useState(),[x,L]=n.useState(null),{api_getHeatMapDataByWard:A,api_wardByUlb:C}=U(),[S,h]=n.useState(null),u=R(),m=s=>{h(!0),j.post(A,{wardId:s}).then(l=>{var r;console.log("Lat lang fetched",l),N((r=l==null?void 0:l.data)==null?void 0:r.data),h(!1)}).catch(l=>{h(!1)})},M=()=>{j.post(C,{},O()).then(function(s){var l;console.log("wardlist data re....",s==null?void 0:s.data),L((l=s==null?void 0:s.data)==null?void 0:l.data)}).catch(function(s){console.log("wardlist error.. error.... ",s)})};n.useEffect(()=>{M(),m(2)},[]);const P=s=>{c(!0),w(s),console.log("data is : ",s)};function I(s){const l=[".jpg",".jpeg",".png",".gif"],r=s==null?void 0:s.substring(s.lastIndexOf(".")).toLowerCase();return l.some(E=>E===r)}const W=s=>{u(`/holdingPropertyDetails/${s}`)},B=s=>{u(`/allmodules-dues/${s}`)},p=t==null?void 0:t.realImg,_=`https://www.google.com/maps/search/?api=1&query=${t==null?void 0:t.lat},${t==null?void 0:t.lng}`;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"float-right relative",children:e.jsxs("div",{className:"z-50 p-1 md:p-3 absolute top-0 right-0 bg-gray-100 rounded-b-lg ease-in duration-300",children:[e.jsx("p",{className:"font-semibold text-xs md:text-base",children:"Select Ward"}),e.jsx("select",{onChange:s=>m(s.target.value),className:"cursor-pointer border border-gray-200 w-20 shadow mx-3 rounded",name:"wardList",id:"",children:x==null?void 0:x.map((s,l)=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.ward_name},`wardlistForMap${l}`))})]})}),e.jsxs("div",{className:"grid grid-cols-12 relative h-fit",children:[v?e.jsx("div",{className:"z-50 md:w-1/4 absolute top-0 left-0 bg-gray-100 rounded-b-lg ease-in duration-300",children:e.jsxs("div",{className:"m-1",children:[e.jsxs("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[e.jsx("img",{className:"w-full text-center h-40",src:I(p)?p:f,alt:f}),e.jsxs("div",{className:"px-6 py-4 text-sm",children:[e.jsx("div",{className:"font-bold text-xl mb-2",children:"Property Details"}),e.jsxs("button",{className:"mt-5 bg-indigo-500 px-3 border border-indigo-500 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",onClick:()=>W(t==null?void 0:t.propId),children:["View Details ",e.jsx(b,{className:"inline"})]}),e.jsxs("button",{className:"ml-5 mt-5 px-3 py-1 border border-indigo-500 text-indigo-500 rounded-sm shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>B(t==null?void 0:t.propId),children:["View All Modules Dues ",e.jsx(b,{className:"inline"})]}),e.jsx("p",{className:"border-b my-3 border-gray-300"}),e.jsxs("p",{children:["Holding : ",e.jsxs("span",{className:"font-semibold text-gray-800",children:[(t==null?void 0:t.holding)||"Holding Not Available"," "]})]}),e.jsxs("p",{children:["Address : ",e.jsx("span",{className:"font-semibold text-gray-800 text-xs",children:(t==null?void 0:t.address)||"Address Not Available"})]}),e.jsxs("p",{children:["Latitude : ",e.jsx("span",{className:"font-semibold text-gray-800",children:(t==null?void 0:t.lat)||"Latitude Not Available"})]}),e.jsxs("p",{children:["Longitude : ",e.jsx("span",{className:"font-semibold text-gray-800",children:(t==null?void 0:t.lng)||"Longitude Not Available"})]}),e.jsxs("p",{className:"mt-5",children:[" ",e.jsx("a",{className:"bg-indigo-600 text-white border border-indigo-400 px-5 py-2",href:_,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]})]}),e.jsxs("div",{className:"px-6 pt-4 pb-2",children:[e.jsxs("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:["Ward ",o]}),e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"Ranchi"}),e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"Property"})]})]}),e.jsx("p",{onClick:()=>c(!1),className:"cursor-pointer absolute right-0 mr-3 mb-3 bottom-0",children:e.jsx(z,{size:30,color:"indigo"})})]})}):e.jsx("div",{onClick:()=>c(!0),className:"z-50 h-9 w-40 md:w-1/4 opacity-50 hover:opacity-100 absolute top-0 left-0  bg-gray-100 rounded-b-lg shadow-lg cursor-pointer ease-in duration-300",children:e.jsx("div",{className:"cursor-pointer absolute right-0 mr-3 mb-1 bottom-0",children:e.jsxs("p",{className:"ml-2 flex",children:[e.jsx("p",{className:"mr-5 font-semibold text-blue-700 text-center text-xs md:text-base",children:"View Property Details"}),e.jsx($,{size:27,color:"indigo"})]})})}),e.jsxs("div",{className:"col-span-12 relative",children:[e.jsx(H,{handleSingleView:P,langData:y,centerMap:d}),S&&e.jsx("div",{className:"w-full h-full absolute top-0 left-0  flex justify-center items-center",children:e.jsx("div",{className:"rounded-full",children:e.jsx(F,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})})]})]})]})};export{q as default};
