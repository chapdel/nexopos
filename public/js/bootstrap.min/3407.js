"use strict";(self.webpackChunkLabsdel_4x=self.webpackChunkLabsdel_4x||[]).push([[3407],{3407:(r,t,e)=>{e.r(t),e.d(t,{default:()=>u});var i=e(7266),a=e(9671),s=e(7389);function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,i)}return e}function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}const l={name:"ns-create-coupons",mounted:function(){this.loadForm()},computed:{validTabs:function(){if(this.form){var r=[];for(var t in this.form.tabs)["selected_products","selected_categories"].includes(t)&&r.push(this.form.tabs[t]);return r}return[]},activeValidTab:function(){return this.validTabs.filter((function(r){return r.active}))[0]},generalTab:function(){var r=[];for(var t in this.form.tabs)["general"].includes(t)&&r.push(this.form.tabs[t]);return r}},data:function(){return{formValidation:new i.Z,form:{},nsSnackBar:a.kX,nsHttpClient:a.ih,options:new Array(40).fill("").map((function(r,t){return{label:"Foo"+t,value:"bar"+t}}))}},props:["submit-method","submit-url","return-url","src","rules"],methods:{setTabActive:function(r){this.validTabs.forEach((function(r){return r.active=!1})),r.active=!0},submit:function(){var r=this;if(this.formValidation.validateForm(this.form).length>0)return a.kX.error(this.$slots["error-invalid-form"]?this.$slots["error-invalid-form"][0].text:"No error message provided for having an invalid form.",this.$slots.okay?this.$slots.okay[0].text:"OK").subscribe();if(void 0===this.submitUrl)return a.kX.error(this.$slots["error-no-submit-url"]?this.$slots["error-no-submit-url"][0].text:"No error message provided for not having a valid submit url.",this.$slots.okay?this.$slots.okay[0].text:"OK").subscribe();this.formValidation.disableForm(this.form);var t=function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}({},this.formValidation.extractForm(this.form));a.ih[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,t).subscribe((function(t){if("success"===t.status)return document.location=r.returnUrl;r.formValidation.enableForm(r.form)}),(function(t){a.kX.error(t.message||(0,s.__)("An unexpected error occured."),void 0,{duration:5e3}).subscribe(),t.response&&r.formValidation.triggerError(r.form,t.response.data),r.formValidation.enableForm(r.form)}))},handleGlobalChange:function(r){this.globallyChecked=r,this.rows.forEach((function(t){return t.$checked=r}))},loadForm:function(){var r=this;a.ih.get("".concat(this.src)).subscribe((function(t){r.form=r.parseForm(t.form)}))},parseForm:function(r){r.main.value=void 0===r.main.value?"":r.main.value,r.main=this.formValidation.createFields([r.main])[0];var t=0;for(var e in r.tabs)1===t&&void 0===r.tabs[e].active&&(r.tabs[e].active=!0),r.tabs[e].active=void 0!==r.tabs[e].active&&r.tabs[e].active,r.tabs[e].fields=this.formValidation.createFields(r.tabs[e].fields),t++;return r},addOption:function(r){var t=this.options.indexOf(r);t>=0&&(this.options[t].selected=!this.options[t].selected)},removeOption:function(r){var t=r.option;r.index;t.selected=!1},getRuleForm:function(){return this.form.ruleForm},addRule:function(){this.form.rules.push(this.getRuleForm())},removeRule:function(r){this.form.rules.splice(r,1)}}};const u=(0,e(1900).Z)(l,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"form flex-auto flex flex-col",attrs:{id:"crud-form"}},[0===Object.values(r.form).length?e("div",{staticClass:"flex items-center justify-center flex-auto"},[e("ns-spinner")],1):r._e(),r._v(" "),Object.values(r.form).length>0?[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex justify-between items-center"},[e("label",{staticClass:"font-bold my-2 text-primary",attrs:{for:"title"}},[r._t("title",(function(){return[r._v("No title Provided")]}))],2),r._v(" "),e("div",{staticClass:"text-sm my-2 text-primary",attrs:{for:"title"}},[r.returnUrl?e("a",{staticClass:"rounded-full border border-tertiary hover:bg-error-primary hover:border-transparent hover:text-white bg-surface-tertiary px-2 py-1",attrs:{href:r.returnUrl}},[r._v("Return")]):r._e()])]),r._v(" "),e("div",{staticClass:"flex border-2 rounded overflow-hidden",class:r.form.main.disabled?"border-surface-quaternary":r.form.main.errors.length>0?"border-error-primary":"border-surface-secondary"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.form.main.value,expression:"form.main.value"}],staticClass:"flex-auto text-primary outline-none h-10 px-2",class:(r.form.main.disabled,"bg-surface-quaternary"),attrs:{disabled:r.form.main.disabled,type:"text"},domProps:{value:r.form.main.value},on:{blur:function(t){return r.formValidation.checkField(r.form.main)},change:function(t){return r.formValidation.checkField(r.form.main)},input:function(t){t.target.composing||r.$set(r.form.main,"value",t.target.value)}}}),r._v(" "),e("button",{staticClass:"outline-none px-4 h-10 text-white border-l border-tertia",class:r.form.main.disabled?"bg-surface-quaternary border-surface-quaternary":r.form.main.errors.length>0?"bg-error-primary border-error-secondary":"bg-surface-secondary border-surface-secondary",attrs:{disabled:r.form.main.disabled},on:{click:function(t){return r.submit()}}},[r._t("save",(function(){return[r._v("Save")]}))],2)]),r._v(" "),r.form.main.description&&0===r.form.main.errors.length?e("p",{staticClass:"text-xs text-primary py-1"},[r._v(r._s(r.form.main.description))]):r._e(),r._v(" "),r._l(r.form.main.errors,(function(t,i){return e("p",{key:i,staticClass:"text-xs py-1 text-error-primary"},[e("span",[r._t("error-required",(function(){return[r._v(r._s(t.identifier))]}))],2)])}))],2),r._v(" "),e("div",{staticClass:"-mx-4 flex flex-wrap mt-4",attrs:{id:"form-container"}},[e("div",{staticClass:"px-4 w-full md:w-1/2"},r._l(r.generalTab,(function(t,i){return e("div",{key:i,staticClass:"rounded bg-surface-tertiary shadow p-2"},r._l(t.fields,(function(r,t){return e("ns-field",{key:t,attrs:{field:r}})})),1)})),0),r._v(" "),e("div",{staticClass:"px-4 w-full md:w-1/2"},[e("div",{attrs:{id:"tabbed-card"}},[e("div",{staticClass:"flex flex-wrap",attrs:{id:"card-header"}},r._l(r.validTabs,(function(t,i){return e("div",{key:i,staticClass:"cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg text-white",class:t.active?"bg-surface-tertiary":"bg-surface-quaternary",on:{click:function(e){return r.setTabActive(t)}}},[r._v("\n                            "+r._s(t.label)+"\n                        ")])})),0),r._v(" "),e("div",{staticClass:"card-body bg-surface-tertiary rounded-br-lg rounded-bl-lg shadow p-2"},r._l(r.activeValidTab.fields,(function(r,t){return e("div",{key:t,staticClass:"flex flex-col"},[e("ns-field",{attrs:{field:r}})],1)})),0)])])])]:r._e()],2)}),[],!1,null,null,null).exports}}]);