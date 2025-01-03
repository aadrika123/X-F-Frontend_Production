import{b as Y,f as V,j as r,Q as B}from"./index-tJbU7ayB.js";import{d as M,u as G}from"./router-vSHQYlWC.js";import{P as K}from"./index-6o85-u81.js";import"./moment-UBOc2Xni.js";import{r as O}from"./tailwind-nPCoKmcy.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";var X=Object.defineProperty,_=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,p=(a,i,h)=>i in a?X(a,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[i]=h,Z=(a,i)=>{for(var h in i||(i={}))H.call(i,h)&&p(a,h,i[h]);if(_)for(var h of _(i))Q.call(i,h)&&p(a,h,i[h]);return a},J=(a,i)=>{var h={};for(var n in a)H.call(a,n)&&i.indexOf(n)<0&&(h[n]=a[n]);if(a!=null&&_)for(var n of _(a))i.indexOf(n)<0&&Q.call(a,n)&&(h[n]=a[n]);return h};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var C;(a=>{const i=class{constructor(s,l,o,t){if(this.version=s,this.errorCorrectionLevel=l,this.modules=[],this.isFunction=[],s<i.MIN_VERSION||s>i.MAX_VERSION)throw new RangeError("Version value out of range");if(t<-1||t>7)throw new RangeError("Mask value out of range");this.size=s*4+17;let d=[];for(let c=0;c<this.size;c++)d.push(!1);for(let c=0;c<this.size;c++)this.modules.push(d.slice()),this.isFunction.push(d.slice());this.drawFunctionPatterns();const b=this.addEccAndInterleave(o);if(this.drawCodewords(b),t==-1){let c=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const f=this.getPenaltyScore();f<c&&(t=x,c=f),this.applyMask(x)}}u(0<=t&&t<=7),this.mask=t,this.applyMask(t),this.drawFormatBits(t),this.isFunction=[]}static encodeText(s,l){const o=a.QrSegment.makeSegments(s);return i.encodeSegments(o,l)}static encodeBinary(s,l){const o=a.QrSegment.makeBytes(s);return i.encodeSegments([o],l)}static encodeSegments(s,l,o=1,t=40,d=-1,b=!0){if(!(i.MIN_VERSION<=o&&o<=t&&t<=i.MAX_VERSION)||d<-1||d>7)throw new RangeError("Invalid value");let c,x;for(c=o;;c++){const m=i.getNumDataCodewords(c,l)*8,g=j.getTotalBits(s,c);if(g<=m){x=g;break}if(c>=t)throw new RangeError("Data too long")}for(const m of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])b&&x<=i.getNumDataCodewords(c,m)*8&&(l=m);let f=[];for(const m of s){n(m.mode.modeBits,4,f),n(m.numChars,m.mode.numCharCountBits(c),f);for(const g of m.getData())f.push(g)}u(f.length==x);const E=i.getNumDataCodewords(c,l)*8;u(f.length<=E),n(0,Math.min(4,E-f.length),f),n(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let m=236;f.length<E;m^=253)n(m,8,f);let A=[];for(;A.length*8<f.length;)A.push(0);return f.forEach((m,g)=>A[g>>>3]|=m<<7-(g&7)),new i(c,l,A,d)}getModule(s,l){return 0<=s&&s<this.size&&0<=l&&l<this.size&&this.modules[l][s]}getModules(){return this.modules}drawFunctionPatterns(){for(let o=0;o<this.size;o++)this.setFunctionModule(6,o,o%2==0),this.setFunctionModule(o,6,o%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const s=this.getAlignmentPatternPositions(),l=s.length;for(let o=0;o<l;o++)for(let t=0;t<l;t++)o==0&&t==0||o==0&&t==l-1||o==l-1&&t==0||this.drawAlignmentPattern(s[o],s[t]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(s){const l=this.errorCorrectionLevel.formatBits<<3|s;let o=l;for(let d=0;d<10;d++)o=o<<1^(o>>>9)*1335;const t=(l<<10|o)^21522;u(t>>>15==0);for(let d=0;d<=5;d++)this.setFunctionModule(8,d,e(t,d));this.setFunctionModule(8,7,e(t,6)),this.setFunctionModule(8,8,e(t,7)),this.setFunctionModule(7,8,e(t,8));for(let d=9;d<15;d++)this.setFunctionModule(14-d,8,e(t,d));for(let d=0;d<8;d++)this.setFunctionModule(this.size-1-d,8,e(t,d));for(let d=8;d<15;d++)this.setFunctionModule(8,this.size-15+d,e(t,d));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let s=this.version;for(let o=0;o<12;o++)s=s<<1^(s>>>11)*7973;const l=this.version<<12|s;u(l>>>18==0);for(let o=0;o<18;o++){const t=e(l,o),d=this.size-11+o%3,b=Math.floor(o/3);this.setFunctionModule(d,b,t),this.setFunctionModule(b,d,t)}}drawFinderPattern(s,l){for(let o=-4;o<=4;o++)for(let t=-4;t<=4;t++){const d=Math.max(Math.abs(t),Math.abs(o)),b=s+t,c=l+o;0<=b&&b<this.size&&0<=c&&c<this.size&&this.setFunctionModule(b,c,d!=2&&d!=4)}}drawAlignmentPattern(s,l){for(let o=-2;o<=2;o++)for(let t=-2;t<=2;t++)this.setFunctionModule(s+t,l+o,Math.max(Math.abs(t),Math.abs(o))!=1)}setFunctionModule(s,l,o){this.modules[l][s]=o,this.isFunction[l][s]=!0}addEccAndInterleave(s){const l=this.version,o=this.errorCorrectionLevel;if(s.length!=i.getNumDataCodewords(l,o))throw new RangeError("Invalid argument");const t=i.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][l],d=i.ECC_CODEWORDS_PER_BLOCK[o.ordinal][l],b=Math.floor(i.getNumRawDataModules(l)/8),c=t-b%t,x=Math.floor(b/t);let f=[];const E=i.reedSolomonComputeDivisor(d);for(let m=0,g=0;m<t;m++){let k=s.slice(g,g+x-d+(m<c?0:1));g+=k.length;const P=i.reedSolomonComputeRemainder(k,E);m<c&&k.push(0),f.push(k.concat(P))}let A=[];for(let m=0;m<f[0].length;m++)f.forEach((g,k)=>{(m!=x-d||k>=c)&&A.push(g[m])});return u(A.length==b),A}drawCodewords(s){if(s.length!=Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let l=0;for(let o=this.size-1;o>=1;o-=2){o==6&&(o=5);for(let t=0;t<this.size;t++)for(let d=0;d<2;d++){const b=o-d,x=(o+1&2)==0?this.size-1-t:t;!this.isFunction[x][b]&&l<s.length*8&&(this.modules[x][b]=e(s[l>>>3],7-(l&7)),l++)}}u(l==s.length*8)}applyMask(s){if(s<0||s>7)throw new RangeError("Mask value out of range");for(let l=0;l<this.size;l++)for(let o=0;o<this.size;o++){let t;switch(s){case 0:t=(o+l)%2==0;break;case 1:t=l%2==0;break;case 2:t=o%3==0;break;case 3:t=(o+l)%3==0;break;case 4:t=(Math.floor(o/3)+Math.floor(l/2))%2==0;break;case 5:t=o*l%2+o*l%3==0;break;case 6:t=(o*l%2+o*l%3)%2==0;break;case 7:t=((o+l)%2+o*l%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[l][o]&&t&&(this.modules[l][o]=!this.modules[l][o])}}getPenaltyScore(){let s=0;for(let d=0;d<this.size;d++){let b=!1,c=0,x=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[d][f]==b?(c++,c==5?s+=i.PENALTY_N1:c>5&&s++):(this.finderPenaltyAddHistory(c,x),b||(s+=this.finderPenaltyCountPatterns(x)*i.PENALTY_N3),b=this.modules[d][f],c=1);s+=this.finderPenaltyTerminateAndCount(b,c,x)*i.PENALTY_N3}for(let d=0;d<this.size;d++){let b=!1,c=0,x=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][d]==b?(c++,c==5?s+=i.PENALTY_N1:c>5&&s++):(this.finderPenaltyAddHistory(c,x),b||(s+=this.finderPenaltyCountPatterns(x)*i.PENALTY_N3),b=this.modules[f][d],c=1);s+=this.finderPenaltyTerminateAndCount(b,c,x)*i.PENALTY_N3}for(let d=0;d<this.size-1;d++)for(let b=0;b<this.size-1;b++){const c=this.modules[d][b];c==this.modules[d][b+1]&&c==this.modules[d+1][b]&&c==this.modules[d+1][b+1]&&(s+=i.PENALTY_N2)}let l=0;for(const d of this.modules)l=d.reduce((b,c)=>b+(c?1:0),l);const o=this.size*this.size,t=Math.ceil(Math.abs(l*20-o*10)/o)-1;return u(0<=t&&t<=9),s+=t*i.PENALTY_N4,u(0<=s&&s<=2568888),s}getAlignmentPatternPositions(){if(this.version==1)return[];{const s=Math.floor(this.version/7)+2,l=this.version==32?26:Math.ceil((this.version*4+4)/(s*2-2))*2;let o=[6];for(let t=this.size-7;o.length<s;t-=l)o.splice(1,0,t);return o}}static getNumRawDataModules(s){if(s<i.MIN_VERSION||s>i.MAX_VERSION)throw new RangeError("Version number out of range");let l=(16*s+128)*s+64;if(s>=2){const o=Math.floor(s/7)+2;l-=(25*o-10)*o-55,s>=7&&(l-=36)}return u(208<=l&&l<=29648),l}static getNumDataCodewords(s,l){return Math.floor(i.getNumRawDataModules(s)/8)-i.ECC_CODEWORDS_PER_BLOCK[l.ordinal][s]*i.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][s]}static reedSolomonComputeDivisor(s){if(s<1||s>255)throw new RangeError("Degree out of range");let l=[];for(let t=0;t<s-1;t++)l.push(0);l.push(1);let o=1;for(let t=0;t<s;t++){for(let d=0;d<l.length;d++)l[d]=i.reedSolomonMultiply(l[d],o),d+1<l.length&&(l[d]^=l[d+1]);o=i.reedSolomonMultiply(o,2)}return l}static reedSolomonComputeRemainder(s,l){let o=l.map(t=>0);for(const t of s){const d=t^o.shift();o.push(0),l.forEach((b,c)=>o[c]^=i.reedSolomonMultiply(b,d))}return o}static reedSolomonMultiply(s,l){if(s>>>8||l>>>8)throw new RangeError("Byte out of range");let o=0;for(let t=7;t>=0;t--)o=o<<1^(o>>>7)*285,o^=(l>>>t&1)*s;return u(o>>>8==0),o}finderPenaltyCountPatterns(s){const l=s[1];u(l<=this.size*3);const o=l>0&&s[2]==l&&s[3]==l*3&&s[4]==l&&s[5]==l;return(o&&s[0]>=l*4&&s[6]>=l?1:0)+(o&&s[6]>=l*4&&s[0]>=l?1:0)}finderPenaltyTerminateAndCount(s,l,o){return s&&(this.finderPenaltyAddHistory(l,o),l=0),l+=this.size,this.finderPenaltyAddHistory(l,o),this.finderPenaltyCountPatterns(o)}finderPenaltyAddHistory(s,l){l[0]==0&&(s+=this.size),l.pop(),l.unshift(s)}};let h=i;h.MIN_VERSION=1,h.MAX_VERSION=40,h.PENALTY_N1=3,h.PENALTY_N2=3,h.PENALTY_N3=40,h.PENALTY_N4=10,h.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],h.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=h;function n(s,l,o){if(l<0||l>31||s>>>l)throw new RangeError("Value out of range");for(let t=l-1;t>=0;t--)o.push(s>>>t&1)}function e(s,l){return(s>>>l&1)!=0}function u(s){if(!s)throw new Error("Assertion error")}const N=class{constructor(s,l,o){if(this.mode=s,this.numChars=l,this.bitData=o,l<0)throw new RangeError("Invalid argument");this.bitData=o.slice()}static makeBytes(s){let l=[];for(const o of s)n(o,8,l);return new N(N.Mode.BYTE,s.length,l)}static makeNumeric(s){if(!N.isNumeric(s))throw new RangeError("String contains non-numeric characters");let l=[];for(let o=0;o<s.length;){const t=Math.min(s.length-o,3);n(parseInt(s.substr(o,t),10),t*3+1,l),o+=t}return new N(N.Mode.NUMERIC,s.length,l)}static makeAlphanumeric(s){if(!N.isAlphanumeric(s))throw new RangeError("String contains unencodable characters in alphanumeric mode");let l=[],o;for(o=0;o+2<=s.length;o+=2){let t=N.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o))*45;t+=N.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o+1)),n(t,11,l)}return o<s.length&&n(N.ALPHANUMERIC_CHARSET.indexOf(s.charAt(o)),6,l),new N(N.Mode.ALPHANUMERIC,s.length,l)}static makeSegments(s){return s==""?[]:N.isNumeric(s)?[N.makeNumeric(s)]:N.isAlphanumeric(s)?[N.makeAlphanumeric(s)]:[N.makeBytes(N.toUtf8ByteArray(s))]}static makeEci(s){let l=[];if(s<0)throw new RangeError("ECI assignment value out of range");if(s<128)n(s,8,l);else if(s<16384)n(2,2,l),n(s,14,l);else if(s<1e6)n(6,3,l),n(s,21,l);else throw new RangeError("ECI assignment value out of range");return new N(N.Mode.ECI,0,l)}static isNumeric(s){return N.NUMERIC_REGEX.test(s)}static isAlphanumeric(s){return N.ALPHANUMERIC_REGEX.test(s)}getData(){return this.bitData.slice()}static getTotalBits(s,l){let o=0;for(const t of s){const d=t.mode.numCharCountBits(l);if(t.numChars>=1<<d)return 1/0;o+=4+d+t.bitData.length}return o}static toUtf8ByteArray(s){s=encodeURI(s);let l=[];for(let o=0;o<s.length;o++)s.charAt(o)!="%"?l.push(s.charCodeAt(o)):(l.push(parseInt(s.substr(o+1,2),16)),o+=2);return l}};let j=N;j.NUMERIC_REGEX=/^[0-9]*$/,j.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,j.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",a.QrSegment=j})(C||(C={}));(a=>{(i=>{const h=class{constructor(e,u){this.ordinal=e,this.formatBits=u}};let n=h;n.LOW=new h(0,1),n.MEDIUM=new h(1,0),n.QUARTILE=new h(2,3),n.HIGH=new h(3,2),i.Ecc=n})(a.QrCode||(a.QrCode={}))})(C||(C={}));(a=>{(i=>{const h=class{constructor(e,u){this.modeBits=e,this.numBitsCharCount=u}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};let n=h;n.NUMERIC=new h(1,[10,12,14]),n.ALPHANUMERIC=new h(2,[9,11,13]),n.BYTE=new h(4,[8,16,16]),n.KANJI=new h(8,[8,10,12]),n.ECI=new h(7,[0,0,0]),i.Mode=n})(a.QrSegment||(a.QrSegment={}))})(C||(C={}));var R=C;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var q={L:R.QrCode.Ecc.LOW,M:R.QrCode.Ecc.MEDIUM,Q:R.QrCode.Ecc.QUARTILE,H:R.QrCode.Ecc.HIGH},y=128,D="L",ee="#FFFFFF",re="#000000",se=!1,W=4,le=.1;function oe(a,i=0){const h=[];return a.forEach(function(n,e){let u=null;n.forEach(function(N,j){if(!N&&u!==null){h.push("M".concat(u+i," ").concat(e+i,"h").concat(j-u,"v1H").concat(u+i,"z")),u=null;return}if(j===n.length-1){if(!N)return;u===null?h.push("M".concat(j+i,",").concat(e+i," h1v1H").concat(j+i,"z")):h.push("M".concat(u+i,",").concat(e+i," h").concat(j+1-u,"v1H").concat(u+i,"z"));return}N&&u===null&&(u=j)})}),h.join("")}function te(a,i){return a.slice().map((h,n)=>n<i.y||n>=i.y+i.h?h:h.map((e,u)=>u<i.x||u>=i.x+i.w?e:!1))}function ie(a,i,h,n){if(n==null)return null;const e=h?W:0,u=a.length+e*2,N=Math.floor(i*le),j=u/i,s=(n.width||N)*j,l=(n.height||N)*j,o=n.x==null?a.length/2-s/2:n.x*j,t=n.y==null?a.length/2-l/2:n.y*j;let d=null;if(n.excavate){let b=Math.floor(o),c=Math.floor(t),x=Math.ceil(s+o-b),f=Math.ceil(l+t-c);d={x:b,y:c,w:x,h:f}}return{x:o,y:t,h:l,w:s,excavation:d}}(function(){try{new Path2D().addPath(new Path2D)}catch(a){return!1}return!0})();function $(a){const i=a,{value:h,size:n=y,level:e=D,bgColor:u=ee,fgColor:N=re,includeMargin:j=se,imageSettings:s}=i,l=J(i,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let o=R.QrCode.encodeText(h,q[e]).getModules();const t=j?W:0,d=o.length+t*2,b=ie(o,n,j,s);let c=null;s!=null&&b!=null&&(b.excavation!=null&&(o=te(o,b.excavation)),c=M.createElement("image",{xlinkHref:s.src,height:b.h,width:b.w,x:b.x+t,y:b.y+t,preserveAspectRatio:"none"}));const x=oe(o,t);return M.createElement("svg",Z({height:n,width:n,viewBox:"0 0 ".concat(d," ").concat(d)},l),M.createElement("path",{fill:u,d:"M0,0 h".concat(d,"v").concat(d,"H0z"),shapeRendering:"crispEdges"}),M.createElement("path",{fill:N,d:x,shapeRendering:"crispEdges"}),c)}function xe(){var l,o,t,d,b,c,x,f,E,A,m,g,k,P,S,I,T,L,z,U,F;const{id:a}=G(),[i,h]=M.useState(""),n=Y({api:V.waterDemandReceiptV2,config:{consumerId:a},options:{enabled:!!a,onSuccess:w=>{var v;h((v=w==null?void 0:w.data)==null?void 0:v.mobileNo)}}}),e=(l=n==null?void 0:n.data)==null?void 0:l.data,u="  AKOLA MUNICIPAL CORPORATION\nAkola Water Supply (Water Bill)  \n********************************\nConsumer No / ग्राहक क्रमांक: "+(e==null?void 0:e.consumerNo)+"\nFrom /पासून: "+(e==null?void 0:e.fromDate)+"\nTo /पर्यंत: "+(e==null?void 0:e.uptoDate)+"\nBill No / बिल क्रमांक: "+(e==null?void 0:e.demandNo)+"\nTax No /कर क्र: "+(e==null?void 0:e.taxNo)+"\nBill Date / बिल तारीख: "+(e==null?void 0:e.billDate)+"\nBill Due Date/बिल देय तारीख:\n"+(e==null?void 0:e.billDueDate)+"\nConsumer Name/ग्राहक नाव: "+(e==null?void 0:e.consumerName)+"\nConsumer Address/ ग्राहक पत्ता: "+(e==null?void 0:e.consumerAddress)+"\nConnection Type जोडणीचा प्रकार: \n"+(e==null?void 0:e.connectionType)+"\nTap size जोडणीचा आकार: "+(e==null?void 0:e.tabSize)+"\nZone झोन: "+(e==null?void 0:e.zoneName)+"\nOld Property no जुना मालमत्ता क्रमांक: "+(e==null?void 0:e.oldPropertyNo)+"\nNew Property no नवीन मालमत्ता क्रमांक: "+(e==null?void 0:e.newPropertyNo)+"\nMeter no मीटर क्र: "+(e==null?void 0:e.meterNo)+"\nCurrent Reading वर्तमान वाचन मागील: "+(e==null?void 0:e.currentReading)+"/"+(e==null?void 0:e.currentReadingDate)+"\nPrev Reading मागील वाचन: "+(e==null?void 0:e.previousReading)+"/"+(e==null?void 0:e.previousReadingDate)+"\nUnit वापरलेली एकूण युनिट: "+(e==null?void 0:e.totalUnitUsed)+"\nMeter Status मीटर स्थिती: "+(e==null?void 0:e.meterStatus)+"\n********************************\nMob No: "+(e==null?void 0:e.mobileNo)+"\nBill No/बिल क्र: "+(e==null?void 0:e.demandNo)+"\nBill Date/ बिल तारीख: "+(e==null?void 0:e.billDate)+"\nBill Due/ बिल देय: "+(e==null?void 0:e.billDueDate)+"\n\n\nBill Outstanding Details देय रक्कम विवरण: \n********************************\nCur Bill Amount / रक्कम चालू देयक राशी: "+((o=e==null?void 0:e.billOutstandingDetails)==null?void 0:o.currentBillAmount)+"\nArrear Bill Amount /थकबाकी बिलाची रक्कम: \n"+((t=e==null?void 0:e.billOutstandingDetails)==null?void 0:t.arrearBillAmount)+"\nAdjustment Bill/समायोजन विधेयक: \n"+((d=e==null?void 0:e.billOutstandingDetails)==null?void 0:d.adjustmentBill)+"\nTotal Outstanding/समायोजन विधेयक: "+((b=e==null?void 0:e.billOutstandingDetails)==null?void 0:b.totalOutstanding)+"\nBefore Due Date Amt/देय होण्यापूर्वी दि: "+((c=e==null?void 0:e.billOutstandingDetails)==null?void 0:c.beforeDueDate)+"\n********************************\nTc Name: "+((x=e==null?void 0:e.userDtl)==null?void 0:x.name)+"\nGenerated Date: "+(e==null?void 0:e.currentReadingDate)+"\nTc Mobile No: "+((f=e==null?void 0:e.userDtl)==null?void 0:f.mobile)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  https://amcakola.in\n\n\n\n",N=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:u}}))},j=()=>{if(i=="")return B.error("Please enter mobile number");if(i.length<10)return B.error("Please enter valid mobile number");window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"SHARE_LINK_WHATSAPP",keyData:{data:"".concat(window.location.origin,"/citizen/waterdemndbilldirect/").concat(a),target:"91".concat(i)}}))},s=()=>{if(i=="")return B.error("Please enter mobile number");if(i.length<10)return B.error("Please enter valid mobile number");window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"SHARE_LINK_TEXT",keyData:{data:"".concat(window.location.origin,"/citizen/waterdemndbilldirect/").concat(a),target:"91".concat(i)}}))};return r.jsx(K,{title:"Demand Receipt",children:r.jsxs("div",{className:"p-4",children:[r.jsx(O.Input,{onChange:w=>h(w.target.value),value:i,placeholder:"Enter Mobile Number",type:"number",size:"md",color:"gray",onInput:w=>w.target.value=w.target.value.slice(0,10)}),r.jsxs("div",{className:"flex justify-center items-center mt-3 gap-4",children:[r.jsx(O.Button,{size:"sm",color:"green",onClick:()=>j(),children:r.jsx("small",{children:"Share on Whatsapp"})}),r.jsx(O.Button,{size:"sm",color:"blue",onClick:()=>s(),children:r.jsx("small",{children:"Share on SMS"})})]}),r.jsx("div",{className:"flex justify-center gap-2 flex-wrap mt-4",children:r.jsx(O.Button,{size:"sm",color:"blue",onClick:()=>N(),children:r.jsx("small",{children:"Print Demand"})})}),r.jsx("div",{className:"w-full overflow-x-scroll",children:r.jsxs("div",{children:[r.jsx("div",{className:"w-[62rem] mx-auto mt-2 bg-white p-4 border border-black",children:r.jsxs("div",{className:"flex gap-32",children:[r.jsx("div",{children:r.jsx("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",alt:"akola",className:"w-28 h-28",loading:"lazy"})}),r.jsxs("div",{className:"pt-2 text-center",children:[r.jsx("h1",{className:"text-2xl font-bold  rounded-md",children:"AKOLA MUNICIPAL CORPORATION"}),r.jsx("p",{className:"text-1xl mt-2 font-semibold whitespace-nowrap",children:"Akola Water Supply (Water Bill)"})]}),r.jsx("div",{className:"ml-16",children:r.jsx($,{value:"https://modernulb.com/citizen/search-water-direct"})})]})}),r.jsxs("div",{className:" w-[62rem] mx-auto bg-white p-4 border border-black ",children:[r.jsxs("div",{className:"w-full  text-center ",children:[r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsxs("th",{className:"border border-black font-semibold",children:["Consumer No / ग्राहक क्रमांक ",r.jsx("br",{}),r.jsxs("span",{className:"font-bold",children:[" ",e==null?void 0:e.consumerNo]})," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:["From / पासून"," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:["To / पर्यंत"," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:[" ","Bill No / बिल क्रमांक"," "]}),r.jsxs("th",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.demandNo," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsx("td",{className:"border border-black",children:"Tax No /कर क्र"}),r.jsx("td",{className:"border-r border-black font-bold",children:e==null?void 0:e.fromDate}),r.jsx("td",{className:"font-bold",children:e==null?void 0:e.uptoDate}),r.jsxs("td",{className:"border border-black",children:[" ","Bill Date / बिल तारीख"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.billDate," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.taxNo," "]}),r.jsx("td",{className:"border-r border-black ",children:" "}),r.jsx("td",{className:"",children:" "}),r.jsxs("td",{className:"border border-black",children:[" ","Bill Due Date / बिल देय तारीख"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.billDueDate," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Consumer Name / ग्राहक नाव"," "]}),r.jsxs("td",{className:"border border-black font-bold",colSpan:"3",children:[e==null?void 0:e.consumerName," "]}),r.jsxs("td",{className:"border border-black ",children:[" ","Mobile No / मोबाईल क्र."," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Consumer Address/ ग्राहक पत्ता"]}),r.jsxs("td",{className:"border border-black font-bold",colSpan:"3",children:[" ",e==null?void 0:e.consumerAddress]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.mobileNo)||"N/A"," "]})]})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsx("th",{className:"border border-black",children:"जोडणी दिनांक "}),r.jsx("th",{className:"border border-black",children:"जोडणीचा प्रकार "}),r.jsx("th",{className:"border border-black",children:"जोडणीचा आकार "}),r.jsx("th",{className:"border border-black",children:"झोन"}),r.jsxs("th",{className:"border border-black",children:["जुना मालमत्ता क्रमांक"," "]}),r.jsxs("th",{className:"border border-black",children:[" ","नवीन मालमत्ता क्रमांक"," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[r.jsxs("th",{className:"border border-black  font-semibold",children:["Connection Date"," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"Connection Type"}),r.jsx("th",{className:"border border-black font-semibold",children:"Tap size"}),r.jsx("th",{className:"border border-black font-semibold",children:"Zone"}),r.jsx("th",{className:"border border-black font-semibold",children:"Old Property No."}),r.jsx("th",{className:"border border-black font-semibold",children:"New Property No."})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.connectionDate)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.connectionType)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.tabSize)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.zoneName)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.oldPropertyNo)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.newPropertyNo)||"N/A"," "]})]})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("th",{className:"border border-black font-semibold",children:["मीटर क्र."," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:["वर्तमान वाचन मागील"," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"मागील वाचन"}),r.jsxs("th",{className:"border border-black font-semibold",children:["वापरलेली एकूण युनिट"," "]}),r.jsxs("th",{className:"border border-black font-semibold",children:[" ","मीटर स्थिती"," "]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("th",{className:"border border-black font-semibold",children:["Meter No."," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"Current Reading"}),r.jsx("th",{className:"border border-black font-semibold",children:"Previous Reading"}),r.jsxs("th",{className:"border border-black font-semibold",children:["Total Unit Used"," "]}),r.jsx("th",{className:"border border-black font-semibold",children:"Meter Status"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.meterNo)||"N/A"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.currentReading,"/",e==null?void 0:e.currentReadingDate," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.previousReading,"/",e==null?void 0:e.previousReadingDate," "]}),r.jsx("td",{className:"border border-black font-bold",children:e==null?void 0:e.totalUnitUsed}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.meterStatus," "]})]})})]})]}),r.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[r.jsx("div",{className:"w-1/3 text-center",children:r.jsxs("div",{className:"w-full h-full border border-black overflow-hidden",children:[r.jsxs("h1",{className:"border-b border-black",children:["Meter Photo / मीटरचा फोटो"," "]}),r.jsx("img",{src:decodeURIComponent(e==null?void 0:e.meterImage),alt:"Meter Image ",className:"w-full h-64"}),r.jsxs("h1",{className:"bg-gray-200 font-bold",children:[((E=e==null?void 0:e.userDtl)==null?void 0:E.name)||"NA"," "]}),r.jsxs("h1",{className:"bg-gray-200 font-bold",children:[((A=e==null?void 0:e.userDtl)==null?void 0:A.mobile)||"NA"," "]}),r.jsxs("h1",{className:"bg-gray-200 font-bold",children:[(e==null?void 0:e.currentReadingDate)||"NA"," "]})]})}),r.jsx("div",{className:"w-[35%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsx("tr",{className:"",children:r.jsxs("th",{className:"border border-black",colSpan:"3",children:["Previous Reading Details / मागील वापराचा तपशील"," "]})})}),r.jsxs("tbody",{children:[r.jsxs("tr",{className:" ",children:[r.jsx("th",{className:"border border-black",children:"Bill from "}),r.jsx("th",{className:"border border-black",children:"Bill Upto"}),r.jsx("th",{className:"border border-black",children:"Unit Used"})]}),e==null?void 0:e.previousReadingDtls.map((w,v)=>r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",children:w.demand_from||"NA"}),r.jsx("td",{className:"border border-black",children:w.demand_upto||"NA"}),r.jsxs("td",{className:"border border-black",children:[w.unit_consume||"NA"," "]})]},v)),r.jsxs("tr",{children:[r.jsx("td",{className:"border border-black",style:{height:"40px"},children:"Bill Info"}),r.jsxs("td",{className:"border border-black",children:[" ","Adjustment Alert"," "]}),r.jsx("td",{className:"border border-black",children:"Spl. ALERT "})]}),r.jsxs("tr",{children:[r.jsxs("td",{className:"border border-black",style:{height:"40px"},children:["N/A"," "]}),r.jsx("td",{className:"border border-black",children:"LDt 00.00.00"}),r.jsx("td",{className:"border border-black",children:"LA "})]})]})]})})}),r.jsx("div",{className:"w-[35%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("thead",{children:r.jsx("tr",{style:{height:"28px"},children:r.jsxs("th",{className:"border border-black",colSpan:"2",children:["Bill Outstanding Details / देय रक्कम विवरण"," "]})})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("th",{className:"border border-black font-semibold",children:["Current Bill Amount / ",r.jsx("br",{})," रक्कम चालू देयक राशी"," "]}),r.jsx("th",{className:"border border-black font-bold",children:((m=e==null?void 0:e.billOutstandingDetails)==null?void 0:m.currentBillAmount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:[" ","Arrear Bill Amount/",r.jsx("br",{})," थकबाकी बिलाची रक्कम"]}),r.jsx("td",{className:"border border-black font-bold",children:((g=e==null?void 0:e.billOutstandingDetails)==null?void 0:g.arrearBillAmount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Adjustment Bill /",r.jsx("br",{})," समायोजन विधेयक"]}),r.jsx("td",{className:"border border-black font-bold",children:(k=e==null?void 0:e.billOutstandingDetails)==null?void 0:k.adjustmentBill})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Total Outstanding /",r.jsx("br",{})," समायोजन विधेयक"]}),r.jsx("td",{className:"border border-black font-bold",children:(P=e==null?void 0:e.billOutstandingDetails)==null?void 0:P.totalOutstanding})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Before Due Date Amt /",r.jsx("br",{}),"देय होण्यापूर्वी दि"," "]}),r.jsx("td",{className:"border border-black font-bold",children:(S=e==null?void 0:e.billOutstandingDetails)==null?void 0:S.beforeDueDate})]})})]})})})]}),r.jsx("table",{className:"table-auto w-full text-sm font-semibold",children:r.jsx("thead",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsx("th",{className:"border border-black uppercase",colSpan:"1",children:"Special Message / विशेष संदेश / Alert No. Applied / सूचना लागू नाही"}),r.jsxs("th",{className:"border border-black uppercase",colSpan:"1",children:["Executive Engineer / कार्यकारी अभियंता"," "]})]})})}),r.jsx("h1",{children:"-----------------------------------------------------------------------------------------------------------------------------------------------------"}),r.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[r.jsx("div",{className:"w-[80%] text-center",children:r.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:r.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black ",children:["Consumer No. / ग्राहक क्र. ",r.jsx("br",{}),r.jsx("span",{className:"font-bold",children:e==null?void 0:e.consumerNo})," "]}),r.jsxs("td",{className:"border border-black",children:["Mobile No. ",r.jsx("br",{}),r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.mobileNo)||"N/A"})," "]}),r.jsxs("td",{className:"border border-black",children:["Bill No. / बिल क्र. ",r.jsx("br",{})," ",r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.demandNo)||"N/A"})]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black ",children:["Consumer Name / ग्राहकाचे नाव"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.consumerName)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Bill Date / बिल तारीख ",r.jsx("br",{})," ",r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.billDate)||"N/A"})]})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"50px"},children:[r.jsxs("td",{className:"border border-black",children:["Consumer Address / ग्राहकाचा पत्ता"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.consumerAddress)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Bill Due/ बिल देय ",r.jsx("br",{})," ",r.jsx("span",{className:"font-bold",children:(e==null?void 0:e.billDueDate)||"N/A"})]})]})})]})})}),r.jsx("div",{className:"w-[20%] text-center",children:r.jsx("div",{className:"ml-10 mt-2",children:r.jsx($,{value:"https://modernulb.com/citizen/search-water-direct"})})})]}),r.jsxs("table",{className:"table-auto w-full text-sm font-semibold text-center",children:[r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Meter No. / मीटर क्रमांक."," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.meterNo)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Current Bill Amount / रक्कम चालू देयक राशी"," "]}),r.jsx("td",{className:"border border-black font-bold",children:((I=e==null?void 0:e.billOutstandingDetails)==null?void 0:I.currentBillAmount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Meter Status / मीटर स्थिती"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.meterStatus)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Arrear Bill Amount/ थकबाकी बिलाची रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:((T=e==null?void 0:e.billOutstandingDetails)==null?void 0:T.arrearBillAmount)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Connection Type / जोडणीचा प्रकार"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.connectionType)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Total Outstanding / एकुण थकीत रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:((L=e==null?void 0:e.billOutstandingDetails)==null?void 0:L.totalOutstanding)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Tap Size / जोडणीचा आकार"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",(e==null?void 0:e.tabSize)||"N/A"," "]}),r.jsxs("td",{className:"border border-black",children:["Before due Date Amount / मुदती पुर्व देय रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:((z=e==null?void 0:e.billOutstandingDetails)==null?void 0:z.beforeDueDate)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Current Reading / चालू रिडींग"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.currentReading," "]}),r.jsxs("td",{className:"border border-black",children:["Adjustment Of Bill / देयक दुरुस्ती"," "]}),r.jsx("td",{className:"border border-black font-bold ",children:((U=e==null?void 0:e.billOutstandingDetails)==null?void 0:U.adjustmentBill)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Previous Reading / मागील रिडींग"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[e==null?void 0:e.previousReading," "]}),r.jsxs("td",{className:"border border-black",children:["Before Due Date Amount / मुदती पुर्व देय रक्कम"," "]}),r.jsx("td",{className:"border border-black font-bold",children:((F=e==null?void 0:e.billOutstandingDetails)==null?void 0:F.beforeDueDate)||"0"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Total Used / Build Unit / एकूण वापर"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[" ",e==null?void 0:e.totalUnitUsed," "]}),r.jsxs("td",{className:"border border-black",children:["After Due Date Amount /देयक दुरुस्ती"," "]}),r.jsx("td",{className:"border border-black",children:"-"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{style:{height:"30px"},children:[r.jsxs("td",{className:"border border-black",children:["Bill Period day / बिल कालावधी दिवस"," "]}),r.jsxs("td",{className:"border border-black font-bold",children:[(e==null?void 0:e.billPeriodInDay)||"0"," "]})]})})]})]})]})})]})})}export{xe as default};