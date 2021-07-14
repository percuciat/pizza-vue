import { shallowMount, mount } from '@vue/test-utils';
import { createStore } from "vuex";
import common from '@/store/modules/common';
import product from '@/store/modules/product';
import cart from '@/store/modules/cart';
import filter from '@/store/modules/filter';

import ContentApp from '@/components/content/content-app.vue';
import ContentCategory from '@/components/content/content-category.vue';
import ContentSort from '@/components/content/content-sort.vue';
import ContentAppProduct from '@/components/content/content-app-product.vue';
import ContentAppProductLoading from '@/components/content/content-app-product-loading.vue';
import { ContentLoader } from 'vue-content-loader'

const store = createStore( {
    modules: {
        filter,
        product,
        cart,
        common
    }
});

describe('init Components', () => {
    it('ContentApp', () => {
        const wrapper = mount(ContentApp, {
            global: {
                plugins: [store]
            }
        });

        expect(wrapper.findComponent(ContentCategory).exists()).toBeTruthy();
        expect(wrapper.findComponent(ContentSort).exists()).toBeTruthy();
        expect(wrapper.findComponent(ContentAppProductLoading).exists()).toBeTruthy();
        expect(wrapper.findComponent(ContentAppProduct).exists()).toBeFalsy();
    });

    it('ContentAppProductLoading', () => {
        const wrapper = mount(ContentAppProductLoading);
        expect(wrapper.findComponent(ContentLoader).exists()).toBeTruthy();
    });
});
