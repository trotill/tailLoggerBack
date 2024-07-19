import{c as S,a as d,h,b as N,r as w,i as A,o as P,d as R,n as U,e as W,g as C,l as F,f as K,j as L,w as _,k as X,m as I,p as G,q as Y,s as Z,t as ee,u as te,v as oe,x as E,y as Q,z as ne,A as le,B as ie,C as ae,D as re,E as T,F as q,Q as se,G as ue,H as ce,I as de,J as fe}from"./index.c04001a5.js";import{_ as ve}from"./plugin-vue_export-helper.21dcd24c.js";var he=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const o=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},N(v.default))}}),ge=S({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const o=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},N(v.default))}});function me(){const e=w(!A.value);return e.value===!1&&P(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver!="undefined",j=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var k=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let o=null,t,l={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==l.width||i!==l.height)&&(l={width:r,height:i},v("resize",l))}}const{proxy:g}=C();if(g.trigger=s,J===!0){let r;const i=m=>{t=g.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):m!==!0&&W(()=>{i(!0)})};return P(()=>{i()}),R(()=>{o!==null&&clearTimeout(o),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),U}else{let m=function(){o!==null&&(clearTimeout(o),o=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,F.passive),i=void 0)},p=function(){m(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,F.passive),u())};const{isHydrated:r}=me();let i;return P(()=>{W(()=>{t=g.$el,t&&p()})}),R(m),()=>{if(r.value===!0)return h("object",{class:"q--avoid-card-border",style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:p})}}}}),pe=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:o}){const{proxy:{$q:t}}=C(),l=K(I,L);if(l===L)return console.error("QHeader needs to be child of QLayout"),L;const s=w(parseInt(e.heightHint,10)),u=w(!0),g=d(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||t.platform.is.ios&&l.isContainer.value===!0),r=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?s.value:0;const n=s.value-l.scroll.value.position;return n>0?n:0}),i=d(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),m=d(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),p=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const n=l.rows.value.top,b={};return n[0]==="l"&&l.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),b});function c(n,b){l.update("header",n,b)}function y(n,b){n.value!==b&&(n.value=b)}function V({height:n}){y(s,n),c("size",n)}function O(n){m.value===!0&&y(u,!0),o("focusin",n)}_(()=>e.modelValue,n=>{c("space",n),y(u,!0),l.animate()}),_(r,n=>{c("offset",n)}),_(()=>e.reveal,n=>{n===!1&&y(u,e.modelValue)}),_(u,n=>{l.animate(),o("reveal",n)}),_(l.scroll,n=>{e.reveal===!0&&y(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const $={};return l.instances.header=$,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",r.value),R(()=>{l.instances.header===$&&(l.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=X(v.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(k,{debounce:0,onResize:V})),h("header",{class:p.value,style:z.value,onFocusin:O},n)}}}),be=S({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:o}}=C(),t=K(I,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;G(Y,!0);const l=d(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:l.value},N(v.default))}});const{passive:D}=F,ye=["both","horizontal","vertical"];var we=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ye.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Z},emits:["scroll"],setup(e,{emit:v}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,s;_(()=>e.scrollTarget,()=>{r(),g()});function u(){t!==null&&t();const p=Math.max(0,te(l)),z=oe(l),c={top:p-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:p,left:z},o.directionChanged=o.direction!==y,o.delta=c,o.directionChanged===!0&&(o.direction=y,o.inflectionPoint=o.position),v("scroll",{...o})}function g(){l=ee(s,e.scrollTarget),l.addEventListener("scroll",i,D),i(!0)}function r(){l!==void 0&&(l.removeEventListener("scroll",i,D),l=void 0)}function i(p){if(p===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:m}=C();return _(()=>m.$q.lang.rtl,u),P(()=>{s=m.$el.parentNode,g()}),R(()=>{t!==null&&t(),r()}),Object.assign(m,{trigger:i,getPosition:()=>o}),U}}),ze=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:o}){const{proxy:{$q:t}}=C(),l=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),r=w(0),i=w(A.value===!0?0:E()),m=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=d(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(a){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};g.value=f,e.onScroll!==void 0&&o("scroll",f)}}function V(a){const{height:f,width:x}=a;let H=!1;s.value!==f&&(H=!0,s.value=f,e.onScrollHeight!==void 0&&o("scrollHeight",f),$()),u.value!==x&&(H=!0,u.value=x),H===!0&&e.onResize!==void 0&&o("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,$())}function $(){if(e.container===!0){const a=s.value>r.value?E():0;i.value!==a&&(i.value=a)}}let n=null;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:s,containerHeight:r,scrollbarWidth:i,totalWidth:d(()=>u.value+i.value),rows:d(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:g,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,f,x){b[a][f]=x}};if(G(I,b),E()>0){let x=function(){a=null,f.classList.remove("hide-scrollbar")},H=function(){if(a===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},B=function(M){a!==null&&M==="remove"&&(clearTimeout(a),x()),window[`${M}EventListener`]("resize",H)},a=null;const f=document.body;_(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ne(()=>{B("remove")})}return()=>{const a=le(v.default,[h(we,{onScroll:y}),h(k,{onResize:V})]),f=h("div",{class:m.value,style:p.value,ref:e.container===!0?void 0:l,tabindex:-1},a);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(k,{onResize:O}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[f])])]):f}}});const _e={},xe=e=>(ce("data-v-132a93e5"),e=e(),de(),e),Se=xe(()=>fe("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1));function Te(e,v){const o=ie("router-view");return ae(),re(ze,{view:"hHh lpR fFf"},{default:T(()=>[q(pe,{elevated:"",class:"bg-primary text-white header"},{default:T(()=>[q(ge,null,{default:T(()=>[q(he,null,{default:T(()=>[q(se,null,{default:T(()=>[Se]),_:1}),ue(" \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043B\u043E\u0433 \u0444\u0430\u0439\u043B\u043E\u0432 ")]),_:1})]),_:1})]),_:1}),q(be,null,{default:T(()=>[q(o)]),_:1})]),_:1})}var $e=ve(_e,[["render",Te],["__scopeId","data-v-132a93e5"]]);export{$e as default};
