(this["webpackJsonpneurobody-portal"]=this["webpackJsonpneurobody-portal"]||[]).push([[0],{101:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c),l=(t(101),t(81)),i=t(13),s=t(157),u=t(82),m=Object(u.a)({typography:{useNexVariants:!0},palette:{common:{black:"rgba(0, 0, 0, 1)",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(62, 53, 84, 1)",main:"rgba(35, 30, 48, 1)",dark:"rgba(13, 11, 18, 1)",contrastText:"#fff"},secondary:{light:"rgba(253, 152, 110, 1)",main:"rgba(255, 121, 66, 1)",dark:"rgba(253, 88, 22, 1)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}),d=t(7),f=t(168),g=t(162),E=t(163),b=t(164),p=t(176),h=t(165),v=t(166),j=t(167),k=t(158),O=t(161),y=function(e){return r.a.createElement(s.a,{theme:m},r.a.createElement(k.a,{position:"static"},r.a.createElement(O.a,null,e.title?r.a.createElement("h1",null,e.title):r.a.createElement("h1",null,"Neurobody"),e.content?e.content:null)))},C=t(79),x=t.n(C),S=t(18),w=t.n(S),N="AIzaSyAcU3pPUOEF230XdYdpoU4bMzY-HBGd1Eo",T="https://neurobody-8463e.firebaseio.com",I=Object(f.a)((function(e){return{containerSpace:{marginTop:20},inputField:{width:"80%",marginTop:20},error:{color:"red"}}})),A=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(""),i=Object(d.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(null),f=Object(d.a)(m,2),k=f[0],O=f[1],C=Object(n.useState)(!1),S=Object(d.a)(C,2),A=S[0],D=S[1],W=Object(n.useCallback)((function(){if(localStorage.getItem("token")){var a=localStorage.getItem("tokenExpiry");a&&(a>(new Date).getMilliseconds()?e.history.push("/neurobody-portal/exercises"):(localStorage.removeItem("token"),localStorage.removeItem("tokenExpiry"),localStorage.removeItem("userId")))}}),[e.history]);Object(n.useEffect)((function(){W()}),[W]);var P=I();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(g.a,{className:P.containerSpace,container:!0,justify:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement("img",{src:x.a,alt:"neurobody logo"})),r.a.createElement(g.a,{className:P.containerSpace,container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,xs:10,sm:8,lg:6},r.a.createElement(E.a,{style:{textAlign:"center"}},r.a.createElement(b.a,{title:"Authentication",color:"inherit"}),r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,md:6},r.a.createElement("p",{className:P.error},k))),r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,md:6},r.a.createElement(p.a,{className:P.inputField,placeholder:"Email Address",autoFocus:!0,type:"email",value:c,onChange:function(e){return o(e.target.value)},size:"medium"}))),r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,md:6},r.a.createElement(p.a,{className:P.inputField,placeholder:"Password",type:"password",value:s,onChange:function(e){return u(e.target.value)},size:"medium"}))),r.a.createElement(g.a,{className:P.containerSpace,container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,md:6},A?r.a.createElement(h.a,null):r.a.createElement(v.a,{onClick:function(){D(!0),O(null);var a=function(e,a){var t={valid:!0,message:""};return a.length<8&&(t.valid=!1,t.message="Please enter a valid password."),0===a.length&&(t.valid=!1,t.message="Please enter a password."),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())||(t.valid=!1,t.message="Please enter a valid email address"),0===e.length&&(t.valid=!1,t.message="Please enter an email address."),t}(c,s);if(a.valid){var t={email:c,password:s,returnSecureToken:!0};w.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(N),t).then((function(a){var t=a.data;w.a.get("".concat(T,"/users/").concat(t.localId,".json")).then((function(a){var n=a.data;n.roles&&n.roles.find((function(e){return"admin"===e}))?(localStorage.setItem("token",t.idToken),localStorage.setItem("tokenExpiry",(new Date).getMilliseconds()+t.expiresIn),localStorage.setItem("userId",t.localId),console.log("Success"),e.history.push("/neurobody-portal/exercises")):(D(!1),O("The account you provided does not have the correct permissions."))}))})).catch((function(e){D(!1),O(function(e){switch(e.message){case"EMAIL_NOT_FOUND":return"Email address not found, Please enter a valid email address.";case"INVALID_PASSWORD":return"Password is incorrect.";default:return"Something went wrong! Contact support."}}(e.response.data.error))}))}else D(!1),O(a.message)}},"Login"))),r.a.createElement(j.a,null))))))},D=t(8),W=t(80),P=Object(f.a)((function(e){return{cardContainer:{width:"80%"},actionArea:{border:"1px solid",borderColor:e.palette.primary.main,padding:5,borderRadius:15,width:"100%",marginTop:10,marginBottom:10},title:{marginBottom:3,width:"15%"},button:{marginLeft:10},input:{width:"100%"}}})),R=function(e){var a=P();return r.a.createElement(s.a,{theme:m},r.a.createElement(g.a,{container:!0,alignItems:"center",className:a.actionArea},r.a.createElement(g.a,{item:!0,className:a.title},r.a.createElement("p",null,e.title)),r.a.createElement(g.a,{item:!0,className:a.button},r.a.createElement(v.a,{onClick:function(){return e.onAdd(e.title)}},"Add")),r.a.createElement(g.a,{item:!0,className:a.button},r.a.createElement(v.a,{onClick:function(){return e.onRemove(e.title)}},"Remove"))),r.a.createElement(g.a,{container:!0},e.info.map((function(t,n){return r.a.createElement(g.a,{item:!0,xs:12,key:n},r.a.createElement(p.a,{value:t,onChange:e.onInfoChange.bind(void 0,e.title,n),className:a.input,placeholder:"Enter info here"}))}))))},M=t(179),L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{checked:e.onTagCheck(e.tag),onChange:function(a){return e.onTagChange(a,e.tag)}}),e.tag)},F=Object(f.a)((function(e){return{containerSpace:{marginTop:20},inputField:{width:"80%",marginTop:20},actionButton:{marginLeft:20,marginRight:20},error:{color:"red"}}})),V=function(e){var a=F(),t=Object(n.useState)(""),c=Object(d.a)(t,2),o=c[0],l=c[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)([]),b=Object(d.a)(f,2),h=b[0],k=b[1],O=Object(n.useState)([]),C=Object(d.a)(O,2),x=C[0],S=C[1],N=Object(n.useState)([]),I=Object(d.a)(N,2),A=I[0],P=I[1],M=Object(n.useState)([]),V=Object(d.a)(M,2),B=V[0],U=V[1],z=Object(n.useState)([]),H=Object(d.a)(z,2),J=H[0],_=H[1],Y=Object(n.useState)([]),Z=Object(d.a)(Y,2),$=Z[0],G=Z[1],X=Object(n.useState)([]),q=Object(d.a)(X,2),K=q[0],Q=q[1],ee=Object(n.useState)([]),ae=Object(d.a)(ee,2),te=ae[0],ne=ae[1],re=Object(n.useState)([]),ce=Object(d.a)(re,2),oe=ce[0],le=ce[1],ie=Object(n.useState)([]),se=Object(d.a)(ie,2),ue=se[0],me=se[1],de=Object(n.useState)(!1),fe=Object(d.a)(de,2),ge=fe[0],Ee=fe[1],be=Object(n.useState)(null),pe=Object(d.a)(be,2),he=pe[0],ve=pe[1];Object(n.useEffect)((function(){var a,t=new URLSearchParams(e.location.search),n="",r=Object(W.a)(t.entries());try{for(r.s();!(a=r.n()).done;){var c=a.value;"tag"===c[0]&&(n=c[1])}}catch(o){r.e(o)}finally{r.f()}""!==n?w.a.get("".concat(T,"/exercises/").concat(n,".json")).then((function(e){console.log(e.data),m(n),e.data.tags&&k(e.data.tags),e.data.ExerciseName&&l(e.data.ExerciseName),e.data.tips.phase1&&S(e.data.tips.phase1),e.data.tips.phase2&&P(e.data.tips.phase2),e.data.tips.phase3&&U(e.data.tips.phase3),e.data.avoids&&_(e.data.avoids),e.data.engages.primary&&G(e.data.engages.primary),e.data.engages.secondary&&Q(e.data.engages.secondary),e.data.engages.isometric&&ne(e.data.engages.isometric),console.log(e.data.variants),e.data.variants&&(e.data.variants.lessDifficult&&le(e.data.variants.lessDifficult),e.data.variants.moreDifficult&&me(e.data.variants.moreDifficult)),Ee(!1)})):(console.log("NO FOUND, CREATE ONE"),Ee(!0)),w.a.get("".concat(T,"/tags.json")).then((function(e){var a={};for(var t in e.data)a[t]=e.data[t];ve(a)}))}),[e.location.search]);var je=function(e,a,t){switch(e){case"Tip(s) Phase 1":var n=Object(D.a)(x);n[a]=t.target.value,S(n);break;case"Tip(s) Phase 2":var r=Object(D.a)(A);r[a]=t.target.value,P(r);break;case"Tip(s) Phase 3":var c=Object(D.a)(B);c[a]=t.target.value,U(c);break;case"Avoid Tip(s)":var o=Object(D.a)(J);o[a]=t.target.value,_(o);break;case"Engage Muscle(s) Primary":var l=Object(D.a)($);l[a]=t.target.value,G(l);break;case"Engage Muscle(s) Secondary":var i=Object(D.a)(K);i[a]=t.target.value,Q(i);break;case"Engage Muscle(s) Isometric":var s=Object(D.a)(te);s[a]=t.target.value,ne(s);break;case"Less Difficult Variant(s)":var u=Object(D.a)(oe);u[a]=t.target.value,le(u);break;case"More Difficult Variant(s)":var m=Object(D.a)(ue);m[a]=t.target.value,me(m)}},ke=function(e){switch(e){case"Tip(s) Phase 1":S((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Tip(s) Phase 2":P((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Tip(s) Phase 3":U((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Avoid Tip(s)":_((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Engage Muscle(s) Primary":G((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Engage Muscle(s) Secondary":Q((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Engage Muscle(s) Isometric":ne((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"Less Difficult Variant(s)":le((function(e){return[].concat(Object(D.a)(e),[""])}));break;case"More Difficult Variant(s)":me((function(e){return[].concat(Object(D.a)(e),[""])}))}},Oe=function(e){switch(e){case"Tip(s) Phase 1":if(x.length>0){var a=Object(D.a)(x);a.pop(),S(a)}break;case"Tip(s) Phase 2":if(A.length>0){var t=Object(D.a)(A);t.pop(),P(t)}break;case"Tip(s) Phase 3":if(B.length>0){var n=Object(D.a)(B);n.pop(),U(n)}break;case"Avoid Tip(s)":if(J.length>0){var r=Object(D.a)(J);r.pop(),_(r)}break;case"Engage Muscle(s) Primary":if($.length>0){var c=Object(D.a)($);c.pop(),G(c)}break;case"Engage Muscle(s) Secondary":if(K.length>0){var o=Object(D.a)(K);o.pop(),Q(o)}break;case"Engage Muscle(s) Isometric":if(te.length>0){var l=Object(D.a)(te);l.pop(),ne(l)}break;case"Less Difficult Variant(s)":if(oe.length>0){var i=Object(D.a)(oe);i.pop(),le(i)}break;case"More Difficult Variant(s)":if(ue.length>0){var s=Object(D.a)(ue);s.pop(),me(s)}}},ye=function(e){return h.includes(e)},Ce=function(e,a){var t=e.target.checked,n=Object(D.a)(h),r=n.includes(a);t&&!r?n.push(a):!t&&r&&(n=n.filter((function(e){return e!==a}))),console.log(n),k(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{title:"Exercise Detail"}),r.a.createElement(g.a,{className:a.containerSpace,container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,xs:10},r.a.createElement(E.a,null,r.a.createElement(j.a,null,r.a.createElement(g.a,{className:a.containerSpace,container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,className:a.actionButton},r.a.createElement(v.a,{onClick:function(){e.history.push("/neurobody-portal/exercises")}},"Back To Library")),r.a.createElement(g.a,{item:!0,className:a.actionButton},r.a.createElement(v.a,{onClick:function(){return function(){var a={ExerciseName:o,tags:h,tips:{phase1:x,phase2:A,phase3:B},avoids:J,engages:{primary:$,secondary:K,isometric:te},variants:{lessDifficult:oe,moreDifficult:ue}};w.a.put("".concat(T,"/exercises/").concat(u,".json"),a).then((function(a){console.log(a),e.history.push("/neurobody-portal/exercises")}))}()}},ge?"Create Exercise":"Update Exercise")),!ge&&r.a.createElement(g.a,{item:!0,className:a.actionButton},r.a.createElement(v.a,{onClick:function(){w.a.delete("".concat(T,"/exercises/").concat(u,".json")).then((function(a){console.log(a),e.history.push("/neurobody-portal/exercises")}))}},"Delete Exercise"))),r.a.createElement(g.a,{className:a.containerSpace,container:!0,justify:"center"},r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(p.a,{placeholder:"Exercise Tag",value:u,onChange:function(e){m(e.target.value)},disabled:!ge})),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(p.a,{placeholder:"Exercise Name",value:o,onChange:function(e){l(e.target.value)}}))),r.a.createElement(g.a,{className:a.containerSpace,container:!0,justify:"center"},he&&Object.keys(he).map((function(e){return r.a.createElement(g.a,{item:!0,lg:12,key:e},r.a.createElement("h3",null,e,":"),he[e].map((function(e){return r.a.createElement(L,{tag:e,onTagCheck:ye,onTagChange:Ce,key:e})})))}))),r.a.createElement(R,{title:"Tip(s) Phase 1",onAdd:ke,onRemove:Oe,onInfoChange:je,info:x}),r.a.createElement(R,{title:"Tip(s) Phase 2",onAdd:ke,onRemove:Oe,onInfoChange:je,info:A}),r.a.createElement(R,{title:"Tip(s) Phase 3",onAdd:ke,onRemove:Oe,onInfoChange:je,info:B}),r.a.createElement(R,{title:"Avoid Tip(s)",onAdd:ke,onRemove:Oe,onInfoChange:je,info:J}),r.a.createElement(R,{title:"Engage Muscle(s) Primary",onAdd:ke,onRemove:Oe,onInfoChange:je,info:$}),r.a.createElement(R,{title:"Engage Muscle(s) Secondary",onAdd:ke,onRemove:Oe,onInfoChange:je,info:K}),r.a.createElement(R,{title:"Engage Muscle(s) Isometric",onAdd:ke,onRemove:Oe,onInfoChange:je,info:te}),r.a.createElement(R,{title:"Less Difficult Variant(s)",onAdd:ke,onRemove:Oe,onInfoChange:je,info:oe}),r.a.createElement(R,{title:"More Difficult Variant(s)",onAdd:ke,onRemove:Oe,onInfoChange:je,info:ue})))))))},B=t(49),U=t(169),z=t(170),H=Object(f.a)((function(e){return{cardContainer:{width:"80%",borderColor:e.palette.primary,border:"1px solid",borderRadius:20}}})),J=function(e){var a=H(),t=e.workoutSelected>-1;return r.a.createElement(s.a,{theme:m},r.a.createElement(E.a,{className:a.cardContainer,style:{backgroundColor:t?"yellow":"white"}},r.a.createElement(j.a,null,r.a.createElement("h4",null,e.exercise.id),r.a.createElement("h3",null,e.exercise.ExerciseName),t&&r.a.createElement("h5",null,"Workout Exercise #",e.workoutSelected+1),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){return e.onSelect(e.exercise.id)}},"Details"),r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){t?e.onWorkoutRemove():e.onWorkoutSelect()}},t?"Remove From Workout":"Add To Workout")))))},_=t(180),Y=t(174),Z=t(172),$=t(173),G=t(171),X=t(177),q=t(175),K=function(e){var a=e.children,t=e.value,n=e.index;return r.a.createElement("div",{hidden:t!==n},a)},Q=Object(f.a)((function(e){return{cardContainer:{width:"80%",borderColor:e.palette.primary,border:"1px solid",borderRadius:20}}})),ee=function(e){var a=Q();return r.a.createElement(s.a,{theme:m},r.a.createElement(E.a,{className:a.cardContainer},r.a.createElement(j.a,null,r.a.createElement("h2",null,e.workout.name),r.a.createElement("h3",null,e.workout.exercises.length," Exercises"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){return e.onViewWorkout(e.workout)}},"View Workout"),r.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:function(){return e.onDeleteWorkout(e.workout.id)}},"Delete Workout")))))},ae=function(e){var a=Object(n.useState)(null),t=Object(d.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)([]),f=Object(d.a)(m,2),E=f[0],b=f[1],p=Object(n.useState)(!1),h=Object(d.a)(p,2),j=h[0],k=h[1],O=function(){k(!1)},y=function(e){o(e),k(!0)},C=Object(n.useCallback)((function(){if(s){var a=[];s.exercises.forEach((function(t){var n=e.exercises.find((function(e){return e.id===t}));n&&a.push(n)})),b(a)}}),[s,e.exercises]);return Object(n.useEffect)((function(){C()}),[s,C]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,lg:10},r.a.createElement("h1",null,"Workouts")),r.a.createElement(g.a,{item:!0,lg:10},r.a.createElement(U.a,{cellHeight:"auto",spacing:20,cols:3},e.workouts.map((function(e){return r.a.createElement(z.a,{key:e.id,cols:1},r.a.createElement(ee,{workout:e,onDeleteWorkout:y,onViewWorkout:function(e){return u(e)}}))}))))),r.a.createElement(_.a,{open:j,onClose:O,"aria-labelledby":"form-dialog-title"},r.a.createElement(G.a,{id:"form-dialog-title"},"Delete Workout"),r.a.createElement(Z.a,null,r.a.createElement($.a,null,"Do you want to delete workout?.")),r.a.createElement(Y.a,null,r.a.createElement(v.a,{onClick:O,color:"primary"},"Cancel"),r.a.createElement(v.a,{onClick:function(){w.a.delete("".concat(T,"/workouts/").concat(c,".json")).then((function(a){console.log("workout deleted");var t=e.workouts.filter((function(e){return e.id!==c}));e.onWorkoutsChanged(t),o(null),O()})).catch((function(e){console.log(e),O()}))},color:"secondary"},"Delete"))),r.a.createElement(_.a,{open:null!==s,onClose:function(){return u(null)},"aria-labelledby":"form-dialog-title"},r.a.createElement(G.a,{id:"form-dialog-title"},s?s.name:""),r.a.createElement(Z.a,null,r.a.createElement("ol",null,E.map((function(e,a){return r.a.createElement("li",{key:e.id+a},e.ExerciseName)})))),r.a.createElement(Y.a,null,r.a.createElement(v.a,{onClick:function(){return u(null)},color:"primary"},"Close"))))},te=Object(f.a)((function(e){return{cardContainer:{width:"100%"},spacing:{marginTop:"25px"}}})),ne=function(e){var a=te(),t=Object(n.useState)(null),c=Object(d.a)(t,2),o=c[0],l=c[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)(null),E=Object(d.a)(f,2),b=E[0],h=E[1],j=Object(n.useState)(null),k=Object(d.a)(j,2),O=k[0],C=k[1],x=Object(n.useState)([]),S=Object(d.a)(x,2),N=S[0],I=S[1],A=Object(n.useState)([]),W=Object(d.a)(A,2),P=W[0],R=W[1],M=Object(n.useState)(""),F=Object(d.a)(M,2),V=F[0],H=F[1],Q=Object(n.useState)(""),ee=Object(d.a)(Q,2),ne=ee[0],re=ee[1],ce=Object(n.useState)(!1),oe=Object(d.a)(ce,2),le=oe[0],ie=oe[1],se=Object(n.useState)(0),ue=Object(d.a)(se,2),me=ue[0],de=ue[1],fe=function(){re(""),ie(!1)};Object(n.useEffect)((function(){w.a.get("".concat(T,"/exercises.json")).then((function(e){var a=[];for(var t in e.data)a.push(Object(B.a)(Object(B.a)({},e.data[t]),{},{id:t}));l(a),h(a)})),w.a.get("".concat(T,"/tags.json")).then((function(e){var a={};for(var t in e.data)a[t]=e.data[t];C(a)})),w.a.get("".concat(T,"/workouts.json")).then((function(e){var a=[];for(var t in e.data)a.push(Object(B.a)(Object(B.a)({},e.data[t]),{},{id:t}));m(a)}))}),[]);var ge=function(a){var t=encodeURIComponent("tag"),n=encodeURIComponent(a);e.history.push("/neurobody-portal"+"/exercise?".concat(t,"=").concat(n))},Ee=function(e,a){var t=e.target.checked,n=Object(D.a)(N),r=n.includes(a);t&&!r?n.push(a):!t&&r&&(n=n.filter((function(e){return e!==a}))),I(n)},be=function(e){var a=P.filter((function(a){return a.id!==e}));R(a)},pe=Object(n.useCallback)((function(){if(o){var e=Object(D.a)(o);if(console.log(N),N.length<=0&&""===V)h(e);else{var a=[];e.forEach((function(e){var t=0;N.length>0?(N.forEach((function(a){e.tags&&e.tags.includes(a)&&(""===V||e.ExerciseName.includes(V))&&(t++,e.tagCount=t)})),t>0&&a.push(e)):e.ExerciseName.toLowerCase().includes(V.toLowerCase())&&a.push(e)})),a.sort((function(e,a){return a.tagCount-e.tagCount})),h([].concat(a))}}}),[o,V,N]),he=function(e){return N.includes(e)};return Object(n.useEffect)((function(){pe()}),[N,V,pe]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{title:"Exercise Library",content:r.a.createElement(X.a,{value:me,onChange:function(e,a){de(a)}},r.a.createElement(q.a,{label:"Exercises",value:0}),r.a.createElement(q.a,{label:"Workouts",value:1}))}),r.a.createElement(K,{value:me,index:0},r.a.createElement(g.a,{container:!0,justify:"center",className:a.spacing},r.a.createElement(g.a,{item:!0,lg:10},r.a.createElement(v.a,{onClick:function(){e.history.push("/neurobody-portal/exercise")}},"Add Exercise"),r.a.createElement(v.a,{color:"secondary",onClick:function(){I([]),H("")}},"Clear Filters"),r.a.createElement(p.a,{style:{marginLeft:"20px"},placeholder:"Search By Name",value:V,onChange:function(e){var a=e.target.value;H(a)}}))),r.a.createElement(g.a,{container:!0,justify:"center",className:a.spacing},O&&Object.keys(O).map((function(e){return r.a.createElement(g.a,{item:!0,lg:5,key:e},r.a.createElement("h3",null,e,":"),O[e].map((function(e){return r.a.createElement(L,{tag:e,onTagCheck:he,onTagChange:Ee,key:e})})))}))),P.length>0&&r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,lg:10},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0},r.a.createElement("h3",null,"Workout Creation"))),r.a.createElement(g.a,{container:!0,spacing:2},P.map((function(e,a){return r.a.createElement(g.a,{item:!0,key:e.ExerciseName+a},r.a.createElement("div",{style:{border:"1px solid black",borderRadius:"15px",padding:"5px",cursor:"not-allowed"},onClick:function(){return be(e.id)}},r.a.createElement("p",null,e.ExerciseName)))}))),r.a.createElement(g.a,{container:!0,spacing:5},r.a.createElement(g.a,{item:!0},r.a.createElement(v.a,{onClick:function(){ie(!0)}},"Create Workout"),r.a.createElement(v.a,{color:"secondary",onClick:function(){return R([])}},"Clear Workout"))))),r.a.createElement(g.a,{container:!0,justify:"center",className:a.spacing},r.a.createElement(g.a,{item:!0,lg:10},b&&r.a.createElement(U.a,{cellHeight:"auto",spacing:20,cols:3},b.map((function(e){return r.a.createElement(z.a,{key:e.id,cols:1},r.a.createElement(J,{exercise:e,onSelect:ge,onWorkoutSelect:function(){return function(e){var a=[].concat(Object(D.a)(P),[e]);R(a)}(e)},onWorkoutRemove:function(){return be(e.id)},workoutSelected:(a=e.id,P.findIndex((function(e){return e.id===a})))}));var a})))))),r.a.createElement(K,{value:me,index:1},r.a.createElement("div",{className:a.spacing},r.a.createElement(ae,{workouts:u,onWorkoutsChanged:function(e){return m(e)},exercises:o}))),r.a.createElement(_.a,{open:le,onClose:fe,"aria-labelledby":"form-dialog-title"},r.a.createElement(G.a,{id:"form-dialog-title"},"Create Workout"),r.a.createElement(Z.a,null,r.a.createElement($.a,null,"Enter Workout name to create the workout."),r.a.createElement(p.a,{autoFocus:!0,margin:"dense",id:"name",label:"Workout Name",type:"text",fullWidth:!0,value:ne,onChange:function(e){return re(e.target.value)}})),r.a.createElement(Y.a,null,r.a.createElement(v.a,{onClick:fe,color:"secondary"},"Cancel"),r.a.createElement(v.a,{onClick:function(){if(ne.length>0){var e={name:ne,exercises:P.map((function(e){return e.id}))};w.a.post("".concat(T,"/workouts.json"),JSON.stringify(e)).then((function(a){e.id=a.data.name;var t=[].concat(Object(D.a)(u),[e]);m(t),R([]),fe(),de(1)})).catch((function(e){console.log(e),fe()}))}},color:"primary"},"Create"))))},re=function(){return r.a.createElement(s.a,{theme:m},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/neurobody-portal/",component:A}),r.a.createElement(i.a,{exact:!0,path:"/neurobody-portal/exercises",component:ne}),r.a.createElement(i.a,{exact:!0,path:"/neurobody-portal/exercise",component:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t.p+"static/media/neuroOrangeLogo.b723508c.png"},96:function(e,a,t){e.exports=t(124)}},[[96,1,2]]]);
//# sourceMappingURL=main.9a28969a.chunk.js.map