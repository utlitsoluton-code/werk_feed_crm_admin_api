import{q as se,s as ae,t as N,X as _,_ as d,r as m,v as ie,w as X,ao as Ne,ap as Ie,T as P,j as n,x as z,S as j,y as le,N as ce,aq as Qe,E as ee,ar as eo,Q as $e,Y as Ae,O as ge,as as oo,H as no,at as to,a8 as pe,au as ro,Z as so,I as W,P as g,K as oe,a as ao,ab as io,B as xe,av as lo,aw as co,M as uo,ax as po,a3 as ho,am as fo,c as mo,ay as xo,C as go,W as bo}from"./index-ec1580f4.js";import{a as je,G as Re}from"./format-number-c5145499.js";import{S as vo,L as Co,C as yo}from"./label-0e43cf7c.js";const jo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Ro=jo;function Fo(e){return ae("MuiFormControlLabel",e)}const So=se("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Q=So,wo=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ko=e=>{const{classes:o,disabled:t,labelPlacement:r,error:s,required:l}=e,p={root:["root",t&&"disabled",`labelPlacement${_(r)}`,s&&"error",l&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",s&&"error"]};return le(p,Fo,o)},Po=N("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${Q.label}`]:o.label},o.root,o[`labelPlacement${_(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Q.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${Q.label}`]:{[`&.${Q.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),No=N("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${Q.error}`]:{color:(e.vars||e).palette.error.main}})),Io=m.forwardRef(function(o,t){var r,s;const l=ie({props:o,name:"MuiFormControlLabel"}),{className:p,componentsProps:u={},control:a,disabled:i,disableTypography:x,label:c,labelPlacement:R="end",required:C,slotProps:$={}}=l,F=X(l,wo),h=Ne(),S=(r=i??a.props.disabled)!=null?r:h==null?void 0:h.disabled,k=C??a.props.required,b={disabled:S,required:k};["checked","name","onChange","value","inputRef"].forEach(T=>{typeof a.props[T]>"u"&&typeof l[T]<"u"&&(b[T]=l[T])});const y=Ie({props:l,muiFormControl:h,states:["error"]}),B=d({},l,{disabled:S,labelPlacement:R,required:k,error:y.error}),A=ko(B),M=(s=$.typography)!=null?s:u.typography;let w=c;return w!=null&&w.type!==P&&!x&&(w=n.jsx(P,d({component:"span"},M,{className:z(A.label,M==null?void 0:M.className),children:w}))),n.jsxs(Po,d({className:z(A.root,p),ownerState:B,ref:t},F,{children:[m.cloneElement(a,b),k?n.jsxs(j,{direction:"row",alignItems:"center",children:[w,n.jsxs(No,{ownerState:B,"aria-hidden":!0,className:A.asterisk,children:[" ","*"]})]}):w]}))}),re=Io;function $o(e){return ae("MuiFormGroup",e)}se("MuiFormGroup",["root","row","error"]);const Ao=["className","row"],Oo=e=>{const{classes:o,row:t,error:r}=e;return le({root:["root",t&&"row",r&&"error"]},$o,o)},Lo=N("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.row&&o.row]}})(({ownerState:e})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Mo=m.forwardRef(function(o,t){const r=ie({props:o,name:"MuiFormGroup"}),{className:s,row:l=!1}=r,p=X(r,Ao),u=Ne(),a=Ie({props:r,muiFormControl:u,states:["error"]}),i=d({},r,{row:l,error:a.error}),x=Oo(i);return n.jsx(Lo,d({className:z(x.root,s),ownerState:i,ref:t},p))}),Oe=Mo,To=ce(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Vo=ce(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),zo=N("span")({position:"relative",display:"flex"}),Bo=N(To)({transform:"scale(1)"}),Eo=N(Vo)(({theme:e,ownerState:o})=>d({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Le(e){const{checked:o=!1,classes:t={},fontSize:r}=e,s=d({},e,{checked:o});return n.jsxs(zo,{className:t.root,ownerState:s,children:[n.jsx(Bo,{fontSize:r,className:t.background,ownerState:s}),n.jsx(Eo,{fontSize:r,className:t.dot,ownerState:s})]})}const Ho=m.createContext(void 0),Me=Ho;function Go(){return m.useContext(Me)}function _o(e){return ae("MuiRadio",e)}const Do=se("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Fe=Do,Uo=["checked","checkedIcon","color","icon","name","onChange","size","className"],qo=e=>{const{classes:o,color:t,size:r}=e,s={root:["root",`color${_(t)}`,r!=="medium"&&`size${_(r)}`]};return d({},o,le(s,_o,o))},Wo=N(vo,{shouldForwardProp:e=>Qe(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`color${_(t.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ee(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${Fe.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${Fe.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Xo(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const Se=n.jsx(Le,{checked:!0}),we=n.jsx(Le,{}),Zo=m.forwardRef(function(o,t){var r,s;const l=ie({props:o,name:"MuiRadio"}),{checked:p,checkedIcon:u=Se,color:a="primary",icon:i=we,name:x,onChange:c,size:R="medium",className:C}=l,$=X(l,Uo),F=d({},l,{color:a,size:R}),h=qo(F),S=Go();let k=p;const b=eo(c,S&&S.onChange);let y=x;return S&&(typeof k>"u"&&(k=Xo(S.value,l.value)),typeof y>"u"&&(y=S.name)),n.jsx(Wo,d({type:"radio",icon:m.cloneElement(i,{fontSize:(r=we.props.fontSize)!=null?r:R}),checkedIcon:m.cloneElement(u,{fontSize:(s=Se.props.fontSize)!=null?s:R}),ownerState:F,classes:h,name:y,checked:k,onChange:b,ref:t,className:z(h.root,C)},$))}),he=Zo,Ko=["actions","children","defaultValue","name","onChange","value"],Yo=m.forwardRef(function(o,t){const{actions:r,children:s,defaultValue:l,name:p,onChange:u,value:a}=o,i=X(o,Ko),x=m.useRef(null),[c,R]=$e({controlled:a,default:l,name:"RadioGroup"});m.useImperativeHandle(r,()=>({focus:()=>{let h=x.current.querySelector("input:not(:disabled):checked");h||(h=x.current.querySelector("input:not(:disabled)")),h&&h.focus()}}),[]);const C=Ae(t,x),$=ge(p),F=m.useMemo(()=>({name:$,onChange(h){R(h.target.value),u&&u(h,h.target.value)},value:c}),[$,u,R,c]);return n.jsx(Me.Provider,{value:F,children:n.jsx(Oe,d({role:"radiogroup",ref:C},i,{children:s}))})}),fe=Yo,Jo=ce(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Qo=ce(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function en(e){return ae("MuiRating",e)}const on=se("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),J=on,nn=["value"],tn=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function rn(e,o,t){return e<o?o:e>t?t:e}function sn(e){const o=e.toString().split(".")[1];return o?o.length:0}function me(e,o){if(e==null)return e;const t=Math.round(e/o)*o;return Number(t.toFixed(sn(o)))}const an=e=>{const{classes:o,size:t,readOnly:r,disabled:s,emptyValueFocused:l,focusVisible:p}=e,u={root:["root",`size${_(t)}`,s&&"disabled",p&&"focusVisible",r&&"readOnly"],label:["label","pristine"],labelEmptyValue:[l&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return le(u,en,o)},ln=N("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${J.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${_(t.size)}`],t.readOnly&&o.readOnly]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${J.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${J.focusVisible} .${J.iconActive}`]:{outline:"1px solid #999"},[`& .${J.visuallyHidden}`]:Ro},o.size==="small"&&{fontSize:e.typography.pxToRem(18)},o.size==="large"&&{fontSize:e.typography.pxToRem(30)},o.readOnly&&{pointerEvents:"none"})),Te=N("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},o)=>[o.label,e.emptyValueFocused&&o.labelEmptyValueActive]})(({ownerState:e})=>d({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),cn=N("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.icon,t.iconEmpty&&o.iconEmpty,t.iconFilled&&o.iconFilled,t.iconHover&&o.iconHover,t.iconFocus&&o.iconFocus,t.iconActive&&o.iconActive]}})(({theme:e,ownerState:o})=>d({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),dn=N("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>oo(e)&&e!=="iconActive",overridesResolver:(e,o)=>{const{iconActive:t}=e;return[o.decimal,t&&o.iconActive]}})(({iconActive:e})=>d({position:"relative"},e&&{transform:"scale(1.2)"}));function un(e){const o=X(e,nn);return n.jsx("span",d({},o))}function ke(e){const{classes:o,disabled:t,emptyIcon:r,focus:s,getLabelText:l,highlightSelectedOnly:p,hover:u,icon:a,IconContainerComponent:i,isActive:x,itemValue:c,labelProps:R,name:C,onBlur:$,onChange:F,onClick:h,onFocus:S,readOnly:k,ownerState:b,ratingValue:y,ratingValueRounded:B}=e,A=p?c===y:c<=y,M=c<=u,w=c<=s,T=c===B,Z=ge(),E=n.jsx(cn,{as:i,value:c,className:z(o.icon,A?o.iconFilled:o.iconEmpty,M&&o.iconHover,w&&o.iconFocus,x&&o.iconActive),ownerState:d({},b,{iconEmpty:!A,iconFilled:A,iconHover:M,iconFocus:w,iconActive:x}),children:r&&!A?r:a});return k?n.jsx("span",d({},R,{children:E})):n.jsxs(m.Fragment,{children:[n.jsxs(Te,d({ownerState:d({},b,{emptyValueFocused:void 0}),htmlFor:Z},R,{children:[E,n.jsx("span",{className:o.visuallyHidden,children:l(c)})]})),n.jsx("input",{className:o.visuallyHidden,onFocus:S,onBlur:$,onChange:F,onClick:h,disabled:t,value:c,id:Z,type:"radio",name:C,checked:T})]})}const pn=n.jsx(Jo,{fontSize:"inherit"}),hn=n.jsx(Qo,{fontSize:"inherit"});function fn(e){return`${e} Star${e!==1?"s":""}`}const mn=m.forwardRef(function(o,t){const r=ie({name:"MuiRating",props:o}),{className:s,defaultValue:l=null,disabled:p=!1,emptyIcon:u=hn,emptyLabelText:a="Empty",getLabelText:i=fn,highlightSelectedOnly:x=!1,icon:c=pn,IconContainerComponent:R=un,max:C=5,name:$,onChange:F,onChangeActive:h,onMouseLeave:S,onMouseMove:k,precision:b=1,readOnly:y=!1,size:B="medium",value:A}=r,M=X(r,tn),w=ge($),[T,Z]=$e({controlled:A,default:l,name:"Rating"}),E=me(T,b),He=no(),[{hover:O,focus:ne},K]=m.useState({hover:-1,focus:-1});let D=E;O!==-1&&(D=O),ne!==-1&&(D=ne);const{isFocusVisibleRef:be,onBlur:Ge,onFocus:_e,ref:De}=to(),[Ue,de]=m.useState(!1),ve=m.useRef(),qe=Ae(De,ve,t),We=f=>{k&&k(f);const v=ve.current,{right:I,left:te}=v.getBoundingClientRect(),{width:U}=v.firstChild.getBoundingClientRect();let q;He.direction==="rtl"?q=(I-f.clientX)/(U*C):q=(f.clientX-te)/(U*C);let L=me(C*q+b/2,b);L=rn(L,b,C),K(H=>H.hover===L&&H.focus===L?H:{hover:L,focus:L}),de(!1),h&&O!==L&&h(f,L)},Xe=f=>{S&&S(f);const v=-1;K({hover:v,focus:v}),h&&O!==v&&h(f,v)},Ce=f=>{let v=f.target.value===""?null:parseFloat(f.target.value);O!==-1&&(v=O),Z(v),F&&F(f,v)},Ze=f=>{f.clientX===0&&f.clientY===0||(K({hover:-1,focus:-1}),Z(null),F&&parseFloat(f.target.value)===E&&F(f,null))},Ke=f=>{_e(f),be.current===!0&&de(!0);const v=parseFloat(f.target.value);K(I=>({hover:I.hover,focus:v}))},Ye=f=>{if(O!==-1)return;Ge(f),be.current===!1&&de(!1);const v=-1;K(I=>({hover:I.hover,focus:v}))},[Je,ye]=m.useState(!1),Y=d({},r,{defaultValue:l,disabled:p,emptyIcon:u,emptyLabelText:a,emptyValueFocused:Je,focusVisible:Ue,getLabelText:i,icon:c,IconContainerComponent:R,max:C,precision:b,readOnly:y,size:B}),V=an(Y);return n.jsxs(ln,d({ref:qe,onMouseMove:We,onMouseLeave:Xe,className:z(V.root,s,y&&"MuiRating-readOnly"),ownerState:Y,role:y?"img":null,"aria-label":y?i(D):null},M,{children:[Array.from(new Array(C)).map((f,v)=>{const I=v+1,te={classes:V,disabled:p,emptyIcon:u,focus:ne,getLabelText:i,highlightSelectedOnly:x,hover:O,icon:c,IconContainerComponent:R,name:w,onBlur:Ye,onChange:Ce,onClick:Ze,onFocus:Ke,ratingValue:D,ratingValueRounded:E,readOnly:y,ownerState:Y},U=I===Math.ceil(D)&&(O!==-1||ne!==-1);if(b<1){const q=Array.from(new Array(1/b));return n.jsx(dn,{className:z(V.decimal,U&&V.iconActive),ownerState:Y,iconActive:U,children:q.map((L,H)=>{const ue=me(I-1+(H+1)*b,b);return n.jsx(ke,d({},te,{isActive:!1,itemValue:ue,labelProps:{style:q.length-1===H?{}:{width:ue===D?`${(H+1)*b*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ue)})},I)}return n.jsx(ke,d({},te,{isActive:U,itemValue:I}),I)}),!y&&!p&&n.jsxs(Te,{className:z(V.label,V.labelEmptyValue),ownerState:Y,children:[n.jsx("input",{className:V.visuallyHidden,value:"",id:`${w}-empty`,type:"radio",name:w,checked:E==null,onFocus:()=>ye(!0),onBlur:()=>ye(!1),onChange:Ce}),n.jsx("span",{className:V.visuallyHidden,children:a})]})]}))}),Pe=mn,xn=["Nike Air Force 1 NDESTRUKT","Nike Space Hippie 04","Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear","Nike Blazer Low 77 Vintage","Nike ZoomX SuperRep Surge","Zoom Freak 2","Nike Air Max Zephyr","Jordan Delta","Air Jordan XXXV PF","Nike Waffle Racer Crater","Kyrie 7 EP Sisterhood","Nike Air Zoom BB NXT","Nike Air Force 1 07 LX","Nike Air Force 1 Shadow SE","Nike Air Zoom Tempo NEXT%","Nike DBreak-Type","Nike Air Max Up","Nike Air Max 270 React ENG","NikeCourt Royale","Nike Air Zoom Pegasus 37 Premium","Nike Air Zoom SuperRep","NikeCourt Royale","Nike React Art3mis","Nike React Infinity Run Flyknit A.I.R. Chaz Bear"],G=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"],gn=[...Array(24)].map((e,o)=>{const t=o+1;return{id:pe.string.uuid(),cover:`/assets/images/products/product_${t}.jpg`,name:xn[o],price:pe.number.int({min:4,max:99,precision:.01}),priceSale:t%3?null:pe.number.int({min:19,max:29,precision:.01}),colors:t===1&&G.slice(0,2)||t===2&&G.slice(1,3)||t===3&&G.slice(2,4)||t===4&&G.slice(3,6)||t===23&&G.slice(4,6)||t===24&&G.slice(5,6)||G,status:ro.sample(["sale","new","",""])}}),Ve=m.forwardRef(({colors:e,selected:o,onSelectColor:t,limit:r="auto",sx:s,...l},p)=>{const u=typeof o=="string",a=m.useCallback(i=>{if(u)i!==o&&t(i);else{const x=o.includes(i)?o.filter(c=>c!==i):[...o,i];t(x)}},[t,o,u]);return n.jsx(j,{ref:p,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...r!=="auto"&&{width:r*36,justifyContent:"flex-end"},...s},...l,children:e.map(i=>{const x=u?o===i:o.includes(i);return n.jsx(so,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{a(i)},children:n.jsx(j,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:i,borderRadius:"50%",border:c=>`solid 1px ${ee(c.palette.grey[500],.16)}`,...x&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${ee(i,.48)}`,outline:`solid 2px ${ee(i,.08)}`,transition:c=>c.transitions.create("all",{duration:c.transitions.duration.shortest})}},children:n.jsx(W,{width:x?12:0,icon:"eva:checkmark-fill",sx:{color:c=>c.palette.getContrastText(i),transition:c=>c.transitions.create("all",{duration:c.transitions.duration.shortest})}})})},i)})})});Ve.propTypes={colors:g.oneOfType([g.string,g.arrayOf(g.string)]),limit:g.number,onSelectColor:g.func,selected:g.oneOfType([g.string,g.arrayOf(g.string)]),sx:g.object};const bn=Ve;function ze({colors:e,limit:o=3,sx:t}){const r=e.slice(0,o),s=e.length-o;return n.jsxs(j,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:t,children:[r.map((l,p)=>n.jsx(oe,{sx:{ml:-.75,width:16,height:16,bgcolor:l,borderRadius:"50%",border:u=>`solid 2px ${u.palette.background.paper}`,boxShadow:u=>`inset -1px 1px 2px ${ee(u.palette.common.black,.24)}`}},l+p)),e.length>o&&n.jsx(oe,{component:"span",sx:{typography:"subtitle2"},children:`+${s}`})]})}ze.propTypes={colors:g.arrayOf(g.string),limit:g.number,sx:g.object};function Be({product:e}){const o=n.jsx(Co,{variant:"filled",color:e.status==="sale"&&"error"||"info",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:e.status}),t=n.jsx(oe,{component:"img",alt:e.name,src:e.cover,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),r=n.jsxs(P,{variant:"subtitle1",children:[n.jsx(P,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:e.priceSale&&je(e.priceSale)})," ",je(e.price)]});return n.jsxs(ao,{children:[n.jsxs(oe,{sx:{pt:"100%",position:"relative"},children:[e.status&&o,t]}),n.jsxs(j,{spacing:2,sx:{p:3},children:[n.jsx(io,{color:"inherit",underline:"hover",variant:"subtitle2",noWrap:!0,children:e.name}),n.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsx(ze,{colors:e.colors}),r]})]})]})}Be.propTypes={product:g.object};const vn=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function Cn(){const[e,o]=m.useState(null),t=s=>{o(s.currentTarget)},r=()=>{o(null)};return n.jsxs(n.Fragment,{children:[n.jsxs(xe,{disableRipple:!0,color:"inherit",onClick:t,endIcon:n.jsx(W,{icon:e?"eva:chevron-up-fill":"eva:chevron-down-fill"}),children:["Sort By: ",n.jsx(P,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:"Newest"})]}),n.jsx(lo,{open:!!e,anchorEl:e,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:{[`& .${co.root}`]:{p:0}}}},children:vn.map(s=>n.jsx(uo,{selected:s.value==="newest",onClick:r,children:s.label},s.value))})]})}const yn=["Men","Women","Kids"],jn=["All","Shose","Apparel","Accessories"],Rn=["up4Star","up3Star","up2Star","up1Star"],Fn=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],Sn=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function Ee({openFilter:e,onOpenFilter:o,onCloseFilter:t}){const r=n.jsxs(j,{spacing:1,children:[n.jsx(P,{variant:"subtitle2",children:"Gender"}),n.jsx(Oe,{children:yn.map(a=>n.jsx(re,{control:n.jsx(yo,{}),label:a},a))})]}),s=n.jsxs(j,{spacing:1,children:[n.jsx(P,{variant:"subtitle2",children:"Category"}),n.jsx(fe,{children:jn.map(a=>n.jsx(re,{value:a,control:n.jsx(he,{}),label:a},a))})]}),l=n.jsxs(j,{spacing:1,children:[n.jsx(P,{variant:"subtitle2",children:"Colors"}),n.jsx(bn,{name:"colors",selected:[],colors:Sn,onSelectColor:a=>[].includes(a),sx:{maxWidth:38*4}})]}),p=n.jsxs(j,{spacing:1,children:[n.jsx(P,{variant:"subtitle2",children:"Price"}),n.jsx(fe,{children:Fn.map(a=>n.jsx(re,{value:a.value,control:n.jsx(he,{}),label:a.label},a.value))})]}),u=n.jsxs(j,{spacing:1,children:[n.jsx(P,{variant:"subtitle2",children:"Rating"}),n.jsx(fe,{children:Rn.map((a,i)=>n.jsx(re,{value:a,control:n.jsx(he,{disableRipple:!0,color:"default",icon:n.jsx(Pe,{readOnly:!0,value:4-i}),checkedIcon:n.jsx(Pe,{readOnly:!0,value:4-i}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:{my:.5,borderRadius:1,"&:hover":{opacity:.48}}},a))})]});return n.jsxs(n.Fragment,{children:[n.jsx(xe,{disableRipple:!0,color:"inherit",endIcon:n.jsx(W,{icon:"ic:round-filter-list"}),onClick:o,children:"Filters "}),n.jsxs(po,{anchor:"right",open:e,onClose:t,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[n.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[n.jsx(P,{variant:"h6",sx:{ml:1},children:"Filters"}),n.jsx(ho,{onClick:t,children:n.jsx(W,{icon:"eva:close-fill"})})]}),n.jsx(fo,{}),n.jsx(mo,{children:n.jsxs(j,{spacing:3,sx:{p:3},children:[r,s,l,p,u]})}),n.jsx(oe,{sx:{p:3},children:n.jsx(xe,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",startIcon:n.jsx(W,{icon:"ic:round-clear-all"}),children:"Clear All"})})]})]})}Ee.propTypes={openFilter:g.bool,onOpenFilter:g.func,onCloseFilter:g.func};const wn=N("div")(({theme:e})=>({zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:e.spacing(16),height:e.spacing(5),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(1.25),boxShadow:e.customShadows.z20,color:e.palette.text.primary,backgroundColor:e.palette.background.paper,borderTopLeftRadius:Number(e.shape.borderRadius)*2,borderBottomLeftRadius:Number(e.shape.borderRadius)*2,transition:e.transitions.create("opacity"),"&:hover":{opacity:.72}}));function kn(){return n.jsx(wn,{children:n.jsx(xo,{showZero:!0,badgeContent:0,color:"error",max:99,children:n.jsx(W,{icon:"eva:shopping-cart-fill",width:24,height:24})})})}function Pn(){const[e,o]=m.useState(!1),t=()=>{o(!0)},r=()=>{o(!1)};return n.jsxs(go,{children:[n.jsx(P,{variant:"h4",sx:{mb:5},children:"Products"}),n.jsx(j,{direction:"row",alignItems:"center",flexWrap:"wrap-reverse",justifyContent:"flex-end",sx:{mb:5},children:n.jsxs(j,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[n.jsx(Ee,{openFilter:e,onOpenFilter:t,onCloseFilter:r}),n.jsx(Cn,{})]})}),n.jsx(Re,{container:!0,spacing:3,children:gn.map(s=>n.jsx(Re,{xs:12,sm:6,md:3,children:n.jsx(Be,{product:s})},s.id))}),n.jsx(kn,{})]})}function An(){return n.jsxs(n.Fragment,{children:[n.jsx(bo,{children:n.jsx("title",{children:" Products "})}),n.jsx(Pn,{})]})}export{An as default};
