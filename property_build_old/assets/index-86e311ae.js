import{r as b,C as w}from"./index-3617a985.js";var u={};Object.defineProperty(u,"__esModule",{value:!0});var y=function(){function t(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=b,v=d(f),k=w,a=d(k);function d(t){return t&&t.__esModule?t:{default:t}}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g={table:a.default.string.isRequired,filename:a.default.string.isRequired,sheet:a.default.string.isRequired,id:a.default.string,className:a.default.string,buttonText:a.default.string},O={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},s=function(t){_(e,t);function e(n){E(this,e);var o=T(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return o.handleDownload=o.handleDownload.bind(o),o}return y(e,[{key:"handleDownload",value:function(){if(!document||document.getElementById(this.props.table).nodeType!==1||document.getElementById(this.props.table).nodeName!=="TABLE")return null;var o=document.getElementById(this.props.table).outerHTML,r=String(this.props.sheet),i=String(this.props.filename)+".xls",c="data:application/vnd.ms-excel;base64,",m='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{table}</body></html>',h={worksheet:r||"Worksheet",table:o};if(window.navigator.msSaveOrOpenBlob){var p=['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>'+o+"</body></html>"],x=new Blob(p);return document.getElementById("react-html-table-to-excel").click()(function(){window.navigator.msSaveOrOpenBlob(x,i)}),!0}var l=window.document.createElement("a");return l.href=c+e.base64(e.format(m,h)),l.download=i,document.body.appendChild(l),l.click(),document.body.removeChild(l),!0}},{key:"render",value:function(){return v.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(o){return window.btoa(unescape(encodeURIComponent(o)))}},{key:"format",value:function(o,r){return o.replace(/{(\w+)}/g,function(i,c){return r[c]})}}]),e}(f.Component);s.propTypes=g;s.defaultProps=O;var R=u.default=s;export{R as _};