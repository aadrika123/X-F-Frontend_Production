import{r as i,j as e,cr as E,ct as B,ar as R,cJ as U,ad as L,cH as D,b as M,A as V,cX as _,o as q}from"./index-025cc29f.js";import{u as G}from"./useQuery-cb9e6cdf.js";import{F as Q,N as K,a as Y,L as J}from"./NavigateNext-b5b43644.js";function X(d,n,t){i.useEffect(()=>{if(!document)return;const s=document.querySelector('script[src="'.concat(d,'"]'));if(s!=null&&s.dataset.loaded){n==null||n();return}const a=s||document.createElement("script");s||(a.src=d);const r=()=>{a.dataset.loaded="1",n==null||n()};return a.addEventListener("load",r),t&&a.addEventListener("error",t),s||document.head.append(a),()=>{a.removeEventListener("load",r),t&&a.removeEventListener("error",t)}},[])}function $(d){let{chartVersion:n="current",chartPackages:t=["corechart","controls"],chartLanguage:s="en",mapsApiKey:a}=d;const[r,o]=i.useState(null),[c,p]=i.useState(!1);return X("https://www.gstatic.com/charts/loader.js",()=>{const l=window==null?void 0:window.google;l&&(l.charts.load(n,{packages:t,language:s,mapsApiKey:a}),l.charts.setOnLoadCallback(()=>{o(l)}))},()=>{p(!0)}),[r,c]}function Z(d){let{onLoad:n,onError:t,...s}=d;const[a,r]=$(s);return i.useEffect(()=>{a&&n&&n(a)},[a]),i.useEffect(()=>{r&&t&&t()},[r]),null}const O={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let F=0;const ee=()=>(F+=1,"reactgooglegraph-".concat(F)),se=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],te=async function(d,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new Promise((s,a)=>{const r="".concat(t.headers?"headers=".concat(t.headers):"headers=0"),o="".concat(t.query?"&tq=".concat(encodeURIComponent(t.query)):""),c="".concat(t.gid?"&gid=".concat(t.gid):""),p="".concat(t.sheet?"&sheet=".concat(t.sheet):""),l="".concat(t.access_token?"&access_token=".concat(t.access_token):""),m="".concat(r).concat(c).concat(p).concat(o).concat(l),x="".concat(n,"/gviz/tq?").concat(m);new d.visualization.Query(x).send(f=>{f.isError()?a("Error in query:  ".concat(f.getMessage()," ").concat(f.getDetailedMessage())):s(f.getDataTable())})})},{Provider:re,Consumer:ae}=i.createContext(O),ne=d=>{let{children:n,value:t}=d;return i.createElement(re,{value:t},n)},H=d=>{let{render:n}=d;return i.createElement(ae,null,t=>n(t))},oe="#CCCCCC";class le extends i.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:n,googleChartWrapper:t}=this.props;window.removeEventListener("resize",this.onResize),n.visualization.events.removeAllListeners(t),t.getChartType()==="Timeline"&&t.getChart()&&t.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...n){super(...n),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:t,googleChartWrapper:s}=this.props;t.visualization.events.addListener(s,"select",()=>{const r=s.getChart().getSelection(),o=s.getDataTable();if(r.length===0||r[0].row||!o)return;const c=r[0].column,p=this.getColumnID(o,c);this.state.hiddenColumns.includes(p)?this.setState(l=>({...l,hiddenColumns:[...l.hiddenColumns.filter(m=>m!==p)]})):this.setState(l=>({...l,hiddenColumns:[...l.hiddenColumns,p]}))})},this.applyFormatters=(t,s)=>{const{google:a}=this.props;for(let r of s)switch(r.type){case"ArrowFormat":{new a.visualization.ArrowFormat(r.options).format(t,r.column);break}case"BarFormat":{new a.visualization.BarFormat(r.options).format(t,r.column);break}case"ColorFormat":{const o=new a.visualization.ColorFormat(r.options),{ranges:c}=r;for(let p of c)o.addRange(...p);o.format(t,r.column);break}case"DateFormat":{new a.visualization.DateFormat(r.options).format(t,r.column);break}case"NumberFormat":{new a.visualization.NumberFormat(r.options).format(t,r.column);break}case"PatternFormat":{new a.visualization.PatternFormat(r.options).format(t,r.column);break}}},this.getColumnID=(t,s)=>t.getColumnId(s)||t.getColumnLabel(s),this.draw=async t=>{let{data:s,diffdata:a,rows:r,columns:o,options:c,legend_toggle:p,legendToggle:l,chartType:m,formatters:x,spreadSheetUrl:b,spreadSheetQueryParameters:f}=t;const{google:g,googleChartWrapper:v}=this.props;let u,C=null;if(a){const h=g.visualization.arrayToDataTable(a.old),w=g.visualization.arrayToDataTable(a.new);C=g.visualization[m].prototype.computeDiff(h,w)}s!==null?Array.isArray(s)?u=g.visualization.arrayToDataTable(s):u=new g.visualization.DataTable(s):r&&o?u=g.visualization.arrayToDataTable([o,...r]):b?u=await te(g,b,f):u=g.visualization.arrayToDataTable([]);const N=u.getNumberOfColumns();for(let h=0;h<N;h+=1){const w=this.getColumnID(u,h);if(this.state.hiddenColumns.includes(w)){const I=u.getColumnLabel(h),z=u.getColumnId(h),T=u.getColumnType(h);u.removeColumn(h),u.addColumn({label:I,id:z,type:T})}}const y=v.getChart();v.getChartType()==="Timeline"&&y&&y.clearChart(),v.setChartType(m),v.setOptions(c||{}),v.setDataTable(u),v.draw(),this.props.googleChartDashboard!==null&&this.props.googleChartDashboard.draw(u),C&&(v.setDataTable(C),v.draw()),x&&(this.applyFormatters(u,x),v.setDataTable(u),v.draw()),(l===!0||p===!0)&&this.grayOutHiddenColumns({options:c})},this.grayOutHiddenColumns=t=>{let{options:s}=t;const{googleChartWrapper:a}=this.props,r=a.getDataTable();if(!r)return;const o=r.getNumberOfColumns();if(this.state.hiddenColumns.length>0===!1)return;const p=Array.from({length:o-1}).map((l,m)=>{const x=this.getColumnID(r,m+1);return this.state.hiddenColumns.includes(x)?oe:s&&s.colors?s.colors[m]:se[m]});a.setOptions({...s,colors:p}),a.draw()},this.onResize=()=>{const{googleChartWrapper:t}=this.props;t.draw()}}}class ie extends i.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:n,googleChartWrapper:t,googleChartDashboard:s}=this.props;return i.createElement(H,{render:a=>i.createElement(le,Object.assign({},a,{google:n,googleChartWrapper:t,googleChartDashboard:s}))})}}class ce extends i.Component{shouldComponentUpdate(){return!1}listenToEvents(n){let{chartEvents:t,google:s,googleChartWrapper:a}=n;if(t){s.visualization.events.removeAllListeners(a);for(let o of t){var r=this;const{eventName:c,callback:p}=o;s.visualization.events.addListener(a,c,function(){for(var l=arguments.length,m=new Array(l),x=0;x<l;x++)m[x]=arguments[x];p({chartWrapper:a,props:r.props,google:s,eventArgs:m})})}}}render(){const{google:n,googleChartWrapper:t}=this.props;return i.createElement(H,{render:s=>(this.listenToEvents({chartEvents:s.chartEvents||null,google:n,googleChartWrapper:t}),null)})}}let k=0;class de extends i.Component{componentDidMount(){const{options:n,google:t,chartType:s,chartWrapperParams:a,toolbarItems:r,getChartEditor:o,getChartWrapper:c}=this.props,p={chartType:s,options:n,containerId:this.getGraphID(),...a},l=new t.visualization.ChartWrapper(p);l.setOptions(n||{}),c&&c(l,t);const m=new t.visualization.Dashboard(this.dashboard_ref),x=this.addControls(l,m);r&&t.visualization.drawToolbar(this.toolbar_ref.current,r);let b=null;o&&(b=new t.visualization.ChartEditor,o({chartEditor:b,chartWrapper:l,google:t})),this.setState({googleChartEditor:b,googleChartControls:x,googleChartDashboard:m,googleChartWrapper:l,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper||!this.state.googleChartDashboard||!this.state.googleChartControls)return;const{controls:n}=this.props;if(n)for(let t=0;t<n.length;t+=1){const{controlType:s,options:a,controlWrapperParams:r}=n[t];r&&"state"in r&&this.state.googleChartControls[t].control.setState(r.state),this.state.googleChartControls[t].control.setOptions(a),this.state.googleChartControls[t].control.setControlType(s)}}shouldComponentUpdate(n,t){return this.state.isReady!==t.isReady||n.controls!==this.props.controls}render(){const{width:n,height:t,options:s,style:a}=this.props,r={height:t||s&&s.height,width:n||s&&s.width,...a};return this.props.render?i.createElement("div",{ref:this.dashboard_ref,style:r},i.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):i.createElement("div",{ref:this.dashboard_ref,style:r},this.renderControl(o=>{let{controlProp:c}=o;return c.controlPosition!=="bottom"}),this.renderChart(),this.renderControl(o=>{let{controlProp:c}=o;return c.controlPosition==="bottom"}),this.renderToolBar())}constructor(...n){var t;super(),t=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=i.createRef(),this.toolbar_ref=i.createRef(),this.getGraphID=()=>{const{graphID:s,graph_id:a}=this.props;let r;return!s&&!a?this.graphID?r=this.graphID:r=ee():s&&!a?r=s:a&&!s?r=a:r=s,this.graphID=r,this.graphID},this.getControlID=(s,a)=>{k+=1;let r;return typeof s>"u"?r="googlechart-control-".concat(a,"-").concat(k):r=s,r},this.addControls=(s,a)=>{const{google:r,controls:o}=this.props,c=o?o.map((l,m)=>{const{controlID:x,controlType:b,options:f,controlWrapperParams:g}=l,v=this.getControlID(x,m);return{controlProp:l,control:new r.visualization.ControlWrapper({containerId:v,controlType:b,options:f,...g})}}):null;if(!c)return null;a.bind(c.map(l=>{let{control:m}=l;return m}),s);for(let l of c){const{control:m,controlProp:x}=l,{controlEvents:b=[]}=x;for(let f of b){var p=this;const{callback:g,eventName:v}=f;r.visualization.events.removeListener(m,v,g),r.visualization.events.addListener(m,v,function(){for(var u=arguments.length,C=new Array(u),N=0;N<u;N++)C[N]=arguments[N];g({chartWrapper:s,controlWrapper:m,props:p.props,google:r,eventArgs:C})})}}return c},this.renderChart=()=>{const{width:s,height:a,options:r,style:o,className:c,rootProps:p,google:l}=this.props,m={height:a||r&&r.height,width:s||r&&r.width,...o};return i.createElement("div",Object.assign({id:this.getGraphID(),style:m,className:c},p),this.state.isReady&&this.state.googleChartWrapper!==null?i.createElement(i.Fragment,null,i.createElement(ie,{googleChartWrapper:this.state.googleChartWrapper,google:l,googleChartDashboard:this.state.googleChartDashboard}),i.createElement(ce,{googleChartWrapper:this.state.googleChartWrapper,google:l})):null)},this.renderControl=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a=>!0;return t.state.isReady&&t.state.googleChartControls!==null?i.createElement(i.Fragment,null,t.state.googleChartControls.filter(a=>{let{controlProp:r,control:o}=a;return s({control:o,controlProp:r})}).map(a=>{let{control:r,controlProp:o}=a;return i.createElement("div",{key:r.getContainerId(),id:r.getContainerId()})})):null},this.renderToolBar=()=>this.props.toolbarItems?i.createElement("div",{ref:this.toolbar_ref}):null}}class S extends i.Component{render(){const{chartLanguage:n,chartPackages:t,chartVersion:s,mapsApiKey:a,loader:r,errorElement:o}=this.props;return i.createElement(ne,{value:this.props},this.state.loadingStatus==="ready"&&this.state.google!==null?i.createElement(de,Object.assign({},this.props,{google:this.state.google})):this.state.loadingStatus==="errored"&&o?o:r,i.createElement(Z,{chartLanguage:n,chartPackages:t,chartVersion:s,mapsApiKey:a,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(n){const{controls:t,toolbarItems:s,getChartEditor:a}=this.props;return n&&n.visualization&&n.visualization.ChartWrapper&&n.visualization.Dashboard&&(!t||n.visualization.ChartWrapper)&&(!a||n.visualization.ChartEditor)&&(!s||n.visualization.drawToolbar)}constructor(...n){super(...n),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=t=>{if(this.props.onLoad&&this.props.onLoad(t),this.isFullyLoaded(t))this.onSuccess(t);else{const s=setInterval(()=>{const a=window.google;this._isMounted?a&&this.isFullyLoaded(a)&&(clearInterval(s),this.onSuccess(a)):clearInterval(s)},1e3)}},this.onSuccess=t=>{this.setState({loadingStatus:"ready",google:t})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}S.defaultProps=O;var W;(function(d){d.annotation="annotation",d.annotationText="annotationText",d.certainty="certainty",d.emphasis="emphasis",d.interval="interval",d.scope="scope",d.style="style",d.tooltip="tooltip",d.domain="domain"})(W||(W={}));function he({searchText:d,filter:n,setFilter:t}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"my-2 flex",children:[e.jsxs("p",{className:"mx-2 font-semibold",children:[" Search in Result ",d," : "]}),e.jsx("input",{className:"border border-gray-600 px-2 bg-gray-100 py-1 outline-1 outline-blue-400 active:bg-gray-200 rounded-sm",type:"text",value:n||"",onChange:s=>t(s.target.value)})]})})}function me({searchText:d,fun:n,columns:t,data:s,...a}){const[r,o]=i.useState("hidden"),{getTableProps:c,getTableBodyProps:p,headerGroups:l,prepareRow:m,page:x,canPreviousPage:b,canNextPage:f,pageOptions:g,pageCount:v,gotoPage:u,nextPage:C,previousPage:N,setGlobalFilter:y,setPageSize:h,state:{pageIndex:w,pageSize:I,selectedRowIds:z,globalFilter:T}}=E.useTable({columns:t,data:s,initialState:{pageIndex:0}},E.useGlobalFilter,E.useSortBy,E.usePagination);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-hidden mx-2",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-initial",children:e.jsx(he,{searchText:d,filter:T,setFilter:y})}),e.jsx("div",{className:"ml-2",children:e.jsxs("button",{className:"bg-sky-400 px-3 my-2 pr-3 shadow-lg rounded py-1.5 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>o(""),onMouseLeave:()=>o("hidden"),children:[e.jsx(B,{data:s,children:" Export Data"}),e.jsx("div",{className:r+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e.jsx(R,{})})]})})]}),e.jsxs("table",{...c(),className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-center text-sm bg-gray-200",children:l.map(j=>e.jsx("tr",{className:"",...j.getHeaderGroupProps(),children:j.headers.map(P=>e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800 text-xs uppercase text-left",...P.getHeaderProps(P.getSortByToggleProps()),children:e.jsxs("div",{className:"flex",children:[e.jsxs("span",{children:[" ",P.render("Header")]}),e.jsxs("span",{className:"mt-0.5 mx-2",children:[" ",!P.isSorted&&e.jsx(U,{size:14})," "]}),e.jsx("span",{children:P.isSorted?P.isSortedDesc?" 🔽":" 🔼":""})]})}))}))}),e.jsx("tbody",{...p(),children:x.map((j,P)=>(m(j),e.jsx("tr",{className:"",...j.getRowProps(),children:j.cells.map(A=>e.jsx("td",{style:{backgroundColor:j.isSelected?"#b6fcc0":"",color:j.isSelected?"#000000":""},className:"px-2 py-2 bg-white text-left leading-4 text-sm text-gray-900 tracking-wider border-b",...A.getCellProps(),children:A.render("Cell")}))})))})]})]}),e.jsxs("div",{className:"pagination grid grid-cols-12 mt-5 px-5",children:[e.jsxs("div",{className:"col-span-4",children:[e.jsxs("button",{className:"hover:bg-gray-300 cursor-pointer",onClick:()=>u(0),disabled:!b,children:[" ",e.jsx(Q,{})," "]})," ","  ",e.jsxs("button",{className:"hover:bg-gray-300 cursor-pointer",onClick:()=>N(),disabled:!b,children:[e.jsx(K,{})," "]})," ",e.jsx("button",{className:"hover:bg-gray-300 cursor-pointer",onClick:()=>C(),disabled:!f,children:e.jsx(Y,{})})," "," ",e.jsx("button",{className:"hover:bg-gray-300 cursor-pointer",onClick:()=>u(v-1),disabled:!f,children:e.jsx(J,{})})," "," "]}),e.jsx("div",{className:"col-span-4 justify-self-center",children:e.jsxs("span",{children:["Page"," ",e.jsxs("strong",{children:[w+1," of ",g.length]})," "]})}),e.jsx("div",{className:"col-span-4 justify-self-end",children:e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 ",value:I,onChange:j=>{h(Number(j.target.value))},children:[5,10,20,30,40,50].map(j=>e.jsxs("option",{value:j,children:["Show ",j]},j))})})]})]})}const pe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"transparent",border:"none"}};L.setAppElement("#root");function ue(d){var x,b,f,g,v,u;const[n,t]=i.useState(!1),[s,a]=i.useState(),{getPaymentDetailsByTrnId:r}=D(),o=M(),c=d.selectedOrderId;i.useEffect(()=>{V.post(r,{transactionNo:c},o).then(C=>{a(C.data.data)})},[c]),console.log("Fetched Data in Single View MOdel",s==null?void 0:s.transactionNo,s);function p(){t(!0)}function l(){}function m(){t(!1)}return i.useEffect(()=>{c&&p()},[d.openPopUp]),e.jsx(e.Fragment,{children:e.jsx(L,{isOpen:n,onAfterOpen:l,onRequestClose:m,style:pe,contentLabel:"Example Modal",children:e.jsx("div",{children:e.jsxs("div",{className:"p-5 shadow-2xl border border-gray-300 bg-indigo-200 rounded-sm",children:[e.jsx("div",{className:"",children:e.jsx("div",{className:"float-right",children:e.jsx("p",{onClick:m,className:"cursor-pointer hover:bg-blue-500 hover:border-blue-700 hover:border hover:text-white border border-gray-500 rounded-md p-1",children:e.jsx(_,{size:25})})})}),e.jsx("div",{className:"mb-4",children:e.jsxs("h1",{className:"text-center font-semibold text-xl",children:["Details of Transaction No :"," ",e.jsx("span",{className:"font-bold",children:c})]})}),e.jsx("p",{className:"border-b border-gray-200 px-5 mt-1 mb-3"}),e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-2 my-2",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsxs("p",{children:[" ",e.jsx("span",{className:"font-semibold",children:"Order Id : "})," ",e.jsxs("span",{className:"font-medium text-gray-700",children:[" ",s==null?void 0:s.orderId," "]})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Bank Name : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.bank})]}),e.jsxs("p",{children:[e.jsxs("span",{className:"font-semibold",children:[s==null?void 0:s.paymentAcquirerDataType," "]})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentAcquirerDataValue})]})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment Id : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentId})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment Status : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.status})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment Method : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.method})]})]}),e.jsx("div",{className:"col-span-2 border-b py-2"})]}),e.jsxs("div",{className:"grid grid-cols-2 my-2",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment For : "})," ",e.jsxs("span",{className:"font-medium text-gray-700",children:[(x=s==null?void 0:s.userDetails)==null?void 0:x.departmentId," (","1 - Property",")"]})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment Against : "})," ",e.jsxs("span",{className:"font-medium text-gray-700",children:[(b=s==null?void 0:s.userDetails)==null?void 0:b.applicationId,' ("SAF No")']})]})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Amount : ₹ "})," ",e.jsxs("span",{className:"font-medium text-gray-700",children:[s==null?void 0:s.amount," "]})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"ULB ID : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:(f=s==null?void 0:s.userDetails)==null?void 0:f.ulbId})]})]}),e.jsx("div",{className:"col-span-2 border-b py-2"})]}),e.jsxs("div",{className:"grid grid-cols-2 my-2",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Customer Name : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:(g=s==null?void 0:s.userDetails)==null?void 0:g.name})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Customer Phone : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:(v=s==null?void 0:s.userDetails)==null?void 0:v.contact})]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Customer Email : "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:(u=s==null?void 0:s.userDetails)==null?void 0:u.email})]})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsxs("p",{children:[e.jsxs("span",{className:"font-semibold",children:["Phone While Payment :"," "]})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.contact})]}),e.jsxs("p",{children:[e.jsxs("span",{className:"font-semibold",children:["Email While Payment :"," "]})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.emails})]})]}),e.jsx("div",{className:"col-span-2 border-b py-2"})]}),e.jsx("div",{className:"grid grid-cols-2",children:e.jsxs("div",{className:"col-span-1",children:[(s==null?void 0:s.paymentVpa)&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"UPI ID "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentVpa})]}),(s==null?void 0:s.paymentCardId)&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"UPI ID "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentCardId})]}),(s==null?void 0:s.paymentErrorCode)&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Error Code "})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentErrorCode})]}),(s==null?void 0:s.paymentErrorReason)&&e.jsxs("p",{children:[e.jsxs("span",{className:"font-semibold",children:["Payment Error Reason"," "]})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentErrorReason})]}),(s==null?void 0:s.paymentErrorSource)&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment Error Source"})," ",e.jsx("span",{className:"font-medium text-gray-700",children:s==null?void 0:s.paymentErrorSource})]})]})}),(s==null?void 0:s.paymentErrorDescription)&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Error Description "})," ",e.jsx("span",{className:"font-medium text-gray-700 break-words",children:s==null?void 0:s.paymentErrorDescription})]})]})]})})})})}const ge="/assets/houseTax-05c8161b.png";function fe(d){var C,N,y;const[n,t]=i.useState(0),[s,a]=i.useState(),{getAllPayments:r}=D(),o=M(),c=h=>{a(h),t(w=>w+1),console("Btn clicked",h)},p=[{Header:"Sl.",Cell:({row:h})=>e.jsxs("div",{className:"px-2 font-semibold",children:[h.index+1,"."]})},{Header:"Trans No",accessor:"transactionNo"},{Header:"ULB",accessor:"userDetails.ulbId",Cell:h=>e.jsxs("p",{children:[h.value=="0"&&e.jsx("p",{className:"",children:"Test"}),h.value=="2"&&e.jsx("p",{className:"",children:"RMC"})]})},{Header:"Dept.",accessor:"userDetails.departmentId",Cell:h=>e.jsxs("p",{children:[h.value=="1"&&e.jsx("p",{className:"",children:"Property"}),h.value=="2"&&e.jsx("p",{className:"",children:"Water"}),h.value=="3"&&e.jsx("p",{className:"",children:"Trade"}),h.value=="4"&&e.jsx("p",{className:"",children:"Grivance"})]})},{Header:"Rzp Order Id",accessor:"orderId"},{Header:"Payment_ID",accessor:"paymentId"},{Header:"Amount",accessor:"amount",Cell:h=>e.jsx("p",{children:h.value&&"₹"+h.value})},{Header:"Date Time",accessor:"date"},{Header:"Status",accessor:"status",Cell:h=>e.jsxs("p",{children:[h.value=="captured"&&e.jsx("div",{className:"flex",children:e.jsx("p",{className:"bg-green-300 text-gray-800 font-semibold text-center px-1 py-0.5 rounded-sm",children:"Success"})}),h.value=="failed"&&e.jsx("p",{className:"bg-red-600 text-white font-semibold text-center py-0.5 rounded-md",children:h.value}),h.value=="authorized"&&e.jsx("p",{className:"bg-yellow-600 text-white font-semibold text-center px-1 py-0.5 rounded-md",children:h.value})]})},{Header:"Action",accessor:"id",Cell:({cell:h})=>e.jsx("button",{onClick:()=>c(h.row.values.transactionNo),className:"bg-blue-600 hover:bg-blue-400 py-1 px-3 text-white rounded-sm",children:"View"})}],l=[["Task","Hours per Day"],["Property",11],["Trade",4],["Water",3],["SWM",6]],m={title:"Module Wise Yearly Collections",is3D:!0,chartArea:{left:40,top:40,width:"80%",height:"80%"}},x=[["Year - 2022","Property","Trade","Water","SWM"],["Sep",1e3,400,200,500],["Oct",1170,460,250,300],["Nov",660,1120,300,200],["Dec",1030,540,350,250]],b={chart:{title:"Collections in Diffrent Modules.",subtitle:"Property, Watrer, Trade and SWM: Month wise 2022"}},{isLoading:f,data:g,isError:v,error:u}=G("api/payment/get-webhook-details22--ok done",()=>V.get(r,o));return e.jsxs(e.Fragment,{children:[e.jsx(ue,{openPopUp:n,selectedOrderId:s}),e.jsxs("main",{class:"pt-10 -mt-4 mb-10",children:[e.jsxs("div",{className:"flex text-gray-600",children:[e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6",children:e.jsxs("div",{className:"bg-white darks:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden",children:[e.jsx("div",{className:"float-right mr-20",children:e.jsx("img",{src:ge,className:"opacity-30 h-20 w-20 absolute",alt:""})}),e.jsx("h3",{className:"text-base font-bold mb-2",children:"Property"}),e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"₹ 1,200"}),e.jsxs("div",{className:"flex flex-row justify-between w-full",children:[e.jsxs("div",{className:"flex items-center",title:"Target",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"mr-2 bi bi-calendar-check",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),e.jsx("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"})]})," ",e.jsx("span",{className:"font-medium",children:" Today"})]}),e.jsx("div",{className:"flex items-center text-green-500",children:"+5%"})]})]})}),e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6",children:e.jsxs("div",{className:"bg-white darks:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden",children:[e.jsx("h3",{className:"text-base font-bold mb-2",children:"Trade"}),e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"₹ 12,500"}),e.jsxs("div",{className:"flex flex-row justify-between w-full",children:[e.jsxs("div",{className:"flex items-center",title:"Target",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"mr-2 bi bi-calendar-check",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),e.jsx("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"})]})," ",e.jsx("span",{className:"font-medium",children:" Today"})]}),e.jsx("div",{className:"flex items-center text-green-500",children:"+25%"})]})]})}),e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6",children:e.jsxs("div",{className:"bg-white darks:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden",children:[e.jsx("h3",{className:"text-base font-bold mb-2",children:"Water"}),e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"₹ 5,200"}),e.jsxs("div",{className:"flex flex-row justify-between w-full",children:[e.jsxs("div",{className:"flex items-center",title:"Target",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"mr-2 bi bi-calendar-check",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),e.jsx("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"})]})," ",e.jsx("span",{className:"font-medium",children:" Today"})]}),e.jsx("div",{className:"flex items-center text-green-500",children:"+10%"})]})]})}),e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6",children:e.jsxs("div",{className:"bg-white darks:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden",children:[e.jsx("h3",{className:"text-base font-bold mb-2",children:"SWM"}),e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"₹ 7,200"}),e.jsxs("div",{className:"flex flex-row justify-between w-full",children:[e.jsxs("div",{className:"flex items-center",title:"Target",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"mr-2 bi bi-calendar-check",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),e.jsx("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"})]})," ",e.jsx("span",{className:"font-medium",children:" Today"})]}),e.jsx("div",{className:"flex items-center text-red-500",children:"-15%"})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 space-x-5 ml-5 mr-10",children:[e.jsx("div",{className:"col-span-1 rounded-xl shadow-xl p-1 bg-white",children:e.jsx(S,{chartType:"PieChart",data:l,options:m,width:"100%",height:"400px"})}),e.jsx("div",{className:"col-span-1 rounded-xl shadow-xl p-4 bg-white w-full",children:e.jsx(S,{chartType:"Bar",data:x,options:b,width:"100%",height:"400px"})})]}),e.jsx("div",{className:"m-5 border rounded-lg shadow-lg pb-3 bg-white mb-20",children:f?e.jsx(q,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"45",visible:!0}):e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-gray-800 font-semibold text-center text-4xl py-2 mx-2",children:"Transaction History"}),e.jsx("p",{className:"border-b"}),e.jsxs("div",{className:"flex m-3 space-x-5",children:[e.jsxs("div",{className:"bg-sky-300 shadow-lg p-3 rounded-md",children:[e.jsxs("p",{className:"font-semibold text-3xl",children:[" ",(N=(C=g==null?void 0:g.data)==null?void 0:C.data)==null?void 0:N.length]}),e.jsx("p",{className:"text-sm font-semibold",children:"No of Transactions "})]}),e.jsxs("div",{className:"bg-green-300 shadow-lg p-3 rounded-md",children:[e.jsxs("p",{className:"font-semibold text-3xl",children:[e.jsx("span",{className:"text-lg mx-1",children:"₹"}),"46430",e.jsx("span",{className:"text-lg",children:".00"})]}),e.jsx("p",{className:"text-sm font-semibold",children:"Total Success Amount"})]}),e.jsxs("div",{className:"bg-red-300 shadow-lg p-3 rounded-md",children:[e.jsxs("p",{className:"font-semibold text-3xl",children:[" ",e.jsx("span",{className:"text-lg mx-1",children:"₹"}),"5036",e.jsx("span",{className:"text-lg",children:".00"})]}),e.jsx("p",{className:"text-sm font-semibold",children:"Total Failed Amount"})]})]}),e.jsx("div",{children:e.jsx("div",{className:"",children:!f&&e.jsx(me,{columns:p,data:(y=g==null?void 0:g.data)==null?void 0:y.data})})})]})}),e.jsx("div",{className:"mb-40"})]})]})}export{fe as default};
