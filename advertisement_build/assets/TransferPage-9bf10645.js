import{r as u,g as q,V as y,d as C,e as F,al as t,j as H,i as T,P as _}from"./index-1b7f21c2.js";function G(){const[w,i]=u.useState(!1),d=q(),{api_getFreeMenuList:B}=_(),{setmenuList:U}=u.useContext(y);u.useEffect(()=>{let l=window.localStorage.getItem("token");if(i(!0),l==null){d("/");return}V()},[]);const V=()=>{let l={moduleId:5};console.log("api header to login..."),C.post(B,l,F()).then(function(a){var c,g,m,e,f,o,L,r,h,x,D,I,N,b,S,j,A,E,M,P,k,v;console.log("fetched menu list.....",a),a.data.status==!0?(t("menuList",(g=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:g.permission),t("userName",(f=(e=(m=a==null?void 0:a.data)==null?void 0:m.data)==null?void 0:e.userDetails)==null?void 0:f.userName),t("roles",(r=(L=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:L.userDetails)==null?void 0:r.roles),t("userUlbName",(D=(x=(h=a==null?void 0:a.data)==null?void 0:h.data)==null?void 0:x.userDetails)==null?void 0:D.ulb),t("userMobile",(b=(N=(I=a==null?void 0:a.data)==null?void 0:I.data)==null?void 0:N.userDetails)==null?void 0:b.mobileNo),t("userEmail",(A=(j=(S=a==null?void 0:a.data)==null?void 0:S.data)==null?void 0:j.userDetails)==null?void 0:A.email),t("userImage",(P=(M=(E=a==null?void 0:a.data)==null?void 0:E.data)==null?void 0:M.userDetails)==null?void 0:P.imageUrl),U((v=(k=a==null?void 0:a.data)==null?void 0:k.data)==null?void 0:v.permission),d("/home")):console.log("false..."),i(!0)}).catch(function(a){console.log("--2--login error...",a),i(!0)})};if(w)return H(T,{})}export{G as default};