_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{NuBo:function(e,t,r){"use strict";r.r(t),r.d(t,"GoodsList",(function(){return S})),r.d(t,"PendingOrder",(function(){return R})),r.d(t,"default",(function(){return B}));var n=r("nKUr"),o=r("rePB"),c=r("KQm4"),i=r("2/Rp"),a=r("wCAj"),s=r("kLXV"),u=r("5rEg"),j=r("kPKH"),d=r("BMrR"),b=r("LvDl"),O=r.n(b),f=r("nOHt"),l=r("q1tI"),p=r("/MKj"),m=r("zqcQ"),y=r("Re8R"),h=r("Kk9b"),x=r("RFev"),g=r("Tfof"),F=r("3CQt"),v=r("PSyV"),D=r("Rr3P"),w=r("xxh2"),k=r("Vt73"),P=r("0WD7"),T=r("7Tky");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=e.isBuyer2,r=void 0!==t&&t,o=Object(y.a)(),j=(o.demoData,o.updateDemoData),d=Object(l.useState)(!1),b=d[0],p=d[1],h=Object(l.useState)(0),g=h[0],F=h[1],v=Object(l.useState)(null),D=v[0],w=v[1],k=(Object(f.useRouter)(),[].concat(Object(c.a)(m.c),[{render:function(e){return Object(n.jsx)(i.a,{onClick:function(){r||(w(e),F(O.a.toNumber(O.a.get(e,"price",0))),p(!0))},children:"Send intent"})}}])),P=g>=O.a.toNumber(O.a.get(D,"price",0));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(a.a,{columns:k,dataSource:m.f,pagination:!1}),Object(n.jsx)(s.a,{visible:b,title:"Intention price",onCancel:function(){p(!1),F(0)},okType:P?"primary":"default",onOk:function(){P&&(j({orderForm:C(C({},D),{},{intentionAmount:g,status:1}),orderForm2:void 0}),p(!1),F(0),Object(x.b)())},children:Object(n.jsx)(u.a,{type:"number",value:g,onChange:function(e){return F(O.a.toNumber(e.target.value))},required:!0})})]})}function N(){var e=Object(y.a)(),t=e.demoData,r=e.updateDemoData,o=t.orderForm2,c=Object(l.useState)(1),i=c[0],a=c[1],s=function(e,t,n){var c=null!==n&&void 0!==n?n:O.a.get(o,"status",0);r({orderForm2:C(C(C({},o),e),{},{status:c})}),a(t)};return Object(n.jsxs)(n.Fragment,{children:[1===i&&Object(n.jsx)(g.a,{orderForm:o,onFinish:function(e){return s(e,2)}}),2===i&&Object(n.jsx)(F.a,{orderForm:o,onFinish:function(e){return s(e,3)}}),3===i&&Object(n.jsx)(v.a,{orderForm:o,onFinish:function(e){return s(e,4)}}),4===i&&Object(n.jsx)(D.a,{orderForm:o,onFinish:function(e){return s(e,4,3)}})]})}function E(){var e=Object(y.a)(),t=e.demoData,r=e.updateDemoData,o=t.orderForm2,c=Object(l.useState)(5),i=c[0],a=c[1];return Object(n.jsxs)(n.Fragment,{children:[5===i&&Object(n.jsx)(w.a,{orderForm:o,onFinish:function(){a(6)}}),6===i&&Object(n.jsx)(k.a,{orderForm:o,onFinish:function(e){r({orderForm2:C(C({},o),{},{status:6},e)}),a(7)}})]})}function R(e){var t,r=e.isBuyer2,c=void 0!==r&&r,a=Object(y.a)(),u=a.demoData,b=a.updateDemoData,f=c?"orderForm2":"orderForm",l=null!==(t=u[f])&&void 0!==t?t:{},p=O.a.get(l,"status",0);if(0===p)return null;O.a.get(l,"isTurn");var h=u.orderForm2,g=O.a.get(h,"status",2),F=function(e){b(Object(o.a)({},f,C(C({},l),{},{status:e}))),Object(x.b)()};return Object(n.jsxs)(j.a,{style:{padding:10},children:[Object(n.jsx)(T.b,{orderForm:l,children:Object(n.jsxs)(d.a,{justify:"center",gutter:10,style:{padding:"10px 0"},children:[3===p&&Object(n.jsx)(i.a,{type:"primary",children:"Determine and pay security deposit",onClick:function(){return F(4)}}),6===p&&Object(n.jsx)(i.a,{type:"primary",children:"Determine and pay service fee",onClick:function(){return F(7)}}),8===p&&!c&&!h&&Object(n.jsx)(i.a,{type:"primary",children:"Transfer order",onClick:function(){s.a.confirm({title:"Tips",content:"A 3% fee will be charged for the transfer",maskClosable:!0,onOk:function(){b({orderForm2:C(C({},m.g),{},{status:2,isTurn:!0})}),Object(x.b)()}})}}),(9===p||8===p)&&(c||88===g||!h)&&Object(n.jsx)(i.a,{type:"primary",style:{marginLeft:10},children:"Confirm receipt",onClick:function(){return F(10)}})]})}),h&&!c&&Object(n.jsxs)("div",{style:{width:"100%",padding:10},children:[Object(n.jsx)("span",{style:{fontWeight:600,fontSize:16},children:"Transfer oreders:"}),Object(n.jsx)(T.b,{orderForm:h}),2===g&&Object(n.jsx)(N,{}),g>=5&&Object(n.jsx)(E,{})]})]})}function B(){var e=Object(p.c)(h.a);return Object(n.jsxs)(P.a,{children:["goods"===e&&Object(n.jsx)(S,{}),"orders"===e&&Object(n.jsx)(R,{})]})}},dnrT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buyer",function(){return r("NuBo")}])}},[["dnrT",2,1,3,8,6,7,0,4,5,9,10]]]);