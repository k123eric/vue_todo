(function(t){function e(e){for(var r,u,a=e[0],s=e[1],c=e[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue_todo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ee6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ToDoList")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Todo"},[n("h1",[t._v("TodoList")]),n("table",[t._m(0),t._l(t.items,(function(e){return n("tbody",{key:e.id},[n("tr",[n("th",{domProps:{textContent:t._s(e.title)}}),n("td",[n("button",{staticClass:"button",on:{click:function(n){return t.finish(e)}}},[t._v("完成")])])])])}))],2),n("br"),t._v(" 代辦:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],attrs:{type:"text"},domProps:{value:t.newItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)},input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),n("button",{on:{click:t.add}},[t._v("新增")])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",{attrs:{colspan:"2"}},[t._v("代辦事項")])])}],s=(n("d81d"),n("a434"),{name:"ToDoList",data:function(){return{items:[],id:0,same:!0}},methods:{finish:function(t){var e=this;this.items.map((function(n,r){n.id===t.id&&e.items.splice(r,1)}))},add:function(){var t=this;this.newItem?(this.items.map((function(e){e.title===t.newItem&&(window.alert("輸入相同內容!!!"),t.same=!1)})),this.same&&(this.items.push({id:this.id,title:this.newItem}),this.id++,this.newItem=""),this.same=!0):window.alert("請輸入內容")}}}),c=s,l=(n("e47f"),n("2877")),f=Object(l["a"])(c,u,a,!1,null,"75184013",null),p=f.exports,d={name:"App",components:{ToDoList:p}},m=d,h=(n("5c0b"),Object(l["a"])(m,o,i,!1,null,null,null)),v=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},e47f:function(t,e,n){"use strict";var r=n("2ee6"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9be85123.js.map