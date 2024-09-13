(function(){"use strict";var e={4915:function(e,t,a){var n=a(5130),i=a(6768),l=a(144),r=a(4232),s=a(4373),d=a.p+"img/google.aa4f9068.png",o=a.p+"img/huawei.393566a5.png";const c=e=>((0,i.Qi)("data-v-ad091ade"),e=e(),(0,i.jt)(),e),u={class:"outer-block"},p={key:0,class:"data label"},v={key:1,class:"data"},f=c((()=>(0,i.Lk)("p",{class:"analytic-label"},"Data collected by commercial party",-1))),h=c((()=>(0,i.Lk)("img",{src:d,width:"40px",height:"40px"},null,-1))),y=c((()=>(0,i.Lk)("img",{src:o,width:"40px",height:"40px"},null,-1))),m=[f,h,y];var b={__name:"BlockDisplay",props:{data:{type:Number,required:!0,default:10,validator:e=>e>=0&&e<=100},info:{type:String,default:"Total Apps"},company:{type:Boolean,default:!1}},setup(e){return(t,a)=>((0,i.uX)(),(0,i.CE)("div",u,[(0,i.Lk)("div",{class:(0,r.C4)(e.company?"data numbers align":"data numbers")},(0,r.v_)(e.data),3),e.company?((0,i.uX)(),(0,i.CE)("div",v,m)):((0,i.uX)(),(0,i.CE)("div",p,(0,r.v_)(e.info),1))]))}},k=a(1241);const g=(0,k.A)(b,[["__scopeId","data-v-ad091ade"]]);var C=g;const w=(0,i.Fv)('<div class="parallel_sphere" data-v-ddf651e0><div data-v-ddf651e0><div id="sphere_color" class="sphere fill" data-v-ddf651e0></div><span class="bubble-info" data-v-ddf651e0>Privacy Bubble</span></div><div data-v-ddf651e0><div class="outer_sphere outer_fill" data-v-ddf651e0><div id="sphere_id" class="sphere securty_fill" data-v-ddf651e0></div></div><span class="bubble-info" data-v-ddf651e0>Security Bubble</span></div></div><div class="label-container" data-v-ddf651e0><div class="label-column" data-v-ddf651e0><div class="label" data-v-ddf651e0><div class="label" data-v-ddf651e0><div class="info" data-v-ddf651e0>Color code description</div><div class="desc" data-v-ddf651e0><div class="block-red" data-v-ddf651e0></div> More substantial concerns exist </div><div class="desc" data-v-ddf651e0><div class="block-gray" data-v-ddf651e0></div> Insufficient information available </div><div class="desc" data-v-ddf651e0><div class="block-green" data-v-ddf651e0></div> Less substantial concerns exist </div><div class="info add-legend" data-v-ddf651e0>Bubble Size</div><div class="desc" data-v-ddf651e0>Size of security bubble is proportionaly to questions answered</div></div></div></div></div>',2);var _={__name:"SphereFills",props:{issues:{type:Number,required:!0,default:100,validator:e=>e>=0&&e<=100},spherePrivacyColor:{type:String,required:!0,default:"gray"},sphereSecurityColor:{type:String,required:!0,default:"gray"}},setup(e){const t=e;function a(e){const a=250,n=50;let i=40,l=1;const r=i+(l-i)/(a-n)*(e-n);document.getElementById("sphere_id").style.width=t.issues+"px",document.getElementById("sphere_id").style.height=t.issues+"px",document.getElementById("sphere_id").style.marginTop=r+"%",document.getElementById("sphere_id").style.background=t.sphereSecurityColor}function n(){document.getElementById("sphere_color").style.width="260px",document.getElementById("sphere_color").style.height="260px",document.getElementById("sphere_color").style.background=t.spherePrivacyColor}return(0,i.wB)((()=>t.issues),(()=>{a(t.issues),n()})),(0,i.sV)((()=>{a(t.issues),n()})),(e,t)=>w}};const L=(0,k.A)(_,[["__scopeId","data-v-ddf651e0"]]);var E=L;const A=(0,i.Lk)("div",{class:"header"},[(0,i.Lk)("h2",{class:"title"},"DashBoard")],-1),I=(0,i.Lk)("p",null," This dashboard was made by the APPSAFE project, based at Tilburg and Nijmegen universities and the Trimbos institute. It is designed to visualise the app features that Android app developers are required to report when they submit an app to the Google Play store. These features are required by the Play store, and are defined by requirements based on data protection law. ",-1),x=(0,i.Lk)("span",null,"(ERC PoC grant # 101069354 — APPSAFE)",-1),S=(0,i.Lk)("hr",null,null,-1),P=(0,i.Lk)("h2",null,"Overall statistics",-1),O={class:"blocks"},F=(0,i.Lk)("hr",{class:"line"},null,-1),q=(0,i.Lk)("h2",null,"Select an individual App",-1),j={class:"custom-select"},B=(0,i.Lk)("option",{disabled:"",value:""},"Please select one",-1),R=["value"],T=(0,i.Lk)("h2",null,"Data privacy concerns",-1),X={class:"qna-block"},U=(0,i.Lk)("p",{class:"category"},"Security",-1),D=(0,i.Lk)("hr",null,null,-1),K=(0,i.Lk)("div",{class:"question"},"Can device be controlled remotely?",-1),W={class:"answer"},M=(0,i.Lk)("div",{class:"question"},"Can harmful code be executed remotely?",-1),N={class:"answer"},V=(0,i.Lk)("div",{class:"question"},"Can a third party intercept the application’s communication?",-1),z={class:"answer"},G=(0,i.Lk)("div",{class:"question"},"Can a third party update this legitimate app with a malicious one?",-1),Q={class:"answer"},Y=(0,i.Lk)("div",{class:"question"},"Which phone hardware(s) can be misused from this app?",-1),H={class:"answer"},J=(0,i.Lk)("p",{class:"category"},"Privacy",-1),Z=(0,i.Lk)("hr",null,null,-1),$=(0,i.Lk)("div",{class:"question"},"Is data collected by third party?",-1),ee={class:"answer"};var te={__name:"App",setup(e){let t=(0,l.KR)([]),a=(0,l.KR)("7 Cups: Online Therapy & Chat");function d(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null===a[0]["Can device be controlled remotely?"]?"Unknown":a[0]&&a[0]["Can device be controlled remotely?"]}function o(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null===a[0]["Can harmful code be executed remotely?"]?"Unknown":a[0]&&a[0]["Can harmful code be executed remotely?"]}function c(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null===a[0]["Can third party intercept application communication?"]?"Unknown":a[0]&&a[0]["Can third party intercept application communication?"]}function u(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null===a[0]["Can third party update a ligitimate app with a malicious one?"]?"Unknown":a[0]&&a[0]["Can third party update a ligitimate app with a malicious one?"]}function p(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null===a[0]["Is data collected by third party?*"]?"Unknown":a[0]&&a[0]["Is data collected by third party?*"]}function v(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null===a[0]["Which phone hardware(s) can be misued from app?*"]?"Unknown":a[0]&&a[0]["Which phone hardware(s) can be misued from app?*"]}function f(e){let t=0;return e.forEach((e=>{e&&null!==e["Can device be controlled remotely?"]&&t++,e&&null!==e["Can harmful code be executed remotely?"]&&t++,e&&null!==e["Can third party intercept application communication?"]&&t++,e&&null!==e["Can third party update a ligitimate app with a malicious one?"]&&t++,e&&null!==e["Is data collected by third party?*"]&&t++,e&&null!==e["Which phone hardware(s) can be misued from app?*"]&&t++})),t}function h(e,t){let a=0;const n=e.filter((e=>e["App name"]===t));return n[0]&&null!==n[0]["Can device be controlled remotely?"]&&a++,n[0]&&null!==n[0]["Can harmful code be executed remotely?"]&&a++,n[0]&&null!==n[0]["Can third party intercept application communication?"]&&a++,n[0]&&null!==n[0]["Can third party update a ligitimate app with a malicious one?"]&&a++,n[0]&&null!==n[0]["Is data collected by third party?*"]&&a++,n[0]&&null!==n[0]["Which phone hardware(s) can be misued from app?*"]&&a++,50*a}function y(e,t){const a=e.filter((e=>e["App name"]===t));return a[0]&&null!==a[0]["Is data collected by third party?*"]?"#FF033E":a[0]&&null===a[0]["Is data collected by third party?*"]?"#899499":"#32de84"}function m(e,t){let a,n,i=1;const l=e.filter((e=>e["App name"]===t));l.forEach((e=>{const t=Object.keys(e).filter((t=>null===e[t]));a=t.length})),l[0]&&null===l[0]["Is data collected by third party?*"]&&i++;const r=a-i;if(5===r)return"#899499";i=0,l.forEach((e=>{const t=Object.keys(e).filter((t=>"Yes"===e[t]));n=t.length}));const s=n-i;return s>0?"#FF033E":"#32de84"}return(0,i.sV)((async()=>{const e=await s.A.get("appData50.json");t.value=e.data})),(e,s)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[A,I,x,S,P,((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,l.R1)(t),((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[(0,i.Lk)("div",O,[(0,i.bF)(C,{data:31,info:"Total Apps"}),(0,i.bF)(C,{data:f(e),info:"Privacy issues"},null,8,["data"]),(0,i.bF)(C,{data:2,info:"Total issues",company:!0})]),F,q,(0,i.Lk)("div",j,[(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>(0,l.i9)(a)?a.value=e:a=e)},[B,((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,((e,t)=>((0,i.uX)(),(0,i.CE)("option",{value:e["App name"],key:t},(0,r.v_)(e["App name"]),9,R)))),128))],512),[[n.u1,(0,l.R1)(a)]])]),T,(0,i.bF)(E,{issues:h(e,(0,l.R1)(a)),spherePrivacyColor:y(e,(0,l.R1)(a)),sphereSecurityColor:m(e,(0,l.R1)(a))},null,8,["issues","spherePrivacyColor","sphereSecurityColor"]),(0,i.Lk)("div",X,[U,D,K,(0,i.Lk)("div",W,(0,r.v_)(d(e,(0,l.R1)(a))),1),M,(0,i.Lk)("div",N,(0,r.v_)(o(e,(0,l.R1)(a))),1),V,(0,i.Lk)("div",z,(0,r.v_)(c(e,(0,l.R1)(a))),1),G,(0,i.Lk)("div",Q,(0,r.v_)(u(e,(0,l.R1)(a))),1),Y,(0,i.Lk)("div",H,(0,r.v_)(v(e,(0,l.R1)(a))),1),J,Z,$,(0,i.Lk)("div",ee,(0,r.v_)(p(e,(0,l.R1)(a))),1)])])))),128))],64))}};const ae=te;var ne=ae;(0,n.Ef)(ne).mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,l){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],l=e[c][2];for(var s=!0,d=0;d<n.length;d++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var o=i();void 0!==o&&(t=o)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/appsafe-dashboard/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,r=n[0],s=n[1],d=n[2],o=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(d)var c=d(a)}for(t&&t(n);o<r.length;o++)l=r[o],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkapp_safe"]=self["webpackChunkapp_safe"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(4915)}));n=a.O(n)})();
//# sourceMappingURL=app.c24315ff.js.map