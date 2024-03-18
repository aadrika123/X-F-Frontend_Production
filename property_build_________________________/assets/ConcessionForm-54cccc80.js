import{f as Ve,u as Be,r as l,e as Ee,A as z,b as U,q as Oe,s as v,w as Me,j as e,a5 as Re,aa as Te,L as qe,cC as Ge,a8 as C,Q as Ye}from"./index-11eb40a4.js";import{m as S}from"./moment-58c1f2b4.js";import{A as Le}from"./ApplicationSubmitScreen-615a90e4.js";import"./index.esm-542adf5d.js";import"./check-f4ca1ac8.js";/* empty css             */const He=()=>{const m=Ve;return{getConcessionOwners:`${m}/api/property/concession/owner-details`,getDocMaster:`${m}/api/property/concession/get-doc-type`,postConcessionForm:`${m}/api/property/concession/apply-concession`}};function ds(m){var Z;const{getConcessionOwners:V,postConcessionForm:me,getDocMaster:ue}=He(),{id:f}=Be();console.log("id in concession => ",f);const[F,B]=l.useState(null),[D,E]=l.useState(null),[k,O]=l.useState(null),[A,M]=l.useState(null),[_,xe]=l.useState(null),[I,fe]=l.useState(null),[P,ge]=l.useState(null),[$,be]=l.useState(null),[c,he]=l.useState();l.useState("");const[R,p]=l.useState(!1),[ye,Ne]=l.useState(""),[u,T]=l.useState(!1),[x,q]=l.useState(!1),[g,G]=l.useState(!1),[b,Y]=l.useState(!1),[L,H]=l.useState(!1),[we,Q]=l.useState(),[Qe,je]=l.useState(),[Je,J]=l.useState(),[Ke,ve]=l.useState(),[We,K]=l.useState(),[Xe,Ce]=l.useState(),[Ze,W]=l.useState(),[es,Se]=l.useState(),[ss,X]=l.useState(),[Fe,De]=l.useState(),[ke,Ae]=l.useState(!1),[_e,Ie]=l.useState(""),Pe=Ee(),$e=()=>{Pe(`/holdingPropertyDetails/${f}`)};l.useEffect(()=>{Q(!1),p(!0),z.post(V,{propId:f},U()).then(s=>{var a,d;console.log("getting owner data => ",s),p(!1),he(s.data),De((d=(a=s==null?void 0:s.data)==null?void 0:a.data)==null?void 0:d.ulbId)}).catch(s=>{console.log("getting owner data err => ",s),p(!1)})},[f]),Oe({gender:v().when([],{is:()=>u===!0,then:v().typeError("Select gender").required("Select gender")}),dob:v().when([],{is:()=>x===!0,then:v().test("dob","not 60 years old",s=>S().diff(S(s),"years")>=60)})});const t=Me({initialValues:{genders:"",dob:"",speciallyAbled:!0,speciallyAbledPercentage:"",armedForce:!0,genderDoc:"",dobDoc:"",speciallyAbledDoc:"",armedForceDoc:"",genderCode:"",dobCode:"",speciallyAbledCode:"",armedForceCode:""},enableReinitialize:!0,onSubmit:s=>{console.log("submitting values => ",s),ze(s)&&Ue(s)}}),i=(s,a)=>{Ie(a),Ae(s)},ze=s=>{if(u){if(s.genders=="")return i(!0,"Please select gender"),!1;if(F!=null&&!C(F))return t.setFieldValue("genderDoc","").then(()=>{i(!0,"Check your gender proof file size"),B(null)}),!1}if(x){if(s.dob=="")return i(!0,"Please enter dob"),!1;if(!(S().diff(S(s.dob),"years")>=60))return i(!0,"You must be atleast 60 years of age"),!1;if(D!=null&&!C(D))return t.setFieldValue("dobDoc","").then(()=>{i(!0,"Check your dob proof file size"),E(null)}),!1}if(b){if(s.speciallyAbledPercentage=="")return i(!0,"Please enter Specially-Abled percentage"),!1;if(s.speciallyAbledPercentage<40)return i(!0,"Specially-Abled Percentage should be atleast 40%"),!1;if(k!=null&&!C(k))return t.setFieldValue("speciallyAbledDoc","").then(()=>{i(!0,"Check your specially abled proof file size"),O(null)}),!1}return g&&A!=null&&!C(A)?(t.setFieldValue("armedForceDoc","").then(()=>{i(!0,"Check your armed force proof file size"),M(null)}),!1):!0},Ue=s=>{var n,N;let a=new FormData;a.append("propId",f),a.append("ulbId",Fe),a.append("applicantName",(n=c==null?void 0:c.data)==null?void 0:n.ownerName),a.append("ownerId",(N=c==null?void 0:c.data)==null?void 0:N.ownerId);let d=[{key:"genderStatus",value:u},{key:"seniorStatus",value:x},{key:"speciallyStatus",value:b},{key:"armedStatus",value:g}];d==null||d.map((o,r)=>{(o==null?void 0:o.key)=="genderStatus"&&(o==null?void 0:o.value)==!0&&(a.append(`concessionData[${r}][value]`,s.genders),a.append(`concessionData[${r}][doc]`,F),a.append(`concessionData[${r}][code]`,s.genderCode),a.append(`concessionData[${r}][appliedFor]`,"Gender")),(o==null?void 0:o.key)=="seniorStatus"&&(o==null?void 0:o.value)==!0&&(a.append(`concessionData[${r}][value]`,s.dob),a.append(`concessionData[${r}][doc]`,D),a.append(`concessionData[${r}][code]`,s.dobCode),a.append(`concessionData[${r}][appliedFor]`,"Senior Citizen")),(o==null?void 0:o.key)=="speciallyStatus"&&(o==null?void 0:o.value)==!0&&(a.append(`concessionData[${r}][value]`,!0),a.append(`concessionData[${r}][percentage]`,s.speciallyAbledPercentage),a.append(`concessionData[${r}][doc]`,k),a.append(`concessionData[${r}][code]`,s.speciallyAbledCode),a.append(`concessionData[${r}][appliedFor]`,"Specially Abled")),(o==null?void 0:o.key)=="armedStatus"&&(o==null?void 0:o.value)==!0&&(a.append(`concessionData[${r}][value]`,!0),a.append(`concessionData[${r}][doc]`,A),a.append(`concessionData[${r}][code]`,s.armedForceCode),a.append(`concessionData[${r}][appliedFor]`,"Armed Force"))}),p(!0),setTimeout(()=>{p(!1)},1e4),z.post(me,a,U()).then(o=>{var r,w;((r=o==null?void 0:o.data)==null?void 0:r.status)==!0?(console.log("successfully posted => ",o,`
 result data =>`,a),Ye.success("Concession Applied Successfully!!"),Ne((w=o==null?void 0:o.data)==null?void 0:w.data),Q(!0)):i(!0,"Error occured in submitting Concession application. Please try again later."),p(!1)}).catch(o=>{p(!1),i(!0,"Error occured in submitting Concession application. Please try again later.")})},j=s=>{if(s.target.name=="genderDoc"){let a=s.target.files[0];B(s.target.files[0]),console.log("--1-file on change..",a)}else if(s.target.name=="dobDoc"){let a=s.target.files[0];E(s.target.files[0]),console.log("--2-file on change..",a)}else if(s.target.name=="speciallyAbledDoc"){let a=s.target.files[0];O(s.target.files[0]),console.log("--3-file on change..",a)}else if(s.target.name=="armedForceDoc"){let a=s.target.files[0];M(s.target.files[0]),console.log("--4-file on change..",a)}};let h="form-control w-full px-3 text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md w-max";const y=s=>{const a=s.target.name,d=s.target.checked;a=="gender"&&d==!0&&T(!0),a=="seniorCitizen"&&d==!0&&q(!0),a=="armedForce"&&d==!0&&G(!0),a=="speciallyAbled"&&d==!0&&Y(!0),a!="declaration"&&d&&(p(!0),z.post(ue,{doc:s.target.name},U()).then(n=>{var N,o,r,w,ee,se,te,ae,oe,le,ne,re,de,ie,ce,pe;console.log("response doc master id => ",n),s.target.name=="gender"&&(xe((o=(N=n==null?void 0:n.data)==null?void 0:N.data)==null?void 0:o.masters),J((w=(r=n==null?void 0:n.data)==null?void 0:r.data)==null?void 0:w.doc_name)),s.target.name=="seniorCitizen"&&(fe((se=(ee=n==null?void 0:n.data)==null?void 0:ee.data)==null?void 0:se.masters),K((ae=(te=n==null?void 0:n.data)==null?void 0:te.data)==null?void 0:ae.doc_name)),s.target.name=="armedForce"&&(ge((le=(oe=n==null?void 0:n.data)==null?void 0:oe.data)==null?void 0:le.masters),W((re=(ne=n==null?void 0:n.data)==null?void 0:ne.data)==null?void 0:re.doc_name)),s.target.name=="speciallyAbled"&&(be((ie=(de=n==null?void 0:n.data)==null?void 0:de.data)==null?void 0:ie.masters),X((pe=(ce=n==null?void 0:n.data)==null?void 0:ce.data)==null?void 0:pe.doc_name))}).finally(()=>p(!1))),a=="gender"&&d==!1&&(T(!1),je(void 0),J(void 0)),a=="seniorCitizen"&&d==!1&&(q(!1),ve(void 0),K(void 0)),a=="armedForce"&&d==!1&&(G(!1),Ce(void 0),W(void 0)),a=="speciallyAbled"&&d==!1&&(Y(!1),Se(void 0),X(void 0)),a=="declaration"&&d==!0&&H(!0),a=="declaration"&&d==!1&&H(!1)};return e.jsxs(e.Fragment,{children:[ke&&e.jsx(Re,{activateBottomErrorCard:i,errorTitle:_e}),e.jsx(Te,{position:"top-right",autoClose:2e3}),R&&e.jsx(qe,{}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(Ge,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Apply For Concession"})]})}),e.jsx("div",{className:"poppins my-2 2xl:font-base text-sm",children:"If a property owner falls under any of the following categories, they are eligible for an additional 5 percent concession on their property tax demand from the current financial year until the financial year of their ownership, if they requested for the concession."}),e.jsxs("div",{className:"bg-white py-4 shadow-sm rounded-md transition-all duration-300 px-6",children:[e.jsx("div",{className:"flex flex-col gap-2 w-full",children:e.jsxs("div",{className:"w-full flex flex-row flex-wrap gap-4",children:[e.jsx("div",{className:"text-sm poppins",children:"Owner's Name :"}),e.jsx("div",{className:"font-semibold poppins",children:(Z=c==null?void 0:c.data)==null?void 0:Z.ownerName})]})}),c==null&&e.jsx("div",{className:"animate__animated animate__fadeInUp w-full flex justify-center items-center",children:!R&&e.jsx("div",{className:"bg-red-200 text-red-600 rounded-md shadow-lg px-6 py-4 poppins",children:"! No Data Found !"})}),e.jsxs("form",{onSubmit:t.handleSubmit,onChange:t.handleChange,className:"animate__animated animate__fadeInUp",children:[e.jsxs("div",{className:"w-full mb-4 mt-2",children:[e.jsx("div",{className:"poppins text-sm font-semibold",children:"Check the below option by which you want to apply ?"}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-x-16",children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"gender",id:"gender",onChange:y,className:h+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"gender",children:"Gender"})]}),e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"seniorCitizen",id:"seniorCitizen",onChange:y,className:h+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"seniorCitizen",children:"Senior Citizen"})]}),e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"speciallyAbled",id:"speciallyAbled",onChange:y,className:h+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"speciallyAbled",children:"Specially Abled"})]}),e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"armedForce",id:"armedForce",onChange:y,className:h+" shadow-sm"})," "," ",e.jsx("label",{className:"poppins 2xl:text-base text-xs",htmlFor:"armedForce",children:"Armed Force"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[u&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Gender"]}),e.jsxs("select",{onChange:t.handleChange,...t.getFieldProps("genders"),value:t.values.genders,className:"form-control block poppins w-full px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",children:"--Select--"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Transgender",children:"Transgender"})]}),e.jsx("span",{className:"text-red-600  text-xs",children:t.touched.genders&&t.errors.genders?t.errors.genders:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{...t.getFieldProps("genderCode"),onChange:t.handleChange,value:t.values.genderCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),_==null?void 0:_.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600  text-xs",children:t.touched.genderCode&&t.errors.genderCode?t.errors.genderCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload gender proof"]}),e.jsx("input",{...t.getFieldProps("genderDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full poppins px-3 py-1.5 md:py-1 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.genderDoc&&t.errors.genderDoc?t.errors.genderDoc:null})]})]}),x&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"DOB"]}),e.jsx("input",{...t.getFieldProps("dob"),type:"date",onChange:t.handleChange,className:"form-control block w-full  px-3 py-1.5 md:py-1 2xl:text-base text-xs poppins md:text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.dob&&t.errors.dob?t.errors.dob:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{name:"dobCode",onChange:t.handleChange,value:t.values.dobCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),I==null?void 0:I.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:t.touched.dobCode&&t.errors.dobCode?t.errors.dobCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload DOB proof"]}),e.jsx("input",{...t.getFieldProps("dobDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full  px-3 py-1.5 md:py-1 poppins 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.dobDoc&&t.errors.dobDoc?t.errors.dobDoc:null})]})]}),b&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Specially-Abled"]}),e.jsx("div",{className:"font-semibold poppins text-sm text-gray-800",children:"Yes"})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Specially-Abled Percentage (%)"]}),e.jsx("input",{onChange:t.handleChange,type:"number",...t.getFieldProps("speciallyAbledPercentage"),className:"form-control block w-full px-3 py-1.5 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.speciallyAbledPercentage&&t.errors.speciallyAbledPercentage?t.errors.speciallyAbledPercentage:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{name:"speciallyAbledCode",onChange:t.handleChange,value:t.values.speciallyAbledCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),$==null?void 0:$.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:t.touched.speciallyAbledCode&&t.errors.speciallyAbledCode?t.errors.speciallyAbledCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload specially-abled proof"]}),e.jsx("input",{...t.getFieldProps("speciallyAbledDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full  px-3 py-1.5 md:py-1 poppins 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.speciallyAbledDoc&&t.errors.speciallyAbledDoc?t.errors.speciallyAbledDoc:null})]})]}),g&&e.jsxs("div",{className:`col-span-3 grid grid-cols-1 md:grid-cols-3  animate__animated animate__fadeIn animate__faster\r
px-6 py-2 mt-2 shadow-sm font-base poppins bg-zinc-50 rounded-sm mb-2 gap-x-6`,children:[e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Armed-Force"]}),e.jsx("div",{className:"font-semibold poppins text-sm text-gray-800",children:"Yes"})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1 ",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select document to upload :"]}),e.jsxs("select",{name:"armedForceCode",onChange:t.handleChange,value:t.values.armedForceCode,className:"form-control w-full poppins px-3 py-1.5 2xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:"Select"}),P==null?void 0:P.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.documentCode,className:"poppins",children:s==null?void 0:s.docVal})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:t.touched.armedForceCode&&t.errors.armedForceCode?t.errors.armedForceCode:null})]}),e.jsxs("div",{className:"form-group  col-span-3 md:col-span-1",children:[e.jsxs("label",{className:"form-label inline-block text-gray-600 2xl:text-sm text-xs font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Upload armed force proof"]}),e.jsx("input",{...t.getFieldProps("armedForceDoc"),type:"file",accept:".jpg,.jpeg,.pdf",onChange:j,className:"form-control block w-full  px-3 py-1.5 md:py-1 poppins 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.armedForceDoc&&t.errors.armedForceDoc?t.errors.armedForceDoc:null})]})]}),(u||x||b||g)&&e.jsx("div",{className:"flex flex-row flex-wrap gap-16 my-2 w-full col-span-3",children:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("input",{type:"checkbox",name:"declaration",id:"declaration",onChange:y,className:h+" shadow-sm text-indigo-700 bg-indigo-800"})," ","   ",e.jsxs("label",{className:"poppins 2xl:text-sm text-xs italic",htmlFor:"declaration",children:[e.jsx("span",{className:"font-semibold poppins",children:"I accept "})," that the above declaration are true."]})]})}),e.jsxs("div",{className:"col-span-3 w-full flex flex-row flex-wrap justify-between",children:[e.jsx("div",{className:"",children:e.jsx("button",{onClick:m==null?void 0:m.closeModal,type:"button",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs  poppins rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",children:"Close"})}),e.jsx("div",{className:"",children:(u||x||b||g)&&e.jsx("button",{type:"submit",disabled:!L,className:(L?"bg-green-600 hover:bg-green-700":"bg-zinc-600 hover:bg-zinc-700 cursor-not-allowed")+" px-3 py-1.5 2xl:px-6 2xl:py-2.5 text-white font-medium text-xs  poppins  rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out",children:"Submit"})})]})]})]})]}),e.jsx(Le,{heading:"Apply For Concession",appNo:ye,openSubmit:we,navigation:$e}),e.jsx("div",{className:"h-[10rem] visible 2xl:hidden"})]})}export{ds as default};
