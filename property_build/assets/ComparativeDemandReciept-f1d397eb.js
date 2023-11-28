import{r as d,u as O,A as H,b as I,j as e,B as U,S as q,aj as G,n as a,ai as l,i,P as W}from"./index-f3761e5c.js";import{P as Z}from"./PrintButton-ddfbb86b.js";const K=()=>{var t,h,j,g,f,u,y,N,v,R,A,w,P;const[s,S]=d.useState(),[o,V]=d.useState(),[c,X]=d.useState(),[k,p]=d.useState(!1),[M,b]=d.useState(!1),{comparativeDemandReciept:E}=W(),m=O();d.useEffect(()=>{B()},[]);const B=()=>{p(!1),b(!0),H.post(E,{propId:m==null?void 0:m.id},I()).then(r=>{var x,T,F,_,C,D;console.log("comparative demand success => ",r),(x=r==null?void 0:r.data)!=null&&x.status?(S((T=r==null?void 0:r.data)==null?void 0:T.data),V((_=(F=r==null?void 0:r.data)==null?void 0:F.data)==null?void 0:_.arvRule),X((D=(C=r==null?void 0:r.data)==null?void 0:C.data)==null?void 0:D.cvRule)):p(!0),b(!1)}).catch(r=>{console.log("comparative demand error => ",r),p(!0),b(!1)})};if(M)return e.jsx(e.Fragment,{children:e.jsx(U,{})});if(k)return e.jsx(q,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});let n=s==null?void 0:s.ulbDetails;return e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsx("div",{className:"flex w-full items-center justify-center text-black ",id:"printableArea",children:e.jsx("div",{className:"container m-2 overflow-x-hidden py-4 px-3 text-xs",children:e.jsx("div",{className:"container flex w-full items-center justify-center print:w-[97vw] text-black  print:border-2 print:border-dashed print:border-black",id:"printableArea",children:e.jsxs("div",{className:"container m-2 overflow-x-hidden py-4 px-3 text-xs print:border-none border-2 border-dashed border-black",children:[e.jsx("img",{src:n==null?void 0:n.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[27%] h-[40vh] backImage opacity-10"}),e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4",children:[e.jsx("img",{src:n==null?void 0:n.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),e.jsx("div",{className:"text-xs font-semibold flex flex-col justify-center items-center",children:e.jsx("div",{className:"uppercase font-bold text-3xl mb-2",children:n==null?void 0:n.ulb_name})}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"grid grid-cols-6 w-max",children:e.jsx("div",{className:"col-span-6 uppercase border-2 font-bold border-black px-8 py-1 text-base",children:"Comparative Demand Reciept"})})})]})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs("span",{className:"font-semibold",children:["Date: ",e.jsx("span",{className:"font-normal",children:G(new Date).format("DD-MM-yy")})," "]})}),e.jsxs("div",{className:"flex flex-col w-full font-semibold",children:[e.jsxs("div",{children:["Mr/Mrs/Ms: ",e.jsx("span",{className:"font-normal",children:a((t=s==null?void 0:s.basicDetails)==null?void 0:t.owner_name)})]}),e.jsxs("div",{children:["Father's/Husband's Name: ",e.jsx("span",{className:"font-normal",children:a((h=s==null?void 0:s.basicDetails)==null?void 0:h.guardian_name)})]}),e.jsxs("div",{children:[((j=s==null?void 0:s.basicDetails)==null?void 0:j.pt_no)==""||((g=s==null?void 0:s.basicDetails)==null?void 0:g.pt_no)==null?e.jsxs("span",{children:["Holding Number : ",e.jsx("span",{className:"font-normal",children:(f=s==null?void 0:s.basicDetails)==null?void 0:f.new_holding_no})]}):e.jsxs("span",{children:["Property Tax Number : ",e.jsx("span",{className:"font-normal",children:(u=s==null?void 0:s.basicDetails)==null?void 0:u.pt_no})]})," ",e.jsxs("span",{children:["Ward No. ",e.jsx("span",{className:"font-normal",children:((y=s==null?void 0:s.basicDetails)==null?void 0:y.new_ward_no)==""?(N=s==null?void 0:s.basicDetails)==null?void 0:N.old_ward_no:(v=s==null?void 0:s.basicDetails)==null?void 0:v.new_ward_no})]})]}),e.jsxs("div",{children:["Address: ",e.jsx("span",{className:"font-normal",children:(R=s==null?void 0:s.basicDetails)==null?void 0:R.prop_address})]})]}),e.jsxs("div",{className:"flex flex-col w-full gap-y-2 mt-2",children:[e.jsx("div",{children:"झारखण्ड नगरपालिका अधिनियम 2011 की धारा 590 द्वारा प्रदत्त शक्तियों का प्रयोग करते हुए झारखण्ड के राज्यपाल नगर विकास एवं आवास विभाग, झारखण्ड, राँची की अधिसूचना 1511 दिनांक 29.04.2022 के अनुसार झारखण्ड नगरपालिका सम्पत्ति कर (निर्धारण, संग्रहण और वसूली) में संशोधन किया गया है. इस संशोधन के अनुसार झारखण्ड राज्य के सभी नगर निगम, परिषद और पंचायत में रहने वाले आम नागिरिकों और व्यवसायियों को सुचित किया जाता है कि अब से होल्डिंग टैक्स कि वसुली सर्किलरेट के लिए नियमों के आधार पर वित्तीय वर्ष 2022 के अप्रैल महीने से की जाएगी. "}),e.jsxs("div",{children:["सम्पत्तिकर नियम 2013 में संशोधन किया गया है, अतः वित्तिय वर्ष 2022-23 से सम्पत्तिकर का मूल्याकन वार्षिक किराया मूल्य के स्थान पर पूजीगत मूल्य के आधार पर किया जायेगा। आपके भवन (होल्डिंग नं० - ",(A=s==null?void 0:s.basicDetails)==null?void 0:A.new_holding_no,") के घृतिकर की गणना 01.04.2022 से सर्किलरेट के अनुसार किया जायेगा।"]}),e.jsx("div",{children:"झारखण्ड नगरपालिका कर भुगतान (समय, प्रक्रिया तथा वसूली) विनियम संशोधन 2022 के विहित प्रावधान के अनुसार आपको उक्त अवधि का धृति कर का भुगतान करना है।"}),e.jsx("div",{children:"घृतिकर कि वार्षिक किरायादर एव पूजीगत मूल्य के आधार पर तुलनात्मक घृतिकर की गणना निम्नवत है :"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"text-lg font-bold mb-2",children:"Annual Rental Value - As ARV Rule (Effect From 01-04-2016 to 31-03-2022)"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:"a. Carpet area for residential - 70% of buildup area"}),e.jsx("span",{children:"b. Carpet area for commercial - 80% of buildup area"})]}),e.jsx("div",{className:"font-bold text-md",children:"Annual Rental Value (ARV) = Carpet Area X Usage Factor X Occupancy Factor X Rental Rate"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"text-lg font-bold mb-2",children:"Capital Value - As Per Current Rule (Effect From 01-04-2022)"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:"a. Residential - 0.075%"}),e.jsx("span",{children:"b. Commercial - 0.150%"}),e.jsx("span",{children:"c. Commercial & Greater than 25000 sqft - 0.20%"})]}),e.jsxs("div",{className:"font-bold text-md",children:["Property Tax = Circle Rate X Buildup Area X Occupancy Factor X Tax Percentage X Calculation Factor X Matrix Factor Rate ",e.jsx("span",{className:"text-red-600",children:"(Only in case of 100% residential property)"})]})]}),e.jsxs("table",{className:"w-full mt-2",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rule"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Floor"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Built-up-area"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Usage Factor"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Occ Factor"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Carpet Area (70%/80%)"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rental Rate / Matrix Factor"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Tax Perc."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Calculation Factor"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"(Annual Rental Value) p.e.f"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Circle Rate"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"ARV Total Property Tax"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"CV Total Property Tax"})]}),(o==null?void 0:o.length)>0&&(o==null?void 0:o.map((r,x)=>e.jsxs("tr",{children:[x+1==1&&e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",rowSpan:o==null?void 0:o.length,children:"ARV"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:a(r==null?void 0:r.floor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.buildupArea)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.usageFactor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.occupancyFactor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.carpetArea)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.rentalRate)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.taxPerc)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.calculationFactor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i(r==null?void 0:r.arvPsf)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.circleRate)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i(r==null?void 0:r.arvTotalPropTax)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i(r==null?void 0:r.cvArvPropTax)})]}))),(c==null?void 0:c.length)>0&&(c==null?void 0:c.map((r,x)=>e.jsxs("tr",{children:[x+1==1&&e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",rowSpan:c==null?void 0:c.length,children:"CV"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:a(r==null?void 0:r.floor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.buildupArea)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.usageFactor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.occupancyFactor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.carpetArea)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.rentalRate)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.taxPerc)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.calculationFactor)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i(r==null?void 0:r.arvPsf)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:l(r==null?void 0:r.circleRate)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i(r==null?void 0:r.arvTotalPropTax)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i(r==null?void 0:r.cvArvPropTax)})]}))),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pr-1 text-end",colSpan:11,children:"Total"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i((w=s==null?void 0:s.total)==null?void 0:w.arvTotalPropTax)}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:i((P=s==null?void 0:s.total)==null?void 0:P.cvTotalPropTax)})]})]})]})})})})]})};export{K as default};
