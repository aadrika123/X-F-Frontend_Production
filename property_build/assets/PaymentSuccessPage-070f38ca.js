import{r as i,j as e,a4 as c,b as d,ad as l}from"./index-f3761e5c.js";function m(){const a=l(),[r,n]=i.useState([]),{api_Online_Payment:s}=a;console.log(window.location);const o=()=>{window.confirm("Proceed for payment.")&&c.post(s,{id:1,amount:120},d()).then(t=>{console.log("response",t.data.data),t.data.status&&(n(t.data),window.open(decodeURIComponent(t.data.data.encryptUrl),"_"))}).catch(t=>{console.log(t)})};return e.jsx("div",{className:"container text-center py-4",children:e.jsx("div",{class:"bg-gray-100 h-64 w-64 mx-auto",children:e.jsxs("div",{class:"bg-white p-6  md:mx-auto",children:[e.jsx("svg",{viewBox:"0 0 24 24",class:"text-green-600 w-16 h-16 mx-auto my-6",children:e.jsx("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}),e.jsxs("div",{class:"text-center",children:[e.jsx("h3",{class:"md:text-2xl text-base text-gray-900 font-semibold text-center",children:"Payment Done!"}),e.jsx("p",{class:"text-gray-600 my-2",children:"Thank you for completing your secure online payment."}),e.jsx("p",{children:" Have a great day!  "}),e.jsx("div",{class:"py-10 text-center",children:e.jsx("a",{href:"#",class:"px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3",children:"GO BACK"})}),e.jsx("div",{class:"py-10 text-center",children:e.jsx("button",{class:"px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3",onClick:o,children:"Make Payment"})})]})]})})})}export{m as default};
