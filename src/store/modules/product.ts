import api from '@/api'

const state = () => ({
    products: [],
    isLoad: true
});

interface Load {
    isLoad: Boolean;
    type: string;
}
interface Products {
    products: Array<object>;
    type: string;
}

const getters = {
    isLoad: (state: Load) => {
        return state.isLoad
    },
    products: (state: Products) => {
        return state.products
    }
};

const actions = {
    async getProductsApi(context: { commit: (arg0: string, arg1: any) => void; }, payload: any) {
        context.commit('loadingStatus', true);
        console.log('load')
        return api.getDataProduct(payload).then(r => {
            console.log('r---', r)
            context.commit('loadingStatus', false);
            context.commit('getProductsApi', r);
        })

    },
};

// mutations
const mutations = {
    getProductsApi (state: { products: Array<any>; }, productsFromApi: Array<object>) {
        state.products = productsFromApi
    },
    loadingStatus (state: { isLoad: Boolean; }, newLoadingStatus: Boolean) {
        state.isLoad = newLoadingStatus
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}