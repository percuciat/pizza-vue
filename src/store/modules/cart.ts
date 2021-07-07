import { ADD_PRODUCT, PLUS_PRODUCT, RESET_CART, REMOVE_PRODUCT } from '../mutationTypes';

interface commitType {
    commit: (arg0: string, arg1: any) => void
}

interface productType {
    product: any
}

interface newCartType {
    cart: Array<object>;
    type: string;
}

interface cartMutation {
    cart: any;
    totalPrice: number,
    totalCount: number
}

const state = () => ({
    cart: {},
    totalPrice: 0,
    totalCount: 0,
});


// getters
const getters = {
    cart: (state: newCartType) => {
        return state.cart
    },
    isEmptyCart: (state: any) => {
        return !Object.keys(state.cart).length
    }
};

// actions
const actions = {
    addProduct({ commit } : commitType, { ...product } : any) {
        commit('ADD_PRODUCT', product);
        commit('INCREASE_TOTAL', {
            price: product.price,
            count: 1
        });
    },
    plusProduct({ commit } : commitType, { ...product } : any){
        commit('PLUS_PRODUCT', product);
        commit('INCREASE_TOTAL', {
            price: product.price,
            count: 1
        });
    },
    minusProduct({ commit } : commitType, { ...product } : any){
        commit('MINUS_PRODUCT', product);
        commit('DECREASE_TOTAL', {
            price: product.price,
            count: 1
        });
    },
    resetCart({ commit } : commitType ) {
        commit('RESET_CART', {});
    },
    removeProduct({ commit } : commitType, obj : any) {
        commit('DECREASE_TOTAL', {
            price: obj.sum,
            count: obj.countSame
        });
        commit('REMOVE_PRODUCT', obj);
    }
};

// mutations
const mutations = {
    ADD_PRODUCT (state: cartMutation, addedProduct: any) {
        if(!state.cart[addedProduct.idP]) {
            addedProduct.countSame = 1;
            addedProduct.sum = addedProduct.price;
            // state.cart[addedProduct.idP] = new Map (addedProduct)
            state.cart[addedProduct.idP] = Array.of(addedProduct)
        } else {
            let sameProductTypeSize = state.cart[addedProduct.idP].findIndex((uniqEl: any) => {
                return uniqEl.sizeProduct === addedProduct.sizeProduct && uniqEl.typeProduct === addedProduct.typeProduct
            });
            if(~sameProductTypeSize) {
                state.cart[addedProduct.idP][sameProductTypeSize].countSame += 1;
                state.cart[addedProduct.idP][sameProductTypeSize].sum += addedProduct.price;
            } else {
                addedProduct.countSame = 1;
                addedProduct.sum = addedProduct.price;
                state.cart[addedProduct.idP].push(addedProduct)
            }
        }
        console.log('state.cart--', state.cart)
    },
    PLUS_PRODUCT(state: cartMutation, product: any) {
        state.cart[product.idP].forEach((item: any) => {
            if(item.id === product.id){
                item.countSame += 1;
                item.sum += product.price;
            }
        });
    },
    MINUS_PRODUCT(state: cartMutation, product: any) {
        state.cart[product.idP].forEach((item: any) => {
            if(item.id === product.id){
                item.countSame -= 1;
                item.sum -= product.price;
                if (!item.countSame){
                    state.cart[product.idP] = state.cart[product.idP].filter((el: any) => el.id !== product.id);
                    if (!state.cart[product.idP].length){
                        delete state.cart[product.idP]
                    }
                }
            }
        });
    },
    RESET_CART (state: cartMutation, emptyCart: object ) {
        state.cart = emptyCart;
        state.totalPrice = 0;
        state.totalCount = 0;
    },
    REMOVE_PRODUCT (state: cartMutation, product: any) {
        state.cart[product.idP] = state.cart[product.idP].filter((el: any) => el.id !== product.id);
        if (!state.cart[product.idP].length){
            delete state.cart[product.idP]
        }
    },
    INCREASE_TOTAL (state: cartMutation, obj: any){
        state.totalPrice += obj.price;
        state.totalCount += obj.count;
    },
    DECREASE_TOTAL (state: cartMutation, obj: any){
        state.totalPrice -= obj.price;
        state.totalCount -= obj.count;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}