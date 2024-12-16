import{R as _,j as s,n as c,i as u,a1 as k,r as l,u as y,A,b as S,B as F,S as P,L as T,ad as L,c as M,P as R}from"./index-4f037684.js";import{s as B}from"./swachhBharat-9ce9fd2e.js";import{P as C}from"./PrintButton-489eb227.js";const q="/assets/signature-3608f068.png";class E extends _.Component{render(){var b,p,d,h,j,m,x;const e=(b=this.props)==null?void 0:b.famDetails;let n=(d=(p=this==null?void 0:this.props)==null?void 0:p.famDetails)==null?void 0:d.ulbDetails;const v=[`कर निर्धारण की सूची, ${n==null?void 0:n.website} पर प्रदर्शित है।`,"नियमावली कंडिका 11.4 के आलोक में वर्षाजल संरक्षण की व्यवस्था नहीं होने के कारण अतिरिक्त गृह कर लगाया जायेगा जो सम्पति कर का 50% होगा । हिदायत दी जाती है कि, वर्षाजल संरक्षण संरचना लगा कर निगम को सूचित करे तथा अतिरिक्त गृह कर से राहत पायें ।","प्रत्येक वित्तीय वर्ष में सम्पति कर का भुगतान त्रैमासिक देय होगा ।","किसी देय घृति को निर्दिष्ट समयावधि (प्रत्येक तिमाही) के अन्दर या उसके पूर्व नहीं चुकाया जाता है, तो 1% प्रतिमाह की दर से साधारण ब्याज देय होगा।",`${n==null?void 0:n.ulb_name} द्वारा संग्रहित इस सम्पति कर इन इमरतों/तोंढांचों को कोई कानूनी हैसियत प्रदान नहीं करता है और/या न ही अपने मालिकों /कों दखलकार को कोई कानूनी अधिकार प्रदान करता है। `].map((r,t)=>s.jsxs("li",{children:[s.jsxs("span",{children:[t+1,". "]}),s.jsx("span",{children:r})]}));let o;return(e==null?void 0:e.pt_no)==""||(e==null?void 0:e.pt_no)==null?o=(h=e==null?void 0:e.holding_no)==null?void 0:h.split(""):o=(j=e==null?void 0:e.pt_no)==null?void 0:j.split(""),o==null||o.map(r=>s.jsx("div",{className:"px-2 py-1 border-2 border-black text-xs",children:r})),s.jsxs(s.Fragment,{children:[s.jsx(C,{}),s.jsx("div",{className:"flex items-center justify-center text-black print:border-2 print:border-dashed print:border-black print:w-[97vw]",id:"printableArea",children:s.jsxs("div",{className:"container w-[70%] print:border-none border-2 border-dashed border-black m-2 overflow-x-hidden  py-4 px-3",children:[s.jsx("img",{src:n==null?void 0:n.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[27%] h-[40vh] backImage opacity-10"}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4",children:[s.jsx("img",{src:n==null?void 0:n.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),s.jsx("span",{className:"text-3xl font-bold uppercase",children:n==null?void 0:n.ulb_name})]}),s.jsx("div",{className:"w-full flex justify-center mt-2",children:s.jsx("div",{className:"grid grid-cols-6 w-max",children:s.jsx("div",{className:"col-span-6 uppercase border-2 font-bold border-black px-8 py-1 text-md",children:"Final Assessment Memo"})})})]}),s.jsxs("div",{children:[s.jsx("hr",{className:"border-black mt-6 mb-2"}),s.jsx("div",{className:"font-semibold text-xs",children:"नगरपालिका अधिनियम-2011 की धारा 152 (3) के अन्तर्गत स्वनिर्धारित किये गये संम्पती कर की सूचना।"}),s.jsx("hr",{className:"border-black mb-6 mt-2"})]}),s.jsxs("div",{className:"flex justify-between mt-4 font-semibold gap-2",children:[s.jsxs("div",{className:"text-start text-xs w-[65%]",children:["Mr/Mrs/Ms: ",s.jsxs("span",{className:"font-normal text-xs",children:[c(e==null?void 0:e.owner_name)," ",c(e==null?void 0:e.relation_type)," ",c(e==null?void 0:e.guardian_name)]})," ",s.jsx("br",{}),"Address: ",s.jsx("span",{className:"font-normal text-xs",children:c(e==null?void 0:e.prop_address)})]}),s.jsxs("div",{className:"text-left text-xs w-[35%]",children:["Memo No.: ",s.jsx("span",{className:"font-normal",children:c(e==null?void 0:e.memo_no)})," ",s.jsx("br",{}),"Date: ",s.jsx("span",{className:"font-normal",children:c(e==null?void 0:e.memo_date)})," ",s.jsx("br",{}),"Effective: ",s.jsxs("span",{className:"font-normal",children:[(e==null?void 0:e.from_qtr)==1&&s.jsx(s.Fragment,{children:"First"}),(e==null?void 0:e.from_qtr)==2&&s.jsx(s.Fragment,{children:"Second"}),(e==null?void 0:e.from_qtr)==3&&s.jsx(s.Fragment,{children:"Third"}),(e==null?void 0:e.from_qtr)==4&&s.jsx(s.Fragment,{children:"Fourth"})," Quarter ",c(e==null?void 0:e.from_fyear)]})," ",s.jsx("br",{})]})]}),s.jsx("div",{className:"text-xs mt-2",children:s.jsxs("p",{children:["एतद् द्वारा आपको सूचित किया जाता है कि आपका नया गृह सं॰ - ",s.jsx("span",{className:"font-semibold",children:(e==null?void 0:e.pt_no)==""||(e==null?void 0:e.pt_no)==null?e==null?void 0:e.holding_no:e==null?void 0:e.pt_no})," वार्ड सं॰ ",s.jsx("span",{className:"font-semibold",children:c(e==null?void 0:e.ward_no)})," हुआ है, आपके स्व॰ निर्धारण घोषणा पत्र के आधार पर वार्षिक किराया मूल्य ",s.jsx("span",{className:"font-semibold",children:u(e==null?void 0:e.arv)}),"/- निर्धारित किया गया है । इसके अनुसार प्रति तिमाही कर निम्न प्रकार होगा।"]})}),((m=e==null?void 0:e.taxTable)==null?void 0:m.length)>0&&s.jsxs("table",{className:"text-xs font-semibold w-full mt-1",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"border-2 border-black px-1 w-[3%]",children:"S.No."}),s.jsx("td",{className:"border-2 border-black px-1 w-auto",children:"Particulars"}),s.jsx("td",{className:"border-2 border-black px-1 w-[16%]",children:"Quarter/Financial Year"}),s.jsx("td",{className:"border-2 border-black px-1 w-[16%]",children:"Based on the Self Assessment"}),s.jsx("td",{className:"border-2 border-black px-1 w-[16%]",children:"On the basis of ULB Calculation"}),s.jsx("td",{className:"border-2 border-black px-1 w-[9%]",children:"Difference Amount "})]}),(x=e==null?void 0:e.taxTable)==null?void 0:x.map((r,t)=>{var i,a,w,f;return s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[t!=((i=e==null?void 0:e.taxTable)==null?void 0:i.length)-1&&s.jsx("td",{className:"border-2 border-black px-1",children:t+1}),s.jsx("td",{colSpan:t==((a=e==null?void 0:e.taxTable)==null?void 0:a.length)-1&&3,className:`${t==((w=e==null?void 0:e.taxTable)==null?void 0:w.length)-1&&"text-end"} border-2 border-black px-1`,children:c(r==null?void 0:r.Particulars)}),t!=((f=e==null?void 0:e.taxTable)==null?void 0:f.length)-1&&s.jsx("td",{className:"border-2 border-black px-1",children:c(r==null?void 0:r.quarterFinancialYear)}),s.jsx("td",{className:"border-2 border-black px-1",children:u(r==null?void 0:r.basedOnSelfAssess)}),s.jsx("td",{className:"border-2 border-black px-1",children:u(r==null?void 0:r.basedOnUlbCalc)}),s.jsx("td",{className:"border-2 border-black px-1",children:u(r==null?void 0:r.diffAmt)})]})})})]}),s.jsxs("div",{className:"mt-4 w-full flex flex-row justify-between items-end",children:[s.jsx("div",{children:s.jsx(k,{size:"70",url:window.location.href})}),s.jsxs("div",{className:"flex flex-col justify-end items-center",children:[s.jsx("img",{src:q,alt:"",srcset:"",className:"w-[15vw]"}),s.jsx("p",{className:"text-md font-semibold",children:"Deputy Municipal Commissioner"}),s.jsxs("p",{className:"text-xs",children:[n==null?void 0:n.ulb_name,", ",n==null?void 0:n.state]})]})]}),s.jsxs("div",{className:"text-xs mt-4 ",children:[s.jsx("div",{className:"font-semibold my-2",children:"Note:-"}),s.jsx("ol",{className:"w-full flex flex-col gap-x-2 pl-10",children:v})]}),s.jsx("div",{className:"flex justify-center items-center mt-6",children:s.jsx("img",{src:B,alt:"",className:"h-10 opacity-70"})})]})})]})}}const U=()=>{const N=l.useRef(),e=y(),{api_samReciept:n}=R(),[g,v]=l.useState(!1),[o,b]=l.useState(),[p,d]=l.useState(!1),[h,j]=l.useState(""),[m,x]=l.useState(!1);return l.useEffect(()=>{d(!1),x(!0),A.post(n,{memoId:e==null?void 0:e.id},S()).then(r=>{var t,i,a;x(!1),(t=r==null?void 0:r.data)!=null&&t.status?b((i=r==null?void 0:r.data)==null?void 0:i.data):(d(!0),j((a=r==null?void 0:r.data)==null?void 0:a.message))}).catch(r=>{x(!1),d(!0)})},[]),m?s.jsx(s.Fragment,{children:s.jsx(F,{})}):p?s.jsx(P,{title:"Memo not Available",desc:h,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):s.jsxs("div",{children:[g&&s.jsx(T,{}),s.jsx(L,{position:"top-right",autoClose:2e3}),s.jsx(M,{trigger:()=>s.jsx("button",{}),content:()=>N.current}),s.jsx(E,{ref:N,famDetails:o})]})};export{U as default};
