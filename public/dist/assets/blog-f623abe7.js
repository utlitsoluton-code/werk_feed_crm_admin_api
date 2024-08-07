import{Q as n,j as e,R as L,S as c,I as h,T as d,U as F,a as W,L as p,F as G,V as O,X as E,P as l,b as x,Y as R,A as z,Z as M,C as U,B as V,W as H}from"./index-77777200.js";import{f as N,G as v}from"./format-number-a3f21772.js";import{I as _}from"./InputAdornment-61d70b10.js";const q=["Whiteboard Templates By Industry Leaders","Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!","Designify Agency Landing Page Design","✨What is Done is Done ✨","Fresh Prince","Six Socks Studio","vincenzo de cotiis’ crossing over showcases a research on contamination","Simple, Great Looking Animations in Your Project | Video Tutorial","40 Free Serif Fonts for Digital Designers","Examining the Evolution of the Typical Web Design Client","Katie Griffin loves making that homey art","The American Dream retold through mid-century railroad graphics","Illustration System Design","CarZio-Delivery Driver App SignIn/SignUp","How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna","Tylko Organise effortlessly -3D & Motion Design","RAYO ?? A expanded visual arts festival identity","Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover","Inside the Mind of Samuel Day","Portfolio Review: Is This Portfolio Too Creative?","Akkers van Margraten","Gradient Ticket icon","Here’s a Dyson motorcycle concept that doesn’t ‘suck’!","How to Animate a SVG with border-image"],g=[...Array(23)].map((i,t)=>({id:n.string.uuid(),cover:`/assets/images/covers/cover_${t+1}.jpg`,title:q[t+1],createdAt:n.date.past(),view:n.number.int(99999),comment:n.number.int(99999),share:n.number.int(99999),favorite:n.number.int(99999),author:{name:n.person.fullName(),avatarUrl:`/assets/images/avatars/avatar_${t+1}.jpg`}}));function b({post:i,index:t}){const{cover:a,title:u,view:j,comment:w,share:I,author:m,createdAt:T}=i,o=t===0,r=t===1||t===2,S=e.jsx(L,{alt:m.name,src:m.avatarUrl,sx:{zIndex:9,width:32,height:32,position:"absolute",left:s=>s.spacing(3),bottom:s=>s.spacing(-2),...(o||r)&&{zIndex:9,top:24,left:24,width:40,height:40}}}),A=e.jsx(O,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...o&&{typography:"h5",height:60},...(o||r)&&{color:"common.white"}},children:u}),P=e.jsx(c,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[{number:w,icon:"eva:message-circle-fill"},{number:j,icon:"eva:eye-fill"},{number:I,icon:"eva:share-fill"}].map((s,B)=>e.jsxs(c,{direction:"row",sx:{...(o||r)&&{opacity:.48,color:"common.white"}},children:[e.jsx(h,{width:16,icon:s.icon,sx:{mr:.5}}),e.jsx(d,{variant:"caption",children:N(s.number)})]},B))}),D=e.jsx(p,{component:"img",alt:u,src:a,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),k=e.jsx(d,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...(o||r)&&{opacity:.48,color:"common.white"}},children:F(T)}),C=e.jsx(E,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...(o||r)&&{display:"none"}}});return e.jsx(v,{xs:12,sm:o?12:6,md:o?6:3,children:e.jsxs(W,{children:[e.jsxs(p,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...(o||r)&&{pt:"calc(100% * 4 / 3)","&:after":{top:0,content:"''",width:"100%",height:"100%",position:"absolute",bgcolor:s=>G(s.palette.grey[900],.72)}},...o&&{pt:{xs:"calc(100% * 4 / 3)",sm:"calc(100% * 3 / 4.66)"}}},children:[C,S,D]}),e.jsxs(p,{sx:{p:s=>s.spacing(4,3,3,3),...(o||r)&&{width:1,bottom:0,position:"absolute"}},children:[k,A,P]})]})})}b.propTypes={post:l.object.isRequired,index:l.number};f.propTypes={options:l.array,onSort:l.func};function f({options:i,onSort:t}){return e.jsx(x,{select:!0,size:"small",value:"latest",onChange:t,children:i.map(a=>e.jsx(R,{value:a.value,children:a.label},a.value))})}y.propTypes={posts:l.array.isRequired};function y({posts:i}){return e.jsx(z,{sx:{width:280},autoHighlight:!0,popupIcon:null,slotProps:{paper:{sx:{width:320,[`& .${M.option}`]:{typography:"body2"}}}},options:i,getOptionLabel:t=>t.title,isOptionEqualToValue:(t,a)=>t.id===a.id,renderInput:t=>e.jsx(x,{...t,placeholder:"Search post...",InputProps:{...t.InputProps,startAdornment:e.jsx(_,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}})})}function Y(){return e.jsxs(U,{children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(d,{variant:"h4",children:"Blog"}),e.jsx(V,{variant:"contained",color:"inherit",startIcon:e.jsx(h,{icon:"eva:plus-fill"}),children:"New Post"})]}),e.jsxs(c,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(y,{posts:g}),e.jsx(f,{options:[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}]})]}),e.jsx(v,{container:!0,spacing:3,children:g.map((i,t)=>e.jsx(b,{post:i,index:t},i.id))})]})}function K(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Blog | Minimal UI "})}),e.jsx(Y,{})]})}export{K as default};
