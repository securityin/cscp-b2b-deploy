_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"2hC3":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seller",function(){return r("nGnI")}])},nGnI:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Ae}));var n=r("KQm4"),a=r("nKUr"),c=r("rePB"),o=r("wCAj"),i=r("kPKH"),l=r("2/Rp"),s=r("kLXV"),u=r("zqcQ"),d=r("Re8R"),b=r("0WD7"),m=r("LvDl"),j=r.n(m),f=r("wx14"),p=r("U8pU"),O=r("ODXe"),h=r("q1tI"),v=r("TSYQ"),x=r.n(v),g=r("85Yc"),y=r("H84U"),w=r("bT9E"),E=h.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),C=h.createContext({updateItemErrors:function(){}}),F=h.createContext({prefixCls:""});function I(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function k(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function P(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return k(r.overflowY,t)||k(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function N(e,t,r,n,a,c,o,i){return c<e&&o>t||c>e&&o<t?0:c<=e&&i<=r||o>=t&&i>=r?c-e-n:o>t&&i<r||c<e&&i>r?o-t+a:0}var _=function(e,t){var r=window,n=t.scrollMode,a=t.block,c=t.inline,o=t.boundary,i=t.skipOverflowHiddenElements,l="function"==typeof o?o:function(e){return e!==o};if(!I(e))throw new TypeError("Invalid target");for(var s=document.scrollingElement||document.documentElement,u=[],d=e;I(d)&&l(d);){if((d=d.parentNode)===s){u.push(d);break}d===document.body&&P(d)&&!P(document.documentElement)||P(d,i)&&u.push(d)}for(var b=r.visualViewport?r.visualViewport.width:innerWidth,m=r.visualViewport?r.visualViewport.height:innerHeight,j=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,p=e.getBoundingClientRect(),O=p.height,h=p.width,v=p.top,x=p.right,g=p.bottom,y=p.left,w="start"===a||"nearest"===a?v:"end"===a?g:v+O/2,E="center"===c?y+h/2:"end"===c?x:y,C=[],F=0;F<u.length;F++){var k=u[F],_=k.getBoundingClientRect(),R=_.height,T=_.width,q=_.top,M=_.right,S=_.bottom,D=_.left;if("if-needed"===n&&v>=0&&y>=0&&g<=m&&x<=b&&v>=q&&g<=S&&y>=D&&x<=M)return C;var A=getComputedStyle(k),V=parseInt(A.borderLeftWidth,10),L=parseInt(A.borderTopWidth,10),W=parseInt(A.borderRightWidth,10),H=parseInt(A.borderBottomWidth,10),z=0,B=0,X="offsetWidth"in k?k.offsetWidth-k.clientWidth-V-W:0,Y="offsetHeight"in k?k.offsetHeight-k.clientHeight-L-H:0;if(s===k)z="start"===a?w:"end"===a?w-m:"nearest"===a?N(f,f+m,m,L,H,f+w,f+w+O,O):w-m/2,B="start"===c?E:"center"===c?E-b/2:"end"===c?E-b:N(j,j+b,b,V,W,j+E,j+E+h,h),z=Math.max(0,z+f),B=Math.max(0,B+j);else{z="start"===a?w-q-L:"end"===a?w-S+H+Y:"nearest"===a?N(q,S,R,L,H+Y,w,w+O,O):w-(q+R/2)+Y/2,B="start"===c?E-D-V:"center"===c?E-(D+T/2)+X/2:"end"===c?E-M+W+X:N(D,M,T,V,W+X,E,E+h,h);var K=k.scrollLeft,U=k.scrollTop;w+=U-(z=Math.max(0,Math.min(U+z,k.scrollHeight-R+Y))),E+=K-(B=Math.max(0,Math.min(K+B,k.scrollWidth-T+X)))}C.push({el:k,top:z,left:B})}return C};function R(e){return e===Object(e)&&0!==Object.keys(e).length}var T=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(R(t)&&"function"===typeof t.behavior)return t.behavior(r?[]:_(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:R(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,a=e.top,c=e.left;n.scroll&&r?n.scroll({top:a,left:c,behavior:t}):(n.scrollTop=a,n.scrollLeft=c)}))}(_(e,n),n.behavior)}};function q(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function M(e,t){if(e.length){var r=e.join("_");return t?"".concat(t,"_").concat(r):r}}function S(e){return q(e).join("_")}function D(e){var t=Object(g.e)(),r=Object(O.a)(t,1)[0],n=h.useRef({}),a=h.useMemo((function(){return e||Object(f.a)(Object(f.a)({},r),{__INTERNAL__:{itemRef:function(e){return function(t){var r=S(e);t?n.current[r]=t:delete n.current[r]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=q(e),n=M(r,a.__INTERNAL__.name),c=n?document.getElementById(n):null;c&&T(c,Object(f.a)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=S(e);return n.current[t]}})}),[e,r]);return[a]}var A=r("3Nzz"),V=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},L=function(e,t){var r,n=h.useContext(A.b),a=h.useContext(y.b),o=a.getPrefixCls,i=a.direction,l=a.form,s=e.prefixCls,u=e.className,d=void 0===u?"":u,b=e.size,m=void 0===b?n:b,j=e.form,v=e.colon,w=e.labelAlign,C=e.labelCol,F=e.wrapperCol,I=e.hideRequiredMark,k=e.layout,P=void 0===k?"horizontal":k,N=e.scrollToFirstError,_=e.requiredMark,R=e.onFinishFailed,T=e.name,q=V(e,["prefixCls","className","size","form","colon","labelAlign","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),M=Object(h.useMemo)((function(){return void 0!==_?_:l&&void 0!==l.requiredMark?l.requiredMark:!I}),[I,_,l]),S=o("form",s),L=x()(S,(r={},Object(c.a)(r,"".concat(S,"-").concat(P),!0),Object(c.a)(r,"".concat(S,"-hide-required-mark"),!1===M),Object(c.a)(r,"".concat(S,"-rtl"),"rtl"===i),Object(c.a)(r,"".concat(S,"-").concat(m),m),r),d),W=D(j),H=Object(O.a)(W,1)[0],z=H.__INTERNAL__;z.name=T;var B=Object(h.useMemo)((function(){return{name:T,labelAlign:w,labelCol:C,wrapperCol:F,vertical:"vertical"===P,colon:v,requiredMark:M,itemRef:z.itemRef}}),[T,w,C,F,P,v,M]);h.useImperativeHandle(t,(function(){return H}));return h.createElement(A.a,{size:m},h.createElement(E.Provider,{value:B},h.createElement(g.d,Object(f.a)({id:T},q,{name:T,onFinishFailed:function(e){R&&R(e);var t={block:"nearest"};N&&e.errorFields.length&&("object"===Object(p.a)(N)&&(t=N),H.scrollToField(e.errorFields[0].name,t))},form:H,className:L}))))},W=h.forwardRef(L),H=r("Y+p1"),z=r.n(H),B=r("KW7l"),X=r("c+Xe"),Y=r("qrJ5"),K=r("CWQg"),U=r("uaoM"),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},J=r("6VBw"),G=function(e,t){return h.createElement(J.a,Object.assign({},e,{ref:t,icon:Q}))};G.displayName="QuestionCircleOutlined";var Z=h.forwardRef(G),$=r("/kpp"),ee=r("YMnH"),te=r("ZvpZ"),re=r("3S7+"),ne=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var ae=function(e){var t=e.prefixCls,r=e.label,n=e.htmlFor,a=e.labelCol,o=e.labelAlign,i=e.colon,l=e.required,s=e.requiredMark,u=e.tooltip,d=Object(ee.b)("Form"),b=Object(O.a)(d,1)[0];return r?h.createElement(E.Consumer,{key:"label"},(function(e){var d,m,j=e.vertical,O=e.labelAlign,v=e.labelCol,g=e.colon,y=a||v||{},w=o||O,E="".concat(t,"-item-label"),C=x()(E,"left"===w&&"".concat(E,"-left"),y.className),F=r,I=!0===i||!1!==g&&!1!==i;I&&!j&&"string"===typeof r&&""!==r.trim()&&(F=r.replace(/[:|\uff1a]\s*$/,""));var k=function(e){return e?"object"!==Object(p.a)(e)||h.isValidElement(e)?{title:e}:e:null}(u);if(k){var P=k.icon,N=void 0===P?h.createElement(Z,null):P,_=ne(k,["icon"]),R=h.createElement(re.a,_,h.cloneElement(N,{className:"".concat(t,"-item-tooltip")}));F=h.createElement(h.Fragment,null,F,R)}"optional"!==s||l||(F=h.createElement(h.Fragment,null,F,h.createElement("span",{className:"".concat(t,"-item-optional")},(null===b||void 0===b?void 0:b.optional)||(null===(m=te.a.Form)||void 0===m?void 0:m.optional))));var T=x()((d={},Object(c.a)(d,"".concat(t,"-item-required"),l),Object(c.a)(d,"".concat(t,"-item-required-mark-optional"),"optional"===s),Object(c.a)(d,"".concat(t,"-item-no-colon"),!I),d));return h.createElement($.a,Object(f.a)({},y,{className:C}),h.createElement("label",{htmlFor:n,className:T,title:"string"===typeof r?r:""},F))})):null},ce=r("ye1Q"),oe=r("jN4g"),ie=r("jO45"),le=r("IMoZ"),se=r("8XRh"),ue=r("YrtM"),de=r("hkKa");var be=[];function me(e){var t=e.errors,r=void 0===t?be:t,n=e.help,a=e.onDomErrorVisibleChange,o=Object(de.a)(),i=h.useContext(F),l=i.prefixCls,s=i.status,u=function(e,t,r){var n=h.useRef({errors:e,visible:!!e.length}),a=Object(de.a)(),c=function(){var r=n.current.visible,c=!!e.length,o=n.current.errors;n.current.errors=e,n.current.visible=c,r!==c?t(c):(o.length!==e.length||o.some((function(t,r){return t!==e[r]})))&&a()};return h.useEffect((function(){if(!r){var e=setTimeout(c,10);return function(){return clearTimeout(e)}}}),[e]),r&&c(),[n.current.visible,n.current.errors]}(r,(function(e){e&&Promise.resolve().then((function(){null===a||void 0===a||a(!0)})),o()}),!!n),d=Object(O.a)(u,2),b=d[0],m=d[1],j=Object(ue.a)((function(){return m}),b,(function(e,t){return t})),f=h.useState(s),p=Object(O.a)(f,2),v=p[0],g=p[1];h.useEffect((function(){b&&s&&g(s)}),[b,s]);var y="".concat(l,"-item-explain");return h.createElement(se.b,{motionDeadline:500,visible:b,motionName:"show-help",onLeaveEnd:function(){null===a||void 0===a||a(!1)},motionAppear:!0,removeOnLeave:!0},(function(e){var t=e.className;return h.createElement("div",{className:x()(y,Object(c.a)({},"".concat(y,"-").concat(v),v),t),key:"help"},j.map((function(e,t){return h.createElement("div",{key:t,role:"alert"},e)})))}))}var je={success:ie.a,warning:le.a,error:oe.a,validating:ce.a},fe=function(e){var t=e.prefixCls,r=e.status,n=e.wrapperCol,a=e.children,c=e.help,o=e.errors,i=e.onDomErrorVisibleChange,l=e.hasFeedback,s=e._internalItemRender,u=e.validateStatus,d=e.extra,b="".concat(t,"-item"),m=h.useContext(E),j=n||m.wrapperCol||{},p=x()("".concat(b,"-control"),j.className);h.useEffect((function(){return function(){i(!1)}}),[]);var O=u&&je[u],v=l&&O?h.createElement("span",{className:"".concat(b,"-children-icon")},h.createElement(O,null)):null,g=Object(f.a)({},m);delete g.labelCol,delete g.wrapperCol;var y=h.createElement("div",{className:"".concat(b,"-control-input")},h.createElement("div",{className:"".concat(b,"-control-input-content")},a),v),w=h.createElement(F.Provider,{value:{prefixCls:t,status:r}},h.createElement(me,{errors:o,help:c,onDomErrorVisibleChange:i})),C=d?h.createElement("div",{className:"".concat(b,"-extra")},d):null,I=s&&"pro_table_render"===s.mark&&s.render?s.render(e,{input:y,errorList:w,extra:C}):h.createElement(h.Fragment,null,y,w,C);return h.createElement(E.Provider,{value:g},h.createElement($.a,Object(f.a)({},j,{className:p}),I))},pe=r("0n0R"),Oe=r("wgJM");var he=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},ve="__SPLIT__",xe=(Object(K.a)("success","warning","error","validating",""),h.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update})));var ge=function(e){var t=e.name,r=e.fieldKey,a=e.noStyle,o=e.dependencies,i=e.prefixCls,l=e.style,s=e.className,u=e.shouldUpdate,d=e.hasFeedback,b=e.help,m=e.rules,j=e.validateStatus,v=e.children,F=e.required,I=e.label,k=e.messageVariables,P=e.trigger,N=void 0===P?"onChange":P,_=e.validateTrigger,R=e.hidden,T=he(e,["name","fieldKey","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),S=Object(h.useRef)(!1),D=Object(h.useContext)(y.b).getPrefixCls,A=Object(h.useContext)(E),V=A.name,L=A.requiredMark,W=Object(h.useContext)(C).updateItemErrors,H=h.useState(!!b),K=Object(O.a)(H,2),Q=K[0],J=K[1],G=function(e){var t=h.useState(e),r=Object(O.a)(t,2),n=r[0],a=r[1],c=Object(h.useRef)(null),o=Object(h.useRef)([]),i=Object(h.useRef)(!1);return h.useEffect((function(){return function(){i.current=!0,Oe.a.cancel(c.current)}}),[]),[n,function(e){i.current||(null===c.current&&(o.current=[],c.current=Object(Oe.a)((function(){c.current=null,a((function(e){var t=e;return o.current.forEach((function(e){t=e(t)})),t}))}))),o.current.push(e))}]}({}),Z=Object(O.a)(G,2),$=Z[0],ee=Z[1],te=Object(h.useContext)(B.b).validateTrigger,re=void 0!==_?_:te;function ne(e){S.current||J(e)}var ce=function(e){return null===e&&Object(U.a)(!1,"Form.Item","`null` is passed as `name` property"),!(void 0===e||null===e)}(t),oe=Object(h.useRef)([]);h.useEffect((function(){return function(){S.current=!0,W(oe.current.join(ve),[])}}),[]);var ie=D("form",i),le=a?W:function(e,t,r){ee((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r!==e&&delete n[r],z()(n[e],t)?n:Object(f.a)(Object(f.a)({},n),Object(c.a)({},e,t))}))},se=function(){var e=h.useContext(E).itemRef,t=h.useRef({});return function(r,n){var a=n&&"object"===Object(p.a)(n)&&n.ref,c=r.join("_");return t.current.name===c&&t.current.originRef===a||(t.current.name=c,t.current.originRef=a,t.current.ref=Object(X.a)(e(r),a)),t.current.ref}}();function ue(t,r,o,i){var u,m;if(a&&!R)return t;var p,O=[];Object.keys($).forEach((function(e){O=[].concat(Object(n.a)(O),Object(n.a)($[e]||[]))})),void 0!==b&&null!==b?p=q(b):(p=o?o.errors:[],p=[].concat(Object(n.a)(p),Object(n.a)(O)));var v="";void 0!==j?v=j:(null===o||void 0===o?void 0:o.validating)?v="validating":(null===(m=null===o||void 0===o?void 0:o.errors)||void 0===m?void 0:m.length)||O.length?v="error":(null===o||void 0===o?void 0:o.touched)&&(v="success");var g=(u={},Object(c.a)(u,"".concat(ie,"-item"),!0),Object(c.a)(u,"".concat(ie,"-item-with-help"),Q||b),Object(c.a)(u,"".concat(s),!!s),Object(c.a)(u,"".concat(ie,"-item-has-feedback"),v&&d),Object(c.a)(u,"".concat(ie,"-item-has-success"),"success"===v),Object(c.a)(u,"".concat(ie,"-item-has-warning"),"warning"===v),Object(c.a)(u,"".concat(ie,"-item-has-error"),"error"===v),Object(c.a)(u,"".concat(ie,"-item-is-validating"),"validating"===v),Object(c.a)(u,"".concat(ie,"-item-hidden"),R),u);return h.createElement(Y.a,Object(f.a)({className:x()(g),style:l,key:"row"},Object(w.a)(T,["colon","extra","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),h.createElement(ae,Object(f.a)({htmlFor:r,required:i,requiredMark:L},e,{prefixCls:ie})),h.createElement(fe,Object(f.a)({},e,o,{errors:p,prefixCls:ie,status:v,onDomErrorVisibleChange:ne,validateStatus:v}),h.createElement(C.Provider,{value:{updateItemErrors:le}},t)))}var de="function"===typeof v,be=Object(h.useRef)(0);if(be.current+=1,!ce&&!de&&!o)return ue(v);var me={};return"string"===typeof I&&(me.label=I),k&&(me=Object(f.a)(Object(f.a)({},me),k)),h.createElement(g.a,Object(f.a)({},e,{messageVariables:me,trigger:N,validateTrigger:re,onReset:function(){ne(!1)}}),(function(c,i,l){var s=i.errors,d=q(t).length&&i?i.name:[],b=M(d,V);if(a){var j=oe.current.join(ve);if(oe.current=Object(n.a)(d),r){var O=Array.isArray(r)?r:[r];oe.current=[].concat(Object(n.a)(d.slice(0,-1)),Object(n.a)(O))}W(oe.current.join(ve),s,j)}var x=void 0!==F?F:!(!m||!m.some((function(e){if(e&&"object"===Object(p.a)(e)&&e.required)return!0;if("function"===typeof e){var t=e(l);return t&&t.required}return!1}))),g=Object(f.a)({},c),y=null;if(Object(U.a)(!(u&&o),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(v)&&ce)Object(U.a)(!1,"Form.Item","`children` is array of render props cannot have `name`."),y=v;else if(de&&(!u&&!o||ce))Object(U.a)(!(!u&&!o),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),Object(U.a)(!ce,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(!o||de||ce)if(Object(pe.b)(v)){Object(U.a)(void 0===v.props.defaultValue,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var w=Object(f.a)(Object(f.a)({},v.props),g);w.id||(w.id=b),Object(X.c)(v)&&(w.ref=se(d,v)),new Set([].concat(Object(n.a)(q(N)),Object(n.a)(q(re)))).forEach((function(e){w[e]=function(){for(var t,r,n,a,c,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];null===(n=g[e])||void 0===n||(t=n).call.apply(t,[g].concat(i)),null===(c=(a=v.props)[e])||void 0===c||(r=c).call.apply(r,[a].concat(i))}})),y=h.createElement(xe,{value:g[e.valuePropName||"value"],update:be.current},Object(pe.a)(v,w))}else de&&(u||o)&&!ce?y=v(l):(Object(U.a)(!d.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),y=v);else Object(U.a)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");return ue(y,b,i,x)}))},ye=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},we=function(e){var t=e.prefixCls,r=e.children,n=ye(e,["prefixCls","children"]);Object(U.a)(!!n.name,"Form.List","Miss `name` prop.");var a=(0,h.useContext(y.b).getPrefixCls)("form",t);return h.createElement(g.c,n,(function(e,t,n){return h.createElement(F.Provider,{value:{prefixCls:a,status:"error"}},r(e.map((function(e){return Object(f.a)(Object(f.a)({},e),{fieldKey:e.key})})),t,{errors:n.errors}))}))},Ee=W;Ee.Item=ge,Ee.List=we,Ee.ErrorList=me,Ee.useForm=D,Ee.Provider=function(e){var t=Object(w.a)(e,["prefixCls"]);return h.createElement(g.b,t)},Ee.create=function(){Object(U.a)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};var Ce=Ee,Fe=r("2fM7"),Ie=r("5rEg");function ke(e){var t=e.onFinish;return Object(a.jsxs)(Ce,{style:{width:"100%",paddingTop:10},labelCol:{span:4},wrapperCol:{span:14},onFinish:t,children:[Object(a.jsx)(Ce.Item,{label:"\u4ea4\u6613\u5f62\u5f0f\uff1a",rules:[{required:!0}],name:"transType",children:Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(Fe.a.Option,{value:"\u957f\u534f",children:"\u957f\u534f"}),Object(a.jsx)(Fe.a.Option,{value:"\u73b0\u8d27",children:"\u73b0\u8d27"})]})}),Object(a.jsx)(Ce.Item,{label:"\u4fdd\u8bc1\u91d1\uff1a",rules:[{required:!0}],name:"securityDeposit",children:Object(a.jsx)(Ie.a,{type:"number"})}),Object(a.jsx)(Ce.Item,{label:"\u51fa\u5e93\u4fe1\u606f\uff1a",rules:[{required:!0}],name:"outInfo",children:Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(Fe.a.Option,{value:"\u73e0\u6d77xxx\u7801\u5934",children:"\u73e0\u6d77xxx\u7801\u5934"}),Object(a.jsx)(Fe.a.Option,{value:"\u4e0a\u6d77xxx\u7801\u5934",children:"\u4e0a\u6d77xxx\u7801\u5934"}),Object(a.jsx)(Fe.a.Option,{value:"\u9752\u5c9bxxx\u7801\u5934",children:"\u9752\u5c9bxxx\u7801\u5934"})]})}),Object(a.jsx)(Ce.Item,{label:"\u5165\u5e93\u4fe1\u606f\uff1a",rules:[{required:!0}],name:"inInfo",children:Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(Fe.a.Option,{value:"\u73e0\u6d77xxx\u7801\u5934",children:"\u73e0\u6d77xxx\u7801\u5934"}),Object(a.jsx)(Fe.a.Option,{value:"\u4e0a\u6d77xxx\u7801\u5934",children:"\u4e0a\u6d77xxx\u7801\u5934"}),Object(a.jsx)(Fe.a.Option,{value:"\u9752\u5c9bxxx\u7801\u5934",children:"\u9752\u5c9bxxx\u7801\u5934"})]})}),Object(a.jsx)(Ce.Item,{label:"\u8fd0\u8d39\uff1a",rules:[{required:!0}],name:"shipping",children:Object(a.jsx)(Ie.a,{type:"number"})}),Object(a.jsxs)(Ce.Item,{label:"\u6d77\u5173\uff1a",rules:[{required:!0}],style:{marginBottom:0},children:[Object(a.jsx)(Ce.Item,{name:"customs",style:{width:"32%",display:"inline-block"},children:Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(Fe.a.Option,{value:"\u73e0\u6d77xxx\u5173\u53e3",children:"\u73e0\u6d77xxx\u5173\u53e3"}),Object(a.jsx)(Fe.a.Option,{value:"\u4e0a\u6d77xxx\u5173\u53e3",children:"\u4e0a\u6d77xxx\u5173\u53e3"}),Object(a.jsx)(Fe.a.Option,{value:"\u9752\u5c9bxxx\u5173\u53e3",children:"\u9752\u5c9bxxx\u5173\u53e3"})]})}),Object(a.jsx)(Ce.Item,{name:"customsAgent",style:{width:"32%",display:"inline-block",marginLeft:"2%"},children:Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(Fe.a.Option,{value:"A\u4ee3\u7406\u516c\u53f8",children:"A\u4ee3\u7406\u516c\u53f8"}),Object(a.jsx)(Fe.a.Option,{value:"B\u4ee3\u7406\u516c\u53f8",children:"B\u4ee3\u7406\u516c\u53f8"})]})}),Object(a.jsx)(Ce.Item,{name:"customsFee",style:{width:"32%",display:"inline-block",marginLeft:"2%"},children:Object(a.jsx)(Ie.a,{type:"number",placeholder:"\u6d77\u5173\u8d39\u7528"})})]}),Object(a.jsxs)(Ce.Item,{label:"\u4fdd\u9669\uff1a",rules:[{required:!0}],style:{marginBottom:0},children:[Object(a.jsx)(Ce.Item,{name:"insurance",style:{width:"49%",display:"inline-block"},children:Object(a.jsxs)(Fe.a,{children:[Object(a.jsx)(Fe.a.Option,{value:"\u5e73\u5b89\u4fdd\u9669\u516c\u53f8",children:"\u5e73\u5b89\u4fdd\u9669\u516c\u53f8"}),Object(a.jsx)(Fe.a.Option,{value:"\u592a\u5e73\u6d0b\u4fdd\u9669\u516c\u53f8",children:"\u592a\u5e73\u6d0b\u4fdd\u9669\u516c\u53f8"})]})}),Object(a.jsx)(Ce.Item,{name:"insuranceFee",style:{width:"49%",display:"inline-block",marginLeft:"2%"},children:Object(a.jsx)(Ie.a,{type:"number",placeholder:"\u4fdd\u9669\u8d39\u7528"})})]}),Object(a.jsx)(Ce.Item,{labelAlign:"right",wrapperCol:{offset:10},children:Object(a.jsx)(l.a,{type:"primary",htmlType:"submit",children:"\u4e0b\u4e00\u6b65"})})]})}function Pe(e){var t=e.onFinish;return Object(a.jsxs)(Ce,{style:{width:"100%"},labelCol:{span:4},wrapperCol:{span:14},onFinish:t,children:[Object(a.jsx)(Ce.Item,{label:"\u4ea4\u6613\u6761\u6b3e",name:"transTerm",children:Object(a.jsx)(Ie.a.TextArea,{rows:15})}),Object(a.jsx)(Ce.Item,{labelAlign:"right",wrapperCol:{offset:10},children:Object(a.jsx)(l.a,{type:"primary",htmlType:"submit",children:"\u4e0b\u4e00\u6b65"})})]})}var Ne=r("7Tky");function _e(e){var t=e.onFinish,r=Object(d.a)().demoData,n=j.a.get(r.orderForm,"outInfo"),c=j.a.get(r.orderForm,"inInfo"),o="\u957f\u534f"===j.a.get(r.orderForm,"transType");return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(Ne.d,{label:"\u51fa\u5e93\u4fe1\u606f\uff1a",text:n}),Object(a.jsx)(Ne.d,{label:"\u5165\u5e93\u4fe1\u606f\uff1a",text:c}),Object(a.jsx)(Ne.d,{label:"\u662f\u5426\u957f\u534f\uff1a",text:o?"\u662f":"\u5426"}),Object(a.jsxs)(Ce,{style:{width:"100%"},labelCol:{span:4},wrapperCol:{span:14},onFinish:t,children:[o&&Object(a.jsx)(Ce.Item,{label:"\u957f\u534f\u5408\u540c\u53f7\uff1a",rules:[{required:!0}],name:"longTransId",children:Object(a.jsx)(Ie.a,{type:"text"})}),Object(a.jsx)(Ce.Item,{labelAlign:"right",wrapperCol:{offset:10},children:Object(a.jsx)(l.a,{type:"primary",htmlType:"submit",children:"\u786e\u8ba4\u8d27\u5355"})})]})]})}function Re(e){var t=e.onFinish;return Object(a.jsxs)(Ce,{style:{width:"100%"},labelCol:{span:4},wrapperCol:{span:14},onFinish:t,children:[Object(a.jsx)(Ce.Item,{label:"\u5546\u5e01\u90e8\u5206\uff1a",rules:[{required:!0}],name:"moneyCoin",children:Object(a.jsx)(Ie.a,{type:"number"})}),Object(a.jsx)(Ce.Item,{label:"\u9ec4\u91d1\u90e8\u5206\uff1a",name:"moneyGold",children:Object(a.jsx)(Ie.a,{type:"number"})}),Object(a.jsx)(Ce.Item,{label:"\u7533\u8bf7\u8d37\u6b3e\uff1a",name:"moneyLoan",children:Object(a.jsx)(Ie.a,{type:"number"})}),Object(a.jsx)(Ce.Item,{labelAlign:"right",wrapperCol:{offset:10},children:Object(a.jsx)(l.a,{type:"primary",htmlType:"submit",children:"\u786e\u8ba4\u5e76\u51bb\u7ed3\u4fdd\u8bc1\u91d1"})})]})}function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Me(){var e=Object(d.a)(),t=e.demoData,r=e.updateDemoData,n=t.orderForm,c=(n&&t.orderForm,Object(h.useState)(1)),o=c[0],i=c[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ne.b,{}),1===o&&Object(a.jsx)(ke,{onFinish:function(e){r({orderForm:qe(qe({},n),e)}),i(2)}}),2===o&&Object(a.jsx)(Pe,{onFinish:function(e){r({orderForm:qe(qe({},n),e)}),i(3)}}),3===o&&Object(a.jsx)(_e,{onFinish:function(e){r({orderForm:qe(qe({},n),e)}),i(4)}}),4===o&&Object(a.jsx)(Re,{onFinish:function(e){r({orderForm:qe(qe(qe({},n),e),{},{status:4})})}})]})}function Se(){var e=Object(d.a)(),t=e.demoData,r=e.updateDemoData,n=t.orderForm,c=n?[t.orderForm]:[],s=(j.a.get(n,"status",0),j.a.get(n,"riskLevel",0));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.a,{columns:u.a,dataSource:c,pagination:!1}),c.map((function(e,c){return Object(a.jsx)("table",{style:{width:"100%",tableLayout:"auto"},children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{style:{backgroundColor:"white"},children:[Object(a.jsxs)("td",{style:{padding:30},children:[" ","#".concat(c+1)," "]}),Object(a.jsxs)("td",{style:{padding:30},children:[" ",j.a.get(e,"buyerName","")," "]}),Object(a.jsxs)("td",{style:{padding:30},children:[" ","\u610f\u5411\u4ef7\uff1a".concat(j.a.get(e,"intentionAmount",0))]}),Object(a.jsxs)("td",{style:{padding:30},children:[" ","\u98ce\u9669\u7b49\u7ea7\uff1a".concat(s)," "]}),Object(a.jsx)("td",{style:{padding:30},children:Object(a.jsx)(i.a,{children:Object(a.jsx)(l.a,{onClick:function(){r(qe(qe({},t),{},{orderForm:qe(qe({},n),{},{status:2})}))},children:" \u9009\u4e2d "})})})]})})},"seller_".concat(c))}))]})}function De(){var e=Object(d.a)(),t=e.demoData,r=e.updateDemoData,c=t.orderForm,b=c?[t.orderForm]:[],m=(j.a.get(c,"status",0),j.a.get(c,"riskLevel",0),function(){s.a.info({title:"\u4e70\u5bb6\u4fe1\u606f",content:"\u516c\u53f8\u540d\u79f0\uff1a xxx\u516c\u53f8  \u7535\u8bdd\uff1a xxx-xxxxxx"})}),f=function(){r({orderForm:qe(qe(qe({},c),b),{},{status:3})})},p=[].concat(Object(n.a)(u.b),[{render:function(e){return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(l.a,{children:"\u8054\u7cfb\u4e70\u5bb6",onClick:m}),Object(a.jsx)("div",{style:{height:10}}),Object(a.jsx)(l.a,{children:"\u521b\u5efa\u8ba2\u5355",onClick:f})]})}}]);return Object(a.jsx)(o.a,{columns:p,dataSource:b,pagination:!1})}function Ae(){var e=Object(d.a)().demoData.orderForm,t=j.a.get(e,"status",0);return Object(a.jsxs)(b.a,{children:[1===t&&Object(a.jsx)(Se,{}),2===t&&Object(a.jsx)(De,{}),3===t&&Object(a.jsx)(Me,{})]})}}},[["2hC3",2,1,4,8,6,0,5,3,7,9]]]);