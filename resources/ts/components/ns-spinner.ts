import Vue from 'vue';
const nsSpinner     =   Vue.component( 'ns-spinner', {
    data: () => {
        return {
        }
    },
    mounted() {
    },
    computed: {
        validatedSize() {
            return this.size || 24;
        },
        validatedBorder() {
            return this.border || 8;
        },
        validatedAnimation() {
            return this.animation || 'fast';
        }
    },
    props: [ 'color', 'size', 'border' ],
    template: `
    <div class="flex items-center justify-center">
    <div class="loader ease-linear rounded-full border-gray-200" :class="validatedAnimation + ' border-4 border-t-4' + ' w-' + validatedSize + ' h-' + validatedSize"></div>
    </div>
    `,
});

export { nsSpinner }