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
    cart: Array<object>;
    totalPrice: number,
    totalCount: number
}

const state = () => ({
    cart: [],
    totalPrice: 0,
    totalCount: 0,
});


// getters
const getters = {
    cart: (state: newCartType) => {
        return state.cart
    }
};

// actions
const actions = {
    addProduct({ commit } : commitType, { ...product } : productType) {
        console.log('act', product)
        commit('addProduct', product);
    },
    resetCart({ commit } : commitType ) {
        commit('resetCart', []);
    },
    deleteProduct({commit} : commitType, { product } : productType) {
        commit('deleteProduct', product);
    }
};

// mutations
const mutations = {
    addProduct (state: cartMutation, addedProduct: any) {
        state.cart = [...state.cart, addedProduct];
        state.totalPrice += addedProduct.price;
        state.totalCount += 1;
    },
    resetCart (state: cartMutation, emptyCart: Array<any> ) {
        state.cart = emptyCart;
        state.totalPrice = 0;
        state.totalCount = 0;
    }
    /*deleteProduct (state: { cart: Array<any> }, chosenSort: object) {
        state.cart = chosenSort
    }*/
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}