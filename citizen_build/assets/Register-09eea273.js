import{r as t,a as fe,g as xe,c as be,d as o,n as pe,b as he,j as e,o as ge,p as ye,h as je,G as we,i as ve,k as Ne,l as D,q as Se,m as M,s as j,f as Ae}from"./index-60abe2ed.js";import Fe from"./MobileNoCard-1ef57beb.js";import Pe from"./OtpCard-fc5c09a9.js";function Oe(){const[w,ke]=t.useState(),[De,C]=t.useState(null),[Me,E]=t.useState(null),[Ce,R]=t.useState(null),[Ee,_]=t.useState(null),[V,B]=t.useState(null),[Z,O]=t.useState(null),[L,U]=t.useState(null),[q,z]=t.useState(null),[H,n]=t.useState(!1),[T,$]=t.useState(!0),[Y,x]=t.useState(!1),[u,I]=t.useState(null),[b,v]=t.useState(!1),[p,N]=t.useState(!1),[S,h]=t.useState(!1),[A,g]=t.useState(!1),[G,W]=t.useState(!1),[J,K]=t.useState(null),[Re,i]=t.useState(null),m=fe(),{notify:c}=t.useContext(xe),{api_citizenRegister:Q,api_sendMobileOtp:X}=Ae(),ee=be().shape({name:o().required("Enter Your Name").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed"),mobile:o().required("Enter mobile no.").min(10,"Please Enter 10 Digit !").max(10,"Please Enter 10 Digit !"),email:o().min(8,"Minimum eight character"),password:o().min(6,"Minimum six character !").max(50,"Too Long!").required("This field is required !").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#."),confirmPassword:o().label("confirm password").required().oneOf([pe("password"),null],"Passwords must match"),dob:o().required("Select DOB"),gender:o().required("Select Gender"),aadhar:o().min(12,"Enter 12 digit aadhar number"),isArmedForce:o().required("Select armed force"),isSpeciallyAbled:o().required("Select spcially abled"),armedForceDoc:o().when("isArmedForce",{is:"1",then:o().required("Select armed force document")}),speciallyAbledDoc:o().when("isSpeciallyAbled",{is:"1",then:o().required("Select specially abled document")}),photo:o().required("Select Photo")}),a=he({initialValues:{name:"",mobile:"",email:"",password:"",confirmPassword:"",dob:"",gender:"",aadhar:"",isSpeciallyAbled:"0",isArmedForce:"0",aadharDoc:"",armedForceDoc:"",speciallyAbledDoc:"",photo:""},onSubmit:(s,{setSubmitting:l})=>{console.log("post data",s),l(!1),ae(s)},validationSchema:ee}),ae=s=>{n(!0);let l=new FormData;l.append("name",s.name),l.append("mobile",s.mobile),l.append("email",s.email),l.append("password",s.password),l.append("dob",s.dob),l.append("gender",s.gender),l.append("aadhar",s.aadhar),l.append("isSpeciallyAbled",s.isSpeciallyAbled),l.append("isArmedForce",s.isArmedForce),l.append("aadharDoc",Z),l.append("photo",V),S&&l.append("speciallyAbledDoc",q),A&&l.append("armedForceDoc",L);for(const[r,f]of l.entries())console.log(`FD - ${r}: ${f}`);D.post(Q,l).then(function(r){var f,F,P,k;console.log("You have Registered successfully !",r),((f=r==null?void 0:r.data)==null?void 0:f.status)===!0?(m("/login"),c("You have Registered successfully !","success")):(console.log("Registration Failed",(F=r==null?void 0:r.data)==null?void 0:F.status),c((P=r==null?void 0:r.data)==null?void 0:P.message,"error"),d(!0,(k=r==null?void 0:r.data)==null?void 0:k.message)),n(!1)}).catch(r=>{console.log("err",r),n(!1),d(!0,"Network problem. Please try again later"),c("something went wrongg !!","error")})},le=s=>{let l=s.target.name;if(l==="aadharDoc"){E(URL.createObjectURL(s.target.files[0])),O(s.target.files[0]);return}if(l==="armedForceDoc"){R(URL.createObjectURL(s.target.files[0])),U(s.target.files[0]);return}if(l==="speciallyAbledDoc"){_(URL.createObjectURL(s.target.files[0])),z(s.target.files[0]);return}if(l==="photo"){C(URL.createObjectURL(s.target.files[0])),B(s.target.files[0]);return}},se=s=>{let l=s.target.name,r=s.target.value;l==="name"&&a.setFieldValue("name",Se(r,a.values.name,100)),l==="mobile"&&a.setFieldValue("mobile",M(r,a.values.mobile,10)),l==="email"&&a.setFieldValue("email",j(r,a.values.email,50)),l==="password"&&a.setFieldValue("password",j(r,a.values.password,50)),l==="confirmPassword"&&a.setFieldValue("confirmPassword",j(r,a.values.confirmPassword,50)),l==="aadhar"&&a.setFieldValue("aadhar",M(r,a.values.aadhar,12)),(l==="aadharDoc"||l==="armedForceDoc"||l==="speciallyAbledDoc"||l==="photo")&&le(s),l==="isSpeciallyAbled"&&r=="0"&&(h(!1),v(!1)),l==="isSpeciallyAbled"&&r=="1"&&(h(!0),g(!0),v(!0),a.setFieldValue("isArmedForce","0")),l==="isArmedForce"&&r=="0"&&(g(!1),N(!1)),l==="isArmedForce"&&r=="1"&&(g(!0),h(!1),N(!0),a.setFieldValue("isSpeciallyAbled","0"))},re=()=>{c("Mobile no. has been verified successfully !","success"),x(!1)},te=()=>{console.log("otp send..."),n(!0);let s={mobileNo:u};console.log("before send otp...",s),D.post(X,s).then(l=>{var r;console.log("otp send response",l==null?void 0:l.data),(r=l==null?void 0:l.data)!=null&&r.status?c("OTP has been re-send to your mobile no.","success"):c("Problem in sending OTP","error"),n(!1)}).catch(l=>{console.log("error otp send",l),c("Something went wrong...","error"),n(!1)})};t.useEffect(()=>{a.setFieldValue("mobile",u)},[u]);const y=new Date,oe=new Date(y.getFullYear(),y.getMonth(),y.getDate()),de=()=>{m("/login")},ie=()=>{m("/login")},d=(s,l)=>{K(l),W(s)},ce=()=>{if(a.values.name===""){i("id_name"),d(!0,"Please enter your name");return}if(a.values.email===""){i("id_email"),d(!0,"Please enter your email");return}if(a.values.password===""){i("id_password"),d(!0,"Please enter password");return}if(a.values.confirmPassword===""){i("id_confirmPassword"),d(!0,"Please confirm password");return}if(a.values.dob===""){i("id_dob"),d(!0,"Please enter dob");return}if(a.values.gender===""){i("id_gender"),d(!0,"Please select gender");return}if(a.values.isArmedForce===""){i("id_armedForce"),d(!0,"Please select armed force");return}if(a.values.isSpeciallyAbled===""){i("id_sepciallyAbled"),d(!0,"Please selece specially abled");return}if(a.values.isArmedForce==="1"&&a.values.armedForceDoc===""){i("id_armedDocument"),d(!0,"Please select armed force document");return}if(a.values.isSpeciallyAbled==="1"&&a.values.speciallyAbledDoc===""){i("id_speciallyDocument"),d(!0,"Please enter specially abled document");return}if(a.values.photo===""){i("id_photo"),d(!0,"Please select your photo");return}},ne=t.useRef(null),me=()=>{d(!1,"")},ue=s=>{s.preventDefault(),ce(),a.handleSubmit()};return T?e.jsx(Fe,{closeMobileModal:de,headTitle:"Citizen Registration",title:"Enter mobile to register account",desc:"Enter your mobile no, which is attached to a holding or will be attached.",cardFor:"Register",setverifedMobileNo:I,setmobileCardStatus:$,setotpCardStatus:x}):Y?e.jsx(Pe,{closeOtpModal:ie,bottomNaviation:!0,headTitle:"Citizen Registration",reSendOtp:te,verifedMobileNo:u,callback:re,setotpCardStatus:x}):e.jsxs(e.Fragment,{children:[H&&e.jsx(ge,{}),G&&e.jsx(ye,{activateBottomErrorCard:me,errorTitle:J}),e.jsx(je,{children:e.jsx("form",{className:"h-screen overflow-auto py-20 md:py-2",onSubmit:ue,onChange:se,children:e.jsx("div",{className:" w-full mx-auto  flex items-center justify-center px-2 md:px-5 py-5 md:py-5 mt-2  md:mt-10",children:e.jsxs("div",{className:"bg-white text-gray-500 rounded-xl md:rounded-2xl shadow-xl w-full overflow-hidden",children:[e.jsx("div",{className:"md:hidden w-full text-center py-2 bg-gray-200 text-black relative",children:"Register"}),e.jsxs("div",{className:"md:flex w-full",children:[e.jsxs("div",{className:"hidden md:block w-[40%] bg-white py-10 px-10",children:[e.jsx("h1",{className:"font-bold text-xl text-indigo-500 mt-2 md:mt-0 text-center"}),e.jsxs("svg",{id:"a87032b8-5b37-4b7e-a4d9-4dbfbe394641","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"auto",viewBox:"0 0 744.84799 747.07702",children:[e.jsx("path",{id:"fa3b9e12-7275-481e-bee9-64fd9595a50d","data-name":"Path 1",d:"M299.205,705.80851l-6.56-25.872a335.96693,335.96693,0,0,0-35.643-12.788l-.828,12.024-3.358-13.247c-15.021-4.29394-25.24-6.183-25.24-6.183s13.8,52.489,42.754,92.617l33.734,5.926-26.207,3.779a135.92592,135.92592,0,0,0,11.719,12.422c42.115,39.092,89.024,57.028,104.773,40.06s-5.625-62.412-47.74-101.5c-13.056-12.119-29.457-21.844-45.875-29.5Z",transform:"translate(-227.576 -76.46149)",fill:"#f2f2f2"}),e.jsx("path",{id:"bde08021-c30f-4979-a9d8-cb90b72b5ca2","data-name":"Path 2",d:"M361.591,677.70647l7.758-25.538a335.93951,335.93951,0,0,0-23.9-29.371l-6.924,9.865,3.972-13.076c-10.641-11.436-18.412-18.335-18.412-18.335s-15.315,52.067-11.275,101.384l25.815,22.51-24.392-10.312a135.91879,135.91879,0,0,0,3.614,16.694c15.846,55.234,46.731,94.835,68.983,88.451s27.446-56.335,11.6-111.569c-4.912-17.123-13.926-33.926-24.023-48.965Z",transform:"translate(-227.576 -76.46149)",fill:"#f2f2f2"}),e.jsx("path",{id:"b3ac2088-de9b-4f7f-bc99-0ed9705c1a9d","data-name":"Path 22",d:"M747.327,253.4445h-4.092v-112.1a64.883,64.883,0,0,0-64.883-64.883H440.845a64.883,64.883,0,0,0-64.883,64.883v615a64.883,64.883,0,0,0,64.883,64.883H678.352a64.883,64.883,0,0,0,64.882-64.883v-423.105h4.092Z",transform:"translate(-227.576 -76.46149)",fill:"#e6e6e6"}),e.jsx("path",{id:"b2715b96-3117-487c-acc0-20904544b5b7","data-name":"Path 23",d:"M680.97,93.3355h-31a23.02,23.02,0,0,1-21.316,31.714H492.589a23.02,23.02,0,0,1-21.314-31.714H442.319a48.454,48.454,0,0,0-48.454,48.454v614.107a48.454,48.454,0,0,0,48.454,48.454H680.97a48.454,48.454,0,0,0,48.454-48.454h0V141.7885a48.454,48.454,0,0,0-48.454-48.453Z",transform:"translate(-227.576 -76.46149)",fill:"#fff"}),e.jsx("path",{id:"b06d66ec-6c84-45dd-8c27-1263a6253192","data-name":"Path 6",d:"M531.234,337.96451a24.437,24.437,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,531.234,337.96451Z",transform:"translate(-227.576 -76.46149)",fill:"#ccc"}),e.jsx("path",{id:"e73810fe-4cf4-40cc-8c7c-ca544ce30bd4","data-name":"Path 7",d:"M561.971,337.96451a24.43594,24.43594,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,561.971,337.96451Z",transform:"translate(-227.576 -76.46149)",fill:"#ccc"}),e.jsx("circle",{id:"a4813fcf-056e-4514-bb8b-e6506f49341f","data-name":"Ellipse 1",cx:"364.43401",cy:"261.50202",r:"24.45",fill:"#99B37C"}),e.jsx("path",{id:"bbe451c3-febc-41ba-8083-4c8307a2e73e","data-name":"Path 8",d:"M632.872,414.3305h-142.5a5.123,5.123,0,0,1-5.117-5.117v-142.5a5.123,5.123,0,0,1,5.117-5.117h142.5a5.123,5.123,0,0,1,5.117,5.117v142.5A5.123,5.123,0,0,1,632.872,414.3305Zm-142.5-150.686a3.073,3.073,0,0,0-3.07,3.07v142.5a3.073,3.073,0,0,0,3.07,3.07h142.5a3.073,3.073,0,0,0,3.07-3.07v-142.5a3.073,3.073,0,0,0-3.07-3.07Z",transform:"translate(-227.576 -76.46149)",fill:"#ccc"}),e.jsx("rect",{id:"bb28937d-932f-4fdf-befe-f406e51091fe","data-name":"Rectangle 1",x:"218.56201",y:"447.10197",width:"218.552",height:"2.047",fill:"#ccc"}),e.jsx("circle",{id:"fcef55fc-4968-45b2-93bb-1a1080c85fc7","data-name":"Ellipse 2",cx:"225.46401",cy:"427.41999",r:"6.902",fill:"#99B37C"}),e.jsx("rect",{id:"ff33d889-4c74-4b91-85ef-b4882cc8fe76","data-name":"Rectangle 2",x:"218.56201",y:"516.11803",width:"218.552",height:"2.047",fill:"#ccc"}),e.jsx("circle",{id:"e8fa0310-b872-4adf-aedd-0c6eda09f3b8","data-name":"Ellipse 3",cx:"225.46401",cy:"496.43702",r:"6.902",fill:"#99B37C"}),e.jsx("path",{d:"M660.69043,671.17188H591.62207a4.50493,4.50493,0,0,1-4.5-4.5v-24.208a4.50492,4.50492,0,0,1,4.5-4.5h69.06836a4.50491,4.50491,0,0,1,4.5,4.5v24.208A4.50492,4.50492,0,0,1,660.69043,671.17188Z",transform:"translate(-227.576 -76.46149)",fill:"#99B37C"}),e.jsx("circle",{id:"e12ee00d-aa4a-4413-a013-11d20b7f97f7","data-name":"Ellipse 7",cx:"247.97799",cy:"427.41999",r:"6.902",fill:"#99B37C"}),e.jsx("circle",{id:"f58f497e-6949-45c8-be5f-eee2aa0f6586","data-name":"Ellipse 8",cx:"270.492",cy:"427.41999",r:"6.902",fill:"#99B37C"}),e.jsx("circle",{id:"b4d4939a-c6e6-4f4d-ba6c-e8b05485017d","data-name":"Ellipse 9",cx:"247.97799",cy:"496.43702",r:"6.902",fill:"#99B37C"}),e.jsx("circle",{id:"aff120b1-519b-4e96-ac87-836aa55663de","data-name":"Ellipse 10",cx:"270.492",cy:"496.43702",r:"6.902",fill:"#99B37C"}),e.jsx("path",{id:"f1094013-1297-477a-ac57-08eac07c4bd5","data-name":"Path 88",d:"M969.642,823.53851H251.656c-1.537,0-2.782-.546-2.782-1.218s1.245-1.219,2.782-1.219H969.642c1.536,0,2.782.546,2.782,1.219S971.178,823.53851,969.642,823.53851Z",transform:"translate(-227.576 -76.46149)",fill:"#3f3d56"}),e.jsx("path",{d:"M792.25256,565.92292a10.09371,10.09371,0,0,1,1.41075.78731l44.8523-19.14319,1.60093-11.81526,17.92157-.10956-1.05873,27.0982-59.19987,15.65584a10.60791,10.60791,0,0,1-.44749,1.20835,10.2346,10.2346,0,1,1-5.07946-13.68169Z",transform:"translate(-227.576 -76.46149)",fill:"#ffb8b8"}),e.jsx("polygon",{points:"636.98 735.021 624.72 735.021 618.888 687.733 636.982 687.734 636.98 735.021",fill:"#ffb8b8"}),e.jsx("path",{d:"M615.96281,731.51778h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H601.076a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,615.96281,731.51778Z",fill:"#2f2e41"}),e.jsx("polygon",{points:"684.66 731.557 672.459 732.759 662.018 686.271 680.025 684.497 684.66 731.557",fill:"#ffb8b8"}),e.jsx("path",{d:"M891.68576,806.12757h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H876.7989a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,891.68576,806.12757Z",transform:"translate(-303.00873 15.2906) rotate(-5.62529)",fill:"#2f2e41"}),e.jsx("circle",{cx:"640.3925",cy:"384.57375",r:"24.56103",fill:"#ffb8b8"}),e.jsx("path",{d:"M849.55636,801.91945a4.47086,4.47086,0,0,1-4.415-3.69726c-6.34571-35.22559-27.08789-150.40528-27.584-153.59571a1.42684,1.42684,0,0,1-.01562-.22168v-8.58789a1.489,1.489,0,0,1,.27929-.87207l2.74024-3.83789a1.47845,1.47845,0,0,1,1.14355-.625c15.62207-.73242,66.78418-2.8789,69.25586.209h0c2.48242,3.10351,1.60547,12.50683,1.4043,14.36035l.00977.19336,22.98535,146.99512a4.51238,4.51238,0,0,1-3.71485,5.13476l-14.35644,2.36524a4.52127,4.52127,0,0,1-5.02539-3.09278c-4.44043-14.18847-19.3291-61.918-24.48926-80.38672a.49922.49922,0,0,0-.98047.13868c.25781,17.60546.88086,62.52343,1.0957,78.0371l.02344,1.6709a4.51811,4.51811,0,0,1-4.09277,4.53614l-13.84375,1.25781C849.83565,801.91359,849.695,801.91945,849.55636,801.91945Z",transform:"translate(-227.576 -76.46149)",fill:"#2f2e41"}),e.jsx("path",{id:"ae7af94f-88d7-4204-9f07-e3651de85c05","data-name":"Path 99",d:"M852.38089,495.2538c-4.28634,2.548-6.85116,7.23043-8.32276,11.9951a113.681,113.681,0,0,0-4.88444,27.15943l-1.55553,27.60021-19.25508,73.1699c16.68871,14.1207,26.31542,10.91153,48.78049-.63879s25.03222,3.85117,25.03222,3.85117l4.49236-62.25839,6.41837-68.03232a30.16418,30.16418,0,0,0-4.86143-4.67415,49.65848,49.65848,0,0,0-42.44229-8.99538Z",transform:"translate(-227.576 -76.46149)",fill:"#ffffff"}),e.jsx("path",{d:"M846.12661,580.70047a10.52561,10.52561,0,0,1,1.50061.70389l44.34832-22.1972.736-12.02551,18.2938-1.26127.98041,27.4126L852.7199,592.93235a10.4958,10.4958,0,1,1-6.59329-12.23188Z",transform:"translate(-227.576 -76.46149)",fill:"#ffb8b8"}),e.jsx("path",{id:"a6768b0e-63d0-4b31-8462-9b2e0b00f0fd","data-name":"Path 101",d:"M902.76552,508.41151c10.91151,3.85117,12.83354,45.57369,12.83354,45.57369-12.8367-7.06036-28.24139,4.49318-28.24139,4.49318s-3.20916-10.91154-7.06034-25.03223a24.52987,24.52987,0,0,1,5.13436-23.10625S891.854,504.558,902.76552,508.41151Z",transform:"translate(-227.576 -76.46149)",fill:"#ffffff"}),e.jsx("path",{id:"bfd7963f-0cf8-4885-9d3a-2c00bccda2e3","data-name":"Path 102",d:"M889.99122,467.53052c-3.06-2.44837-7.23517,2.00173-7.23517,2.00173l-2.4484-22.03349s-15.30095,1.8329-25.0935-.61161-11.32255,8.87513-11.32255,8.87513a78.57978,78.57978,0,0,1-.30582-13.77092c.61158-5.50838,8.56838-11.01675,22.6451-14.68932S887.6518,439.543,887.6518,439.543C897.44542,444.43877,893.05121,469.97891,889.99122,467.53052Z",transform:"translate(-227.576 -76.46149)",fill:"#2f2e41"})]})]}),e.jsxs("div",{className:"w-full md:w-[50%] md:py-10 px-4 md:px-10",children:[e.jsx("div",{className:"hidden md:block text-center mb-0 md:mb-6 ",children:e.jsx("h1",{className:"font-bold text-xl text-gray-800 mt-2 md:mt-0",children:e.jsx("span",{className:" border-b-2 border-b-[#6c8351]",children:"Citizen Registration"})})}),e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{id:"id_name",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-6 md:relative",children:[e.jsxs("label",{for:"",className:"font-semibold px-1 text-gray-800 mb-1",children:["Name",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center",children:e.jsx("i",{className:"mdi mdi-account-outline text-gray-400 text-lg"})}),e.jsx("input",{type:"text",className:"w-full -ml-10 text-sm pl-2 h-10 pr-3 py-2 rounded-lg  outline-none focus:border-b focus:border-b-indigo-500 shadow-md",...a.getFieldProps("name"),placeholder:"Enter your name"}),a.errors.name&&a.touched.name?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.name}):null]})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 w-full md:px-4 mb-6 relative",children:[e.jsxs("label",{for:"",className:"font-semibold px-1 text-gray-800 mb-1",children:["Mobile No.",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("div",{className:"flex relative",children:[e.jsx("div",{className:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center",children:e.jsx("i",{className:"mdi mdi-account-outline text-gray-400 text-lg h-10"})}),e.jsx("input",{disabled:!0,type:"text",maxlength:"10",className:"w-full -ml-10 text-sm pl-2  pr-3 py-2 rounded-lg  outline-none focus:border-b focus:border-b-indigo-500 shadow-md",...a.getFieldProps("mobile"),placeholder:"Enter your mobile no."}),e.jsx("span",{className:"absolute right-0 top-2",children:e.jsx(we,{className:"inline text-green-500 text-xl"})}),a.errors.mobile&&a.touched.mobile?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.mobile}):null]})]}),e.jsxs("div",{id:"id_email",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-6 relative",children:[e.jsx("label",{for:"",className:"font-semibold px-1 text-gray-800 mb-1",children:"Email"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center",children:e.jsx("i",{className:"mdi mdi-email-outline text-gray-400 text-lg"})}),e.jsx("input",{type:"text",className:"w-full -ml-10 text-sm pl-2 h-10  py-2 rounded-lg  outline-none focus:border-b focus:border-b-indigo-500 shadow-md",...a.getFieldProps("email"),placeholder:"Enter your email"}),a.errors.email&&a.touched.email?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.email}):null]})]}),e.jsxs("div",{id:"id_password",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-6 relative",children:[e.jsxs("label",{for:"",className:"font-semibold px-1 text-gray-800 mb-1",children:["Password",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center",children:e.jsx("i",{className:"mdi mdi-lock-outline text-gray-400 text-lg"})}),e.jsx("input",{type:"password",className:"w-full -ml-10 text-sm pl-2 h-10  py-2 rounded-lg  outline-none focus:border-b focus:border-b-indigo-500 shadow-md",...a.getFieldProps("password"),placeholder:"Enter your password"}),a.errors.password&&a.touched.password?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.password}):null]})]}),e.jsxs("div",{id:"id_confirmPassword",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsxs("label",{for:"",className:"font-semibold px-1 text-gray-800 mb-1",children:["Confirm Password",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-10 z-10 pl-1 h-10 text-center pointer-events-none flex items-center justify-center",children:e.jsx("i",{className:"mdi mdi-lock-outline text-gray-400 text-lg shadow-sm "})}),e.jsx("input",{type:"password",className:"w-full -ml-10 text-sm pl-2  py-2 rounded-lg outline-none focus:border-b focus:border-b-indigo-500 shadow-md",...a.getFieldProps("confirmPassword"),placeholder:"Renter your password"}),a.errors.confirmPassword&&a.touched.confirmPassword?e.jsx("div",{className:"text-red-600 absolute text-xs -bottom-4",children:a.errors.confirmPassword}):null]})]}),e.jsxs("div",{id:"id_dob",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsxs("label",{className:"inline-block mb-2",children:["DOB ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{max:oe.toISOString().split("T")[0],...a.getFieldProps("dob"),type:"date",className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),a.errors.dob&&a.touched.dob?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.dob}):null]}),e.jsxs("div",{id:"id_gender",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsxs("label",{className:"inline-block mb-2",children:["Gender ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{...a.getFieldProps("gender"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer",children:[e.jsx("option",{children:"select"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Other",children:"Other"})]}),a.errors.gender&&a.touched.gender?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.gender}):null]}),e.jsxs("div",{ref:ne,id:"id_aadhar",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsx("label",{className:"inline-block mb-2",children:"Aadhar No."}),e.jsx("input",{type:"text",...a.getFieldProps("aadhar"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",placeholder:"Enter Aadhar No."}),a.errors.aadhar&&a.touched.aadhar?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.aadhar}):null]}),e.jsxs("div",{id:"id_armedForce",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Armed Force ?",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),e.jsx("span",{className:"text-xs text-gray-500",children:b&&"(You cannot be armed force as you are specially abled)"})," "]}),e.jsxs("select",{disabled:!!b,...a.getFieldProps("isArmedForce"),type:"text",className:`w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer ${b?"bg-gray-300 cursor-text":"bg-white"}`,children:[e.jsx("option",{value:"1",children:"Yes"}),e.jsx("option",{value:"0",children:"No"})]}),a.errors.isArmedForce&&a.touched.isArmedForce?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.isArmedForce}):null]}),e.jsxs("div",{id:"id_sepciallyAbled",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Specially Abled ?",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),e.jsx("span",{className:"text-xs text-gray-500",children:p&&"(You cannot be specialy-abled as you are armed force)"})," "]}),e.jsxs("select",{disabled:!!p,...a.getFieldProps("isSpeciallyAbled"),type:"text",className:`w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer ${p?"bg-gray-300 cursor-text":"bg-white"}`,children:[e.jsx("option",{value:"1",children:"Yes"}),e.jsx("option",{value:"0",children:"No"})]}),a.errors.isSpeciallyAbled&&a.touched.isSpeciallyAbled?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.isSpeciallyAbled}):null]}),A&&e.jsxs("div",{id:"id_armedDocument",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsx("label",{className:"inline-block mb-2",children:"Armed Force Document"}),e.jsx("input",{...a.getFieldProps("armedForceDoc"),accept:".pdf,.jpg,.jpeg,.png",type:"file",className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),a.errors.armedForceDoc&&a.touched.armedForceDoc?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.armedForceDoc}):null]}),S&&e.jsxs("div",{id:"id_speciallyDocument",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsx("label",{className:"inline-block mb-2",children:"Specially Abled Document"}),e.jsx("input",{...a.getFieldProps("speciallyAbledDoc"),accept:".pdf,.jpg,.jpeg,.png",type:"file",className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),a.errors.speciallyAbledDoc&&a.touched.speciallyAbledDoc?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.speciallyAbledDoc}):null]}),e.jsxs("div",{id:"id_aadharDocument",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsx("label",{className:"inline-block mb-2",children:"Aadhar Document"}),e.jsx("input",{...a.getFieldProps("aadharDoc"),accept:".pdf,.jpg,.jpeg,.png",type:"file",className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),a.errors.aadharDoc&&a.touched.aadharDoc?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.aadharDoc}):null]}),e.jsxs("div",{id:"id_photo",className:"col-span-12 md:col-span-6 w-full md:px-4 mb-3 relative",children:[e.jsxs("label",{className:"inline-block mb-2",children:["Photo",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("photo"),accept:".pdf,.jpg,.jpeg,.png",type:"file",className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),a.errors.photo&&a.touched.photo?e.jsx("div",{className:"text-red-600 text-xs absolute -bottom-4",children:a.errors.photo}):null]}),e.jsxs("div",{className:"col-span-12 ",children:[e.jsx("p",{className:"text-center text-red-600 font-semibold",children:w&&w}),e.jsx("div",{className:"w-full px-3 mb-5 text-center",children:e.jsx("button",{type:"submit",className:"mx-auto bg-[#99B37C] hover:scale-105 hover:bg-[#6c8351] focus:bg-[#6c8351] text-white rounded-lg px-12 py-3 font-semibold mt-5",children:"REGISTER NOW"})}),e.jsxs("div",{children:[e.jsxs("span",{onClick:()=>m("/"),className:"text-gray-600 font-semibold hover:bg-white px-3 py-1 cursor-pointer ",children:[e.jsx(ve,{className:"inline mr-2"}),"Home"]}),e.jsxs("span",{onClick:()=>m("/login"),className:"text-gray-600 font-semibold hover:bg-white px-3 py-1 cursor-pointer float-right",children:["Login",e.jsx(Ne,{className:"inline ml-2"})]})]})]})]})]})]})]})})})})]})}export{Oe as default};
