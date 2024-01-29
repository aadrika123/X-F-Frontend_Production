import{i,b as h,j as r,r as n,w as x}from"./index-26-p7w-4.js";import{P as a}from"./index-rgo8Sp6i.js";import{h as s}from"./moment-UBOc2Xni.js";function k(){var c;const{id:l}=i(),d=h({api:x.waterDemandReceipt,config:{consumerId:l},options:{enabled:!!l}}),e=(c=d==null?void 0:d.data)==null?void 0:c.data,o="  AKOLA MUNICIPAL CORPORATION\nAkola Water Supply (Water Bill)  \n********************************\nConsumer No / ग्राहक क्रमांक: "+(e==null?void 0:e.consumer_no)+"\nFrom /पासून: "+s(e==null?void 0:e.demand_from).format("MMM-yy")+"\nTo /पर्यंत: "+s(e==null?void 0:e.demand_upto).format("MMM-yy")+"\nBill No / बिल क्रमांक: "+(e==null?void 0:e.demand_no)+"\nTax No /कर क्र: "+(e==null?void 0:e.folio_no)+"\nBill Date / बिल तारीख: "+(e==null?void 0:e.billDate)+"\nBill Due Date/बिल देय तारीख: "+(e==null?void 0:e.bilDueDate)+"\nConsumer Name/ग्राहक नाव: "+(e==null?void 0:e.applicant_name)+"\nConsumer Address/ ग्राहक पत्ता: "+(e==null?void 0:e.address)+"\nConnection Dt जोडणी दिनांक: \nConnection Type जोडणीचा प्रकार: "+(e==null?void 0:e.category)+"\nTap size जोडणीचा आकार: "+(e==null?void 0:e.tab_size)+"\nZone झोन: "+(e==null?void 0:e.zone)+"\nOld Property no जुना मालमत्ता क्रमांक: "+(e==null?void 0:e.property_no)+"\nNew Property no नवीन मालमत्ता क्रमांक: "+(e==null?void 0:e.folio_no)+"\nMeter no मीटर क्र: "+(e==null?void 0:e.meter_no)+"\nCurrent Reading वर्तमान वाचन मागील: "+(e==null?void 0:e.finalReading)+"/"+(e==null?void 0:e.generation_date)+"\nPrev Reading मागील वाचन: "+(e==null?void 0:e.initialReading)+"/"+(e==null?void 0:e.arrear_demand_date)+"\nUnit वापरलेली एकूण युनिट: "+(e==null?void 0:e.unitConsumed)+"\nMeter Status मीटर स्थिती: "+(e==null?void 0:e.connection_type)+"\n**************************\nMob No: "+(e==null?void 0:e.mobile_no)+"\nBill No/बिल क्र: "+(e==null?void 0:e.demand_no)+"\nBill Date/ बिल तारीख: "+(e==null?void 0:e.billDate)+"\nBill Due/ बिल देय: "+(e==null?void 0:e.bilDueDate)+"\n\n\nBill Outstanding Details देय रक्कम विवरण: \n***********************\nCur Bill Amount / रक्कम चालू देयक राशी: "+Math.round(e==null?void 0:e.generate_amount).toFixed(2)+"\nCur. Year /चालू. वर्षाची : "+Math.round(e==null?void 0:e.current_demands).toFixed(2)+"\nLast Year /शेवटचे वर्षाची : "+Math.round(e==null?void 0:e.arrear_demands).toFixed(2)+"\nAdjustment Bill/समायोजन विधेयक: 0\nTotal Outstanding/समायोजन विधेयक: "+Math.round(e==null?void 0:e.due_balance_amount).toFixed(2)+"\n********************************\nTc Name: "+(e==null?void 0:e.user_name)+"\nGenerated Date: "+(e==null?void 0:e.generation_date)+"\nTc Mobile No: Na\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  https://amcakola.in\n\n\n\n",b=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:o}}))};return r.jsx(a,{title:"Demand Receipt",children:r.jsxs("div",{className:"p-4",children:[r.jsx("div",{className:"flex justify-center",children:r.jsx(n.Button,{size:"sm",color:"blue",onClick:()=>b(),children:"Print Demand"})}),r.jsx("div",{className:"w-full overflow-x-scroll",children:r.jsxs("div",{children:[r.jsx("div",{className:"w-[62rem] mx-auto mt-8 bg-white p-4 border border-black",children:r.jsxs("div",{className:"flex gap-32",children:[r.jsx("div",{children:r.jsx("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",alt:"akola",className:"w-28 h-28"})}),r.jsxs("div",{className:"pt-2 text-center",children:[r.jsx("h1",{className:"text-2xl font-bold  rounded-md",children:"AKOLA MUNICIPAL CORPORATION"}),r.jsx("p",{className:"text-1xl mt-2 font-semibold whitespace-nowrap",children:"Akola Water Supply (Water Bill)"})]})]})}),r.jsxs("div",{className:" w-[62rem] mx-auto bg-white p-4 border border-black ",children:[r.jsxs("div",{className:"w-full  text-center ",children:[r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsxs("th",{className:"border border-black",children:["Consumer No / ग्राहक क्रमांक ",r.jsx("br",{}),e==null?void 0:e.consumer_no," "]}),r.jsx("th",{className:"border border-black",children:"From /पासून "}),r.jsx("th",{className:"border border-black",children:"To /पर्यंत "}),r.jsxs("th",{className:"border border-black",children:[" ","Bill No / बिल क्रमांक"," "]}),r.jsxs("th",{className:"border border-black",children:[" ",e==null?void 0:e.demand_no," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black",children:"Tax No /कर क्र"}),r.jsx("td",{className:"border-r border-black",children:s(e==null?void 0:e.demand_from).format("MMM-yy")}),r.jsx("td",{className:"",children:s(e==null?void 0:e.demand_upto).format("MMM-yy")}),r.jsxs("td",{className:"border border-black",children:[" ","Bill Date / बिल तारीख"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",e==null?void 0:e.billDate," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[e==null?void 0:e.folio_no," "]}),r.jsx("td",{className:"border-r border-black ",children:" "}),r.jsx("td",{className:"",children:" "}),r.jsxs("td",{className:"border border-black",children:[" ","Bill Due Date/बिल देय तारीख"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",e==null?void 0:e.bilDueDate," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Consumer Name/ग्राहक नाव"," "]}),r.jsxs("td",{className:"border border-black",colSpan:"3",children:[e==null?void 0:e.applicant_name," "]}),r.jsxs("td",{className:"border border-black ",children:[" ","Mobile No / मोबाईल क्र"," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Consumer Address/ ग्राहक पत्ता"]}),r.jsxs("td",{className:"border border-black",colSpan:"3",children:[" ",e==null?void 0:e.address]}),r.jsxs("td",{className:"border border-black ",children:[(e==null?void 0:e.mobile_no)||"N/A"," "]})]})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsx("th",{className:"border border-black",children:"जोडणी दिनांक "}),r.jsx("th",{className:"border border-black",children:"जोडणीचा प्रकार "}),r.jsx("th",{className:"border border-black",children:"जोडणीचा आकार "}),r.jsx("th",{className:"border border-black",children:"झोन"}),r.jsxs("th",{className:"border border-black",children:["जुना मालमत्ता क्रमांक"," "]}),r.jsxs("th",{className:"border border-black",children:[" ","नवीन मालमत्ता क्रमांक"," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsx("th",{className:"border border-black",children:"Connection Dt. "}),r.jsx("th",{className:"border border-black",children:"Connection Type"}),r.jsx("th",{className:"border border-black",children:"Tap size"}),r.jsx("th",{className:"border border-black",children:" zone"}),r.jsx("th",{className:"border border-black",children:"Old prop No. "}),r.jsx("th",{className:"border border-black",children:"New Prop No. "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black"}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.category)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.tab_size)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.zone)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.property_no)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.folio_no)||"N/A"," "]})]})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("th",{className:"border border-black",children:"मीटर क्र "}),r.jsxs("th",{className:"border border-black",children:["वर्तमान वाचन मागील"," "]}),r.jsx("th",{className:"border border-black",children:"मागील वाचन"}),r.jsxs("th",{className:"border border-black",children:["वापरलेली एकूण युनिट"," "]}),r.jsx("th",{className:"border border-black",children:" मीटर स्थिती "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("th",{className:"border border-black",children:"Meter No "}),r.jsx("th",{className:"border border-black",children:"Current Reading"}),r.jsx("th",{className:"border border-black",children:"Previous Reading"}),r.jsx("th",{className:"border border-black",children:"Used Total Unit"}),r.jsx("th",{className:"border border-black",children:"Meter Status"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.meter_no)||"N/A"}),r.jsxs("td",{className:"border border-black",children:[" ",e==null?void 0:e.finalReading,"/",e==null?void 0:e.generation_date," "]}),r.jsxs("td",{className:"border border-black",children:[e==null?void 0:e.initialReading,"/",(e==null?void 0:e.arrear_demand_date)||"N/A"," "]}),r.jsx("td",{className:"border border-black",children:e==null?void 0:e.unitConsumed}),r.jsxs("td",{className:"border border-black",children:[" ",e==null?void 0:e.connection_type," "]})]})})]})]}),r.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[r.jsx("div",{className:"w-1/3 text-center",children:r.jsxs("div",{className:"w-full h-full border border-black overflow-hidden",children:[r.jsx("h1",{className:"border-b border-black",children:"मीटरचा फोटो "}),r.jsx("img",{src:decodeURIComponent(e==null?void 0:e.meterImg),alt:"Meter Image ",className:"w-full h-60"}),r.jsxs("h1",{className:"bg-gray-200",children:[e==null?void 0:e.user_name," "]}),r.jsx("h1",{className:"bg-gray-200",children:e==null?void 0:e.generation_date})]})}),r.jsx("div",{className:"w-[35%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsx("tr",{className:"",children:r.jsxs("th",{className:"border border-black",colSpan:"3",children:["Prev.Read Details मागील वापराचा तपशील"," "]})})}),r.jsx("tbody",{children:r.jsxs("tr",{className:" ",children:[r.jsx("th",{className:"border border-black",children:"Bill from "}),r.jsx("th",{className:"border border-black",children:"Bill To"}),r.jsx("th",{className:"border border-black",children:"Unit Use"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A"}),r.jsx("td",{className:"border border-black",children:"N/A "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",style:{height:"60px"},children:"Bill Info"}),r.jsxs("td",{className:"border border-black",children:[" ","Adjustmnet ALERT"," "]}),r.jsx("td",{className:"border border-black",children:"Spl. ALERT "})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsxs("td",{className:"border border-black",style:{height:"60px"},children:["N/A"," "]}),r.jsx("td",{className:"border border-black",children:"LDt 00.00.00"}),r.jsx("td",{className:"border border-black",children:"LA "})]})})]})})}),r.jsx("div",{className:"w-[35%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsx("tr",{className:"",children:r.jsxs("th",{className:"border border-black",colSpan:"2",children:["Bill Outst Details देय रक्कम विवरण"," "]})})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("th",{className:"border border-black ",children:["Cur. Bill Amt/रक्कम चालू देयक राशी"," "]}),r.jsx("th",{className:"border border-black",children:(e==null?void 0:e.generate_amount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("td",{className:"border border-black",children:"Cur. Year Arrer/चालू. वर्षाची थकबाकी"}),r.jsx("td",{className:"border border-black",children:Math.round(e==null?void 0:e.current_demands).toFixed(2)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("td",{className:"border border-black",children:"Last Year Arrer/शेवटचे वर्षाची थकबाकी"}),r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.arrear_demands)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("td",{className:"border border-black",children:"Adjustment Bill/समायोजन विधेयक"}),r.jsx("td",{className:"border border-black",children:"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("td",{className:"border border-black",children:"Total Outstanding/समायोजन विधेयक"}),r.jsx("td",{className:"border border-black",children:e==null?void 0:e.due_balance_amount})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Before Due Dt Amt/ देय होण्यापूर्वी दि"," "]}),r.jsx("td",{className:"border border-black",children:e==null?void 0:e.due_balance_amount})]})})]})})})]}),r.jsx("table",{className:"table-auto w-full text-sm font-semibold",children:r.jsx("thead",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("th",{className:"border border-black uppercase",colSpan:"1",children:"Special message/विशेष संदेश/alert no applied/सूचना लागू नाही"}),r.jsxs("th",{className:"border border-black uppercase",colSpan:"1",children:["Executive engineer/कार्यकारी अभियंता"," "]})]})})}),r.jsx("h1",{children:"-----------------------------------------------------------------------------------------------------------------------------------------------------"}),r.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[r.jsx("div",{className:"w-[80%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Consumer No/ग्राहक क्र ",r.jsx("br",{}),r.jsx("span",{children:e==null?void 0:e.consumer_no})," "]}),r.jsxs("td",{className:"border border-black",children:["Mob No."," ",r.jsx("span",{children:(e==null?void 0:e.mobile_no)||"N/A"})," "]}),r.jsxs("td",{className:"border border-black",children:["Bill No/बिल क्र ",r.jsx("br",{})," ",r.jsx("span",{children:(e==null?void 0:e.demand_no)||"N/A"})]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Consumer Name/ग्राहकाचे नाव"," "]}),r.jsxs("td",{className:"border border-black",children:[(e==null?void 0:e.applicant_name)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Bill Date/ बिल तारीख ",r.jsx("br",{})," ",r.jsx("span",{children:(e==null?void 0:e.billDate)||"N/A"})]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Consumer Address/ ग्राहकाचा पत्ता"," "]}),r.jsxs("td",{className:"border border-black",children:[(e==null?void 0:e.address)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Bill Due/ बिल देय ",r.jsx("br",{})," ",r.jsx("span",{children:(e==null?void 0:e.bilDueDate)||"N/A"})]})]})})]})})}),r.jsx("div",{className:"w-[20%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden ",children:r.jsx("img",{src:"https://pngimg.com/uploads/qr_code/qr_code_PNG25.png",alt:"akola",className:"w-32 h-32 text-center ml-8 mt-2"})})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold text-center",children:[r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Meter No/मीटर क्रमांक:"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.meter_no)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Current Bill Amount / रक्कम चालू देयक राशी"," "]}),r.jsx("td",{className:"border border-black",children:e==null?void 0:e.generate_amount})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Meter Status/मीटर स्थिती"," "]}),r.jsxs("td",{className:"border border-black",children:[(e==null?void 0:e.connection_type)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Current Year Arrers / चालू वर्षांतील थकबाकी"," "]}),r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.current_demands)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Connection Type/जोडणीचा प्रकार"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.category)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Last Year Arrers / गेल्या वर्षीची थकबाकी"," "]}),r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.arrear_demands)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Tap size/जोडणीचा आकार"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",(e==null?void 0:e.tab_size)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Total outstanding / एकुण थकीत रक्कम"," "]}),r.jsx("td",{className:"border border-black",children:e==null?void 0:e.due_balance_amount})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Current Reading/चालू रिडींग"," "]}),r.jsxs("td",{className:"border border-black",children:[e==null?void 0:e.finalReading," "]}),r.jsxs("td",{className:"border border-black",children:["Before due Dt Amt /मुदती पुर्व देय रक्कम"," "]}),r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.due_balance_amountt)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Previous reading/ मागील रिडींग"," "]}),r.jsxs("td",{className:"border border-black",children:[e==null?void 0:e.initialReading," "]}),r.jsxs("td",{className:"border border-black",children:["Adjustment of Bill / देयक दुरुस्ती"," "]}),r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.adjust)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Used Total / Build Unit/ एकूण वापर"," "]}),r.jsxs("td",{className:"border border-black",children:[" ",e==null?void 0:e.unitConsumed," "]}),r.jsxs("td",{className:"border border-black",children:["Before due Date Amt/मुदती पुर्व देय रक्कम"," "]}),r.jsx("td",{className:"border border-black",children:(e==null?void 0:e.due_balance_amount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Bill Period day/बिल कालावधी दिवस"," "]}),r.jsx("td",{className:"border border-black",children:"N/A "}),r.jsxs("td",{className:"border border-black",children:["After due Dt. Amt /देयक दुरुस्ती"," "]}),r.jsx("td",{className:"border border-black",children:"-"})]})})]})]})]})})]})})}export{k as default};
