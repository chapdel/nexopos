"use strict";(self.webpackChunk_Labsdel_Gescom=self.webpackChunk_Labsdel_Gescom||[]).push([[418],{2418:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t(9698),n=t(2277),r=t(9671),a=t(7389);const l={name:"ns-permissions",filters:[i.b],data:function(){return{permissions:[],toggled:!1,roles:[]}},mounted:function(){this.loadPermissionsAndRoles()},methods:{__:a.__,selectAllPermissions:function(e){var s=new Object;if(s[e.namespace]=new Object,!e.locked||e.locked&&confirm(this.$slots["bulk-edit-system-role"]?this.$slots["bulk-edit-system-role"][0].text:'No message has been provided for "bulk-edit-system-role"')){for(var t in e.fields)e.fields[t].value=e.field.value,s[e.namespace][t]=e.field.value;r.ih.put("/api/nexopos/v4/users/roles",s).subscribe((function(e){r.kX.success(e.message,null,{duration:3e3}).subscribe()}))}else e.field.value=!e.field.value},submitPermissions:function(e,s){var t=new Object;t[e.namespace]=new Object,t[e.namespace][s.name]=s.value,r.ih.put("/api/nexopos/v4/users/roles",t).subscribe((function(e){r.kX.success(e.message,null,{duration:3e3}).subscribe()}))},loadPermissionsAndRoles:function(){var e=this;return(0,n.D)(r.ih.get("/api/nexopos/v4/users/roles"),r.ih.get("/api/nexopos/v4/users/permissions")).subscribe((function(s){e.permissions=s[1],e.roles=s[0].map((function(s){return s.fields={},s.field={type:"checkbox",name:s.namespace,value:!1},e.permissions.forEach((function(e){s.fields[e.namespace]={type:"checkbox",value:s.permissions.filter((function(s){return s.namespace===e.namespace})).length>0,name:e.namespace,label:null}})),s}))}))}}};const o=(0,t(1900).Z)(l,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"permission-wrapper"}},[t("div",{staticClass:"rounded shadow ns-box flex"},[t("div",{staticClass:"w- bg-gray-800 flex-shrink-0",attrs:{id:"permissions"}},[t("div",{staticClass:"h-24 py-4 px-2 border-b border-gray-700 text-gray-100 flex justify-between items-center"},[e.toggled?e._e():t("span",[e._v(e._s(e.__("Permissions")))]),e._v(" "),t("div",[e.toggled?e._e():t("button",{staticClass:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center",on:{click:function(s){e.toggled=!e.toggled}}},[t("i",{staticClass:"las la-expand"})]),e._v(" "),e.toggled?t("button",{staticClass:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center",on:{click:function(s){e.toggled=!e.toggled}}},[t("i",{staticClass:"las la-compress"})]):e._e()])]),e._v(" "),e._l(e.permissions,(function(s){return t("div",{key:s.id,staticClass:"p-2 border-b border-gray-700 text-gray-100",class:e.toggled?"w-24":"w-54"},[t("a",{attrs:{href:"javascript:void(0)",title:s.namespace}},[e.toggled?e._e():t("span",[e._v(e._s(s.name))]),e._v(" "),e.toggled?t("span",[e._v(e._s(e._f("truncate")(s.name,5)))]):e._e()])])}))],2),e._v(" "),t("div",{staticClass:"flex flex-auto overflow-hidden"},[t("div",{staticClass:"overflow-y-auto"},[t("div",{staticClass:"text-gray-700 flex"},e._l(e.roles,(function(s){return t("div",{key:s.id,staticClass:"h-24 py-4 px-2 w-56 items-center border-b justify-center flex role flex-shrink-0 border-r border-table-th-edge"},[t("p",{staticClass:"mx-1"},[t("span",[e._v(e._s(s.name))])]),e._v(" "),t("span",{staticClass:"mx-1"},[t("ns-checkbox",{attrs:{field:s.field},on:{change:function(t){return e.selectAllPermissions(s)}}})],1)])})),0),e._v(" "),e._l(e.permissions,(function(s){return t("div",{key:s.id,staticClass:"permission flex"},e._l(e.roles,(function(i){return t("div",{key:i.id,staticClass:"border-b border-table-th-edge w-56 flex-shrink-0 p-2 flex items-center justify-center border-r"},[t("ns-checkbox",{attrs:{field:i.fields[s.namespace]},on:{change:function(t){return e.submitPermissions(i,i.fields[s.namespace])}}})],1)})),0)}))],2)])])])}),[],!1,null,null,null).exports}}]);