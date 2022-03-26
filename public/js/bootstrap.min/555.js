"use strict";(self.webpackChunk_Labsdel_Gescom=self.webpackChunk_Labsdel_Gescom||[]).push([[555],{7555:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(7757),o=r.n(n),s=r(381),i=r.n(s),a=r(1544),l=r(9314),u=r(9671),c=r(7389),p=r(3472);function f(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t,r,n,o,s,i){try{var a=e[s](i),l=a.value}catch(e){return void r(e)}a.done?t(l):Promise.resolve(l).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function i(e){b(s,n,o,i,a,"next",e)}function a(e){b(s,n,o,i,a,"throw",e)}i(void 0)}))}}const _={name:"ns-sale-report",data:function(){return{startDate:i()(),endDate:i()(),result:[],users:[],summary:{},selectedUser:"",reportType:{label:(0,c.__)("Report Type"),name:"reportType",type:"select",value:"categories_report",options:[{label:(0,c.__)("Categories Detailed"),name:"categories_report"},{label:(0,c.__)("Categories Summary"),name:"categories_summary"},{label:(0,c.__)("Products"),name:"products_report"}],description:(0,c.__)("Allow you to choose the report type.")},filterUser:{label:(0,c.__)("Filter User"),name:"filterUser",type:"select",value:"",options:[],description:(0,c.__)("Allow you to choose the report type.")},field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:a.Z,nsDateTimePicker:l.Z},computed:{},methods:{printSaleReport:function(){this.$htmlToPaper("sale-report")},setStartDate:function(e){this.startDate=e.format()},openSettings:function(){var e=this;return y(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(t,r){Popup.show(p.Z,h(h({},e.reportType),{},{resolve:t,reject:r}))}));case 3:r=t.sent,e.reportType.value=r[0].name,e.result=[],e.loadReport(),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},openUserFiltering:function(){var e=this;return y(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(t,r){u.ih.get("/api/nexopos/v4/users").subscribe({next:function(n){e.users=n,e.filterUser.options=[{label:(0,c.__)("All Users"),value:""}].concat(f(e.users.map((function(e){return{label:e.username,value:e.id}})))),Popup.show(p.Z,h(h({},e.filterUser),{},{resolve:t,reject:r}))},error:function(e){u.kX.error((0,c.__)("No user was found for proceeding the filtering.")),r(e)}})}));case 3:r=t.sent,e.selectedUser=r[0].label,e.filterUser.value=r[0].value,e.result=[],e.loadReport(),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getType:function(e){var t=this.reportType.options.filter((function(t){return t.name===e}));return t.length>0?t[0].label:(0,c.__)("Unknown")},loadReport:function(){var e=this;if(null===this.startDate||null===this.endDate)return u.kX.error((0,c.__)("Unable to proceed. Select a correct time range.")).subscribe();var t=i()(this.startDate);if(i()(this.endDate).isBefore(t))return u.kX.error((0,c.__)("Unable to proceed. The current time range is not valid.")).subscribe();u.ih.post("/api/nexopos/v4/reports/sale-report",{startDate:this.startDate,endDate:this.endDate,type:this.reportType.value,user_id:this.filterUser.value}).subscribe({next:function(t){e.result=t.result,e.summary=t.summary},error:function(e){u.kX.error(e.message).subscribe()}})},computeTotal:function(e,t){return e.length>0?e.map((function(e){return parseFloat(e[t])})).reduce((function(e,t){return e+t})):0},setEndDate:function(e){this.endDate=e.format()}}},g=_;const w=(0,r(1900).Z)(g,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},3472:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8603),o=r(7389);const s={data:function(){return{value:[],options:[],label:null,type:"select"}},computed:{},mounted:function(){this.popupCloser(),this.value=this.$popupParams.value||[],this.options=this.$popupParams.options,this.label=this.$popupParams.label,this.type=this.$popupParams.type||this.type},methods:{popupCloser:n.Z,__:o.__,toggle:function(e){var t=this.value.indexOf(e);-1===t?this.value.unshift(e):this.value.splice(t,1)},isSelected:function(e){return this.value.indexOf(e)>=0},close:function(){this.$popupParams.reject(!1),this.$popup.close()},select:function(e){void 0!==e&&(this.value=[e]),this.$popupParams.resolve(this.value),this.close()}}};const i=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shadow-xl ns-box w-6/7-screen md:w-4/7-screen lg:w-3/7-screen overflow-hidden"},[r("div",{staticClass:"p-2 flex justify-between border-b items-center ns-box-header"},[r("span",{staticClass:"text-semibold text-primary"},[e._v("\n            "+e._s(e.label)+"\n        ")]),e._v(" "),r("div",[r("ns-close-button",{on:{click:function(t){return e.close()}}})],1)]),e._v(" "),r("div",{staticClass:"flex-auto overflow-y-auto"},[r("ul",{staticClass:"ns-vertical-menu"},["select"===e.type?e._l(e.options,(function(t){return r("li",{key:t.value,staticClass:"p-2 border-b border-box-edge text-primary cursor-pointer",on:{click:function(r){return e.select(t)}}},[e._v(e._s(t.label))])})):e._e(),e._v(" "),"multiselect"===e.type?e._l(e.options,(function(t){return r("li",{key:t.value,staticClass:"p-2 border-b text-primary cursor-pointer",class:e.isSelected(t)?"active":"",on:{click:function(r){return e.toggle(t)}}},[e._v(e._s(t.label))])})):e._e()],2)]),e._v(" "),"multiselect"===e.type?r("div",{staticClass:"flex justify-between"},[r("div"),e._v(" "),r("div",[r("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.select()}}},[e._v(e._s(e.__("Select")))])],1)]):e._e()])}),[],!1,null,null,null).exports}}]);