(this["webpackJsonpcpsc455-assignments-2"]=this["webpackJsonpcpsc455-assignments-2"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(15),i=n.n(a),s=(n(21),n(1)),o=n.n(s),l=n(2),u=n(4),d=(n(23),n(0));var j=function(){return Object(d.jsx)("div",{className:"nav",children:Object(d.jsx)("h1",{children:"YC Art Gallery"})})};var p=function(){return Object(d.jsx)("div",{className:"nav nav-bar",children:Object(d.jsxs)("ul",{id:"nav-bar-list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"index.html",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"about.html",children:"About"})})]})})};var b=function(e){var t=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.stopPropagation(),t.next=3,e.onDeleteOneArt(e.id);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("li",{className:"card-flex-item",children:Object(d.jsxs)("div",{className:"card",onClick:function(){e.onModalClick(e.id)},children:[Object(d.jsx)("img",{src:e.url,alt:"ImageCard"}),Object(d.jsx)("div",{className:"ref",children:Object(d.jsx)("h4",{children:e.name})}),Object(d.jsx)("input",{className:"delete-one-art",type:"button",value:"\u2716",onClick:t})]})})};var h=function(e){var t=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onDeleteOneArt(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(t){e.onModalClick(t)};return!0===e.isLoading?Object(d.jsx)("div",{className:"card-container",children:Object(d.jsx)("ul",{id:"card-flex-container",children:Object(d.jsx)("h2",{children:"Loading..."})})}):0===e.items.length?Object(d.jsx)("div",{className:"card-container",children:Object(d.jsx)("ul",{id:"card-flex-container",children:Object(d.jsx)("h2",{children:"No Art Found."})})}):Object(d.jsx)("div",{className:"card-container",children:Object(d.jsx)("ul",{id:"card-flex-container",children:e.items.map((function(e){return Object(d.jsx)(b,{id:e.id,name:e.name,url:e.url,detail:e.detail,onDeleteOneArt:t,onModalClick:n},e.id)}))})})};var f=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),s=Object(u.a)(i,2),j=s[0],p=s[1],b=Object(r.useState)(""),h=Object(u.a)(b,2),f=h[0],x=h[1],O=Object(r.useState)(!1),v=Object(u.a)(O,2),m=v[0],g=v[1],w=function(){var t=Object(l.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={name:c,url:j,detail:f},g(!0),t.next=5,e.onAddArt(r);case 5:g(!1),y();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){a(""),p(""),x("")},k=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onDeleteAllArts();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"form-input",children:Object(d.jsxs)("form",{onSubmit:w,children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-left",children:Object(d.jsx)("label",{htmlFor:"artist",children:"Artist Name:"})}),Object(d.jsx)("div",{className:"col-right",children:Object(d.jsx)("input",{type:"text",id:"artist",placeholder:"Enter artist name",value:c,onChange:function(e){a(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-left",children:Object(d.jsx)("label",{htmlFor:"imageURL",children:"Image URL:"})}),Object(d.jsx)("div",{className:"col-right",children:Object(d.jsx)("input",{type:"text",id:"imageURL",placeholder:"Enter image URL",value:j,onChange:function(e){p(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-left",children:Object(d.jsx)("label",{htmlFor:"detail",children:"Detail:"})}),Object(d.jsx)("div",{className:"col-right",children:Object(d.jsx)("input",{type:"text",id:"detail",placeholder:"Enter details",value:f,onChange:function(e){x(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"row-button",children:[Object(d.jsx)("button",{type:"submit",disabled:m,children:"Add Image"}),Object(d.jsx)("button",{type:"button",onClick:y,disabled:m,children:"Clear Input"})]}),Object(d.jsx)("div",{className:"row-button",children:Object(d.jsx)("button",{id:"form-deleteAllButton",type:"button",onClick:k,children:"Delete All Arts"})})]})})};var x=function(e){var t=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onAddArt(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onDeleteAllArts();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsx)("h2",{children:"Adding a new piece of art"}),Object(d.jsx)(f,{onAddArt:t,onDeleteAllArts:n})]})};var O=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(e.item.detail),s=Object(u.a)(i,2),j=s[0],p=s[1],b=Object(r.useState)(!1),h=Object(u.a)(b,2),f=h[0],x=h[1];Object(r.useEffect)((function(){return p(e.item.detail)}),[e.item.detail]);var O=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=5;break}return x(!0),t.next=4,e.onEdit(e.item.id,j);case 4:x(!1);case 5:a((function(e){return!e}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{children:e.shown&&Object(d.jsx)("div",{className:"modal-card",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("span",{className:"modal-close",onClick:function(){a(!1),e.onClose()},children:"\u2716"}),Object(d.jsx)("h2",{children:"Detail"})]}),Object(d.jsxs)("div",{className:"modal-body",children:[!c&&Object(d.jsx)("p",{children:e.item.detail}),c&&Object(d.jsx)("input",{className:"modal-edit-input",type:"text",id:"detail-modal",placeholder:"Enter details",value:j,onChange:function(e){p(e.target.value)}}),Object(d.jsxs)("button",{onClick:O,disabled:f,children:[" ",!c&&"Edit"," ",c&&"Save"," "]})]})]})})})},v=n(16),m=n.n(v).a.create({baseURL:"https://yc-art-gallery.herokuapp.com",timeout:1e3,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});function g(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/exhibits/");case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.post("/exhibits/",{name:t.name,url:t.url,detail:t.detail});case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function A(e,t){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.patch("/exhibits/".concat(t),{detail:n});case 3:r=e.sent,console.log(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(e){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.delete("/exhibits/".concat(t));case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function S(){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.delete("/exhibits/all");case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var E=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(u.a)(a,2),s=i[0],b=i[1],f=Object(r.useState)({id:"",url:"",name:"",detail:""}),v=Object(u.a)(f,2),m=v[0],w=v[1],k=Object(r.useState)(!1),N=Object(u.a)(k,2),L=N[0],D=N[1],E=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading&&D(!0),e.next=3,g();case 3:n=e.sent,t.showLoading&&D(!1),c(n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){E({showLoading:!0})}),[]),Object(r.useEffect)((function(){w((function(e){return""!==e.id?n.find((function(t){return t.id===e.id})):e}))}),[n]);var F=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,n);case 2:return e.next=4,E({showLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return e.next=4,E({showLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return e.next=4,E({showLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return e.next=4,E({showLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(p,{}),Object(d.jsx)(h,{items:n,isLoading:L,onDeleteOneArt:R,onModalClick:function(e){var t=n.find((function(t){return t.id===e}));w(t),b(!0)}}),Object(d.jsx)(x,{onAddArt:I,onDeleteAllArts:M}),Object(d.jsx)(O,{item:m,shown:s,onClose:function(){w({id:"",url:"",name:"",detail:""}),b(!1)},onEdit:F})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),F()}},[[43,1,2]]]);
//# sourceMappingURL=main.7ea6ad48.chunk.js.map