import{ac as e,j as t,bA as r,f as s}from"./index-40a2496a.js";import{D as n}from"./DetailsFactory-31b321ef.js";import"./building-ba148a11.js";import"./TopTabs-859df6b6.js";function g(){const{get_HarvestingDetailsById:i}=s();e("Rainwater Harvesting Details");const a={api:{api_getAppicationFullDetail:{method:"post",url:i}},detailInfo:{title:"RainWater Harvesting Details"},filters:{topButtons:!1}};return t.jsx(r,{errorMsg:"Bug in rainwater harvesting",children:t.jsx(n,{detailRules:a})})}export{g as default};