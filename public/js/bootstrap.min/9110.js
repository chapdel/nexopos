"use strict";(self.webpackChunkLabsdel_4x=self.webpackChunkLabsdel_4x||[]).push([[9110],{9110:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});const i={data:function(){return{title:"",message:""}},computed:{size:function(){return this.$popupParams.size||"h-full w-full"}},mounted:function(){var t=this;this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.$popup.event.subscribe((function(e){"click-overlay"===e.event&&(void 0!==t.$popupParams.onAction&&t.$popupParams.onAction(!1),t.$popup.close())}))},methods:{__:s(7389).__,emitAction:function(t){void 0!==this.$popupParams.onAction&&this.$popupParams.onAction(t),this.$popup.close()}}};const n=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg",class:t.size,attrs:{id:"alert-popup"}},[s("div",{staticClass:"flex items-center justify-center flex-col flex-auto p-4"},[t.title?s("h2",{staticClass:"text-3xl font-body"},[t._v(t._s(t.title))]):t._e(),t._v(" "),s("p",{staticClass:"py-4  text-center"},[t._v(t._s(t.message))])]),t._v(" "),s("div",{staticClass:"action-buttons flex border-t justify-end items-center p-2"},[s("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.emitAction(!0)}}},[t._v(t._s(t.__("Ok")))])],1)])}),[],!1,null,null,null).exports}}]);