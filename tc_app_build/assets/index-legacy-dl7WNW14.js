System.register(["./index-legacy-7j04T4Xw.js"],(function(e,t){"use strict";var o;return{setters:[function(e){o=e.v}],execute:function(){var t=document.createElement("style");t.textContent="._ReactTransliterate_1b0d4b{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.176);display:block;font-size:14px;list-style:none;padding:1px;text-align:left;z-index:20000;width:100%}._ReactTransliterate_1b0d4b>li{cursor:pointer;padding:10px;min-width:100px;background-color:#fff}._ReactTransliterate_1b0d4b>li:hover{background-color:red!important}._Active_1b0d4b{background-color:red!important;color:#ff0}\n",document.head.appendChild(t);var r={exports:{}};!function(e){var t,o,r;t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],o="undefined"!=typeof window,r=o&&null!=window.mozInnerScreenX,e.exports=function(e,n,i){if(!o)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=i&&i.debug||!1;if(d){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var l=document.createElement("div");l.id="input-textarea-caret-position-mirror-div",document.body.appendChild(l);var p=l.style,c=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,s="INPUT"===e.nodeName;p.whiteSpace="pre-wrap",s||(p.wordWrap="break-word"),p.position="absolute",d||(p.visibility="hidden"),t.forEach((function(e){s&&"lineHeight"===e?p.lineHeight=c.height:p[e]=c[e]})),r?e.scrollHeight>parseInt(c.height)&&(p.overflowY="scroll"):p.overflow="hidden",l.textContent=e.value.substring(0,n),s&&(l.textContent=l.textContent.replace(/\s/g," "));var f=document.createElement("span");f.textContent=e.value.substring(n)||".",l.appendChild(f);var g={top:f.offsetTop+parseInt(c.borderTopWidth),left:f.offsetLeft+parseInt(c.borderLeftWidth),height:parseInt(c.lineHeight)};return d?f.style.backgroundColor="#aaa":document.body.removeChild(l),g}}(r),e("$",o(r.exports))}}}));
