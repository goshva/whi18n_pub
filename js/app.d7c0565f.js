(function(e){function t(t){for(var o,s,i=t[0],l=t[1],u=t[2],d=0,m=[];d<i.length;d++)s=i[d],r[s]&&m.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"1ffc":function(e,t,n){},4841:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("dropdown",{attrs:{options:e.arrayOfObjects,selected:e.mylang,placeholder:"Choose Language"},on:{updateOption:e.methodToRunOnSelect}}),e.isLoggedIn?n("span",[e._v(" | "),n("a",{on:{click:e.logout}},[e._v("🔓")])]):n("span",[e._v(" | \n      "),n("router-link",{attrs:{to:"/login"}},[e._v("🔓")])],1)],1),n("router-view")],1)},a=[],s=n("d869"),i={data:function(){return{mylang:{}}},components:{dropdown:s["a"]},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},arrayOfObjects:function(){return this.$store.getters.langs}},created:function(){this.langs()},methods:{langs:function(){this.$store.dispatch("langs")},methodToRunOnSelect:function(e){console.log(e),this.mylang=e,console.log(this.mylang),this.$store.dispatch("mylang",e.code)},logout:function(){var e=this;this.$store.dispatch("logout").then(function(){e.$router.push("/login")})}}},l=i,u=(n("034f"),n("2877")),c=Object(u["a"])(l,r,a,!1,null,null,null);c.options.__file="App.vue";var d=c.exports,m=n("8c4f"),f=(n("7f7f"),n("2f62")),p=n("bc3a"),v=n.n(p),h="https://test.whteam.net",g=v.a.create();g.defaults.headers.post["Content-Type"]="application/json",g.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),g.defaults.headers.common["Accept-Language"]=localStorage.getItem("lang"),g.defaults.headers.common["Access-Control-Allow-Origin"]="*",g.interceptors.response.use(function(e){return e},function(e){return 401===e.response.status&&_.dispatch("refresh"),Promise.reject(e)}),o["a"].use(f["a"]);var _=new f["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:{},models:{},langs:[]},mutations:{auth_request:function(e){e.status="loading"},auth_success:function(e,t,n){e.status="success",e.token=t,e.user=n},auth_error:function(e){e.status="error"},modelsUpdate:function(e,t){e.models=t},get_langs:function(e,t){e.langs=t},logout:function(e){e.status="",e.token=""}},actions:{login:function(e,t){var n=e.commit;return new Promise(function(e,o){n("auth_request"),g({url:h+"/v2/my-session",data:t,method:"POST"}).then(function(t){var o=t.headers["x-access-token"],r=t.data.user;localStorage.setItem("token",o),localStorage.setItem("id",t.data.id),localStorage.setItem("secret",t.data.secret),g.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),n("auth_success",o,r),e(t)}).catch(function(e){alert(e.response.headers["x-message"]),n("auth_error"),localStorage.removeItem("token"),o(e)})})},refresh:function(e){var t=e.commit,n=e.dispatch;return new Promise(function(e,o){var r=localStorage.getItem("id"),a=localStorage.getItem("secret");t("auth_request"),g({url:"".concat(h,"/v2/my-session/").concat(r,"/refresh"),data:{secret:a},method:"PUT"}).then(function(o){var r=o.headers["x-access-token"],a=o.data.user,s={id:o.data.id,secret:o.data.secret};localStorage.setItem("token",r),localStorage.setItem("id",s.id),localStorage.setItem("secret",s.secret),g.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),t("auth_success",r,a),e(o),n("list")}).catch(function(e){alert(e.response.headers["x-message"]),t("auth_error"),localStorage.removeItem("token"),location.reload(),o(e)})})},list:function(e){var t=e.commit;return new Promise(function(e,n){g({url:h+"/v2/translations"}).then(function(n){t("modelsUpdate",n.data),e(n)}).catch(function(e){e.response?console.log("error.client_error"):alert("error.server_error"),t("auth_error"),n(e)})})},langs:function(e){var t=e.commit;return new Promise(function(e,n){g({url:"".concat(h,"/v2/languages"),method:"GET"}).then(function(n){t("get_langs",n.data),e(n)}).catch(function(e){n(e)})})},mylang:function(e,t){var n=e.dispatch;localStorage.setItem("lang",t),g.defaults.headers.common["Accept-Language"]=localStorage.getItem("lang"),n("list")},updatenative:function(e,t){var n=e.commit;return new Promise(function(e,o){g({url:"".concat(h,"/v2/translation/").concat(t.id,"/native"),method:"PUT",data:{native:t.native}}).then(function(t){console.log(t.data),e(t)}).catch(function(e){e.response?console.log("error.client_error"):alert("error.server_error"),n("auth_error"),o(e)})})},newModelAdd:function(e,t){var n=e.commit,o=e.dispatch;return new Promise(function(e,r){g({url:h+"/v2/translation/",method:"POST",data:{name:t.name,lexicon:t.lexicon}}).then(function(t){o("list"),e(t)}).catch(function(e){e.response?console.log("error.client_error"):alert("error.server_error"),n("auth_error"),r(e)})})},updatename:function(e,t){var n=e.commit;return new Promise(function(e,o){g({url:"".concat(h,"/v2/translation/").concat(t.id),method:"PUT",data:{name:t.name,lexicon:0}}).then(function(t){console.log(t.data),e(t)}).catch(function(e){e.response?console.log("error.client_error"):alert("error.server_error"),n("auth_error"),o(e)})})},removemodel:function(e,t){var n=e.commit,o=e.dispatch;return new Promise(function(e,r){g({url:"".concat(h,"/v2/translation/").concat(t.id),method:"DELETE"}).then(function(t){o("list"),e(t)}).catch(function(e){e.response?console.log("error.client_error"):alert("error.server_error"),n("auth_error"),r(e)})})},logout:function(e){var t=e.commit;return new Promise(function(e){t("logout"),localStorage.removeItem("token"),localStorage.removeItem("id"),localStorage.removeItem("secret"),delete g.defaults.headers.common["Authorization"],e()})}},getters:{isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status},models:function(e){return e.models},langs:function(e){return e.langs}}}),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("NewModel"),n("Model")],1)},b=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"models"},[n("div",{staticClass:"list"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newModel.name,expression:"newModel.name"}],ref:"names",staticClass:"noBorder",attrs:{name:"text",placeholder:"+🆕",contenteditable:"true",spellcheck:""},domProps:{value:e.newModel.name},on:{input:function(t){t.target.composing||e.$set(e.newModel,"name",t.target.value)}}}),e.newModel.name?n("input",{directives:[{name:"model",rawName:"v-model",value:e.newModel.lexicon,expression:"newModel.lexicon"}],ref:"natives",staticClass:"noBorder",attrs:{name:"text",placeholder:"lexicon",contenteditable:"true",spellcheck:""},domProps:{value:e.newModel.lexicon},on:{blur:function(t){e.newModelAdd(e.newModel)},input:function(t){t.target.composing||e.$set(e.newModel,"lexicon",t.target.value)}}}):e._e()])])},$=[],y={name:"MewModel",data:function(){return{newModel:{name:"",lexicon:""}}},methods:{newModelAdd:function(e){var t=this;this.$store.dispatch("newModelAdd",e).then(function(){return t.newModel={name:"",lexicon:""}})},newModelName:function(e){null!==e.native&&this.$store.dispatch("updatename",e).then(function(){return console.log("model saved")})}}},M=y,P=(n("6027"),Object(u["a"])(M,x,$,!1,null,null,null));P.options.__file="NewModel.vue";var S=P.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"models"},e._l(e.models,function(t){return n("div",{key:t.id,staticClass:"list"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"model.name"}],ref:"names",refInFor:!0,staticClass:"noBorder",attrs:{name:"text",contenteditable:"true",spellcheck:""},domProps:{value:t.name},on:{blur:function(n){e.newModelName(t)},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.native,expression:"model.native"}],ref:"natives",refInFor:!0,staticClass:"noBorder",attrs:{name:"text",contenteditable:"true",spellcheck:""},domProps:{value:t.native},on:{blur:function(n){e.newModelNative(t)},input:function(n){n.target.composing||e.$set(t,"native",n.target.value)}}})])}))},O=[],k={name:"Model",computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},models:function(){return this.$store.getters.models}},created:function(){var e=this;setInterval(function(){e.$store.dispatch("list")},6e4)},mounted:function(){this.list()},methods:{list:function(){var e=this;this.$store.dispatch("list").then(function(){return e.$refs.natives[0].focus()})},refresh:function(){this.$store.dispatch("refresh")},newModelNative:function(e){this.editableModel=e,console.log(e.native),""==e.native&&(e.native=" "),this.$store.dispatch("updatenative",e).then(function(){return console.log("model saved")})},newModelName:function(e){""==e.name?this.$store.dispatch("removemodel",e).then(function(){return console.log("model delete")}):this.$store.dispatch("updatename",e).then(function(){return console.log("model saved")})}}},N=k,j=(n("a65d"),Object(u["a"])(N,I,O,!1,null,null,null));j.options.__file="Model.vue";var A=j.exports,C={name:"home",components:{NewModel:S,Model:A}},E=C,T=Object(u["a"])(E,w,b,!1,null,null,null);T.options.__file="Home.vue";var L=T.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],R={},U=Object(u["a"])(R,q,B,!1,null,null,null);U.options.__file="About.vue";var z=U.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("form",{staticClass:"login",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("div",{staticClass:"list"},[n("label",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{required:"",type:"text",placeholder:"Name",autofocus:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"list"},[n("label",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{attrs:{type:"submit"}},[e._v("Login")])])])},F=[],J={data:function(){return{username:"test",password:"notasecret"}},methods:{login:function(){var e=this,t=this.username,n=this.password;this.$store.dispatch("login",{username:t,password:n}).then(function(){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},G=J,H=(n("a34d"),Object(u["a"])(G,D,F,!1,null,null,null));H.options.__file="Login.vue";var K=H.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("Register")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("label",{attrs:{for:"email"}},[e._v("E-Mail Address")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("label",{attrs:{for:"password"}},[e._v("Password")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("label",{attrs:{for:"password-confirm"}},[e._v("Confirm Password")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirmation,expression:"password_confirmation"}],attrs:{id:"password-confirm",type:"password",required:""},domProps:{value:e.password_confirmation},on:{input:function(t){t.target.composing||(e.password_confirmation=t.target.value)}}})]),e._m(0)])])},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{attrs:{type:"submit"}},[e._v("Register")])])}],W={data:function(){return{name:"",email:"",password:"",password_confirmation:""}},methods:{register:function(){var e=this,t={name:this.name,email:this.email,password:this.password};this.$store.dispatch("register",t).then(function(){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},X=W,Y=Object(u["a"])(X,Q,V,!1,null,null,null);Y.options.__file="Register.vue";var Z=Y.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Protected resource page ")])])}],ne={},oe=Object(u["a"])(ne,ee,te,!1,null,null,null);oe.options.__file="Resources.vue";var re=oe.exports;o["a"].use(m["a"]);var ae=new m["a"]({mode:"history",routes:[{path:"/",name:"home",component:L,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:K},{path:"/register",name:"register",component:Z},{path:"/resources",name:"resources",component:re,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:z}]});ae.beforeEach(function(e,t,n){if(e.matched.some(function(e){return e.meta.requiresAuth})){if(_.getters.isLoggedIn)return void n();n("/login")}else n()});var se=ae;o["a"].config.productionTip=!1,new o["a"]({router:se,store:_,render:function(e){return e(d)}}).$mount("#app")},6027:function(e,t,n){"use strict";var o=n("1ffc"),r=n.n(o);r.a},"88f4":function(e,t,n){},a34d:function(e,t,n){"use strict";var o=n("88f4"),r=n.n(o);r.a},a65d:function(e,t,n){"use strict";var o=n("4841"),r=n.n(o);r.a},c21b:function(e,t,n){}});
//# sourceMappingURL=app.d7c0565f.js.map