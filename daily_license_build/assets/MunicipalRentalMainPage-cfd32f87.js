var J=Object.defineProperty;var V=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var A=(t,e,n)=>(V(t,typeof e!="symbol"?e+"":e,n),n);import{u as G,r as W,M as Q,j as r}from"./index-33b98be8.js";import"./MobileHeader-c4e8f405.js";import"./index-49062fd3.js";import"./index-387d7a00.js";import"./react-tooltip.min-b443648d.js";var b={exports:{}};const X="https://translate.google.",P={from:"auto",to:"en",autoCorrect:!1,tld:"com",requestFunction(t,e){return fetch(t,e)},requestOptions:{credentials:"omit",headers:{}},fallbackBatch:!0,forceBatch:!0,forceFrom:!1,forceTo:!1,rejectOnPartialFail:!0};Object.freeze(P.requestOptions);Object.freeze(P);var k={DEFAULT_OPTIONS:P,TRANSLATE_PATH:X},I=class{constructor(e){A(this,"text","");A(this,"pronunciation");A(this,"from",{language:{didYouMean:void 0,iso:""},text:{autoCorrected:void 0,value:"",didYouMean:void 0}});A(this,"raw");this.raw=e}};const S={auto:"Automatic",auto:"Detect language",af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",as:"Assamese",ay:"Aymara",az:"Azerbaijani",bm:"Bambara",eu:"Basque",be:"Belarusian",bn:"Bengali",bho:"Bhojpuri",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano",ny:"Chichewa","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",dv:"Dhivehi",doi:"Dogri",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",ee:"Ewe",tl:"Filipino",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gn:"Guarani",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",iw:"Hebrew",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",ilo:"Ilocano",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",rw:"Kinyarwanda",gom:"Konkani",ko:"Korean",kri:"Krio",ku:"Kurdish (Kurmanji)",ckb:"Kurdish (Sorani)",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",ln:"Lingala",lt:"Lithuanian",lg:"Luganda",lb:"Luxembourgish",mk:"Macedonian",mai:"Maithili",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi","mni-Mtei":"Meiteilon (Manipuri)",lus:"Mizo",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",or:"Odia (Oriya)",om:"Oromo",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",qu:"Quechua",ro:"Romanian",ru:"Russian",sm:"Samoan",sa:"Sanskrit",gd:"Scots Gaelic",nso:"Sepedi",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tg:"Tajik",ta:"Tamil",tt:"Tatar",te:"Telugu",th:"Thai",ti:"Tigrinya",ts:"Tsonga",tr:"Turkish",tk:"Turkmen",ak:"Twi",uk:"Ukrainian",ur:"Urdu",ug:"Uyghur",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"};function U(t){var n;return typeof t!="string"?null:S[t]?t:(n=Object.keys(S).filter(function(w){return typeof S[w]!="string"?!1:S[w].toLowerCase()===t.toLowerCase()})[0])!=null?n:null}function Z(t){return U(t)!==null}var O={langs:S,isSupported:Z,getCode:U};const{DEFAULT_OPTIONS:F,TRANSLATE_PATH:ee}=k,C=I,{getCode:q}=O;var D=function(t,e){var f,j,o,x,p,m;e={...F,...e};const n="MkEWBc",w=new URLSearchParams({rpcids:n,"source-path":"/","f.sid":"",bl:"",hl:"en-US","soc-app":1,"soc-platform":1,"soc-device":1,_reqid:Math.floor(1e3+Math.random()*9e3),rt:"c"}),g=ee+e.tld+"/_/TranslateWebserverUi/data/batchexecute?"+w.toString(),h={...e.requestOptions,...F.requestOptions};h.method="POST",h.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";const l=Array.isArray(t)?t:typeof t=="object"?Object.values(t):[t];let c=Array.isArray(t)?[]:typeof t=="object"?{}:void 0;const u=[];for(let a=0;a<l.length;a++){const d=(f=l[a].text)!=null?f:l[a],s=(j=l[a].forceFrom)!=null?j:e.forceFrom,y=(o=l[a].from)!=null?o:e.from,i=s?y:q(y);if(i===null)return new Promise(()=>{throw new Error("From language ".concat(y," unsupported, bypass this with setting forceFrom to true if you're certain the iso is correct"),{cause:{options:{from:y}}})});const T=(x=l[a].forceTo)!=null?x:e.forceTo,N=(p=l[a].to)!=null?p:e.to,E=T?N:q(N);if(E===null)return new Promise(()=>{throw new Error("To language ".concat(N," unsupported, bypass this with setting forceTo to true if you're certain the iso is correct"),{cause:{options:{to:N}}})});const Y=(m=l[a].autoCorrect)!=null?m:e.autoCorrect;if(d.length===0){const v=new C(d);v.text=d,v.from=i,v.to=E,Array.isArray(t)?c[a]=v:typeof t=="object"?c[Object.keys(t)[a]]=v:c=v;continue}const K=[n,JSON.stringify([[d,i,E,Y],[null]]),null,a.toString(36)];u.push(K)}return u.length===0?new Promise(a=>{a(c)}):(h.body="f.req="+encodeURIComponent(JSON.stringify([u]))+"&",e.requestFunction(g,h).then(async a=>{if(!a.ok)throw new Error(a.statusText,{cause:{options:e,url:g,response:a}});a=await a.text(),a=a.slice(6);for(let d of a.split("\n"))if(!(d[0]!=="["||d[3]==="e")){d=JSON.parse(d);for(let s of d){if(s[0]!=="wrb.fr")continue;const y=parseInt(s[s.length-1],36);if(s[2]===null){if(!e.rejectOnPartialFail){Array.isArray(t)?c[y]=null:typeof t=="object"?c[Object.keys(t)[y]]=null:c=null;continue}throw new Error("Partial Translation Request Fail: at least one translation failed, it was either invalid or more likely- rejected by the server.  You can try the request again and if it persists try a proxy, spacing out requests, and/or using a different tld.  If you would like to translate other requests in a batch translation even if one fails(the failed translation will be set to `null`) pass the option `rejectOnPartialFail: false`.  You can also try using the singleTranslate endpoint with: `forceBatch: false`",{cause:{input:t,url:g,options:e,requestOptions:h}})}s=JSON.parse(s[2]);const i=new C(s);if(s[1][0][0][5]===void 0||s[1][0][0][5]===null?i.text=s[1][0][0][0]:i.text=s[1][0][0][5].map(function(T){return T[0]}).filter(Boolean).join(" "),i.pronunciation=s[1][0][0][1],i.from.language.didYouMean=!0,s[0]&&s[0][1]&&s[0][1][1]?(i.from.language.didYouMean=!0,i.from.language.iso=s[0][1][1][0]):s[1][3]==="auto"?i.from.language.iso=s[2]:i.from.language.iso=s[1][3],i.from.text.autoCorrected=!1,i.from.text.didYouMean=!1,s[0]&&s[0][1]&&s[0][1][0]){let T=s[0][1][0][0][1];T=T.replace(/<b>(<i>)?/g,"["),T=T.replace(/(<\/i>)?<\/b>/g,"]"),i.from.text.value=T,s[0][1][0][2]===1?i.from.text.autoCorrected=!0:i.from.text.didYouMean=!0}Array.isArray(t)?c[y]=i:typeof t=="object"?c[Object.keys(t)[y]]=i:c=i}}return c}))};const{DEFAULT_OPTIONS:M,TRANSLATE_PATH:te}=k,B=I,{getCode:L}=O;var _=function(t,e){var c;e={...M,...e,...t.options};const n={...M.requestOptions,...e.requestOptions};n.method="POST",n.headers["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8";const w=e.forceFrom?e.from:L(e.from);if(w===null)return new Promise(()=>{throw new Error("From language ".concat(e.from," unsupported, bypass this with setting forceFrom to true if you're certain the iso is correct"),{cause:{options:e}})});const g=e.forceTo?e.to:L(e.to);if(g===null)return new Promise(()=>{throw new Error("To language ".concat(e.to," unsupported, bypass this with setting forceTo to true if you're certain the iso is correct"),{cause:{options:e}})});const h={sl:w,tl:g,q:(c=t.text)!=null?c:t};if(h.q.length===0)return new Promise(u=>{const f=new B(h.q);f.from=w,f.to=g,u(f)});n.body=new URLSearchParams(h).toString();const l=te+e.tld+"/translate_a/single?client=at&dt=t&dt=rm&dj=1";return e.requestFunction(l,n).then(u=>{if(u.ok)return u.json();throw new Error(u.statusText,{cause:{options:e,url:l,response:u}})}).then(u=>{var j;const f=new B(u);f.from=(j=u.src)!=null?j:e.from,f.to=e.to;for(const o of u.sentences)typeof o.trans<"u"?f.text+=o.trans:typeof o.translit<"u"&&(f.pronunciation=o.translit);return f})};const{DEFAULT_OPTIONS:re}=k,R=D,ae=_;var H=function(t,e){return e={...re,...e},typeof t=="string"&&!e.forceBatch?ae(t,e).catch(n=>{if(e.fallbackBatch)return R(t,e);throw n}):R(t,e)};const{DEFAULT_OPTIONS:se}=k,ne=H;var oe=class{constructor(e){A(this,"options");this.options={...se,...e}}translate(e,n){return n={...this.options,...n},ne(e,n)}};const{DEFAULT_OPTIONS:$,TRANSLATE_PATH:ie}=k,{getCode:le}=O;var ce=function(t,e){var u,f,j;e={...$,...e};const n="jQ1olc",w=new URLSearchParams({rpcids:n,"source-path":"/","f.sid":"",bl:"",hl:"en-US","soc-app":1,"soc-platform":1,"soc-device":1,_reqid:Math.floor(1e3+Math.random()*9e3),rt:"c"}),g=ie+e.tld+"/_/TranslateWebserverUi/data/batchexecute?"+w.toString(),h={...e.requestOptions,...$.requestOptions};h.method="POST",h.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";const l=Array.isArray(t)?t:typeof t=="object"?Object.values(t):[t],c=[];for(let o=0;o<l.length;o++){const x=(u=l[o].text)!=null?u:l[o];if(x.length>200)return new Promise(()=>{throw new Error("At least one of the inputs exceeded 200 characters, which is rejected by Google translate.  You should split it into a batch input with arrays/objects.",{cause:{input:{text:x}}})});const p=(f=l[o].forceTo)!=null?f:e.forceTo,m=(j=l[o].to)!=null?j:e.to,a=p?m:le(m);if(a===null)return new Promise(()=>{throw new Error("To language ".concat(m," unsupported, bypass this with setting forceTo to true if you're certain the iso is correct"),{cause:{options:{to:m}}})});const d=[n,JSON.stringify([x,a,!0]),null,o.toString(36)];c.push(d)}return h.body="f.req="+encodeURIComponent(JSON.stringify([c]))+"&",e.requestFunction(g,h).then(async o=>{if(!o.ok)throw new Error(o.statusText,{cause:{options:e,url:g,response:o}});o=await o.text(),o=o.slice(6);let x=Array.isArray(t)?[]:typeof t=="object"?{}:void 0;for(let p of o.split("\n"))if(!(p[0]!=="["||p[3]==="e")){p=JSON.parse(p);for(let m of p){if(m[0]!=="wrb.fr")continue;const a=parseInt(m[m.length-1],36);if(m[2]===null&&e.rejectOnPartialFail)throw new Error("Partial TTS Request Fail: at least one TTS request failed, it was either invalid or more likely- rejected by the server.  You can try the request again and if it persists try a proxy, spacing out requests, and/or using a different tld.  If you would like to still speak other requests in a batch speak request even if one fails(the failed TTS will be set to `null`) pass the option `rejectOnPartialFail: false`",{cause:{input:t,url:g,options:e,requestOptions:h}});const d=m[2]!==null?JSON.parse(m[2])[0]:null;Array.isArray(t)?x[a]=d:typeof t=="object"?x[Object.keys(t)[a]]=d:x=d}}return x})};const z=H,ue=oe,de=_,he=D,{langs:fe,isSupported:me,getCode:ge}=O,xe=ce;b.exports=z;b.exports.translate=z;b.exports.Translator=ue;b.exports.singleTranslate=de;b.exports.batchTranslate=he;b.exports.languages=fe;b.exports.isSupported=me;b.exports.getCode=ge;b.exports.speak=xe;function Se(){const t=G();return W.useContext(Q),r.jsx(r.Fragment,{children:r.jsx("div",{className:"h-screen bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:r.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[r.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px]  opacity-90",children:r.jsxs("div",{className:"p-4 pt-12",children:[r.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Municipal Rental"}),r.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Secure Your Space, Municipal Rentals Now Available."})]})}),r.jsxs("div",{className:"p-4",children:[r.jsx("h1",{className:"text-gray-600 text-sm mb-1",children:"Payment"}),r.jsx("div",{className:"border-b"}),r.jsx("div",{className:" md:p-2 flex justify-center items-center overflow-hidden ",children:r.jsxs("div",{className:"grid grid-cols-4 container mx-auto gap-2 p-2",children:[r.jsxs("div",{className:"col-span-2 bg-[#EDEDF4] text-white p-3 rounded-lg shadow-lg",onClick:()=>t("/shopList"),children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-10 h-10 p-1 text-[#B1ABE6] rounded-full border border-[#B1ABE6] mx-auto",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"})}),r.jsx("h1",{className:"text-gray-600 text-xs mt-2 text-center capitalize",children:"Pay shop rent"})]}),r.jsxs("div",{className:"col-span-2 bg-[#EDEDF4] text-white p-3 rounded-lg shadow-lg",onClick:()=>t("/tollList"),children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-10 h-10 p-1 text-[#B1ABE6] rounded-full border border-[#B1ABE6] mx-auto",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"})}),r.jsx("h1",{className:"text-gray-600 text-xs mt-2 text-center capitalize",children:"Pay toll rent"})]})]})})]}),r.jsxs("div",{className:"p-4",children:[r.jsx("h1",{className:"text-gray-600 text-sm mb-1",children:"Add"}),r.jsx("div",{className:"border-b"}),r.jsx("div",{className:" md:p-2 flex justify-center items-center  overflow-hidden ",children:r.jsx("div",{className:"grid grid-cols-2 container mx-auto gap-2 ",children:r.jsx("div",{className:"col-span-2",children:r.jsx("div",{className:" md:p-2 flex justify-center items-center  overflow-hidden ",children:r.jsx("div",{class:"p-2 sm:w-full lg:w-full w-full hover:scale-105 duration-500",onClick:()=>t("/add-toll"),children:r.jsxs("div",{class:" flex items-center  justify-between p-6  rounded-lg bg-[#EDEDF4] shadow-[#F2F2F2] shadow-md",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-gray-600 text-lg  ",children:"Add Toll"}),r.jsx("h1",{className:"text-gray-400 text-xs mt-1 ",children:"Rent a toll booth and secure your spot on the road "})]}),r.jsx("div",{class:"border border-[#B1ABE6] w-10 h-10 px-2 ml-2 rounded-full shadow-lg shadow-[#c6bdf9]  flex justify-center items-center ",children:r.jsx("div",{children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-10 h-10 text-[#B1ABE6]",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})})]})})})})})})]}),r.jsxs("div",{className:"p-4",children:[r.jsx("h1",{className:"text-gray-600 text-sm mb-1",children:"Collection Report"}),r.jsx("div",{className:"border-b"}),r.jsx("div",{className:" md:p-2 flex justify-center items-center  overflow-hidden ",children:r.jsx("div",{className:"grid grid-cols-2 container mx-auto gap-2 ",children:r.jsx("div",{className:"col-span-2",children:r.jsx("div",{className:" md:p-3 flex justify-center items-center  overflow-hidden ",children:r.jsx("div",{class:"p-2 sm:w-full lg:w-full w-full hover:scale-105 duration-500",onClick:()=>t("/tc-collection"),children:r.jsxs("div",{class:" flex items-center  justify-between p-5 px-4  rounded-lg bg-[#EDEDF4] shadow-[#F2F2F2] shadow-md",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-gray-600 text-sm",children:"Collection Report"}),r.jsx("button",{className:"text-xs bg-[#5846BE] text-white px-4 mt-3 rounded leading-5 ",children:"view"})]}),r.jsx("div",{class:"",children:r.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/3592/3592606.png",className:"h-10 float-right opacity-80"})})]})})})})})})]})]})})})}export{Se as default};
