"use strict";(self.webpackChunkLabsdel_4x=self.webpackChunkLabsdel_4x||[]).push([[9506],{9506:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var n=s(7757),a=s.n(n),o=s(9671),r=s(9127),i=s(7389);function l(e,t,s,n,a,o,r){try{var i=e[o](r),l=i.value}catch(e){return void s(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function u(e){return function(){var t=this,s=arguments;return new Promise((function(n,a){var o=e.apply(t,s);function r(e){l(o,n,a,r,i,"next",e)}function i(e){l(o,n,a,r,i,"throw",e)}r(void 0)}))}}var c;const d={name:"ns-modules",props:["url","upload"],data:function(){return{modules:[],total_enabled:0,total_disabled:0}},mounted:function(){this.loadModules().subscribe()},computed:{noModules:function(){return 0===Object.values(this.modules).length},noModuleMessage:function(){return this.$slots["no-modules-message"]?this.$slots["no-modules-message"][0].text:(0,i.__)("No module has been updated yet.")}},methods:{__:i.__,download:function(e){document.location="/dashboard/modules/download/"+e.namespace},performMigration:(c=u(a().mark((function e(t,s){var n,r,i,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(){var e=u(a().mark((function e(s,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){o.ih.post("/api/nexopos/v4/modules/".concat(t.namespace,"/migrate"),{file:s,version:n}).subscribe((function(t){e(!0)}),(function(e){return o.kX.error(e.message,null,{duration:4e3}).subscribe()}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),!(s=s||t.migrations)){e.next=19;break}t.migrating=!0,e.t0=a().keys(s);case 5:if((e.t1=e.t0()).done){e.next=17;break}r=e.t1.value,i=0;case 8:if(!(i<s[r].length)){e.next=15;break}return l=s[r][i],e.next=12,n(l,r);case 12:i++,e.next=8;break;case 15:e.next=5;break;case 17:t.migrating=!1,t.migrated=!0;case 19:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)}),refreshModules:function(){this.loadModules().subscribe()},enableModule:function(e){var t=this,s="".concat(this.url,"/").concat(e.namespace,"/enable");o.ih.put(s).subscribe(function(){var e=u(a().mark((function e(s){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.kX.success(s.message).subscribe(),t.loadModules().subscribe((function(e){document.location.reload()}),(function(e){o.kX.error(e.message).subscribe()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){o.kX.error(e.message).subscribe()}))},disableModule:function(e){var t=this,s="".concat(this.url,"/").concat(e.namespace,"/disable");o.ih.put(s).subscribe((function(e){o.kX.success(e.message).subscribe(),t.loadModules().subscribe((function(e){document.location.reload()}),(function(e){o.kX.error(e.message).subscribe()}))}),(function(e){o.kX.error(e.message).subscribe()}))},loadModules:function(){var e=this;return o.ih.get(this.url).pipe((0,r.U)((function(t){return e.modules=t.modules,e.total_enabled=t.total_enabled,e.total_disabled=t.total_disabled,t})))},removeModule:function(e){var t=this;if(confirm(this.$slots["confirm-delete-module"]?this.$slots["confirm-delete-module"][0].text:'No text was provided for "confirm-delete-module" message.')){var s="".concat(this.url,"/").concat(e.namespace,"/delete");o.ih.delete(s).subscribe((function(e){t.loadModules().subscribe((function(e){document.location.reload()}))}),(function(e){o.kX.error(e.message,null,{duration:5e3}).subscribe()}))}}}};const f=(0,s(1900).Z)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-auto flex flex-col pb-4",attrs:{id:"module-wrapper"}},[s("div",{staticClass:"flex justify-between items-center"},[s("div",{staticClass:"flex justify-between items-center -mx-2"},[s("span",{staticClass:"px-2"},[s("a",{staticClass:"items-center justify-center rounded cursor-pointer text-gray-600 bg-white dark:text-slate-200 dark:bg-slate-700 shadow flex px-3 py-1 hover:bg-blue-400 hover:text-white",on:{click:function(t){return e.refreshModules()}}},[s("i",{staticClass:"las la-sync"}),e._v(" "),s("span",{staticClass:"mx-2"},[e._v(e._s(e.__("Refresh")))])])]),e._v(" "),s("span",{staticClass:"px-2"},[s("a",{staticClass:"flex items-center justify-center rounded cursor-pointer text-gray-600 bg-white shadow dark:text-slate-200 dark:bg-slate-700 px-3 py-1 hover:bg-blue-400 hover:text-white",attrs:{href:e.upload}},[s("span",[e._v(e._s(e.__("Upload")))]),e._v(" "),s("i",{staticClass:"las la-angle-right"})])])]),e._v(" "),s("div",{staticClass:"header-tabs flex -mx-4 flex-wrap"},[s("div",{staticClass:"px-4 text-xs text-blue-500 font-semibold hover:underline"},[s("a",{attrs:{href:"#"}},[e._v(e._s(e.$slots.enabled?e.$slots.enabled[0].text:e.__("Enabled"))+"("+e._s(e.total_enabled)+")")])]),e._v(" "),s("div",{staticClass:"px-4 text-xs text-blue-500 font-semibold hover:underline"},[s("a",{attrs:{href:"#"}},[e._v(e._s(e.$slots.disabled?e.$slots.disabled[0].text:e.__("Disabled"))+" ("+e._s(e.total_disabled)+")")])])])]),e._v(" "),s("div",{staticClass:"module-section flex-auto flex flex-wrap -mx-4"},[e.noModules?s("div",{staticClass:"p-4 flex-auto flex"},[s("div",{staticClass:"flex h-full flex-auto border-dashed border-2 border-gray-600 bg-white justify-center items-center"},[s("h2",{staticClass:"font-bold text-xl text-gray-700"},[e._v(e._s(e.noModuleMessage))])])]):e._e(),e._v(" "),e._l(e.modules,(function(t,n){return s("div",{key:n,staticClass:"px-4 w-full md:w-1/2 lg:w-1/3 py-4"},[s("div",{staticClass:"ns-modules rounded shadow overflow-hidden ns-box"},[s("div",{staticClass:"module-head h-40 p-2"},[s("h3",{staticClass:"font-semibold text-lg"},[e._v(e._s(t.name))]),e._v(" "),s("p",{staticClass:"text-xs flex justify-between"},[s("span",[e._v(e._s(t.author))]),e._v(" "),s("strong",[e._v("v"+e._s(t.version))])]),e._v(" "),s("p",{staticClass:"py-2 text-sm"},[e._v(e._s(t.description))])]),e._v(" "),s("div",{staticClass:"ns-box-footer border-t p-2 flex justify-between"},[t.enabled?e._e():s("ns-button",{attrs:{type:"info"},on:{click:function(s){return e.enableModule(t)}}},[e._v(e._s(e.__("Enable")))]),e._v(" "),t.enabled?s("ns-button",{attrs:{type:"success"},on:{click:function(s){return e.disableModule(t)}}},[e._v(e._s(e.__("Disable")))]):e._e(),e._v(" "),s("div",{staticClass:"flex -mx-1"},[s("div",{staticClass:"px-1 flex -mx-1"},[s("div",{staticClass:"px-1 flex"},[s("ns-button",{attrs:{type:"info"},on:{click:function(s){return e.download(t)}}},[s("i",{staticClass:"las la-archive"})])],1),e._v(" "),s("div",{staticClass:"px-1 flex"},[s("ns-button",{attrs:{type:"danger"},on:{click:function(s){return e.removeModule(t)}}},[s("i",{staticClass:"las la-trash"})])],1)])])],1)])])}))],2)])}),[],!1,null,null,null).exports}}]);