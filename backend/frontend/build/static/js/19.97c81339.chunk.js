(this.webpackJsonppickit=this.webpackJsonppickit||[]).push([[19],{241:function(e,t,r){"use strict";r.r(t);var s=r(42),n=r.n(s),a=r(43),c=r(40),o=r(0),i=r(11),l=r(134),u=r.n(l),d=r(1),j=function(e){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-eye-slash",viewBox:"0 0 16 16",style:{marginLeft:"8px",cursor:"pointer"},onClick:e.toggleEye,children:[Object(d.jsx)("path",{d:"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"}),Object(d.jsx)("path",{d:"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"}),Object(d.jsx)("path",{d:"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"})]})},m=function(e){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-eye",viewBox:"0 0 16 16",style:{marginLeft:"8px",cursor:"pointer"},onClick:e.toggleEye,children:[Object(d.jsx)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),Object(d.jsx)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})]})},b=r(65),h=r(53);t.default=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),r=t[0],s=t[1],l=Object(o.useState)(""),p=Object(c.a)(l,2),f=p[0],x=p[1],O=Object(o.useState)(""),g=Object(c.a)(O,2),w=g[0],v=g[1],y=Object(o.useState)(""),N=Object(c.a)(y,2),k=N[0],C=N[1],S=Object(o.useState)("password"),E=Object(c.a)(S,2),z=E[0],A=E[1],P=Object(o.useState)("password"),M=Object(c.a)(P,2),L=M[0],I=M[1],_=Object(o.useState)(!1),B=Object(c.a)(_,2),W=B[0],D=B[1],J=function(e){"password"===e?A("password"===z?"text":"password"):I("password"===L?"text":"password")},T=function(e){return u.a.isEmail(e)},U=function(e){return!!u.a.isStrongPassword(e,{minLength:8,minLowercase:1,minUppercase:1,minNumbers:2,minSymbols:0})},F=function(){var e=Object(a.a)(n.a.mark((function e(t){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s={username:r,password:w,email:f},Object(b.c)(s).then((function(){return window.location="/login"})).catch((function(e){406===e.response.status&&"3"===e.response.data.error.code?alert(e.response.data.error.message):406===e.response.status&&"1"===e.response.data.error.code?alert("The following username is already taken or an user already exists with the following email address."):500===e.response.status&&D(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container-fluid ",children:[W&&Object(d.jsx)(h.a,{title:"Internal Server Error",message:"We are sorry for Inconvenience. You can try reloading the page."}),!W&&Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsx)("section",{className:"col-lg-6 d-none d-sm-none d-md-none d-lg-block",style:{backgroundColor:"#92CDE6",height:"100vh"},children:Object(d.jsx)("img",{src:"https://businessmodelnavigator.com/img/navigator-pattern-img-2/5.png",className:"img-fluid rounded-start ",alt:"..."})}),Object(d.jsxs)("div",{className:"col-12 col-lg-6 mt-5 ",children:[Object(d.jsx)("h1",{children:"Welcome to PickIt."}),Object(d.jsxs)("p",{children:["A place where you can buy or exchange whatever you want. Who said barter system was past?",Object(d.jsx)("strong",{children:" Login now to find the best products online!"})]}),Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{onSubmit:F,children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"form-group ",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Username"})}),Object(d.jsx)("input",{onChange:function(e){return s(e.target.value)},type:"text",className:"form-control",placeholder:"Enter your username here",autoFocus:!0})]})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group mt-3",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Email"})}),Object(d.jsx)("input",{onChange:function(e){x(e.target.value)},type:"email",className:"form-control",placeholder:"Enter your email here"})]}),""!==f&&!T(f)&&Object(d.jsx)("div",{className:"",style:{color:"red"},children:"Please provide a valid email."})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group mt-3",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Password"})}),"password"===z&&Object(d.jsx)(j,{toggleEye:function(){return J("password")}}),"text"===z&&Object(d.jsx)(m,{toggleEye:function(){return J("password")}}),Object(d.jsx)("input",{onChange:function(e){return v(e.target.value)},type:z,className:"form-control ",placeholder:"Enter your password here"})]}),""!==w&&!U(w)&&Object(d.jsx)("div",{className:"",style:{color:"red"},children:"Password should be minimum 8 characters with 1 uppercase, 1 lowercase and 2 digits."})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"form-group mt-3",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Confirm Password"})}),"password"===L&&Object(d.jsx)(j,{toggleEye:function(){return J("confirmPassword")}}),"text"===L&&Object(d.jsx)(m,{toggleEye:function(){return J("confirmPassword")}}),Object(d.jsx)("input",{onChange:function(e){return C(e.target.value)},type:L,className:"form-control ",placeholder:"Enter your password here"})]}),""!==k&&k!==w&&Object(d.jsx)("div",{className:"",style:{color:"red"},children:"Passwords do not match."})]}),Object(d.jsxs)("div",{className:"row mt-4",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary submitbutton  ",disabled:""===r||!U(w)||!T(f)||k!==w,children:"Sign up"})}),Object(d.jsxs)("p",{className:"mt-5",children:["Already have an account."," ",Object(d.jsx)(i.b,{to:"/login",children:"Go to login."})]})]})]})})})]})]})]})}},53:function(e,t,r){"use strict";r(0);var s=r(1);t.a=function(e){return Object(s.jsxs)("div",{className:"container border border-dark",style:{marginTop:"20%"},children:[Object(s.jsx)("div",{className:"row mt-5",children:Object(s.jsx)("div",{className:"col-md-8 offset-md-4",children:Object(s.jsx)("h1",{children:e.title})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-8 offset-md-4",children:Object(s.jsx)("h4",{children:e.message})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("button",{className:"btn btn-primary col-md-2 offset-md-4 mt-4 mb-5",style:{marginLeft:"32em"},onClick:function(){window.location.reload(!0)},children:"Reload"})})]})}},65:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return j})),r.d(t,"d",(function(){return m})),r.d(t,"a",(function(){return b}));var s=r(42),n=r.n(s),a=r(43),c=r(44),o=r.n(c),i=localStorage.getItem("token"),l={headers:{Authorization:"Bearer ".concat(i)}},u=function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8080/users/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8080/users/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://localhost:8080/users/get_user_details/".concat(t),l);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8080/users/update_profile",t,l);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("http://localhost:8080/users/clear_cart",{},l);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=19.97c81339.chunk.js.map