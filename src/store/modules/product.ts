import api from '@/api'
import { LOADING_STATUS, LOAD_PRODUCTS } from '../mutationTypes'


interface Load {
    isLoad: Boolean;
    type: string;
}
interface Products {
    products: Array<object>;
    type: string;
}
interface ProductsApi {
    commit: (arg0: string, arg1: any) => void
    rootState: {filter : {sortActive : string, sortOrder : string, categoryActive: any}}
}

const state = () => ({
    products: [],
    isLoad: true
});

const getters = {
    isLoad: (state: Load) => {
        return state.isLoad
    },
    products: (state: Products) => {
        return state.products
    }
};

const actions = {
    async getProductsApi({ commit, rootState: { filter }}: ProductsApi) {
        commit('LOADING_STATUS', true);
        return api.getDataProduct({
            category: filter.categoryActive,
            type: filter.sortActive,
            order: filter.sortOrder
        }).then((r) => {
            commit('LOAD_PRODUCTS', r);
        }).finally(() =>  {
            commit('LOADING_STATUS', false)
        })
    }
};

// mutations
const mutations = {
    LOAD_PRODUCTS (state: { products: Array<any>; }, productsFromApi: Array<object>) {
        state.products = productsFromApi
    },
    LOADING_STATUS (state: { isLoad: Boolean; }, newLoadingStatus: Boolean) {
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