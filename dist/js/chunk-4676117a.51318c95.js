(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4676117a"],{"159b":function(t,e,r){var o=r("da84"),n=r("fdbc"),a=r("17c2"),c=r("9112");for(var i in n){var s=o[i],f=s&&s.prototype;if(f&&f.forEach!==a)try{c(f,"forEach",a)}catch(u){f.forEach=a}}},"17c2":function(t,e,r){"use strict";var o=r("b727").forEach,n=r("a640"),a=n("forEach");t.exports=a?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"49ab":function(t,e,r){"use strict";r("f225")},"4de4":function(t,e,r){"use strict";var o=r("23e7"),n=r("b727").filter,a=r("1dde"),c=a("filter");o({target:"Array",proto:!0,forced:!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},a3cb:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"createProposal"},[r("rainbow-nav-new"),r("div",{staticClass:"rainbow-panel"},[r("div",{staticClass:"title"},[t._v(" Create Proposal ")]),r("div",{staticClass:"content"},[r("div",{staticClass:"proposal-form"},[r("div",{staticClass:"item"},[r("div",{staticClass:"item-title"},[t._v(" Name ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),r("div",{staticClass:"item"},[r("div",{staticClass:"item-title"},[t._v(" Content ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.desc,expression:"form.desc"}],attrs:{rows:"10",cols:"60"},domProps:{value:t.form.desc},on:{input:function(e){e.target.composing||t.$set(t.form,"desc",e.target.value)}}})]),r("div",{staticClass:"btn-box"},[r("div",{staticClass:"sub-btn",on:{click:t.createProposal}},[t._v(" Create ")])])])])]),r("pageFooter")],1)},n=[],a=r("5530"),c=r("2f62"),i={name:"createProposal",data:function(){return{form:{}}},computed:Object(a["a"])({},Object(c["b"])(["account","isConnected"])),methods:{createProposal:function(){var t=this;this.form.transaction={calle:this.account},this.$store.dispatch("proposal/propose",this.form).then((function(){t.$router.push({name:"Proposal"})}))}}},s=i,f=(r("49ab"),r("2877")),u=Object(f["a"])(s,o,n,!1,null,"19b4b567",null);e["default"]=u.exports},b64b:function(t,e,r){var o=r("23e7"),n=r("7b0b"),a=r("df75"),c=r("d039"),i=c((function(){a(1)}));o({target:"Object",stat:!0,forced:i},{keys:function(t){return a(n(t))}})},dbb4:function(t,e,r){var o=r("23e7"),n=r("83ab"),a=r("56ef"),c=r("fc6a"),i=r("06cf"),s=r("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,o=c(t),n=i.f,f=a(o),u={},l=0;while(f.length>l)r=n(o,e=f[l++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var o=r("23e7"),n=r("d039"),a=r("fc6a"),c=r("06cf").f,i=r("83ab"),s=n((function(){c(1)})),f=!i||s;o({target:"Object",stat:!0,forced:f,sham:!i},{getOwnPropertyDescriptor:function(t,e){return c(a(t),e)}})},f225:function(t,e,r){}}]);
//# sourceMappingURL=chunk-4676117a.51318c95.js.map