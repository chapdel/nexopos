"use strict";(self.webpackChunkLabsdel_4x=self.webpackChunkLabsdel_4x||[]).push([[8934],{8934:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const o={name:"ns-pos-product-price-product",components:{nsNumpad:s(6817).Z},computed:{},data:function(){return{product:{}}},mounted:function(){this.popupCloser(),this.product=this.$popupParams.product},methods:{popupResolver,popupCloser,__,updateProductPrice:function(t){this.product.unit_price=t},resolveProductPrice:function(t){this.popupResolver(this.product.unit_price)}}};const r=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-surface-tertiary shadow-lg w-95vw md:w-3/5-screen lg:w-2/5-screen"},[s("div",{staticClass:"popup-heading"},[s("h3",[t._v(t._s(t.__("Product Price")))]),t._v(" "),s("div",[s("ns-close-button",{on:{click:function(e){return t.popupResolver(!1)}}})],1)]),t._v(" "),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"h-16 flex items-center justify-center bg-gray-800 text-white font-bold"},[s("h2",{staticClass:"text-2xl"},[t._v(t._s(t._f("currency")(t.product.unit_price)))])]),t._v(" "),s("div",{staticClass:"p-2"},[s("ns-numpad",{attrs:{floating:!0,value:t.product.unit_price},on:{changed:function(e){return t.updateProductPrice(e)},next:function(e){return t.resolveProductPrice(e)}}})],1)])])}),[],!1,null,null,null).exports}}]);