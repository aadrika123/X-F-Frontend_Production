import{ac as e,j as t,bA as r,f as s}from"./index-fa6f3498.js";import{D as n}from"./DetailsFactory-d150a14c.js";import"./building-ba148a11.js";import"./TopTabs-897baf39.js";function g(){const{get_HarvestingDetailsById:i}=s();e("Rainwater Harvesting Details");const a={api:{api_getAppicationFullDetail:{method:"post",url:i}},detailInfo:{title:"RainWater Harvesting Details"},filters:{topButtons:!1}};return t.jsx(r,{errorMsg:"Bug in rainwater harvesting",children:t.jsx(n,{detailRules:a})})}export{g as default};