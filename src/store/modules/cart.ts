import { ADD_PRODUCT, PLUS_PRODUCT, RESET_CART, REMOVE_PRODUCT, RESET_LOCAL_STORAGE } from '../mutationTypes';

interface commitType {
    commit: (arg0: string, arg1: any) => void
}

interface totalMutation {
    totalPrice: number,
    totalCount: number,
}

interface newCartType {
    cart: Array<object>;
    type: string;
}

interface cartMutation {
    cart: any;
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
    },
};

// actions
const actions = {
    initLocalStorageCart({commit} : any) {
        commit('INIT_LOCAL_STORAGE');
    },
    addProduct({ commit } : any, { ...product } : any) {
        commit('ADD_PRODUCT', product);
        commit('INCREASE_TOTAL', {
            price: product.price,
            count: 1
        });
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    },
    plusProduct({ commit } : any, { ...product } : any){
        commit('PLUS_PRODUCT', product);
        commit('INCREASE_TOTAL', {
            price: product.price,
            count: 1
        });
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    },
    minusProduct({ commit } : any, { ...product } : any){
        commit('MINUS_PRODUCT', product);
        commit('DECREASE_TOTAL', {
            price: product.price,
            count: 1
        });
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    },
    resetCart({ commit } : any ) {
        commit('RESET_CART', {});
        commit('RESET_LOCAL_STORAGE');
    },
    removeProduct({ commit } : any, obj : any) {
        commit('DECREASE_TOTAL', {
            price: obj.sum,
            count: obj.countSame
        });
        commit('REMOVE_PRODUCT', obj);
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
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
    },
    PLUS_PRODUCT(state: cartMutation, product: any) {
        state.cart[product.idP].forEach((item: any) => {
            if(item.id === product.id){
                item.countSame += 1;
                item.sum += product.price;
            }
        });
        console.log('state.cart--', state.cart)
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
    RESET_CART (state: any, emptyCart: object ) {
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
    INCREASE_TOTAL (state: totalMutation, obj: any){
        state.totalPrice += obj.price;
        state.totalCount += obj.count;
    },
    DECREASE_TOTAL (state: totalMutation, obj: any){
        state.totalPrice -= obj.price;
        state.totalCount -= obj.count;
    },
    SET_LOCAL_STORAGE_CART (state: cartMutation) {
        localStorage.setItem('list-cart', JSON.stringify(state.cart));
    },
    SET_LOCAL_STORAGE_TOTAL(state: any){
        localStorage.setItem('list-sum', JSON.stringify({price: state.totalPrice, totalCount: state.totalCount}));
    },
    RESET_LOCAL_STORAGE(state: any){
        localStorage.clear();
    },
    INIT_LOCAL_STORAGE(state: any){
        const items = localStorage.getItem('list-cart');
        const sum = localStorage.getItem('list-sum');
        state.cart = items ? JSON.parse(<string>items) : {};
        state.totalPrice = sum ? JSON.parse(<string>sum).price : 0;
        state.totalCount = sum ? JSON.parse(<string>sum).totalCount : 0;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}