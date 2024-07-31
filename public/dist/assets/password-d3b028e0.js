import{H as C,r as o,j as s,K as S,ak as k,E as I,al as F,S as i,a as E,T as d,am as T,o as u,ad as w,a3 as x,I as m,ab as R,an as A,W as K}from"./index-ec1580f4.js";import{u as N}from"./use-router-6679513a.js";function B(){const p=C(),l=N(),[e,c]=o.useState(!1),[n,f]=o.useState(""),[h,g]=o.useState(""),[j,a]=o.useState(!1),y=async()=>{if(a(!0),n!==h){alert("New password and confirm password do not match."),a(!1);return}const t=localStorage.getItem("authKey");if(!t){alert("Auth key is missing. Please log in again."),a(!1);return}try{const r=await fetch("http://65.1.233.188:9000/api/v1/admin/reset-admin-password",{method:"POST",body:JSON.stringify({password:n}),headers:{"Content-Type":"application/json",authKey:`${t}`}}),b=await r.json();if(!r.ok)throw new Error(b.message||"Failed to reset password");alert("Password reset successful. Please log in with your new password."),l.push("/login")}catch(r){alert(`Error: ${r.message}`)}finally{a(!1)}},P=()=>{l.push("/forgot-password")},v=s.jsxs(s.Fragment,{children:[s.jsxs(i,{spacing:3,children:[s.jsx(u,{name:"newPassword",label:"New Password",type:e?"text":"password",value:n,onChange:t=>f(t.target.value),InputProps:{endAdornment:s.jsx(w,{position:"end",children:s.jsx(x,{onClick:()=>c(!e),edge:"end",children:s.jsx(m,{icon:e?"eva:eye-fill":"eva:eye-off-fill"})})})}}),s.jsx(u,{name:"confirmPassword",label:"Confirm Password",type:e?"text":"password",value:h,onChange:t=>g(t.target.value),InputProps:{endAdornment:s.jsx(w,{position:"end",children:s.jsx(x,{onClick:()=>c(!e),edge:"end",children:s.jsx(m,{icon:e?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),s.jsx(i,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:s.jsx(R,{variant:"subtitle2",underline:"hover",onClick:P,sx:{cursor:"pointer"},children:"Forgot Password?"})}),s.jsx(A,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:y,loading:j,children:"Reset Password"})]});return s.jsxs(S,{sx:{...k({color:I(p.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[s.jsx(F,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),s.jsx(i,{alignItems:"center",justifyContent:"center",sx:{height:1},children:s.jsxs(E,{sx:{p:5,width:1,maxWidth:420},children:[s.jsx(d,{variant:"h4",children:"Reset Password"}),s.jsx(d,{variant:"body2",sx:{mt:2,mb:5},children:"Enter your new password and confirm it to reset your password."}),s.jsx(T,{sx:{my:3},children:s.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Please fill the form below"})}),v]})})]})}function O(){return s.jsxs(s.Fragment,{children:[s.jsx(K,{children:s.jsx("title",{children:" Password "})}),s.jsx(B,{})]})}export{O as default};
