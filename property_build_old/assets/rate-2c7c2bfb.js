import{a0 as S,r as o,F as T,e as C,q as H,s as k,w as A,j as t,H as E,aE as F,aN as B,X as M,b as P,a5 as z}from"./index-6178a477.js";import{a as I}from"./index.esm-a16a9541.js";const $="/assets/building-71208d48.png";S.setAppElement("#root");function D(e){o.useState(!0);const[f,u]=o.useState(!1),[R,s]=o.useState(!1),[a,g]=o.useState([]),{api_verifyHolding:b}=z(),{notify:r}=o.useContext(T);C();const y=H({holdingNo:k().required("Enter holding no.").min(10,"Enter 15 or 16 digit holding no.")}),n=A({initialValues:{holdingNo:""},onSubmit:i=>{console.log("at submit form.....",i.holdingNo),g([...a,i.holdingNo]),n.resetForm()},validationSchema:y}),w=i=>{let l=i.target.name,d=i.target.value;l=="holdingNo"&&n.setFieldValue("holdingNo",B(d,n.values.holdingNo,16)),l=="holdingNo"&&d.length>=15?s(!0):s(!1)},j=()=>{(e==null?void 0:e.safType)=="mu"?v():e==null||e.funcSubmitHoldingList(a)},v=()=>{console.log("otp send..."),u(!0),s(!1);let i={holdingNo:a[0],ulbId:e==null?void 0:e.choosedUlbId};console.log("before verify holding no....",i),M.post(b,i,P()).then(l=>{var d,c,x,h,m;console.log("varify holding response....",l==null?void 0:l.data),(d=l==null?void 0:l.data)!=null&&d.status?(e==null||e.setmutionHoldingId((x=(c=l==null?void 0:l.data)==null?void 0:c.data)==null?void 0:x.id),e==null||e.fetchPropertyDetails((m=(h=l==null?void 0:l.data)==null?void 0:h.data)==null?void 0:m.id),e==null||e.setholdingCardStatus(!1),r("holding verified successfully","success")):r("Problem in sending OTP","error"),u(!1)}).catch(l=>{console.log("verify holding errror",l),r("Something went wrong...","error"),u(!1),s(!0)})},N=i=>{g(l=>l.filter((d,c)=>c!=i))};return t.jsxs(t.Fragment,{children:[f&&t.jsx(E,{}),t.jsx(F,{children:t.jsx("div",{class:"w-auto py-10",children:t.jsx("div",{class:"container mx-auto",children:t.jsx("div",{class:"mx-auto",children:t.jsxs("div",{class:"bg-white py-20 px-8 rounded text-center shadow-xl relative",children:[t.jsx("button",{onClick:()=>e==null?void 0:e.closeModal(!1),type:"button",class:"absolute top-6 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:t.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:t.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),t.jsxs("div",{class:"text-2xl font-bold px-10",children:["Applying for  ",(e==null?void 0:e.safType)=="bi"&&"Bifurcation",(e==null?void 0:e.safType)=="am"&&"Amalgamation",(e==null?void 0:e.safType)=="mu"&&"Mutation"]}),!((e==null?void 0:e.safType)=="bi"&&(a==null?void 0:a.length)!=0)&&t.jsx(t.Fragment,{children:t.jsx("div",{class:"flex flex-col mt-4 text-center",children:t.jsxs("span",{className:"text-center font-semibold",children:["Enter holding no for  ",(e==null?void 0:e.safType)=="bi"&&"Bifurcation",(e==null?void 0:e.safType)=="am"&&"Amalgamation",(e==null?void 0:e.safType)=="mu"&&"Mutation","."]})})}),t.jsx("div",{class:"flex flex-row justify-center text-center px-2 mt-5",children:t.jsxs("form",{onSubmit:n.handleSubmit,onChange:w,children:[!(((e==null?void 0:e.safType)=="bi"||(e==null?void 0:e.safType)=="mu")&&(a==null?void 0:a.length)!=0)&&t.jsxs("div",{className:"relative",children:[t.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold w-full text-left",children:"Holding No."}),t.jsx("input",{type:"text",...n.getFieldProps("holdingNo"),className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),t.jsx("span",{className:"text-red-600 absolute text-xs",children:n.touched.holdingNo&&n.errors.holdingNo?n.errors.holdingNo:null})]}),t.jsxs("div",{class:"w-full text-center mt-10",children:[(e==null?void 0:e.safType)=="mu"&&(a==null?void 0:a.length)==0&&t.jsx("button",{type:"submit",className:"w-full  py-2.5 bg-white border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight  rounded shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save"}),(e==null?void 0:e.safType)=="bi"&&(a==null?void 0:a.length)==0&&t.jsx("button",{type:"submit",className:"w-full  py-2.5 bg-white border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight  rounded shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save"}),(e==null?void 0:e.safType)=="am"&&t.jsx("button",{type:"submit",className:"w-full  py-2.5 bg-white border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight  rounded shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Add More"})]})]})}),(a==null?void 0:a.length)!=0&&t.jsx("div",{className:"px-10",children:t.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[t.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-2 py-3 w-10 border-b border-gray-200 text-gray-800  text-xs capitalize text-left",children:"#"}),t.jsx("th",{className:"px-2 py-3 w-10 border-b border-gray-200 text-gray-800  text-xs capitalize text-left",children:"Holding N0."}),t.jsx("th",{className:"px-2 py-3 w-28 border-b border-gray-200 text-gray-800  text-xs capitalize text-left",children:"Action"})]})}),t.jsx("tbody",{className:"text-sm",children:a==null?void 0:a.map((i,l)=>t.jsx(t.Fragment,{children:t.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.jsx(I,{onClick:()=>N(l),className:"inline ml-2 text-red-400 font-semibold text-lg cursor-pointer hover:text-red-700 relative hover:scale-150"})})]},`floorlist${l}`)}))})]})}),t.jsxs("div",{class:"w-full text-right mt-10",children:[(a==null?void 0:a.length)!=0&&t.jsx("button",{type:"button",onClick:j,className:"float-right w-full  py-4 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Submit & Proceed"}),(a==null?void 0:a.length)==0&&t.jsx("button",{type:"button",className:"float-right w-full  py-4 bg-gray-400 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:"Submit & Proceed"})]})]})})})})})]})}const O="/assets/pointer-7e55aab4.png",U="/assets/rate-90dc6cd4.png";export{D as H,U as R,$ as b,O as p};