import{J as u,r as i,j as e,L as m,a8 as g,F as p,a9 as j,S as t,a as f,T as r,av as y,V as w,b,aa as k,W as v}from"./index-d663135d.js";import{u as F}from"./use-router-70a1e0d2.js";function P(){const l=u(),a=F(),[n,d]=i.useState(""),[c,o]=i.useState(!1),h=async()=>{o(!0);try{if(!(await fetch("http://65.1.233.188:9000/api/v1/admin/forgot-password",{method:"POST",body:JSON.stringify({email:n}),headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to send password reset link");alert("Password reset link sent. Please check your email."),a.push("/login")}catch(s){alert(`Error: ${s.message}`)}finally{o(!1)}},x=e.jsxs(e.Fragment,{children:[e.jsx(t,{spacing:3,children:e.jsx(b,{name:"email",label:"Email address",value:n,onChange:s=>d(s.target.value)})}),e.jsx(k,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:h,loading:c,sx:{mt:3},children:"Send Password Reset Link"})]});return e.jsxs(m,{sx:{...g({color:p(l.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(j,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(t,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(f,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(r,{variant:"h4",children:"Forgot Password"}),e.jsx(r,{variant:"body2",sx:{mt:2,mb:5},children:"Enter your email address and we will send you a link to reset your password."}),e.jsx(y,{sx:{my:3},children:e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Please fill the form below"})}),x,e.jsx(t,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{mt:3},children:e.jsx(w,{variant:"subtitle2",underline:"hover",onClick:()=>a.push("/login"),sx:{cursor:"pointer"},children:"Back to login"})})]})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx("title",{children:" Forgot Password "})}),e.jsx(P,{})]})}export{E as default};
