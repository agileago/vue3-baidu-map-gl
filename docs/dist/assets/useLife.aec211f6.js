import{a,g as m}from"./app.f8840a0b.js";import{u as d}from"./useBaseMapListener.78d0f7c1.js";function p(i){const{uid:o,emit:n}=m(),{on:r,emit:s,off:u}=d();let e=i||`__initd__${o}`;return r(e,t=>{n("initd",t)}),a(()=>{n("unload"),u(e)}),{ready:t=>{s(e,t)}}}export{p as u};