import{J as a,c as r,gs as t}from"./index-4e96c428.js";function o(){const n=a();return{isDark:r(()=>n.theme==="dark")}}function s(n){return t.post("/api/data-chain-growth",n)}function u(){return t.get("/api/popular-author/list")}function p(){return t.get("/api/content-publish")}function c(){return t.post("/api/content-period-analysis")}function l(n){return t.post("/api/public-opinion-analysis",n)}function h(){return t.post("/api/data-overview")}export{c as a,p as b,u as c,h as d,s as e,l as q,o as u};