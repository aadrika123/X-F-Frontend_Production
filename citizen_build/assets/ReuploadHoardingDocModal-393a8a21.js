import{M as V,r as o,b as te,A as q,bY as Y,j as e,cj as se,c3 as ne,c1 as z}from"./index-5738b2d0.js";const ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"gray",border:"none"}};V.setAppElement("#root");function le(s){var u,f,h,j,b,v,p,N,y,w,k,A,R,S,$,D,I,F,_,C,M,U,O,E,H,L,B;let a=" text-xs  text-gray-600";const{api_postHoardingReuploadedDocument:c}=z(),[t,r]=o.useState(),[l,i]=o.useState(""),[G,x]=o.useState(!1),[J,K]=o.useState(),Q=()=>x(!0),W=()=>x(!1),X=()=>{},g=n=>{i(n),Q()},Z={image:"",id:(u=s==null?void 0:s.data)==null?void 0:u.id},m=te({initialValues:Z,onSubmit:n=>{console.log("image file",n),r(n),q.post(`${c}`,n,Y()).then(function(d){console.log("re-uploaded document",d.data.data)}).catch(function(d){console.log("errorrr.... ",d)})}}),P=n=>{let d=n.target.name;n.target.value;let T=n.target.files[0];K(T),console.log("image file",J),d=="image"&&ee(T)},ee=n=>{m.setFieldValue("image",n);const d=new FileReader;d.onloadend=()=>{i(d.result)},d.readAsDataURL(n),console.log("file checker ",l)};return console.log("reupload doc ",s.data),e.jsxs("div",{children:[e.jsx("form",{onSubmit:m.handleSubmit,onChange:P,encType:"multipart/form-data",children:e.jsxs("div",{class:"grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1 ",children:[e.jsx("div",{className:"px-1",children:e.jsx("div",{className:"",children:e.jsxs("span",{className:`${a}`,children:[" ",(f=s==null?void 0:s.data)==null?void 0:f.doc_val," "]})})}),e.jsx("div",{className:"px-1",children:e.jsxs("div",{className:"flex items-center justify-center font-semibold text-sm",children:[e.jsx("div",{onClick:()=>g(l),children:e.jsx("img",{src:`${se}/${(h=s==null?void 0:s.data)==null?void 0:h.doc_path}`,alt:"Preview Image",className:`${a} w-8`})}),((j=s==null?void 0:s.data)==null?void 0:j.verify_status)==2&&e.jsx("div",{children:((b=t==null?void 0:t.image)==null?void 0:b.name)==null||((v=t==null?void 0:t.image)==null?void 0:v.name)==null||((p=t==null?void 0:t.image)==null?void 0:p.name)==""?e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/4194/4194756.png",alt:"Preview Image",className:`${a} w-8`}):e.jsx(e.Fragment,{children:((y=(N=t==null?void 0:t.image)==null?void 0:N.name)==null?void 0:y.split(".").pop())=="pdf"||((k=(w=t==null?void 0:t.image)==null?void 0:w.name)==null?void 0:k.split(".").pop())=="jpg"||((R=(A=t==null?void 0:t.image)==null?void 0:A.name)==null?void 0:R.split(".").pop())=="jpeg"||(($=(S=t==null?void 0:t.image)==null?void 0:S.name)==null?void 0:$.split(".").pop())=="png"?e.jsxs("div",{onClick:()=>g(l),children:[((I=(D=t==null?void 0:t.image)==null?void 0:D.name)==null?void 0:I.split(".").pop())=="pdf"&&e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3997/3997593.png",alt:"Preview Image",className:`${a} w-8`}),((_=(F=t==null?void 0:t.image)==null?void 0:F.name)==null?void 0:_.split(".").pop())=="jpg"&&e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/5719/5719824.png",alt:"Preview Image",className:`${a} w-8`}),((M=(C=t==null?void 0:t.image)==null?void 0:C.name)==null?void 0:M.split(".").pop())=="jpeg"&&e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/5719/5719824.png",alt:"Preview Image",className:`${a} w-8`}),((O=(U=t==null?void 0:t.image)==null?void 0:U.name)==null?void 0:O.split(".").pop())=="png"&&e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/5719/5719894.png",alt:"Preview Image",className:`${a} w-8`})]}):e.jsx(e.Fragment,{children:e.jsx(ne.Tooltip,{className:"bg-gray-500 text-xs text-white",content:"Does not support this file extension",children:e.jsx("div",{children:e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8316/8316660.png",className:`${a} w-8 mx-auto`})})})})})})]})}),e.jsx("div",{className:"px-1",children:e.jsx("div",{className:"flex items-center justify-center font-semibold text-sm",children:e.jsx("div",{className:"form-group col-span-4 md:col-span-1 md:px-0",children:e.jsx("input",{type:"file",name:"image",accept:".png, .jpg, .jpeg, .pdf",className:"form-control block w-full px-3 py-1.5 mb-3 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md w-36",onChange:m.handleChange})})})}),e.jsx("div",{className:"px-1",children:e.jsx("div",{className:"flex items-center justify-center font-semibold text-sm",children:e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 md:px-0 mt-2",children:[((E=s==null?void 0:s.data)==null?void 0:E.verify_status)==0&&e.jsx("h1",{className:"bg-amber-200 text-center  w-28 text-xs rounded-full text-amber-800 shadow-md",children:"Pending"}),((H=s==null?void 0:s.data)==null?void 0:H.verify_status)==1&&e.jsx("h1",{className:"bg-green-200 text-center w-28 text-xs rounded-full text-green-800 shadow-md",children:"Verified"}),((L=s==null?void 0:s.data)==null?void 0:L.verify_status)==2&&e.jsx("h1",{className:"bg-red-200 text-center w-28 text-xs rounded-full text-red-800 shadow-md ",children:"Rejected"})]})})}),e.jsx("div",{className:"px-1",children:e.jsx("div",{className:"flex items-center justify-center font-semibold text-sm mt-2",children:((B=s==null?void 0:s.data)==null?void 0:B.verify_status)==2?e.jsx("div",{className:"form-group col-span-4 md:col-span-1 md:px-0",children:(t==null?void 0:t.image)==null||(t==null?void 0:t.image)==null||(t==null?void 0:t.image)==""?e.jsx("button",{type:"submit",className:"py-0 px-2 text-[0.7rem] inline-block text-center  rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:e.jsx("span",{className:"text-xs",children:"upload"})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-xs text-teal-500 font-bold font-BreeSerif",children:" Uploaded..."}),e.jsx("button",{type:"submit",className:"py-0 px-2 text-[0.7rem] inline-block text-center  rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:e.jsx("span",{className:"text-xs",children:"re-upload"})})]})}):e.jsx("button",{type:"submit",className:"py-0 px-2 text-[0.7rem] inline-block text-center  rounded leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white focus:outline-none focus:ring-0",disabled:!0,children:e.jsx("span",{className:"text-xs",children:"uploaded"})})})})]})}),e.jsx(V,{isOpen:G,onAfterOpen:X,onRequestClose:W,style:ae,contentLabel:"Example Modal",children:e.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0",style:{width:"40vw",height:"80vh"},children:e.jsx("iframe",{className:"w-full h-full",src:l,frameborder:"1",children:e.jsx("img",{className:"",src:l})})})})]})}function de(s){const{api_getHoardingReuploadDoc:a}=z(),[c,t]=o.useState();o.useEffect(()=>{r()},[]);const r=()=>{const l={applicationId:s==null?void 0:s.data};q.post(`${a}`,l,Y()).then(function(i){console.log("re-uploaded document list",i.data.data),t(i.data.data)}).catch(function(i){console.log("errorrr.... ",i)})};return console.log("application id",s.data),console.log("workflow id 1",s.workflowId),e.jsx(e.Fragment,{children:e.jsx("div",{className:" top-4 ml-4 ",children:e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pb-8 p-2 mt-12",children:[e.jsx("div",{className:"col-span-12",children:e.jsx("h1",{className:"text-xl",children:"Upload Rejected Document"})}),e.jsx("div",{className:"col-span-12 border border-dashed border-violet-800 ",children:e.jsxs("div",{className:"p-1",children:[e.jsxs("div",{class:"grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1 p-1 bg-white",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-left  text-lg ml-12 text-gray-600 font-sans font-semibold ",children:"Document"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-center text-lg ml-4 text-gray-600 font-sans font-semibold",children:"Preview"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-center text-lg ml-4 text-gray-600 font-sans font-semibold",children:"Upload"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-center text-lg ml-4 text-gray-600 font-sans font-semibold",children:"Status"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-center text-lg ml-4 text-gray-600 font-sans font-semibold",children:"Action"})})]}),e.jsx("div",{className:"mt-2",children:c==null?void 0:c.map((l,i)=>e.jsx(le,{data:l,mykey:i}))})]})})]})})})}export{de as R};
