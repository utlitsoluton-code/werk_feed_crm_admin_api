import{j as e,g as W,h as p,$ as re,T as P,P as a,r as d,a0 as ae,a1 as R,a2 as q,a3 as le,Y as N,I as f,D as ie,n as oe,o as ce,L as O,b as g,p as de,B as T,f as ue,i as he,a4 as me,a5 as xe,a6 as U,C as pe,S as ge,a as V,c as je,d as fe,e as Ce,k as be,m as ye,N as Se,a7 as ve,q as M,W as we}from"./index-d663135d.js";import{I as Te}from"./InputAdornment-14b35018.js";function _({query:t}){return e.jsx(W,{children:e.jsx(p,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(re,{sx:{textAlign:"center"},children:[e.jsx(P,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(P,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',t,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}_.propTypes={query:a.string};function B({selected:t,name:s,client_code:n,email:i,phone:o,address:u,handleClick:j,suctomerId:C}){const[l,S]=d.useState(null),[h,I]=d.useState(!1),[m,A]=d.useState({}),k=ae(),v=()=>{S(null)},D=()=>{A({name:s,client_code:n,email:i,phone:o,address:u}),I(!0)},E=()=>{k(`/credit/?suctomerId=${C}`)},w=()=>{I(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(W,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,children:[e.jsx(p,{children:n}),e.jsx(p,{children:s}),e.jsx(p,{children:o}),e.jsx(p,{children:i}),e.jsx(p,{children:u}),e.jsx(p,{children:e.jsx(R,{onClick:D,children:e.jsx(q,{})})}),e.jsx(p,{children:e.jsx(R,{onClick:E,children:e.jsx(q,{})})})]}),e.jsxs(le,{open:!!l,anchorEl:l,onClose:v,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(N,{onClick:v,children:[e.jsx(f,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(N,{onClick:v,sx:{color:"error.main"},children:[e.jsx(f,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]}),e.jsxs(ie,{open:h,onClose:w,maxWidth:"md",fullWidth:!0,children:[e.jsx(oe,{children:"Customer Details"}),e.jsx(ce,{children:m&&e.jsxs(O,{sx:{display:"flex",flexDirection:"column",gap:2,p:2},children:[e.jsx(g,{label:"Name",value:m.name||"",fullWidth:!0,InputProps:{readOnly:!0}}),e.jsx(g,{label:"Client Code",value:m.client_code||"",fullWidth:!0,InputProps:{readOnly:!0}}),e.jsx(g,{label:"Phone",value:m.phone||"",fullWidth:!0,InputProps:{readOnly:!0}}),e.jsx(g,{label:"Email",value:m.email||"",fullWidth:!0,InputProps:{readOnly:!0}}),e.jsx(g,{label:"Address",value:m.address||"",fullWidth:!0,InputProps:{readOnly:!0}})]})}),e.jsxs(de,{sx:{justifyContent:"center"},children:[e.jsx(T,{onClick:()=>k(`/credit/?suctomerId=${C}`),color:"primary",children:"View Customer Credits"}),e.jsx(T,{onClick:w,color:"primary",children:"Close"})]})]})]})}B.propTypes={name:a.string.isRequired,client_code:a.string.isRequired,email:a.string.isRequired,address:a.string.isRequired,phone:a.string.isRequired,selected:a.bool.isRequired,handleClick:a.func.isRequired,suctomerId:a.string.isRequired};const Pe={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function $(t,s,n){return t[n]===null?1:s[n]===null||s[n]<t[n]?-1:s[n]>t[n]?1:0}function Ie(t,s){return t==="desc"?(n,i)=>$(n,i,s):(n,i)=>-$(n,i,s)}function Ae({inputData:t,comparator:s,filterName:n}){const i=t.map((o,u)=>[o,u]);return i.sort((o,u)=>{const j=s(o[0],u[0]);return j!==0?j:o[1]-u[1]}),t=i.map(o=>o[0]),n&&(t=t.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),t}function K({order:t,orderBy:s,rowCount:n,headLabel:i,numSelected:o,onRequestSort:u,onSelectAllClick:j}){const C=l=>S=>{u(S,l)};return e.jsx(ue,{children:e.jsx(W,{children:i.map(l=>e.jsx(p,{align:l.align||"left",sortDirection:s===l.id?t:!1,sx:{width:l.width,minWidth:l.minWidth},children:e.jsxs(he,{hideSortIcon:!0,active:s===l.id,direction:s===l.id?t:"asc",onClick:C(l.id),children:[l.label,s===l.id?e.jsx(O,{sx:{...Pe},children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},l.id))})})}K.propTypes={order:a.oneOf(["asc","desc"]),orderBy:a.string,rowCount:a.number,headLabel:a.array,numSelected:a.number,onRequestSort:a.func,onSelectAllClick:a.func};function z({emptyRows:t,height:s}){return t?e.jsx(W,{sx:{...s&&{height:s*t}},children:e.jsx(p,{colSpan:9})}):null}z.propTypes={emptyRows:a.number,height:a.number};function H({numSelected:t,filterName:s,onFilterName:n}){return e.jsxs(me,{sx:{height:96,display:"flex",justifyContent:"space-between",p:i=>i.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?e.jsxs(P,{component:"div",variant:"subtitle1",children:[t," selected"]}):e.jsx(xe,{value:s,onChange:n,placeholder:"Search user...",startAdornment:e.jsx(Te,{position:"start",children:e.jsx(f,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),t>0?e.jsx(U,{title:"Delete",children:e.jsx(R,{children:e.jsx(f,{icon:"eva:trash-2-fill"})})}):e.jsx(U,{title:"Filter list",children:e.jsx(R,{children:e.jsx(f,{icon:"ic:round-filter-list"})})})]})}H.propTypes={numSelected:a.number,filterName:a.string,onFilterName:a.func};function ke(){const[t,s]=d.useState(0),[n,i]=d.useState("asc"),[o,u]=d.useState([]),[j,C]=d.useState("name"),[l,S]=d.useState(""),[h,I]=d.useState(5),[m,A]=d.useState([]),[k,v]=d.useState(0),[D,E]=d.useState(!1),[w,Y]=d.useState({firstName:"",surname:"",phone:"",email:"",address:"",userType:"RECEIVABLE"});d.useEffect(()=>{(async()=>{try{const c=localStorage.getItem("authKey"),x=await M.get("http://65.1.233.188:9000/api/v1/admin/user/get-all-customer",{headers:{authKey:`${c}`}}),{data:y}=x.data;A(y),v(x.data.totalLength)}catch(c){console.error("There was an error fetching the users!",c)}})()},[t,h]);const G=()=>{E(!0)},L=()=>{E(!1)},J=(r,c)=>{c!==""&&(i(j===c&&n==="asc"?"desc":"asc"),C(c))},Q=r=>{if(r.target.checked){const c=m.map(x=>x.firstName);u(c);return}u([])},X=(r,c)=>{s(c)},Z=r=>{s(0),I(parseInt(r.target.value,10))},ee=r=>{s(0),S(r.target.value)},F=Ae({inputData:m,comparator:Ie(n,j),filterName:l}),te=!F.length&&!!l,b=r=>{const{name:c,value:x}=r.target;Y(y=>({...y,[c]:x}))},se=async r=>{r.preventDefault();const c=localStorage.getItem("authKey");try{const y=(await M.post("http://65.1.233.188:9000/api/v1/admin/user/create-customer",w,{headers:{authKey:`${c}`}})).data.data;console.log({newUser:y}),A(ne=>[...ne,y]),L()}catch(x){console.error("There was an error creating the user!",x),alert("Error creating user")}};return d.useState(null),e.jsxs(pe,{children:[e.jsxs(ge,{direction:"row",alignItems:"center",justifyContent:"space-between",mt:5,mb:5,children:[e.jsx(P,{variant:"h4",children:"Customer"}),e.jsxs(V,{children:[e.jsx(T,{variant:"contained",color:"inherit",startIcon:e.jsx(f,{icon:"eva:plus-fill"}),onClick:G,children:"Add New Customer"}),e.jsx(T,{variant:"contained",color:"primary",sx:{marginLeft:5},startIcon:e.jsx(f,{icon:"eva:download-fill"}),onClick:()=>alert("Coming Soon !"),children:"Download Data"})]})]}),e.jsxs(V,{children:[e.jsx(H,{numSelected:o.length,filterName:l,onFilterName:ee}),e.jsx(je,{children:e.jsx(fe,{sx:{overflow:"unset",p:2},children:e.jsxs(Ce,{sx:{minWidth:800},children:[e.jsx(K,{order:n,orderBy:j,rowCount:m.length,numSelected:o.length,onRequestSort:J,onSelectAllClick:Q,headLabel:[{id:"client_code",label:"Client Code"},{id:"name",label:"Name",align:"center"},{id:"phone",label:"Phone"},{id:"email",label:"Email"},{id:"address",label:"Address"},{id:"View Details",label:"View Details"},{id:"View Credit",label:"View Credit"}]}),e.jsxs(be,{children:[F.slice(t*h,t*h+h).map(r=>e.jsx(B,{client_code:r.client_code,name:`${r.firstName} ${r.surname}`,phone:r.phone,email:r.email,address:r.address,suctomerId:r._id},r._id)),e.jsx(z,{height:h-F.slice(t*h,t*h+h).length}),te&&e.jsx(_,{colSpan:6})]})]})})}),e.jsx(ye,{rowsPerPageOptions:[5,10,25],component:"div",count:k,rowsPerPage:h,page:t,onPageChange:X,onRowsPerPageChange:Z})]}),e.jsx(Se,{open:D,onClose:L,children:e.jsxs(O,{sx:{p:3,width:400,mx:"auto",mt:10,mb:10,bgcolor:"background.paper"},children:[e.jsx(P,{variant:"h6",gutterBottom:!0,children:"Add New Customer"}),e.jsxs("form",{onSubmit:se,children:[e.jsx(g,{label:"First Name",name:"firstName",fullWidth:!0,margin:"normal",onChange:b}),e.jsx(g,{label:"Surname",name:"surname",fullWidth:!0,margin:"normal",onChange:b}),e.jsx(g,{label:"Phone",name:"phone",fullWidth:!0,margin:"normal",onChange:b}),e.jsx(g,{label:"Email",name:"email",fullWidth:!0,margin:"normal",onChange:b}),e.jsx(g,{label:"Address",name:"address",fullWidth:!0,margin:"normal",onChange:b}),e.jsxs(ve,{name:"userType",value:w.userType,onChange:b,fullWidth:!0,margin:"normal",children:[e.jsx(N,{value:"RECEIVABLE",children:"RECEIVABLE"}),e.jsx(N,{value:"PAYABLE",children:"PAYABLE"})]}),e.jsx(O,{sx:{display:"flex",justifyContent:"center",mt:2},children:e.jsx(T,{type:"submit",variant:"contained",color:"primary",children:"Add Customer"})})]})]})})]})}function Ne(){return e.jsxs(e.Fragment,{children:[e.jsx(we,{children:e.jsx("title",{children:" User  "})}),e.jsx(ke,{})]})}export{Ne as default};
