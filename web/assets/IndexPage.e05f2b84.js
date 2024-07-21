import{c as H,f as re,j as $,a as E,h as q,b as ue,g as Q,m as Le,q as $e,K as se,L as Oe,M as ce,N as Pe,r as k,O as He,P as Qe,k as Ne,n as je,w as X,e as De,R as We,S as qe,T as Ee,U as ze,d as ke,s as Ke,o as xe,t as Ie,l as ye,A as Ue,V as Xe,W as Ve,X as be,C as U,Y as Ye,D as ie,E as ne,G as Je,Z as Ge,J as ae,F as I,_ as we,$ as Ze}from"./index.d7aa9cb5.js";import{_ as Ae}from"./plugin-vue_export-helper.21dcd24c.js";var et=H({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:a}}=Q(),l=re(Le,$);if(l===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(re($e,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const i=E(()=>{const f=(l.header.space===!0?l.header.size:0)+(l.footer.space===!0?l.footer.size:0);if(typeof e.styleFn=="function"){const S=l.isContainer.value===!0?l.containerHeight.value:a.screen.height;return e.styleFn(f,S)}return{minHeight:l.isContainer.value===!0?l.containerHeight.value-f+"px":a.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":a.screen.height-f+"px"}}),p=E(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:p.value,style:i.value},ue(t.default))}}),tt=H({name:"QItem",props:{...se,...Oe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:l}}=Q(),s=ce(e,l),{hasLink:i,linkAttrs:p,linkClass:f,linkTag:S,navigateOnClick:y}=Pe(),n=k(null),h=k(null),w=E(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=E(()=>e.disable!==!0&&w.value===!0),B=E(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),A=E(()=>{if(e.insetLevel===void 0)return null;const g=l.lang.rtl===!0?"Right":"Left";return{["padding"+g]:16+e.insetLevel*56+"px"}});function M(g){m.value===!0&&(h.value!==null&&(g.qKeyEvent!==!0&&document.activeElement===n.value?h.value.focus():document.activeElement===h.value&&n.value.focus()),y(g))}function F(g){if(m.value===!0&&He(g,[13,32])===!0){Qe(g),g.qKeyEvent=!0;const b=new MouseEvent("click",g);b.qKeyEvent=!0,n.value.dispatchEvent(b)}a("keyup",g)}function x(){const g=Ne(t.default,[]);return m.value===!0&&g.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:h})),g}return()=>{const g={ref:n,class:B.value,style:A.value,role:"listitem",onClick:M,onKeyup:F};return m.value===!0?(g.tabindex=e.tabindex||"0",Object.assign(g,p.value)):w.value===!0&&(g["aria-disabled"]="true"),q(S.value,g,x())}}}),lt=H({name:"QList",props:{...se,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=Q(),l=ce(e,a.proxy.$q),s=E(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>q(e.tag,{class:s.value},ue(t.default))}});const at=["horizontal","vertical","cell","none"];var ot=H({name:"QMarkupTable",props:{...se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>at.includes(e)}},setup(e,{slots:t}){const a=Q(),l=ce(e,a.proxy.$q),s=E(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>q("div",{class:s.value},[q("table",{class:"q-table"},ue(t.default))])}});function rt(e,t){return q("div",e,[q("table",{class:"q-table"},t)])}let Y=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Y=e.scrollLeft>=0,e.remove()}const C=1e3,it=["start","center","end","start-force","center-force","end-force"],Be=Array.prototype.filter,nt=window.getComputedStyle(document.body).overflowAnchor===void 0?je:function(e,t){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];Be.call(a,s=>s.dataset&&s.dataset.qVsAnchor!==void 0).forEach(s=>{delete s.dataset.qVsAnchor});const l=a[t];l&&l.dataset&&(l.dataset.qVsAnchor="")}))};function O(e,t){return e+t}function oe(e,t,a,l,s,i,p,f){const S=e===window?document.scrollingElement||document.documentElement:e,y=s===!0?"offsetWidth":"offsetHeight",n={scrollStart:0,scrollViewSize:-p-f,scrollMaxSize:0,offsetStart:-p,offsetEnd:-f};if(s===!0?(e===window?(n.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n.scrollViewSize+=document.documentElement.clientWidth):(n.scrollStart=S.scrollLeft,n.scrollViewSize+=S.clientWidth),n.scrollMaxSize=S.scrollWidth,i===!0&&(n.scrollStart=(Y===!0?n.scrollMaxSize-n.scrollViewSize:0)-n.scrollStart)):(e===window?(n.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,n.scrollViewSize+=document.documentElement.clientHeight):(n.scrollStart=S.scrollTop,n.scrollViewSize+=S.clientHeight),n.scrollMaxSize=S.scrollHeight),a!==null)for(let h=a.previousElementSibling;h!==null;h=h.previousElementSibling)h.classList.contains("q-virtual-scroll--skip")===!1&&(n.offsetStart+=h[y]);if(l!==null)for(let h=l.nextElementSibling;h!==null;h=h.nextElementSibling)h.classList.contains("q-virtual-scroll--skip")===!1&&(n.offsetEnd+=h[y]);if(t!==e){const h=S.getBoundingClientRect(),w=t.getBoundingClientRect();s===!0?(n.offsetStart+=w.left-h.left,n.offsetEnd-=w.width):(n.offsetStart+=w.top-h.top,n.offsetEnd-=w.height),e!==window&&(n.offsetStart+=n.scrollStart),n.offsetEnd+=n.scrollMaxSize-n.offsetStart}return n}function _e(e,t,a,l){t==="end"&&(t=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(l===!0&&(t=(Y===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-t),window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t):a===!0?(l===!0&&(t=(Y===!0?e.scrollWidth-e.offsetWidth:0)-t),e.scrollLeft=t):e.scrollTop=t}function P(e,t,a,l){if(a>=l)return 0;const s=t.length,i=Math.floor(a/C),p=Math.floor((l-1)/C)+1;let f=e.slice(i,p).reduce(O,0);return a%C!==0&&(f-=t.slice(i*C,a).reduce(O,0)),l%C!==0&&l!==s&&(f-=t.slice(l,p*C).reduce(O,0)),f}const ut={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},st={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...ut};function ct({virtualScrollLength:e,getVirtualScrollTarget:t,getVirtualScrollEl:a,virtualScrollItemSizeComputed:l}){const s=Q(),{props:i,emit:p,proxy:f}=s,{$q:S}=f;let y,n,h,w=[],m;const B=k(0),A=k(0),M=k({}),F=k(null),x=k(null),g=k(null),b=k({from:0,to:0}),de=E(()=>i.tableColspan!==void 0?i.tableColspan:100);l===void 0&&(l=E(()=>i.virtualScrollItemSize));const fe=E(()=>l.value+";"+i.virtualScrollHorizontal),Me=E(()=>fe.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);X(Me,()=>{L()}),X(fe,J);function J(){Z(n,!0)}function ve(o){Z(o===void 0?n:o)}function N(o,r){const u=t();if(u==null||u.nodeType===8)return;const _=oe(u,a(),F.value,x.value,i.virtualScrollHorizontal,S.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);h!==_.scrollViewSize&&L(_.scrollViewSize),j(u,_,Math.min(e.value-1,Math.max(0,parseInt(o,10)||0)),0,it.indexOf(r)!==-1?r:n!==-1&&o>n?"end":"start")}function Ce(){const o=t();if(o==null||o.nodeType===8)return;const r=oe(o,a(),F.value,x.value,i.virtualScrollHorizontal,S.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),u=e.value-1,_=r.scrollMaxSize-r.offsetStart-r.offsetEnd-A.value;if(y===r.scrollStart)return;if(r.scrollMaxSize<=0){j(o,r,0,0);return}h!==r.scrollViewSize&&L(r.scrollViewSize),G(b.value.from);const z=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(m[u],r.scrollViewSize/2));if(z>0&&Math.ceil(r.scrollStart)>=z){j(o,r,u,r.scrollMaxSize-r.offsetEnd-w.reduce(O,0));return}let v=0,d=r.scrollStart-r.offsetStart,V=d;if(d<=_&&d+r.scrollViewSize>=B.value)d-=B.value,v=b.value.from,V=d;else for(let c=0;d>=w[c]&&v<u;c++)d-=w[c],v+=C;for(;d>0&&v<u;)d-=m[v],d>-r.scrollViewSize?(v++,V=d):V=m[v]+d;j(o,r,v,V)}function j(o,r,u,_,z){const v=typeof z=="string"&&z.indexOf("-force")!==-1,d=v===!0?z.replace("-force",""):z,V=d!==void 0?d:"start";let c=Math.max(0,u-M.value[V]),R=c+M.value.total;R>e.value&&(R=e.value,c=Math.max(0,R-M.value.total)),y=r.scrollStart;const D=c!==b.value.from||R!==b.value.to;if(D===!1&&d===void 0){me(u);return}const{activeElement:he}=document,T=g.value;D===!0&&T!==null&&T!==he&&T.contains(he)===!0&&(T.addEventListener("focusout",Se),setTimeout(()=>{T!==null&&T.removeEventListener("focusout",Se)})),nt(T,u-c);const Re=d!==void 0?m.slice(c,u).reduce(O,0):0;if(D===!0){const W=R>=b.value.from&&c<=b.value.to?b.value.to:R;b.value={from:c,to:W},B.value=P(w,m,0,c),A.value=P(w,m,R,e.value),requestAnimationFrame(()=>{b.value.to!==R&&y===r.scrollStart&&(b.value={from:b.value.from,to:R},A.value=P(w,m,R,e.value))})}requestAnimationFrame(()=>{if(y!==r.scrollStart)return;D===!0&&G(c);const W=m.slice(c,u).reduce(O,0),K=W+r.offsetStart+B.value,pe=K+m[u];let te=K+_;if(d!==void 0){const Te=W-Re,le=r.scrollStart+Te;te=v!==!0&&le<K&&pe<le+r.scrollViewSize?le:d==="end"?pe-r.scrollViewSize:K-(d==="start"?0:Math.round((r.scrollViewSize-m[u])/2))}y=te,_e(o,te,i.virtualScrollHorizontal,S.lang.rtl),me(u)})}function G(o){const r=g.value;if(r){const u=Be.call(r.children,c=>c.classList&&c.classList.contains("q-virtual-scroll--skip")===!1),_=u.length,z=i.virtualScrollHorizontal===!0?c=>c.getBoundingClientRect().width:c=>c.offsetHeight;let v=o,d,V;for(let c=0;c<_;){for(d=z(u[c]),c++;c<_&&u[c].classList.contains("q-virtual-scroll--with-prev")===!0;)d+=z(u[c]),c++;V=d-m[v],V!==0&&(m[v]+=V,w[Math.floor(v/C)]+=V),v++}}}function Se(){g.value!==null&&g.value!==void 0&&g.value.focus()}function Z(o,r){const u=1*l.value;(r===!0||Array.isArray(m)===!1)&&(m=[]);const _=m.length;m.length=e.value;for(let v=e.value-1;v>=_;v--)m[v]=u;const z=Math.floor((e.value-1)/C);w=[];for(let v=0;v<=z;v++){let d=0;const V=Math.min((v+1)*C,e.value);for(let c=v*C;c<V;c++)d+=m[c];w.push(d)}n=-1,y=void 0,B.value=P(w,m,0,b.value.from),A.value=P(w,m,b.value.to,e.value),o>=0?(G(b.value.from),De(()=>{N(o)})):ee()}function L(o){if(o===void 0&&typeof window!="undefined"){const d=t();d!=null&&d.nodeType!==8&&(o=oe(d,a(),F.value,x.value,i.virtualScrollHorizontal,S.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}h=o;const r=parseFloat(i.virtualScrollSliceRatioBefore)||0,u=parseFloat(i.virtualScrollSliceRatioAfter)||0,_=1+r+u,z=o===void 0||o<=0?1:Math.ceil(o/l.value),v=Math.max(1,z,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/_));M.value={total:Math.ceil(v*_),start:Math.ceil(v*r),center:Math.ceil(v*(.5+r)),end:Math.ceil(v*(1+r)),view:z}}function Fe(o,r){const u=i.virtualScrollHorizontal===!0?"width":"height",_={["--q-virtual-scroll-item-"+u]:l.value+"px"};return[o==="tbody"?q(o,{class:"q-virtual-scroll__padding",key:"before",ref:F},[q("tr",[q("td",{style:{[u]:`${B.value}px`,..._},colspan:de.value})])]):q(o,{class:"q-virtual-scroll__padding",key:"before",ref:F,style:{[u]:`${B.value}px`,..._}}),q(o,{class:"q-virtual-scroll__content",key:"content",ref:g,tabindex:-1},r.flat()),o==="tbody"?q(o,{class:"q-virtual-scroll__padding",key:"after",ref:x},[q("tr",[q("td",{style:{[u]:`${A.value}px`,..._},colspan:de.value})])]):q(o,{class:"q-virtual-scroll__padding",key:"after",ref:x,style:{[u]:`${A.value}px`,..._}})]}function me(o){n!==o&&(i.onVirtualScroll!==void 0&&p("virtualScroll",{index:o,from:b.value.from,to:b.value.to-1,direction:o<n?"decrease":"increase",ref:f}),n=o)}L();const ee=We(Ce,S.platform.is.ios===!0?120:35);qe(()=>{L()});let ge=!1;return Ee(()=>{ge=!0}),ze(()=>{if(ge!==!0)return;const o=t();y!==void 0&&o!==void 0&&o!==null&&o.nodeType!==8?_e(o,y,i.virtualScrollHorizontal,S.lang.rtl):N(n)}),ke(()=>{ee.cancel()}),Object.assign(f,{scrollTo:N,reset:J,refresh:ve}),{virtualScrollSliceRange:b,virtualScrollSliceSizeComputed:M,setVirtualScrollSize:L,onVirtualScrollEvt:ee,localResetVirtualScroll:Z,padVirtualScroll:Fe,scrollTo:N,reset:J,refresh:ve}}const dt={list:lt,table:ot},ft=["list","table","__qtable"];var vt=H({name:"QVirtualScroll",props:{...st,type:{type:String,default:"list",validator:e=>ft.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:Ke},setup(e,{slots:t,attrs:a}){let l;const s=k(null),i=E(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:p,localResetVirtualScroll:f,padVirtualScroll:S,onVirtualScrollEvt:y}=ct({virtualScrollLength:i,getVirtualScrollTarget:B,getVirtualScrollEl:m}),n=E(()=>{if(i.value===0)return[];const x=(g,b)=>({index:p.value.from+b,item:g});return e.itemsFn===void 0?e.items.slice(p.value.from,p.value.to).map(x):e.itemsFn(p.value.from,p.value.to-p.value.from).map(x)}),h=E(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=E(()=>e.scrollTarget!==void 0?{}:{tabindex:0});X(i,()=>{f()}),X(()=>e.scrollTarget,()=>{M(),A()});function m(){return s.value.$el||s.value}function B(){return l}function A(){l=Ie(m(),e.scrollTarget),l.addEventListener("scroll",y,ye.passive)}function M(){l!==void 0&&(l.removeEventListener("scroll",y,ye.passive),l=void 0)}function F(){let x=S(e.type==="list"?"div":"tbody",n.value.map(t.default));return t.before!==void 0&&(x=t.before().concat(x)),Ue(t.after,x)}return qe(()=>{f()}),xe(()=>{A()}),ze(()=>{A()}),Ee(()=>{M()}),ke(()=>{M()}),()=>{if(t.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?rt({ref:s,class:"q-table__middle "+h.value},F()):q(dt[e.type],{...a,ref:s,class:[a.class,h.value],...w.value},F)}}});function St(){return re(Xe)}function mt(){let e="0";const t=k([]);let a;const l=St();function s(p){const f=JSON.parse(p.data);t.value.unshift(f.msg)}function i(p,f){t.value=[],a==null||a.removeEventListener(e,s),a==null||a.close(),e=`${Date.now()+Math.trunc(Math.random()*1e3)}`,a=new EventSource(`api/logger/sse/${e}?fileName=${p}&countLast=${f}`),a.addEventListener(e,s),a.onerror=S=>{console.error("SSE error",S),l.notify({message:"\u041E\u0448\u0438\u0431\u043A\u0430, \u043D\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F",type:"negative"})}}return{logList:t,reInit:i}}const gt={key:0,class:"log-view"},ht=Ve({__name:"LogView",props:{filePath:{},countLast:{}},setup(e,{expose:t}){const a=e,{reInit:l,logList:s}=mt();return t({reInit:l}),xe(()=>{l(a.filePath,a.countLast)}),(i,p)=>be(s).length?(U(),ie(vt,{key:1,class:"log-view",items:be(s),component:"q-list"},{default:ne(({item:f,index:S})=>[(U(),ie(tt,{key:S,dense:""},{default:ne(()=>[Je(Ge(f),1)]),_:2},1024))]),_:1},8,["items"])):(U(),Ye("div",gt,"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."))}});var pt=Ae(ht,[["__scopeId","data-v-6fdd79d3"]]);const yt={class:"page"},bt={class:"control-group row"},wt={class:"view"},_t=Ve({name:"IndexPage",__name:"IndexPage",setup(e){const t=k("/var/log/syslog"),a=k(100),l=k(),s=k(),i=E(()=>{var f;return!((f=l.value)!=null&&f.validate())});function p(){s.value.reInit(t.value,a.value)}return(f,S)=>(U(),ie(et,{class:"row items-top justify-evenly"},{default:ne(()=>[ae("div",yt,[ae("div",bt,[I(we,{modelValue:t.value,"onUpdate:modelValue":S[0]||(S[0]=y=>t.value=y),hint:"\u041F\u0443\u0442\u044C \u043A \u0444\u0430\u0439\u043B\u0443",class:"file-path",outlined:""},null,8,["modelValue"]),I(we,{outlined:"",ref_key:"rowsCountRef",ref:l,type:"number",modelValue:a.value,"onUpdate:modelValue":S[1]||(S[1]=y=>a.value=y),rules:[y=>+y>=0&&+y<=1e3||"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D 0 - 1000"],hint:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0441\u0442\u0440\u043E\u043A",class:"delim"},null,8,["modelValue","rules"]),I(Ze,{label:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",class:"apply-button",outline:"",color:"blue",disable:i.value,onClick:p},null,8,["disable"])]),ae("div",wt,[I(pt,{"file-path":t.value,"count-last":+a.value,ref_key:"logViewRef",ref:s},null,8,["file-path","count-last"])])])]),_:1}))}});var zt=Ae(_t,[["__scopeId","data-v-20ef6748"]]);export{zt as default};
