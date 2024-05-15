import{R as H,j as e,a1 as G,am as I,W as j,as as l,an as V,ao as Z,r as i,u as q,Y as Q,at as U,c as W,ap as Y,ac as $,b as K,al as J}from"./index-45e0c9da.js";import"./AmcFamReceipt-c7f6b2a0.js";class X extends H.Component{render(x){var t,n,k,f,u,g,y,w,v,A,C,S,z,B,P,E,R,F,M,L,O;const{currentTax:a,floorsTaxes:m,arrearTax:d,grandTaxes:s,ownersDtls:b,basicDetails:c,images:o,usageTypeTax:N,usageTypeTaxBifur:p}=((t=this.props)==null?void 0:t.fullData)||"";return e.jsx("div",{className:" text-xs mx-auto  flex items-center justify-center",id:"printableArea",children:e.jsxs("div",{className:"w-[60rem] text-center bg-white p-8 border border-black ",children:[e.jsxs("div",{className:"w-[56rem] flex flex-row justify-between",children:[e.jsx("div",{children:e.jsx("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",alt:"akola",className:"w-28 h-24"})}),e.jsxs("div",{className:"pt-2 ",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-500 rounded-md",children:(n=this.props)==null?void 0:n.t("tranAmcChqReceipt.akolaMunicipalCorporationLabel.label")}),e.jsx("p",{className:" mt-2 text-xs font-semibold  text-purple-500",children:"(महाराष्ट्र महानगरपालिका अधिनियम १९४९ चे कलम १२७.१२९, व प्रकरण (११ व ८) करधान नियम मधील नियम १५ (2) तरतुदीन्वये )"}),e.jsx("p",{className:" font-semibold text-xs border-t p-1  mt-2 text-orange-800",children:"सन २०१७-१८ ते २०२१-२२ या वर्षासाठी आकारण्यात आलेले कर मूल्य निर्धारण व कर आकारणी तक्ता"})]}),e.jsx("div",{className:" flex justify-end",children:e.jsx(G,{size:"80",url:`${I}/property/amc-fam-receipt/${(k=this.props)==null?void 0:k.propId}`})})]}),e.jsx("div",{className:"w-[56rem] text-base text-purple-800",children:e.jsx("h1",{className:"font-semibold py-2 bg-gray-300 rounded-md",children:"मलमत्ता विवरन वा कर अकारणी तक्ता"})}),e.jsx("div",{children:e.jsx("div",{class:"w-[56rem] border-0 text-xs font-semibold ",children:e.jsx("table",{className:"table-auto font-semibold  text-left  w-full text-xs ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"w-1/6",children:"प्राथमिक कर धारकाचे नावं"}),e.jsxs("td",{className:"font-semibold capitalize whitespace-pre-wrap break-all w-1/2",children:[":  ",b==null?void 0:b.ownerNameMarathi]}),e.jsx("td",{className:"w-1/6",children:"Application No."}),e.jsxs("td",{className:"font-semibold capitalize ",children:[" :  ",c==null?void 0:c.saf_no,"  "]})]}),e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("td",{children:"भोगवटादार भडकरीचे नाव "}),e.jsxs("td",{className:"font-semibold capitalize whitespace-pre-wrap",children:[": ",j(b==null?void 0:b.applicantName)]}),e.jsx("td",{children:"Holding No."}),e.jsxs("td",{className:"font-semibold capitalize",children:[": ",c==null?void 0:c.holding_no," "]})]}),e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("td",{children:"झोन "}),e.jsxs("td",{className:"font-semibold capitalize",children:[": ",(c==null?void 0:c.zone)=="A"&&"A-EAST ZONE",(c==null?void 0:c.zone)=="B"&&"B-WEST ZONE",(c==null?void 0:c.zone)=="C"&&"C-NORTH ZONE",(c==null?void 0:c.zone)=="D"&&"D-SOUTH ZONE"]}),e.jsx("td",{children:"Old property No."}),e.jsxs("td",{className:"font-semibold capitalize",children:[": ",j(c==null?void 0:c.property_no)]})]}),e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("td",{children:"वॉर्ड क्र. "}),e.jsxs("td",{className:"font-semibold capitalize",children:[": ",c==null?void 0:c.ward_no," "]}),e.jsx("td",{children:"Address. "}),e.jsxs("td",{className:"font-semibold capitalize whitespace-pre-wrap",children:[": ",c==null?void 0:c.prop_address]})]}),e.jsxs("tr",{className:"whitespace-nowrap",children:[e.jsx("td",{children:"मालमत्ता प्रकार "}),e.jsxs("td",{className:"font-semibold capitalize",children:[": ",j(c==null?void 0:c.property_type)," "]}),e.jsx("td",{children:"Holding Type. "}),e.jsxs("td",{className:"font-semibold capitalize whitespace-no-wrap",children:[": ",c==null?void 0:c.holding_type]})]})]})})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-[56rem] border text-xs   font-semibold",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border  border-black  bg-gray-200 text-orange-800",children:[e.jsx("th",{className:"border border-black"}),e.jsx("th",{className:"border border-black",children:"वार्ड क्र."}),e.jsx("th",{className:"border border-black",children:"मालमत्ता क्र."}),e.jsx("th",{className:"border border-black",children:"भाग क्र."}),e.jsx("th",{className:"border border-black",children:"वस्तीचा प्रकार"}),e.jsx("th",{className:"border border-black",children:"वार्षिक भाडे"}),e.jsx("th",{className:"border border-black",children:"करयोग्य मुल्य"}),e.jsx("th",{className:"border border-black",children:"सामान्य कर"}),e.jsx("th",{className:"border border-black",children:"एकुण कर"}),e.jsx("th",{className:"border border-black",children:"प्लॉट क्षेत्रफळ चौ.फु."}),e.jsx("th",{className:"border border-black",children:"भाडे"}),e.jsx("th",{className:"border border-black",children:"क्षेत्रफळ . चौ.मी"}),e.jsx("th",{className:"border border-black",children:"खोल्या"}),e.jsx("th",{className:"border border-black",children:"शौच स. नि"}),e.jsx("th",{className:"border border-black",children:"शौच स. अनि"}),e.jsx("th",{className:"border border-black",children:"शौच स."}),e.jsx("th",{className:"border border-black",children:"नळ संख्या व आकार"}),e.jsx("th",{className:"border border-black",children:"1 1/2"}),e.jsx("th",{className:"border border-black",children:"सोलर विद्युत उपकरण व्यवस्था"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"नविन"}),e.jsx("td",{className:"border border-black",children:a==null?void 0:a.wardNo}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.propertyNo)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.partNo)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.floorsCount)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.alv)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.taxValue)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.generalTax)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.totalTax)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.plotArea)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.rent)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.plotAreaSQTM)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.floorsCount)}),e.jsx("td",{className:"border border-black",children:l(a)}),e.jsx("td",{className:"border border-black",children:l(a)}),e.jsx("td",{className:"border border-black",children:l(a==null?void 0:a.toilet)}),e.jsx("td",{className:"border border-black",children:"हातपंप"}),e.jsx("td",{className:"border border-black",children:l(a)}),e.jsx("td",{className:"border border-black",children:"बोअरवेल"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"जुना"}),e.jsx("td",{className:"border border-black",children:d==null?void 0:d.wardNo}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.propertyNo)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.partNo)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.floorsCount)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.alv)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.taxValue)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.generalTax)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.totalTax)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.plotArea)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.rent)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.plotAreaSQTM)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.floorsCount)}),e.jsx("td",{className:"border border-black",children:l(d)}),e.jsx("td",{className:"border border-black",children:l(d)}),e.jsx("td",{className:"border border-black",children:l(d==null?void 0:d.toilet)}),e.jsx("td",{className:"border border-black",children:"विहीर"}),e.jsx("td",{className:"border border-black",children:l(d)}),e.jsx("td",{className:"border border-black",children:"जलपुन:भरणा"})]})]})]})}),e.jsxs("div",{className:" w-[56rem] ",children:[e.jsx("h1",{className:"font-semibold pt-2 capitalize text-[10px] text-left ",children:"Floor wise tax bifurcation"}),e.jsxs("table",{className:" text-xs w-full border  ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border bg-gray-200 font-semibold text-orange-800",children:[e.jsx("th",{className:"border border-black ",children:" मजला"}),e.jsx("th",{className:"border border-black ",children:" बा. वर्ष"}),e.jsx("th",{className:"border border-black ",children:" बा. प्रकार "}),e.jsx("th",{className:"border border-black ",children:" उपयोग "}),e.jsx("th",{className:"border border-black ",children:" करपात्र क्षे. चौ.फु. "}),e.jsx("th",{className:"border border-black ",children:" करपात्र क्षे.चौ.मी"}),e.jsx("th",{className:"border border-black ",children:" दर ₹  "}),e.jsx("th",{className:"border border-black ",children:" वार्षीक भाडे ₹ "}),e.jsx("th",{className:"border border-black ",children:" घसारा "}),e.jsx("th",{className:"border border-black ",children:" घसारा % "}),e.jsx("th",{className:"border border-black ",children:" वार्षीक भाडेमुल्य ₹"}),e.jsx("th",{className:"border border-black ",children:" दुरुस्ती खर्च ₹ "}),e.jsx("th",{className:"border border-black ",children:" टक्के "}),e.jsx("th",{className:"border border-black ",children:" करयोग्य मुल्य ₹ "})]})}),e.jsxs("tbody",{className:"font-semibold",children:[(g=(u=(f=this.props)==null?void 0:f.fullData)==null?void 0:u.floorsTaxes)==null?void 0:g.map((r,_)=>e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[" ",e.jsx("td",{className:"border border-black",children:r!=null&&r.floorName?r.floorName:(r==null?void 0:r.floorNo)==="Vacant Land"?"OP":r==null?void 0:r.floorNo}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.dateFrom}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.occupancyTypeVal}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.usageTypeName}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.buildupAreaInSqmt}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.buildupAreaInSqmt}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.rate}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.alv}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.agingAmt}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.agingPerc}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.alv}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.maintantance10Perc}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.maintancePerc}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.taxValue})]},_)})),e.jsx("tr",{})]}),e.jsx("tbody",{className:"text-xs font-semibold",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:8,className:""}),e.jsx("td",{colSpan:2,className:"border border-black bg-gray-200",children:"Total ="}),e.jsx("td",{className:"border border-black bg-gray-200",children:(v=(w=(y=this.props)==null?void 0:y.fullData)==null?void 0:w.grandFloorsTaxes)==null?void 0:v.alv}),e.jsx("td",{className:"border border-black bg-gray-200",children:(S=(C=(A=this.props)==null?void 0:A.fullData)==null?void 0:C.grandFloorsTaxes)==null?void 0:S.maintantance10Perc}),e.jsx("td",{className:"border border-black bg-gray-200"}),e.jsx("td",{className:"border border-black bg-gray-200",children:(P=(B=(z=this.props)==null?void 0:z.fullData)==null?void 0:B.grandFloorsTaxes)==null?void 0:P.valueAfterMaintance})]})})]})]}),e.jsxs("div",{className:"w-[56rem] text-xs",children:[e.jsx("h1",{className:"font-semibold pt-2 capitalize  text-left",children:"Bifurcation of taxable one year value"}),e.jsxs("table",{className:"table-auto w-full border text-xs bg-indigo-100 text-indigo-800",children:[e.jsx("thead",{className:"",children:e.jsxs("tr",{className:"border border-black align-text-top bg-indigo-200 text-indigo-800 md:font-semibold font-semibold",children:[e.jsx("th",{className:"border border-black",children:"सामान्य कर ₹ "}),e.jsx("th",{className:"border border-black",children:" रस्ता कर "}),e.jsx("th",{className:"border border-black",children:" अग्निशमन कर "}),e.jsx("th",{className:"border border-black",children:" शिक्षण कर "}),e.jsx("th",{className:"border border-black",children:" पाणीलाभ कर "}),e.jsx("th",{className:"border border-black",children:"विशेष स्वच्छता कर "}),e.jsx("th",{className:"border border-black",children:" मलजल कर "}),e.jsx("th",{className:"border border-black",children:" वृक्ष कर "}),e.jsx("th",{className:"border border-black",children:" रोजगार हमी उपकर "}),e.jsx("th",{className:"border border-black",children:" महा शिक्षण कर "}),e.jsx("th",{className:"border border-black",children:" विशेष पाणीपट्टी "}),e.jsx("th",{className:"border border-black",children:" मोठी इमारत कर "}),e.jsx("th",{className:"border border-black",children:" अकृषक कर ₹ "}),e.jsx("th",{className:"border border-black",children:" खुला भूखंड कर ₹ "}),e.jsx("th",{className:"border border-black",children:" एकूण कर ₹ "})]})}),e.jsx("tbody",{className:"font-semibold",children:e.jsxs("tr",{children:[e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.generalTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.roadTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.firefightingTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.educationTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.cleanlinessTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.sewerageTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.treeTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.professionalTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.stateEducationTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.waterTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.wardNo)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.openPloatTax)," "]}),e.jsxs("td",{className:"border border-black",children:[l(s==null?void 0:s.totalTax)," "]})]})})]})]}),e.jsxs("div",{className:"w-[56rem]",children:[e.jsx("p",{className:" font-small text-xs m-2 text-left",children:"म.न.पा. सर्वेक्षणानुसार मालमत्तेचा स्थळदर्शक नकाशा व छायाचित्र"}),e.jsxs("div",{class:"w-full grid grid-cols-2 gap-2 border border-black",children:[e.jsx("img",{src:o==null?void 0:o.photograph,alt:"geotagged image",srcset:"",className:"w-full h-64 object-fill"}),e.jsx("img",{src:o!=null&&o.naksha?o.naksha:o==null?void 0:o.photograph,alt:"geotagged image",className:"w-full h-64 object-fill"})]})]}),e.jsxs("div",{className:"w-[56rem] border border-black",children:[e.jsx("p",{className:" font-small text-xs m-2 text-left",children:"Note: We reserve the right to correct any human or computer errors."}),e.jsxs("p",{className:" text-xs  font-small m-2 text-left",children:["(Appendix:- 1 Manama:- B Basement/Benment, G. Ground Floor, M: Subfloor) ",e.jsx("br",{})," 2. Construction type R.C.C slab fill B brick cement walls brick cement load bearing structure",e.jsx("br",{}),"3. Type of use -Residental -Shop c-Commercial (Non-Resident), EG-Government scintific building Hatin, G-Government Dispensary- Temple Sangam Karyakarta -Yoga Financial institution"]}),e.jsxs("div",{className:"flex justify-evenly mt-20  text-sm",children:[e.jsxs("div",{className:" ",children:[e.jsx("p",{}),e.jsx("p",{className:"mt-10",children:(E=this.props)==null?void 0:E.t("tranActualTaxBillPage.taxClerkLabel.label")}),e.jsx("p",{children:(R=this.props)==null?void 0:R.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")})]}),e.jsxs("div",{className:" ",children:[e.jsxs("p",{children:[e.jsx("img",{src:V,alt:"Tax Superintendent",className:"w-20 ml-20"}),"  "]}),e.jsx("p",{children:(F=this.props)==null?void 0:F.t("tranActualTaxBillPage.taxSuperintendentLabel.label")}),e.jsx("p",{children:(M=this.props)==null?void 0:M.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")})]}),e.jsxs("div",{className:" ",children:[e.jsx("img",{src:Z,alt:"Deputy Commissioner",className:"w-16 ml-20"}),e.jsx("p",{children:(L=this.props)==null?void 0:L.t("tranActualTaxBillPage.deputyCommissionarLabel.label")}),e.jsx("p",{children:(O=this.props)==null?void 0:O.t("tranActualTaxBillPage.akolaMunicipalCorpLabel.label")})]})]})]})]})})}}function ee(){const h=i.useRef(),{propId:x}=q(),{t:a}=Q(),{api_akolaFam:m}=J(),[d,s]=i.useState(!1),[b,c]=i.useState([]),o=()=>{s(!0);let N=m,p={safId:x,paymentMode:"CASH"};$.post(N,p,K()).then(function(t){var n;(n=t==null?void 0:t.data)!=null&&n.status?(c(t.data.data),s(!1)):(setloaderStatus(!1),activateBottomErrorCard(!0,"Error occured in submitting form. Please try again later."))}).catch(function(t){s(!1)})};return i.useEffect(()=>{o()},[]),e.jsxs("div",{className:"container",children:[d&&e.jsx(U,{}),e.jsxs("div",{children:[e.jsx(W,{trigger:()=>e.jsxs("button",{id:"clickButton",className:"bg-teal-500  hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg text-xs font-mono",children:[e.jsx(Y,{})," Print !"]}),content:()=>h.current,copyStyles:!0}),e.jsx(X,{ref:h,t:a,fullData:b,propId:x})]})]})}export{ee as default};
