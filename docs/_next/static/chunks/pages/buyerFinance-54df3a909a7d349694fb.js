_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{PFtZ:function(e,t,r){"use strict";r.r(t),r.d(t,"FinanceOrders",(function(){return O})),r.d(t,"default",(function(){return l}));var n=r("nKUr"),c=r("rePB"),o=r("BMrR"),i=r("2/Rp"),a=r("LvDl"),u=r.n(a),s=r("Re8R"),p=r("RFev"),b=r("0WD7"),j=r("7Tky");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t,r=e.isBuyer2,a=void 0!==r&&r,b=Object(s.a)(),f=b.demoData,O=b.updateDemoData,l=a?"orderForm2":"orderForm",y=null!==(t=f[l])&&void 0!==t?t:{},w=u.a.get(y,"status",0),m=4===w?u.a.toNumber(u.a.get(y,"securityDeposit",0)):7===w?100:10===w?8e4:0;if(w<4)return null;var h=function(e){O(Object(c.a)({},l,d(d({},y),{},{status:e}))),Object(p.b)()};return Object(n.jsxs)(j.b,{orderForm:y,children:[m>0&&Object(n.jsx)(j.c,{label:"Need to pay\uff1a",text:m,style:{color:"#ec5c08",fontSize:18,fontWeight:600}}),Object(n.jsxs)(o.a,{justify:"center",style:{width:"100%",padding:"10px 0"},children:[4===w&&Object(n.jsx)(i.a,{type:"primary",children:"Determine and pay security deposit",onClick:function(){return h(5)}}),7===w&&Object(n.jsx)(i.a,{type:"primary",children:"Determine and pay service fee",onClick:function(){return h(8)}}),10===w&&Object(n.jsx)(i.a,{type:"primary",children:"Confirm payment of balance",onClick:function(){return h(88)}})]})]})}function l(){return Object(n.jsx)(b.a,{children:Object(n.jsx)(O,{})})}},UBjN:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buyerFinance",function(){return r("PFtZ")}])}},[["UBjN",2,1,3,8,6,7,0,4,5,9]]]);