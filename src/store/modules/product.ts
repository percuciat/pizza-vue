import api from '@/api';
import { LOADING_STATUS, LOAD_PRODUCTS } from '../mutationTypes';


interface IState {
    products?: Array<any>;
    isLoad?: boolean;
}

interface ProductsApi {
    commit: (arg0: string, arg1: any) => void
    rootState: {filter : {sortActive : string, sortOrder : string, categoryActive: null | number}}
}

const state = (): IState => ({
    products: [],
    isLoad: true
});

const getters = {
    isLoad: (state: IState) => {
        return state.isLoad
    },
    products: (state: IState) => {
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
    LOAD_PRODUCTS (state: IState, productsFromApi: Array<object>) {
        state.products = productsFromApi
    },
    LOADING_STATUS (state: IState, newLoadingStatus: boolean) {
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