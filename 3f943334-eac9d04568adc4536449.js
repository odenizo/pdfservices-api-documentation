"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5206],{32199:function(e,t,i){i.d(t,{BA:function(){return w},NN:function(){return j},Rp:function(){return z},__:function(){return E},ck:function(){return I},mQ:function(){return k},ms:function(){return B},vS:function(){return _}});var n=i(4942),a=i(87462),r=i(63366),o=i(15007),s=i(75900),l=i.n(s),c=i(86029),d=i(158),m=["orientation","density","isQuiet","children","className","onFontsReady"],u=["elementType","isDisabled","isSelected","className","children","icon","label"],p=["elementType","icon","isSelected","isDisabled","className","children","iconSize"],v=["className"],b=["className","index"],f=["elementType","isHidden","className","children"],g=["theme","orientation","className","APIReference"];function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var w=function(e,t){e.current.style.transform="translate("+t.current.offsetLeft+"px, 0px)",e.current.style.width=t.current.offsetWidth+"px"},z=function(e,t){e.current.style.transition=t?"":"none"},x="480px",Z=function(e){var t;return"img"===(null==e||null===(t=e.props)||void 0===t?void 0:t.mdxType)?(0,o.cloneElement)(e,{loading:"eager"}):e},N=function(e){var t=e.image,i=void 0===t?"":t,n=e.styles,a=void 0===n?"":n;return i?(0,o.cloneElement)(i,{children:(0,d.ve)(i.props.children,Z),css:(0,c.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",a,";","")}):null},T=function(e){var t=e.icon,i=e.styles;return t?(0,o.cloneElement)(t,{alt:"",css:(0,c.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",i,";","")}):null},k=(0,o.forwardRef)((function(e,t){var i=e.orientation,n=void 0===i?"horizontal":i,s=e.density,d=void 0===s?"regular":s,u=e.isQuiet,p=void 0===u||u,v=e.children,b=e.className,f=e.onFontsReady,g=(0,r.Z)(e,m);return(0,o.useEffect)((function(){document.fonts.ready.then((function(){f&&f()}))}),[f]),(0,c.tZ)("div",(0,a.Z)({ref:t},g,{role:"tablist","aria-orientation":n,className:l()(b,"spectrum-Tabs","spectrum-Tabs--sizeM","spectrum-Tabs--"+n,{"spectrum-Tabs--quiet":p},{"spectrum-Tabs--compact":"compact"===d})}),v)})),I=(0,o.forwardRef)((function(e,t){var i,n=e.elementType,o=void 0===n?"div":n,s=e.isDisabled,d=void 0!==s&&s,m=e.isSelected,p=void 0!==m&&m,v=e.className,b=e.children,f=e.icon,g=e.label,h=(0,r.Z)(e,u),y=o;return(0,c.tZ)(y,(0,a.Z)({},h,{ref:t,role:"tab",title:null==g||null===(i=g.props)||void 0===i?void 0:i.children,"aria-selected":p,disabled:d,className:l()(v,"spectrum-Tabs-item",{"is-selected":p},{"is-disabled":d})}),f?(0,c.tZ)(S,{icon:f,isSelected:p,isDisabled:d}):null,g?(0,c.tZ)(E,null," ",g," "):null,b)})),R={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},S=(0,o.forwardRef)((function(e,t){var i=e.elementType,n=void 0===i?"div":i,o=e.icon,s=e.isSelected,d=e.isDisabled,m=e.className,u=(e.children,e.iconSize),v=void 0===u?"xl":u,b=(0,r.Z)(e,p),f=n;return(0,c.tZ)(f,(0,a.Z)({},b,{ref:t,className:l()(m,"spectrum-Icon",{"is-selected":s},{"is-disabled ":d}),css:R}),o?function(e,t,i){var n,a,r;return"img"===(null==e||null===(n=e.props)||void 0===n||null===(a=n.children)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.mdxType)?(0,c.tZ)(N,{image:e,className:l()(t,"spectrum-Icon--spectrum-icon-size-"+i)}):(0,c.tZ)(T,{icon:e,className:l()(t,"spectrum-Icon--spectrum-icon-size-"+i)})}(o,m,v):null)})),O={name:"pwo431",styles:"transition-property:transform,width"},j=(0,o.forwardRef)((function(e,t){var i=e.className,n=(0,r.Z)(e,v);return(0,c.tZ)("div",(0,a.Z)({},n,{ref:t,className:l()(i,"spectrum-Tabs-selectionIndicator"),css:O}))})),D={name:"pwo431",styles:"transition-property:transform,width"},_=(0,o.forwardRef)((function(e,t){var i=e.className,n=e.index,o=void 0===n?0:n,s=(0,r.Z)(e,b);return(0,c.tZ)("div",(0,a.Z)({},s,{ref:t,className:l()(i,"spectrum-Tabs-selectionIndicator",{default:0===o}),css:D}))})),E=function(e){var t=e.children;return(0,c.tZ)("span",{className:"spectrum-Tabs-itemLabel"},t)},P=(0,o.forwardRef)((function(e,t){var i=e.elementType,n=void 0===i?"div":i,o=e.isHidden,s=e.className,d=e.children,m=(0,r.Z)(e,f),u=n;return(0,c.tZ)(u,(0,a.Z)({},m,{ref:t,hidden:o,className:l()(s)}),d)})),A={name:"15jol59",styles:"color:#4b9cf5;&:focus{text-decoration:underline;border-bottom:1px solid #1374e6;}"},L={name:"1lx7s8w",styles:"background:var(--spectrum-global-color-gray-100);max-width:100%;overflow-x:hidden!important;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},B=function(e){var t=e.theme,i=void 0===t?"light":t,n=e.orientation,a=void 0===n?"horizontal":n,s=e.className,m=e.APIReference,u=void 0===m?"":m,p=(0,r.Z)(e,g),v=(0,o.useState)([])[0],b=(0,o.useRef)(null),f=(0,o.useState)({tab:0}),h=f[0],z=f[1],Z=Object.keys(p).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,t){var i,n;return{heading:(null==p||null===(i=p["heading"+t])||void 0===i||null===(n=i.props)||void 0===n?void 0:n.children)||(null==p?void 0:p.heading),content:(null==p?void 0:p["content"+t])||(null==p?void 0:p.content),image:(null==p?void 0:p["image"+t])||(null==p?void 0:p.image)}})),N=function(e){void 0===e&&(e=h.tab);var t=v.filter((function(e){return null==e?void 0:e.current}))[e];w(b,t)},T=function(e){z({tab:e}),N(e)};return(0,c.tZ)("section",{className:l()(s,"tabsBlock spectrum--"+i),css:L},(0,c.tZ)("div",{className:"tabs-wrapper",css:(0,c.iv)("display:","vertical"===a?"inline-flex":"",";@media only screen and (min-width: ",d.LU,"){margin:0 auto!important;}@media screen and (max-device-width: ",d.q9,"){flex-direction:column;}","")},(0,c.tZ)("div",{className:"tabs-content",css:(0,c.iv)("display:","vertical"===a?"grid":"initial",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:var(--spectrum-global-dimension-size-300);width:",d.Av,"!important;@media only screen and (max-width: ",d.q9,"){width:100%!important;}@media only screen and (device-width: ",d.LU,"){width:",(0,d.MY)(8),"!important;}","")},(0,c.tZ)("div",{css:(0,c.iv)((null==Z?void 0:Z.length)>6?"overflow-x:auto; overflow-y: hidden;":"",";","")},(null==Z?void 0:Z.length)>0?(0,c.tZ)(k,{orientation:a,isQuiet:!0,onFontsReady:N},Z.map((function(e,t){var i=(0,o.createRef)();v.push(i);var n=h.tab===t;return(0,c.tZ)(o.default.Fragment,null,(0,c.tZ)(I,{className:"tabItem",key:"tabItem_"+t,id:"tabItem_"+t,ref:i,isSelected:n,"aria-controls":"tabView"+t,tabIndex:t===h.tab?0:-1,"aria-label":e.heading,"aria-selected":t===h.tab,label:(0,c.tZ)("b",null,e.heading),icon:e.image,onKeyDown:function(e){if("ArrowDown"===e.key||"Enter"===e.key){var i;if(e.preventDefault(),Z.length===t+1&&""!==u)null===(i=document.getElementById("apiReference"))||void 0===i||i.setAttribute("tabIndex",0),document.getElementById("apiReference").focus();e.currentTarget.nextSibling&&e.currentTarget.nextSibling.nextSibling.focus()}"ArrowUp"===e.key&&(e.preventDefault(),e.currentTarget.previousSibling&&e.currentTarget.previousSibling.previousSibling.focus())},onFocus:function(){T(t)},onClick:function(){T(t)},css:(0,c.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===a?"1rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:initial;.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;border:none!important;}@media only screen and (max-width: ",x,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (max-width: ",d.q9,"){padding-left:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (min-width: ",d.LU,"){width:calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-750))!important;left:var(--spectrum-global-dimension-size-250)!important;}","")}),(0,c.tZ)("div",{key:"mobileTabView_"+t,className:"mobileTabView",hidden:!n,css:(0,c.iv)("display:none;padding:var(--spectrum-global-dimension-size-0)!important;h3{font-size:var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));}p{font-size:var(--spectrum-body-s-text-size, var(--spectrum-global-dimension-font-size-150));}@media only screen and (max-width: ","767px","){display:block;}","")},e.content?e.content:null))})),(0,c.tZ)(j,{ref:b}),""!==u&&(0,c.tZ)("div",{css:(0,c.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2500) + var(--spectrum-global-dimension-size-750))!important;font-size:var(--spectrum-global-dimension-size-200);padding:var(--spectrum-global-dimension-size-125)!important;@media only screen and (max-width: ",x,"){left:var(--spectrum-global-dimension-size-100)!important;margin-top:var(--spectrum-global-dimension-size-125)!important;margin-bottom:var(--spectrum-global-dimension-size-125)!important;}@media only screen and (min-width: ",d.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,c.tZ)("span",{css:(0,c.iv)("text-align:left;cursor:pointer;margin-top:var(--spectrum-global-dimension-size-85);margin-left:var(--spectrum-global-dimension-size-400);@media only screen and (max-width: ",x,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}@media only screen and (max-width: ",d.q9,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}","")},(0,c.tZ)("a",{href:u,tabIndex:-1,id:"apiReference",css:A,target:"_blank",rel:"noreferrer",onKeyDown:function(e){"ArrowUp"===e.key&&(e.preventDefault(),T((null==Z?void 0:Z.length)-1),document.getElementById("tabItem_"+((null==Z?void 0:Z.length)-1)).focus())},onBlur:function(){document.getElementById("apiReference").setAttribute("tabIndex",-1)}},"API Reference")))):null),(null==Z?void 0:Z.length)>0?Z.map((function(e,t){var i=h.tab===t,n=e.content;return n.props=y(y({},n.props),{},{index:h.tab}),(0,c.tZ)(P,{key:"tabView_"+t,id:"tabView"+t,className:"tabView",isHidden:!i,css:(0,c.iv)("text-align:left;padding:0px 0 var(--spectrum-global-dimension-size-100) 10px!important;overflow-x:hidden!important;@media only screen and (max-width: ",x,"){padding-left:inherit!important;max-width:",(0,d.MY)(3),"!important;}@media only screen and (device-width: ",d.q9,"){max-width:",(0,d.MY)(3.5),"!important;}@media only screen and (device-width: ",d.LU,"){max-width:",(0,d.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},n)})):null)))}}}]);
//# sourceMappingURL=3f943334-eac9d04568adc4536449.js.map