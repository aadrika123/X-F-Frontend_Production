import{v as w}from"./index-hiQLm8TA.js";var h={exports:{}};(function(c){(function(){var u=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],f=typeof window<"u",g=f&&window.mozInnerScreenX!=null;function v(r,l,p){if(!f)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var n=p&&p.debug||!1;if(n){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var t=document.createElement("div");t.id="input-textarea-caret-position-mirror-div",document.body.appendChild(t);var e=t.style,o=window.getComputedStyle?window.getComputedStyle(r):r.currentStyle,d=r.nodeName==="INPUT";e.whiteSpace="pre-wrap",d||(e.wordWrap="break-word"),e.position="absolute",n||(e.visibility="hidden"),u.forEach(function(s){d&&s==="lineHeight"?e.lineHeight=o.height:e[s]=o[s]}),g?r.scrollHeight>parseInt(o.height)&&(e.overflowY="scroll"):e.overflow="hidden",t.textContent=r.value.substring(0,l),d&&(t.textContent=t.textContent.replace(/\s/g," "));var i=document.createElement("span");i.textContent=r.value.substring(l)||".",t.appendChild(i);var b={top:i.offsetTop+parseInt(o.borderTopWidth),left:i.offsetLeft+parseInt(o.borderLeftWidth),height:parseInt(o.lineHeight)};return n?i.style.backgroundColor="#aaa":document.body.removeChild(t),b}c.exports=v})()})(h);var x=h.exports;const C=w(x);export{C as $};
