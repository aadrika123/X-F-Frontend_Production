import{A as e,b as n,f as c}from"./index-3617a985.js";function i(t){const{api_logout:s}=c();e.post(s,{},n()).then(function(o){console.log("logout response via usesetlogout.",o)}).catch(function(o){console.log("logout success...")}).finally(()=>{t()})}export{i as u};