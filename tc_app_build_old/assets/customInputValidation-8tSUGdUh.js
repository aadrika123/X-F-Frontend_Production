const r=(a,l)=>{if(l.includes("mobile")){const e=a.target.value;e.length>10&&(a.target.value=e.slice(0,10))}if(l.includes("zip")){const e=a.target.value;e.length>6&&(a.target.value=e.slice(0,6))}if(l.includes("aadhar")){const e=a.target.value;e.length>12&&(a.target.value=e.slice(0,12))}if(l.includes("removeDoubleSpace")){const e=a.target.value;a.target.value=e.replace(/\s+/g," ")}if(l.includes("removeSpecialCharacter")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9]/g,"")}if(l.includes("removeSpecialCharacterExceptSpace")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9 ]/g,"")}if(l.includes("removeSpecialCharacterExceptSpaceAndDot")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9 .]/g,"")}if(l.includes("sqlInjectionGuard")){const e=a.target.value;(e.includes("drop")||e.includes("select"))&&(a.target.value="")}if(l.includes("address")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9 ,]/g,"")}if(l.includes("phone")){const e=a.target.value;a.target.value=e.replace(/[^0-9]/g,"")}if(l.includes("email")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9@.]/g,"")}if(l.includes("string")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z ]/g,"")}if(l.includes("number")){const e=a.target.value;a.target.value=e.replace(/[^0-9]/g,"")}if(l.includes("removeDoubleQuote")){const e=a.target.value;a.target.value=e.replace(/"/g,"")}if(l.includes("removeSingleQuote")){const e=a.target.value;a.target.value=e.replace(/'/g,"")}if(l.includes("removeSpecialCharacterWithDoubleSpace")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9 ]/g,"");const t=a.target.value;a.target.value=t.replace(/\s+/g," ")}if(l.includes("CapitalFirstLetter")){const e=a.target.value;a.target.value=e.charAt(0).toUpperCase()+e.slice(1)}if(l.includes("UppercaseAfterSpace")){const e=a.target.value;a.target.value=e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}if(l.includes("Uppercase")){const e=a.target.value;a.target.value=e.toUpperCase()}if(l.includes("removeSpace")){const e=a.target.value;a.target.value=e.replace(/\s+/g,"")}if(l.includes("password")){const e=a.target.value;a.target.value=e.replace(/[^a-zA-Z0-9@#$%^&*]/g,"")}if(l.includes("Lowercase")){const e=a.target.value;a.target.value=e.toLowerCase()}if(l.includes("none")){const e=a.target.value;a.target.value=e}};export{r as c};
