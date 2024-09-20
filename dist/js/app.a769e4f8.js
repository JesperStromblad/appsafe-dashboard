(function(){"use strict";var e={4556:function(e,a,t){var n=t(5130),i=t(6768),r=t(144),l=t(4232),s=t(4373),o=t.p+"img/google.aa4f9068.png",c=t.p+"img/huawei.393566a5.png";const d=e=>((0,i.Qi)("data-v-d3d54656"),e=e(),(0,i.jt)(),e),u={class:"outer-block"},p={key:0,class:"data label"},A={key:1,class:"data"},h=d((()=>(0,i.Lk)("p",{class:"analytic-label"},"Data collected by commercial party",-1))),v=d((()=>(0,i.Lk)("img",{src:o,width:"40px",height:"40px"},null,-1))),f=d((()=>(0,i.Lk)("img",{src:c,width:"40px",height:"40px"},null,-1))),y=[h,v,f];var m={__name:"BlockDisplay",props:{data:{type:Number,required:!0,default:10,validator:e=>e>=0&&e<=100},info:{type:String,default:"Total Apps"},company:{type:Boolean,default:!1}},setup(e){return(a,t)=>((0,i.uX)(),(0,i.CE)("div",u,[(0,i.Lk)("div",{class:(0,l.C4)(e.company?"data numbers align":"data numbers")},(0,l.v_)(e.data),3),e.company?((0,i.uX)(),(0,i.CE)("div",A,y)):((0,i.uX)(),(0,i.CE)("div",p,(0,l.v_)(e.info),1))]))}},b=t(1241);const g=(0,b.A)(m,[["__scopeId","data-v-d3d54656"]]);var E=g,w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA4QAAAOEAH50FA5AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJlQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBgAGBQAFBQAFBQAFBAAEAwADAwADAwADAwAFAgAFAgAFAgAEAgAEAgAEAgAEAgAEAgAEBAIEAwIDAwIDAwIFAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAgEEBAEEBAEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEyDDoeAAAADJ0Uk5TAAMEBQcOEBYZISwwNjhES1hcYmpwdHV2en1/gJyfpauxsry/xMbL0Nfa5uru8/T2+fpA0OTgAAAAxElEQVQoz3WSyXICMQxEHwxgYACzE0yAOOzDav//x+WAR3aqmD51qVUtuyV4Q2lji8IarUiRrZwPcCaL9fzkE5zysj5x/h/cJPRL/XwMSg6Qic8avoJbBqzEYgi9QA2oOODY7fyUYxTaf4TGlPT5u71FwWAD27ShfhDBUgR293MYi1CI4P0SpolghQ9gm1jJ8EeD2i0ZrmMP/fS58sEFzGKOKkYyh9HrGiOREC9NaH0nIUrsbrd/prFXL6p6tdXH8Ol8/gAgWE4ffIhjEgAAAABJRU5ErkJggg==";const k=(0,i.Fv)('<div class="parallel_sphere" data-v-574caa52><div data-v-574caa52><div title="" id="sphere_color" class="sphere fill" data-v-574caa52></div><span class="bubble-info" data-v-574caa52>Privacy Bubble</span></div><div data-v-574caa52><div class="outer_sphere outer_fill" data-v-574caa52><div id="sphere_id" class="sphere securty_fill" data-v-574caa52></div></div><div class="bubble-description" data-v-574caa52><span class="bubble-info" data-v-574caa52>Security Bubble</span><img title="Bubble size is the proportion of questions answered based on security analysis" src="'+w+'" height="15px" data-v-574caa52></div></div></div><fieldset id="lsphere" data-v-574caa52><legend data-v-574caa52>Sphere Color codes</legend><div class="legend-text" data-v-574caa52><div class="block-red" data-v-574caa52></div><div data-v-574caa52>More substantial concerns exist</div></div><div class="legend-text" data-v-574caa52><div class="block-green" data-v-574caa52></div><div data-v-574caa52>Less substantial concerns exist</div></div><div class="legend-text" data-v-574caa52><div class="block-gray" data-v-574caa52></div><div data-v-574caa52>Insufficient information available</div></div></fieldset>',2);var C={__name:"SphereFills",props:{issues:{type:Number,required:!0,default:100,validator:e=>e>=0&&e<=100},spherePrivacyColor:{type:String,required:!0,default:"gray"},sphereSecurityColor:{type:String,required:!0,default:"gray"}},setup(e){const a=e;function t(e){const t=250,n=50;let i=40,r=1;const l=i+(r-i)/(t-n)*(e-n);document.getElementById("sphere_id").style.width=a.issues+"px",document.getElementById("sphere_id").style.height=a.issues+"px",document.getElementById("sphere_id").style.marginTop=l+"%",document.getElementById("sphere_id").style.background=a.sphereSecurityColor}function n(){document.getElementById("sphere_color").style.width="260px",document.getElementById("sphere_color").style.height="260px",document.getElementById("sphere_color").style.background=a.spherePrivacyColor}return(0,i.wB)((()=>a.issues),(()=>{t(a.issues),n()})),(0,i.sV)((()=>{t(a.issues),n()})),(e,a)=>k}};const L=(0,b.A)(C,[["__scopeId","data-v-574caa52"]]);var _=L;const I=(0,i.Lk)("div",{class:"header"},[(0,i.Lk)("h2",{class:"title"},"DashBoard")],-1),x=(0,i.Lk)("p",null," This dashboard was made by the APPSAFE project, based at Tilburg and Nijmegen universities and the Trimbos institute. It is designed to visualise the app features that Android app developers are required to report when they submit an app to the Google Play store. These features are required by the Play store, and are defined by requirements based on data protection law. ",-1),B=(0,i.Lk)("span",null,"(ERC PoC grant # 101069354 — APPSAFE)",-1),F=(0,i.Lk)("hr",null,null,-1),O=(0,i.Lk)("h2",null,"Overall statistics",-1),S={class:"blocks"},P=(0,i.Lk)("hr",{class:"line"},null,-1),R=(0,i.Lk)("h2",null,"Select an individual App",-1),T={class:"custom-select"},j=(0,i.Lk)("option",{disabled:"",value:""},"Please select one",-1),D=["value"],q=(0,i.Lk)("h2",null,"Data privacy concerns",-1),Q={class:"qna-block"},U=(0,i.Lk)("p",{class:"category"},"Security Questions",-1),X=(0,i.Lk)("hr",null,null,-1),M=(0,i.Lk)("div",{class:"question"},"Can the device be controlled remotely?",-1),W={class:"answer"},Y=(0,i.Lk)("div",{class:"question"},"Can harmful code be executed remotely?",-1),G={class:"answer"},J=(0,i.Lk)("div",{class:"question"},"Can a third party intercept the application’s communication?",-1),K={class:"answer"},N=(0,i.Lk)("div",{class:"question"},"Can a third party update this legitimate app with a malicious one?",-1),V={class:"answer"},z=(0,i.Lk)("div",{class:"question"},"Which phone hardware(s) can be misused from this app?",-1),H={class:"answer"},Z=(0,i.Lk)("p",{class:"category"},"Privacy Question",-1),$=(0,i.Lk)("hr",null,null,-1),ee=(0,i.Lk)("div",{class:"question"},"Is data collected by third party?",-1),ae={class:"answer"};var te={__name:"App",setup(e){let a=(0,r.KR)([]),t=(0,r.KR)("7 Cups: Online Therapy & Chat");function o(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null===t[0]["Can device be controlled remotely?"]?"Unknown":t[0]&&t[0]["Can device be controlled remotely?"]}function c(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null===t[0]["Can harmful code be executed remotely?"]?"Unknown":t[0]&&t[0]["Can harmful code be executed remotely?"]}function d(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null===t[0]["Can third party intercept application communication?"]?"Unknown":t[0]&&t[0]["Can third party intercept application communication?"]}function u(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null===t[0]["Can third party update a ligitimate app with a malicious one?"]?"Unknown":t[0]&&t[0]["Can third party update a ligitimate app with a malicious one?"]}function p(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null===t[0]["Is data collected by third party?*"]?"Unknown":t[0]&&t[0]["Is data collected by third party?*"]}function A(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null===t[0]["Which phone hardware(s) can be misued from app?*"]?"Unknown":t[0]&&t[0]["Which phone hardware(s) can be misued from app?*"]}function h(e){let a=0;return e.forEach((e=>{e&&null!==e["Can device be controlled remotely?"]&&a++,e&&null!==e["Can harmful code be executed remotely?"]&&a++,e&&null!==e["Can third party intercept application communication?"]&&a++,e&&null!==e["Can third party update a ligitimate app with a malicious one?"]&&a++,e&&null!==e["Is data collected by third party?*"]&&a++,e&&null!==e["Which phone hardware(s) can be misued from app?*"]&&a++})),a}function v(e,a){let t=0;const n=e.filter((e=>e["App name"]===a));return n[0]&&null!==n[0]["Can device be controlled remotely?"]&&t++,n[0]&&null!==n[0]["Can harmful code be executed remotely?"]&&t++,n[0]&&null!==n[0]["Can third party intercept application communication?"]&&t++,n[0]&&null!==n[0]["Can third party update a ligitimate app with a malicious one?"]&&t++,n[0]&&null!==n[0]["Is data collected by third party?*"]&&t++,n[0]&&null!==n[0]["Which phone hardware(s) can be misued from app?*"]&&t++,50*t}function f(e,a){const t=e.filter((e=>e["App name"]===a));return t[0]&&null!==t[0]["Is data collected by third party?*"]?"#FF033E":t[0]&&null===t[0]["Is data collected by third party?*"]?"#899499":"#32de84"}function y(e,a){let t,n,i=1;const r=e.filter((e=>e["App name"]===a));r.forEach((e=>{const a=Object.keys(e).filter((a=>null===e[a]));t=a.length})),r[0]&&null===r[0]["Is data collected by third party?*"]&&i++;const l=t-i;if(5===l)return"#899499";i=0,r.forEach((e=>{const a=Object.keys(e).filter((a=>"Yes"===e[a]));n=a.length}));const s=n-i;return s>0?"#FF033E":"#32de84"}return(0,i.sV)((async()=>{const e=await s.A.get("appData50.json");a.value=e.data})),(e,s)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[I,x,B,F,O,((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,r.R1)(a),((e,a)=>((0,i.uX)(),(0,i.CE)("div",{key:a},[(0,i.Lk)("div",S,[(0,i.bF)(E,{data:31,info:"Total Apps"}),(0,i.bF)(E,{data:h(e),info:"Privacy issues"},null,8,["data"]),(0,i.bF)(E,{data:2,info:"Total issues",company:!0})]),P,R,(0,i.Lk)("div",T,[(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>(0,r.i9)(t)?t.value=e:t=e)},[j,((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,((e,a)=>((0,i.uX)(),(0,i.CE)("option",{value:e["App name"],key:a},(0,l.v_)(e["App name"]),9,D)))),128))],512),[[n.u1,(0,r.R1)(t)]])]),q,(0,i.bF)(_,{issues:v(e,(0,r.R1)(t)),spherePrivacyColor:f(e,(0,r.R1)(t)),sphereSecurityColor:y(e,(0,r.R1)(t))},null,8,["issues","spherePrivacyColor","sphereSecurityColor"]),(0,i.Lk)("div",Q,[U,X,M,(0,i.Lk)("div",W,(0,l.v_)(o(e,(0,r.R1)(t))),1),Y,(0,i.Lk)("div",G,(0,l.v_)(c(e,(0,r.R1)(t))),1),J,(0,i.Lk)("div",K,(0,l.v_)(d(e,(0,r.R1)(t))),1),N,(0,i.Lk)("div",V,(0,l.v_)(u(e,(0,r.R1)(t))),1),z,(0,i.Lk)("div",H,(0,l.v_)(A(e,(0,r.R1)(t))),1),Z,$,ee,(0,i.Lk)("div",ae,(0,l.v_)(p(e,(0,r.R1)(t))),1)])])))),128))],64))}};const ne=te;var ie=ne;(0,n.Ef)(ie).mount("#app")}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var r=a[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,n,i,r){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,o=0;o<n.length;o++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[o])}))?n.splice(o--,1):(s=!1,r<l&&(l=r));if(s){e.splice(d--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/appsafe-dashboard/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var i,r,l=n[0],s=n[1],o=n[2],c=0;if(l.some((function(a){return 0!==e[a]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(o)var d=o(t)}for(a&&a(n);c<l.length;c++)r=l[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},n=self["webpackChunkapp_safe"]=self["webpackChunkapp_safe"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(4556)}));n=t.O(n)})();
//# sourceMappingURL=app.a769e4f8.js.map