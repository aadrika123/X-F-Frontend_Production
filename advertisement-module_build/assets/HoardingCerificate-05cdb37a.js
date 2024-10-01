import{h as b,r as t,i as w,ak as A,aE as y,f as a,F as c,j as e,B as M,aF as _,aG as i,a9 as z,A as C}from"./index-23ba7e0b.js";const L=()=>{var m,h;b();const[l,N]=t.useState(!1),[n,f]=t.useState(!1),{id:d}=w(),{api_approvallicense:g}=C(),[x,r]=t.useState(!1);t.useEffect(()=>{u()},[]);const u=()=>{r(!0),A.post(g,{applicationId:d}).then(s=>{s.data.status?(r(!1),console.log("Consumer Payment Data for receipt",s.data.data),N(s.data.data.applicationDetails),f(s.data.data),console.log("chandan3=>",s.data.data)):(console.log("Error while getting consumer data for receipt"),r(l,"data"))}).catch(s=>{console.log("Exception while getting consumer receipt",s),r(!1)})},o=t.useRef(),v=y.useReactToPrint({content:()=>o.current});return console.log((m=window.location)==null?void 0:m.host),a(c,{children:[x&&e(M,{}),l?e(c,{children:a("div",{className:"",children:[a("div",{children:[e("div",{className:"md:px-0 flex-1 "}),e("div",{className:"md:px-0 flex-1 ",children:a("button",{onClick:v,className:"float-right pl-4 pr-6 py-1  bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-sky-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e(_,{className:"inline text-lg"}),"print"]})})]}),a("div",{id:"printableArea",className:"w-[46rem] p-3 h-full mx-auto mt-6 ",ref:o,children:[e("div",{className:"border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-[46rem] p-3  mt-12 border-red-900 ",children:e("div",{className:" text-justify font-poppins ",children:a("div",{className:"  py-2 px-2 text-gray-700 ",children:[e("img",{src:"https://i.ibb.co/8r2p58x/images-removebg-preview.png",alt:"logo",className:"w-56 h-56 absolute z-10 bg-transparent opacity-10 mt-[12rem] ml-56 "}),window.location.origin!=="https://modernulb.com"?e("span",{className:"w-44 h-44 absolute bg-transparent opacity-40 mt-[20rem] text-5xl font-bold text-gray-500 ml-52 rounded-full whitespace-nowrap",style:{transform:"rotate(-45deg)"},children:"DUMMY LICENSE"}):"",a("div",{className:"grid grid-cols-3 h-auto bordr",children:[e("div",{className:"w-20 h-20 rounded-full ",children:e("img",{src:"https://i.ibb.co/8r2p58x/images-removebg-preview.png",alt:"logo"})}),a("div",{className:"font-bold mx-auto  ml mt-3 whitespace-nowrap  ",children:[e("span",{className:"uppercase text-center text-xl"}),e("h1",{className:"font-normal text-center  text-xs -ml-8"}),e("h1",{className:"font-semibold text-center uppercase text-lg   -ml-6 ",children:" Akola Municipal Corporation"}),e("h1",{className:"font-semibold text-center uppercase text-md text-red-800 -ml-6 ",children:" Advertisement License"})]}),e("div",{className:"w-36 h-36 rounded-full ml-20 -mt-5",children:e("img",{src:"https://i.ibb.co/pjX9zWn/Swach-Bharat-Preview.png",alt:"logo"})})]}),e("div",{className:"w-full px-1.5 ",children:a("div",{className:"grid grid-cols-5 gap-8 h-auto capitalize mt-8",children:[a("div",{className:"col-span-3 ",children:[a("p",{className:" font-semibold capitalize",children:["Aplicant Name : ",e("span",{className:"font-normal leading-6",children:(l==null?void 0:l.advertiser)||"N/A"})]}),a("p",{className:" font-semibold capitalize",children:["License No. : ",e("span",{className:"font-normal leading-6",children:(l==null?void 0:l.registration_no)||"N/A"})]}),a("p",{className:" font-semibold mt-1 capitalize",children:["Date of Issues :    ",e("span",{className:"font-normal leading-6",children:i(l==null?void 0:l.allotment_date).format("DD-MM-yyyy")})]}),a("p",{className:" font-semibold mt-1 capitalize",children:["Expiration Date  : ",a("span",{className:"font-normal leading-6",children:[" ",i(l==null?void 0:l.to_date).format("DD-MM-yyyy")]})]}),a("p",{className:" font-semibold mt-1 capitalize",children:["Application Type: ",e("span",{className:"font-normal  leading-6",children:(l==null?void 0:l.application_type)||"N/A"})]}),a("p",{className:" font-semibold mt-1 capitalize",children:["Total no of Hoarding: ",e("span",{className:"font-normal  leading-6",children:(l==null?void 0:l.no_of_hoarding)||"N/A"})]}),a("p",{className:" font-semibold mt-1 capitalize",children:["Advertisement Category: ",e("span",{className:"font-normal  leading-6",children:(l==null?void 0:l.adv_type)||"N/A"})]}),a("p",{className:" font-semibold mt-1 capitalize",children:["Full Site Address Details: ",e("span",{className:"font-normal  leading-6",children:n==null?void 0:n.address.map((s,p)=>a("div",{children:[a("span",{children:[p+1,". "]}),s.address]},p+1))})]})]}),a("div",{className:"col-span-2 mx-auto  font-semibold ",children:[a("div",{className:"-ml-10 ",children:["Purpose : ",e("span",{className:"font-normal leading-6",children:(l==null?void 0:l.purpose)||"N/A"})]}),a("div",{className:"-ml-10 ",children:["Application No. : ",e("span",{className:"font-normal leading-6",children:(l==null?void 0:l.application_no)||"N/A"})]}),a("div",{className:"-ml-10 mt-1",children:["Valid From :  ",e("span",{className:"font-normal leading-6",children:i(l==null?void 0:l.from_date).format("DD-MM-yyyy")})]}),a("div",{className:"-ml-10 mt-1",children:["Valid Upto :  ",e("span",{className:"font-normal leading-6",children:i(l==null?void 0:l.to_date).format("DD-MM-yyyy")})]}),e(c,{children:a("div",{className:"-ml-10 mt-1",children:[(l==null?void 0:l.key)||"N/A"," : ",a("span",{className:"font-normal leading-6",children:[(l==null?void 0:l.value)||"N/A"," "]})]})})]})]})}),e("div",{children:e("table",{className:"w-full mt-4 ",children:e("tr",{className:"",children:e("td",{className:" ",children:e("div",{className:"w-full ",children:a("div",{className:"text-sm",children:["  ",e(z,{url:((h=window.location)==null?void 0:h.host)+`/advertisement-module/hoardingCerificateDirect/${d}`,size:90})]})})})})})}),e("div",{className:"flex mt-2",children:a("h1",{className:"flex text-gray-900 font-sans  text-[14px]",children:["For Details Please Visit : ","https://amcakola.in"]})}),e("div",{className:"flex ",children:a("h1",{className:"flex text-gray-900 font-sans  text-[14px]",children:["Or Call us at "," :+91-8069493299"]})})]})})}),a("div",{className:"border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-[46rem]   border-red-900 mt-[65%] p-3 ",children:[a("div",{className:"",children:[e("h2",{className:"font-semibold text-red-700 text-center text-2xl",children:"शर्ती व अटी"}),a("ol",{children:[e("li",{className:"mt-2",children:"1.फलका मुळे कायदा व सुव्यवस्थेचा प्रश्न उदभवल्यास स्वतः अर्जदार जबाबदार राहील।"}),e("li",{className:"mt-2",children:"2.वाहतुकीस तसेच रहदारीस अडथळा निर्माण होणार नाही याची खबरदारी अर्जदाराने घ्यावी लागेल।"}),e("li",{className:"mt-2",children:"3.कुठलाही प्रकारचा वाद निर्माण झाल्यास अर्जदार स्वतः जबाबदार राहील।"}),e("li",{className:"mt-2",children:"4.अर्जामध्ये जो आकार नमुद केला आहे त्याच आकाराचे दिशा दर्शक फलक प्रिंट करावे लागेल।"}),e("li",{className:"mt-2",children:"5.पोलीस प्रशासनाकडून काही सुचना आल्यास तात्काळ फलक आपल्या स्तरावरून काढावे लागेल।"}),e("li",{className:"mt-2",children:"6.पोलीस प्रशासनाकडून ना-हरकत प्रमाणपत्र प्राप्त करुन घ्यावे लागेल।"}),e("li",{className:"mt-2",children:"7.जिस कालावधि के लिए अनुमति ली गई है, उसी कालावधि में अटी करनी चाहिए। कालावधि समाप्त होने के बाद, तत्काल अपने स्तर पर अटी लागू करनी चाहिए। अन्यथा, उल्लंघन विभाग से कार्रवाई होगी।"}),a("li",{className:"mt-2",children:["8.कालावधी दि ",e("span",{className:"font-bold",children:i(l==null?void 0:l.from_date).format("DD-MM-yyyy")})," ते दि ",e("span",{className:"font-bold",children:i(l==null?void 0:l.to_date).format("DD-MM-yyyy")})," पर्यंत"]}),e("li",{className:"mt-2",children:"9.प्रत्येक होडींग/बॅनरवर रीतसर देण्यात आलेली सर्वसाधारण पावती / QR CODE प्रिंट करावी व त्यानंतरच होर्डीग/बॅनर अर्जा नमुद केलेल्या ठिकाणीच लावणे आवश्यक राहील।"}),e("li",{className:"mt-2",children:"10.जर कालावधी संपल्यानंतर सुध्दा फलक दिसल्यास आकारलेल्या शुल्काच्या पाचपट दंड आकारण्यात येईल।"})]})]}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e("div",{className:"",children:a("h1",{className:"text-[14px] text-center ",children:[" ",e("span",{className:"font-bold",children:"Disclamier:"})," **This Hoarding License is issued in accordance with AMC  regulations**"]})})})]})]})]})}):e("div",{children:e("div",{className:"bg-red-100 border border-red-400 text-red-700  py-2 rounded-md my-4 mt-[25%] text-center",children:"Your request permission has not yet  approved, and the payment is still pending."})})]})};export{L as default};
