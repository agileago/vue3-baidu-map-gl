import{_ as r,d as a,b as s,c as f}from"./app.b8e7ffde.js";import{u as i}from"./useBaseMapEffect.f173e0ec.js";import"./useBaseMapListener.78d0f7c1.js";const c=a({props:{anchor:{default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{default:()=>({x:83,y:18})}},emits:["initd","unload"],setup(n){const o=n;let e;return i(t=>(e=new window.BMapGL.ZoomControl({offset:new window.BMapGL.Size(o.offset.x,o.offset.y),anchor:window[o.anchor]}),t.addControl(e),()=>t.removeControl(e))),(t,d)=>(s(),f("div"))}});var m=r(c,[["__file","index.vue"]]);export{m as default};