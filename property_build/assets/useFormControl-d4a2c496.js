import{r as t}from"./index-be1e1588.js";function m({controlled:e,default:n,name:f,state:d="value"}){const{current:o}=t.useRef(e!==void 0),[r,s]=t.useState(n),u=o?e:r,a=t.useCallback(l=>{o||s(l)},[]);return[u,a]}const c=t.createContext(void 0),C=c;function x(){return t.useContext(C)}export{C as F,x as a,m as u};
