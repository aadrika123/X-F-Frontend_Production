import{j as e,r as n,e as G,h as N,k as $,m as E,o as F,A as w,p as H,g as R}from"./index-3a3e7484.js";import{c as O,d as A}from"./default-ac648dcd.js";import{m as U,P as q}from"./Popup-626501f3.js";const D="/assets/redPin-93292aca.svg",X="/assets/greenPin-86ac516f.svg",K="/assets/yellowPin-3a56701f.svg",T=a=>{var m;const u=({id:t,lat:c,lng:p,address:x,image:j,holding:i,realImg:s,currentStatus:d,propId:r})=>{var h;return e.jsxs("div",{className:`cursor-pointer transition ease-in-out delay-150 hover:z-50 hover:-translate-y-1 ${t==((h=a==null?void 0:a.centerMap)==null?void 0:h.id)&&"scale-125 -translate-y-1"} hover:scale-125  duration-300`,children:[d===1&&e.jsx("img",{className:"w-8 h-8 relative flex justify-center",src:D,alt:"Marker Icon"}),d===2&&e.jsx("img",{className:"w-8 h-8 relative flex justify-center",src:K,alt:"Marker Icon"}),d===3&&e.jsx("img",{className:"w-8 h-8 relative flex justify-center",src:X,alt:"Marker Icon"}),e.jsx("div",{className:"",onClick:()=>a.handleSingleView({holding:i,lat:c,lng:p,address:x,realImg:s,propId:r}),children:e.jsx("div",{className:"",children:e.jsxs(q,{trigger:e.jsx("button",{className:"border border-gray-600 rounded-md shadow-md text-sm p-1 text-center bg-white",children:i||"No Data Found"}),children:[e.jsx("p",{children:x||"Address Not Available"}),e.jsx("p",{children:i||"Holding Not Available"})]})})})]})};return e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsx(O,{bootstrapURLKeys:{key:"AIzaSyC0AArVHmqXGAxgWcljuOD_fvY5eDXfwS0"},defaultCenter:{lat:23.3937225277778,lng:85.3721084444444},defaultZoom:12,children:Array.isArray(a==null?void 0:a.langData)&&((m=a==null?void 0:a.langData)==null?void 0:m.map((t,c)=>e.jsx(u,{realImg:t==null?void 0:t.full_doc,id:t==null?void 0:t.holding_no,holding:t==null?void 0:t.holding_no,lat:t==null?void 0:t.latitude,lng:t==null?void 0:t.longitude,address:t==null?void 0:t.prop_address,image:U,currentStatus:t==null?void 0:t.currentStatus,propId:t==null?void 0:t.property_id},c)))})})},Q=a=>{const[u,m]=n.useState(),[t,c]=n.useState(1),[p,x]=n.useState(),[j,i]=n.useState(!1),[s,d]=n.useState(),[r,h]=n.useState(null),{api_getHeatMapDataByWard:M,api_wardByUlb:I}=R(),[L,b]=n.useState(null),f=G(),v=l=>{b(!0),w.post(M,{wardId:l}).then(o=>{var g;x((g=o==null?void 0:o.data)==null?void 0:g.data),b(!1)}).catch(o=>{b(!1)})},P=()=>{w.post(I,{},H()).then(function(l){var o;h((o=l==null?void 0:l.data)==null?void 0:o.data)}).catch(function(l){})};n.useEffect(()=>{P(),v(2)},[]);const S=l=>{i(!0),d(l)};function C(l){const o=[".jpg",".jpeg",".png",".gif"],g=l==null?void 0:l.substring(l.lastIndexOf(".")).toLowerCase();return o.some(B=>B===g)}const _=l=>{f(`/holdingPropertyDetails/${l}`)},W=l=>{f(`/allmodules-dues/${l}`)},y=s==null?void 0:s.realImg,z=`https://www.google.com/maps/search/?api=1&query=${s==null?void 0:s.lat},${s==null?void 0:s.lng}`;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"float-right relative",children:e.jsxs("div",{className:"z-50 p-1 md:p-3 absolute top-0 right-0 bg-gray-100 rounded-b-lg ease-in duration-300",children:[e.jsx("p",{className:"font-semibold text-xs md:text-base",children:"Select Ward"}),e.jsx("select",{onChange:l=>v(l.target.value),className:"cursor-pointer border border-gray-200 w-20 shadow mx-3 rounded",name:"wardList",id:"",children:r==null?void 0:r.map((l,o)=>e.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.ward_name},`wardlistForMap${o}`))})]})}),e.jsxs("div",{className:"grid grid-cols-12 relative h-fit",children:[j?e.jsx("div",{className:"z-50 md:w-1/4 absolute top-0 left-0 bg-gray-100 rounded-b-lg ease-in duration-300",children:e.jsxs("div",{className:"m-1",children:[e.jsxs("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[e.jsx("img",{className:"w-full text-center h-40",src:C(y)?y:A,alt:A}),e.jsxs("div",{className:"px-6 py-4 text-sm",children:[e.jsx("div",{className:"font-bold text-xl mb-2",children:"Property Details"}),e.jsxs("button",{className:"mt-5 bg-indigo-500 px-3 border border-indigo-500 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",onClick:()=>_(s==null?void 0:s.propId),children:["View Details ",e.jsx(N,{className:"inline"})]}),e.jsxs("button",{className:"ml-5 mt-5 px-3 py-1 border border-indigo-500 text-indigo-500 rounded-sm shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>W(s==null?void 0:s.propId),children:["View All Modules Dues ",e.jsx(N,{className:"inline"})]}),e.jsx("p",{className:"border-b my-3 border-gray-300"}),e.jsxs("p",{children:["Holding : ",e.jsxs("span",{className:"font-semibold text-gray-800",children:[(s==null?void 0:s.holding)||"Holding Not Available"," "]})]}),e.jsxs("p",{children:["Address : ",e.jsx("span",{className:"font-semibold text-gray-800 text-xs",children:(s==null?void 0:s.address)||"Address Not Available"})]}),e.jsxs("p",{children:["Latitude : ",e.jsx("span",{className:"font-semibold text-gray-800",children:(s==null?void 0:s.lat)||"Latitude Not Available"})]}),e.jsxs("p",{children:["Longitude : ",e.jsx("span",{className:"font-semibold text-gray-800",children:(s==null?void 0:s.lng)||"Longitude Not Available"})]}),e.jsxs("p",{className:"mt-5",children:[" ",e.jsx("a",{className:"bg-indigo-600 text-white border border-indigo-400 px-5 py-2",href:z,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]})]}),e.jsxs("div",{className:"px-6 pt-4 pb-2",children:[e.jsxs("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:["Ward ",t]}),e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"Ranchi"}),e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"Property"})]})]}),e.jsx("p",{onClick:()=>i(!1),className:"cursor-pointer absolute right-0 mr-3 mb-3 bottom-0",children:e.jsx($,{size:30,color:"indigo"})})]})}):e.jsx("div",{onClick:()=>i(!0),className:"z-50 h-9 w-40 md:w-1/4 opacity-50 hover:opacity-100 absolute top-0 left-0  bg-gray-100 rounded-b-lg shadow-lg cursor-pointer ease-in duration-300",children:e.jsx("div",{className:"cursor-pointer absolute right-0 mr-3 mb-1 bottom-0",children:e.jsxs("p",{className:"ml-2 flex",children:[e.jsx("p",{className:"mr-5 font-semibold text-blue-700 text-center text-xs md:text-base",children:"View Property Details"}),e.jsx(E,{size:27,color:"indigo"})]})})}),e.jsxs("div",{className:"col-span-12 relative",children:[e.jsx(T,{handleSingleView:S,langData:p,centerMap:u}),L&&e.jsx("div",{className:"w-full h-full absolute top-0 left-0  flex justify-center items-center",children:e.jsx("div",{className:"rounded-full",children:e.jsx(F,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})})]})]})]})};export{Q as default};
