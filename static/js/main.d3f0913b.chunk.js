(this.webpackJsonpgovtest=this.webpackJsonpgovtest||[]).push([[0],{146:function(e,t,n){},147:function(e,t,n){},155:function(e,t,n){},159:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),s=n.n(c),i=(n(146),n(65)),o=n(18),l=(n(147),n(17)),u=n.n(l),d=n(23),j=n(7),h=n(103),b=n(44),m=n(74),p=n.p+"static/media/login_bg.482d8066.png",f="https://mxz0fg1wda.execute-api.ap-southeast-1.amazonaws.com",O=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/v1/auth/get_otp_email"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/v1/auth/get_jwt_token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,otp:n})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/v1/auth/get_apps"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(63),N="USER_STORE",w=new function e(){var t=this;Object(g.a)(this,e),this.store=void 0,this.setStore=function(e){t.store=e,sessionStorage.setItem(N,JSON.stringify(e))},this.getToken=function(){var e;return null===(e=t.store)||void 0===e?void 0:e.jwt},this.hasPermission=function(e){var n;return null===(n=t.store)||void 0===n?void 0:n.apps.some((function(t){var n=t.name;return e===n}))},this.clear=function(){t.store=null,sessionStorage.removeItem(N)},this.store=JSON.parse(sessionStorage.getItem(N)||"{}")},y=(n(155),n(4)),S=function(){var e=Object(o.g)(),t=Object(r.useState)("EMAIL"),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),l=i[0],f=i[1],v=Object(r.useState)(!1),g=Object(j.a)(v,2),N=g[0],S=g[1],k=Object(r.useState)(""),C=Object(j.a)(k,2),P=C[0],E=C[1],T=Object(m.useSnackbar)(),_=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(l);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,t.ok?c("OTP"):T.showMessage("GetOTP failed: "+n.detail);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var t=Object(d.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(l,P);case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,n.ok?(w.setStore(r),e.replace("/"+window.location.hash)):(T.showMessage("Login failed: "+r.detail),e.replace("/login"));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"login-screen",children:[Object(y.jsx)("section",{className:"hero",style:{backgroundImage:"url(".concat(p,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),Object(y.jsx)("section",{children:Object(y.jsxs)("div",{className:"login-container",children:[Object(y.jsxs)("span",{className:"title",children:["CapDev",Object(y.jsx)("b",{children:"Portal"})]}),Object(y.jsxs)("span",{className:"tagline",children:["The Future is ",Object(y.jsx)("i",{children:"Now"})]}),"EMAIL"===a&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{className:"text",children:"Enter your Email Address and we will send you a One-Time Password (OTP) to enter below."}),Object(y.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsx)(h.a,{className:"textfield",required:!0,type:"email",label:"Email",variant:"outlined",placeholder:"e.g. glenn@dsaid.gov.sg",onChange:function(e){var t;f(e.target.value),t=e.target.value,/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/.test(t.toUpperCase())?S(!1):S(!0)},error:N,helperText:N&&"Invalid Email"})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)(b.a,{className:"get-otp",size:"large",color:"primary",variant:"contained",disabled:0===l.length||N,onClick:function(){return _()},children:Object(y.jsx)("b",{children:"GET OTP"})}),Object(y.jsxs)("div",{className:"text register",children:[Object(y.jsx)("span",{children:"Not a registered user yet?"}),Object(y.jsx)("br",{}),Object(y.jsx)("a",{href:"#",children:"Contact Us."})]})]})]})]}),"OTP"===a&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{className:"text",children:"An OTP has been emailed to you. Enter OTP below."}),Object(y.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsx)(h.a,{className:"textfield",autoComplete:"one-time-code",required:!0,type:"text",label:"One-Time Password",variant:"outlined",placeholder:"OTP",inputProps:{maxLength:5},onChange:function(e){E(e.target.value)}})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)(b.a,{size:"large",color:"primary",variant:"contained",onClick:function(){return z()},children:Object(y.jsx)("b",{children:"LOGIN"})}),Object(y.jsx)(b.a,{className:"resend",size:"large",onClick:function(){return _()},children:"RESEND OTP"})]})]})]})]})})]})},k=n(119),C=n.n(k),P=(n(159),function(){var e=Object(o.g)();return Object(y.jsx)("header",{children:Object(y.jsxs)("div",{className:"content",children:[Object(y.jsxs)("div",{className:"title",onClick:function(){e.push("/")},children:["CapDev",Object(y.jsx)("b",{children:"Portal"})]}),Object(y.jsx)("div",{className:"logout",children:Object(y.jsx)(b.a,{color:"default",size:"large",endIcon:Object(y.jsx)(C.a,{fontSize:"inherit"}),onClick:function(){e.replace("/logout")},children:"Log Out"})})]})})}),E=n(20),T=n(220),_=n(221),z=n(222),D=n(223),A=n(175),F=function(e){var t=e.title,n=e.img,r=e.name,a=Object(o.g)();return Object(y.jsx)(T.a,{onClick:function(){w.hasPermission(r)&&a.replace("/"+r)},className:w.hasPermission(r)?"":"disabled",children:Object(y.jsxs)(_.a,{children:[Object(y.jsx)(z.a,{image:n,title:t}),Object(y.jsx)(D.a,{children:Object(y.jsx)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})})]})})},L=(n(164),n(228)),I=n(176),W={title:"Project 1",name:"project1",desc:"a dummy project for testing permissions"},J=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,t.ok&&a([].concat(Object(E.a)(n.apps),[W]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),Object(y.jsx)(y.Fragment,{children:n&&n.length?Object(y.jsx)("div",{className:"dashboard-container",children:null===n||void 0===n?void 0:n.map((function(e){return Object(y.jsx)(F,{name:e.name,title:e.title,img:"https://picsum.photos/id/4/300/200"},e.name)}))}):Object(y.jsx)(L.a,{open:!0,children:Object(y.jsx)(I.a,{size:64,color:"inherit"})})})},R=n(53),M=n(229),V=n(224),B=n(226),G=n(120),U=n(225),H=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://u7yhkrlx15.execute-api.ap-southeast-1.amazonaws.com"+t,Object(R.a)(Object(R.a)({},n),{},{headers:Object(R.a)(Object(R.a)({},n.headers),{},{authorization:"Bearer ".concat(w.getToken()),"Content-Type":"application/json"})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("/v1/profiles/fetch_by_json",{method:"POST",body:JSON.stringify({emails:t,emp_nums:n})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("/v1/profiles/fetch_by_csv",{method:"POST",body:JSON.stringify({emails:t,emp_nums:n})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=(n(165),function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(j.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)([]),m=Object(j.a)(l,2),p=m[0],f=m[1],O=Object(r.useState)(),x=Object(j.a)(O,2),v=x[0],g=x[1],N=Object(r.useState)(!1),w=Object(j.a)(N,2),S=w[0],k=w[1],C=function(){var e=Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Z(i,p);case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,k(!1),t.ok&&(g(r),a(n+1));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,q(i,p);case 3:return t=e.sent,e.next=6,t.text();case 6:n=e.sent,k(!1),t.ok&&(r=window.URL.createObjectURL(new Blob([n])),(a=document.createElement("a")).href=r,a.setAttribute("download",String((new Date).valueOf())+".csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){return e.replaceAll("\n"," ").trim().split(/[ ,;]+/)};return Object(y.jsxs)("div",{className:"staff-profile-container",children:[Object(y.jsx)("div",{className:"title",children:"Staff Profile Fetcher"}),Object(y.jsx)("div",{className:"stepper-container",children:Object(y.jsx)(M.a,{activeStep:n,alternativeLabel:!0,children:["Upload Data","Download"].map((function(e){return Object(y.jsx)(V.a,{children:Object(y.jsx)(B.a,{children:e})},e)}))})}),0===n&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("p",{className:"text",children:["Enter list of emails and/or employee numbers to search.",Object(y.jsx)("br",{}),"(Deliminate each record by white space or comma or semicolon)"]}),Object(y.jsxs)("div",{className:"input-container",children:[Object(y.jsx)(h.a,{label:"Emails",multiline:!0,rows:15,variant:"outlined",onChange:function(e){return o(E(e.target.value))},defaultValue:i.join("\n")}),Object(y.jsx)(h.a,{label:"Employee Numbers",multiline:!0,rows:15,variant:"outlined",onChange:function(e){return f(E(e.target.value))},defaultValue:p.join("\n")})]})]}),1===n&&v&&(!!v.missing_emails.length||!!v.missing_emp_nums.length)&&Object(y.jsxs)("div",{className:"error-results-container",children:[Object(y.jsx)("div",{className:"error-text",children:"List of emails and/or employee numbers not found"}),Object(y.jsxs)("div",{className:"error-table-container",children:[!!v.missing_emails.length&&Object(y.jsxs)("div",{className:"error-table",children:[Object(y.jsx)("div",{className:"error-header",children:"Email Address"}),v.missing_emails.map((function(e){return Object(y.jsx)("div",{className:"error-row",children:e},e)}))]}),!!v.missing_emp_nums.length&&Object(y.jsxs)("div",{className:"error-table",children:[Object(y.jsx)("div",{className:"error-header",children:"Employee No."}),v.missing_emp_nums.map((function(e){return Object(y.jsx)("div",{className:"error-row",children:e},e)}))]})]})]}),1===n&&v&&!!v.profiles.length&&Object(y.jsxs)("div",{className:"profiles-container",children:[Object(y.jsx)("div",{className:"profiles-text",children:"Found Profiles"}),Object(y.jsx)("div",{style:{display:"flex",height:"100%",width:"100%"},children:Object(y.jsx)("div",{style:{flexGrow:1},children:Object(y.jsx)(G.a,{disableSelectionOnClick:!0,autoHeight:!0,columns:[{field:"Display Name",headerName:"Display Name",minWidth:200,flex:1},{field:"Email",headerName:"Email Address",minWidth:200,flex:1},{field:"Employee Number",headerName:"Employee No.",minWidth:200,flex:1},{field:"Reporting Officer",headerName:"Reporting Officer",minWidth:200,flex:1},{field:"Division",headerName:"Division",minWidth:200,flex:1},{field:"Employee Group",headerName:"Employee Group",minWidth:200,flex:1},{field:"HQ/SVC",headerName:"HQ/SVC",minWidth:200,flex:1},{field:"Manager",headerName:"Manager",minWidth:200,flex:1},{field:"Org Chain",headerName:"Org Chain",minWidth:200,flex:1}],rows:v.profiles.map((function(e,t){return Object(R.a)(Object(R.a)({},e),{},{id:t})}))})})})]}),Object(y.jsxs)("div",{className:"button-container",children:[Object(y.jsx)(b.a,{size:"large",onClick:function(){0!==n&&a(n-1)},disabled:S,children:"BACK"}),0===n&&Object(y.jsxs)(b.a,{color:"primary",variant:"contained",size:"large",onClick:function(){return C()},disabled:S,children:["NEXT\xa0",S&&Object(y.jsx)(I.a,{size:24,color:"inherit"})]}),1===n&&Object(y.jsxs)(b.a,{color:"primary",variant:"contained",size:"large",startIcon:Object(y.jsx)(U.a,{}),onClick:function(){return P()},disabled:S||!(null===v||void 0===v?void 0:v.profiles.length),children:["DOWNLOAD CSV\xa0",S&&Object(y.jsx)(I.a,{size:24,color:"inherit"})]})]})]})});var K=function(){return Object(y.jsx)(m.SnackbarProvider,{SnackbarProps:{autoHideDuration:4e3},children:Object(y.jsxs)(i.a,{children:[Object(y.jsxs)(o.d,{children:[Object(y.jsx)(o.b,{path:"/login",render:function(e){return!!w.getToken()&&e.history.replace("/"),Object(y.jsx)(S,{})}}),Object(y.jsx)(o.b,{path:"/logout",render:function(e){e.history;return w.clear(),Object(y.jsx)(o.a,{to:"/login"})}})]}),Object(y.jsx)(X,{children:Object(y.jsx)(o.b,{render:function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P,{}),Object(y.jsx)("div",{className:"main",children:Object(y.jsxs)(o.d,{children:[Object(y.jsx)(o.b,{path:"/staff_profiles",component:Q}),Object(y.jsx)(o.b,{path:"/",component:J})]})})]})}})})]})})},X=function(e){var t=e.children;return!!w.getToken()?Object(y.jsx)(y.Fragment,{children:t}):Object(y.jsx)(o.a,{to:"/login"})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(K,{})}),document.getElementById("root")),Y()}},[[168,1,2]]]);
//# sourceMappingURL=main.d3f0913b.chunk.js.map