import { mount } from "@vue/test-utils";
import CartAppList from "@/components/cart/cart-app-list.vue";
import CartAppListItem from "@/components/cart/cart-app-list-item.vue";
import CartAppHeader from "@/components/cart/cart-app-header.vue";
import CartAppFooter from "@/components/cart/cart-app-footer.vue";
import { createStore } from "vuex";
import cart from "@/store/modules/cart";
import common from "@/store/modules/common";



const store = createStore( {
    modules: {
        cart,
        common
    }
});
describe('check items inside CartAppList', () => {
    it('CartAppList', () => {
        const wrapper = mount(CartAppList, {
            global: {
                plugins: [store],
                mocks: {
                    $store: {
                        state: {
                            cart: {
                                cart: {
                                    'pizza paprichi': [
                                        {name: 'pizza paprichi', price: 999},
                                        {name: 'pizza povarenok', price: 2323}
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        });
        expect(wrapper.findComponent(CartAppListItem).exists()).toBeTruthy();
    });

    it('empty CartAppList', () => {
        const wrapper = mount(CartAppList, {
            global: {
                plugins: [store],
                mocks: {
                    $store: {
                        state: {
                            cart: {
                                cart: {}
                            }
                        }
                    }
                }
            }
        });
        expect(wrapper.findComponent(CartAppListItem).exists()).toBeFalsy();
    });
});

describe('check CartAppFooter', () => {
    it('emit openModal() CartAppFooter', async () => {
        const commit = jest.fn();
        const wrapper = mount(CartAppFooter, {
            global: {
                plugins: [store]
            }
        });
        await wrapper.find('.button').trigger('click');
        await common.actions.modalAction({commit}, true);
        expect(commit).toHaveBeenCalledWith('MODAL_ACTION', true);
    });
});

describe('check CartAppHeader', () => {
    it('emit resetCart() CartAppHeader', async () => {
        const commit = jest.fn();
        const wrapper = mount(CartAppHeader, {
            global: {
                plugins: [store]
            }
        });
        await wrapper.find('.button--reset').trigger('click');
        await cart.actions.resetCart({commit});
        expect(commit).toHaveBeenCalledWith('RESET_CART', {});
        expect(commit).toHaveBeenCalledWith('RESET_LOCAL_STORAGE');
    });
});
