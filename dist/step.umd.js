(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.Vue3Step={},o.Vue))})(this,function(o,e){"use strict";const a=e.defineComponent({name:"Vue3Step",props:{width:{type:Number,default:500},step:{type:Number,default:1},list:{type:Array,default:()=>[]}}}),g="",d=(t,s)=>{const l=t.__vccOpts||t;for(const[c,r]of s)l[c]=r;return l},p={class:"step_item_number"},m={key:1,t:"1690883422271",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3142",width:"200",height:"200"},_=[e.createElementVNode("path",{d:"M503.808 47.104C248.832 47.104 40.96 254.976 40.96 509.952S248.832 972.8 503.808 972.8s462.848-207.872 462.848-462.848S758.784 47.104 503.808 47.104z m0 873.472c-226.304 0-410.624-184.32-410.624-410.624s184.32-410.624 410.624-410.624 410.624 184.32 410.624 410.624c-1.024 226.304-184.32 410.624-410.624 410.624z",fill:"#4799EB","p-id":"3143"},null,-1),e.createElementVNode("path",{d:"M701.44 358.4L434.176 625.664l-122.88-122.88c-12.288-12.288-32.768-12.288-45.056 0-12.288 12.288-12.288 32.768 0 45.056l144.384 144.384c6.144 6.144 15.36 9.216 23.552 9.216 8.192 0 17.408-3.072 23.552-9.216l288.768-288.768c12.288-12.288 12.288-32.768 0-45.056-12.288-12.288-32.768-12.288-45.056 0z",fill:"#4799EB","p-id":"3144"},null,-1)],f={class:"step_item_title"},h={key:0,class:"step_item_line"};function y(t,s,l,c,r,N){return e.openBlock(),e.createElementBlock("div",{class:"stepFlex",style:e.normalizeStyle({width:`${t.width}px`})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.list,(u,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["step_item",{active:t.step==n+1}]),style:e.normalizeStyle({flex:t.list.length}),key:n},[e.createElementVNode("div",p,[t.step>n+1?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(n+1),1)],64)),t.step>n+1?(e.openBlock(),e.createElementBlock("svg",m,_)):e.createCommentVNode("",!0)]),e.createElementVNode("div",f,e.toDisplayString(u.title),1),n+1!=t.list.length?(e.openBlock(),e.createElementBlock("div",h)):e.createCommentVNode("",!0)],6))),128))],4)}const i=d(a,[["render",y]]),k=[i],B={install:function(t){k.forEach(s=>{t.component(s.name,s)})}};o.Vue3Step=i,o.default=B,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
