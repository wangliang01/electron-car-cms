import{d as k,v as F,c as U,o as i,a as m,b as s,e,w as n,F as R,r as j,C as z,f as A,t as r,g as D,_ as x,u as E,h as Q,i as T,j as W,k as G,l as C,m as f,M as H,I as J,n as K,p as O,q as X,s as Y,x as Z,L as ee,B as oe,S as se,y as ae,z as ne,A as te}from"./index-4e96c428.js";import{F as re}from"./index-df14f6ad.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as le}from"./loading-3d00edd7.js";const S=""+new URL("login-banner-426fb77f.png",import.meta.url).href,ce={class:"banner"},ie={class:"banner-inner"},_e={class:"carousel-title"},de={class:"carousel-sub-title"},ue=["src"],me=k({__name:"banner",setup(c){const{t}=F.useI18n(),g=U(()=>[{slogan:t("login.banner.slogan1"),subSlogan:t("login.banner.subSlogan1"),image:S},{slogan:t("login.banner.slogan2"),subSlogan:t("login.banner.subSlogan2"),image:S},{slogan:t("login.banner.slogan3"),subSlogan:t("login.banner.subSlogan3"),image:S}]);return(v,b)=>{const p=D,h=z;return i(),m("div",ce,[s("div",ie,[e(h,{class:"carousel","animation-name":"fade"},{default:n(()=>[(i(!0),m(R,null,j(g.value,a=>(i(),A(p,{key:a.slogan},{default:n(()=>[(i(),m("div",{key:a.slogan,class:"carousel-item"},[s("div",_e,r(a.slogan),1),s("div",de,r(a.subSlogan),1),s("img",{class:"carousel-image",src:a.image},null,8,ue)]))]),_:2},1024))),128))]),_:1})])])}}});const ge=x(me,[["__scopeId","data-v-178ff897"]]),pe={class:"login-form-wrapper"},fe={class:"login-form-title"},ve={class:"login-form-sub-title"},be={class:"login-form-error-msg"},he={class:"login-form-password-actions"},we=k({__name:"login-form",setup(c){const t=E(),{t:g}=F.useI18n(),v=Q(""),{loading:b,setLoading:p}=le(),h=T(),a=W("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),_=G({username:a.value.username,password:a.value.password}),L=async({errors:o,values:l})=>{if(!b.value&&!o){p(!0);try{await h.login(l);const{redirect:d,...w}=t.currentRoute.value.query;t.push({name:d||"Workplace",query:{...w}}),H.success(g("login.form.login.success"));const{rememberPassword:u}=a.value,{username:y,password:$}=l;a.value.username=u?y:"",a.value.password=u?$:""}catch(d){v.value=d.message}finally{p(!1)}}},V=o=>{a.value.rememberPassword=o};return(o,l)=>{const d=J,w=K,u=O,y=X,$=Y,B=Z,q=ee,P=oe,M=se,N=ae;return i(),m("div",pe,[s("div",fe,r(o.$t("login.form.title")),1),s("div",ve,r(o.$t("login.form.title")),1),s("div",be,r(v.value),1),e(N,{ref:"loginForm",model:_,class:"login-form",layout:"vertical",onSubmit:L},{default:n(()=>[e(u,{field:"username",rules:[{required:!0,message:o.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(w,{modelValue:_.username,"onUpdate:modelValue":l[0]||(l[0]=I=>_.username=I),placeholder:o.$t("login.form.userName.placeholder")},{prefix:n(()=>[e(d)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(u,{field:"password",rules:[{required:!0,message:o.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e($,{modelValue:_.password,"onUpdate:modelValue":l[1]||(l[1]=I=>_.password=I),placeholder:o.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[e(y)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(M,{size:16,direction:"vertical"},{default:n(()=>[s("div",he,[e(B,{checked:"rememberPassword","model-value":C(a).rememberPassword,onChange:V},{default:n(()=>[f(r(o.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(q,null,{default:n(()=>[f(r(o.$t("login.form.forgetPassword")),1)]),_:1})]),e(P,{type:"primary","html-type":"submit",long:"",loading:C(b)},{default:n(()=>[f(r(o.$t("login.form.login")),1)]),_:1},8,["loading"]),e(P,{type:"text",long:"",class:"login-form-register-btn"},{default:n(()=>[f(r(o.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});const ye=x(we,[["__scopeId","data-v-bccea9f2"]]),$e=c=>(ne("data-v-c6e3f669"),c=c(),te(),c),Ie={class:"container"},Se=$e(()=>s("div",{class:"logo"},[s("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"}),s("div",{class:"logo-text"},"Arco Design Pro")],-1)),ke={class:"content"},xe={class:"content-inner"},Pe={class:"footer"},Ce=k({__name:"index",setup(c){return(t,g)=>(i(),m("div",Ie,[Se,e(ge),s("div",ke,[s("div",xe,[e(ye)]),s("div",Pe,[e(re)])])]))}});const je=x(Ce,[["__scopeId","data-v-c6e3f669"]]);export{je as default};
