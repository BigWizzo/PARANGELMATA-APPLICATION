(this["webpackJsonpparangelmata-application"]=this["webpackJsonpparangelmata-application"]||[]).push([[0],{221:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t(26),r=t.n(s),n=(t(88),t(82)),l=t(16),o=t(44),i=t.n(o),d=t(76),j=t(77),b=t.n(j),u=t(83),m=t(1),h=function(e){var a=e.onSub,t=Object(c.useState)(""),s=Object(u.a)(t,2),r=s[0],n=s[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:"country-form m-auto mb-5",onSubmit:function(e){e.preventDefault(),r&&n(r.charAt(0).toUpperCase()+r.slice(1)),r||alert("Please enter Country Name"),a({nat:r})},children:[Object(m.jsx)("div",{className:"my-form mb-3",children:Object(m.jsx)("input",{className:"form-control",type:"text",value:r,placeholder:"Enter Country",onChange:function(e){return n(e.target.value)}})}),Object(m.jsx)("div",{className:"d-grid gap-2 d-block",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary font-weight-bolder",value:"Submit",children:"Submit"})})]})})},O=function(e){var a=e.desc,t=e.trends,c=a.countryCode,s=a.label,r=t.yearOne,n=t.yearTwo,l=t.yearOneVal,o=t.yearTwoVal,i=t.currentStatus;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsxs)("div",{className:"row g-0",children:[Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card-body text-left",children:[Object(m.jsxs)("p",{className:"country-wrap font-22",children:[Object(m.jsx)("span",{children:"Country Name: "}),Object(m.jsx)("span",{className:"country-code green-800 font-22",children:s.toUpperCase()})]}),Object(m.jsxs)("p",{className:"card-text",children:[Object(m.jsx)("span",{children:"Country Code: "}),Object(m.jsx)("span",{className:"card-title",children:c})]}),Object(m.jsx)("p",{className:"mute-p",children:Object(m.jsxs)("small",{className:"text-muted",children:["In the last two years, There has been ",i," of livestock production in ",s,". The year ",r," had"," ",l," index and ",n," had ",o," index."]})})]})}),Object(m.jsxs)("div",{className:"col-md-4 text-center",children:[Object(m.jsx)("h4",{className:"card-hed font-italic",children:"TRENDS"}),Object(m.jsx)("hr",{classname:"hr"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{children:r}),Object(m.jsx)("div",{className:"icon-div py-3",children:Object(m.jsx)("div",{className:"icon-span ",children:o>l?Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("p",{className:"m-0 font-10 text-success",children:"Increase"}),Object(m.jsx)("p",{className:"increase m-0",children:Object(m.jsx)("i",{className:"far fa-arrow-alt-circle-up font-22 text-success"})})]}):o<l?Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("p",{className:"m-0 font-10 text-danger",children:"Decrease"}),Object(m.jsx)("p",{className:"decrease m-0",children:Object(m.jsx)("i",{className:"far fa-arrow-alt-circle-down font-22 text-danger"})})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"m-0 font-10 text-success",children:"No Change"}),Object(m.jsx)("p",{className:"no-change m-0",children:Object(m.jsx)("i",{className:"fas fa-arrows-alt-h font-22"})})]})})}),Object(m.jsx)("div",{children:n})]})]})]})})})},x=function(){var e=Object(l.b)(),a=Object(l.c)((function(e){return e.livestock}));return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("h1",{className:"py-4 text-center",children:"Parangelmata"}),Object(m.jsx)(h,{onSub:function(a){e(function(e){var a=e.nation;return function(){var e=Object(d.a)(i.a.mark((function e(t){var c,s,r,n,l,o,d,j,u,m,h,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"AWAITING_LIVESTOCK"}),e.next=4,b.a.get("https://anmlfarm.com/data/countrydata.json");case 4:c=e.sent,s=[],r=[],n=[],c.data.map((function(e){var t=e["Country Name"];t.toLowerCase()===a.toLowerCase()&&(Object.keys(e).forEach((function(e){s.push(e)})),Object.values(e).forEach((function(e){r.push(e)})),n.push(t))})),l=r.slice(41,61),o=s.slice(41,61),d=n.toString(),j=r.slice(62,63).toString(),u=s.slice(59,60).toString(),m=s.slice(60,61).toString(),h=parseInt(r.slice(59,60)),O=parseInt(r.slice(60,61)),!0===isNaN(h)&&(h="no recorded"),!0===isNaN(O)&&(O="no recorded"),console.log(h),console.log(O),t({type:"SUCCESS_LIVESTOCK",payload:{data:l,labels:o,label:d,natCode:j,status:function(){return h===O?"no change":h<O?"a decrease":"an increase"},yr1:u,yr2:m,yr1Val:h,yr2Val:O}}),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),t({type:"REJECTED_LIVESTOCK"});case 28:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(a){return e.apply(this,arguments)}}()}({nation:a.nat}))}}),Object(m.jsxs)("div",{className:"content",children:[a.loading&&Object(m.jsx)("h4",{className:"text-center",children:"Loading..."}),a.data.labels.length>0?Object(m.jsxs)("div",{className:"main-content-wrapper row m-0 p-3",children:[Object(m.jsx)("div",{className:"chart-wrapper col-md-6",children:Object(m.jsx)(n.a,{data:a.data})}),Object(m.jsx)("div",{className:"country-desc col-md-6",children:Object(m.jsx)(O,{desc:a.desc,trends:a.trends})})]}):Object(m.jsx)("div",{className:"empty text-center",children:!a.loading&&Object(m.jsx)("h4",{children:"Please enter Country Name and hit Submit"})})]})]})};var p=function(){return Object(m.jsx)("div",{className:"App text-light",children:Object(m.jsx)(x,{})})},y=t(6),N=t(78),f=t(79),v=t(4),g={loading:!1,data:{labels:[],datasets:[{label:"",data:[],backgroundColor:["rgba(0, 128, 0, 0.5)"],borderColor:["rgb(0, 128, 0)"],borderWidth:1}]},desc:{label:"",countryCode:""},trends:{yearOne:"",yearTwo:"",currentStatus:"",yearOneVal:"",yearTwoVal:""}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0,t=a.type,c=a.payload;switch(t){case"AWAITING_LIVESTOCK":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"REJECTED_LIVESTOCK":return Object(v.a)(Object(v.a)({},e),{},{loading:!1});case"SUCCESS_LIVESTOCK":return Object(v.a)(Object(v.a)({},e),{},{loading:!1,data:{labels:c.labels,datasets:[{label:c.label,data:c.data,backgroundColor:["rgba(0, 128, 0, 0.5)"],borderColor:["rgb(0, 128, 0)"],borderWidth:1}]},desc:{label:c.label,countryCode:c.natCode},trends:{yearOne:c.yr1,yearTwo:c.yr2,currentStatus:c.status(),yearOneVal:c.yr1Val,yearTwoVal:c.yr2Val}})}return e},S=Object(y.combineReducers)({livestock:C}),w=t(45),T=t(80),E={key:"root",storage:t.n(T).a},V=Object(w.a)(E,S),I=Object(y.createStore)(V,Object(N.composeWithDevTools)(Object(y.applyMiddleware)(f.a))),k=Object(w.b)(I),L=t(81);r.a.render(Object(m.jsx)(l.a,{store:I,children:Object(m.jsx)(L.a,{loading:null,persistor:k,children:Object(m.jsx)(p,{})})}),document.getElementById("root"))},88:function(e,a,t){}},[[221,1,2]]]);
//# sourceMappingURL=main.8a9bcde9.chunk.js.map