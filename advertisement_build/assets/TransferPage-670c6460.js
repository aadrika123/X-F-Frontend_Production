import{r as u,h as y,W as C,d as F,e as H,ar as t,j as T,B as V,P as W}from"./index-212f53a0.js";function z(){const[v,i]=u.useState(!1),d=y(),{api_getFreeMenuList:w}=W(),{setmenuList:U}=u.useContext(C);u.useEffect(()=>{let l=window.localStorage.getItem("token");if(i(!0),l==null){d("/");return}q()},[]);const q=()=>{let l={moduleId:5};console.log("api header to login..."),F.post(w,l,H()).then(function(a){var c,m,g,e,f,o,r,L,h,x,D,I,N,b,S,j,A,B,E,M,P,k;console.log("fetched menu list.....",a),a.data.status==!0?(t("menuList",(m=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:m.permission),t("userName",(f=(e=(g=a==null?void 0:a.data)==null?void 0:g.data)==null?void 0:e.userDetails)==null?void 0:f.userName),t("roles",(L=(r=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:r.userDetails)==null?void 0:L.roles),t("userUlbName",(D=(x=(h=a==null?void 0:a.data)==null?void 0:h.data)==null?void 0:x.userDetails)==null?void 0:D.ulb),t("userMobile",(b=(N=(I=a==null?void 0:a.data)==null?void 0:I.data)==null?void 0:N.userDetails)==null?void 0:b.mobileNo),t("userEmail",(A=(j=(S=a==null?void 0:a.data)==null?void 0:S.data)==null?void 0:j.userDetails)==null?void 0:A.email),t("userImage",(M=(E=(B=a==null?void 0:a.data)==null?void 0:B.data)==null?void 0:E.userDetails)==null?void 0:M.imageUrl),U((k=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:k.permission),d("/home")):console.log("false..."),i(!0)}).catch(function(a){console.log("--2--login error...",a),i(!0)})};if(v)return T(V,{})}export{z as default};
