import{H as y,ad as v,r as i,j as s,K as e,ak as w,E as I,al as k,S as r,a as L,T as S,b as x,ac as C,a2 as P,I as E,aa as F,am as W,q as B,W as T}from"./index-9310a519.js";function z(){const p=y(),l=v(),[a,h]=i.useState(!1),[c,u]=i.useState(""),[g,m]=i.useState(""),[j,d]=i.useState(!1),b=async t=>{t.preventDefault(),d(!0);try{const o=await B.post("http://65.1.233.188:9000/api/v1/admin/login",{email:c,password:g}),{data:n}=o;n.meta.status?(localStorage.setItem("authKey",n.token),l("/")):alert(n.meta.msg)}catch(o){console.error("Login error:",o),alert("Error logging in. Please check your credentials and try again.")}finally{d(!1)}},f=s.jsxs(s.Fragment,{children:[s.jsxs(r,{spacing:3,children:[s.jsx(x,{name:"email",label:"Email address",value:c,onChange:t=>u(t.target.value),fullWidth:!0}),s.jsx(x,{name:"password",label:"Password",type:a?"text":"password",value:g,onChange:t=>m(t.target.value),fullWidth:!0,InputProps:{endAdornment:s.jsx(C,{position:"end",children:s.jsx(P,{onClick:()=>h(!a),edge:"end",children:s.jsx(E,{icon:a?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),s.jsx(r,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:s.jsx(F,{variant:"subtitle2",underline:"hover",onClick:()=>l("/forgot-password"),children:"Forgot password?"})}),s.jsx(W,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",sx:{bgcolor:"#40189d"},loading:j,onClick:b,children:"Login"})]});return s.jsxs(e,{sx:{...w({color:I(p.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1,position:"relative"},children:[s.jsx(e,{sx:{position:"absolute",top:"60%",left:"20%"},children:s.jsx("img",{src:"/public/assets/images/login/cash.png",alt:""})}),s.jsx(e,{sx:{position:"absolute",top:"20%",right:"20%"},children:s.jsx("img",{src:"/public/assets/images/login/grocery.png",alt:""})}),s.jsx(e,{sx:{position:"absolute",top:"20%",left:"10%"},children:s.jsx("img",{src:"/public/assets/images/login/grocery1.png",alt:""})}),s.jsx(e,{sx:{position:"absolute",top:"70%",right:"10%"},children:s.jsx("img",{src:"/public/assets/images/login/toys.png",alt:""})}),s.jsx(e,{sx:{position:"absolute",top:"10%",right:"50%"},children:s.jsx("img",{src:"/public/assets/images/login/biscuit.png",alt:""})}),s.jsx(e,{sx:{position:"absolute",top:"80%",right:"40%"},children:s.jsx("img",{src:"/public/assets/images/login/counter.png",alt:""})}),s.jsx(k,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),s.jsx(r,{alignItems:"center",justifyContent:"center",sx:{height:1,bgcolor:"#40189d"},children:s.jsxs(L,{sx:{p:5,width:1,maxWidth:420,overflow:"hidden",position:"relative"},children:[s.jsx(e,{sx:{position:"absolute",top:-35,right:-35,height:"100px",width:"100px",borderRadius:40,bgcolor:"#40189da3",zIndex:99}}),s.jsx(e,{sx:{position:"absolute",top:-45,right:-45,height:"100px",width:"100px",borderRadius:40,bgcolor:"#40189d",zIndex:999}}),s.jsx(S,{variant:"h4",sx:{marginBottom:2,textAlign:"center",color:"#40189d"},children:"Sign in"}),f]})})]})}function R(){return s.jsxs(s.Fragment,{children:[s.jsx(T,{children:s.jsx("title",{children:" Login | Minimal UI "})}),s.jsx(z,{})]})}export{R as default};
