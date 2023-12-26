import{z as N,v as A,_ as x}from"./index-5259c4bc.js";import"./index-bdf6b15a.js";import"./index-3250ff6a.js";import"./index-c42ce534.js";import"./index-9f147a7c.js";import{d as S,c as E,C as c,D as b,aI as e,aG as t,aK as F,aJ as G,aE as k,aN as s,cb as Y,cc as J,c2 as K,bc as V,f as y,aM as u,u as D,G as P,aF as I,bY as M,aY as R,bZ as U,bu as Z,bV as T,be as H,bf as Q,b0 as W,c5 as X,c6 as ee}from"./arco-adc6c535.js";import{u as L}from"./loading-f0025922.js";import"./index-b186d937.js";import"./index-50b53bc0.js";import"./index-3a46639e.js";import"./index-3281bd49.js";import"./index-5e44522e.js";import"./index-8259b3ef.js";import"./index-c7bd6e11.js";import"./index-342e332b.js";import"./index-467baea6.js";import"./chart-28c88d04.js";import"./vue-bc752e41.js";function C(){return N.get("/api/profile/basic")}function ae(){return N.get("/api/operation/log")}const te={class:"item-container"},oe={key:1},le=S({__name:"profile-item",props:{type:{type:String,default:""},renderData:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(r){const d=r,{t:a}=A.useI18n(),p=E(()=>{const{renderData:l}=d,o=[];return o.push({title:d.type==="pre"?a("basicProfile.title.preVideo"):a("basicProfile.title.video"),data:[{label:a("basicProfile.label.video.mode"),value:l?.video?.mode||"-"},{label:a("basicProfile.label.video.acquisition.resolution"),value:l?.video?.acquisition.resolution||"-"},{label:a("basicProfile.label.video.acquisition.frameRate"),value:`${l?.video?.acquisition.frameRate||"-"} fps`},{label:a("basicProfile.label.video.encoding.resolution"),value:l?.video?.encoding.resolution||"-"},{label:a("basicProfile.label.video.encoding.rate.min"),value:`${l?.video?.encoding.rate.min||"-"} bps`},{label:a("basicProfile.label.video.encoding.rate.max"),value:`${l?.video?.encoding.rate.max||"-"} bps`},{label:a("basicProfile.label.video.encoding.rate.default"),value:`${l?.video?.encoding.rate.default||"-"} bps`},{label:a("basicProfile.label.video.encoding.frameRate"),value:`${l?.video?.encoding.frameRate||"-"} fpx`},{label:a("basicProfile.label.video.encoding.profile"),value:l?.video?.encoding.profile||"-"}]}),o.push({title:d.type==="pre"?a("basicProfile.title.preAudio"):a("basicProfile.title.audio"),data:[{label:a("basicProfile.label.audio.mode"),value:l?.audio?.mode||"-"},{label:a("basicProfile.label.audio.acquisition.channels"),value:`${l?.audio?.acquisition.channels||"-"} ${a("basicProfile.unit.audio.channels")}`},{label:a("basicProfile.label.audio.encoding.channels"),value:`${l?.audio?.encoding.channels||"-"} ${a("basicProfile.unit.audio.channels")}`},{label:a("basicProfile.label.audio.encoding.rate"),value:`${l?.audio?.encoding.rate||"-"} kbps`},{label:a("basicProfile.label.audio.encoding.profile"),value:l?.audio?.encoding.profile||"-"}]}),o});return(l,o)=>{const m=Y,n=J,v=K,g=V;return c(),b("div",te,[e(g,{size:16,direction:"vertical",fill:""},{default:t(()=>[(c(!0),b(F,null,G(p.value,(i,_)=>(c(),k(v,{key:_,"label-style":{textAlign:"right",width:"200px",paddingRight:"10px",color:"rgb(var(--gray-8))"},"value-style":{width:"400px"},title:i.title,data:i.data},{value:t(({value:f})=>[r.loading?(c(),k(n,{key:0,animation:!0},{default:t(()=>[e(m,{widths:["200px"],rows:1})]),_:1})):(c(),b("span",oe,s(f),1))]),_:2},1032,["label-style","title","data"]))),128))]),_:1})])}}});const q=x(le,[["__scopeId","data-v-e02e3371"]]),z=r=>(H("data-v-f3f8ae0a"),r=r(),Q(),r),ie={key:0},ne=z(()=>P("span",{class:"circle"},null,-1)),se={key:1},ce=z(()=>P("span",{class:"circle pass"},null,-1)),re=S({__name:"operation-log",setup(r){const{loading:d,setLoading:a}=L(!0),p=y([]);return(async()=>{try{const{data:o}=await ae();p.value=o}catch{}finally{a(!1)}})(),(o,m)=>{const n=M,v=R,g=U,i=Z,_=T;return c(),k(_,{class:"general-card"},{title:t(()=>[u(s(o.$t("basicProfile.title.operationLog")),1)]),default:t(()=>[e(i,{loading:D(d),style:{width:"100%"}},{default:t(()=>[e(g,{data:p.value},{columns:t(()=>[e(n,{title:o.$t("basicProfile.column.contentNumber"),"data-index":"contentNumber"},null,8,["title"]),e(n,{title:o.$t("basicProfile.column.updateContent"),"data-index":"updateContent"},null,8,["title"]),e(n,{title:o.$t("basicProfile.column.status"),"data-index":"status"},{cell:t(({record:f})=>[f.status===0?(c(),b("p",ie,[ne,P("span",null,s(o.$t("basicProfile.cell.auditing")),1)])):I("",!0),f.status===1?(c(),b("p",se,[ce,P("span",null,s(o.$t("basicProfile.cell.pass")),1)])):I("",!0)]),_:1},8,["title"]),e(n,{title:o.$t("basicProfile.column.updateTime"),"data-index":"updateTime"},null,8,["title"]),e(n,{title:o.$t("basicProfile.column.operation")},{cell:t(()=>[e(v,{type:"text"},{default:t(()=>[u(s(o.$t("basicProfile.cell.view")),1)]),_:1})]),_:1},8,["title"])]),_:1},8,["data"])]),_:1},8,["loading"])]),_:1})}}});const de=x(re,[["__scopeId","data-v-f3f8ae0a"]]),ue={class:"container"},pe={name:"Basic"},_e=S({...pe,setup(r){const{loading:d,setLoading:a}=L(!0),{loading:p,setLoading:l}=L(!0),o=y({}),m=y({}),n=y(1),v=async()=>{try{const{data:i}=await C();o.value=i,n.value=2}catch{}finally{a(!1)}},g=async()=>{try{const{data:i}=await C();m.value=i}catch{}finally{l(!1)}};return v(),g(),(i,_)=>{const f=W("Breadcrumb"),w=R,B=V,h=X,O=ee,$=T;return c(),b("div",ue,[e(f,{items:["menu.profile","menu.profile.basic"]},null,8,["items"]),e(B,{direction:"vertical",size:16,fill:""},{default:t(()=>[e($,{class:"general-card",title:i.$t("basicProfile.title.form")},{extra:t(()=>[e(B,null,{default:t(()=>[e(w,null,{default:t(()=>[u(s(i.$t("basicProfile.cancel")),1)]),_:1}),e(w,{type:"primary"},{default:t(()=>[u(s(i.$t("basicProfile.goBack")),1)]),_:1})]),_:1})]),default:t(()=>[e(O,{current:n.value,"onUpdate:current":_[0]||(_[0]=j=>n.value=j),"line-less":"",class:"steps"},{default:t(()=>[e(h,null,{default:t(()=>[u(s(i.$t("basicProfile.steps.commit")),1)]),_:1}),e(h,null,{default:t(()=>[u(s(i.$t("basicProfile.steps.approval")),1)]),_:1}),e(h,null,{default:t(()=>[u(s(i.$t("basicProfile.steps.finish")),1)]),_:1})]),_:1},8,["current"])]),_:1},8,["title"]),e($,{class:"general-card"},{default:t(()=>[e(q,{loading:D(d),"render-data":o.value},null,8,["loading","render-data"])]),_:1}),e($,{class:"general-card"},{default:t(()=>[e(q,{loading:D(p),type:"pre","render-data":m.value},null,8,["loading","render-data"])]),_:1}),e(de)]),_:1})])}}});const qe=x(_e,[["__scopeId","data-v-a033c267"]]);export{qe as default};