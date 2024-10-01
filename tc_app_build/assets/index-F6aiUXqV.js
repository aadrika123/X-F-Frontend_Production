import{e as g,b as h,j as t}from"./index-kwyYuGuR.js";import"./router-5yjtezO8.js";import{r as u}from"./tailwind-6U-kYQAu.js";import{A as j,M as N,a as p,C as y}from"./MarkerWithInfo-isNVYrFo.js";import{P as b}from"./index-tU9B2LIK.js";import{u as v}from"./useLocationRadius-xJUo2Br7.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";const f=[{id:1,name:"East Zone",latitude:"20.7122002",longitude:"77.0102968"},{id:2,name:"West Zone",latitude:"20.7088910",longitude:"76.9867701"},{id:3,name:"North Zone",latitude:"20.7214404",longitude:"77.0039020"},{id:4,name:"South Zone",latitude:"20.6937346",longitude:"77.0063663"}],T=20.7122002,w=77.0102968,I=()=>{var o,x,m;const{coords:s,isGeolocationEnabled:n}=g(!1),l=h(),{radiusInMeters:a,distanceToTargetEast:i,distanceToTargetWest:r,distanceToTargetSouth:d,distanceToTargetNorth:c}=v();return t.jsx(b,{title:"Profile",children:t.jsxs("div",{className:"p-2",children:[t.jsx(u.Card,{className:"w-full",children:t.jsx(u.CardBody,{children:t.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[t.jsxs("div",{className:"col-span-2 justify-between flex",children:[t.jsx("p",{className:"text-sm font-bold text-gray-600",children:"East Radius:"}),t.jsx("p",{className:"text-xs text-gray-600",children:i})]}),t.jsxs("div",{className:"col-span-2 justify-between flex",children:[t.jsx("p",{className:"text-sm font-bold text-gray-600",children:"West Radius:"}),t.jsx("p",{className:"text-xs text-gray-600",children:r})]}),t.jsxs("div",{className:"col-span-2 justify-between flex",children:[t.jsx("p",{className:"text-sm font-bold text-gray-600",children:"South Radius:"}),t.jsx("p",{className:"text-xs text-gray-600",children:d})]}),t.jsxs("div",{className:"col-span-2 justify-between flex",children:[t.jsx("p",{className:"text-sm font-bold text-gray-600",children:"North Radius:"}),t.jsx("p",{className:"text-xs text-gray-600",children:c})]}),t.jsxs("div",{className:"col-span-2 justify-between flex",children:[t.jsx("h1",{className:"text-sm font-bold text-gray-600",children:"Geo Enabled:"}),t.jsx("h1",{className:"text-sm font-bold \n                ".concat(n?"text-green-500":"text-red-500","\n                "),children:n?"Yes":"No"})]}),t.jsx("div",{className:"border-t border-gray-300 my-1 col-span-2"}),t.jsx("div",{className:"col-span-2 justify-center flex",children:t.jsx("h1",{className:"text-sm  font-bold\n                ".concat(i>=a&&r>=a&&d>=a&&c>=a?"text-green-500":"text-red-500","\n                  "),children:i>=a&&r>=a&&d>=a&&c>=a?"You are outside the zonal office":"You are inside the zonal office"})})]})})}),t.jsx("div",{className:"border-t border-gray-300 my-4"}),t.jsx(j,{apiKey:"AIzaSyC0AArVHmqXGAxgWcljuOD_fvY5eDXfwS0",children:t.jsxs(N,{className:"w-full h-screen",defaultCenter:{lat:T,lng:w},defaultZoom:10,gestureHandling:"greedy",disableDefaultUI:!1,children:[t.jsx(p,{name:"Tax Collector",lat:(o=s==null?void 0:s.latitude)!=null?o:20.7122002,lng:(x=s==null?void 0:s.longitude)!=null?x:77.0102968,popOver:"This is your current location",title:(m=l==null?void 0:l.user)==null?void 0:m.user_name,subTitle:"Latitude: ".concat(s==null?void 0:s.latitude,", Longitude: ").concat(s==null?void 0:s.longitude)}),f.map(e=>t.jsx(y,{radius:50,center:{lat:parseFloat(e==null?void 0:e.latitude),lng:parseFloat(e==null?void 0:e.longitude)},strokeColor:"#0c4cb3",strokeOpacity:1,strokeWeight:3,fillColor:"#3b82f6",fillOpacity:.3},e.id)),f.map(e=>t.jsx(p,{name:"JSK",lat:parseFloat(e==null?void 0:e.latitude),lng:parseFloat(e==null?void 0:e.longitude),popOver:"This is ".concat(e==null?void 0:e.name," location"),title:e.name,subTitle:"Latitude: ".concat(e==null?void 0:e.latitude,", Longitude: ").concat(e==null?void 0:e.longitude)},e.id))]})})]})})};export{I as default};
