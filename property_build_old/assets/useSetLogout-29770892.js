import{A as e,b as n,g as c}from"./index-4908a0dc.js";function i(t){const{api_logout:s}=c();e.post(s,{},n()).then(function(o){console.log("logout response via usesetlogout.",o)}).catch(function(o){console.log("logout success...")}).finally(()=>{t()})}export{i as u};