import{_ as f,d as i,h as d,o as l,b as u,c,r as p}from"./app.3ef17516.js";import{u as _}from"./useLife.85764ffb.js";import{u as m}from"./useBaseMapEffect.5bebc855.js";const C=i({props:{anchor:{default:"BMAP_ANCHOR_TOP_LEFT"},offset:{default:()=>({x:83,y:18})}},emits:["initd","unload"],setup(r){const t=r,n=d(),{ready:a}=_();return l(()=>{m(o=>{const e=new window.BMapGL.Control;if(!!n.value)return e.defaultAnchor=window[t.anchor],e.defaultOffset=new window.BMapGL.Size(t.offset.x,t.offset.y),e.initialize=s=>s.getContainer().appendChild(n.value),o.addControl(e),a(o),()=>o.removeControl(e)})}),(o,e)=>(u(),c("div",{ref_key:"controlContainer",ref:n},[p(o.$slots,"default")],512))}});var x=f(C,[["__file","index.vue"]]);export{x as default};
