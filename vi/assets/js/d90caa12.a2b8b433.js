"use strict";(self.webpackChunkdatn_documentation=self.webpackChunkdatn_documentation||[]).push([[3669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var c=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=c.createContext({}),l=function(e){var t=c.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return c.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},s=c.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),s=o,u=d["".concat(p,".").concat(s)]||d[s]||h[s]||r;return n?c.createElement(u,a(a({ref:t},m),{},{components:n})):c.createElement(u,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return c.createElement.apply(null,a)}return c.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var c=n(7462),o=(n(7294),n(3905));const r={sidebar_position:6},a="Tree",i={unversionedId:"guides/tree/index",id:"guides/tree/index",title:"Tree",description:"Ph\u1ea7n n\xe0y m\xf4 t\u1ea3 m\xe0n h\xecnh Tree. T\xednh n\u0103ng n\xe0y cho ph\xe9p b\u1ea1n xem c\u1ea5u tr\xfac c\xe2y c\u1ee7a concept.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/guides/tree/index.md",sourceDirName:"guides/tree",slug:"/guides/tree/",permalink:"/HUSTPVO-documentation/vi/docs/guides/tree/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/HUSTPVO-documentation/vi/docs/guides/search/"},next:{title:"Dictionary",permalink:"/HUSTPVO-documentation/vi/docs/guides/dictionary/"}},p={},l=[{value:"T\u1ed5ng quan",id:"t\u1ed5ng-quan",level:2},{value:"Simple mode",id:"simple-mode",level:2},{value:"Full mode",id:"full-mode",level:2},{value:"Th\u01b0 m\u1ee5c Root",id:"th\u01b0-m\u1ee5c-root",level:3},{value:"Th\u01b0 m\u1ee5c Parents and Children",id:"th\u01b0-m\u1ee5c-parents-and-children",level:3},{value:"Th\u01b0 m\u1ee5c Example",id:"th\u01b0-m\u1ee5c-example",level:3}],m={toc:l},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,c.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tree"},"Tree"),(0,o.kt)("p",null,"Ph\u1ea7n n\xe0y m\xf4 t\u1ea3 m\xe0n h\xecnh ",(0,o.kt)("strong",{parentName:"p"},"Tree"),". T\xednh n\u0103ng n\xe0y cho ph\xe9p b\u1ea1n xem ",(0,o.kt)("strong",{parentName:"p"},"c\u1ea5u tr\xfac c\xe2y c\u1ee7a concept"),"."),(0,o.kt)("h2",{id:"t\u1ed5ng-quan"},"T\u1ed5ng quan"),(0,o.kt)("p",null,"Nh\u1eadp ho\u1eb7c ch\u1ecdn 1 concept (concept n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,o.kt)("strong",{parentName:"p"},"root concept"),") t\u1ea1i combobox ",(0,o.kt)("inlineCode",{parentName:"p"},"Concept"),". Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," \u0111\u1ec3 hi\u1ec3n th\u1ecb c\xe2y Concept t\u01b0\u01a1ng \u1ee9ng."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"C\xe2y concept")," bao g\u1ed3m root concept, c\xe1c child concept, c\xe1c parent concept t\u01b0\u01a1ng \u1ee9ng c\u1ee7a root concept v\xe0 c\xe1c example li\xean k\u1ebft v\u1edbi root concept."),(0,o.kt)("p",null,"HUST PVO cung c\u1ea5p 2 ch\u1ebf \u0111\u1ed9 xem: ",(0,o.kt)("strong",{parentName:"p"},"ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n")," (",(0,o.kt)("strong",{parentName:"p"},"Simple mode"),") v\xe0 ",(0,o.kt)("strong",{parentName:"p"},"ch\u1ebf \u0111\u1ed9 \u0111\u1ea7y \u0111\u1ee7")," (",(0,o.kt)("strong",{parentName:"p"},"Full mode"),")."),(0,o.kt)("h2",{id:"simple-mode"},"Simple mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simple mode",src:n(1559).Z,width:"1920",height:"912"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Root concept."),(0,o.kt)("li",{parentName:"ol"},"Danh s\xe1ch child concepts c\u1ee7a root concept."),(0,o.kt)("li",{parentName:"ol"},"Danh s\xe1ch parent concepts c\u1ee7a root concept."),(0,o.kt)("li",{parentName:"ol"},"Danh s\xe1ch c\xe1c m\u1ed7i quan h\u1ec7 example-concept."),(0,o.kt)("li",{parentName:"ol"},"Danh s\xe1ch examples t\u01b0\u01a1ng \u1ee9ng v\u1edbi m\u1ed1i quan h\u1ec7 \u0111\u01b0\u1ee3c ch\u1ecdn.")),(0,o.kt)("p",null,"Click m\u1ed9t m\u1ed1i quan h\u1ec7 trong danh s\xe1ch, b\u1ea1n s\u1ebd th\u1ea5y danh s\xe1ch example t\u01b0\u01a1ng \u1ee9ng hi\u1ec7n ra. Click icon b\xfat ch\xec \u0111\u1ec3 xem, s\u1eeda, x\xf3a example."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simple mode example",src:n(7555).Z,width:"1918",height:"907"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Trong danh s\xe1ch c\xe1c child concept v\xe0 parent concept, b\u1ea1n c\xf3 th\u1ec3 click v\xe0o b\u1ea5t k\u1ef3 concept n\xe0o \u0111\u1ec3 ch\u1ecdn n\xf3 l\xe0m ",(0,o.kt)("strong",{parentName:"p"},"root concept")," v\xe0 xem c\u1ea5u tr\xfac c\xe2y c\u1ee7a concept \u0111\xf3.")),(0,o.kt)("h2",{id:"full-mode"},"Full mode"),(0,o.kt)("p",null,"\u1ede ch\u1ebf \u0111\u1ed9 xem \u0111\u1ea7y \u0111\u1ee7, m\xe0n h\xecnh g\u1ed3m 2 ph\u1ea7n: c\u1ea5u tr\xfac c\xe2y th\u01b0 m\u1ee5c v\xe0 n\u1ed9i dung th\u01b0 m\u1ee5c."),(0,o.kt)("h3",{id:"th\u01b0-m\u1ee5c-root"},"Th\u01b0 m\u1ee5c Root"),(0,o.kt)("p",null,"\u1ea2nh b\xean d\u01b0\u1edbi l\xe0 m\xe0n h\xecnh khi b\u1ea1n \u1edf th\u01b0 m\u1ee5c ",(0,o.kt)("strong",{parentName:"p"},"Root concept"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Full mode",src:n(5300).Z,width:"1920",height:"910"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"C\u1ea5u tr\xfac c\xe2y th\u01b0 m\u1ee5c"),(0,o.kt)("li",{parentName:"ol"},"N\u1ed9i dung th\u01b0 m\u1ee5c")),(0,o.kt)("h3",{id:"th\u01b0-m\u1ee5c-parents-and-children"},"Th\u01b0 m\u1ee5c Parents and Children"),(0,o.kt)("p",null,"Khi b\u1ea1n ch\u1ecdn xem th\u01b0 m\u1ee5c ",(0,o.kt)("strong",{parentName:"p"},"Parents")," ho\u1eb7c ",(0,o.kt)("strong",{parentName:"p"},"Children"),", k\u1ebft qu\u1ea3 hi\u1ec3n th\u1ecb s\u1ebd t\u01b0\u01a1ng t\u1ef1 nh\u01b0 h\xecnh b\xean d\u01b0\u1edbi."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Parent folder",src:n(7937).Z,width:"1512",height:"481"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"N\u1ebfu b\u1ea1n click 1 concept \u1edf ",(0,o.kt)("strong",{parentName:"p"},"(1)"),", m\u1ea1ng li\xean k\u1ebft concept-concept \u1edf (2) s\u1ebd thay \u0111\u1ed5i t\u01b0\u01a1ng \u1ee9ng m\xe0 (",(0,o.kt)("strong",{parentName:"p"},"kh\xf4ng l\xe0m thay \u0111\u1ed5i Root concept"),").")),(0,o.kt)("p",null,"V\xed d\u1ee5: h\xecnh \u1ea3nh b\xean d\u01b0\u1edbi l\xe0 k\u1ebft qu\u1ea3 khi b\u1ea1n click v\xe0o concept ",(0,o.kt)("em",{parentName:"p"},"greeting")," trong th\u01b0 m\u1ee5c Parents. M\u1ea1ng li\xean k\u1ebft concept-concept c\u1ee7a ",(0,o.kt)("em",{parentName:"p"},"greeting")," \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb, trong khi root concept v\u1eabn l\xe0 ",(0,o.kt)("em",{parentName:"p"},"hello")," (root concept s\u1ebd \u0111\u01b0\u1ee3c \u0111\xe1nh d\u1ea5u b\u1eb1ng m\xe0u xanh l\xe1 c\xe2y trong m\u1ea1ng li\xean k\u1ebft concept-concept)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click parent in folder",src:n(2720).Z,width:"1536",height:"612"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"N\u1ebfu b\u1ea1n click v\xe0o m\u1ed9t concept trong ",(0,o.kt)("strong",{parentName:"p"},"(2)"),", ",(0,o.kt)("strong",{parentName:"p"},"root concept")," s\u1ebd \u0111\u01b0\u1ee3c ",(0,o.kt)("strong",{parentName:"p"},"thay \u0111\u1ed5i t\u01b0\u01a1ng \u1ee9ng")," (gi\u1ed1ng nh\u01b0 trong ch\u1ebf \u0111\u1ed9 xem \u0111\u01a1n gi\u1ea3n).")),(0,o.kt)("h3",{id:"th\u01b0-m\u1ee5c-example"},"Th\u01b0 m\u1ee5c Example"),(0,o.kt)("p",null,"Click 1 th\u01b0 m\u1ee5c con c\u1ee7a th\u01b0 m\u1ee5c Example, danh s\xe1ch c\xe1c example t\u01b0\u01a1ng \u1ee9ng s\u1ebd hi\u1ec7n ra."),(0,o.kt)("p",null,"Click 1 example \u0111\u1ec3 xem chi ti\u1ebft."),(0,o.kt)("p",null,"Click icon b\xfat ch\xec \u0111\u1ec3 s\u1eeda ho\u1eb7c x\xf3a example."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example folder",src:n(5315).Z,width:"1522",height:"792"})))}h.isMDXComponent=!0},5300:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"assets/images/fullMode-34add3aba7013edfb81ce9bead2259bc.png"},2720:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"assets/images/fullModeClickParentConceptInFolder-b59b5b3e0ece8d34931ad9e4b6eec159.png"},5315:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"assets/images/fullModeExampleFolder-ae6ee0e9869a4cd0760eaa1c69aa0586.png"},7937:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"assets/images/fullModeParentFolder-36c39068ed757f950eda098df497a5ab.png"},1559:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"assets/images/simpleMode-440f0d300fb4a1d200346b03c41339da.png"},7555:(e,t,n)=>{n.d(t,{Z:()=>c});const c=n.p+"assets/images/simpleModeExample-af0cad21f8fbbab7b8553868a6311db5.png"}}]);