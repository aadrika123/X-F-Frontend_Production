import{ad as e,j as t,bE as r,f as s}from"./index-3b96809c.js";import{D as n}from"./DetailsFactory-02252d2a.js";import"./building-ba148a11.js";import"./TopTabs-764e6c37.js";function g(){const{get_HarvestingDetailsById:i}=s();e("Rainwater Harvesting Details");const a={api:{api_getAppicationFullDetail:{method:"post",url:i}},detailInfo:{title:"RainWater Harvesting Details"},filters:{topButtons:!1}};return t.jsx(r,{errorMsg:"Bug in rainwater harvesting",children:t.jsx(n,{detailRules:a})})}export{g as default};