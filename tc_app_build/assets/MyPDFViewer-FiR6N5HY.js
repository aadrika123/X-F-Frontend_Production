import{j as t}from"./index-CUXWRp7E.js";/* empty css              */import{l}from"./reactPdfViewerCore-t_0I17fT.js";import{l as a}from"./reactPdfViewerDefaultLayout-S9Yj6FAR.js";function u(i){const e=a.defaultLayoutPlugin({sidebarTabs:r=>[],...!(i!=null&&i.toolbar)&&{renderToolbar:r=>[]}});return t.jsx("div",{className:"".concat(i==null?void 0:i.height),children:t.jsx(l.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js",children:t.jsx(l.Viewer,{fileUrl:i==null?void 0:i.fileUrl,plugins:[e]})})})}export{u as M};
