import{_ as A,f as x,j as u,o as a,c as d,b as t,w as l,r as n,K as E,L as V,m as b,a as s,t as r}from"./app.3ad6cb1c.js";const C={class:"mk-api-errors"},B={class:"_mono"},F={class:"_mono"},D=x({__name:"MkApiErrors",props:{errors:null,commonErrors:null},setup(m){const i=u("a"),_=u([]),c=u([]);return(M,o)=>{const p=n("el-collapse-item"),f=n("el-collapse"),v=n("el-tab-pane"),k=n("el-tabs");return a(),d("div",C,[t(k,{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=e=>i.value=e)},{default:l(()=>[t(v,{label:"\u56FA\u6709\u306E\u30A8\u30E9\u30FC",name:"a"},{default:l(()=>[t(f,{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=e=>_.value=e)},{default:l(()=>[(a(!0),d(E,null,V(m.errors,e=>(a(),b(p,{title:e.code,name:e.id},{default:l(()=>[s("div",null,r(e.description),1),s("div",B,"ID: "+r(e.id),1)]),_:2},1032,["title","name"]))),256))]),_:1},8,["modelValue"])]),_:1}),t(v,{label:"\u5171\u901A\u306E\u30A8\u30E9\u30FC",name:"b"},{default:l(()=>[t(f,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value=e)},{default:l(()=>[(a(!0),d(E,null,V(m.commonErrors,e=>(a(),b(p,{title:e.code,name:e.id},{default:l(()=>[s("div",null,r(e.description),1),s("div",F,"ID: "+r(e.id),1)]),_:2},1032,["title","name"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])}}});var U=A(D,[["__file","MkApiErrors.vue"]]);export{U as default};
