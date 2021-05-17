(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,a){},189:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(11),r=a.n(s),i=(a(151),a(17)),o=a(129),l=a(13),d=a(273),j=a(131),m=a(274),b=a(269),u=a(21),h=a(15),x=a(116),O=a(117),g=a.n(O),f=a(257),p=a(279),v=a(259),w=a(260),y=a(214),N=a(261),k=a(262),C=a(122),I=a.n(C),B=a(124),S=a.n(B),T=a(263),W=a(123),D=a.n(W),E=a(2),M=Object(f.a)({list:{width:250,padding:0}});var L=function(e){var t=e.status,a=e.setSideDrawer,c=e.changeMode,s=Object(n.useState)(!0),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),j=Object(i.a)(d,2),m=j[0],b=j[1],u=M();return Object(n.useEffect)((function(){l(t)}),[t]),Object(n.useEffect)((function(){c(m)}),[m]),Object(E.jsx)("div",{style:{width:"auto"},onClick:function(){a(!1),l(!1)},children:Object(E.jsxs)(p.a,{anchor:"left",open:o,children:[Object(E.jsx)(v.a,{className:u.list,children:Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(E.jsx)("img",{src:"./logo192.png",width:"80",height:"80",alt:"CR CHAT"}),Object(E.jsx)("h3",{children:"CR CHAT"})]})}),Object(E.jsx)(w.a,{}),Object(E.jsx)(v.a,{className:u.list,children:Object(E.jsxs)(y.a,{button:!0,children:[Object(E.jsx)(N.a,{children:Object(E.jsx)(I.a,{})}),Object(E.jsx)(k.a,{primary:"Home"})]})}),Object(E.jsx)(w.a,{}),Object(E.jsx)(v.a,{className:u.list,children:Object(E.jsxs)(y.a,{button:!0,children:[Object(E.jsx)(N.a,{children:Object(E.jsx)(D.a,{})}),Object(E.jsx)(k.a,{primary:"Dark mode"}),Object(E.jsx)(T.a,{name:"checkedB",color:"primary",onChange:function(e){b(e.target.checked)},checked:m})]})}),Object(E.jsx)(w.a,{}),Object(E.jsx)(v.a,{className:u.list,children:Object(E.jsxs)(y.a,{button:!0,children:[Object(E.jsx)(N.a,{children:Object(E.jsx)(S.a,{})}),Object(E.jsx)(k.a,{primary:"Info"})]})}),Object(E.jsx)(w.a,{})]})})},U=(a(189),a(212));function R(e){var t=e.name,a=e.time,n=e.msg;return Object(E.jsx)("div",{className:"msg",children:Object(E.jsxs)("div",{className:"bubble",children:[Object(E.jsxs)("div",{className:"txt",children:[Object(E.jsx)("span",{className:"name",children:t}),Object(E.jsx)("span",{className:"timestamp",children:a}),Object(E.jsx)("span",{className:"message",children:n})]}),Object(E.jsx)("div",{className:"bubble-arrow"})]})})}function A(e){var t=e.time,a=e.msg;return Object(E.jsx)("div",{className:"msg",children:Object(E.jsx)("div",{className:"bubble follow",children:Object(E.jsxs)("div",{className:"txt",children:[Object(E.jsx)("span",{className:"timestamp",children:t}),Object(E.jsx)("span",{className:"message follow",children:a})]})})})}function F(e){var t=e.name,a=e.time,n=e.msg;return Object(E.jsx)("div",{className:"msg",children:Object(E.jsxs)("div",{className:"bubble alt",children:[Object(E.jsxs)("div",{className:"txt",children:[Object(E.jsx)("span",{className:"name alt",children:t}),Object(E.jsx)("span",{className:"timestamp",children:a}),Object(E.jsx)("p",{className:"message",children:n})]}),Object(E.jsx)("div",{className:"bubble-arrow alt"})]})})}function q(e){var t=e.time,a=e.msg;return Object(E.jsx)("div",{className:"msg",children:Object(E.jsx)("div",{className:"bubble altfollow",children:Object(E.jsxs)("div",{className:"txt",children:[Object(E.jsx)("span",{className:"timestamp",children:t}),Object(E.jsx)("p",{className:"message follow",children:a})]})})})}function H(e){var t=e.text;return Object(E.jsx)(U.a,{style:{padding:".1rem",paddingLeft:"1rem",paddingRight:"1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",width:"45%",opacity:"0.7",marginTop:".75rem",marginBottom:".75rem"},children:t})}var P,G=a(264),Y=a(265),J=a(215),z=a(59),Z=a(125),$=a.n(Z),K=a(126),Q=a.n(K),V=a(127),X=a.n(V),_=a(275),ee=a(133),te=a(266),ae=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:100,maxHeight:100,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,textAlign:"center",fontFamily:"'Bree Serif', serif"},header:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},chatBody:{zIndex:"-1",marginTop:"100px",height:"80vh",overflowY:"scroll"}}})),ne=Object(x.io)("https://crossroads-chat.herokuapp.com/");var ce=function(e){var t,a=e.logoutUser,c=e.getUserData,s=e.changeMode,r=Object(n.useState)([]),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(n.useState)(!1),m=Object(i.a)(j,2),b=m[0],x=m[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),p=f[0],v=f[1],w=Object(n.useState)(""),y=Object(i.a)(w,2),N=y[0],k=y[1],C=ae(),I=function(){v(null)},B=function(e){var t=e.itm;return console.log(t),"static"===t.type&&c().userId===t.userId&&"connect"===t.reason?Object(E.jsx)(H,{text:"You Joined"}):"static"===t.type&&"connect"===t.reason?Object(E.jsx)(H,{text:"".concat(t.name," Joined")}):"static"===t.type&&"disconnect"===t.reason?Object(E.jsx)(H,{text:"".concat(t.name," Left")}):"message"===t.type&&c().userId===t.userId?Object(E.jsx)(F,{name:"You",msg:t.msg,time:t.time}):"message"===t.type?Object(E.jsx)(R,{name:t.name,msg:t.msg,time:t.time}):"secondary"===t.type&&c().userId===t.userId?Object(E.jsx)(q,{msg:t.msg,time:t.time}):"secondary"===t.type?Object(E.jsx)(A,{msg:t.msg,time:t.time}):Object(E.jsx)(H,{text:"Someting went wrong. You need to reload or reenter.!"})};return Object(n.useEffect)((function(){ne.on("connect",(function(){ne.emit("userConnected",c()),ne.on("userConnect",(function(e){d((function(t){return[].concat(Object(h.a)(t),[e])}))})),ne.on("userDisconnect",(function(e){d((function(t){return[].concat(Object(h.a)(t),[e])}))})),ne.on("message",(function(e){P===e.userId?(e.type="secondary",d((function(t){return[].concat(Object(h.a)(t),[e])}))):(e.type="message",d((function(t){return[].concat(Object(h.a)(t),[e])})));var t=document.getElementById("chatBody");t.scrollTo({top:t.scrollHeight,behavior:"smooth"}),P=e.userId}))}))}),[]),Object(E.jsxs)("div",{className:C.root,children:[Object(E.jsx)(L,{status:b,changeMode:s,setSideDrawer:x}),Object(E.jsx)(G.a,{position:"fixed",color:"inherit",style:{borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"},children:Object(E.jsxs)(Y.a,{className:C.toolbar,children:[Object(E.jsx)(J.a,{edge:"start",className:C.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){x(!0)},children:Object(E.jsx)($.a,{})}),Object(E.jsx)("div",{className:C.header,children:Object(E.jsx)(z.a,{className:C.title,variant:"h4",noWrap:!0,children:Object(E.jsx)("img",{src:"./logo192.png",width:"80",height:"80",alt:"CR CHAT"})})}),Object(E.jsx)(J.a,{onClick:function(e){v(e.currentTarget)},"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(E.jsx)(Q.a,{})}),Object(E.jsx)(ee.a,{id:"simple-menu",keepMounted:!0,anchorEl:p,open:Boolean(p),onClose:I,children:Object(E.jsx)(te.a,{onClick:function(){I(),a()},children:"Logout"})})]})}),Object(E.jsx)("div",{id:"chatBody",className:C.chatBody,children:l.map((function(e,t){return Object(E.jsx)(B,{itm:e},t)}))}),Object(E.jsxs)("div",{style:{bottom:0,position:"sticky",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(E.jsx)(_.a,(t={id:"filled-textarea",label:"Type here...!",placeholder:"Get to know everyone.",multiline:!0,variant:"filled",fullWidth:!0,rows:"1"},Object(u.a)(t,"id","textField"),Object(u.a)(t,"rowsMax","4"),Object(u.a)(t,"color","primary"),Object(u.a)(t,"value",N),Object(u.a)(t,"onChange",(function(e){k(e.target.value)})),t)),Object(E.jsx)(J.a,{style:{borderRadius:0,padding:"1rem"},onClick:function(){if(null===N||" "===N||""===N)document.getElementById("textField").focus();else{var e=c();e.msg=N,e.time=g()().format("LT"),ne.emit("massage",e),k(""),document.getElementById("textField").focus()}},children:Object(E.jsx)(X.a,{})})]})]})},se=a(65),re=a(132),ie=a(280),oe=a(272),le=a(271),de=a(278),je=a(267),me=a(270),be=a(276),ue=a(128),he=a.n(ue),xe=a(268);function Oe(){return Object(E.jsxs)(z.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(E.jsx)(je.a,{color:"inherit",href:"/",children:"CR Chat"})," ",(new Date).getFullYear(),"."]})}var ge=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var fe=function(e){var t=e.setUserData,a=(e.getUserData,ge()),n=Object(re.a)(),c=n.register,s=n.handleSubmit,r=n.formState.errors;return Object(E.jsxs)(xe.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(b.a,{}),Object(E.jsxs)("div",{className:a.paper,children:[Object(E.jsx)(ie.a,{className:a.avatar,children:Object(E.jsx)(he.a,{})}),Object(E.jsx)(z.a,{component:"h1",variant:"h5",children:"Get In"}),Object(E.jsxs)("form",{autoComplete:"off",className:a.form,onSubmit:s((function(e){t(e)})),children:[Object(E.jsx)("input",Object(se.a)({hidden:!0,value:Math.random().toString(16).slice(2),name:"userId"},c("userId"))),Object(E.jsxs)(me.a,{container:!0,spacing:2,children:[Object(E.jsx)(me.a,{item:!0,xs:12,children:Object(E.jsx)(_.a,Object(se.a)({variant:"outlined",fullWidth:!0,id:"name",label:"Name",error:Boolean(r.name),helperText:r.name?r.name.message:null},c("name",{required:"User Name is required.!",minLength:{value:4,message:"Minimum 4 charecters.!"}})))}),Object(E.jsx)(me.a,{item:!0,xs:12,children:Object(E.jsx)(_.a,Object(se.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",error:Boolean(r.email),helperText:r.email?r.email.message:null},c("email",{required:"Email is required.!",minLength:{value:5,message:"Type a valid email address.!"},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Type a valid email address.!"}})))}),Object(E.jsx)(me.a,{item:!0,xs:12,children:Object(E.jsx)(_.a,Object(se.a)({variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:Boolean(r.password),helperText:r.password?r.password.message:null},c("password",{required:"Password is required.!",minLength:{value:6,message:"Minimum 6 charecters.!"}})))}),Object(E.jsx)(me.a,{item:!0,xs:12,children:Object(E.jsx)(le.a,{control:Object(E.jsx)(de.a,{required:!0,value:"true",color:"default"}),label:"I am agree that I am subscribed Crossroads youtube channel."})})]}),Object(E.jsx)(oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Get In"}),Object(E.jsx)(me.a,{container:!0,justify:"flex-end",children:Object(E.jsx)(me.a,{item:!0,children:Object(E.jsx)(je.a,{href:"",variant:"body2"})})})]})]}),Object(E.jsx)(be.a,{mt:5,children:Object(E.jsx)(Oe,{})})]})},pe=a(192),ve="cr-chat-store";var we=function(){var e=Object(n.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(d.a)("(prefers-color-scheme: dark)"),u=function(){return pe.get(ve)};Object(n.useEffect)((function(){s(r)}),[Object(d.a)("(prefers-color-scheme: dark)")]);var h=c.a.useMemo((function(){return Object(j.a)({palette:{type:a?"dark":"light"}})}),[a]);return Object(E.jsx)(o.a,{children:Object(E.jsx)(l.d,{children:Object(E.jsxs)(m.a,{theme:h,children:[Object(E.jsx)(b.a,{}),Object(E.jsx)(l.b,{exact:!0,path:"/",component:ce,children:"undefined"!=typeof u()?Object(E.jsx)(ce,{changeMode:function(e){s(e)},getUserData:u,logoutUser:function(){pe.remove(ve),window.location.reload()}}):Object(E.jsx)(l.a,{to:"/get-in"})}),Object(E.jsx)(l.b,{path:"/get-in",component:fe,children:"undefined"==typeof u()?Object(E.jsx)(fe,{setUserData:function(e){pe.set(ve,e),window.location.reload()},getUserData:u}):Object(E.jsx)(l.a,{to:"/"})})]})})})},ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,283)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(we,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ne(t,e)}))}}(),ke()}},[[209,1,2]]]);
//# sourceMappingURL=main.3cccacc9.chunk.js.map