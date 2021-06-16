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
    addProduct({ commit } : commitType, { ...product } : productType) {
        commit('addProduct', product);
    },
    plusProduct({ commit } : commitType, { ...product } : productType){
        commit('plusProduct', product);

    },
    resetCart({ commit } : commitType ) {
        commit('resetCart', {});
    },
    deleteProduct({commit} : commitType, { id } : any) {
        commit('deleteProduct', id);
    }
};

// mutations
const mutations = {
    addProduct (state: cartMutation, addedProduct: any) {
        state.cart[addedProduct.idP] ?
            state.cart[addedProduct.idP].push(addedProduct) :
           state.cart[addedProduct.idP] = Array.of(addedProduct);
        state.totalPrice += addedProduct.price;
        state.totalCount += 1;
    },
    plusProduct(state: cartMutation, newProduct: any) {
        console.log('product', newProduct)
        state.totalPrice += newProduct.price;
        state.totalCount += 1;
    },
    resetCart (state: cartMutation, emptyCart: object ) {
        state.cart = emptyCart;
        state.totalPrice = 0;
        state.totalCount = 0;
    },
    deleteProduct (state: { cart: any }, idCollection: number) {
        delete state.cart[idCollection];
        state.cart;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}