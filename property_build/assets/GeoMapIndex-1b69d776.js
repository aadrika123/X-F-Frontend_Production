import{j as e,r,u as P,e as L,h as N,k as z,m as $}from"./index-161aea56.js";import{c as B,d as v}from"./default-184df81a.js";import{m as E,P as F}from"./Popup-7f0c1b0d.js";const G=t=>{const h=({id:d,lat:g,lng:i,address:c,image:m,holding:a,realImg:s,propId:x})=>{var n,o;return e.jsxs("div",{className:`cursor-pointer transition ease-in-out delay-150 hover:z-50 hover:-translate-y-1 ${d==((n=t==null?void 0:t.centerMap)==null?void 0:n.id)&&"scale-125 -translate-y-1"} hover:scale-125  duration-300`,children:[e.jsx("img",{className:"w-9 h-9 relative flex justify-center",src:m,alt:"Marker Icon"}),e.jsx("div",{className:"",onClick:()=>t.handleSingleView({holding:a,lat:g,lng:i,address:c,realImg:s,propId:x}),children:e.jsx("div",{className:"",children:e.jsxs(F,{trigger:e.jsx("button",{className:`border border-gray-600 rounded-md shadow-md text-sm p-1 text-center ${d==((o=t==null?void 0:t.centerMap)==null?void 0:o.id)?"bg-indigo-200":"bg-white"} `,children:a||"No Data Found"}),children:[e.jsx("p",{children:c||"Address Not Available"}),e.jsx("p",{children:a||"Holding Not Available"})]})})})]})};return e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsx(B,{bootstrapURLKeys:{key:"AIzaSyC0AArVHmqXGAxgWcljuOD_fvY5eDXfwS0"},defaultCenter:{lat:23.3937225277778,lng:85.3721084444444},defaultZoom:12,children:e.jsx(h,{realImg:"https/",id:1,holding:t==null?void 0:t.holdingNo,lat:t==null?void 0:t.latId,lng:t==null?void 0:t.longId,address:t==null?void 0:t.propAddress,image:E,propId:t==null?void 0:t.property_id})})})},O=()=>{const[t,h]=r.useState(),[d,g]=r.useState(1),[i,c]=r.useState(),[m,a]=r.useState(!1),[s,x]=r.useState(),{latId:n,longId:o,holdingNo:y,propAddress:f,propId:u}=P(),b=L(),p=l=>{a(!0),x(l)};function w(l){const M=[".jpg",".jpeg",".png",".gif"],S=l==null?void 0:l.substring(l.lastIndexOf(".")).toLowerCase();return M.some(C=>C===S)}const A=()=>{b(`/holdingPropertyDetails/${u}`)},I=()=>{b(`/allmodules-dues/${u}`)},j=s==null?void 0:s.realImg,k=`https://www.google.com/maps/search/?api=1&query=${s==null?void 0:s.lat},${s==null?void 0:s.lng}`;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"float-right relative"}),e.jsxs("div",{className:"grid grid-cols-12 relative h-fit",children:[m?e.jsx("div",{className:"z-50 md:w-1/4 absolute top-0 left-0 bg-gray-100 rounded-b-lg ease-in duration-300",children:e.jsxs("div",{className:"m-1",children:[e.jsxs("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[e.jsx("img",{className:"w-full text-center h-40",src:w(j)?j:v,alt:v}),e.jsxs("div",{className:"px-6 py-4 text-sm",children:[e.jsx("div",{className:"font-bold text-xl mb-2",children:"Property Details"}),e.jsxs("button",{className:"mt-5 bg-indigo-500 px-3 border border-indigo-500 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",onClick:()=>A(s==null?void 0:s.propId),children:["View Details ",e.jsx(N,{className:"inline"})]}),e.jsxs("button",{className:"ml-5 mt-5 px-3 py-1 border border-indigo-500 text-indigo-500 rounded-sm shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>I(s==null?void 0:s.propId),children:["View All Modules Dues ",e.jsx(N,{className:"inline"})]}),e.jsx("p",{className:"border-b my-3 border-gray-300"}),e.jsxs("p",{children:["Holding : ",e.jsxs("span",{className:"font-semibold text-gray-800",children:[(s==null?void 0:s.holding)||"Holding Not Available"," "]})]}),e.jsxs("p",{children:["Address : ",e.jsx("span",{className:"font-semibold text-gray-800 text-xs",children:(s==null?void 0:s.address)||"Address Not Available"})]}),e.jsxs("p",{children:["Latitude : ",e.jsx("span",{className:"font-semibold text-gray-800",children:(s==null?void 0:s.lat)||"Latitude Not Available"})]}),e.jsxs("p",{children:["Longitude : ",e.jsx("span",{className:"font-semibold text-gray-800",children:(s==null?void 0:s.lng)||"Longitude Not Available"})]}),e.jsxs("p",{className:"mt-5",children:[" ",e.jsx("a",{className:"bg-indigo-600 text-white border border-indigo-400 px-5 py-2",href:k,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Maps"})]})]}),e.jsxs("div",{className:"px-6 pt-4 pb-2",children:[e.jsxs("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:["Ward ",d]}),e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"Ranchi"}),e.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"Property"})]})]}),e.jsx("p",{onClick:()=>a(!1),className:"cursor-pointer absolute right-0 mr-3 mb-3 bottom-0",children:e.jsx(z,{size:30,color:"indigo"})})]})}):e.jsx("div",{onClick:()=>a(!0),className:"z-50 h-9 w-40 md:w-1/4 opacity-50 hover:opacity-100 absolute top-0 left-0  bg-gray-100 rounded-b-lg shadow-lg cursor-pointer ease-in duration-300",children:e.jsx("div",{className:"cursor-pointer absolute right-0 mr-3 mb-1 bottom-0",children:e.jsxs("p",{className:"ml-2 flex",children:[e.jsx("p",{className:"mr-5 font-semibold text-blue-700 text-center text-xs md:text-base",children:"View Property Details"}),e.jsx($,{size:27,color:"indigo"})]})})}),e.jsx("div",{className:"col-span-12",children:e.jsx(G,{handleSingleView:p,latId:n,longId:o,langData:i,holdingNo:y,propAddress:f,centerMap:t})})]})]})};export{O as default};
