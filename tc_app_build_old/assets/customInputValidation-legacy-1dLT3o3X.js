System.register([],(function(e,a){"use strict";return{execute:function(){e("c",(function(e,a){if(a.includes("mobile")){var t=e.target.value;t.length>10&&(e.target.value=t.slice(0,10))}if(a.includes("zip")){var r=e.target.value;r.length>6&&(e.target.value=r.slice(0,6))}if(a.includes("aadhar")){var l=e.target.value;l.length>12&&(e.target.value=l.slice(0,12))}if(a.includes("removeDoubleSpace")){var u=e.target.value;e.target.value=u.replace(/\s+/g," ")}if(a.includes("removeSpecialCharacter")){var v=e.target.value;e.target.value=v.replace(/[^a-zA-Z0-9]/g,"")}if(a.includes("removeSpecialCharacterExceptSpace")){var c=e.target.value;e.target.value=c.replace(/[^a-zA-Z0-9 ]/g,"")}if(a.includes("removeSpecialCharacterExceptSpaceAndDot")){var i=e.target.value;e.target.value=i.replace(/[^a-zA-Z0-9 .]/g,"")}if(a.includes("sqlInjectionGuard")){var g=e.target.value;(g.includes("drop")||g.includes("select"))&&(e.target.value="")}if(a.includes("address")){var s=e.target.value;e.target.value=s.replace(/[^a-zA-Z0-9 ,]/g,"")}if(a.includes("phone")){var n=e.target.value;e.target.value=n.replace(/[^0-9]/g,"")}if(a.includes("email")){var p=e.target.value;e.target.value=p.replace(/[^a-zA-Z0-9@.]/g,"")}if(a.includes("string")){var d=e.target.value;e.target.value=d.replace(/[^a-zA-Z ]/g,"")}if(a.includes("number")){var o=e.target.value;e.target.value=o.replace(/[^0-9]/g,"")}if(a.includes("removeDoubleQuote")){var f=e.target.value;e.target.value=f.replace(/"/g,"")}if(a.includes("removeSingleQuote")){var m=e.target.value;e.target.value=m.replace(/'/g,"")}if(a.includes("removeSpecialCharacterWithDoubleSpace")){var h=e.target.value;e.target.value=h.replace(/[^a-zA-Z0-9 ]/g,"");var A=e.target.value;e.target.value=A.replace(/\s+/g," ")}if(a.includes("CapitalFirstLetter")){var S=e.target.value;e.target.value=S.charAt(0).toUpperCase()+S.slice(1)}if(a.includes("UppercaseAfterSpace")){var z=e.target.value;e.target.value=z.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}if(a.includes("Uppercase")){var C=e.target.value;e.target.value=C.toUpperCase()}if(a.includes("removeSpace")){var Z=e.target.value;e.target.value=Z.replace(/\s+/g,"")}if(a.includes("password")){var b=e.target.value;e.target.value=b.replace(/[^a-zA-Z0-9@#$%^&*]/g,"")}if(a.includes("Lowercase")){var U=e.target.value;e.target.value=U.toLowerCase()}if(a.includes("none")){var D=e.target.value;e.target.value=D}}))}}}));
