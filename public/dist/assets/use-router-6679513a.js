import{aj as o,r as a}from"./index-ec1580f4.js";function s(){const r=o();return a.useMemo(()=>({back:()=>r(-1),forward:()=>r(1),reload:()=>window.location.reload(),push:e=>r(e),replace:e=>r(e,{replace:!0})}),[r])}export{s as u};
